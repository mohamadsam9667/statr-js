let todoItem=document.querySelector('.todo')
let cloumnStart=document.querySelectorAll('.status')
const btnAdd=document.getElementById('add_btn')
let inputText=document.getElementById('overlay')
let todoForm=document.getElementById('todo_form')
let todoSubmit=document.getElementById('todo_submit')
let todoInput=document.getElementById('todo_input')


let dragge=null



btnAdd.addEventListener('click',adderItem)
todoSubmit.addEventListener('click',recordHandeler)


cloumnStart.forEach((column) => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', dropHandeler);
  });


  todoItem.addEventListener('dragstart',setItem)

function setItem(event){
    dragge=todoItem
    event.dataTransfer.setData('text/plain', 'Buy a Pizza');
}

function dragOver(event){
   
    event.preventDefault();

}

function dropHandeler(event){
    event.preventDefault();


  if (!event.target.classList.contains('status')) {
    return;
  }


  event.target.appendChild(dragge);
    
}


function adderItem(){
    todoForm.classList.add('active')
    inputText.classList.add(('active'))

}

function recordHandeler(){

    let father1=document.getElementById('no_status')
    let spanT=document.createElement('span')
    spanT.classList.add('close')
    spanT.innerHTML='&times;'
    console.log(father1)
    newDiv=document.createElement('div')
    newDiv.classList.add('todo')
    newDiv.setAttribute('draggable',true) 
    newDiv.innerHTML=todoInput.value
    
    newDiv.append(spanT)
   console.log(newDiv)
   father1.append(newDiv)

    newDiv.addEventListener('dragstart',function(event){
        dragge=newDiv
        event.dataTransfer.setData('text/plain', newDiv.innerText);
    })


   todoInput.value=''
    todoForm.classList.remove('active')
    inputText.classList.remove(('active'))

}

