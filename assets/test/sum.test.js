/*
    Las pruebas unitarias permiten verificar que los componentes individuales
    de un programa funciones correctamente.
    
Ventajas:
    1.- Detección de errores
    2.- Automatización 
    3.- Refactorización segura
    4.- Optimización
    5.- Facilita la colaboración

Desventajas:
    1.- Tiempo y esfuerzo
    2.- Cobertura insuficiente
    3.- Complejidad adicional
    4.- Falsa confianza
*/

// importar el archivo a probar
const { sum, suma } = require("../js/sum");


// test("Prueba de 1 + 3 = 4", ()=>{});
test("Prueba de 1 + 3 = 4", ()=>{
    expect( sum(1,3) ).toBe(4);
});

test("Prueba de 1000 + 3000 = 4000", ()=>{
    expect( sum(1000,3000) ).toBe(4000);
});

test("Prueba de 1000 + -3000 = -2000", ()=>{
    expect( sum(1000,-3000) ).toBe(-2000);
});

test("Prueba de 1000 + NaN = NaN", ()=>{
    expect( sum(1000,NaN) ).toBe(NaN);
});

test("Prueba de 2.51 + 0.01 = 2.52", ()=>{
    // Los números flotantes tienen problemas con la precisión en cálculos+
    // donde la exactitud decimal es crítica.
    expect( sum(2.51,0.01) ).toBe(2.52); // 2.52
    expect( sum(0.01,0.20) ).toBe(0.21); // 0.21
    expect( sum(0.0003,0.0005) ).toBe(0.0008); // 0.21
});

test("Suamtoria de decimales sin importar la precisión", ()=>{
    // Los números flotantes tienen problemas con la precisión en cálculos+
    // donde la exactitud decimal es crítica.
    expect( suma(2.51,0.01) ).toBeCloseTo(2.52); // 2.52
    expect( suma(0.01,0.20) ).toBeCloseTo(0.21); // 0.21
    expect( suma(0.0003,0.0005) ).toBeCloseTo(0.0008); // 0.21
});

