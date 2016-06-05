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
	$.get('users.xml', function(data, textStatus){
		xml=data;
		//Find users in XML
		$(xml).find('user').each(function(){
			var item = $(this);
			if(item.find('username').text()==UsName&&item.find('password').text()==UsPass)
			{
				$('form').submit();
			}
		});//End find-users
	});//End GET XML data
	//if($('user username').length)
}