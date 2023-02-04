import { binarie } from './codeBinaire.js';
import { card } from './creditCard.js';
import { digit } from './numberDigit.js';
import { palindrone } from './palindrone.js';
import { reverse } from './reverseText.js';

//code binaire
function binarieAction(e) {

     if (!isNaN(e.target.value) && e.target.value < 0) {
        document.querySelector('.resultBinaire').innerHTML = "Ce nombre est negatif 😇";
    }
    if (!isNaN(e.target.value) && e.target.value === "") {
        document.querySelector('.resultBinaire').innerHTML = "resultat";
    }
    else{
        let result = binarie(e.target.value);
        document.querySelector('.resultBinaire').innerHTML = result;
    }

}

document.querySelector("#inputBinaire").addEventListener('keyup', binarieAction);
document.querySelector("#inputBinaire").addEventListener('change', binarieAction);

//fin

//code Credit card
function cardAction(e) {
     if (e.target.value === "") {
        document.querySelector('.resultCard').innerHTML = "resultat";
    } else {
        document.querySelector('.resultCard').innerHTML = card(e.target.value);
    }
}

document.querySelector("#inputCard").addEventListener('keyup', cardAction);
document.querySelector("#inputCard").addEventListener('change', cardAction);
//fin

//code palindrone
function palindroneAction(e) {
     if (e.target.value === "") {
        document.querySelector('.resultPalindrone').innerHTML = "resultat";
    } else {
        document.querySelector('.resultPalindrone').innerHTML = palindrone(e.target.value);
    }
}

document.querySelector("#inputPalindrone").addEventListener('keyup', palindroneAction);
document.querySelector("#inputPalindrone").addEventListener('change', palindroneAction);
// fin code 

//code reserve text
function reverseAction(e) {
     if (e.target.value === "") {
        document.querySelector('.resultReverse').innerHTML = "resultat";
    } else {
        document.querySelector('.resultReverse').innerHTML = reverse(e.target.value);
    }
}

document.querySelector("#inputReverse").addEventListener('keyup', reverseAction);
document.querySelector("#inputReverse").addEventListener('change', reverseAction);
// fin code 

//code digit
function digitAction(e) {

    if (!isNaN(e.target.value) && e.target.value === "") {
        document.querySelector('.resultDigit').innerHTML = "resultat";
    }
    else{
        document.querySelector('.resultDigit').innerHTML = digit(e.target.value);
    }

}

document.querySelector("#inputDigit").addEventListener('keyup', digitAction);
document.querySelector("#inputDigit").addEventListener('change', digitAction);
// fin code 

