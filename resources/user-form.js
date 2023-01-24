document.querySelector('.user-form').addEventListener('submit', function(){
	const password = document.querySelector('.user-form [name="password"]').value;
	const passwordConfirm = document.querySelector('.user-form [name="password_confirm"]').value;
	if (password === passwordConfirm){
		alert('OK');		
	}else{
		alert('Passwords do not match!');
	}
	
});