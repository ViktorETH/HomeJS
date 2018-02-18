var name = "Viktor";
function myName(name) {
	alert(name);
}
myName(); //Вернет undefined, так как значение аргумента не задано
myName("Viktor"); // Вернет Viktor, так мы передали значение аргумента в функцию
myName(name); // вернет Viktor, так как мы передали аргументу переменную со значением Viktor