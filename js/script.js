const food = {
  plainBurger: {
    name: "Гамбургер Простой",
    price: 10000,
    amount: 0,
    calory: 400,
    getPrice: function () {
      return this.amount * this.price;
    },
    getCalory: function () {
      return this.amount * this.calory;
    },
  },
  freshBurger: {
    name: "Гамбургер Фреш",
    price: 20500,
    amount: 0,
    calory: 500,
    getPrice: function () {
      return this.amount * this.price;
    },
    getCalory: function () {
      return this.amount * this.calory;
    },
  },
  freshCombo: {
    name: "Фреш Комбо",
    price: 31900,
    amount: 0,
    calory: 700,
    getPrice: function () {
      return this.amount * this.price;
    },
    getCalory: function () {
      return this.amount * this.calory;
    },
  },
};
const extraFood = {
  doubleMayonnaise: {
    name: "Двойной майонез",
    price: 2000,
    calory: 100,
  },
  lettuce: {
    name: "Салатный лист",
    price: 500,
    calory: 30,
  },
  cheese: {
    name: "Сыр",
    price: 2500,
    calory: 150,
  },
}
const btns = document.querySelectorAll(".main__product-btn");
let checkbox = document.querySelectorAll(".main__product-checkbox")
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    btnPlusOrMinus(this);
  });
}

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('click', function () {
    checkInput(this);
  })
}

function btnPlusOrMinus(btn) {
  const parent = btn.closest(".main__product");
  const parentId = parent.getAttribute("id");
  const outNum = parent.querySelector(".main__product-num");
  const dataSymbol = btn.getAttribute("data-symbol");
  const outPrice = parent.querySelector(".main__product-price span")
  const outCall = parent.querySelector(".main__product-kcall span")

  if (dataSymbol == "+" && food[parentId].amount < 10) {
    food[parentId].amount++;
  } else if (dataSymbol == "-" && food[parentId].amount > 0) {
    food[parentId].amount--;
  }
  outNum.innerText = food[parentId].amount;
  outPrice.innerText = food[parentId].getPrice();
  outCall.innerText = food[parentId].getCalory();
}

function checkInput(input) {
  const parent = input.closest(".main__product")
  const parentId = parent.getAttribute('id')
  const dataExtra = input.getAttribute("data-extra")
  const checked = input.checked;

  if (checked == true) {
    food[parentId].price += extraFood[dataExtra].price
    food[parentId].calory += extraFood[dataExtra].calory
  } else {
    food[parentId].price -= extraFood[dataExtra].price
    food[parentId].calory -= extraFood[dataExtra].calory
  }
  const outPrice = parent.querySelector(".main__product-price span");
  outPrice.innerText = food[parentId].getPrice();
  const outCall = parent.querySelector(".main__product-kcall span");
  outCall.innerText = food[parentId].getCalory();
}


////////////// OFFER  /////////////////
const form = document.querySelector(".form");
const offerBtn = document.querySelector(".addCart");
const offerInfo = document.querySelector(".offer__info");
const offerCount = document.querySelector(".offer__count");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let inputName = document.querySelector(".input__name").value;
  let inputNumber = document.querySelector(".input__number").value;
  let msg = document.querySelector(".msg").value;
  let my_text = `Result is:%0A - Text1: ${inputName} %0A - Text2: ${inputNumber} %0A - Text3 : ${msg}`

  let token = "5678753356:AAF0sR2GISYRD56JL-mjbLQuz9xyOxKZQEQ"
  let chatId = -860986104;
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${my_text}`
  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  console.log("Xabar Muvaffaqiyatli yetkazildi!");
})
offerBtn.addEventListener("click", function () {
  form.classList.toggle("active")
  });

  