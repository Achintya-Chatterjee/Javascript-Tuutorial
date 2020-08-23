// // console.log('This is tut10');
// // let name = 'skillF';
// // console.log(` Happy Birthday ${name} 
// // have a nice day`);
// alert(2>1);
// alert(2==1);
// alert(2!=1);
// let result= 5>4;
// alert(result);
// let age = prompt('How old are you?');
// alert(`you are ${age} years old!`);
// let isBoss = confirm('Are you a boss?');
// alert(isBoss);
// function showMessage(){
//     let message = "Hello, I'm javascript!";
//     alert(message);
// }
// showMessage();

// showMessage();
// let userNmae='john';
// function showMessage(){
//     let message= 'Hello '+userNmae;
//     alert(message);
// }
// showMessage();
// function showMessage(from, text)
// {
//     alert(from+':'+text);
// }
// showMessage('Ann:', 'Hello');
// showMessage('Ann:',"What's Up!!");
// function showMessage(from,text){
//     from='*' + from + '*';
//     alert(from+':'+text);
// }
// let from ='Ann';
// showMessage(from,"Hello");
// alert(from);
// function showMessage(from, text) {

//     from = '*' + from + '*'; // make "from" look nicer
  
//     alert( from + ': ' + text );
//   }
  
//   let from = "Ann";
  
//   showMessage(from, "Hello"); // *Ann*: Hello
  
//   // the value of "from" is the same, the function modified a local copy
//   alert( from );
// function showMessage  (from,text=" no text given"){
//     alert(from +" :"+text);
// }
// showMessage("Achintya");
// function sum(a,b){
//     return a+b;
// }
// let result=sum(1,2);
// alert(result);
// function checkAge(age){
//     if (age>=18){
//         return true;
//     }else{
//         return confirm('Do you have permission from your parents?');
//     }
// }
// let age=prompt('How old are you?');
// if(checkAge(age)){
//     alert('Access Granted');
// }
// else{
//     alert('Access Denied');
// }
// const myobj = {
//     name:"SkillF",
//     game:function(){
//         return "GTA";
//     }

// }
// console.log(myobj.game());

// arr =["Fruit","Vegetable","Furniture"];
// arr.forEach(function(element,index,array) {
//     console.log(element,index,);

// });
// let j = 234;
// console.log(j);
// function ui(name){
//    let j=9;
//     return `This is a ${name} ui`;
// }
// console.log(ui('Achintya'),j);
var firstName="Achintya";
var age = 22;


var job,isMarried;
job="Developer";
isMarried=false;

console.log(firstName + ` is ${age} yeras old .`+` He's a ${job} .`+' Is He married? : '+ isMarried);