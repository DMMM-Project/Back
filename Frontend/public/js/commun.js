const BASE_URL = "https://192.168.1.105:8443/api";
const BASE_URL_FRONT = "https://192.168.1.105:8443";
const login = 0;
const signup = 1;


let authenticated = false;
let url = document.location.href;
const parts = url.split(/[\s/]+/);
const currentPage = parts[parts.length - 1];
let currentForm = login;

let userButton = document.querySelector('.user');
let loginButton = document.querySelector('.login');
let logoutButton = document.querySelector('.logout');


let phoneInputs = document.querySelectorAll('input[name="telephone"]');
let passwordInputs = document.querySelectorAll('input[name="password"]');
let toggleButtons = document.querySelectorAll('.info-item .btn');
let formLogin = document.querySelector('.log-in');
let formSignup = document.querySelector('.sign-up');
let nextButton = document.querySelector('.first .btn');
let backButton = document.querySelector('.back');
let validateButtons = document.querySelectorAll('.container-form .validate');
let cards = document.querySelector('.cards__products');




/**************************** Set settings form content ****************************/


phoneInputs.forEach((input) => {
  input.maxLength = 14;
  input.minLength = 10;
});

passwordInputs.forEach((input) => {
  input.minLength = 8;
  input.maxLength = 16;
});


/*********************************** Animations ***********************************/

function toggleForm() {
  let container = document.querySelector('.container');
  container.classList.toggle('log-in');
  if(currentForm === login) {
    currentForm = signup;
  } else {
    currentForm = login;
  }
}

function validateAnimation() {
  let container = document.querySelector('.container');
  container.classList.add("active");
  setTimeout(() => {
    container.classList.remove("active");
  } , 2000);
}

function checkValidityFirstForm() {
  let firstInuput = document.querySelectorAll('.first input');
  let isValid = true;
  firstInuput.forEach((input) => {
    if (! input.checkValidity()) {
      isValid = false;
    }
  });
  return isValid;
}

function nextForm() {
  formSignup.reportValidity();
  if (! checkValidityFirstForm()) {
    return;
  }

  let firstForm = document.querySelector('.first');
  firstForm.style.display = "none";
  let lastForm = document.querySelector('.last');
  lastForm.style.display = "block";
}

function previousForm() {
  let firstForm = document.querySelector('.first');
  firstForm.style.display = "block";
  let lastForm = document.querySelector('.last');
  lastForm.style.display = "none";
}

for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', toggleForm);
}

nextButton.addEventListener('click', nextForm);
backButton.addEventListener('click', previousForm);


/********************************** init nav bar **********************************/

function goToPage(destination) {
  if(authenticated === false && destination !== "") {
    showForms();
    return;
  }
  console.log(BASE_URL_FRONT + "/" + destination);
  window.location.assign(BASE_URL_FRONT + "/" + destination);
}

function hideForms() {
  document.querySelector('.overlay').style.display = 'none';
  document.body.style.overflow = 'visible';
}

function showForms() {
  document.querySelector('.overlay').style.display = 'block';
  document.body.style.overflow = 'hidden'
}

loginButton.addEventListener('click', () => {
  showForms();
});

logoutButton.addEventListener('click', (event) => {
  localStorage.setItem("token", null);
  location.reload();
});

document.querySelector('.close').addEventListener('click', (event) => {
  hideForms();
});

document.querySelector('.survey').addEventListener('click', (event) => {
  goToPage("survey");
});

document.querySelector('.results').addEventListener('click', (event) => {
  goToPage("results");
});

document.querySelector('.home').addEventListener('click', (event) => {
  goToPage("");
});

const menuHamburger = document.querySelector(".menu-hamburger")
const topNav = document.querySelector(".topnav")

menuHamburger.addEventListener('click',()=>{
  topNav.classList.toggle('mobile-menu')
})

/********************************* Results display *********************************/


let averageNutriscore = 0;

function getNumeroNutriscore(nutriscore) {
  switch(nutriscore) {
    case "A":
      return 1;
    case "B":
      return 2;
    case "C":
      return 3;
    case "D":
      return 4;
    case "E":
      return 5;
    default:
      return 0;
  }
}

let averageNutriscoreValue = 0;

function updateAverageNutriscore() {
  if(averageNutriscore/surveyResult.length < 1) {
    averageNutriscoreValue = "A";
  } else if(averageNutriscore/surveyResult.length < 2) {
    averageNutriscoreValue = "B";
  } else if(averageNutriscore/surveyResult.length < 3) {
    averageNutriscoreValue = "C";
  } else if(averageNutriscore/surveyResult.length < 4) {
    averageNutriscoreValue = "D";
  } else {
    averageNutriscoreValue = "E";
  }
  document.querySelector('.average-image').src = `./img/Nutri-score-${averageNutriscoreValue}.svg`;
}

class Food {
  constructor(food) {
    this.food = [
      `Graisses saturées : ${food["AG saturés (g/100 g)"] == -1 ? "0" : food["AG saturés (g/100 g)"]}`, 
      `Sucres simples : ${food["Sucres (g/100 g)"] == -1 ? "0" : food["Sucres (g/100 g)"]}`, 
      `Sodium (mg/100g) : ${food["Sel chlorure de sodium (g/100 g)"] == -1 ? "0" : food["Sel chlorure de sodium (g/100 g)"]}`,
      `Fibres : ${food["Fibres alimentaires (g/100 g)"] == -1 ? "0" : food["Fibres alimentaires (g/100 g)"]}`,
      `Protéines : ${food["Protéines, N x 625 (g/100 g)"] == -1 ? "0" : food["Protéines, N x 625 (g/100 g)"]}`,
      `Eau : ${food["Eau (g/100 g)"] == -1 ? "0" : food["Eau (g/100 g)"]}`
    ];

    this.name = food["alim_nom_fr"];
    this.nutriscore = food["NutriScore Calculé"];
    averageNutriscore += getNumeroNutriscore(this.nutriscore);
    updateAverageNutriscore();
    this.addHtml();
  }

  addHtml() {
    cards.innerHTML += `<div class="card">
      <div class="card__side card__side--front-1">
        <div class="card__cta">
          <img src="img/Nutri-score-${this.nutriscore}.svg" alt="" class="image-nutri-score">
          <h4 class="card__product__name ">${this.name}</h4>
        </div>
      </div>
      <div class="card__side card__side--back card__side--back-1">
        <div class="card__cta">
          <div class="card__title">
            <h4 class="card__heading">Details (en g/100g)</h4>
          </div>
          <div class="card__details">
            <ul>
              <li>${this.food[0]}</li>
              <li>${this.food[1]}</li>
              <li>${this.food[2]}</li>
              <li>${this.food[3]}</li>
              <li>${this.food[4]}</li>
              <li>${this.food[5]}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;
  }
}


/******************************** function To Store ********************************/


function setUserName(json) {
  if(json.error == null) {
    authenticated = true;
    loginButton.classList.add("hidden");
    logoutButton.classList.remove("hidden");
  } else {
    authenticated = false;
    loginButton.classList.remove("hidden");
    logoutButton.classList.add("hidden");
    return;
  }
  if(localStorage.getItem("token") != null) {
    userButton.innerText = json.data.username;
  }
}

function storeToken(json) {
  localStorage.setItem("token", json.data.token);
  setUserName(json);
}

let surveyResult = [];

function storeSurveyResult(json) {
  surveyResult = json.data.aliments;
  surveyResult.forEach((aliment) => {
    getInfoAliment({alim_code: aliment});
  });
}

tabFood = [];

function storeAlimentInfo(json) {
  new Food(json.data.food);
}


/************************************ fetch api ************************************/

  
async function addResultInTab(path, params ,data, functionToStore, tabResult, apiMethod) {
  const urlParams = new URLSearchParams(params);
  let urlToFetch = BASE_URL + path;
  if(params !== undefined) {
    urlToFetch += "?" + urlParams;
  }

  await fetch(urlToFetch, {
    method: apiMethod,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(data)
  })
    .then(resp => {
      return resp.json();
    })
    .then(json => {
      if (json.error != null && json.error !== "Unauthorized") {
        error = json.error;
        return alert(error);
      }
      functionToStore(json, tabResult);
    })
    .catch(err => {
      error = err
      return;
    });
}


/************************************ api calls ************************************/


async function postForm(bodyContent, path) {
  await addResultInTab(path, undefined, bodyContent, storeToken, undefined, "POST");
}

async function verify() {
  await addResultInTab("/auth/verify", undefined, undefined, setUserName, undefined, "GET");
}

async function getResults() {
  await addResultInTab("/survey/my", undefined, undefined, storeSurveyResult, undefined, "GET");
}

async function getInfoAliment(id) {
  await addResultInTab("/food/id", id, undefined, storeAlimentInfo, undefined, "GET");
}



verify();

if(currentPage === "results") {
  getResults();
}

/******************************* Check form content *******************************/


function correctPhone(phone) {
  return phone.replaceAll(" ", "");
}

function getInputLogin(obj) {
  let sendLogin = {
    "telephone": correctPhone(obj.telephone.value),
    "password": obj.password.value
  }
  return sendLogin;
}

function getInputSignUp(obj) {
  let sendSignUp = {
    "telephone": correctPhone(obj.telephone.value),
    "nom": obj.nom.value,
    "prenom": obj.prenom.value,
    "password": obj.password.value,
    "naissance": obj.naissance.value,
    "adresse": obj.adresse.value,
    "ville": obj.ville.value,
    "code_postal": obj.code_postal.value
  }
  return sendSignUp;
}

let error = null;

validateButtons[0].addEventListener('click', async function(){
  if (! formLogin.reportValidity()) {
    return;
  }
  let sendLogin = await getInputLogin(formLogin);
  error = null;
  await postForm(sendLogin, "/auth/login");
  if (error != null) {
    console.log(error);
    return;
  }
  validateAnimation();
  await setTimeout(() => { hideForms(); }, 750);
});

validateButtons[1].addEventListener('click', async function(){  
  if (! formSignup.reportValidity()) {
    return;
  }
  let sendSignUp = await getInputSignUp(formSignup);
  error = null;
  await postForm(sendSignUp, "/auth/signup");
  if (error != null) {
    return;
  }
  validateAnimation();
  await setTimeout(() => { hideForms(); }, 750);
});