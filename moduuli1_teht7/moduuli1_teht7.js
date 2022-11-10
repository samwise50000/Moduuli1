'use script';

let dices = parseInt(prompt("Give a number of dice that I will throw for you. " +
	"I will print the result of sum of the dices thrown."));
let dice_total_value = 0;
for (let x = 0; x != dices; x++)
{
let dicenumber = Math.floor(Math.random()*6)+1
dice_total_value = dice_total_value + dicenumber
}


target.innerHTML = 'The total sum value of thrown dice is: ' + dice_total_value;
