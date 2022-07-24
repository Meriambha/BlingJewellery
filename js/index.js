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
    price:1500,
    image:"./images/d1.jpg"
}
, {
    id:"2",
    discount:"40%",
    category: "Women",
    name:"Ring",
    price:1500,
    image:"./images/d1.jpg"
}, {
    id:"3",
    discount:"40%",
    category: "Women",
    name:"Ring",
    price:1500,
    image:"./images/d1.jpg"
}, {
    id:"4",
    discount:"40%",
    category: "Women",
    name:"Ring",
    price:1500,
    image:"./images/d1.jpg"
}]


let basket = [];

let generateShop =()=>{
    return (shop.innerHTML=shopItemsData.map(function(x){
        let {id, discount, category, name, price, image} = x;
        return `
        <div class="cart-info" id="product-id-${id}">
              <img src=${image} width="150" alt="" />
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
    

    
    console.log(id);
}




