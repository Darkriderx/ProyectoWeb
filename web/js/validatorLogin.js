//Ready
$(document).ready(function(){
	//login-click
	$('#LoginButton').click(submit);//End login-click
});//End ready

function submit(){
	//Get FORM data
	var UsName = $('#UsName').val();
	var UsPass = $('#UsPass').val();
	var xml;
	//Get XML data
	$.get('xml/users.xml', function(data, textStatus){
		xml=data;
		//Find users in XML
		$(xml).find('users').each(function(){
			var item = $(this);
			if(item.find('username').text()==UsName&&item.find('password').text()==UsPass)
			{
				$('form').submit();
			}
			else
			{
					$('#error').html('<p>Usuario o contrase&ntilde;a invalido!</p>');
			}
		});//End find-users
	});//End GET XML data
}