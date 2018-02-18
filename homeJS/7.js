var first = prompt("Введите первое число");
var second = prompt("Введите ворое число");
if(first && second) {
	if(first > second){
		alert("Число " + first + " больше");
	} else if(first < second){
		alert("Число" + second + " больше");
	} else {
		alert("Числа равны");
	}
} else {
	alert("Вы не ввели одно из чисел");
}
