let wishTab = [];
let heartNumber = document.getElementById('heartNumber');
let cartTab = [];
let cartNumber = document.getElementById('cartNumber');


if (localStorage.getItem("wishList")== undefined){
    heartNumber.innerHTML = "0";
}
else{
    heartNumber.innerHTML = JSON.parse(localStorage.getItem("wishList")).length;
}

if (localStorage.getItem("cartList")== undefined){
    cartNumber.innerHTML = "0";
}
else{
    cartNumber.innerHTML = JSON.parse(localStorage.getItem("cartList")).length;
}


function addtoWishlist(x){
    console.log(x);
    
    tabProduct.forEach(elem =>{
        if(elem.id == x){
        if (!wishTab.includes(elem)){
            wishTab.push(elem);
        }
        
        localStorage.setItem("wishList",JSON.stringify(wishTab));
        heartNumber.innerHTML = wishTab.length;

        }
    });
}

let tabProduct = [{
    id : 1,
    img : "./images/acc.jpg",
    disc : 40,
    category : "Women's collection",
    name : "Diamond Bracelet",
    price: 2500,
},
{
    id : 2,
    img : "./images/watch1.png",
    disc : 40,
    category : "Women's collection",
    name : "Diamond Watch",
    price: 2000,
},
{
    id : 3,
    img : "./images/ring.jpg",
    disc : 40,
    category : "Women's collection",
    name : "Diamond Ring",
    price: 1000,
},
{
    id : 4,
    img : "./images/watche2.jpg",
    disc : 40,
    category : "Women's collection",
    name : "Diamond Watch",
    price: 1500,
},
{
    id : 5,
    img : "./images/earings.jpg",
    disc : 40,
    category : "Women's collection",
    name : "Diamond Earings",
    price: 1250,
},
{
    id : 6,
    img : "./images/earings.jpg",
    disc : 40,
    category : "Women's collection",
    name : "Diamond Earings",
    price: 1250,
},
{
    id : 7,
    img : "./images/Ring.png",
    disc : 40,
    category : "Women's collection",
    name : "Diamond Earings",
    price: 1250,
}
];

let productList = document.getElementById('productList');

let generateProduct =()=>{
    return (productList.innerHTML=tabProduct.map(function(x){
        let {id, disc, category, name, price, img} = x;
        console.log(x);
        return `
        <div class="product-item" id="shop">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="${img}" alt="" />
            </a>
            <span class="discount">${disc}%</span>
          </div>
          <div class="product-info">
            <span>${category}</span>
            <a href="productDetails.html">${name}</a>
            <h4>${price}</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart" onclick="addtoWishlist(${id})"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" onclick="addtoCart(${id})"></i></li>
          </ul>
        </div>`
    }).join(""));

};

generateProduct();


function addtoCart(x){
    console.log(x);
    
    tabProduct.forEach(elem =>{
        if(elem.id == x){
        if (!cartTab.includes(elem)){
            cartTab.push(elem);
        }
        
        localStorage.setItem("cartList",JSON.stringify(cartTab));
        cartNumber.innerHTML = cartTab.length;

        }
    });
}
