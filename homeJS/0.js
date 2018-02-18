alert('Hello Viktor');

var firstName = "Alex";
var	lastName = firstName;


alert(firstName);
alert(lastName);


var name = "Viktor", surname = "SHA", age = "27", education = "hight", hobby = "guitar"; 

var a = 1, b = 1, c, d;

d = b++; alert(d); // выведет 1

d = ++d; alert(d); // выведет 2

с = (2+ ++a); alert(c); // выведет undefined

d = (2+ b++); alert(d); // выведет 4

alert(a); // 2
alert(b); // 3


var first = prompt("Введите первое число");
var second = prompt('Введите второе число');
alert(+first + +second);