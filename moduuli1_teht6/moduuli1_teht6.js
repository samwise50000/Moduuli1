'use script';
let target = document.querySelector('#target')

let calculation = confirm('Should I calculate the square root?');
console.log(calculation);

if (calculation == true)
{
    let ask = parseInt(prompt("Give me a number that I will calculate for you:  "));
    if (ask < 0)
    {
        target.innerHTML = 'The square root of a negative number is not defined.';
    }
    else
    {
        result = Math.sqrt(ask);
        target.innerHTML = 'The square root value for the given number ' + ask + ' is ' + result + '.';
    }

}
else
{
    target.innerHTML = 'The square root is not calculated.';
}