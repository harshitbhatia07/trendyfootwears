// Loader

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 1200);

});

// WhatsApp Order

function orderProduct(productName, button){

const card = button.closest(".product-card");

const size = card.querySelector(".size-select").value;

if(size === "Select Size"){

alert("Please select your shoe size first.");

return;

}

const message =
`🔥 NEW SHOE ORDER

Product: ${productName}

Size: ${size}

⚠️ PREPAID ORDER

Please make payment using the QR code shown on the website and send payment screenshot.

Order will be confirmed only after payment verification.

Thank You ❤️`;

window.open(
`https://wa.me/918054336991?text=${encodeURIComponent(message)}`,
"_blank"
);

}

// Reveal Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

},{
threshold:0.1
});

document.querySelectorAll(
".product-card,.review-box,.payment-section,.contact"
).forEach((el)=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition="all .8s ease";

observer.observe(el);

});

// Floating WhatsApp Pulse

const whatsappBtn = document.querySelector(".floating-whatsapp");

setInterval(()=>{

whatsappBtn.style.transform="scale(1.08)";

setTimeout(()=>{

whatsappBtn.style.transform="scale(1)";

},400);

},2000);

// Future Admin Hooks

let products = [];

function addProduct(product){

products.push(product);

console.log("Product Added:", product);

}

function removeProduct(id){

products = products.filter(
product => product.id !== id
);

}

function updateProduct(id,data){

products = products.map(product=>{

if(product.id===id){

return {...product,...data};

}

return product;

});

}

// Countdown Timer

const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 7);

function updateCountdown(){

const now = new Date().getTime();

const distance =
launchDate.getTime() - now;

const days =
Math.floor(distance / (1000*60*60*24));

const hours =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);

const timer =
document.getElementById("countdown");

if(timer){

timer.innerHTML =
`🔥 Offer Ends In ${days}d ${hours}h`;

}

}

setInterval(updateCountdown,1000);

// Navbar Background

window.addEventListener("scroll",()=>{

const header =
document.querySelector("header");

if(window.scrollY > 50){

header.style.background =
"rgba(0,0,0,.95)";

}else{

header.style.background =
"rgba(0,0,0,.8)";

}

});

// Disable Right Click (basic)

document.addEventListener(
"contextmenu",
event => event.preventDefault()
);

// Disable F12

document.addEventListener(
"keydown",
function(e){

if(e.key==="F12"){

e.preventDefault();

}

if(
e.ctrlKey &&
e.shiftKey &&
e.key==="I"
){

e.preventDefault();

}

if(
e.ctrlKey &&
e.shiftKey &&
e.key==="J"
){

e.preventDefault();

}

if(
e.ctrlKey &&
e.key==="U"
){

e.preventDefault();

}

}
);

console.log(
"%cTRENDY FOOTWEARS",
"color:gold;font-size:24px;font-weight:bold;"
);

// Product Search

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value =
searchInput.value.toLowerCase();

document
.querySelectorAll(".product-card")
.forEach(card=>{

const title =
card.querySelector("h3")
.innerText
.toLowerCase();

card.style.display =
title.includes(value)
? "block"
: "none";

});

});

}

function addToCart(name,price,image){

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

cart.push({
name:name,
price:price,
image:image
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(name + " added to cart");

}

function updateCartCount(){

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

let count =
document.getElementById("cartCount");

if(count){
count.innerText = cart.length;
}

}

updateCartCount();