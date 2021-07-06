//Codigo del cuadrado
console.group("Cuadrados")

const perimetroCuadrado=(lado)=> lado *4;
 

const areaCuadrado=(lado)=> lado * lado;


console.groupEnd();

//codigo del triangulo

console.group("Triangulos")//agrupa los consolesde cierta caracteristicas


const perimetroTriangulo =(lado1, lado, base)=> lado1 + lado + base;

const areaTringulo=(base,altura)=> (base*altura)/2

console.groupEnd();

//codigo de circulo
console.group("Circulo")


//Diametro
const diametroCirculo = (radio)=>radio * 2;


//PI
const PI= Math.PI;
console.log(`PI es igual a  ${PI}`)

//circuferencias

const perimetroCirculo=(radio)=>{
    const diametro= diametroCirculo(radio)
    return diametro * PI;
} 



//Area

const areaCirculo =(radio)=>(radio * radio)*PI
 
console.groupEnd();


//interactuando con html

//Funciones para el cuadrado
 
function calcularPerimetroCuadrado() {
    const input=document.getElementById("inputCuadrado") //llamamos al dato que ingresa el usuario
    const value =input.value
    const perimetro =perimetroCuadrado(value)
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input=document.getElementById("inputCuadrado")
    const value =input.value
    const area =areaCuadrado(value)
    alert(area);

}

//funciones para el triangulo

function calcularPerimetroTriangulo() {
    const inputa=document.getElementById("inputTrianguloA")
    const LadoA= Number(inputa.value)
    const inputb=document.getElementById("inputTrianguloB")
    const LadoB= Number(inputb.value)
    const inputc=document.getElementById("inputTrianguloBase")
    const Base= Number(inputc.value)
    const perimetro= perimetroTriangulo(LadoA,LadoB,Base)
    alert(`El perimetro del triangulo es igual a : ${perimetro}`)
}

function calcularAreaTriangulo() {
    const input1= document.getElementById("inputTrianguloBase");
    const base =input1.value
    const input2= document.getElementById("inputTrianguloAltura")
    const altura= input2.value;
    const area= areaTringulo(base,altura);
    alert(`El area del tringulo es igual a : ${area} metros cuadrado`)
}   


//Funciones para el circulo

function calcularPerimetroCirculo() {
    const input= document.getElementById("radio");
    const value= input.value;
    const perimetro= perimetroCirculo(value)
    alert(`El perimetro del circulo es igual a ${perimetro}`)
}

function calcularAreaCirculo() {
    const input= document.getElementById("radio");
    const value =input.value;
    const area=areaCirculo(value)
    alert(`El area del ciculo es igual a: ${area} metros cuadrado`)
}