const sum = (a,b) => {
    // return (a*1000 + b*1000)/1000;
    return Number((a+b).toFixed(4));
}

const suma = (a,b) => {
    return a + b
}

module.exports = {sum, suma};