
//project1
  // start project Drag and Drop
// let todoItem=document.querySelector('.todo')
// let cloumnStart=document.querySelectorAll('.status')
// const btnAdd=document.getElementById('add_btn')
// let inputText=document.getElementById('overlay')
// let todoForm=document.getElementById('todo_form')
// let todoSubmit=document.getElementById('todo_submit')
// let todoInput=document.getElementById('todo_input')


// let dragge=null



// btnAdd.addEventListener('click',adderItem)
// todoSubmit.addEventListener('click',recordHandeler)


// cloumnStart.forEach((column) => {
//     column.addEventListener('dragover', dragOver);
//     column.addEventListener('drop', dropHandeler);
//   });


//   todoItem.addEventListener('dragstart',setItem)

// function setItem(event){
//     dragge=todoItem
//     event.dataTransfer.setData('text/plain', 'Buy a Pizza');
// }

// function dragOver(event){
   
//     event.preventDefault();

// }

// function dropHandeler(event){
//     event.preventDefault();


//   if (!event.target.classList.contains('status')) {
//     return;
//   }


//   event.target.appendChild(dragge);
    
// }


// function adderItem(){
//     todoForm.classList.add('active')
//     inputText.classList.add(('active'))

// }

// function recordHandeler(){

//     let father1=document.getElementById('no_status')
//     let spanT=document.createElement('span')
//     spanT.classList.add('close')
//     spanT.innerHTML='&times;'
//     console.log(father1)
//     newDiv=document.createElement('div')
//     newDiv.classList.add('todo')
//     newDiv.setAttribute('draggable',true) 
//     newDiv.innerHTML=todoInput.value
    
//     newDiv.append(spanT)
//    console.log(newDiv)
//    father1.append(newDiv)

//     newDiv.addEventListener('dragstart',function(event){
//         dragge=newDiv
//         event.dataTransfer.setData('text/plain', newDiv.innerText);
//     })


//    todoInput.value=''
//     todoForm.classList.remove('active')
//     inputText.classList.remove(('active'))

// }











// project 2
// light mode and dark mode

// let switchBtn=document.querySelector('.switch')



// let moon
// let light=document.querySelector('.moon')

// let flag=false


// switchBtn.addEventListener('click',function(){
//   if(flag===false){
//     document.body.classList.add('dark')
//     document.body.classList.remove('.moon')
//     if(flag===false){
//       localStorage.setItem('theme','dark')
//     }
//     flag=true
//   }else{
//     document.body.classList.remove('dark')
//     document.body.classList.add('.moon')
//     if(flag===true){
//       localStorage.setItem('theme','light')
//     }
//     flag=false
//   }
  
// })

// window.onload=function(){
//     if(localStorage.getItem('theme')==='dark'){
//       document.body.classList.add('dark')
//     }


// }

// let DeletBtn=document.getElementById('Delete')
// console.log(inputText)
// console.log(addButton)
// console.log(liForDelet)
// liForDelet.forEach(function(item){
  //    item.addEventListener('click',function(tem){
    //     tem.preventDefault()
    
    // })
    //    })



  //   btnDelete.addEventListener('click', () => {
//     ulFather.removeChild(newLi);  // Remove the list item from the list
// });

  // ulFather.forEach(item => {
  //   console.log(item)
  // });

// ulFather.forEach(function(item){
//   console.log(item)
// })


//     let ulFather=document.getElementById('todoList')
//     let inputText=document.querySelector('.form-control')
//     let addButton=document.getElementById('addButton')
//     let clearButton=document.getElementById('clearButton')
//     let liForDelet=document.querySelectorAll('completed well')

// addButton.addEventListener('click',adder)

// function adder(){
    
  
//   let newLi=document.createElement('li')

//     newLi.className='completed well'
  
//     let lableLi=document.createElement('label')  
  
//     lableLi.innerHTML=inputText.value
  
//     let btnComplate=document.createElement('button')
//     let btenDelete=document.createElement('button')
  
//     btnComplate.className='btn btn-success'
//     btenDelete.className='btn btn-danger'
  
//     btnComplate.innerHTML='Complate'
//     btenDelete.innerHTML='Delete'
  
  
//     newLi.append(lableLi)
//     newLi.append(btnComplate)
//     newLi.append(btenDelete)
//     ulFather.append(newLi)
//     console.log(newLi)



//     inputText.value=''

//     btnComplate.addEventListener('click',function(){
//       btnComplate.innerHTML='inComplate'
//     })    
//     localStorage.setItem('todoList',`contenet:${inputText.value},status:${btnComplate.innerHTML}`)




//     btenDelete.addEventListener('click', () => {
//       ulFather.removeChild(newLi);  // حذف لیست آیتم از والد
//   });

//   }
  






let addBtn=document.getElementById('addButton')
let TextUser=document.getElementById('itemInput')
let ulFather=document.getElementById('todoList')
let clearBtn=document.getElementById('clearButton')


let arrayTodo=[]




  function adderNewItem(){
  
        let todoItem={
          id:arrayTodo.length+1,
          title:TextUser.value,
          complete:false,
          
        }
        
        arrayTodo.push(todoItem)
        setLocalstorage(arrayTodo)
        todoGenerat(arrayTodo)
        
        TextUser.value=''
        TextUser.focus()
  
  
      }


      function todoGenerat(arrayTodo){
        ulFather.innerHTML=''
        arrayTodo.forEach(function(todo) {
          
          let newLi=document.createElement('li')
  newLi.className='completed well';
  let Lable=document.createElement('label')
  let btnComplete=document.createElement('button')
  let btnDelete=document.createElement('button')
  Lable.innerHTML=todo.title
  btnComplete.className="btn btn-success"
  // if(todo.complete){
  //   btnComplete='InComplate'
  // }else{
  //   btnComplete='Complate'
  // }
// btnComplete.addEventListener('click',changeText)
btnComplete.setAttribute('onclick', 'changeText(' + todo.id + ')');
btnComplete.textContent = todo.complete ? 'Complete' : 'InComplete';
// console.log(btnComplete.textContent)

  // btnComplete.setAttribute('onclick', 'changeText(' + todo.id + ')');
  // btnComplete.setAttribute('onclick','changeText('+todo.id+')');
  btnDelete.className='btn btn-danger'
  btnDelete.setAttribute('id','Delet')
  // valueComplate= btnComplete.innerHTML='Complete'
  btnDelete.innerHTML='Delete'
  btnDelete.setAttribute('onclick','removeTodo('+todo.id+')')

  newLi.append(Lable)
  newLi.append(btnComplete)
  newLi.append(btnDelete)
  ulFather.append(newLi)
  
});
} 



function setLocalstorage(arrayTodo){
  localStorage.setItem('array',JSON.stringify(arrayTodo))
  
}



function getLocalstorage(){
  
  let localStorageTodo=JSON.parse(localStorage.getItem('array'));
  console.log(localStorageTodo)
  if(localStorageTodo){
    arrayTodo=localStorageTodo
  }else{
    arrayTodo=[]
  }
  todoGenerat(arrayTodo)
}


function clearItem(){
  arrayTodo = []; // خالی کردن آرایه
  localStorage.removeItem('array'); // حذف از localStorage
  console.log(localStorage.getItem('array'))
  todoGenerat(arrayTodo); // به‌روزرسانی رابط کاربری
  console.log(arrayTodo)


}


function removeTodo(todoId){

  let localStorageLog=JSON.parse(localStorage.getItem('array'))

  arrayTodo=localStorageLog
  let indexForRemove=arrayTodo.findIndex(function(todo){
    return (todoId===todo.id)
  })

  arrayTodo.splice(indexForRemove,1)
  console.log(arrayTodo)
  setLocalstorage(arrayTodo)
  todoGenerat(arrayTodo)

}


function changeText(todoid){  

  arrayTodo.forEach(function(todo){
    if(todo.id===todoid){

      todo.complete=!todo.complete
      
    }
    return todo; 
  });

    // console.log(Text)
  setLocalstorage(arrayTodo)
  todoGenerat(arrayTodo)



}
TextUser.addEventListener('keydown',function(event){

  if(event.code==='Enter'){
    adderNewItem()
  }
  // if()
})


addBtn.addEventListener('click',adderNewItem)
clearBtn.addEventListener('click',clearItem)
window.addEventListener('load',getLocalstorage)
// localStorage.clear()











