'use script';

let target = document.querySelector('#target')
let name = parseInt(prompt("Greetings. I am the great sorting hat. I will draw a class for you. Firstly, give me your name: "));

let result = Math.floor(Math.random() * 5);
if (result = 1)
{
    document.querySelector('#target').innerHTML = + name + ', you are Daredevil!';
}
if (result = 2)
{
    document.querySelector('#target').innerHTML = + name + ', you are Slytherin!';
}
if (result = 3)
{
    document.querySelector('#target').innerHTML = + name + ', you are Hufflepuff!';
}
if (result = 4)
{
    document.querySelector('#target').innerHTML = + name + ', Ravenclaw!';
}
