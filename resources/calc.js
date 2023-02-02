console.log('Calc loaded');
function Calculator(){
	//const e = document.getElementById("sign");
    const signValue =  document.getElementById("sign").value;

	const num1=document.querySelector('[name="num1"]').value;
	const num2=document.querySelector('[name="num2"]').value;	
	//const signValue=document.querySelector('[name="sign"]').value;	
		
	if (signValue == "plus"){
		console.log(signValue);
		console.log(num1 , num2);
		sum=Number(num1) + Number(num2);	
	}else if(signValue == "minus"){
		console.log(signValue);
		console.log(num1 , num2);
		sum=Number(num1) - Number(num2);	
	}else if(signValue == "multi"){
		console.log(signValue);
		console.log(num1 , num2);
		sum=Number(num1) * Number(num2);
	}	else if(signValue == "divis"){
		console.log(signValue);
		console.log(num1 , num2);
		sum=Number(num1) / Number(num2);
	}	
	document.querySelector('.calc-resalt').innerText = sum;	
};

document.querySelector('.calc-calculate').addEventListener('click',function (){
	Calculator();
});

document.querySelector('[name="sign"]').addEventListener('change',function (){
	Calculator();
});

document.querySelector('[name="num1"]').addEventListener('input',function (){
	Calculator();
});

document.querySelector('[name="num2"]').addEventListener('input',function (){
	Calculator();
});