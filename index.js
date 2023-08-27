function goodJob(searchText) {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
  // displayPhones(phones)
}

const displayPhones = (phones) => {
  // step no 1
  const phoneContainar = document.getElementById("phone-containar");

//   clear phone containar and add new phn name serch

phoneContainar.textContent = '';

// display show all button  when there ar more then 12 phones
const showAllContainar = document.getElementById("show-all-containar");
if(phones.length > 12){
    showAllContainar.classList.remove('hidden')
}
else{
     showAllContainar.classList.add("hidden");
}

// how many phone we show in oure websid

phones = phones.slice(0,12)

  phones.forEach((phone) => {
    // console.log(phone);
    // 2 : create a div

    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100  p-4 shadow-xl`;

    // step no 3 :

    phoneCard.innerHTML = `
              <figure><img src="${phone.image}"alt="Shoes" /></figure>
                    <div class="card-body items-center">
                         <h2 class="card-title">${phone.phone_name}</h2>
                        <p>${phone.slug}</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary ">Buy Now</button>
                        </div>
                    </div>
        `;
    //  step 4 : appaind chaild
    phoneContainar.appendChild(phoneCard);
  });
};

//  handel search button add

const handelSearch = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText)
    goodJob(searchText)
    
    
}

const togglLoddingSpinner = () => {
    const loadingSpinner = document.getElementById("loading-spinner");
    loadingSpinner.classList.remove ('hidden')
}

// goodJob();
