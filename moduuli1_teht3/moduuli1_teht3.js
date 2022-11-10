let First = parseInt(prompt("Give the first number: "))
let Second = parseInt(prompt("Give the second number: "))
let Third = parseInt(prompt("Give the third number: "))

let sum = First + Second + Third;
let multiply = First * Second * Third;
let average = sum / 3;

target.innerHTML = 'Sum of the numbers is: ' + sum + ', Multiplied value of the numbers is: ' + multiply + ', Average value of the given numbers is: ' + average;