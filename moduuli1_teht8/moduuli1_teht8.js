let target = document.querySelector('#target')
let name = parseInt(prompt("Greetings. I am the great sorting hat. I will draw a class for you. Firstly, give me your name: "));


let list_of_leapy = '<ul>';
for (let y = start_y; y <= end_y; y++)

{
    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
{
    list_of_leapy += '<li>';
    list_of_leapy += y;
    list_of_leapy += '</li>';
}

}
list_of_leapy += '</ul>';

target.innerHTML = list_of_leapy