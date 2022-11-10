let target = document.querySelector('#target')
let start_y = parseInt(prompt("Give a starting year: "));
let end_y = parseInt(prompt("Give an ending year: "));


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