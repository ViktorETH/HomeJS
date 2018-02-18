var arr1 = [2, 4, 5, 45, 32];
function max(arr) { 
	var max = arr[0]; 
        for (var i = 1; i < arr.length; i++){ 
        	if(max < arr[i]){
                    max = arr[i];
                  }  
                } 
    alert("Максимальное число в массиве  = " + max);
  }
  max(arr1);

  