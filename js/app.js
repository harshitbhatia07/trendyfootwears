let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

const container =
document.getElementById(
"products-container"
);

if(container){

products.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<div class="product-info">

<h3>${product.name}</h3>

<div class="price">
₹${product.price}
</div>

<button
class="add-btn"
onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

</div>

`;

});

}

function addToCart(id){

const product =
products.find(p=>p.id===id);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert("Added To Cart");

}

function updateCartCount(){

const count =
document.getElementById(
"cart-count"
);

if(count){

count.innerText =
cart.length;

}

}

updateCartCount();