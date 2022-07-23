const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if(hamburger){
    hamburger.addEventListener("click",()=>{
        navList.classList.toggle("open")
    } );
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}


let shop = document.getElementById("cart");
let shopItemsData = [ {
    id:"1",
    discount:"40%",
    category: "Women",
    name:"Ring",
    price:"$1500",
    image:"./images/d1.jpg"
}
, {
    id:"2",
    discount:"40%",
    category: "Women",
    name:"Ring",
    price:"$1500",
    image:"./images/d1.jpg"
}, {
    id:"3",
    discount:"40%",
    category: "Women",
    name:"Ring",
    price:"$1500",
    image:"./images/d1.jpg"
}, {
    id:"4",
    discount:"40%",
    category: "Women",
    name:"Ring",
    price:"$1500",
    image:"./images/d1.jpg"
}]


let generateShop =()=>{
    return (shop.innerHTML=shopItemsData.map(function(x){
        let {id, discount, category, name, price, image} = x;
        return `
        <div class="cart-info" id="product-id-${id}">
              <img src=${image} width="150" alt="" />
              <div>
                <p>${name}</p>
                <span>Price: ${price}</span> <br />  
                <a onclick="increment(${id})"><i class="bx bx-plus"></i></a>
                <a onclick="decrement(${id})"><i class="bx bx-minus"></i></a>
                <a href="#">remove</a>
              </div>
            </div>`
    }).join(""));

};

generateShop();

let increment = (id) =>{console.log(id)}
let decrement = (id) =>{console.log(id)}
let update = () =>{}

