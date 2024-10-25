var numero = 0
var cadnumero = ''
var operacion = 1

 //1 es la suma
 //2 es la resta

function captura(numero){
cadnumero += numero
document.getElementById("resultado").value =  cadnumero
} 


function limpiar() {
    if (cadnumero = numero )
    {
        cadnumero = ''
    }
   
    
document.getElementById("resultado").value= cadnumero;

}

function limpiarTodo() {  
    cadnumero = '';
    numero = 0;
    operacion = 0;
    document.getElementById("resultado").value = ''
    

}

function Agregar(value) {

cadnumero += value;
document.getElementById("resultado").value = cadnumero;


}

function calcular() {
    try {
        const result = eval(document.getElementById("resultado").value);
        document.getElementById("resultado").value = result;
        cadnumero = result.toString(); 
    } catch (error) {
        document.getElementById("resultado").value = "Error";
        cadnumero = '';  
    }
}

function animarBoton(button) {
    button.classList.add('boton-animado');

    setTimeout(() => {
        button.classList.remove('boton-animado');
    }, 150);
}


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        animarBoton(this);
    });
});