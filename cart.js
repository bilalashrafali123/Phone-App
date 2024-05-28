// console.log("cart items")

const cartItems = JSON.parse(localStorage.getItem('cartItems'));

const div1 = document.querySelector('.div-1');

function renderArr (){
     if(cartItems != null && cartItems.length > 0 ){
        div1.innerHTML += `<div class="card mt-3" style="width: 18rem;">
        <div class="card-body bg-dark text-light">
        <p class = "card-text"> product : ${
            cartItems[i].brand + " " + cartItems[i].model }</p>
            <p class="card-text"> Camera: ${cartItems[i].camera}</p>
           <p class="card-text">Ram: ${cartItems[i].ram} GB</p>
           <p class="card-text">Rom: ${cartItems[i].rom} GB</p>
           <p class = "card-text">Add items :<button onclick="AddItems(${i})">+</button> ${
            cartArray[i].quantity } 
            <button onclick="LessItems(${i})">-</button></p>
            <p class="card-text">Price: ${cartArray[i].price}</p>
            <button class="btn btn-outline-danger" onclick="removeItems(${i})">Remove</button>
            </div>
            </div>`;
     }else{
        div1.innerHTML = `<h2>I think You Haven't Bought Anything...🙄</h2>`
     }
}



