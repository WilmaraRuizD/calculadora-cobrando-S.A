// => lateleletal (invertida)
// true

function esPalindromo(texto) {
    return texto.split('').reverse().join('') == texto;
}

console.log(esPalindromo('lateleletal'));   // true
console.log(esPalindromo('amadaladama'));   // true
console.log(esPalindromo('revolver'));   // false
console.log(esPalindromo('1001'));   // true
console.log(esPalindromo('ala'));   // false
console.log(esPalindromo('arenera'));   // true