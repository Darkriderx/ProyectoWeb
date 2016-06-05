/*Variables globales porque Fuck da Police*/

var datosRectangulo = []; //Guarda los datos de los rectangulos para su posterior referencia
var coordenadasLinea = [];
var posicionRectanguloX = 0;
var posicionLineaX = 0;
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
	return false;
}
//Borrar los dibujos del canvas manualmente
function borrarCanvas()
{
	$('canvas').clearCanvas();
	datosRectangulo.splice(0,datosRectangulo.length);
	posicionRectanguloX=0;
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
                strokeWidth: 1,
                strokeStyle: "#FFF"
	});
}

//Dibuja las lineas del histograma
function obtenerCoordenadasLinea()
{
    for(var i=0;i<datosRectangulo.length;i++)
    {
        coordenadasLinea.push({
            posicionX: datosRectangulo[i].width, posicionY: 500-(datosRectangulo[i].height/2)
        });
    }
}

function dibujarLinea()
{
    posicionLineaX=0;
   obtenerCoordenadasLinea();
   var obj = {
        strokeStyle: 'blue',
        strokeWidth: 2,
        rounded: true
   };
   for(var i=0;i<coordenadasLinea.length;i++)
   {
       posicionLineaX += coordenadasLinea[i].posicionX;
       console.log(posicionLineaX);
        obj['x'+(i+1)] = posicionLineaX;
        obj['y'+(i+1)] = coordenadasLinea[i].posicionY;
   }
    $('canvas').drawLine(obj);
}
//Crea el diagrama completo
function crearDiagrama()
{
	var todosLosInputEstanLlenos = siCadaInputEstaLleno();
	if(todosLosInputEstanLlenos)
	{
		borrarCanvas();	
		obtenerDatosInput();
		for(var rectanguloActual=0;rectanguloActual<datosRectangulo.length;rectanguloActual++)
		{
			dibujarRectangulo(rectanguloActual);
		}
            dibujarLinea();
	}
	else
	{
		alert("Datos incompletos o erroneos!");
	}
}