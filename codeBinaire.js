export const binarie = (number) => {
    number = parseInt(number);
    let numberBinarie = [];
    
    if (number >= 0) {
        if (number != 0) {
            while (number >= 1) {
                let bit = number % 2;
                let quotient = Math.floor(number/2);
                number = quotient;
                numberBinarie.push(bit);
            }
        } else {
            numberBinarie.push(0);
        }
        return numberBinarie.reverse().join('');
    }

}


// binarie(0)
// binarie(1)
// binarie(6)
// binarie(10)
// binarie(10000)
// binarie(100000000)
// binarie(1000000000)
// binarie(-1000000000)
