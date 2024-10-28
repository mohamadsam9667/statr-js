let DataAllUser=[
        {id:1,name:'sam',family:'khamsali'},
        {id:2,name:'amir',family:'khamsali'},
        {id:3,name:'sam',family:'khamsali'},
        {id:4,name:'mma',family:'khamsali'},
        {id:5,name:'sam',family:'khamsali'},
        
        {id:6,name:'sarra',family:'khamsali'},
        {id:7,name:'yalda',family:'khamsali'},
        {id:8,name:'nika',family:'khamsali'},
        {id:9,name:'sam',family:'khamsali'},
        {id:10,name:'ilia',family:'khamsali'},
        
    
        {id:11,name:'mani',family:'khamsali'},
        {id:12,name:'sam',family:'khamsali'},
        {id:13,name:'hasan',family:'khamsali'},
        {id:14,name:'jila',family:'khamsali'},
        {id:15,name:'sam',family:'khamsali'},
    
        

        {id:16,name:'jalal',family:'khamsali'},
        {id:17,name:'sam',family:'khamsali'},
        {id:18,name:'babak',family:'khamsali'},
        {id:19,name:'sam',family:'khamsali'},
        {id:20,name:'jafar',family:'khamsali'},
    
        {id:21,name:'sam',family:'khamsali'},
        {id:22,name:'reyhane',family:'khamsali'},
        {id:23,name:'reza',family:'khamsali'},
        {id:24,name:'asal',family:'khamsali'},
        {id:25,name:'morteza',family:'khamsali'},
    
];




let userListcontainer=document.getElementById('list')
let userpageShow=document.getElementById('pagination')
// console.log(userListcontainer,userpageShow)




let rowContainer=5
let currentPage=1
// let userContainer=document.createElement('div')
function User(DataUser,userListcontainer,rowContainer,currentPage){

    userListcontainer.innerHTML=''

    let endContainer=rowContainer*currentPage
    let startRow=endContainer-rowContainer

    let show=DataUser.slice(startRow,endContainer)
    // DataAllUser.forEach(function(user) {
    show.forEach(function(item) {
        let newDiv=document.createElement('div')
        newDiv.innerHTML=item.name+" "+item.family
        newDiv.classList.add('item')
        console.log(newDiv)
        userListcontainer.append(newDiv)

    });

    
    
}

    function   horizontalContainer(DataAllUser,userpageShow,rowContainer){
        userpageShow.innerHTML=''
        let lengthArray=Math.ceil(DataAllUser.length)/rowContainer;
      for(let i=1;i<lengthArray+1;i++){
        
    let bttn=pageShow(i,DataAllUser)
        userpageShow.appendChild(bttn)
    }  


    // console.log(show)

}
function pageShow(numer,DataUser){

    
    let btn=document.createElement('button')
    btn.innerHTML=numer
    btn.classList.add('pagination-btn')
    // userpageShow.innerHTML=btn



    btn.addEventListener('click',function(){
        currentPage=numer
        User(DataAllUser,userListcontainer,rowContainer,currentPage)
    })


    return btn
}


User(DataAllUser,userListcontainer,rowContainer,currentPage)
horizontalContainer(DataAllUser,userpageShow,rowContainer)

pageShow(numer,DataAllUser)















