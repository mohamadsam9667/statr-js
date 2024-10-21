let $=document
let rangeWeight=$.getElementById("weight")
let rangeHeight=$.getElementById('height')
let heightH=$.getElementById('height-val')
let weightH=$.getElementById('weight-val')
let resault=$.getElementById('result')


let colorResault=$.getElementById('category')
let heightVal
let weightVal
weightVal=rangeWeight.value
heightVal=rangeHeight.value
let BMI;



function calculateBmi(){

    heightVal=rangeHeight.value
    weightVal=rangeWeight.value

    BMI=(weightVal)/((heightVal*heightVal)/10000) 

    heightH.innerHTML=rangeHeight.value+ ' cm'

    weightH.innerHTML=rangeWeight.value+'  kg'
    // console.log(BMI)
    resault.innerHTML=BMI.toFixed(1)
 
    if(resault.innerHTML<18.5){
        colorResault.innerHTML='skinny'
        colorResault.style.cssText='color:orange;'
    }else if(resault.innerHTML>18.5 && resault.innerHTML<31){
        colorResault.innerHTML='Normal Weight'
        colorResault.style.color='green'
        console.log("sam")
    
    }else {
        colorResault.innerHTML='Over Weight'
        colorResault.style.cssText='color:red;'
    
    }   
}

console.log(colorResault.innerHTML)



rangeHeight.addEventListener('input',calculateBmi)
rangeWeight.addEventListener('input',calculateBmi)



