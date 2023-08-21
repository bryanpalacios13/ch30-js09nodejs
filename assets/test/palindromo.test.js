// importar el archivo a probar

const { palindromo } = require("../js/palindromo");

test("Palíndromo de 3 letras", () => {
    expect( palindromo( "ana" ) ).toBe(true);
    console.log(expect( palindromo( "ana" ) ));
    
    expect( palindromo( "ala" ) ).toBeTruthy();
    expect( palindromo( "oso" ) ).toBeTruthy();
    expect( palindromo( "Bob" ) ).toBeTruthy();
    expect( palindromo( "Somos o no somos" ) ).toBeTruthy();
});

test("No palíndromos de 3 letras", () => {
    expect( palindromo( "ola" ) ).toBe(false);
});
test("No palíndromos de 3 letras", () => {
    expect( palindromo( "amo" ) ).toBeFalsy();
});
test("No palíndromos de 3 letras", () => {
    expect( palindromo( "leo" ) ).toBeFalsy();
});