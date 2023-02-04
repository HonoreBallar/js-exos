export const palindrone = (text) => {
    text = text.toString();
    let textReverse = text.toString().split('').reverse().join('');

    if (textReverse === text) {
        return (text + ' est un palindrone');
    } else {
        return (text + ' n\'est pas un palindrone');
    }
    
}

// palindrone('radar')
// palindrone('ici')
// palindrone('tôt')
// palindrone('moi')
// palindrone('test')
// palindrone('ressasser')