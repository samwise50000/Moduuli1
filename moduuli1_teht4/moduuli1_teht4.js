'use script';

let target = document.querySelector('#target')
let name = prompt('Greetings. I am the great sorting hat. I will draw a class for you. Firstly, give me your name: ');

let result = Math.floor(Math.random() * 4)+1;

if (result == 1)
{
    target.innerHTML = name + ', you are Daredevil!';
}
if (result == 2)
{
    target.innerHTML = name + ', you are Slytherin!';
}
if (result == 3)
{
    target.innerHTML = name + ', you are Hufflepuff!';
}
if (result == 4)
{
    target.innerHTML = name + ', you are Ravenclaw!';
}
