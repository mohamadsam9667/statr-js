
// data base Product
let allProduct=[
    {id:1,name:"Iphone 13",price:700,imageAdress:'Images/apple-iphone-13-01.jpg',count:1},
    {id:2,name:"samsung s24",price:1200,imageAdress:'Images/samsung.jpg',count:1},
    {id:3,name:"nothing phone1 ",price:600,imageAdress:'Images/nothing1.webp',count:1},
    {id:4,name:"XIAOMI 14 ULTRA",price:1000,imageAdress:'Images/xiaomi.jpg',count:1},
    {id:5,name:"REDMAGIC 9S",price:860,imageAdress:"Images/redmagic.jpg",count:1},
    {id:6,name:"HEDFON PRO",price:60,imageAdress:"Images/HEDFON.webp",count:1}

]




let $=document
let Shop=$.querySelector('.shop-items')
let Cart=$.querySelector('.cart-items')
let SaveProductCart=[]
let total=$.querySelector('.cart-total-price')





allProduct.forEach(function(product){
   
    let fatherItem=$.createElement('div')
    fatherItem.className='shop-item';
    


    let spanForName=$.createElement('span')
    spanForName.className='shop-item-title'
    spanForName.innerText=product.name

    let newImageProduct=$.createElement('img')
    newImageProduct.className='shop-item-image'
    newImageProduct.src=product.imageAdress





    let shopDetail=$.createElement('div')
    shopDetail.className='shop-item-details'



    let spanPrice=$.createElement('span')
    spanPrice.className='shop-item-price'
    spanPrice.innerText="$"+product.price


    let newBtnAdd=$.createElement('button')
    newBtnAdd.className='btn btn-primary shop-item-button'
    newBtnAdd.innerText='ADD TO CART'

    shopDetail.append(spanPrice,newBtnAdd)
    fatherItem.append(spanForName,newImageProduct,shopDetail)

    Shop.append(fatherItem)

   
    newBtnAdd.addEventListener('click',function(){
        addToArray(product.id)
    })
    




})


function addToArray(productId){
    
    let isProductInCart = SaveProductCart.some(item => item.id === productId);
    
    if (isProductInCart) {
        alert("این محصول قبلا به سبد خرید اضافه شده است!");
    } else {
        let ItemForAddCart = allProduct.find(item => item.id === productId);
        SaveProductCart.push(ItemForAddCart);
        adderToCart(SaveProductCart);



        CalculatPrice(SaveProductCart)
       



    }
}






function adderToCart(items){
    
   
    
    Cart.innerHTML = ""
    items.forEach(function(item){

    let newDivRow=$.createElement('div')
    newDivRow.className='cart-row'


    let newCartItem=$.createElement('div')
    newCartItem.className='cart-item cart-column'



    let newImage=$.createElement('img')
    newImage.className='cart-item-image'
    newImage.src=item.imageAdress
    newImage.setAttribute('width',"100")
    newImage.setAttribute('height','100')


    let newSpanTitle=$.createElement('span')
    newSpanTitle.className='cart-item-title'
    newSpanTitle.innerText=item.name
    
    newCartItem.append(newImage,newSpanTitle)

    let spanPriceCart=$.createElement('span')
    spanPriceCart.className='cart-price cart-column'
    spanPriceCart.innerText='$'+item.price

    let newDivQuantity=$.createElement('div')
    newDivQuantity.className='cart-quantity cart-column'

    let newInput=$.createElement('input')
    newInput.className='cart-quantity-input'    
    newInput.value=item.count
    newInput.setAttribute('type','number')
    
    newInput.addEventListener('change',function(event){
    let newCount=parseInt(event.target.value)
    if (newCount <0) {
        newCount = 1;
    }
    item.count=newCount
    CalculatPrice(items) 
    })


    let newBtnRemove=$.createElement('button')
    newBtnRemove.className='btn btn-danger'
    newBtnRemove.innerText="REMOVE"

    
    newBtnRemove.addEventListener('click',function(){

       removeItem(items,item.id,newDivRow)
       
    })
        


    newDivQuantity.append(newInput,newBtnRemove)


    newDivRow.append(newCartItem,spanPriceCart,newDivQuantity)

    Cart.append(newDivRow)



    
})



}



function CalculatPrice(products){

    let sum =0
    
products.forEach(function(product){
        sum=sum+(product.price*product.count)

        

    })  

total.innerHTML="$"+sum
}




    // function removeItem(allItem,ItemId,re){
    
    
    //     let removeProd=allItem.find(function(item){
    //         return item.id===ItemId
    //     });

    //     let mainIndex=allItem.findIndex(item => item.id === ItemId);
    //     if (mainIndex !== -1) {
    //         allItem.slice(mainIndex,1)
        
    //     }
    //     // allItem[mainIndex]=null
    //     removeProd.price=0
        
    //     re.remove();
    //     adderToCart(allItem);
    //     CalculatPrice(allItem);
        
    


    // }
    function removeItem(allItem, ItemId, re) {
        // Find the index of the item with the given ItemId
        let mainIndex = allItem.findIndex(item => item.id === ItemId);
        
        // If the item exists in the array, remove it using splice
        if (mainIndex !== -1) {
            allItem.splice(mainIndex, 1); // This removes the item from the array
        }
    
        // Remove the HTML element associated with the item
        re.remove();
    
        // Call functions to update the cart display and recalculate the total price
        adderToCart(allItem);
        CalculatPrice(allItem);
    }

    // console.log(location)
    