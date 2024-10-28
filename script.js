let item1 = {
    img: "iearpod.jpg",
    id: 101,
    price: 30000,
    name: "Earpod",
    qty: 1
};
let item2 = {
    img: "iphone.jpg",
    id: 102,
    price: 40000,
    name: "i Phone",
    qty: 1
};
let item3 = {
    img: "iwatch.jpg",
    id: 103,
    price: 20000,
    name: "Watch",
    qty: 1
};
let item4 = {
    img: "macbook.jpg",
    id: 104,
    price: 80000,
    name: "MacBook",
    qty: 1
};

let display = document.querySelector('#display');
let allProducts=localStorage.getItem('allproducts')?JSON.parse(localStorage.getItem('allproducts')):[];

let products = [item1, item2, item3, item4];
localStorage.setItem('allproducts',JSON.stringify(products))

function displayProducts(items) {
    let eachItem = '';
    for (let item of items) {
        let { img, id, name, qty, price } = item;
        
        eachItem += `
        <div class="col-3 mb-4">
            <div class="card">
                <div class="card-header text-center">
                    <img src="${img}" alt="${name}" class="img-fluid">
                </div>
                <div class="card-body text-center">
                    <h2 class="text-success">${name}</h2>
                    <p> Price: &#8377;<span id="price" >${price}</span></p>
                </div>
                <div class="card-footer text-center">
                    <h4>Qty: <i class="bi bi-dash-circle me-2 btn1" onclick="decqty(${id})"></i><span id="quantity")>${qty}</span><i class="bi bi-plus-circle ms-2 btn2" onclick="incqty(${id})"onclick="incqty(${id})"></i></h4>
                </div>
            </div>
        </div>`;
    }
   
    display.innerHTML = eachItem;
   

}

displayProducts(products);


let quantity= document.querySelector('#quantity');
let totalPrice=document.querySelector('#price');
let priceValue=totalPrice.textContent
let val=quantity.textContent
let totalquantity=localStorage.getItem('quantity')&& !isNaN(localStorage.getItem('quantity'))?Number(localStorage.getItem('quantity')):1;




// function increase quantity

 function incqty(id){
 let items= products.map((item)=>{
    if(item.id==id){
        return{...item,qty:++item.qty}
       
      
    }
    else{
        return item
    }

 })
    
     totalquantity+=Number(val)
    
     
JSON.stringify(localStorage.setItem('quantity',totalquantity))
 
 displayProducts(items)


 }
 //function decrease quantity
 
 function decqty(id){
    let items= products.map((item)=>{
        if(item.id==id && item.qty>1){
            
            return{...item,qty:--item.qty}
            
        }
        else{
            return item
        }
     })
     
     if (totalquantity > 1) {
        totalquantity -= Number(val); 
    }
     
     localStorage.setItem('quantity', totalquantity); 
    

    displayProducts(items);
  
    
     
 }


 localStorage.setItem('quantity',quantity)
  

