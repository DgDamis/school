// console.log('JavaScript funguje.')
var i = 5;
var f = 3.14;
var e = 0.1e-3;
var s = 'Znakový řetězec';
var b = true;
var n = Math.floor(Math.random() * 100);

console.log(n);
/* Funkce zjišťuje, zda je číslo sudé nebo liché.*/
function OddOrEven(num){
    if (isNaN(num)) {
        return 'Error: Není číslo!'
        }
    if (!Number.isInteger(num)) return 'Error: Není celé číslo.'
    if (num == 0) {

    }else if (num % 2 == 0) {
        return 'sudé'; 
    }
    else {
        return 'liché';
    }
}

/*Funkce bude vypisovat nižší celá čísla než zadané číslo.*/

function ListOfNumbers(num) {
    if (!Number.isInteger(num)) {
        return 'Error: Není celé číslo'
    }
    var output = ''
    output = '<ul>'
    var i;
    for (i = num; i >= 0; i--) {
        output += '<li>'+i+'</li>'
    }
    output += '</ul>'
    return output;
}

console.log(OddOrEven(n));
document.getElementById('promenne').innerHTML = '<h3>Náhodné číslo</h3>';

document.getElementById('promenne').innerHTML += '<p>N = '+n+'</p>';
document.getElementById('promenne').innerHTML += 'Číslo je: '+OddOrEven(n)+''

document.getElementById('cykly').innerHTML = ListOfNumbers(n);