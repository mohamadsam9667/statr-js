

let $=document
// console.log(inputAuthor,inputYear,inputTitle) for test select

let bookArray=[];

let parentTable=$.getElementById('book-list')
// console.log(parentTable) for test

let  trElem=$.createElement('tr')
            let thElem=$.createElement('th')


            let inputTitle=$.getElementById('title')
            let inputAuthor=$.getElementById('author')
            let inputYear=$.getElementById('year')

function adder(event){
    
    event.preventDefault()
    let inputTitle=$.getElementById('title')
    let inputAuthor=$.getElementById('author')
    let inputYear=$.getElementById('year')
        
        let newItem={
            id:bookArray.length+1,
            title:inputTitle.value,
            author:inputAuthor.value,
            year:inputYear.value
        };

        bookArray.push(newItem)
        setLocalStorage(bookArray);
        inputTitle.value=''
       inputAuthor.value=''
       inputYear.value=''
    }



    function setLocalStorage(book){
        localStorage.setItem('books',JSON.stringify(book))
        // adder
        
        togenerate(book)
    }
// localStorage.clear()
    

// console.log(localStorage.getItem('books'))
function togenerate(books){

    parentTable.innerHTML=''
        books.forEach(function(book){
            
            let  trElem=$.createElement('tr')
            let thElemTitle=$.createElement('th')
            let thElemAuthor=$.createElement('th')
            let thElemYear=$.createElement('th')
            // console.log(book.id )
// let array=localStorage.getItem('books')



            thElemTitle.innerHTML=book.title
            thElemAuthor.innerHTML=book.author
            thElemYear.innerHTML=book.year
            
            trElem.append(thElemTitle,thElemAuthor,thElemYear)

            
            parentTable.append(trElem)
            
            
            
            
            // console.log(parentTable)
        });

    
    }


document.addEventListener('DOMContentLoaded', () => {
    let arrayLocal=localStorage.getItem('books')
    // console.log(arrayLocal)
    if(arrayLocal){
        bookArray= JSON.parse(arrayLocal)
       
       togenerate(bookArray)
    }

});








const btnAdd = $.querySelector('.add-btn')
btnAdd.addEventListener('click',adder)















