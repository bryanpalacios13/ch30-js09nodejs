
const palindromo = (str) => {
    const re = /[\W_]/g;
    const stringSeparado = str.toLowerCase().replace(re,'');
    const stringRevers = stringSeparado.split('').reverse().join('');
    return stringSeparado === stringRevers;
}

module.exports = {palindromo};