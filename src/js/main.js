//  Index Javascript Function

import {
  phones,
  iphones,
  samsungs,
  iphones_image_root,
  samsung_image_root,
} from "./products/products.js";

// Sign up Javascript Functions

// login = document.querySelector("#loginButton").addEventListener
// signup = document.querySelector("#createAccountButton").addEventListener
// login.addEventListener("click", toggleClass)

const productsContainer = document.querySelectorAll(".products");
const userSelection = "iphones" || selection.textContent;

const selection = document.querySelectorAll(".product-tab");

selection.forEach((productTab) => {
  return productTab.addEventListener("click", (e) => e.target.innerText);
});

if (userSelection == "iphones") {
  productsContainer.forEach((productsContainer) => {
    productsContainer.innerHTML = `${iphones
      .map((iphone) => {
        return `
        <div class="product-card">
          <div class="over-lay">
          <button>View details</button></div>
          <div class="product-image">
            <img src="${iphones_image_root}/${iphone.image}" alt="">

          </div>
          <div class="product-name">
              ${iphone.name}
          </div>
        </div>
    `;
      })
      .join("")}`;
  });
} else if (userSelection == "samsung") {
  productsContainer.innerHTML = `${samsungs
    .map((samsung) => {
      return `
        <div class = "product">
            <div class="product__image">
                <img src='${samsung_image_root}/${samsung.image}'>
            </div>
                
            <div class="product__detail">
                <div class="product__detail--name">${samsung.name}</div>
                <div class="product__detail--price">${samsung.price}</div>
            </div>

            <div class="product__actions">
                <a href="" class="product__action--description">Description</a>
                <a href="" class="button product__action--reviews">Review</a>
            </div>
        </div>
    `;
    })
    .join("")}`;
} else if (userSelection == "memory cards") {
  productsContainer.innerHTML = `<div class="form-container">
<form action="">
  <div class="input-group">
    <label for="">Choose a Brand</label>
    <select name="" id="">
      <option value="">Sandisk</option>
      <option value="">Eagle</option>
      <option value="">Chupez</option>
      <option value="">TUCAS</option>
      <option value="">____-----____</option>
    </select>
  </div>
  <div class="brand-image">
    <img src="./assets/img/iphones/iphone-11-pro-max.jpg" alt="">
  </div>
  <div class="input-group">
    <label for="">Memory Card size?</label>
    <select name="" id="">
      <option value="">2gb</option>
      <option value="">4gb</option>
      <option value="">8gb</option>
      <option value="">16gb</option>
      <option value="">32gb</option>
      <option value="">64gb</option>
      <option value="">128gb</option>
      <option value="">256gb</option>
    </select>
  </div>
  <div class="input-group">
    <label for="">For what device?</label>
    <select name="" id="">
      <option value="">Mobile Phone</option>
      <option value="">Camera</option>
    </select>
  </div>
  
  <div class="input-group">
    <label for="">How many pieces?</label>
    <input type="text">
  </div>
  <div class="input-group">
    <input type="submit" value="Continue">
  </div>
</form>
</div>`;
}

// const menu = document.querySelector(".menu-container");
// const menuToggle = document.querySelector(".menu-toggle");
// menuToggle.addEventListener("click", (e) => {
//   menu.classList.toggle("active");
// });

const searchButton = document.querySelector(".search");
const closeModal = document.querySelector(".closeModal");
const modalContainer = document.querySelector(".modal-container");

searchButton.addEventListener("click", () => {
  modalContainer.classList.add("active");
});
closeModal.addEventListener("click", () => {
 
  modalContainer.classList.remove("active");
});
