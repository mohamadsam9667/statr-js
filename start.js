
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

//دیتابیسی برای  ذخیره اطلاغات کاربران داشته باشید (آرایه ای از آبجکت ها )
//و سپس به کمک متد فور ایچ اطلاعات هر یوزر را به صورت جداگانه  در کنسول نمایش داد
// var Data_user=[
//   {
//   id:1,
//   name:"sam",  
//   family:"rezaazadeh"
//   },
//   {
//   id:2,
//   name:"ilia",
//   family:"rrezai"
//   },
//   {
//   id:3,
//   name:"abolfazle",
//   family:"khani"
//   }
// ];

// Data_user.forEach(function(Data_user){
//   console.log("name:",Data_user.name  + "family:",Data_user.family)
// // })
// var username=prompt("enter you name:");


//  var Array =[
//   "sam",
//   "sina",
//   "amir ","aria","hasan","mani","abolfazle"
//  ];

//  if (Array.includes(username)===true)
//   {
//     console.log("true")
//     console.log(Array[])
//     console.log(username);
    
//   }
//   else {
//     console.log("nist")
//   }


//  console.log(Array.includes("mani"));




// var Array =
// [
//   {id:1,
//    name:'sam',
//     family:"rezai"
//   },
//   {
//     id:2,
//     name:'sara',
//     family:"afsary"
//   },
//   {
//     id:3,
//     name:"sahar",
//     family:"rahi"
//   }

// ];

// var isuser=Array.some(function(array){
//   console.log(array ) ; 
//   return array.name==='sara';
// });

// console.log(isuser);




//یک فروشگاه آنلاین پیاده سازی کنید 
//به این شکل که فروشگاه خود را در دیتا بیسی ذخیره کرده (آرایه ) و آرایه ای برای سبد خرید کاربر داشته باشد 
//و از کاربر اسم محصولی که میخواهد به سبد خرید اضافه کند دریافت کند
// اگر محصول درخواستی کار بر در انبار شما موجود بود آن را به سبد خرید کاربر اضافه کند 
//وسپس مبلغ کل سبد خرید را محاسبه کرده و نمایش دهید 
//و در غیر این صورت به کاربر پیغام اتمام موجودی را نمایش دهید نکات قابل توجه :
//بعد از اضافه کردن محصول به سبد خرید کاربر سبد را در کنسول نمایش دهید 
//به طور دیفالت سه محصول با قیمت های مختلف در سبد خرید کاربر موجود باشد 


// var store_repository=[
//   {id:1,name:"sabon",pric:100},
//   {id:2,name:"shampo",pric:150},
//   {id:3,name:"lif",pric:200},
//   {id:3,name:"kise",pric:200}
// ]

// var cart=[
//   {id:1, name:"sabon",pric:100},
//   {id:2,name:"shampo",pric:150},
//   {id:3,name:"kise",pric:200}
// ]

// var name_kala=prompt("ener name your product:");
// var request=null;

// var isExsiste=store_repository.some(function(kala){
//   if (kala.name===name_kala)
//     {
//       request=kala;
//       return true;
//     }
// })


// if(isExsiste==true)
//   {
   
//     cart.push({
//       id:4,
//       name:request.name,
//       pric:request.pric
//     })
//     console.log(cart);
//     var sum=0;
//     cart.forEach(function(price){
//       sum+=price.pric;
//     });
//     console.log(sum)

//   }else{
//     console.log("موجود نیست")
//   }



// var ages=[21,19,20,23,10,21];
// var Isall=ages.every(function(age){
  
//   return age>18;
// })
// console.log(Isall);



// var group=[
//   {age:19,name:'hasan'},
//   {age:19,name:'abolfazle'},
//   {age:19,name:'sam'},
//   {age:19,name:'aria'}
// ]


// var ISage =group.every(function(ages){
//   return ages.age>18;
// })


// if (ISage==true)
//   {
//     console.log("shoma mogaz hasti");
    
//   }
  
//   else{
//     console.log("sik out")
//   }
    
  


// var numbers=[10,12,3,4,55,6,56,70,90  ];
//  var resault= numbers.splice(2,6,4,12,34,54,67)


// console.log(resault)



// var user =['sam ','ali','yazdan','ahmad'];

// var userIndex=user.findIndex(function(us){
//   return us=='yazdan';
// } )
// console.log(userIndex)




// var user =[
//   {id:1,name:'amir',age :23},
//   {id:2,name:'saman',age :21},
//   {id:3,name:'saman',age :17}
// ];


// var UseIndex=user.findIndex(function(User){
//   return User.name=='saman';
// })


// console.log(UseIndex)


















/*
exercise.txt
exercise.txt
يروزه فروشكاه را در نظر بكيريد
محصولات فروشكاه را داخل آرايه اى نخيره كرده و آرايه اى يراي سبد خريد در نظر بكيريد
و داخل سبد خريد 3 محصول بطور ديفالت قرار دهيد
منوبى را به كاربر نمايش دهيد كه شامل 2- كزينه است
كزينه اى - يراى" حذف" محصول انسبد خريد
و كزينه اى يراي إضافه كرين محصول به سبد خري
عمليات لازم يراي هر كرينه را بياده ساري كنيد
script.js
xercise >
*/

// var repository_store=[
//   {id:1 ,name:"mamad" , price:200},
//   {id:1 ,name:"sara" , price:300},
//   {id:1 ,name:"sahar" , price:500},
//   {id:1 ,name:"neda" , price:100},
//   {id:1 ,name:"nasrin" , price:700},
//   {id:1 ,name:"fariba" , price:1000},
//   {id:1 ,name:"sorya" , price:20},
//   {id:1 ,name:"simin" , price:200},
//   {id:1 ,name:"mohsen" , price:200},
//   {id:1 ,name:"alireza" , price:50}
// ]

// var cart=[
//   {id:1 ,name:"simin" , price:200},
//   {id:2 ,name:"mohsen" , price:200},
//    {id:3 ,name:"alireza" , price:50}
// ]

// var request_user =prompt("( (اضافه) ?حذف(حذف)   ,  اضافه کردن با )چی کار می خوای کنی اضافه کنی به سبد خرید یا حذف کنی؟");



// if(request_user==='اضافه')
//   {
//     var name_kala=prompt ("نام کالا:");
//       var kala_new;
//  var iscomplate=repository_store.some(function(store){
//    if(name_kala==store.name)
//     {
//       kala_new=store;
//       return true;
//     }
//    })
//    if(iscomplate)
//     {
//       var kala_add={
//         id:4,
//         name:kala_new.name,
//         price:kala_new.price
//       }
//       cart.push(kala_add);
//       console.log(cart)
//     }
//     console.log("اضافه شد")
    
//   }
//   else if(request_user=="حذف"){
//   var  name_kala=prompt("نام کالا شما چیست؟");      
//   var counter=cart.findIndex(function(Kala){
//     return Kala.name===name_kala;});
  
//         console.log(counter)
//   cart.splice(counter, 1);
//   console.log("Updated cart:", cart);
//   console.log("کالا از سبد خرید حذف شد");
// // "Product removed from the cart" in Persian
//           // cart.splice(counter, 1);
//           // console.log(cart);
//   } 
//       else{
//         console.log(cart);

//           console.log("کلا از نیست کلا");
//         }
      



/*



else if (request_user === 'حذف') {
  var name_kala = prompt("نام کالا شما چیست؟");      
  var counter = cart.findIndex(function(Kala){
    return Kala.name === name_kala;
  });

  if (counter !== -1) {
    cart.splice(counter, 1);
    console.log("Updated cart:", cart);
    console.log("کالا از سبد خرید حذف شد"); // "Product removed from the cart" in Persian
  } else {
    console.log("کالا در سبد خرید یافت نشد"); // "Product not found in the cart" in Persian
  }
} else {
  console.log("درخواست نامعتبر است");
}

if (counter !== -1) {
   cart.splice(counter, 1);
    console.log("Updated cart:", cart);
     console.log("کالا از سبد خرید حذف شد");
 // "Product removed from the cart" in Persian
 }







var kala_name = prompt("نام کالا شما چیست؟");
 var index = cart.findIndex(function(kala) 
 { return kala.name === kala_name; });
  if (index !== -1)
     { cart.splice(index, 1);
       //  حذف کالا از آرایه 
       cart console.log(cart); 
  console.log("حذف شد"); }
   else { console.log("کالا در سبد خرید یافت نشد"); } }*/ 



// var score=[10,12,44,56,63,19];
// score.map(function(number)
//       {
//         console.log(number+2)
//       }
//     )   
    // console.log(score)

    // يک يروره فروشكاه آنلاين بياده سازي كنيد

    // به اين صورت كه يک آرايه به عنوان سبد خريد كاربير در نظر بکيريد که 6 محصول به طور ديفالت دارد
    
    // سياست كارى فروشكاه به اين شكل است كه يراى محصولاتي كه بالاى 100 هزار تومان باشند، از مشترى هزينه يست دريافت نمى شود
    
    // و دائته باشند، يراى هر كدام 1000 تومان هزينه ارسال (هزينه يست) دريافت ميته
    // اما محصولاتي كه زير 100 هزار تومان قيمت داشقه باسيد،
    
    // لطفا قيمت كل سبد خريد را همراه با هزينه يست محاسبه كرده وبه كاربر نمايش دهين
    // I

// var store_repository=[
// {id:1,name:'عقیق' ,price:200},
// {id:2,name:' الماس',price:300},
// {id:3,name:'فیروزه',price:400},
// {id:4,name:'سیترین',price:100},
// {id:5,name:'یشم',price:1000},
// {id:6,name:'کوارتز',price:2000},
// {id:7,name:'یاقوت',price:120}
// ];


// var cart=[
//   {id:1,name:'عقیق' ,price:200},
// {id:2,name:' الماس',price:300},
// {id:3,name:'فیروزه',price:400},
// {id:4,name:'سیترین',price:100},
// {id:5,name:'یشم',price:1000},
// {id:6,name:'کوارتز',price:2000}
// ]
// var sum=0;
// var Sum=0;
// var jam2=cart.map(function(cost){
//   if(cost.price>320)
//   {
//           return sum+=cost.price;      
//         }
//       })
//       // console.log("هزینه ارسال نداره:",sum); 
//       var jam1= cart.map(function(const_send){
//         if(const_send.price<320)
//         {
//           Sum=Sum+10
//           return Sum=Sum+const_send.price;
//         }
//     })
// var total=Sum+sum;
//     console.log("هزینه  شما با ارسال:",total);




// var scores=[12,4,52,27,83,93,214,86,43,32];
// var number='amir/sam/mohamad';
// console.log(scores.indexOf(83));
// console.log(scores.slice(2,5));
// console.log(scores.join('  / '))
// console.log(scores.reverse())
// console.log(number.split('/'))





// e > E exercise.txt
// كلمه اى از كاربر دريافت كرده وچك كنيد كه كلمه وارد شده از هر دو سمت چب وراست به يك صورت خوانده
// مى شود يا خير

// به عنوان مثل كلمه
// gig
// از هر دو طرف به يك صورت خوانده مى شود

// T



// var inpute_name=prompt("یه اسم بگو تا بهت بگو همون جور که خونده میشه برعکسشم اونجوری خونده میشه");
  
//   last=inpute_name.split('').reverse().join('');
//   last_index=last[0];
//   first_index=inpute_name[0];
//   // console.log(last_index);
//   // console.log(first_index);
//   if(last_index===first_index)
//     {
//       console.log(inpute_name)
//     }
//     else{
//       console.log("بدبخت پسته خور")
// //     }






// يك پروزه تودوليست بياده سازى كنيد

// به اين صورت كه يك آرايه اى براى ذخيره تودوها داشته باشيد وبه طور ديفالت 3 تودو داخل آن ذخيره كنيد
// هر تودو مشخصاتى مثل آيدى، اسم تودو و وضعيت را دارد

// متويى به 3 كزيته به صورت زير به كاربر نمايش دهيد:
// اضافه كردن تودو .1
// حذف تودو .2
// انجام تودو (تغيير وضعيت) .3

// در قسمت اول اسم تودويى را از كاربر درياقت كرده وبه ليست تودوها اضافه كنيد
// در قهمت دوم اسم تودويى را از كاربر دريافت كرده وآن را از ليست تودوها حذف كنيد
// در قسمت سوم اسم تودو را دريافت كرده وهمان تودو را در وضعيت انجام شده قرار دهيد

// در بايان هر كدام از عملياتهاء ليست تودوها را در كنسول نمايش دهيد


// var todo =[
//   {id:1,name:'sam',condition:'انجام شده'},
//   {id:2,name:'aria',condition:'در حال ارسال'},
//   {id:3,name:'hasan',condition:'ارسال نشده'},
//   {id:4,name:'sara',condition:'حذف کالا'}
// ];

// var choice_user=prompt("نام کاربری خود را وارد کنید: 1)اضافه کردن تو 2)حذف تودو 3) انجام تودو (تغییر وضعیت)");
// if (choice_user==='1')
//   {
//    var name_user=prompt("نام خود را وارد کنید:");
//    var new_todo={
//     id:5,
//     name:name_user,
//     condition:'اضافه شده جدید'

//    } ;
//    todo.push (new_todo);
//    console.log(todo);
//   }
//   else if(choice_user==='2')
//     {
//       var user_name=prompt("نام کالا خود را وارد کنید");
//       var counter=todo.findIndex(function(index){
//         return index.name===user_name})
      
//         todo.splice(counter,1);
//       console.log(todo)
      
//     }
//     else if(choice_user==='3')
//       { 

//         var name_todo=prompt("نام تو دو  را وارد نمایید");
//         todo.map(function(chang){
//           if(chang.name===name_todo)
//             {return chang.condition='انجام شده '}
//         });
//         console.log(todo)
      
//       }else{
//         console.log("به آب شور ارومیه");
//       }



//یک پروژه تسک منیجمنت پیاده سازی کنید
//در این سامانه مدیر میتواند به کارمندان خود تسک های مختلفی بدهد 
//به عنوان مثال به آقای محمدی وظیفه خاصی را اعمال می کند 
// یک ساختار داشته باشید داخل آن 4 کارمند موجود بوده وهر کدام و ظایفی را بر عهده داشته باشند 
// سپس از مدیر اسم یه تسک دریافت کرده و اسم کارمندی که قصد اضافه کردن تسک به آن را دارد دریافت کنید
//و سپس تسک مورد نظر مدیر را به کارمند مورد نظرش اضافه کرده و لیست را در کنسول نمایش دهید


// var employee={
//   ali:['wordpress','html','css'],
//   sam:['js','react','tailwind','nodeJS'],
//   alireza:['pyton','php','laravel','jango'],
//   morteza:['pyton','backend','css']
// };



// var task=prompt("تسک مورد نظر درباره چیه؟");
// var user_task=prompt("فرد مورد نظر خود را برای انجام تسک وارد کنید");



// var worke_employee=employee[user_task];

// worke_employee.push(task);
// console.log(employee);




// var user_STR=prompt("وارد کنید متن مورد نظر خود را ");


// var kareakter=user_STR[0];
// var counter=0;
// for(var i=1;i<=user_STR.length;i++)
//   {

//     if(user_STR[i]===kareakter)
//       {
//         counter++;
//       }
//   }


// console.log(counter);


// var user1=['sam','mohamad','asal','negar','alireza','atena','reyhane','hanane'];


// var user2=user1;

// user1.push('sara');

// console.log("user1:",user1);
// console.log("user2:",user2);


// var Prouducte={
//   id:1,
//   name:'laptop',
//   price:1000

// };


// var new_producte=Prouducte;

// new_producte.count='100322';
// console.log(Prouducte);
// console.log(new_producte)

// var user_city=prompt("نام استان شما چیست ");

// var city=[
//   {name:"tehran" ,  state:'fershte / jordan / sada abad / chitgar / istgahyakhchal/shahr gods/nezam abad'},
//   {name:"qazvin", state:'norozian / janbazan / sabze meydon/meydon adle/alamot /ponk/khayam /ferdosi'},
//   {name:"gilan", state:"foman/ramsar /rodbar /javaherde / chaharfasle /lahijan/masale"}
// ];


// var states=city.filter(function(name_city){
//   if(user_city===name_city.name)
//     {
//       // console.log(name_city.state);
//       return name_city.state;
//     }
// })

// console.log(states);





// var all_questtion=[
//   {id:1,title: '2+1' ,answer: '3' },
//   {id:2,title: '2+2' ,answer: '4' },
//   {id:3,title: '1+4' ,answer: '5' },
//   {id:4,title: '2+4' ,answer: '6' },
//   {id:5,title: '2+5' ,answer: '7' },
//   {id:6,title: '2+6' ,answer: '8' },
// ];
 
// var score=0;
// var resault='';

// all_questtion.forEach(function(ques){
  
//        resault=prompt(ques.title+"?");
//       if( resault===ques.answer)
//         {
//            score++;
//         }
      
//     })
//   console.log("scores:",score);





//یک پروژه ماشین حساب پیاده سازی کنید
//به این صورت دو عدد را همراه با عملیات لازم ضرب و تقسیم و و.. از کاربر دریافت کرده  وعملات دلخواه روی اعداد وارد کنید 



// var number1=Number(prompt("عدد اول مد نظر خودرا وارد کرده"));
// var number2=Number(prompt("عدد دوم مد نظر خود را وارد کنید"));

// var symble=prompt(" + || - || * || / ?");
// var resault=0;
// switch(symble)
// {
//   case '+':
//     {
//       resault =number1+number2;breake;
//     } 
//   case '-':
//     {
//      resault=number1-number2
//     }
//   case '/':
//     {
//       resault=number1/number2;
//     }
//     case '*':
//       {
//         resault=number1*number2;
//       }
//   }

// console.log(resault);

//console.log("asm")

//فرض کنید در سامنه ای کار کردید که کاربر پسوردش را فاموش کره
//شما یوزر نیم میگیرید و پسوردشو بهش میدید
// اگر اسم طرف نبود و دیتا بیس بگو نیست


// var Data_base={
//   sam:['12hgasmd'],
//   mohamadali:['jhracv1k8'],
//   abase:['lasamiuw090']
// };

// var User_name=prompt("نام خود را وارد کنید؟");

// var main=Data_base[User_name];
// if(main)
//   {

//     console.log(main)
//   }
// else{
//   console.log("not existe")
// }


//ایول از ما یه کد محاسباتی میگیره اجامش میده و نتیجه رو به ما نشون میده البنه باید از console .log استفاده کرد
// console.log(eval("2*8 "));

// eval("var x=10")
// alert(x*3);


// function sumNumber(num1,num2=19){
//   return num1+num2;
// }

// console.log(sumNumber(1,));


// var i=10;
// setInterval(functio(){  
//   console.log(`sam(${i++}) `);
// },1000)




// var i=10;
// var timer=setInterval(function(){
//   if(i===0){
//     alert("Game Over")
//     clearInterval(timer);
//   }
//   console.log(i)
   
//   i--;
// },1000)




//تایمری بسازید 
// به طوری که از کاربر میزان دقیقه و ثانیه  را دریافت کرده و تایمری را با اطلاعات وارد شده استارت بزنید
// وزمانی که تایمر داده شد پیغام مناسبی نمایش داده شود


// var min=prompt("چنددقیقه؟");

// var second=prompt("چند ثانیه؟");


// var timer=setInterval(function(){
//   console.log(min +" : "+second)
//   if(second===0)
//     {
//       min--;
//       second=60;
//     }
//   second--;

//   if(second<=0 && min<=0)
//     {
//       console.log("time finish")
//       clearInterval(timer);
//     }
// },1000)


// var username=prompt("یوزر نیم خود را وارد نمایید");


// if(!username){
//   alert("لطفا یوزر نام خود را وارد کنید!")
// }
// else{
  
// }


// var usernumber=+prompt("عدد موردد نظر خود را وارد کنید")

// if(!usernumber){
//     console.log("چرت و پرت")
//   }else{
//     console.log(usernumber)
//   }

// setTimeout(function(num1=12,num2=8){
//   console.log (num1+num2)
// },3000)

// var isimag=true;


// setTimeout(function(){

// },5000 )





// var username=prompt("یوزر نیم خود را وارد کنید؟");


// var user=['ali','sam','mamad','ahmad','abase'];
 
// var loginflag = false;

// for (var i=0;i<user.length;i++)
//   {
//     if(username===user[i])
//       {
//         loginflag=true;
//       }
//   }
// if(loginflag)
//   {
//     console.log(".یافت شد");
//   }
//   else{
//     console.log(".یافت نشد");
//   }



// hosting
//یعنی قبل اینکه یه چیزیو تعریف کنی ازش استفاده کنی 
// num1=10;
// num2=20;

// //از نام1 و نام2 قبل از تعریف کردن استفاده کرده ایم

// console.log(num1+num2);
// var num1;
// var num2;







// num2=12;

// console.log(num1);

// var num1=10;
// var num2;






//توابعی که در یک وری ایبل ذخیره میشوند هوست نمی شوند 

// showValue()

// function showValue(){
//   console.log("sam");
// }

// هاست کردن در عبارت بالا معنی دارد ولی در عبارت پایین بی معنا می باشد


// showValue()



// var showValue=function(){
//   console.log(12+12);
// }

// در این عبارت ارور دریافت میکنیم در بالا نوشتیمش


//let const var   

//لت میتونه دوباره آپدیت بشه ولی نمی تونه دوباره تعریف بشه
// در یک اسکوپ مقدار لت مربوط به همون اسکوپه
  



// let h1element=document.getElementsByClassName("list-item")
// let h1Element=document.getElementById("title");
// let All_word=document.querySelectorAll(".list-item")
// // console.log(h1element)
// // console.log(h1Element)
// var i=0;
// All_word.forEach(function(item){
//   i--
//   item.innerText=item.innerText+`sam+${i}`;
// })
// console.log("sam",All_word)

// let H1Element=document.getElementById('title')
// console.log(H1Element.getAttribute('id'))
// H1Element.setAttribute('class','sam-ab')
// console.log(H1Element)


// let List=document.getElementsByClassName('list-item');

// List[0].setAttribute('class','samjnk')

// console.log(List  );


// let liElement=document.getElementsByClassName('list-item')


// console.log(liElement);


// let array=document.getElementsByClassName('list-item')

// array[0].setAttribute('id','alah')





// let h1tag=document.getElementById('tehran');

// h1tag.style.color='red';
// // h1tag.style.background="blue"
// h1tag.style.fontWeigth='bold'
// h1tag.style.fontSize='2em'


// let charakter=document.getElementById('title');
// charakter.innerText='sam sigma'
// let text=document.getElementsByClassName("list-item");
// text[0].innerHTML="sam";

// let Input=document.getElementById('input')

// console.log(Input.value);


// // let text=prompt("enter your text");
// let newdiv=document.createElement('div');
// // console.log(newdiv)
// // newdiv.innerHTML=text;
// // console.log(newdiv)
// newdiv.setAttribute('id','newattribute');
// console.log(newdiv)
// newdiv.style.fontFamily='34px';

// let ulList=document.querySelector('.list');
          
// let Newli=document.createElement('li');
// Newli.setAttribute('id','newli');
// Newli.innerHTML='sam is sigma'
// let Newli2=document.createElement('li');
// // Newli2.setAttribute('id ','newli2');
// Newli2.innerText="alah"
// ulList.append(Newli)
// ulList.appendChild(Newli2)
// console.log(ulList)

// let h1tag=document.getElementById('title  ');
// function function1(){
//   h1tag.style.color="red";
// }

// let trunon=document.getElementById('turnOn');
// let turnoff=document.getElementById('turnOff');

// let=bulbFlag=false;

// function functionsam(){
//     if(bulbFlag){
//       turnoff.setAttribute('src','./image/53962242623952001131352518123718268105134.jpg');
//       bulbFlag=false;
//     }else{
//       turnoff.setAttribute('src','./image/light.jpg') ;
//       bulbFlag=true
//     }
  
// }
 

// let username=document.querySelector('#username');
// let pass=document.querySelector('#password');

// function confirm(){

//   let userName=username.value
// let passWord=pass.value
// if(userName.length<=12){
//   console.log("یوزر کمتر  از 12 نویسه ");
// }
// if(passWord.length<=8){
//   console.log("پسور کمتر از 8 نویسه است ");
// }

// }

// let username=document.querySelector(".username");
// let password=document.querySelector(".password");
// let model=document.querySelector(".modal");

// function keyLog(){
//   let userName=username.value;
//   let passWord=password.value;

//   if (userName.length<=12 ||passWord.length<=8){
//     model.style.display='inline'
//   setTimeout(function(){
//     model.style.display='none';
//   },3000)
  
// }
//   else {
//     // model.style.display='none';
//     alert("sucsses full")
//   } 



// }






//keyPress  ----- keyDown ----- keyUp

// function keyLog()
// {
//   console.log("sam")
// }
// var i=0;
// let username=document.querySelector(".username");
// let password=document.querySelector(".password");

// let validation=document.querySelector(".user-validation");
// let validation_pass=document.querySelector(".password-validation");
// console.log(username,password,validation,validation_pass);   for test

// function keypres(){
//   // validation.style.display.none;
//  let lengthUser=username.value;

//   if(lengthUser.length<12){
//   // console.log("sam");
//   validation.innerHTML="must 12  character(Min)";
// validation.style.color = 'red';
// validation.style.display='block';
//     setTimeout(function(){
//   validation.style.display='none';

//     },10000)

//   }  
//   else{
//   validation.style.display='block';
//     validation.style.color='green';
//     validation.innerHTML='corect text'
// }
// }
// function keyup(){
//   var isrigth=true;
//   if(password.value.length<8)
//     {
//       validation_pass.style.display='block';
//       validation_pass.style.color='red';
//       validation_pass.innerHTML='Must contain 8 character (Min)';
//       isrigth=false;
//     }
//     else{
      
//   validation_pass.style.display='block';
//   validation_pass.style.color='green';
//   validation_pass.innerHTML="thats true";
//     }



// }
// let print=document.querySelector(".type");
// let username=document.querySelector(".username");
// let password=document.querySelector(".password");
// let validationUser=document.querySelector(".user-validation");
// let validationPassword=document.querySelector(".password-validation");
// let printer=document.querySelector(".type");
// console.log(printer)
// // console.log(validationUser,validationPassword,username,password);
// function exitUser(){

//   if(username.value.length>12)
//     {
//       validationUser.style.color='red';
//       validationUser.style.display='block';
//       validationUser.innerHTML="چون اسمت بیشتر  از 12 حرفه پس کسخلی";

//     }
    
//     else{
//       validationUser.style.color='green';
//       validationUser.style.display='block';
//       validationUser.innerHTML="چون اسمت کمتر از 12 حرفه پس تو بچه خوبی هستی";
//     }
// }

// function exitPass(){
//   if(password.value.length>8)
//     {
//      validationPassword.style.display='block';
//      validationPassword.style.color='green';
//      validationPassword.innerHTML="چون پسورد بیشتر از 8 حرفه تو سیگمایی"; 
//     }
//     else{
//       validationPassword.style.display='block';
//       validationPassword.style.color='red';
//       validationPassword.innerHTML="چون پسورد کمتر از 8 حرفه تو کسخلی هیچی نمیشی میدونم باباتم بهت گفته";    
//     }

// }




// function login(){
//   validationPassword.style.display="none";
//   validationUser.style.dispalay="none";
//   // validationUser.innerHTML="";
//   username.value="";
//   password.value=""
//   printer.style.display='block';
//   printer.style.color="yellow";
//   printer.style.width="200px"
// }



// let elementH1=document.querySelector("#clickH1");

// elementH1.addEventListener('click',function(){
  //   console.log("sam sigma");
  // })


  // let elementH1=document.querySelector("#clickH1");

  // elementH1.addEventListener("click",printer);
  
  // function printer(){
  //       // elementH1.classList.add('model');
  //       // elementH1.classList.remove('all');
  //     elementH1.classList.toggle('all')
  // }

// console.log(document.body);

// let ArayColor=['red','blue','green',"yellow",'black'];
// setInterval(function(){

//   let coolor=Math.floor(Math.random()*ArayColor.length);
  
//   console.log(coolor);
//   document.body.style.backgroundColor=ArayColor[coolor];
// },5000)



// setInterval(function(){


//   let ColorRed=Math.floor(Math.random()*255);
//   let ColorGreen=Math.floor(Math.random()*255);
//   let ColorBlue=Math.floor(Math.random()*255);
//   console.log(ColorRed);
//   let Color='rgb('+ColorRed+','+ColorGreen+','+ColorBlue+')';
//   document.body.style.background=Color;

// },2000)


// onChange (input) و هر موقع یه نوشته یا یه تغییری به اینپوت اضافه بشه این کار ها فراخون میشه



// function change(){
//   console.log("sam")
// }



//معمولا از ان چنج برای اینپوت ها استفاده نمیشه برای سلکت استفاده میشه 
// let selecte=document.getElementById('boxSelect');
// console.log(select)

// function schange(){

//     console.log(selecte.value);

// }



// let countrySelect1=document.querySelector(".countrySelect")
// console.log(countrySelect1);
// let citySelect=document.querySelector(".citySelect");
// console.log(citySelect);

// let Object={
//   Iran:['teharn','karaj','qazvin','gilan','mazandaran'],
//   Canada:['torento','vancover','vesvancor'],
//   US:['felorida','losanjelese','halyWODE']
// };




// let city=Object[namecity];
// console.log(city)

// function countrySelectFunction(){
// let citySelect=document.querySelector(".citySelect");
  
//   let namecity= countrySelect1.value;
  
//   if(namecity==='Please Select'){
//     alert(" koft")
//     citySelect.innerHTML="<option>"+"Select City"+"</option>";
//   }
//   else{
//     citySelect.innerHTML="";

//   Object[namecity].forEach(function(citys){
//       citySelect.innerHTML+="<option>"+citys+"</option>";  
  
//   });  
//   }
//   }

// let searchButton=document.getElementById('search');
// let inpute=document.querySelector('.search-bar');
// let City=document.querySelector(".city");
// // let shoWeather=document.querySelector("weatherloading")\
// let showErrore=document.querySelector(".errore");
// // console.log(showErrore);

// let citiesData={
//   tehran:{city:"Tehran",temp:12,weather:"rainy",humidity:23,windSpeed:32},
//   shiraz:{city:"Shiraz",temp:9,weather:"fine",humidity:12,windSpeed:14},
//   tabriz:{city:"Tabriz",temp:1,weather:"snow",humidity:43,windSpeed:12},
//   mashhad:{city:"Mashhad",temp:16,weather:"Sunny",humidity:7,windSpeed:24},
//   esfahan:{city:"Esfahan",temp:20,weather:"rainy",humidity:15,windSpeed:18},
// };
 
// searchButton.addEventListener('click',function(){
//   let markaz=citiesData[inpute.value];
//   // console.log(  citiesData[inpute.value]);
//   if(markaz){

//     document.querySelector(".weather").classList.remove('loading');
//     City.innerHTML=markaz.city;
//     document.querySelector(".temp").innerHTML=markaz.temp+"°C";
//     document.querySelector(".humidity").innerHTML="Humidity: "+markaz.humidity;
//     document.querySelector(".wind").innerHTML="Wind speed:"+markaz.windSpeed+"km/h";

//   }
//   else{
  
//     showErrore.style.display='flex';
//     setTimeout(function(){
//     showErrore.style.display='none';
//       console.log("alah")
//     },3000)


//   }
  

// })



// let searchButton=document.getElementById('search');
// let inpute=document.querySelector('.search-bar');
// let City=document.querySelector(".city");
// let shoWeather=document.querySelector("weatherloading")\
// let showErrore=document.querySelector(".errore");
// console.log(showErrore);

// let citiesData=[
//   {city:"Tehran",temp:12,weather:"rainy",humidity:23,windSpeed:32},
//   {city:"Shiraz",temp:9,weather:"fine",humidity:12,windSpeed:14},
//   {city:"Tabriz",temp:1,weather:"snow",humidity:43,windSpeed:12},
//   {city:"Mashhad",temp:16,weather:"Sunny",humidity:7,windSpeed:24},
//   {city:"Esfahan",temp:20,weather:"rainy",humidity:15,windSpeed:18},
// ];
    // addEventListener('click',function(){
    //   citiesData.find(function(item){
    //     if( item.city===inpute.value)
    //       {
    //         document.querySelector(".weather").classList.remove('loading');
    //         City.innerHTML=item.city;
    //         document.querySelector(".temp").innerHTML=item.temp+"°C";
    //         document.querySelector(".humidity").innerHTML="Humidity: "+item.humidity;
    //         document.querySelector(".wind").innerHTML="Wind speed:"+item.windSpeed+"km/h";
        
    //       }
    //   })
  
    // })

// if(markaz){

    // document.querySelector(".weather").classList.remove('loading');
    // City.innerHTML=markaz.city;
    // document.querySelector(".temp").innerHTML=markaz.temp+"°C";
    // document.querySelector(".humidity").innerHTML="Humidity: "+markaz.humidity;
    // document.querySelector(".wind").innerHTML="Wind speed:"+markaz.windSpeed+"km/h";

//   }
//   else{
  
    // showErrore.style.display='flex';
    // setTimeout(function(){
    // showErrore.style.display='none';
    //   console.log("alah")
    // },3000)


//   }
  


// let ulList=document.querySelector("ul");
// function addnewList(){
//   let Li=document.createElement('li');
//   Li.innerHTML="yazdan farar az morad";
  
//   let Li2=document.createElement("li");
//   Li2.innerHTML="mamad khaye male";

  // ulList.append(Li,Li2); 
  // ulList.appendChild(Li,Li2);


  // let resault1=ulList.append(Li);
  // let resault2=ulList.appendChild(Li);
  // console.log(resault1)



// }
// function keyDownhandeler(){
// console.log('key down')
// }
// function keyPresshandeler(){
// console.log('key press')
// }
// function keyUphandeler(){
// console.log('key up')
// }


// let inputText=document.getElementById('converter');
// let Celsios=document.querySelector('.C')
// let Farenhight=document.querySelector('.F');
// let Converter=document.getElementById('converter');
// let resault =document.querySelector('.result')


//  F = (1.8 × C) + 32
// function convert(){
//   let TempC=Number(inputText.value);
//   let TempF=Number(inputText.value);
 
 
//   if(Celsios.innerHTML=='°C'){
//      TempC=Number(inputText.value);
//      TempF=(1.8*TempC)+32;
//    resault.innerHTML=TempF;
//   }

//   else{
//     TempC=(TempF-32)/1.8;
//     resault.innerHTML=TempC;
//   }


// }
  
//    function reset(){
//     inputText.value=" "
//     resault.innerHTML="";
 
 
//   }
    
//     function change(){
     
     
//       if(Celsios.innerHTML=='°C')
//       {
//         Celsios.innerHTML='°F';
//         Farenhight.innerHTML="°C";
//       }

//       else{
//         Celsios.innerHTML="°C";
//         Farenhight.innerHTML="°F";
//       }

//       if(document.title==='SalzLearn| Js | °C to °F'){
//         document.title="SalzLearn| Js | °F to °C ";
//       }

//       else{
//          document.title="SalzLearn| Js | °C to °F";
//       }


//       if(Converter.placeholder==="°C"){
//         Converter.placeholder='°F';
//       }

//       else{
//         Converter.placeholder='°C';
//       }
  
//   };
  














// let inputType=document.getElementById('converter')

// inputType.username="dam";
// console.log(inputType.username)
// console.log(inputType.getAttribute("username"))



// let inputElem=document.querySelector('#choise');
// // console.log(inputElem);

// // let saveInput=inputElem.hasAttribute('href');
// let saveInput=inputElem.hasAttribute('placeholder');

// console.log(saveInput)
//   inputElem.removeAttribute('placeholder');
//   console.log(inputElem);



// let elementH1=document.querySelector(".btn");
// console.log(elementH1);      for test




// elementH1.onclick= function (){
//   console.log("sam")
// }
// elementH1.addEventListener('click',shomlog)
// elementH1.addEventListener('click',shomlog);



// let submit=document.getElementById('logon-form');
// console.log(submit); for test 

// submit.addEventListener('submit',function(){
//   console.log("choise");
// })


// let button=document.getElementById('logon-form');

// button.onclick=function(){
//   console.log("Sam")
// }
// button.addEventListener('keydown',function(event){
//   if (event.key==='k'){
//     console.log("sam")
//   }
//   else{
//     console.log("1 ")
//   }
// })
 



// let $=document;
 
// let locationKey=$.querySelector('#location')
// let title=$.querySelector('title');
// let KeyCode=$.getElementById('keyCode');
// let key=$.querySelector('#key');
// let Code=$.querySelector('#code');
// let whichElem=$.querySelector('#which');

// console.log(locationKey,title,Keycode,key,whichElem,Code);  for test select item


// $.body.addEventListener('keydown',function(event){
  
//   event.preventDefault();
  
// preventDefault با عث میشه ایوت حرکت دیفالتشو مثل رفرش در هرد فعه فراموش کنه  
 

// starter.style.display='none';
// heading.style.display='flex';
// ascii.style.display='flex';
// infos.style.display='flex';

// let eventKeyCode=event.keyCode;
// let eventLocation=event.location;
// let eventKey=event.key;
// let eventWhich=event.which;
// let eventCode=event.code;

// locationKey.innerHTML=eventLocation;
// KeyCode.innerHTML=eventKeyCode;
// key.innerHTML=eventKey;
// Code.innerHTML=eventCode;
// whichElem.innerHTML=eventWhich;




  // console.log(event);

// })

// let h1Elem=document.getElementById("title")
// console.log(h1Elem); for test 
// console.log(h1Elem.nodeName)

// let had1=document.querySelector(".head1")
// let had2=document.querySelector(".head2")
// let had3=document.querySelector(".head3")
// let had4=document.querySelector(".head4")
// let had5=document.querySelector(".head5")
// let had6=document.querySelector(".head6")


// let h1=document.querySelector("head1")
// h2.innerHTML="sam is sigma"
// console.log(h2.parentElement)

// console.log(h3.previousElementSibling);

// console.log(had3.nextElementSibling.nextElementSibling.nextElementSibling);



// let listItem=document.getElementsByClassName('list-item');
// let list=document.getElementById('list')
// console.log(listItem[2].nextSibling);
// console.log(listItem[2].previousSibling.previousSibling.previousSibling.previousSibling)

// console.log(list) for test select ul


// console.log(list.childElementCount);
// console.log(list.children[1]);
// console.log(list.childNodes)
// console.log(list.hasChildNodes())  میگه این دیو المنتی در خودش داره یا نداره

// console.log(list.lastChild)
// console.log(list.lastElementChild);

// list.lastElementChild.style.color='red';  رنگ آخرین المنت تغییر کرد
// list.lastElementChild.firstElementChild.style.color='red'; خود المنت  قرمز شد انگار ما تگ  ای رو انتخاب کردیم

 // Functions for select elems with id & class
//  var $ = document;
//  function _id(id_name) {
//    return $.getElementById(id_name);
//  }

//  function _class(class_name) {
//    return $.getElementsByClassName(class_name);
//  }

 // Select Elems
//  var togglePassword = $.querySelector(".toggle-password");
//  var passwordField = $.getElementById("password-field");

 // Fire click event on eye icon
//  togglePassword.addEventListener("click", function () {
//    if (passwordField.type =="text") {
//      passwordField.type= "password";
//      togglePassword.classList.remove("active")

//     } else {
//       passwordField.type = "text";
//       //  togglePassword.classList.remove("fa fa-eye");
      
//       togglePassword.classList.add("active");
//     }
//   })
  
//   console.log();
//  let eye=$.querySelector('.fa.fa-eye');

//  console.log(eye)


// let h1Elem=document.querySelector('.title');

// let button1=document.querySelector(".remover");

// button1.addEventListener('click',function(){
//   console.log("test");
//   h1Elem.innerHTML='';
// })


// let list=document.querySelector('.list');
// console.log(list); for test

// let listItem=document.querySelectorAll('.list-item');

// console.log(listItem); for test


// listItem.forEach(function(li){
  
//   li.addEventListener('click',function(event){
  
//     console.log(event.target.parentElement);
  
//   });
// })

//click and find parent element TAG (a);

// let h1Elem=document.querySelector('.title');
// let buton=document.querySelector('.click');
// console.log(buton); for test 
// console.log(h1Elem) for test 
// buton.addEventListener('click',function(){
//    h1Elem.remove()
// })

// let List=document.querySelectorAll('.list-item');

// List.forEach(function(li){
//   li.addEventListener('click',function(event){
//     event.target.remove()
//   })
// });

// let trash =document.querySelector('.fa fa-trash-o delete');
// let ulElem=document.querySelector('ul');
// let liElem=document.querySelectorAll('li');
// let Lable=document.querySelector('label');
// let text=document.querySelector('span');
// let inpute=document.querySelector('input')
// console.log(ulElem,liElem,Lable,text,inpute,trash);


// inpute.addEventListener('click',function(){
//   console.log("sam sigma")
// })

// let sam=document.querySelector(".sam");

// console.log(sam)



// var tag_p=document.querySelector(".sam");
// console.log(tag_p);
// tag_p.textContent="  ";

// اعداد را به تعداد  دلخواه از کار بر گرفته و در آرایه ای ذخیره کنید
// و سپس میانگین آن ها را محاسبه کرده و نمایش دهید

// var bound=parseFloat(prompt("تعداد اعداد مورد نظر شما چند عدد است؟"));
// var a=[];
// var sum=0;
// for (var i=0;i<bound ;i++){
//   number=parseFloat(prompt(`عدد مورد${i} نظر خود را وارد کنید:`))
//   // a.push(number);
//   sum=sum+number;
// }
// console.log(sum/bound);
































// يك سامانه تبت نام پياده سازى كنيد

// ن شكل كه يك آرايه براى ذخيره اطلاعات كاربران داشته باشيد (3 كاربر را بطور ديفالت در آرايه داشته باشيد)
// و از كاربرى كه قصد ثبت نام دارد تام، تام خانوادكى، سن وايميل را دريافت كرده
// وداخل آبجكتى مجزا در آرايه كاربران ذخيره كنيد
// يس از انجام عمل ثبت نام، اطلالاعات تك تك كاربران را لاى بكيريد

// نكات قابل توجه :
// نام حداقل بايد 3 كاراكتر وحداكثر 10 كاراكتر داشته باشد
// نام خانوادكى حداقل بايد 3 كاراكتر وحداكثر بايد 15 كاراكتر داشته باشد
// سن حتما بايد عدد بوده وحداكثر 3 رقم باشد







// var users=[
//   {Firstname:"sam",Lastname:"rezazadeh",age:21,email:"ali2frt.ir@gmail.com"},
//   {Firstname:"hasan",Lastname:"khani",age:23,email:"jagi.com@gmail.com"},
//   {Firstname:"amir",Lastname:"shahi",age:20,email:"jag rahmati elayhe"}

// ];
// var Fname=prompt("نام خود را وارد کنید:");
// var Lname=prompt("نام خانوادگی خود را وارد کنید");
// var Age=parseFloat(prompt("سنت چقدره", 2));
// var Email=prompt("ایمیل خود را وارد کنید");

// if (Fname.length<3 || Fname.length>10){
//   alert("نام باید بیش از سه کاراکتر کمتر از 10 حرف باشه")
// }else if(Lname.length<3 || Lname.length>15){
//   alert("بیش از 3 کاراکتر کمتر از  15 کاراکتر باشه")
// }else if (Age===Number){
//   alert("error")
// }






// var newuser=[
//   {Firstname:Fname,
//     Lastname:Lname,
//     age:Age,
//     email:Email
//   }
// ];

// users.push(newuser)
// console.log(users);










//دیتا بیسی برای ذخیره اطلاعات کاربران داشته باشید 
// وسپس به کمک متد فور ایچ  اطلاعات هر یوزر را  به  صورت جداگانه در کنسول نمایش دهید
// var data_users=[
//   {name:"sam",age:20,email:"ali@gmail.com"},
//   {name:"ali",age: 30,email:"jali@gmail.com"}
// ];

// data_users.forEach(function(user){
//   console.log("name:",user.name,"  Age:",user.age,"  email:",user.email)
// })













// کلمه ای از کابر بگیرید وبرسی کنید از دو طرف چپ و راست به یک شکل خوانده میشود یا نه 


// var vocabe=prompt("کلمه مورد نظر خود را وارد کنید :");
// arrayKalame=vocabe.split('');
// wordReverce=arrayKalame.reverse();
// wordreverceMain=wordReverce.join('');

// // console.log(arrayKalame,"  ",wordReverce,"  ",wordreverceMain);



// if(wordreverceMain===vocabe){
//     console.log("پیدا شد")
//   }
//   else{
//     console.log("پیدا نشد");
//   }













// يك بروزه تودوليست بياده سازى كنيد

// به اين صورت كه يك آرايه اى براى ذخيره تودوها داشته باشيد وبه طور ديفالت 3 تودو داخل آن ذخيره كنيد
// هرتودو مشخصاتى مثل آيدى، اسم تودو ووضعيت را دارد

// منويى به 3 كزيته به صورت زير به كاربر تمايش دهيد :
// اضافه كردن تودو .1
// حذف تودو .2
// انجام تودو (تغيير وضعيت) .3

// در قسمت اول اسم تودويى را از كاربر دريافت كرده وبه ليست تودوها اضافه كنيد
// در قسمت دوم اسم تودويى را از كاربر دريافت كرده و آن را از ليست تودوها حذف كنيد
// در قسمت سوم اسم تودو را دريافت كرده وهمان تودو را در وضعيت انجام شده قرار دهيد

// ليست تودوها را در كنسول نمايش دهيد

// در بايان هركدام از عمليات



// var todo_list=[

//   {id:1,name:"sam",disply:"active"},,
//   {id:2,name:"hasan",disply:"noactive"},
//   {id:3,name:"ilia",disply:"active"}

// ];

// var input=prompt(" 1. اضافه کردن به تودو \n 2.حذف تودو  \n 3.تغیر وضعیت")

// if (input==='1'){
  
//  var  Id=4;
//  var  Name=prompt ("نام مد نظر خود را وارد کنید:");
//  var  Disply=prompt("وضعیت فعال با شه یا غیر فعال:");
//  new_todo={
//   id:Id,
//   name:Name,
//   disply:Disply
//  };

//  todo_list.push(new_todo);
//  console.log(todo_list);

// }

// else if(input==='2'){
//   todo_list.splice(todo_list.length-1,1);
//   console.log(todo_list);
// }

// else if(input==='3'){
//       var choise=Number(prompt("کدوم خونه انتخابته"));
//     var disply=prompt("وضعیت چی بشه ");
//       todo_list.forEach(function(index){
//         if(index.id===choise){
//           index.disply=disply;
//           console.log(todo_list)
//         }
//       })

// }


// else{
//   console.log("khar")
// }








// var employee=[
//   {name:"sam",work:"js"},
//   {name:"ali",work:"css"},
//   {name:"sara",work:"pyton"},
//   {name:"sahar",work:"php"}
// ];


// var name_employee=prompt("نام کارمند مد نظر برای افزودن تسک:");
// var work_employee=prompt(" نام خود تسکی که به کارمند می خواهید بسپارید");


// employee.forEach(function(index){
//   if(name_employee===index.name){
//     index.work=work_employee;
//     console.log(employee)
//   }
  
// })
 // همون  برنامه بالا رو در باید با ابجکتی از آرایه ها میساختیم


//  var employee={
//   sam:["test","js code"],
//   mamd:["wordpress ","java code"],
//   sara:["css ","tailwind"],
//   alireza:["pyton","php","css","html"]
//  }

//  var work_employee=prompt("نام کار مد نظر را وارد کنید همان تسک :");
// var name_employee=prompt("نام کارمند مد نظر خود را وارد کنید:");
// var employee_task=employee[name_employee];
// console.log(employee_task)
// employee_task.push(work_employee);
// console.log(employee);

















// document.addEventListener("DOMContentLoaded",function(){
//   var qualitySelect=document.getElementById('quality');
//   var image=document.getElementById('image');
  
//   qualitySelect.addEventListener("change",function(){
//     var qualityValue=qualitySelect.value;
//     console.log(qualityValue);
//     var img=document.createElement('img');
//     image.innerHTML=" ";
    
//     if (qualityValue==='144'){
//       img.src='../image/heart144.jpg';
//       img.alt="saminiran"
   
//     }
//      else if(qualityValue==='360'){ 
//       // var img=document.createElement('img');
//       img.src='../image/heart240.jpg';
//       img.alt="240 quality";

//      }  else if (qualityValue==='240'){

//       img.src="../image/heart360.jpg";
//       img.alt="quality 360 ";
//      } else if (qualityValue==='480'){

//       img.src="../image/heart480.jpg";
//       img.alt="quality 480 ";
//      }else if(qualityValue==='720'){
//       img.src='../image/heart720.jpg';
//       img.alt='720 quality'
//      }


//      else   {
//       console.log("dsam")
//       return;
//      }
//     //  image.innerHTML="";
//       image.appendChild(img);
//       // console.log(image,img)
    
//   })
  
  
  
 
  
// })















// refrence and primitive

// var username1=['sam','ali','sara','negar'];
// var username2=username1;
// username2[2]='ahmad';
// console.log("username1:",username1,"\nusername2: \n ",username2);





//یک سامانه فروش بلیط آنلاین پیاده سازی کنید
//  به این صورت که مبدا سفر استان را از کاربر دریافت کرده و سپس شهر های استان وارد شده را در کنسول نمایش بدهید


// var database={
//   قزوین : ["الوند و زیباشهر وقزوین آوج الموت وباراجین"],
//   تهران :[" مولوی شمرون الهیه سعادآباد فرشته ایستگاه یخچال شهریار شهر زیبا چیتگر "]
// }
// var nameCity=prompt("نام استان خود را وارد کنید:");
 
// console.log(database[nameCity]);











// یک آزمون آنلاین پیاده سازی کنید
// به این شکل که سوالات را به کاربر نمایش داده
//  و پاسخ آن را دریافت کرده و به ازای هر پاسخ صحیح یک امتیاز بدهید
// در پایان آزمون امتیاز را نمایش دهید
// var quest=[
//   {id:1,title:"2+2",answer:'4'},
//   {id:2,title:"2*4",answer:'8'},
//   {id:3,title:'7**2',answer:'49'},
//   {id:4,title:'12/4',answer:'3'},
//   {id:5,title:'100/25',answer:'4'}
// ];

// var score =0;

// quest.forEach(function(main){
//   var inpute=prompt(" :جواب وارد کن"+main.title)

// if(inpute===main.answer){{
//   score++;
// }
// }
// })
// alert(`تعداد جواب های درست ${score}`);


































