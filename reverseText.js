export const reverse = (text) => {
    let originalText = text;
    text = text.toString().split('').reverse().join('');
    return ('"'+originalText+'"' + ' à l\'envers est ' + text);
}

// reverse('hello');
// reverse('bonjour');
// reverse('merci');
// reverse('manger');
// reverse(1223);