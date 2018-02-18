var age = prompt("Введите свой возраст!");
	if (!(age > 7 && age < 17)){
		alert("Вы родились не в 2000х");
	} else {
			var name = prompt("Введите имя!");
 	 		if (name != false) {
 	 			alert("Привет " + name);
 	 		} else {
 	 			alert("Вспомнишь как зовут, приходи");
 	 		}
	}