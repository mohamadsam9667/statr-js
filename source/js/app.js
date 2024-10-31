
let AllProduct=[
    {id:1,name:"Album 1",price:100,imageAdress:"Images/Album 1.png"},
    {id:2,name:"Album 2",price:200,imageAdress:"Images/Album 2.png"},
    {id:3,name:"Album 3",price:300,imageAdress:"Images/Album 3.png"},
    {id:4,name:"Album 4",price:400,imageAdress:"Images/Album 4.png"},
    {id:5,name:'asal',price:800,imageAdress:"Images/Album 1.png"},
    {id:6,name:'aal',price:1000,imageAdress:"Images/Album 4.png"}

];


let $=document
let cartContainer=$.querySelector('.cart-items')
let ShopContainer=$.querySelector('.shop-items')






AllProduct.forEach(function(item){

    let newProduct=$.createElement('div')
    newProduct.className='shop-item'
    


    let newSpan=$.createElement('span')
    newSpan.className='shop-item-title'
    newSpan.innerHTML=item.name
    
    let newTagImage=$.createElement('img')
    newTagImage.className='shop-item-image';
    newTagImage.src=item.imageAdress


    
    let newShopItemInProdoct=$.createElement('div')
    newShopItemInProdoct.className='shop-item-details'
    
    
    
    
    
    let spanShopDetail=$.createElement('span')
    spanShopDetail.className='shop-item-price'
    spanShopDetail.innerHTML="$"+item.price
    
    let btnAdd=$.createElement('button')
    btnAdd.className='btn btn-primary shop-item-button'
    btnAdd.innerHTML='ADD TO CART'
    
    
    newShopItemInProdoct.append(spanShopDetail,btnAdd)
    newProduct.append(newSpan,newTagImage,newShopItemInProdoct)
    
    

    
    ShopContainer.append(newProduct)
    
    
    

    btnAdd.addEventListener('click', function() {
        adderCart(item);
    });
});   


function adderCart(item){


    let existingItem = [...cartContainer.children].find(cartRow =>
        cartRow.querySelector('.cart-item-title').innerText === item.name
    );

    if (existingItem) {
        alert("Item is already in the cart.");
        return;
    }

    let cartRow = $.createElement('div');
    cartRow.className = 'cart-row';

    let fatherCart=$.createElement('div')
    fatherCart.className='cart-item cart-column'


    let imageItem=$.createElement('img')
    imageItem.src=item.imageAdress
    imageItem.className='cart-item-image'

    let newSpanItemCart=$.createElement('span')
    newSpanItemCart.innerHTML=item.name
    newSpanItemCart.className='cart-item-title';



    fatherCart.append(imageItem,newSpanItemCart)

    let newSpanPrice=$.createElement('span')
    newSpanPrice.className='cart-price cart-column'
    newSpanPrice.innerHTML="$"+item.price

    
    let newItemCartAfterSpanPrice=$.createElement('div')
    newItemCartAfterSpanPrice.className='cart-quantity cart-column'
 
    let newinput=$.createElement('input')
    newinput.className='cart-quantity-input'
    // newinput.setAttribute('value',1)
    newinput.value=1
    newinput.setAttribute('type',"number")
    
   


    
    
    let newbtn=$.createElement('BUTTON')
   newbtn.className='btn btn-danger'
    newbtn.innerText='REMOVE'
    
    newbtn.addEventListener('click',function(){
        
        cartRow.remove();

        })



   newItemCartAfterSpanPrice.append(newinput,newbtn)
   


    cartRow.append(fatherCart, newSpanPrice, newItemCartAfterSpanPrice);
     cartContainer.append(cartRow);

    console.log(cartRow)

    calculatorPriceCart()


    
}

let ShowPrice=$.querySelector('.cart-total-price')
function calculatorPriceCart() {
    let sum = 0;

    [...cartContainer.children].forEach(cartRow => {
        let priceElement = cartRow.querySelector('.cart-price');
        let quantityElement = cartRow.querySelector('.cart-quantity-input');
       
        let price = parseFloat(priceElement?.innerText.replace('$', '')) || 0;
        let quantity = parseInt(quantityElement?.value) || 0;
        
       
    
             
             sum += price * quantity;
    
    });

    ShowPrice.innerHTML="$"+sum
 
    for (let i = 0; i < cartContainer.children.length; i++) {
        let cartRow = cartContainer.children[i];
        let quantityElement = cartRow.querySelector('.cart-quantity-input');
        quantityElement.addEventListener('change', calculatorPriceCart);
    }
}





// function