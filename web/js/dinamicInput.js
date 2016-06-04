$(document).ready(function(){
	var flag=0;
	$('#actualizar').click(function(){
		var numeroRectangulos = $('#numeroRectangulos').val();
		if(flag==0)
		{
			var html ='<table><thead><tr><td>Base</td><td></td><td>Frecuencia</td><td>Altura</td></tr></thead><tbody>';
			for(var i=0;i<numeroRectangulos;i++)
			{
				html += '<tr>';
				for (j=0;j<3;j++) 
				{
					html += '<td align="center"><input type="text" id="Rectangulo'+i+''+j+'" size="1"/></td>';
				}
				html += '</tr>';
			}
			html += '</tbody><tfoot><tr></tr></tfoot></table>';
			$(html).appendTo('#table');
			flag=1;
		}
		else
		{
			$('#table').text('');
			flag=0;
		}
	});//Fin click dalizar
});//Fin Ready
