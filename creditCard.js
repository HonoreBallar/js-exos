export const card = (cc) => {
    let ccString = cc.toString();
    const ccLength = ccString.length;
    const last = ccString.slice(-4)
    const numberHide = ccLength - 4;
    let mask = "";
    for (let index = 0; index < numberHide; index++) {
        mask += "#";
    }
    return ( mask + last );
}

// card(12348)
// card(1)
// card(1238)
// card(1234809)
// card(123889987656548)
// card('123889987656548!')