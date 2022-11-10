'use script';

let target = document.querySelector('#target')
let dice_amount = parseInt(prompt('Give number of dices.'))
let probability = parseInt(prompt("Give dices result"))
let correct = 0
for (let v = 0; v != 10000; v++){
    let summa = 0
    for (let i = 0; i != dice_amount; i++){
        let noppanumero = Math.floor(Math.random() * 6) + 1
        summa = noppanumero + summa
        if (summa == probability){
            correct++
        }
    }
}
target.innerHTML = 'The probability with ' + probability + ' with ' + dice_amount + ' is '+ (correct/100) + '%';