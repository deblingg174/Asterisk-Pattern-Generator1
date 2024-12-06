// JavaScript Document
// console.log(x);
// var x = 10;
// x = 99.99;
// console.log(x);
// x="Hello puk ah jmr";
// console.log(x);
// var x="testing";
// console.log(x);
// display();
// function display(){
// 	var y=10;
// 	console.log(x);
// 	console,log(y);
// }
// console.log(y);
// let a=10;
// console.log(a);
// a="hello";
// console.log(a);
// const pi=3.14;
// console.log(pi);
// let age = 25;
// console.log(age);
// let price = 99.99;
// console.log(price);
// let name = "devit";
// name = 'Dumamai';
// name=`qinite`;
// console.log(`My name is ${name}`);
// console.log("My name is "+ name);
// let firstName;
// console.log(firstName);
// let lastName = Null;
// console.log(lastName);
// var data = {"firstName": "Data", "lastName":"Test"};
// console.log(data);
// console.log(data["firstName"]);
// let colors =['red' , 'green' , 'blue'];
// console.log(colors);
// function test(){
//     var funtionVar = 'I am developer';
//     console.log(funtionVar);
// }
//block scope
// if(true){
//     let abc="hi";
//     console.log(abe);
// }
//Operater
// let a=5;
// let b=2;
// dayOfweek = "a-b=" + (a  % b);

// let x=5;
// let y=5;
// document.getElementById("div").innerHTML = "<u>x+y</u> =" + ( x *= y );

// var z=true;
// var v=false;
// document.getElementById("p2").innerHTML = "z + v =" + (!v);

// let m=5;
// let w=5;
// document.getElementById("mw").innerHTML = "m + w =" + (w); 

// let age ="17";
// let isAdult = (age >=18) ? "Yes":"No";
// console.log(isAdult);
// document.getElementById("age").innerHTML= isAdult;

// let score = 49;
// let grade = (score >= 90) ? "A" : 
//             (score >= 80) ? "B" : 
//             (score >= 70) ? "C" : 
//             (score >= 60) ? "D" : "F" ;
// console.log(grade);
// document.getElementById("score").innerHTML=grade;

// let userScore = 10;
// let finalScore = userScore ?? 100;
// console.log(finalScore);
// document.getElementById("user").innerHTML=finalScore;

// let  age1 = 19;
// if (age1>=18){
//     console.log("You are an adult=");
// }else{
//     console.log("You are not an adult=");
// }

// function Test {
//     console.log(document.getElementById("score").value);
//     document.getElementById("p3").innerHTML="F";
// }
// function checkGrade() {
//     const score = document.getElementById("score").value;
//     const result = document.getElementById("result");

//     if (score >= 90){
//         result.textContent = "You grade: A";
//     } else if (score >= 80){
//         result.textContent = "You grade: B";
//     } else if (score >= 70){
//         result.textContent = "You grade: C";
//     } else if (score >= 60){
//         result.textContent = "You grade: D";
//     } else if (score >= 50){
//         result.textContent = "You grade: E";
//     } else {
//         result.textContent = "You grade: F";
//     }
// }

// function Test (){
//     let day = Number (document.getElementById("score").value);
//     let dayOfweek ="";
//     switch(day){
//         case 1:
//             dayOfweek = "Monday";
//             break;
//         case 2:
//             dayOfweek = "Tuesday";
//             break;
//         case 3:
//             dayOfweek = "Wednesday";
//             break;
//         case 4:
//             dayOfweek = "Thursday";
//             break;
//         case 5:
//             dayOfweek = "Friday";
//             break;
//         case 6:
//              dayOfweek = "Saturday";
//              break;
//         case 7:
//             dayOfweek = "Sunday";
//             break;
//         default:
//             dayOfweek = "Invalid day";
//             break;
//     }
//     document.getElementById("p1").innerHTML = dayOfweek;
// }
// function Test(){
//     let day = Number(document.getElementById("score").value);
//     let count ="";
//     for (let i = 0; i <= day; i++){
//         count += `KDMV Ah Jmr: ${i}<br/>`;
//     }
//     document.getElementById("p1").innerHTML=count;

// }

document.getElementById("generateBtn").addEventListener("click", () => {
    const n = parseInt(document.getElementById("numberInput").value);
    const output = document.getElementById("output");
  
    if (isNaN(n) || n <= 0) {
      output.textContent = "Please enter a valid positive number.";
      return;
    }
  
    let result = "";
    for (let i = 1; i <= n; i++) {
      const spaces = " ".repeat(n - i); 
      const stars = "*".repeat(2 * i - 1); 
      result += spaces + stars + "\n";
    }
  
    output.textContent = result;
  });
  
  