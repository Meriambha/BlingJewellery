const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");


let heartNumber = document.getElementById('heartNumber');

let cartNumber = document.getElementById('cartNumber');


if (localStorage.getItem("cartList")== undefined){
    cartNumber.innerHTML = "0";
}
else{
    cartNumber.innerHTML = JSON.parse(localStorage.getItem("cartList")).length;
}

if (localStorage.getItem("wishList")== undefined){
    heartNumber.innerHTML = "0";
}
else{
    heartNumber.innerHTML = JSON.parse(localStorage.getItem("wishList")).length;
}

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
let shopItemsData = JSON.parse(localStorage.getItem("cartList"));


let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =()=>{
    return (shop.innerHTML=shopItemsData.map(function(x){
        let {id, disc, category, name, price, img} = x;
        return `
        <div class="cart-info" id="product-id-${id}">
              <img src=${img} width="150" alt="" />
              <div>
                <p>${name}</p>
                <span>Price: ${price}</span> <br /> 
                <div id="${id}">0</div>
                <a onclick="increment(${id},${price})"><i class="bx bx-plus"></i></a>
                <a onclick="decrement(${id},${price})"><i class="bx bx-minus"></i></a>
                <a href="#">remove</a>
              </div>
            </div>`
    }).join(""));

};

generateShop();


let increment = (id,price) =>{
    let SelectedItem = id;
    let search = basket.find((x)=>x.id === SelectedItem);

    if(search == undefined){
        basket.push({
            id: SelectedItem,
            item: 1,
            itemPrice: price,
            Total: 0
        });
    }
    else{
        search.item += 1;
        search.Total = search.item * search.itemPrice;
    }
    
console.log(basket);
update(id,search.item);
};

let decrement = (id) =>{
    let SelectedItem = id;
    let search = basket.find((x)=>x.id === SelectedItem);

    if(search.item == 0)
        return;
    
    else{
        search.item -= 1;
        search.Total = search.item * search.itemPrice;
    }
    
console.log(basket);
update(id,search.item);
};

let update = (id,item) =>{
    let quantity = document.getElementById(id);
    quantity.innerHTML = item;
    let Subtotal = document.getElementById("Subtotal");
    let T =0;
    basket.forEach(x => {
        T += x.Total;
    } )
    Subtotal.innerHTML = T;
    let Tax = T * 20/100 ;
    document.getElementById("Tax").innerHTML = Tax;
    document.getElementById("TotalTopay").innerHTML = T + Tax;
    

    
    /*console.log(id);*/
}

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  

  let clearCart = () => {
    basket = [];
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
  };




