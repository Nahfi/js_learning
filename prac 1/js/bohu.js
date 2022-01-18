// bohubrihi js
/*var  z;  // normal global varible 

function x()
// {
//     window.u=34; // global varibale define by window
// }
// function y()yo
// {
//     document.write(u);
// }
// x();
// y();
// //user input
// let a,b;
// b=a;
// a=20;
// document.write("the value of b is </br>");
// var t;
// let x1=10;
// t=prompt("enter a number");
// document.write(t);
// document.write("the value of x is =" + x1);

// const c=10; // constant er value declare er sathe sathe assign kore dite hobe
// */


// //operator

// //nan is not a number
// /*var i=1,j='1',m;
//  m=(i==j);
//  document.write(m+"</br>");
//  document.write("45"-"60"); //-15
//   document.write("4"*"6"); //24
//  document.write(4*"6"); //24
//  document.write(6/"6"); //1
// document.write(6%"6"); //0




//  document.write("45"+"45");//4545
//  document.write(45-"five");//nan =not a number
//  document.write(10-"40");//-30
//  document.write(10+"40"+"</br>");//1040
//  document.write(10+20+"string"); //30 string
//  document.write("string"+10+20); // string1020
// */

// var p='12';
// console.log(typeof(parseInt(p)));

// /*var i=1,j;
// var m=prompt();

// z=typeof(m);
// document.write(z);
// document.write(z=="string")


// while(1)
// {
//     if(i==11)
//     {
//         break;
//     }
//     else{
//         for(j=1;j<=10;j++)
//         {
//             document.write(i+" x "+j+" ="+i*j+"</br>");
//         }
//     }

//    i++;
//    document.write("</br>")
// }

// */

// //data type  number ,string ,boolean ,object ,array, null, undefined, nan,infinity

// /*
// var c={x:"n", y:'z'};

// document.write ("object value "+c.x +"</br>");
// //ternary
// var m= (10>13)? 20:30;
// document.write ("ternary operator value "+m +"</br>");

// var u= 25/0;// u=infinity;
// document.write ("infinit value "+u +"</br>");

// var hi=Infinity;
// document.write ("infinit value declare into a varibale  "+hi+"</br>");
// //exponent
// var rt=10e5;
// document.write ("expotent number  "+rt+"</br>");

// //hexa decimal
// var hex=0xBB;
// var he=0xcd; // HEXA DECIMAL dile value decimal hoye save hbe
// //integer to string
// document.write ("hexa decimal  number  "+he+"</br>");


// //object number
// var tt= new Number(23);
// document.write ("object  number  "+tt+"</br>");

// //float number 
// var fl=3.1416;
// fl=fl.toString();
// document.write ("number to string  "+fl+"</br>");
// var t=typeof(fl)=='string';
// document.write ("type is srting  "+t+"</br>");
// // binary conversion
// var bn=15;
// document.write ("binary of 15  ="+bn.toString(2)+"</br>");


// // precision korte number string e convert koree
// var fi=3.1416;

// document.write ("precision of 3.1416 in 3 digit is   ="+fi.toPrecision(3)+"</br>");

// // parse int and parse float  function
// var tq="345", tz="45.67";

// document.write ("string to integer   ="+parseInt(tq)+"</br>");
// document.write ("string to float   ="+parseFloat(tz)+"</br>");

// // is NaN 
// document.write ("45 is not a number ="+isNaN(45)+"</br>");
// document.write (" '45' is not a number ="+isNaN('45')+"</br>");
// document.write (" '45f' is not a number ="+isNaN('45f')+"</br>");

// // addition of NaN

// var rte=5;
// var rtt='5';

// var xe=NaN;
// var zs=xe+rte;
// var js=xe+rtt;

// document.write (" NaN + 5 ="+ zs +"</br>");
// document.write (" NaN + '5' ="+ js +"</br>");



// // string 

// //double cotation in double cotaion
// document.write ("double cotation in double cotaion ="+ " hi \"heloo\" "+"</br>");
// document.write ("backslash t ="+ " hi \t \t heloo "+"</br>");

// document.write ("backslash n ="+ " hi \\ heloo "+"</br>");
// var cs="hello \n hi";
// document.write ("length of string hello \n hi ="+ cs.length+"</br>");
// document.write ("cs[6] ="+cs[4]+"</br>");
// var uu="  nafiz khan";
// var u="n,a,f,i,z";

// document.write ("toupper case ="+uu.toUpperCase()+"</br>");

// document.write ("tolowercase ="+uu.toLowerCase()+"</br>");

// document.write ("trim ="+uu.trim()+"</br>");

// document.write ("slice ="+uu.slice(2,7)+"</br>");

// document.write ("slice backword ="+uu.slice(-5,-1)+"</br>");

// document.write ("sub str ="+uu.substr(2,3)+"</br>");

// document.write ("replace ="+uu.replace("nafiz","hasibul")+"</br>");

// document.write ("concat ="+uu.concat(" heloo")+"</br>");

// var ar,i=0;
// arr=u.split(",");
// for(i=0;i<arr.length;i++)
// {
//     document.write ("arr["+i+"]"+"="+arr[i]+"</br>");

// }

// // method er pore first braket hoye like m.touppercase()
// //kintu property er pore first braket lagena like m.length

// // bollean

// var boll=10<12,bl=3;
// document.write ("bollean value of boll :"+boll+"</br>");
// document.write ("bollean value of bll using boolean function :"+Boolean(bl)+"</br>");


// //NaN , undifined  ,null boolean return false;
// // undefined
// var un;
// document.write ("bollean value of un that is undefined using boolean function :"+Boolean(un)+"</br>");
// document.write ("bollean value of un that is null using boolean function :"+Boolean(null)+"</br>");

// document.write ("bollean value of un that is NaN using boolean function :"+Boolean(4/'h')+"</br>");

// // array
// document.write ("</br>");
// document.write ("</br>");

// document.write ("</br>");

// document.write ("</br>");

// document.write ("</br>");

// document.write ("array");
// document.write ("</br>");



//  var p, tt=[1,2,4,5,6];
//  for(p=0;p<tt.length;p++)
//  {
//     document.write ("x["+p+"] ="+ tt[p] +"</br>");

//  }


//  //add iteam
//  tt[tt.length]=20;
//  document.write ("after adding");
// document.write ("</br>");
// for(p=0;p<tt.length;p++)
//  {
//     document.write ("x["+p+"] ="+ tt[p] +"</br>");

//  }
// //push and pop work with last element of an array
//  tt.push("alex");
//  document.write ("after push");
// document.write ("</br>");
// for(p=0;p<tt.length;p++)
//  {
//     document.write ("x["+p+"] ="+ tt[p] +"</br>");

//  }
//  tt.pop();

//  document.write ("after pop");
//  for(p=0;p<tt.length;p++)
//  {
//     document.write ("x["+p+"] ="+ tt[p] +"</br>");

//  }

// //shift  and unshift work with first element of an array


// tt.shift();

//  document.write ("after shift");
//  for(p=0;p<tt.length;p++)
//  {
//     document.write ("x["+p+"] ="+ tt[p] +"</br>");

//  }
//  tt.unshift("hello", "nafiz");

//  document.write ("after unshift");
//  for(p=0;p<tt.length;p++)
//  {
//     document.write ("x["+p+"] ="+ tt[p] +"</br>");

//  }

// */
// //sanning an array
// /*document.write("scanning an array </br>");
// var xw=[],o ,n;*/
// /*for(o=0;o<4;o++)
// {
// // xw[o]=prompt("enter a element of an array");
//    parseInt(xw[o]=prompt("enter a element of an array"));
// //   / document.write(o);
// }


// for(o=0;o<xw.length;o++)
// {

//     n=parseInt(xw[o]);

//     if(typeof(n)=='string')
//     {
//      document.write("yes " +n+ "is a string </br>") 
//     }
//     else{
//         document.write("yes " +n+ "is a number </br>") 
//     }

// }

// */


// /*var sx="bangladesh,is,a,country",y,i;
// y=sx.split(',');
// /*for(i=0;i<y.length;i++)
// {
//     document.write(y[i]+'</br>');
// }
// //array to string 
// var mi=["bangladesh","is" ,"a"] ,zx;
// var s,z;
// s=mi.toString();
// document.write("mi array after converting to string " +s+ " </br>") 
// z=mi.join('/t');
// document.write("mi array after converting to join string " +z+ " </br>") 

// zx=mi.concat(sx);
// document.write(zx);
// var su=[2,0,9,4];
// su.sort();
// document.write("after sorting 2,0,9,4 our result " +su+ " </br>") 
// su.reverse();

// document.write("after sort and reverse 2,0,9,4 our result " +su+ " </br>") 

// // object 
// var r="str\"a \"";
// document.write("object </br>")

// var obj={
// name:'nafiz',
// age:23,
// height:'6\'2'
// }
// document.write(obj.height);
// document.write("</br>")
// obj['gf']='nai';
// obj.alex="alex";
// document.write(obj['name']);
// document.write("</br>")

// document.write(obj.gf);
// document.write("</br>")
// document.write(obj.alex);
// delete(obj.alex);
// document.write(obj.alex);
// var ix=[1,2];
// delete ix[1];
// document.write(ix);*/
// /*
// let m= 10,c=20;
//  document.write(`${m} + ${c} =${ m+c} </br>`)

//  var i=0;
//  do{
//      document.write(`${i}`)
//      i++;


//  }
//  while(i<10);


// let x=[10,20,30,50,60,70],y={
//     name:"nafiz",
//     id:73
// };

// for( let t in x)
// {
//     document.write(`index is ${t} and value = ${x[t]} </br>`)
// }
// for( var o in y)
// {
//     document.write(`index is ${o} and value = ${[t]} </br>`)
// }




// // function


// function x(t,y){
//     if(t%2==0)
//     {
//         if(y%2==0)
//         {
//             return `${t} and ${y} are even`;
//         }
//     }
//     else
//     {
//         return `lol`;
//     }


// }


// let a=prompt("enter a number"), b=prompt("enter another number");
// document.write(x(parseInt(a),parseInt(b)));



// //  function 


// let x = function()
// {
//     document.write(`hi function expression </br>`);
// }
// x();







// //arrow function

// let arrow=(z)=>{
//     document.write(`${z} arrow functions </br>`);


// }
// arrow('nafiz'); 

// let x=[10,20,30,50,60,70],y={
//     name:"nafiz",
//     id:73

// };




// let u=(val,index)=>
// {
//     document.write(`index is ${index} and value = ${val} </br>`)
// }




// x.forEach(u);

// let m={ 
//     name:"nafiz",
//     age:17,
//     func:function(){
//         return `name is ${this.name} and age is ${this.age}`

//     }

// };
// document.write(m.func())



// */
// //es 6 class constractor + inheritancee

// /*
// class x{
//     constructor(a,b,c)
//     {
//         this.name=a;
//         this.age=b;
//         this.city=c;

//     }
//     info(){
//         return `name is ${this.name} and age is ${this.age} and city is ${this.city}`;

//     }
// }

// class y extends x{


//     constructor(a,b,c,d,e)
//     {
//         super(a,b,c);
//         this.hobby=d;
//         this.intake=e;

//     }
//     info1(){
//         return `name is ${this.name} and age is ${this.age} and city is ${this.city} and hobby is ${this.hobby}`;

//     }
// }


// let obj= new x('nafiz',21,'dhaka');





// let obj1= new y("man",21,'barishal',"gaja khawa",37);

// document.write(`${obj1.info()} ${"   "} ${obj1.info1()}  ` );

// for(let i in obj)
// {
//     document.write(`property ${i} value ${obj[i] }</br>`)
// }*/

// //practice 
// /*
// let c=[10,20,30,40,50],obj={
//     name:"nafiz",
//     age:12,
//     func:function()
//     {
//         return `name is ${ this.name} age is ${this.age}`;
//     }
// };

// // for in loop 



// let u=(x,y)=>
// {
//     document.write(`index is ${y} value is ${x} </br>`);
// }

// c.forEach(u);



// class x{

//     constructor(a,b){
//         this.d=a;
//         this.e=b;

//     }
//     ret()
//     {
//         return `${this.d+this.e}`;
//     }
// }

// class y extends x{


//     constructor(a,b,c)
//     {
//         super(a,b);

//         this.f=c;


//     }
//     ret1()
//     {
//         return `${this.d+this.e+this.f}`;
//     }
// }

// let obj1= new x(10,20),obj2=new y(30,40,50);

// document.write(`${obj2.ret1()} `);


// */





// /*
// ==================================================================

//            document object model


// ====================================================================*/
// /*let val;
// //val=document.querySelector('ol li:nth-c');

// val=document.links;
// let x=Array.from(val);


// x.forEach((u)=>{
//     console.log(u.getAttribute('href'));



// });


// /*let c=document.scripts[1].getAttribute('src');
// console.log(c);*/



// // query selector + getelement by id single selector
// // query selector all+ get elementbyclassname +get element by tag name multiselector

// /*let y=document.querySelector('ol').getElementsByTagName('li')[2];
// console.log(y);

// let u=document.querySelector('ul');
// u.children[0].innerHTML="<a href=\"https://www.mara.com/\" target=\"_blank\"></a>";
// */




// // klke dom+ error handle +regex+ jquery +json insha allah
// //add element to dom

// /*let c=document.createElement('li');
// c.className='my class';
// c.id='m_id';


// c.appendChild(document.createTextNode('js'));
// c.setAttribute('title','my_title');
// let t=document.querySelector('ol');
// t.appendChild(c);

// let m=document.createElement('li');
// let a=document.createElement('a');
// let o= document.querySelector('ul');
// a.setAttribute('href','https://bohubrihi.com/course/full-stack-web-development-pj/');
// a.appendChild(document.createTextNode('bohubrihi'));

// m.setAttribute('title','hudai');
// m.appendChild(a);
// o.appendChild(m);*/
// /*
// let x=document.querySelector('ol').getElementsByTagName('li')
// console.log(x);
// */

// /*let x=document.createElement('h5');
// x.appendChild(document.createTextNode(' hi i am new  textnode'));
// let m=document.querySelector('h3');
// let u=m.parentElement;
// u.replaceChild(x,m);*/
// /*
// let m=document.querySelector('h3');

// m.className='hi iam class name';
// m.classList.remove('hi');


// console.log(m);

// let c=document.querySelector('ul').getElementsByTagName('li');
// c[0].remove();



// // event listener
// let m=document.querySelector('#y').addEventListener("keyup", lol)

// function lol(e)
// {
//  document.querySelector('#p').innerHTML=this.value;
// }
// */

// // EXCEPTION 

// /*
// let x=10;

// try {
//     if(x>15)
//     {
//         throw "the number is too bigg";
//     }
//     else if(x<15 && x>=8)
//     {
//         throw "the number is okay";
//     }
//     else if(x<=7)
//     {
//         throw " the number is to small"
//     }

// } catch (error) {
//     let ui=document.querySelector('#p');
//     let oi=ui.parentElement;
//     let ri=document.createElement('h4');
//     ri.appendChild(document.createTextNode(error))

//     oi.replaceChild(ri,ui);

//     //document.write(`${error} </br>`);

// }
// finally{
//     console.log(` i alawys execute`);
// }




// //========================================    regex klke +json+ 23/24  ==================================================
// //literler character
// let x=/hello/i;
// let m='againhellsdsaf';
// let res =x.exec(m);

// let y='hello';
// res =x.test(y)

// let t=' iam rhelloegex';
// res=t.search(x);
// res=t.replace(x,"")
// console.log(`my regular expression is ${res}`);

// let ti=/hell/i;
// let mi='qhellodogre there';


// // meta character
//  ti=/^h.ell$/i; //^ start with $ end with and . means only one any other char can be in there 

//  ti=/hell*/
// ; //* means more than one or none char can be there
// /*ti=/he?llo/; //? optional
// ti=/he[as]llo/i; // [] means must start with only one of them character
// ti=/[^as]hello/i;
// ti=/^[as]hello/i;
// ti=/^[A-Za-z0-9]max$/;
// ti=/^01[0-9]{9}/;
// ti=/[0-9]x{3}/;
// ti=/\w+/; // \w alpha and neumeric check kore
// //+ one or more char o nemeric check kore 
// ti=/\W/; //\W non word char check kore
// ti=/\d/; //digit
// ti=/\D/;// non digt
// ti=/hello\b/;
// //asssertion
// ti=/x(?=y)/;

// ti=/^(\+)?(88)?01([0-9]){9}$/; //phone number formate
// ti=/^([A-Za-z0-9]\.?)+[^\.]@([A-Za-z0-9]\.?)+[^\.][/.][c][o][m]$/; //email formate bohubrihi.learn@edu.com.bd;




// mi='bohu.brihi9.hj@edubd.com';








// let xe=(ti,mi)=>{

//     if(ti.test(mi))
//     {
//         console.log(`${ti.source} found in ${mi}`);
//     }
//     else{
//         console.log(`${ti.source} is not found in ${mi}`);


//     }


// }
// xe(ti,mi);
// */
// // java script object notation
// //json

// /*
// let obj1={
//     name:"nafiz_nahar",
//     age:15,
//     dob:1995-0-12,
//     x:false,
//     y:undefined,
//     z:null,
//     at:function()
//     {
//         return `${this.age}`;
//     }
// }
// let m=JSON.stringify(obj1)
// document.write(typeof(m));
// */

// //dob, undefined support korena 
// // string number array bollen null function 
// //let jsn=
// /*
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = this.responseText;
//        // console.log(data);
//        jdata(data);

//     }
// };
// xmlhttp.open("GET", "js/data.json", true);
// xmlhttp.send();


// function jdata(x)
// {

//         let m=JSON.parse(x);
//         for(let c in m.persons)
//         {

//              // console.log(m.persons[c]);
//             let r=m.persons[c];
//             for(let d in r)
//             {
//                 console.log(r[d]);
//             }


//         }


// }
// */

// // ajax
// /*
// let bu=document.querySelector('#get');
// bu.addEventListener("click", fun);
// function fun(e)
// {

//     //xhr object
//     let obj = new XMLHttpRequest();
//     obj.open('GET','data.txt',true);


//     obj.onload=function()
//     {
//         if(this.status == 200)
//         {
//            // console.log(this.responseText);
//            document.querySelector(".m").innerHTML=`<h3> ${this.responseText} </h3>`;
//         }

//     }
//     obj.send();

// }

// */
// //get jokes using ajax
// /*
// let bu=document.querySelector('#get');
// bu.addEventListener("click", fun);
// function fun(e)
// {
//     let p=document.querySelector('#joki').value;
// let xhr= new XMLHttpRequest();
// xhr.open('GET',`http://api.icndb.com/jokes/random/${p}`,true);
// xhr.onprogress=function()
// {
//     document.querySelector('.m').innerHTML=`<h3> loading.................................... </h3>`;
// }
// xhr.onload=function()

// {
//     if(this.status===200)
//     {
//         let man=JSON.parse(this.responseText);
//        // console.log(man.value);
//       // console.log(man.value);
//       let ot=`<ul>`;
//       for(let x in man.value)
//       {
//       let p=man.value[x];

//         ot+=`<li>${p.joke} </li>`;




//       }
//      ot+=`</ul>`;
//       document.querySelector('.m').innerHTML=ot;

//     }
// }
// xhr.send();
// }
// //rest api

// */
// //call backfunction
// /*setTimeout(function()
// {
//  console.log(`call back function`);
// },3000);
// let ui= document.querySelector('.m');

// let x=[
//     {name:'nafiz', age:22 },
//     { name:'nahar', age:24}


// ]
// //syncronize 

// function create(y){
//     setTimeout(function(){

//        x.push(y);

//     },3000);

// }

// function display()
// {

//     setTimeout(function()
//     {
//         let ot=`<ul>`;
//      x.forEach(function(info)
//      {
//          ot+=`<li> ${info.name} ${info.age} </li>`;

//      })
//      ot+=`</ul>`;
//      ui.innerHTML=ot;
//     }, 1000);

// }


// create({name:"rabbi", age:12});
// display();
// //asycronize way

// function create(y,z){
//     setTimeout(function(){

//        x.push(y);
//        z();
//     },3000);

// }

// function display()
// {

//     setTimeout(()=>
//     {
//         let ot=`<ul>`;
//      x.forEach(function(info)
//      {
//          ot+=`<li> ${info.name} ${info.age} </li>`;

//      })
//      ot+=`</ul>`;
//      ui.innerHTML=ot;
//     }, 1000);

// }


// create({name:"rabbi", age:12},display);
// */
// //promises function




// /*
// //let ui= document.querySelector('.m');
// let c=[
//     {
//         name:"nafiz", age:12
//     },
//     {
//         name:"naziz", age:22
//     },
// ];


// function y(r)
// {
//     let prm= new Promise(function(resolve,reject){

//        c.unshift(r);
//        let err=!false;
//        if(err)
//        {
//            reject("this is an error");
//        }
//        else{
//         resolve();

//        }


//     });
//     return prm;
// }

// function x()
// {
//     setTimeout(function()
//     {
//         c.forEach(function(val)
//         {
//           console.log(`${val.name} and ${val.age}`);
//         });

//     },2000);

// }

// y({name:"rabbi", age:12}).then(x).catch(function(e)
// {
//     console.log(e);
// });
// */

// // fetch api

// /*

// let m=document.querySelector('#get');
// m.addEventListener("click",fin);
// function fin()
// {
//    // console.log("button is clicked");
//    // fetch window er eekta function
//    // ajax version is older fetch version is new to get data
//    /* old ajax version
//    let xhr= new XMLHttpRequest();
//    xhr.open('GET','http://api.icndb.com/jokes/random',true);
//    xhr.onload=function()
//    {
//        if(this.status==200)
//        {
//         console.log(this.responseText);
//        }
//    }
//    xhr.send();
//  */


// // arrow function
// /*
//    let m = (par)=>{
//        return par;
//    }
//    // if it takes one parm and return it we can write it in this way also
//    let m = par => par;

// //using function expression 
//    fetch('http://api.icndb.com/jokes/random').then(function(x)
//    {
//        return x.json();
//    }).then(function(data)
//    {
//        console.log(data);
//    }).catch(function(e)
//    {
//     console.log(e);
//    })*/
// /* fetch('http://api.icndb.com/jokes/random')
// //.then(x=>x.json())
//    .then(x=> x.json())

//    .then(y=> diz(y))

//    .catch(e=> console.log(e));

//    function diz(i)
//    {
//        console.log(i.value.joke)
//    }







// }
// */

// // let but = document.querySelector('#get');


// // but.addEventListener("click", fin);

// // let messi = document.querySelector(".m");




// // function fin(e) {

// /*ajax
//     let joki=document.querySelector('#joki').value
//     // console.log(joki)
//     // console.log(`${e.target} and button clicked` )
//     let xhr=new XMLHttpRequest();
//     xhr.open('GET',`http://api.icndb.com/jokes/random/${joki}`,true)
//   xhr.onload=function(){
//       if(this.status===200)
//       {
//           m=JSON.parse(this.responseText);
//           m=m.value
//             //  console.log(m.value)


//        /* for(i in m)
//         {

//             c=m[i]
//             for (z in c)
//             {
//                 console.log(c[z])
//             }

//         }


//          m.forEach(x => {

//             for (i in x){

//                 console.log(x[i])
//             }

//          });
//       }


//   }
//   xhr.onprogress=function(){
//     messi.innerHTML=`loading...................................`

// }
// xhr.send()
//  */
// // rest api
// /*
// let joki=document.querySelector('#joki').value
//    fetch(`http://api.icndb.com/jokes/random/${joki}`)
//    */

// //    timeout function
// /*
//     let x = [{
//             name: 'nafiz',
//             age: 22
//         },
//         {
//             name: 'nahar',
//             age: 24
//         }


//     ]

//     function cre(y,z) {
//         setTimeout(function () {


//         x.unshift(y);
//         z();

//         },3000)

//     }

//     function displ()
//     {

//      setTimeout(function(){


//         console.log(x)

//      },1000)


//     }
//   cre({
//     name: 'afiz',
//     age: 22
// },displ);

// */
// // promice function
// /*
//     let x = [{
//             name: 'nafiz',
//             age: 22
//         },
//         {
//             name: 'nahar',
//             age: 24
//         }


//     ];




//     function cre(a) {


//         let prm = new Promise((resolve, reject) => {

//             p = true
//             if (p) {
//                 x.unshift(a);
//                 resolve();
//             } else {
//                 reject("errror")
//             }

//         });
//         return prm;
//     }






//     function displ() {

//         setTimeout(function () {


//             console.log(x)

//         }, 1000)


//     }


//     cre({
//         name: 'afiz',
//         age: 22
//     }).then(displ).catch(e=>console.log(e))

// let joki=document.querySelector('#joki').value
// fetch(`http://api.icndb.com/jokes/random/`).then(x=> x.json()).then(y=>console.log(y)).catch(e=> console.log(e));

//     e.preventDefault();
// }
// */


// // es6 practice

// // array destruction
// // x = [1, 2, 3]

// // old mehtod
// // let y=x[0]
// // let y1=x[1]
// // let y2=x[2]

// // console.log(`old method ${y} and ${y1} and ${y2}`)
// // let [a, b, c] = x;

// // console.log(`new method ${a} and ${b} and ${c}`)
// // swaping
// /*
// let a=10, b;
// b=20;

// console.log(`before swaping  a is ${a} and b is ${b} `)
// [a,b]= [b,a];
// console.log(`after swaping  a is ${a} and b is ${b} `) */

// // console.log(`new method ${a} and ${b} and ${c}`)\

// // object distraction
// /*
// x = {
//     name: "nafiz",
//     age : 14,
//     city: "dhaka"
// }
// let {
//     name:p,
//     age,
//     city
// } = x
// console.log(`${p},${age}`)
// */


// // speard function appiled on itterable datastructur 

// /*
// let str="i am nafiz";

// let z=[... str];
// // console.log(z)

// let m=[1,23,4];
// let s=[3,456,6];
// // let str="nafiz";
// let sp=[...m,...s ];
// console.log(sp);
// let x = {
//     name: "nafiz",
//     age : 14,
//     city: "dhaka"
// }
// let f={...x,fqou:12};
// console.log(f)
// */






// // object destraction with functuon
// /*
// let x = {
//     name: "nafiz",
//     age: 14,
//     city: "dhaka"
// };

// let n=({name,age,city})=>{
//     console.log(`${name}`)
// }

// n(x);

// */

// // spead operator
// // array
// /*
// let m=[1,24,4];
// let x=[...m]
// console.log(Math.max(...m))
// console.log(x)





// let p=(a,b,c)=>{
//     console.log(c)

// }
// p(...m)
// */
// // rest operator
// /*
// let p=(a,b,...c)=>{
//     console.log(c)

// }
// p(1,2,3,5,6,4)








// let x = {
//     name: "nafiz",
//     age: 14,
//     city: "dhaka"
// };

// let {a,...b}=x;
// console.log(b)
// */


// //array and object distraction with rest operator



// /*
// let m = (a, ...b) => {


//     console.log(b)

// }
// let m = ([a, ...b]) => {


//     console.log(b)

// }

// let m = ({
//     a,
//     ...b
// }) => {


//     console.log(b)

// }
// */

// // m(x);
// // m(y);
// // m(1,2,34,5,6,6);

// // speard +rest+araay destraction operator
// /*
// let x = [1, 2, 3, 4, 5];
// let y = {
//     name: "nafiz",
//     age: 12,
//     city: "dhaka"
// };

// let [p,...q]=[...x ,12];
// console.log(q)

// let f={...y,fqou:12};
// console.log(f)
// */
// /*
// let x = [1, 2, 3, 4, 5];
// let y = {
//     name: "nafiz",
//     age: 12,
//     city: "dhaka"
// };
// // speard +rest+objcet destraction operator
// let {name,...age}={...y}

// console.log(age)

// */
// // promise function
// /*
// let prom=new Promise((resolve,reject)=>{

//      let a;
//      setTimeout(()=>{

//         a=1+1;

//         if(a==2)
//         {
//             resolve("correrct result");
//         }
//         else{
//            console.log(a);
//             reject("error fuck");
//         }
//      },5000);




// });

// prom.then(bf=>console.log(bf)).catch(e=>console.log(e));
// console.log('the function is running')
// */
// /*
// fetch(`http://api.icndb.com/jokes/random/600`).then(x=> x.json()).then(y=>console.log(y)).catch(e=> console.log(e));

//   console.log("ji")
// */

// // array destraction object d3estraction speard rest opertaor
// /*
// let z=[1,2,3]

// let [a,b,c]=z
// let d=[...z]
// console.log(d)


// let m=([t,...p])=>{


//     console.log(p)
// }
// m([...z])
// // console.log(c)
// */
// /*
//  let y = {
//     name: "nafiz",
//     age: 12,
//     city: "dhaka"
// };
// let {...name }={...y}
// console.log(name)*/



// // let [a,b,...c]=[...x];


// // speard operator
// // rest operator
// //array destracton object destraction swaping 
// // swaping
// /*
// let a, b;
// a=10;
// b=12;
// [a,b]=[b,a]
// console.log(a)*/


// // array destraction with function

// /*
// let m=([a,,c])=>{

//     console.log(c)

// }
// m([1,2,3])

// let n=({name:a,b,c})=>{

//     console.log(a)

// }
// n({
//     name:"nafiz",
//     b:10,
//     c:12
// })

// */

// /*
// let x=[1,2,3,4]
// console.log(Math.max(...x))
// let a=[...x]
// console.log(a)
// */
// /*
// let y={
//     name:"nafiz",
//     b:10,
//     c:12
// }
// let c={...y,d:190};
// console.log(c)
// */

// /*

// let n = ({
//     name,
//     b,
//     c
// }) => {

//     console.log(c)

// }

// let x = [1, 2, 3, 4];
// let y = {
//     name: "nafiz",
//     b: 10,
//     c: 12
// }
// n({
//     ...y
// });
// */

// // rest operator with function
// /*
// let y = {
//     name: "nafiz",
//     b: 10,
//     c: 12
// }

// let p = ({
//     name,
//     ...b

// }) => {

//     console.log(b)

// }

// p({...y})
// */
// // let x = [1, 2, 3, 4];


// /*
// class myclass{

//   constructor(a){
//       this.a=a;
//   }
//    getnamex(){
//        console.log(this.a)
//    }
// }
// let ob=new myclass(10)
// ob.getnamex()
// */
// // fetch(`http://api.icndb.com/jokes/random/10`)
// //     .then(x => x.json())
// //     .then(y => zu(y))
// //     .catch(e => console.log(e));

// // function fu(p) {
// //     // console.log(p.value)
// //     let mi = p.value;
// //     mi.forEach((a) => {

// //         for (i in a) {
// //             console.log(a['joke'])
// //         }

// //     });

// // }

// // function zu(p) {
// //     // console.log(p.value)
// //     let mi = p.value;
// //     mi.forEach((a) => {

// //         for (i in a) {
// //             // console.log(a['joke'])
// //         }

// //     });

// // }

// // let mx= async()=>{
// // let res=await fetch(`http://api.icndb.com/jokes/random/10`);
// // let prm=await res.json();
// // return prm;


// // }

// // mx().then(x=> fu(x));

// // let xi = async () => {


// //     let prm = await  fetch(`http://api.icndb.com/jokes/random/10`);
// //     let pm= await prm.json();
// //    return pm
// // }
// // xi().then(x=> console.log(x))



// // let x=async()=>{
// // let res=await fetch(`http://api.icndb.com/jokes/random/10`);
// // let prm=await res.json()
// // return prm
// // }
// // x().then(y=> console.log (y))
// // let y = {
// //     name: "nafiz",
// //     age: 12,
// //     city: "dhaka"
// // };
// // let x=[1,2,3,4]
// // let {...name }={...y}

// // console.log(name)


// iterator
// let it="hello world of bagh";
// let m=it[Symbol.iterator]();
// console.log(m.next())
// // console.log(m.next())
// // console.log(m.next())
// // console.log(m.next())
// // console.log(m.next())
// // console.log(m.next())
// // console.log(m.next())



// //  let x=[1,2,3,4,5]

// // // // let itr=x[Symbol.iterator]();
// // // let im=x[Symbol.iterator]()
// // // console.log(im.next().value)
// // let itr=x[Symbol.iterator]()
// let x=[1,2,3,4,5];


// let fu=(p)=>{

//   let i=0;

//     return {
//         next : function(){
//             return i<p.length ? {value: p[i++],done:false } :{done:true}
//         }

//     };


// }
// let c=fu(x);
// console.log(c.next().value)
// // console.log(c.next().value)

// let m=[1,23,4,23];
// // let itr=m[Symbol.iterator]();
// // console.log(itr.next().value)



// let x=p=>{

//    let i=0
//      console.log(p.length)
//     return {
//         next:()=>{
//             if(i<m.length)
//             {
//                 return { Value:p[i++],done:false}
//             }
//             else{
//                 return { Value:"no value",done:true}
//             }

//         }
//     }

// }

// let c=x(m)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// console.log(c.next().Value)
// // console.log(c.next().Value)
// // console.log(c.next().Value)
// // console.log(c.next().Value)
// // console.log(c.next().Value)
// // console.log(c.next().Value)
// // console.log(c.next().Value)
// // console.log(c.next().Value)
// // console.log(c.next().Value)
// let xhr=new XMLHttpRequest();
// // console.log(xhr)
// xhr.open('GET',`http://api.icndb.com/jokes/random/10`,true);
// xhr.onload=function()
// {
//     if(this.status===200)
//     {
//         console.log(10)
//         console.log(JSON.parse(this.responseText))
//     }

// }
// xhr.send()

// generator+ iterator+ build in iterator

// let m = [1, 2, 3, 54];
// let itr = m[Symbol.iterator]();
// // console.log(itr.next().value)
// // custom iterator 
// let y = (s) => {
//     let i = 0;

//     return {
//         next: () => {
//             if (i < s.lenght) {
//                 return {
//                     value: s[i++],
//                     status: false
//                 }
//             } else {
//                 return {
//                     value: "no value",
//                     status = true
//                 }
//             }
//         }
//     }


// iterator
// let m=[1,45,6,6];

// let n = {
//     name:"nafiz",
//     age:12,
//     city:"dhaka"
//     ,
//     gultu:"nahar"
// }
// let k=async({name,...x})=>{
//    await console.log(x)
// }
// k({...n})
// let x= new Promise((resolve, reject)=>{
//     if(1==1)
//     {
//         resolve("true")
//     }
//     else{
//         reject("this is an error")
//     }
// //  return true
// })
// x.then(p=>console.log(p)).catch(q=>console.log(q))
// let se=new Set([1,2,3,4,5]);
// se.add(23);
// se.delete(4)
// console.log(se.has(5))\
// 


// let itr=m[Symbol.iterator]()
// console.log(itr.next().value)





// }
// genarator

// function* x(){
//     console("hi")

//     yield 1;
//     yield 2
//     console("how are you")
// }
// let m=x()
// console.log(m.next().value)

// let s=[1,2,3,5];
// let [a,b,...c]=[...s]
// console.log(c)
// let d={
//     name:"nafiz",
//     age:12,
//     sex:14

// }
// let n={...d}
// console.log(n)
// console.log(Math.max(...s))


// let  p=[1,2,4,5,6];
// let it=p[Symbol.iterator]();
// console.log(it.next().value);
// let  p=[1,2,4,5,6];
// let z=p=>{
//     let i=0;
//     return{
//         next:()=>{
//             if(i<p.length){
//                 return {
//                     value:p[i++],done:false
//                 }

//             }
//             else{
//                 return {
//                     value:undefined,done:true
//                 }
//             }
//         }
//     }
// }
// let c=z(p)
// console.log(c.next().value)
// console.log(c.next().value)

// let x=[1,2,3,5,6];
// let itr=x[Symbol.iterator]();
// console.log(itr.next().value);



// let c=(x)=>{
//     let i=0;
//     return{

//         next:()=>{

//             if(i<x.length){
//                 return{ value:x[i++]}
//             }
//             else{
//                 return{ value:null}
//             }
//         }
//     }
// }


// let di=c(x)
// console.log(di.next().value)
// console.log(di.next().value)
// console.log(di.next().value)
// console.log(di.next().value)
// console.log(di.next().value)
// console.log(di.next().value)
// console.log(di.next().value)
// let y = {
//     name: "nafiz",
//     age: 12,
//     city: "dhaka"
// };
// let x=[1,2,3,4]
// let {...name }={...y,b:24}
// console.log(name)

// klke set +map
// set e duplicate data rakaha jabena 
// let y = {
//     name: "nafiz",
//     age: 12,
//     city: "dhaka"
// };
// delete(y.name)
// console.log(y)




// set
// let se = new Set([2,3,4]);
// // for(i of se){
// //     console.log(i)
// // }
// se.add("hello")
// let m=[...se.keys()]
// console.log(m)
// // se.clear();

//  let x=[1,2,3,4]
//  let irt =x[Symbol.iterator]()
//  console.log(irt.next().value)
// console.log(x.length)


// se.delete(3)
// console.log(se.has(5))
//  console.log(se.size)
// se.forEach((x,y) => {
//     console.log(x)
//     // console.log(y)
// });
// for ( i of se.entries()){
//     console.log(i)
// }

// spread and rest operator
// let x=[1,2,34,4]
// let c=(a,...b)=>{  //rest
//     console.log(b)
// }
// c(...x)//speard

// let mt=[...x]
// console.log(mt)
// let y={
//     a:12,
//     b:4,
//     c:"al"
// }
// let {a:p,...d}={...y}
// console.log(p)
// console.log(d)\

// let p= new Set([1,2,4,5])
//  p=Array.from(p)
// // p.add(12)
// // p.delete(1)
// let [t,...x]=[...p]
// console.log(x)


// mappppppppppppppppppppppppppp
// let map=new Map([
//     ["keys1",12],
//     ["keys2",132],
//     ["keys3",123]
// ])

// // add new value
// map.set("key4",546);
// // map.delete("keys1")
// console.log(map.has(12))

// let map=new Map([
//     ["key1",1323],
//     ["key3",133],
//     ["key4",132],
//     ["key5",113]

// ]);
// map.set("key6",45)
// for(i of map.entries())
// {
//     console.log(i)
// }


// practice set ,map, ajax ,promise,settiemout,fetch,async dom ,rest seprate operator arrow function


// json function dob undefiend support koena

// ajax


// let x = new XMLHttpRequest();
// x.open('GET', 'js/data.jsON', true);
// x.onload = function(){
//     if (this.status === 200) {

//     //    console.log(this.responseText)
//     let m=this.responseText;
//     m=JSON.parse(m);
//     fuck(m)
//     }
// }
// x.send()

// function fuck(a)
// {
// let c=a.persons;
//  c.forEach(data => {
//  let y=data;
// for (i in y)
// {
//     console.log(y[i])
// }
//  });
// }


// fetch('http://api.icndb.com/jokes/random/10').then(x=>x.json()).then(y=>m(y)).catch(e=> console.log(e));
// function m(t)
// {
//     console.log(t.value[0])
// }



// let m=async()=>{



// // }

// let m = [{
//         name: "munna",
//         age: 23
//     },
//     {
//         name: "nafiz",
//         age: 23
//     }

// ];

// function add(d){

//     let prm= new Promise((resolve,reject)=>{


//         let x=true
//         if(x)
//         {
//             m.push(d);
//             resolve("ok")
//         }
//         else{
//             reject("error")
//         }



//     })
//     return prm

// }




// function pp() {
//     setTimeout(() => {

//         m.forEach(c => console.log(c))

//     }, 100);
// }
// add( {
//     name: "nafiz",
//     age: 23
// }).then(pp()).catch(e=>console.log(e))


// let prm= new Promise((resolve,reject)=>{


//     let x=true
//     if(x)
//     {

//         resolve("ok")
//     }
//     else{
//         reject("error")
//     }



// })
// prm.then(x=>console.log(x))

// array destraction
// let c=[1,2,3,6,7,6];

// let p=u=>{
//     let i=0;

//     return {

//         next:()=>{
//             if(i<u.length)
//             {
//                 return { value:u[i++]}
//             }
//             else{
//                 return { value:null}
//             }
//         }

//     }
// }

// let m=p(c)
// // let it=c[Symbol.iterator]();
// // console.log(it.next().value)
// // console.log(it.next().value)
// console.log(m.next().value)  
// console.log(m.next().value)
// console.log(m.next().value)
// console.log(m.next().value)
// console.log(m.next().value)
// console.log(m.next().value)
// console.log(m.next().value)
// console.log(m.next().value)
// console.log(m.next().value)
// let y = {
//     name: "nafiz",
//     age: 12,
//     city: "dhaka"
// };

// // let [a,b,d]=c;
// // let {name,...city}={...y}
// // // console.log(a+b+d)
// // console.log(city)
// // let m=[...c]
// // console.log(m)

// let o=([s,...y])=>{
//     console.log(y)
// }
// o([...c])

// let set = new Set([1, 2, 4, 4]);
// set.add(12);
// set.delete(1)
// let [m,...n]=[...set.values()]
// console.log(n)
// for (i of set.values()) {
//     console.log(i)

// }
// let map=new Map([

//     ["KEY1",12],
//     ["KEY2",112],
//     ["KEY3",1112],

// ])
// map.set("KEY4",12212)
// map.delete("KEY1")
// for (i of map.values()) {
//     console.log(i)

// }

// // js re-practice
// const c=10;


// JSON

// let m={
//     "name":"nafiz",
//     "age":12


// n=JSON.stringify(n);
// n=JSON.parse(n);
// // typeof(n);
// console.log(n);

// let p = {
//     name: "nafiz",
//     array: [1, 2, [2, {
//         babe: "munna"
//     }]]
// }

// console.log(p.array[2][1].babe)
// let c = [1, 2, 23, 2, 3, 2, 3];
// let [b, ...d] = c;
// let [b, ...d] = [...c];

document.getElementById("get").addEventListener("click", load);

function load(e) {



    // async function x() {
    //     return await (await fetch(`http://api.icndb.com/jokes/random/2`)).json();

    // }
    // x().then(e => {
    //     console.log(e)
    // })

    //     let p = new Set([10, 21, 2]);

    // for (i of p.)




    // let p = new Map([
    //     ["key1", 10],
    //     ["key2", 120],
    //     ["key3", 103],
    //     ["key4", 140],


    // ]);
    // p.set(
    //     "key5", 102
    // )

    // let [c, ...d] = [...p.entries()]
    // console.log(d)

    // fetch(`http://api.icndb.com/jokes/random/2`).then(x =>
    //     x.json()).then(c => {
    //     console.log(c)
    // }).catch(e => console.log(e))
    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", `http://api.icndb.com/jokes/random/2`, true);
    // xhr.onload = function() {
    //     if (this.status == 200) {

    //         let m = JSON.parse(this.responseText);
    //         for (let i in m.value) {
    //             console.log(m.value[i].joke)
    //         }
    //         // console.log(m.value.joke)

    //     }
    // }



}






// let f = ['apple', "grape", "orange"];
// let [x, y, z] = f;
// console.log(x)
// let c = {
//     name: "nafiz",
//     age: 12,
// }
// let { name, age } = c;
// console.log(name)


// speard+rest

// let a = [1, 3, 5, 6, 7, 89, 3, 4, 34];

// // let [b, ...c] = [...a]
// // console.log(c)



// function p([a, ...n]) {
//     console.log(n)
// }



// let c = [1, 5, 2, 234, 34, 3, 43, 4, 34, ];
// let [m, ...n] = [...c, 65];
// console.log(n)

// let c = {
//     name: "nafiz",
//     age: 12,
// }
// let b = {...c, vox: 34 };
// console.log(b)
//     // let x = [
//     { name: 'nafiz', age: 22 },
//     { name: 'nahar', age: 24 }


// ]


// function create(y) {
//     let c = true;
//     let prom = new Promise(function(resolve, reject) {
//         if (!c) {
//             x.push(y);
//             resolve();
//         } else {
//             reject("data pai nai");
//         }

//     })

//     return prom;
// }

// function pr() {
//     console.log(x);
// }

// create({ name: 'nafiz', age: 22 }).then(pr).catch(e => {
//         console.log(e)
//     })
// callback function

// let m=[

//         {name:"nafiz"},
//         {name:"max"},
//         {name:"nahar"},
//     ]


// function add(ew,get){
//     setTimeout(function(){
//         m.push(ew);
//     },1000)
// get(m);
// }
// function get(per){
//     setTimeout(function(){
//         console.log(per);
//     },2000)
// }
// add({name:"akbor"},get);



// let m=[

//         {name:"nafiz"},
//         {name:"max"},
//         {name:"nahar"},
//     ];

// function get(){
//     setTimeout(function(){
//         console.log(m);
//     },1000)
// }
//     function prom(ew){

//           let z=true;
//         let prom = new Promise((resolve,reject)=>{
//     if(z==true){
//         m.unshift(ew);
//         resolve();
//     }
//     else if (z==false){
//         reject("error");
//     }
//         });
//         return prom;
//     }
//     prom({name:"akbor"}).then(get).catch(e=>{
//         console.log(e);
//     });
// function add(ew,get){
//     setTimeout(function(){
//         m.push(ew);
//     },1000)
// get(m);
// }
// function get(per){
//     setTimeout(function(){
//         console.log(per);
//     },2000)
// }
// add({name:"akbor"},get);