//Loop changes the elements of data[]
for ( var i = 0; i < data.length; i++ ) {	
	// For the values "null" and "undefined" not do anything
	if ( data[i] != null ) {		
		if ( data[i] == 0 ){
			data[i] = +data[i] + 10;
		}		
		else if ( data[i] > 100 ) {
			data[i] = data[i] - 100;
		}		
		else if ( data[i] < 100 ) {
			data[i] = +data[i] + 100;
		}
	}
}
// Output results
log (data);