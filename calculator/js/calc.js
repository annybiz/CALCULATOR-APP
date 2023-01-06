var buttons = document.querySelectorAll("#cal span");
	var operators = ['+','-','/','X'];
	for(var i = 0; i < buttons.length; i++){
		buttons[i].onclick = function(){
			var input = document.querySelector('.screen');
			var inputVal = input.innerHTML;
			var buttonVal = this.innerHTML;
			input.innerHTML += buttonVal;

			if(buttonVal == 'C'){
				input.innerHTML = '';
			}
			else if(buttonVal == "="){
				var equation = inputVal;
				var lastchar = equation[equation.length - 1];
				//REPLACING THE X OPERATORS WITH * SIGNS
				equation = equation.replace(/X/g, '*');

			if(operators.indexOf(lastchar) > -1 || lastchar == '.'){
					equation = equation.replace(/.$/,'');		
			}
			if(equation){
				input.innerHTML = eval(equation);
			}
			else{
				input.innerHTML += buttonVal;
			}
		}
	}
}