const phones = [
    {
        brand: 'Apple',
        model: 'xs max',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price:15000
    },
    {
        brand: 'Redmi',
        model: 'note 9 pro',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 's20 ultra',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Realme',
        model: '6i',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Htc',
        model: 'c3',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Apple',
        model: '13 pro max',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

    {
        brand: 'Samsung',
        model: 's6 edge',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

    {
        brand: 'Iphone ',
        model: '7+',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]

  
  phones.quantity= 1;
  
  let cart = [];
  let items = JSON.parse(localStorage.getItem("cartItem"));
  
  if(items==null){
      cart=[];
  }else{
      cart=items
  }
  
  
  const div = document.querySelector("#div");
  
  for(let i=0; i<phones.length; i++){
      div.innerHTML += `<div class="card color br" style="width: 14rem;">
        <div class="card-body ">
      <p class="card-text">Product: ${phones[i].brand + " " + phones[i].model}</p>
      <p class="card-text">Price: ${phones[i].price} PKR</p>
      <button class="btn btn-outline-success" onclick="addToCart(${i})">Time to order</i></button>
    </div>
  </div>`;
  }
  
  
  
  
  
  function addToCart(cartIndex){
  
  if(cart.includes(phones[cartIndex])){
      phones[cartIndex].quantity+=1;
  }else{
      cart.push(phones[cartIndex]);
      phones[cartIndex].quantity= 1;
  
  }
  }
  
  const checkOutBtn = document.querySelector("#checkOutBtn").addEventListener('click', function(){
      window.location="cart.html"
      localStorage.setItem("cartItem" , JSON.stringify(cart));
  })
  