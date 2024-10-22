let h1Elem;
document.body.addEventListener('keydown',function(event){
    
    

    // if(event.key===Backspace){
        
    // }

    let keyValue=event.key
    let elementClick=document.getElementById(keyValue.toUpperCase())
    
    if(elementClick)
    {
    elementClick.classList.add('hit')
    
    elementClick.addEventListener('animationend',function(){
    elementClick.classList.remove('hit')
    })
}
    
    checkHtML(keyValue)

    // if(event.key===)
  

})

h1Elem=document.querySelector('.title')
function addHTML(keyValue){
    
    if (keyValue !== 'Backspace') {
        h1Elem.innerHTML += keyValue;
    }

}

    function checkHtML(keyValue){
        if(keyValue==='Backspace'){
            // h1Elem.innerHTML=h1Elem.innerHTML.splic(0,-1)
            h1Elem.innerHTML = h1Elem.innerHTML.slice(0, -1);
        }else{

            addHTML(keyValue)
        }
    } 



    /*
    let h1Elem = document.querySelector('.title');

document.body.addEventListener('keydown', function(event) {
    let keyValue = event.key;
    let elementClick = document.getElementById(keyValue.toUpperCase());

    // Check if the key exists on the virtual keyboard
    if (elementClick) {
        elementClick.classList.add('hit');

        elementClick.addEventListener('animationend', function() {
            elementClick.classList.remove('hit');
        });
    }

    // Handle backspace or add the key's value
    checkHTML(keyValue);
});

function checkHTML(keyValue) {
    if (keyValue === 'Backspace') {
        // Remove the last character from the h1 element
        h1Elem.innerHTML = h1Elem.innerHTML.slice(0, -1);
    } else {
        // Add the pressed key to the h1 element
        addHTML(keyValue);
    }
}

function addHTML(keyValue) {
    // Add the key pressed (except for Backspace) to the h1 element
    if (keyValue !== 'Backspace') {
        h1Elem.innerHTML += keyValue;
    }
}

    */