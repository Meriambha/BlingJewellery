let wishList = JSON.parse(localStorage.getItem("wishList"));
let heartNumber = document.getElementById('wishNumber');
let wishContainer = document.getElementById('wishContainer');
console.log(wishList);

heartNumber.innerHTML = wishList.length; 
let generateProduct =()=>{
    return (wishContainer.innerHTML=wishList.map(function(x){
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
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>`
    }).join(""));

};

generateProduct();



