
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



    fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=ff0baf24ca5e2fd6e3080d34ec865d81&units=metric',{
        
        method:'GET'
    }).then(res=>res.json())
    .then(data=>{
        console.log(data.weather[0])
        console.log(data.sys)
        

    })

