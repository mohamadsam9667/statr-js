// console.log("sam is sigma")

let Range=document.getElementById('range');
let Display=document.querySelector('.container')
console.log(Range)

Range.addEventListener('change',function(){
 console.log(Range.value)
 Display.style.filter=`brightness(${Range.value}%)`

})