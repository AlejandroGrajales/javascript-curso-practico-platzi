// Código del cuadrado

console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado mide: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo

console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
// "Los lados del triangulo miden: "
// + ladoTriangulo1
// + "cm, "
// + ladoTriangulo2 
// + "cm, "
// + baseTriangulo
// + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triángulo es de: " + perimetroTriangulo + "cm")

function areaTriangulo(base, lado1, lado2) {
    if(lado1 != lado2) {
        console.error("Los lados A y B no son iguales")
    }
    else{
    const altura = Math.sqrt((lado1 * lado1) - ((base * base) / 4));
    return (base * altura) / 2;
    }
}
// console.log("El area del triángulo es de: " + areaTriangulo + "cm^2")
console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es de: " + radioCirculo + "cm")
// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo es de: " + diametroCirculo + "cm")

// PI
const PI = Math.PI;
console.log("El valor de PI es de: " + PI)
// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
// console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm")

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El area del circulo es de: " + areaCirculo + "cm^2")
console.groupEnd();



// Aquí interactiamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");

    const value = input.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");

    const value = input.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const area = areaTriangulo(value, value2, value3);
    alert(area);
}

// Circulo
function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}