export const digit = (number) => {
    let numberDigit = number;
    number = number.toString();
    let lengthNumber = number.length; 
    return ('Le nombre de digit de '+numberDigit+ ' est '+ lengthNumber);
}

// digit(12)
// digit(12000)
// digit(1)
// digit(34)
// digit(67)