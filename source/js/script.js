// 
// console.log("sam")

let thems=document.querySelectorAll('.themes button')
console.log(thems)



thems.forEach(function(item){
    item.addEventListener('click',function(){
    
    let  codeColor=item.dataset.color;
        document.documentElement.style.setProperty('--theme-color',codeColor)
    })

})








