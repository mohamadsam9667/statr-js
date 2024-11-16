// let suggestions = [
//     "Channel",
//     "CodingLab",
//     "CodingNepal",
//     "YouTube",
//     "YouTuber",
//     "YouTube Channel",
//     "Blogger",
//     "Bollywood",
//     "Vlogger",
//     "Vechiles",
//     "Facebook",
//     "Freelancer",
//     "Facebook Page",
//     "Designer",
//     "Developer",
//     "Web Designer",
//     "Web Developer",
//     "Login Form in HTML & CSS",
//     "How to learn HTML & CSS",
//     "How to learn JavaScript",
//     "How to become Freelancer",
//     "How to become Web Designer",
//     "How to start Gaming Channel",
//     "How to start YouTube Channel",
//     "What does HTML stands for?",
//     "What does CSS stands for?",
// ];

//     let showSuggest=document.querySelector('.autocom-box')
//     let wrapper=document.querySelector('.wrapper')
//     let searchInput=document.querySelector('.search-input')
// // console.log(showSuggest)
    


// inp.addEventListener('keyup',function(){
//     let Text=inp.value.toLowerCase()
//     // console.log(Text)


//     let TextUser=suggestions.filter(function(word){
//         return word.toLowerCase().includes(Text);
//     })
//     console.log(TextUser)
//     showSuggest.innerHTML = '';
//     if(TextUser.length>0){
//         wrapper.classList.add('active')

//         TextUser.forEach(function(event){
//             let newDiv=document.createElement('li')
//             newDiv.innerHTML=event
//             // newDiv.style.color='black'
//             searchInput.classList.add('active')
//             showSuggest.append(newDiv)


//             newDiv.addEventListener('click',function(e){
//                     console.log(e.target.innerText)
//                     inp.value=e.target.innerText

//             })


//         })
//     }else{
//         wrapper.classList.remove('active')

//     }
    
// })















// let users=[
//     {id:1,name:"sam",age:20},
//     {id:2,name:"dam",age:27},
//     {id:3,name:"bam",age:22}
// ]

// let falseValue=Boolean(0&&{})
// let trueValue=Boolean("0"&&{})
// console.log("Boolean(0&&{})",falseValue)
// console.log("Boolean('0'&&{})",trueValue)











// window.addEventListener('load',function(){

//     let indexDB=indexedDB.open('user',3)

//     indexDB.addEventListener('error',(error)=>{
//         console.log(error)
//     })

//     indexDB.addEventListener('success',(event)=>{
//         console.log(event.target.result)
//     })

//     indexDB.addEventListener("upgradeneeded",function(event){
//         console.log("new V",event.newVersion)
//         console.log(event)
//         console.log("old V",event.oldVersion)
//     })

// });















// const btn=document.querySelector('button')
// btn.addEventListener('click',function(){
//     fetch('https://randomuser.me/api/',{method:'GET'})
//     .then(res=>{
//         if(res.status===200){
//             return  res.json()

//         }
//         return new Error("errrorr")
//     }).then(data=>{
//         console.log( data.results[0].location)
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// })



// fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}',{
//     method:'GET'    
// }).then(res=>{
//     if(res.status===401){
//         console.log(res)

//     }
// })
  










































