let target = document.querySelector('#target')

let y = parseInt(prompt("Give a year:"))

if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
{
    target.innerHTML = "The year is a leap year."
}
else
{
    target.innerHTML = "The year is not a leap year."
}