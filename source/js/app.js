






//  location.host='127.0.0.1:5500'
// console.log(location.host)

let scrollDisplay=document.getElementById('scroll')
console.log(scrollDisplay)
window.addEventListener('scroll',function(){
 
    let scrollRow=window.scrollY
    
    let scrollFinal=document.body.clientHeight;

    let windowHeight=window.innerHeight;

    let percentScroll=Math.round(scrollRow/(scrollFinal-windowHeight)*100)

        scrollDisplay.style.width=percentScroll+"%";
    console.log(percentScroll)
})




