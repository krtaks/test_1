// объявляем пременную для кнопки
var button = document.getElementById('button'); 

function ButtonClick(){
    //берем первое значение
	var first=document.getElementById('number_1');
	//берем второе значение
    var second=document.getElementById('number_2');
    
	//присваиваем значение первого ввода
	var number1=Number(first.value);
    //присваиваем значение второго ввода
	var number2=Number(second.value);
	
    // складываем
	var sum = number1+number2;       
    // результат суммирования в алертбоксе
	window.alert('Результат: \n \n'  +sum);  
}

//расчет 
button.addEventListener('click', ButtonClick);   