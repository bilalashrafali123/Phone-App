

let cartArray = JSON.parse(localStorage.getItem("cartItem"));


const cartData = document.querySelector("#cartData");

// console.log(cartArray);

function renderArray(){

if(cartArray!=null && cartArray.length>0){
  for (let i = 0; i < cartArray.length; i++) {
    cartData.innerHTML += `<div class=" card mt-3 br  " style="width: 18rem;">
  <div class="card-body  bh">
    <p class="card-text"> Product: ${
      cartArray[i].brand + " " + cartArray[i].model
    }</p>
    <p class="card-text"> Camera: ${cartArray[i].camera}</p>
    <p class="card-text">Ram: ${cartArray[i].ram} GB</p>
    <p class="card-text">Rom: ${cartArray[i].rom} GB</p>
    <p class="card-text">Quantity: <button class="btn btn-outline-success" onclick="AddQuantity(${i})">+</button> ${
      cartArray[i].quantity
    } <button class="btn btn-outline-success" onclick="SubQuantity(${i})">-</button></p>
    <p class="card-text">Price: ${cartArray[i].price}</p>
    <button class="btn btn-outline-danger" onclick="removeBtn(${i})">Detach</button>
  </div>
</div>`;
  }
}else{
  cartData.innerHTML=`<h2 class="text-center">I Think You Haven't Bought Anything 🙄...</h2>`
}
}

renderArray()

function removeBtn(index){
  cartArray.splice(index , 1);
   localStorage.setItem("cartItem", JSON.stringify(cartArray));
   location.reload();


}


function AddQuantity(add) {
  cartData.innerHTML=''
  cartArray[add].quantity+=1;
  renderArray();
  total();
  
}


function SubQuantity(sub){
   if(cartArray[sub].quantity===1){
    cartArray.splice(sub , 1);
    localStorage.setItem("cartItem", JSON.stringify(cartArray));
    location.reload();
    total();
   }else{
     cartData.innerHTML = "";
     cartArray[sub].quantity -= 1;
     renderArray();
     total()
    
   }
}

const totalAmount= document.querySelector("#totalAmount");
let totalPrice=0
function total(){

  for(let j=0 ; j<cartArray.length; j++){
    totalPrice+=(cartArray[j].price*cartArray[j].quantity);
  }
  totalAmount.innerHTML=`<h3 class="text-light text-center mt-5">SubTotal 👉 ${totalPrice} PKR <h3/>`
}

total()