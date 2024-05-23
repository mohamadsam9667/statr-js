
// @ -1,718 +1,726 @@


// var a=2;
// var b=3;
// var c="i am";
// a=a+3;
// b=b+5;
// c=c+" string";
// console.log(a,b,c);
// var برای تعریف همه متغیر ها 
// let برای جاهای خاص برای یه قسمت 
// const یه عدد ثابت کلا     
// var FristName=0;
// var FristName1="محمد سام ";
// FristName=FristName1.length;
// console.log(FristName);
// var firsLetterOflast="";
// var last="sam";
// firsLetterOflast=last[2];
// console.log(firsLetterOflast);
// var Myarray=["sam1","sam","dog"]; تابع  pop برای حذف عنصر اخر 
//   Myarray.pop();
// console.log(Myarray); 
// var Array=["novamber","septamber","pleas"]    برای حذف shift تابع 
// myDelet=Array.shift();
// console.log(Array);
// const variable=true;
// console.log(typeof variable);
// let  j=0;
// while(j<9)
// {
//   console.log(j)
//   j++;
// }

// // => Hello world!// => Hello QuickRef.ME
// // Prints error message to stderr
// */
 
// console.log(courses[1].Name);
// const resault=JSON.stringify(courses);
// console.log(resault);

// for(let c of courses)
// {
//   console.log(c);

// courses.forEach(function(c){
//   console.log(c);
// const newcours=courses.filter(function(two){
//   return two.Iscomplate===false
// }).map(function(c){
//  return c.Name;
// console.log(newcours);
// })
// // })
// let x="10";
// if(x===10){
//   console.log("x=10");
// }
// else{
//   console.log("sam god");
// }
/*
const courses =[
  { 
    id:1,
    Name:'html',
    time:19,
    Iscomplate:true

  },
  { 
    id:2,
    Name:'css',
    time:12,
     Iscomplate:false

  }
]
const addnum= (num1=20,num2=30)=> num1+num2;
addnum(10,20);
console.log(addnum(10,20));
courses.forEach(x=>console.log(x));
class Person{
  constructor(firstName,lastName,birthDay){
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthDay=birthDay;
  }
  fullname(){
    return `${this.firstName} ${this.lastName}`;
  }
}

const student1=new Person('sam','samani','2001')
console.log(student1);

// choice.innerHTML="<h1>sam</h1>";
 // choice.style.background="red";
 //برای اینکه بفهمی از چیا میتونی استفاده کنی اینو بزن تو همین console.log(e)
*/

// console.log(e.target.className);
// e.target.className="error";
// ul.children[1].innerHTML="gang";
// const choice=document.querySelector("#my-form");
// const btn=document.querySelector(".btn");
// btn.addEventListener("mouseout", (e)=>{
 
//   document.querySelector(".items").children[1].innerHTML="<h1>sam</h1>";
// });
/* const form=document.querySelector("#my-form");
const inputusername=document.querySelector("#name");
const msage=document.querySelector(".msg");
const emmail=document.querySelector("#email")
const users=document.querySelector("#users")
form.addEventListener('submit',onsubmit)


function onsubmit(e)
{  
e.preventDefault()
  console.log( inputusername.value)
  if( inputusername.value===''|| inputusername.value ==='')
  {
    msage.innerHTML="this is error"
    msage.classList.add("error")

    setTimeout(()=>{
      msage.innerHTML='';
      msage.classList.remove("error");
  },3000)
}
else{
  const li=document.createElement("li")
  li.appendChild(document.createTextNode(inputusername.value+""+emmail.value));
  users.appendChild(li);
  inputusername.value="";
  emmail.value="";

}
}


function muobject(myage,mysalary)
{
  
}
// start learen
const courses =[
  { 
    id:1,
    Name:'html',
    time:19,
    Iscomplate:true

  },
  { 
    id:2,
    Name:'css',
    time:12,
     Iscomplate:false

  }
]

const courses=[
  {
    id:1,
    name:'sam',
    time:10,
    Iscomplate:true
  },
  {
    id:2,
    name:'abolfazle',
    time:12,
    Iscomplate:false
  }
] ;
courses.forEach(x=> console.log(x));

*/




// class Person{
//   constructor(firstname , lastname , birthDate)
//   {
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.birthDate=birthDate;
//   }
// }
// const samy=new Person('sam', 'irani ','1930');
// console.log(samy.firstname)
/*
{ <script>
document.addEventListener('DOMContentLoaded', function(){
    var typed = new Typed('#typed-text', {
        strings: ["شاید شما هم قصد داشته باشید که شروع به برنامه نویسی کنید و این سوال برای شما پیش اومده که چگونه برنامه نویسی را شروع کنیم و یا چطور برنامه نویسی کنیم این سوال اکثر کسایی هست که با شغل محبوب برنامه نویسی آشنا می‌شوند و قصد دارند برنامه را حرفه ای شروع کنند . خوندن این مقاله کمکت می‌کنه با ویژگی‌های مختلفی که بین زبان‌های برنامه نویسی تمایز ایجاد می‌کنه آشنا بشی. این کار باعث میشه بتونی راحت‌تر مسیرت رو انتخاب کنی. به علاوه انتخابت منطقی‌تر و مطمئن‌تر میشه. پس تا پایان مقاله همراهم باش!"],
        typeSpeed: 50,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        onComplete: function(self) {
            console.log('تایپ کردن متن به پایان رسید.');
            // می‌توانید کدی که بعد از اتمام تایپ کردن متن اجرا می‌شود را اینجا قرار دهید
        }
    });
});
</script> }*/








//   class Person {
//     constructor(firstName, lastName ,birthDate)
//     {
//       this.firstName=firstName;
//       this.lastName=lastName;
//       this.birthDate=birthDate;
//     }
//   }
// const student1=new Person('sam','rezazadeh',2002)
// console.log('student');
// console.log(student1);

// const color='yello';
      /////switch
// switch(color)
// {
//   case 'red' :
//     console.log("it is red")
//     break;
//   case 'blue' :
//     console.log("it is blue")
//     break;
//   case 'yellow' :
//     console.log("it is green")
//     break;
//   default:
//     console.log("it is undefined")
// }
// const courses=[
//   {
//     id1:1,
//     name1:'sam',
//     type1:'css'
//   },
//   {
//     id2:2,
//     name1:'ilya',
//     type2:'html'
//   }
// ];
// const addNum=(num1=12,num2=10)=>num1+num2
// console.log(addNum(3,19))
//courses.forEach(x=>console.log(x))
// let hi=(sam)=>{console.log(`hony \t ${sam}`)}
// // hi('ilia')
// // let i=0;
// let names=['davod ','esmail', 'yazdan','alireza','hasan'];
// // names.map((name)=>{console.log(`hady ${name}`)})
// // let types=['css','html','java scripte','ruby','go'];
// // types.map((type)=>{i++,console.log(`language ${type} ${i}`)})
// var transformed =names.map((name)=>{return `andy ${name}`})
// console.log(transformed)

// class Person
// {
//   constructor(firsName,lastName,birthDate)
//   {
//     this.firsName=firsName;
//     this.lastName=lastName;
//     this.birthDate=birthDate;
//   }
//   getfullname()
//   {
//     return `${this.firsName}\t${this.lastName}\t${this.birthDate}`;
//   }


// }
// const student=new Person('sam','rezazadeh',2002)
// console.log(student.getfullname())
// const student1=new Person('amir','haripater',2021)

// console.log(student1.getfullname())

// const ul=document.querySelector(".items")
// //ul.children[1].remove();-
// ul.children[1].innerText="last item";

// // console.log(ul);
// const btn=document.querySelector(".btn")
// btn.computedStyleMap.color="red"
// // console.log(btn)
// const ui=document.querySelector(".items")
// ui.children[1].innerHTML="sam is one god"
// console.log(ui)
// console.log(e.target.className)
// e.target.className="error"
// //document.querySelector("#my-form").style.background='#ccc'
// const bottun=document.querySelector(".btn")
// //const items=document.querySelector(".items")
// bottun.addEventListener("click",(e)=>
// {
//   e.preventDefault();
//   console.log(e.target.className)
//   document.querySelector("i").classList.add('bg-dark')  

// })

// const btn=document.querySelector(".btn");

// btn.addEventListener( "mouseout" ,(e)=>
// {
//  //e.preventDefault();
//  // console.log("mouseout")
//  // document.querySelector(".items").children[1].innerHTML="<h2>sam</h2>"    
//  // document.querySelector("#my-form").style.color="red"
/*


myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  // Create a new list item
  const li = document.createElement('li');
  const il=document.createElement('li');
  // Set the text content of the list item to the entered name
  li.textContent = nameinput.value;
  il.textContent=emailinput.value;
  // Append the new list item to the users list
  users.appendChild(li);
  users.appendChild(il);
  
  // Clear input fields
  console.log(nameinput.value)
  console.log(emailinput.value)
  nameinput.value = '';
  emailinput.value = '';
}*/ 
// })


// const myform = document.querySelector("#my-form");
// const nameinput = document.querySelector("#name");
// const emailinput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const users = document.querySelector("#users");

// myform.addEventListener('submit',onSubmit)
//   function onSubmit(e){
//     e.preventDefault();
//     console.log(nameinput.value)
//     if(nameinput.value===''||emailinput.value==='')
//     {
//       msg.innerHTML="<h5>error not found<h5>";
//       msg.classList.add("error")
//       setTimeout(()=>{
//         msg.remove();
//       },3000)
//     }
//     else{
//       const li=document.createElement("li")
//       li.appendChild(document.createTextNode(nameinput.value," : ",emailinput.value))
//       users.appendChild(li)
//       nameinput.value=""
//       emailinput.value=""

    
//     }
//   }
// // const form=document.querySelector("")
// const array=[1,2,3,,4,5,6];
// console.log(array.map[0])

// let person=[
//   {nomber:"20" ,hobby:"palay" , salario:"silent " },
//   {nomber:"41" ,hobby:"football" , salario:" atack" },
//   {nomber:"60" ,hobby:"voliball" , salario:"lose " },
//   {nomber:"20" ,hobby:"tenis" , salario:"win" }
// ];

// person.filter(function(person,index){
//   console.log(person.nomber==="20",index);
// });

// console.log (person.nomber)



// const courses=[
//   {
//     id:1,
//     name:"sam",
//     core:"i3",
//     isComplate:false
//   },
//   {
//     id:2,
//     name:"sara",
//     core:"i7",
//     isComplate:true
//   }
// ];


// courses.forEach(x=>console.log(x.id>1))







// const massMark=78;
// const highMark=1.69;
// const massJohn=92;
// const highJohn=1.95;

// const BMImark=(massMark/highMark**2);
// const BMIjohn=(massJohn/(highJohn*highJohn));
// console.log(BMImark>BMIjohn);
// const user_info=
// alert(`name is ${user_info} space ${typeof user_info}`);


// let string=+"123";
// alert(typeof string);
// let number=+Number(string);

// // alert(typeof number);
// var number1=prompt("enter number one:",1)
// let number_one=Number(number1)
// var number2=prompt("enter number two",2)
// let number_two=Number(number2)
// var number3=prompt ("enter number three",3)
// let number_three=Number(number3)
// var sum =number_one+number_two+number_three;
// var average=sum/3;
// alert(average);



// var age_user=Number(prompt("enter your age : ", 15));
//   if(age_user>=18)
//   {
//     alert("شما مجاز به وردو در سایت هستید");
//   }
//   else 
//   {
//     alert("شما مجاز به ورود در این وب سایت نیستید");
//   }



// var number1=Number(prompt("enter number1:",1));
// var pow=Number(prompt("enter pow :",1)); 
// var answer=1;
// for(var i=1;i<=pow;i++)
// {

//   answer=answer*number1;
// }
// alert(answer)

// const min =Number(prompt("enter your age user:" ,1380))

// const hour=min/60;



// if(isNaN(min))
//   {
//     alert(`رکب خوردی کیومرث عدد وارد کن`)
//   }
//   else{

//     alert(`hour=${hour}`);
//   }





// const age=Number(prompt("سن خود را وارد کنید:",15))
// const gender=String(prompt("جنسیت خود را وارد کنید","مرد"));

// if(isNaN(age && gender==="")){
//   alert("مشکل در هنگام وارد کردن اطلاعات ")
// }
// else{
  
// if(age>18 || gender==="مونث")
//   {
//    alert("ورود شما مجاز می باشد ");
//   }
//   else {
//     alert("ورود شما غیر مجاز است");
//   }
// }


// let num1=3,num2=4;
// let num=(num1*num2===12)? alert("بله 12 هست"): alert("نه 12 نیست");

// let score=prompt("وارد کنید نمره خود را",10);

// switch(score){
//   case 19:      
//   case 18:
//     case 20:  
//     alert("A");
//     break;
//     case 15:
//     case 16:
//     case 17:
//       alert("B");
//       break;
//     case 12:
//     case 13:
//     case 14:  
//     alert("C");
//    break;
//     default :
//     alert("بدبخت شدی");
//     break;

//     }



// var Showvalue=function() {
//   var num1=2;
//   var num2=3;
//   var resaultname=num1+num2;
//   alert(resaultname); 
// }

// Showvalue()

// const number=Number(prompt("عدد مورد نظر را برای تشخیص زوج یا فرد بودن وارد کنید",1));
// if(isNaN(number))
//   {
//     alert("error")
//   }
//   else{
//     odd_or_even(number);
//       }

//     function odd_or_even(number){
//     if(number%2==0)
//       {
//         alert("عدد مورد نظر شما  زوج است");
//       }
//       else{
//         alert("عدد مورد نظر شما فرده");
//       }
//     }

// let num1=1;
// var num2=3;
// var num3=4;

// function sum(num1,num2,num3){
//   let average=0;
//   average=(num1+num2+num3)/3;
//   alert(average)
//   }
// sum(3,3,1);



// function sumNumbers(num1,num2){
//   var resault=num1+num2;
//   alert(`resault=${resault}`);
// }

// var sumresault=sumNumbers(2,8);
// alert(`sum=${sumresault}`)


// var number1=prompt('enter first number:');
// var number2=prompt('enter secound number:');
  
// function showpow(num1,num2)
// {
//   return num1**num2
// }

//   var pow=showpow(number1,number2)
//   alert(pow)


// alert("form register");

// var user_name=prompt('userName=','sam');
// var password=prompt('password=','sam12qwxakd');

// if (user_name.length<3 ){
//   alert("یوزر نیم شما باید شامل 3 حرف باشد");
// }
// else if(password.length<8)
//   {
//     alert("پسورد شما باید حداقل شامل 8 حرف باشد");
//   }
// else{
//   alert("ثبت نام با موفقیت انجام شد")
// }





// 5

// var user_name=prompt(":یوزر نیم خود را وارد کنید ",'sam_12');
// if (user_name.toLowerCase()==('ali')){
//   alert("خوش آمدید")

// }

// // start after two day


// else{
//   alert("error")
// }



// var text="Am sigma realy is java         ";
// var counter=text.charCodeAt(0);
// var counter=text.concat("i'm sam");
  // console.log(text.trim()); 
  // console.log(text.search("m"));
  // console.log(text.indexOf("si"))
  // console.log(text.includes("si"));//boolean=> true || false
  // console.log(text.slice(2,9));  از 7 شروع میکنه و تا 9 میره
  // console.log(text.substr(8,13));از 8 شورع مینه و تا 13 تا بعد اونو میره
  // console.log(text.substring(7,17))
// console.log(Math.PI)
// console.log(2**3)
// console.log(Math.pow(2,4))
// console.log(Math.sqrt(16))
// console.log(Math.abs(-10))

// console.log(Math.min(20,30,10,50,1,2,3,-1,0))
// console.log(Math.max(20,30,10,50,1,2,3,-1,0))
// console.log(Math.trunc(12.8 ))
// console.log(Math.round(12.6))
// var capcha=Math.random()*100000;
// alert (Math.floor(capcha));

//assignment
// number+=1;|| number=number+1;||number ++

//  var number1=2;
//  number2=--number1;

//  console.log("number1:",number1)
//  console.log("number2:",number2)
// var number2;
//  number2=number1++;
//  console.log("number1:",number1)
//  console.log("number2:",number2)



// for(var i=0;i<5;i++)

//   {
//     alert('YES')

//   }




// for (let i=0;i<=100;i++)
//   {
//     if( i %2===0)
//       console.log(`number[${i+1}]=`,i)
//   }

// let commodity=0;
// let sum=0;
// let average=0;
// for (let i=0;i<5;i++)
//   {
//    commodity=Number(prompt("price your commodity:",10))
//     sum=sum+commodity;
//   }
//   average=sum/5;
// console.log(average)

// let commodity=0;
// let sum=0;
// let average=0;
// for (let i=0;i<5;i++)
//   {
//    commodity=Number(prompt("price your commodity:",10))
//     sum=sum+commodity;
//   }
//   average=sum/5;
// console.log(average)


// var number_user=Number(prompt("enter your number:",20));
// var partusern=0;
// var sum=0;
// for (let i=0;i=(number_user/10)!=0;i++)
//   {
//     sum=sum+(number_user%10)
//     number_user=Math.floor(number_user/10)

//   }
// // console.log(sum)


// var number_user=Number(prompt("enter number :",20));
// var counter=0;
// var sum=0;
// var i=0;
// if (number_user==0)
//   {
//     console.log("1");
//   }
//   else{
   
// while(number_user/10!=0)
//   {
//     sum=sum+number_user%10;
//     number_user=Math.floor(number_user/10);
//     // counter++; 
//   }
//   console.log(sum);
  // console.log(counter)  
   
  // }
// var number1=Number (prompt("enter number start bound"),1);
// var number2=Number (prompt("enter number end bound"),1);
// var i=0;
// if(number1%2!=0)
//   {
//   number1=number1+1;
    

//     while((number1<number2)){
//       console.log(number1)
//       number1=number1+2;
//       i++;
//     }
//   }




// اعدادی را به تعداد دلخواه از کاربر دریافت کند و میانگین آن را محاسبه کرده و نمایش دهد
  
// var counter_input=Number(prompt("enter counter inpute",3));
// var input_number=0;
// var sum=0 ; 
// for(var i=0;i<counter_input;i++)
//   {
//     input_number=Number(prompt("enter number",10));
//     sum=sum+input_number;
//   }
//   console.log("average=",sum/counter_input);

//اعدادی را به تعداد دلخواه کاربر دریافت کنید ومیانگین آنها را حساب کرده و نمایش دهید


// var number=0;
// var counter=-1;
// var sum=0;
// var average=0;
// while(number!=-1)
//   {
//     sum=sum+number;
//     counter++;
//     number=Number(prompt("enter your number:"));
//   } 
  
//   console.log(counter)
//   console.log(sum)


// average= sum/counter
// console.log(average);


// var pow=1;
// var number=Number( prompt("enter number botom power:",2));
// var power=Number (prompt("enter ypur power:",3));
// for(var i=0;i<power;i++)
//   {
//     pow=pow*number;
//   }

// console.log(pow);

// var number=Number( prompt("enter number bottom power:",2));
// var power=Number (prompt("enter ypur power:",3));
// var i=0;
// var pow=1;
// while(i<power)
//   {
//     pow*=number;
//     i++;
//   }

// console.log(pow)

// var power=Number (prompt("enter ypur power:",3));var number=Number( prompt("enter number bottom power:",2));
// var pow=1; 
// i=0;
// do{
//   i++;
//   pow*=number;

// }while(i<power)

// console.log(pow)
// var Jobs=["mechanike", "docter","developer","engineer","DevOpes"];

// console.log(Jobs);

// console.log(Jobs.length);

// console.log(Jobs[10])



// var scores=[10,9,8,7,6,45];
// console.log(scores);

//  scores.push(2);
// console.log(scores);
// scores.unshift(123);
//  scores.pop();
// console.log(scores);

// let object={
//     name:"sam",
//     age:20,
//     family:"rezai"
// };


// console.log(object['family'])
// console.log(object.age)

// var object =[
//   {
//   id:1,
//   name:"sam",
//   lastname:"reazazade",
//   age:21,
//   email:"@ali2frt.ir@gmail.com"
//   },
//   {
//     id:2,
//     name:"ilia",
//     lastname:"rezazad",
//     age:16,
//     email:"ilia@gmail.com"
//   },
//   {
//     id:3,
//   name:"sara",
//   lastname:"javado",
//   age:22,
//   email:"sara@gmail.com"
//   }
// ];



// var user_name=prompt("enter User_name:");
// var Age=(prompt("enter AGE"));
// var Last_name=prompt("enter last_name:");
// var Email=prompt("enter your email adress:");

// if (user_name.length<3  || user_name.length>10)
//   {
//     alert("نام حداقل سه حرف و حداکثر 10 حرف می باشد.");
//   }else if(Last_name.length<3||Last_name.length>15){
//     alert("نام خانوادگی حداقل دارای  3 حرف و حداکثر دارای 15 حرف باشد.");
//   }else if(Age.length>4||isNaN(Age))
//   {
//     alert("سن حد اکثر سه رقم است");
//   }



// else{
// var user_register=[
//   {
//     name:user_name,
//     lastname:Last_name,
//     age:Age,
//     email:Email

//   }
// ];
// object.push(user_register);
// console.log(object)
// }

// var user=[
//   'sam',
//   'sara',
//   'leyla',
//   'sahar',
//   'sanaz',
//   'mahnaz',
//   'ali',
// ];

// user.forEach(function(x){
//   console.log(x+"sa");
// })


// var numbers=[
//   18,19,20,12,15
// ];
// numbers.forEach(function(number){
//   console.log(number+12);
// })

