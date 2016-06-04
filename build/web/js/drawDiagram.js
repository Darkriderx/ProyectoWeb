/*Variables globales porque Fuck da Police*/

var datosRectangulo = []; //Guarda los datos de los rectangulos para su posterior referencia
var posicionRectanguloX = 0;
/*Función principal, encargada de la ejecución de todo el script*/

$(document).ready(function(){
	$('#dibujar').click(crearDiagrama);
	$('#borrarCanvas').click(borrarCanvas);
});

/*Sección dedicada a la validación de los datos de input
Valida tanto que estén llenos como que sean datos del tipo correcto*/

//Obtiene el número total de input en la página
function obtenerNumeroTotalInput()
{
	var totalInput = 0;
	var numeroRectangulos = $('#numeroRectangulos').val();
	return totalInput = numeroRectangulos*3;
}

//Comprueba si cada input tiene un valor o están vacios
function comprobarValoresInput()
{
	var contador=0;
	var numeroRectangulos = $('#numeroRectangulos').val();
	for(var i=0;i<numeroRectangulos;i++)
	{
		for(var j=0;j<3;j++)
		{
			var valorInput = $('#Rectangulo'+i+''+j+'').val();
			if(valorInput||isNaN(valorInput))
			{
				contador++;
			}
		}
	}
	return contador;
}

//Si cada input está lleno regresa true
function siCadaInputEstaLleno()
{
	var contador = comprobarValoresInput();
	var NumeroTotalInput = obtenerNumeroTotalInput();
	if(contador==NumeroTotalInput)
	{
		return true;
	}
	else
	{
		return false;
	}
}
//Borrar los dibujos del canvas manualmente
function borrarCanvas()
{
	$('canvas').clearCanvas();
	datosRectangulo.splice(0,datosRectangulo.length);
	posicionRectanguloX=0;
	console.log('Canvas borrado');
}


/*Sección encargada de dibjar las figuras en el canvas*/

//Obtener los datos de cada input para calcular la altura
function obtenerDatosInput()
{
	var numeroRectangulos = $('#numeroRectangulos').val();
	for(var i=0;i<numeroRectangulos;i++)
	{
		var base1 = $('#Rectangulo'+i+'0').val();
		var base2 = $('#Rectangulo'+i+'1').val();
		var frec = $('#Rectangulo'+i+'2').val();
		calcularAltura(base1,base2,frec);
	}
}

//Calcula la altura de cada barra
function calcularAltura(base1,base2,frec)
{
	var ancho = (base2-base1);
	var altura = frec/ancho;
	guardarDatosDeRectangulo(ancho,altura);
}

//Guarda los datos de los rectangulos para su posterior uso
function guardarDatosDeRectangulo(ancho, altura)
{
	posicionRectanguloX += ancho*10;
	console.log(posicionRectanguloX);
	datosRectangulo.push(
		{
			x: posicionRectanguloX, y: 500,
			width: ancho*10,
			height: altura*20,
			fillStyle: "#000"
		});
}

//Dibuja el rectangulo seleccionado
function dibujarRectangulo(rectanguloActual)
{
	var Rectangulo = datosRectangulo[rectanguloActual];
	$('canvas').drawRect({
		x: Rectangulo.x, y: Rectangulo.y,
		width: Rectangulo.width,
		height: Rectangulo.height,
		fillStyle: Rectangulo.fillStyle,
	});
}

//Crea el diagrama completo
function crearDiagrama()
{
	if(siCadaInputEstaLleno)
	{
		borrarCanvas();	
		obtenerDatosInput();
		for(var rectanguloActual=0;rectanguloActual<datosRectangulo.length;rectanguloActual++)
		{
			dibujarRectangulo(rectanguloActual);
		}
	}
	else
	{
		alert("Datos incompletos o erroneos!");
	}
}