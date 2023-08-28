function goodJob(searchText = "13") {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
  // displayPhones(phones)
}

const displayPhones = (phones) => {
  // step no 1
  const phoneContainar = document.getElementById("phone-containar");

  //   clear phone containar and add new phn name serch

  phoneContainar.textContent = "";

  // display show all button  when there ar more then 12 phones
  // const showAllContainar = document.getElementById("show-all-containar");
  // if(phones.length > 30){
  //     showAllContainar.classList.remove('hidden')
  // }
  // else{
  //      showAllContainar.classList.add("hidden");
  // }

  // how many phone we show in oure websid

  phones = phones.slice(0, 30);

  phones.forEach((phone) => {
    // console.log(phone);
    // 2 : create a div

    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-white   p-4 shadow-xl`;

    // step no 3 :

    phoneCard.innerHTML = `
              <figure ><img src="${phone.image}"alt="Shoes" /></figure>
                    <div class="card-body items-center">
                         <h2 class="card-title">${phone.phone_name}</h2>
                        <p></p>
                        <div class="card-actions justify-center">
                            <button onclick= "handelShowDetails('${phone.slug}')" class="btn btn-primary ">Show Details</button>
                        </div>
                    </div>
        `;
    //  step 4 : appaind chaild
    phoneContainar.appendChild(phoneCard);
  });
};

const handelShowDetails = async (id) => {
  console.log("Show Details", id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  showPhnoneDitails(phone);
};

const showPhnoneDitails = (phone) => {
  const phoneName = document.getElementById("show-ditails-phone-name");
  phoneName.innerText = phone.name;

  const showDitailsContainar = document.getElementById(
    "show-ditails-containar"
  );
  showDitailsContainar.innerHTML = `
  <img class="pl-32 pb-8 pt-6" src="${phone.image}" alt="">
  <p><span>storage:</span>${phone.mainFeatures.storage}</p>
  <p><span></span>${phone.mainFeatures.chipSet}</p>
  <p><span></span>${phone.mainFeatures.displaySize}</p>
  <p><span></span>${phone.releaseDate}</p>
  <p><span>GPS</span>${phone?.others?.GPS || "No GPS"}</p>
  `;

  Show_Details_modal.showModal();

  console.log(phone);
};

//  handel search button add

const handelSearch = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  goodJob(searchText);
};

const togglLoddingSpinner = () => {
  const loadingSpinner = document.getElementById("loading-spinner");
  loadingSpinner.classList.remove("hidden");
};

goodJob();
