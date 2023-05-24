let shoeArr = [
  {
    brand: "Adidas",
    name: "Adidas-Black",
    img: "./img/ad-black.png",
    price: 180,
    color: "Black",
  },
  {
    brand: "Adidas",
    name: "Adidas-Green",
    img: "./img/ad-green.png",
    price: 280,
    color: "Green",
  },
  {
    brand: "Adidas",
    name: "Adidas-White",
    img: "./img/ad-white.png",
    price: 190,
    color: "White",
  },
  {
    brand: "Adidas",
    name: "Adidas-White X",
    img: "./img/ad-white-1.png",
    price: 110,
    color: "White",
  },
  {
    brand: "Adidas",
    name: "Adidas-Yellow",
    img: "./img/ad-yellow.png",
    price: 120,
    color: "Yellow",
  },
  {
    brand: "Nike",
    name: "Jordan-Black",
    img: "./img/jd-black.png",
    price: 240,
    color: "Black",
  },
  {
    brand: "Red",
    name: "Jordan-Red",
    img: "./img/jd-red.png",
    price: 300,
    color: "Red",
  },
  {
    brand: "Nike",
    name: "Jordan-Blue",
    img: "./img/jd-blue.png",
    price: 100,
    color: "Blue",
  },
  {
    brand: "Nike",
    name: "Jordan-White",
    img: "./img/jd-white.png",
    price: 190,
    color: "White",
  },
];
// customer Arr
let customerArr = [];
// render
let wrapItems = document.querySelector(".wrap-items");
function renderItems() {
  wrapItems.innerHTML = "";
  shoeArr.map(function (e) {
    let item = document.createElement("div");
    item.innerHTML = `
  <div class="item">
              <div class="img-wrap"><img src="${e.img}" alt="" /></div>
              <div class="name">${e.name}</div>
              <div class="color">${e.color}</div>
              <div class="pr-price">$ <span class="pr-value">${e.price}</span></div>
            </div>`;
    wrapItems.appendChild(item);
  });
}
renderItems();
// close btn form
let formProduct = document.querySelector(".form-product");
let closeFormBtn = document.querySelector(".close-btn");
closeFormBtn.addEventListener("click", function () {
  formProduct.classList.add("none");
});
//close btn
let formUser = document.querySelector(".form-user");
let closeUserBtn = document.querySelector(".us-close-btn");
closeUserBtn.addEventListener("click", function () {
  formUser.classList.add("none");
});

// Handle click item

let productForm = document.querySelector(".form-product");
let userForm = document.querySelector(".form-user");
function handleClickItem() {
  let itemsList = document.querySelectorAll(".item");
  let newItemsListArr = Array.from(itemsList);

  newItemsListArr.map(function (item) {
    item.addEventListener("click", function () {
      productForm.classList.remove("none");
      let productImg = productForm.querySelector("img");
      let productName = productForm.querySelector(".pr-name");
      let productColor = productForm.querySelector(".pr-color");
      let productPrice = productForm.querySelector(".pr-value");
      let productBuyBtn = productForm.querySelector(".buy-btn");

      let itemImg = item.querySelector("img");
      let itemName = item.querySelector(".name");
      let itemColor = item.querySelector(".color");
      let itemPrice = item.querySelector(".pr-value");
      productImg.src = `${itemImg.src}`;
      productName.innerHTML = `${itemName.textContent}`;
      productColor.innerHTML = `${itemColor.textContent}`;
      itemPrice.innerHTML = `${productPrice.textContent}`;
      // Prodcut Buy Btn
      let cusName = document.querySelector(".cus-name");
      let cusPhone = document.querySelector(".cus-phone");
      let cusProduct = document.querySelector(".cus-pr");
      let count = document.querySelector(".count");
      let customerBox = document.querySelector(".customer");
      productBuyBtn.addEventListener("click", function () {
        customerBox.innerHTML = "";
        userForm.classList.remove("none");
        let userNameInput = userForm.querySelector(".user-name input");
        let userPhoneInput = userForm.querySelector(".user-phone input");
        let userBankCodeInput = userForm.querySelector(
          ".user-acc-number input"
        );
        let acceptBtn = userForm.querySelector(".accept-btn");
        acceptBtn.onclick = function () {
          userForm.classList.add("none");
          let newObj = {
            name: `${userNameInput.value}`,
            phone: `${userPhoneInput.value}`,
            bankCode: `${userBankCodeInput.value}`,
          };
          customerArr.push(newObj);
          count.innerHTML = `${customerArr.length}`;
          userNameInput.value = "";
          userPhoneInput.value = "";
          userBankCodeInput.value = "";

          customerArr.map(function (e) {
            let item = document.createElement("div");
            item.classList.add(".cus-item");
            item.innerHTML = `<div class="cus-name">${e.name}</div>
                <div class="cus-phone">${e.phone}</div>
                <div class="cus-pr">${e.bankCode}</div>`;
            customerBox.append(item);
            console.log(item);
          });
        };
      });
    });
  });
}
handleClickItem();

function handlePaymentBtn() {
  let onlineBtn = document.querySelector(".online");
  let userBankCodeInput = userForm.querySelector(".user-acc-number");

  onlineBtn.onclick = function () {
    userBankCodeInput.classList.toggle("none");
  };
  let cashBtn = document.querySelector(".cash");
  cashBtn.onclick = function () {
    formUser.classList.add("none");
  };
}
handlePaymentBtn();
// customer btn
let customerBtn = document.querySelector(".customer-btn");
let customerBox = document.querySelector(".customer");

customerBtn.onclick = function () {
  {
    customerBox.classList.toggle("none");
  }
};
// color-item-click

let colorList = document.querySelectorAll(".color-item");
let newColorListArr = Array.from(colorList);
newColorListArr.map(function (colorElement) {
  colorElement.onclick = function () {
    let colorValue = colorElement.textContent;
    wrapItems.innerHTML = "";

    shoeArr.map(function (element) {
      let item = document.createElement("div");

      if (element.color.trim() == colorValue.trim()) {
        item.innerHTML = `
          <div class="item">
            <div class="img-wrap"><img src="${element.img}" alt="" /></div>
            <div class="name">${element.name}</div>
             <div class="color">${element.color}</div>
            <div class="pr-pricelement">$ <span class="pr-value">${element.price}</span></div>
          </div>`;
        wrapItems.appendChild(item);
      }
    });
  };
});

// Filter Price Handle
let inputFilterPrice = document.querySelector(".input-filter");
let enterBtn = document.querySelector(".enter-btn");
let fiterNumber = document.querySelector(".filter-price .show-price .value");
inputFilterPrice.addEventListener("input", function () {
  let inputPriceValue = parseInt(inputFilterPrice.value);
  fiterNumber.innerHTML = `${inputPriceValue}`;
  enterBtn.onclick = function () {
    wrapItems.innerHTML = "";
    console.log(inputPriceValue);
    shoeArr.map(function (element) {
      // case 100 -x - 150
      if (element.price <= 150 && inputPriceValue <= 150) {
        console.log(1);

        let item = document.createElement("div");

        item.innerHTML = `
          <div class="item">
            <div class="img-wrap"><img src="${element.img}" alt="" /></div>
            <div class="name">${element.name}</div>
             <div class="color">${element.color}</div>
            <div class="pr-pricelement">$ <span class="pr-value">${element.price}</span></div>
          </div>`;
        wrapItems.appendChild(item);
        handleClickItem();
      }

      // case 150 -x - 200
      if (
        element.price > 150 &&
        element.price <= 200 &&
        inputPriceValue > 150 &&
        inputPriceValue <= 200
      ) {
        console.log(2);

        let item = document.createElement("div");

        item.innerHTML = `
          <div class="item">
            <div class="img-wrap"><img src="${element.img}" alt="" /></div>
            <div class="name">${element.name}</div>
             <div class="color">${element.color}</div>
            <div class="pr-pricelement">$ <span class="pr-value">${element.price}</span></div>
          </div>`;
        wrapItems.appendChild(item);
        handleClickItem();
      }

      // case 200 - x - 250
      if (
        element.price > 200 &&
        element.price <= 250 &&
        inputPriceValue > 200 &&
        inputPriceValue <= 250
      ) {
        console.log(3);

        let item = document.createElement("div");

        item.innerHTML = `
          <div class="item">
            <div class="img-wrap"><img src="${element.img}" alt="" /></div>
            <div class="name">${element.name}</div>
             <div class="color">${element.color}</div>
            <div class="pr-pricelement">$ <span class="pr-value">${element.price}</span></div>
          </div>`;
        wrapItems.appendChild(item);
        handleClickItem();
      }

      // case 200 - x - 250
      if (
        element.price > 250 &&
        element.price <= 300 &&
        inputPriceValue > 250 &&
        inputPriceValue <= 300
      ) {
        console.log(4);

        let item = document.createElement("div");

        item.innerHTML = `
          <div class="item">
            <div class="img-wrap"><img src="${element.img}" alt="" /></div>
            <div class="name">${element.name}</div>
             <div class="color">${element.color}</div>
            <div class="pr-pricelement">$ <span class="pr-value">${element.price}</span></div>
          </div>`;
        wrapItems.appendChild(item);
        handleClickItem();
      }
    });
  };
});
