//Loop changes the elements of data[]
for ( var i = 0; i < data.length; i++ ){	
	// For the values "null" and "undefined" not do anything
	if( data[i] != null ){		
		// If the element is equal to 0 - add 10
		if( data[i] == 0 ){
			data[i] = +data[i] + 10;
		}		
		// If the element is more than 100 - subtract 100
		else if( data[i] > 100 ){
			data[i] = data[i] - 100;
		}		
		// If the element is less than 100 - add 100
		else if( data[i] < 100 ){
			data[i] = +data[i] + 100;
		}
	}
}