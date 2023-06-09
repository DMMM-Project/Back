let products = [];
let productItem = [];
let categories = [];
let subCategories = [];
let subSubCategories = [];
let productsForSearch = [];

let selectCategories = document.getElementById("categories");
let selectSubCategories = document.getElementById("subCategories");
let selectSubSubCategories = document.getElementById("subSubCategories");
let selectProductName = document.getElementById("productName");
let addCategoryButton = document.querySelector('.add-category');

let searchInput = document.getElementById("site-search");
let addSearchButton = document.querySelector('.add-search');

let postButton = document.querySelector('.post');

/************************************** init **************************************/

clearAllSelect();

/************************************ Get Data ************************************/


function storeCategories(json, tabResult) {
  json.data.categories.forEach(element => {
    tabResult.push(element);
  });
}

function storeProductsOld(json, tabResult) {
  json.data.foods.forEach(element => {
    tabResult.push(element);
  });
}

async function addCategoriesInOptions(url, params, functionToStore, selectId, tabResult) {  
  await addResultInTab(url, params, undefined, functionToStore, tabResult, "GET");
  let select = document.getElementById(selectId);
  if (tabResult.length == 0) {
    select.disabled = true;
    changeSubSubCategories();
  } else {
    select.disabled = false;
  }
  tabResult.forEach(element => {    
    let option = document.createElement("option");
    option.text = element.alim_grp_nom_fr;
    option.value = element.alim_grp_code;
    select.add(option);
  });
}

async function addProductsInOptions(url, params, functionToStore, selectId, tabResult) {  
  await addResultInTab(url, params, undefined, functionToStore, tabResult, "GET");
  let select = document.getElementById(selectId);
  if (tabResult.length == 0) {
    select.disabled = true;
  } else {
    select.disabled = false;
  }
  tabResult.forEach(element => {    
    let option = document.createElement("option");
    option.text = element.alim_nom_fr;
    option.value = element.alim_code;
    select.add(option);
  });
}

function removeOptions(selectElement) {
  let i, L = selectElement.options.length - 1;
  for(i = L; i >= 0; i--) {    
    if (selectElement.options[i].value != "Select") {
      selectElement.remove(i);
    }      
  }
}

function changeCategories () {
  clearAllSelect();
  bodyContentSubCategories = { "alim_grp_code": selectCategories.value };
  if (selectCategories.value == "Select") {
    return;
  }
  addCategoriesInOptions("/categories/subcategories", bodyContentSubCategories, storeCategories, "subCategories", subCategories);
}

function changeSubCategories () {
  subSubCategories = [];
  products = [];
  removeOptions(selectSubSubCategories);
  removeOptions(selectProductName);
  selectProductName.disabled = true;
  if (selectSubCategories.value == "Select") {
    return;
  }
  bodyContentSubSubCategories = { "alim_grp_code": selectSubCategories.value };
  addCategoriesInOptions("/categories/subsubcategories", bodyContentSubSubCategories, storeCategories, "subSubCategories", subSubCategories);
}

function changeSubSubCategories () {
  products = [];
  let bodyContent = { "alim_ssgrp_code" : selectSubCategories.value, "alim_ssssgrp_code" : 0 }
  removeOptions(selectProductName);
  if (!selectSubSubCategories.disabled) {
    bodyContent = { "alim_ssgrp_code" : selectSubCategories.value, "alim_ssssgrp_code" : selectSubSubCategories.value };
    if (selectSubSubCategories.value == "Select") {
      return;
    }
  }
  addProductsInOptions("/food/categories", bodyContent, storeProductsOld, "productName", products);
}

selectCategories.addEventListener("change", changeCategories);
selectSubCategories.addEventListener("change", changeSubCategories);
selectSubSubCategories.addEventListener("change", changeSubSubCategories);


addCategoriesInOptions("/categories", undefined, storeCategories, "categories", categories);

/***************************** Add product in the list *****************************/

function clearAllSelect() {
  subCategories = [];
  subSubCategories = [];
  products = [];
  removeOptions(selectSubCategories);
  removeOptions(selectSubSubCategories);
  removeOptions(selectProductName);
  selectSubCategories.disabled = true;
  selectSubSubCategories.disabled = true;
  selectProductName.disabled = true;
}

function addItemInListByCategories() {
  if (selectProductName.value == "Select") {
    alert('Please select a product');
    return;
  }
  if (productItem.length > 9) {
    alert('You can only add 10 products');
    return;
  }  
  if (productItem.includes(selectProductName.value)) {
    alert('This product is already in the list');
    return;
  }
  let list = document.querySelector('.list');
  list.innerHTML += `
    <div class="item" id="${selectProductName.value}">
      <div class="container-btn">
        <div class="btn delete">Delete</div>
      </div>
      <p class="product-label">${selectProductName.selectedOptions[0].label}</p>
      <p class="quantity">x1</p>
    </div>`;
  productItem.push(selectProductName.value);
  clearAllSelect();
  selectCategories.selectedIndex = 0;
  addDeleteEvent();
}

addCategoryButton.addEventListener('click', addItemInListByCategories);

function addItemInListBySearch() {
  if (searchInput.tag == null) {
    alert('Please select a product');
    return;
  }
  if (productItem.length > 9) {
    alert('You can only add 10 products');
    return;
  }
  if (productItem.includes(searchInput.tag)) {
    alert('This product is already in the list');
    searchInput.value = "";
    searchInput.tag = null;
    return;
  }
  let list = document.querySelector('.list');
  list.innerHTML += `
    <div class="item" id="${searchInput.tag}">
      <div class="container-btn">
        <div class="btn delete">Delete</div>
      </div>
      <p class="product-label">${searchInput.value}</p>
      <p class="quantity">x1</p>
    </div>`;
  productItem.push(searchInput.tag);
  addDeleteEvent();
  searchInput.value = "";
  searchInput.tag = null;
}

addSearchButton.addEventListener('click', addItemInListBySearch);


/*************************** Delete product in the list ***************************/


function addDeleteEvent() {
  let deleteButtons = document.querySelectorAll('.delete');

  function deleteProduct(item) {
    productItem.splice(productItem.indexOf(item.parentNode.parentNode.id), 1);
    item.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode);
  }

  deleteButtons.forEach(button => {
    button.addEventListener('click', event => {
      if (event.target.classList.contains('delete')) {
        deleteProduct(event.target);
      }
    });
  });
}


/*********************************** Post survey ***********************************/


let resultTest = [];

function storeSurvey(json, tabResult) {

}

function makeBodyContent() {
  let bodyContent = { aliments : [] };
  productItem.forEach(element => {
    bodyContent.aliments.push(parseInt(element));
  });
  return bodyContent;
}

async function postSurvey() {
  if (productItem.length != 10) {
    alert('Please you must have 10 products in your list to submit your survey');
    return;
  }
  await addResultInTab("/survey/my", undefined, makeBodyContent(), storeSurvey, resultTest, "POST");
  goToPage("results");
}

postButton.addEventListener('click', postSurvey);


/********************************* Search Dropdow *********************************/


var search = function (query) {
  var results = [];
  var query = query.toLowerCase();
  var words = query.split(" ");
  for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var wordResults = [];
      if(word.length == 0) continue;
      for (var j = 0; j < productsForSearch.length; j++) {
          var itemText = productsForSearch[j].alim_nom_fr.toLowerCase();
          if (itemText.indexOf(word) > -1) {
              wordResults.push(productsForSearch[j]);
          }
      }
      results = results.concat(wordResults);
  }
  return results;
};

function storeProducts(json) {
  json.data.foods.forEach(element => {
    productsForSearch.push(element);
  });
}

async function addProductsInTab() {
  await addResultInTab("/food", undefined, undefined, storeProducts, "GET");
}

addProductsInTab();

function updateDropdown(event) {
  let selectDropdownMenuInner = document.querySelector(".select-dropdown-menu-inner");
  let selectDropdown = document.querySelector(".select-dropdown");
  let searchTerm = event.target.value;

  if(searchTerm.trim().length == 0) {
    selectDropdown.style.display = "none";
    searchInput.tag = null;
    return;
  }

  selectDropdown.style.display = "block";
  
  let matchedFoods = search(searchTerm);

  let foodsHtml = "";
  for (let i = 0; i < matchedFoods.length; i++) {
      foodsHtml += `
          <div class="option select-option" role="option" aria-selected="true" aria-disabled="false" style="height: 38px;" value="${matchedFoods[i].alim_code}">
              <span class="select-option-text">${matchedFoods[i].alim_nom_fr}</span>
          </div>
      `;
  }  
  selectDropdownMenuInner.innerHTML = foodsHtml;

  let selectOptions = document.querySelectorAll(".select-option");
  selectOptions.forEach(option => {
    option.addEventListener("click", event => {      
      if (event.target.parentNode.getAttribute("value") == null) {
        searchInput.value = event.target.childNodes[1].innerHTML;
        searchInput.tag = event.target.getAttribute("value");
        selectDropdown.style.display = "none";
        return;
      }
      searchInput.value = event.target.innerHTML;
      searchInput.tag = event.target.parentNode.getAttribute("value");
      selectDropdown.style.display = "none";
    });
  });
}

searchInput.addEventListener("keyup", updateDropdown);

searchInput.addEventListener("search", updateDropdown);