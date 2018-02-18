// переписать while в for, сравнить последние alert
var i = 0;
var sum = 0;
while (i < 5) {
	alert("while " + sum);
	i++;
	sum += i; 
} // sum будет 10

var sum2 = 0;
for(i = 0; i < 5; i++){
	alert("for " + sum2);
	sum2 += i;
} // sum 2 будет 6
