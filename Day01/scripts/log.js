/* Loop outputs to the console the data[] in the format: "data [{0}] = {1}",
where {0} - serial number of the element in the array,
	  {1} - string representation of the array element */
for ( var i = 0; i < data.length; i++ ){
	console.log ( "data[" + i + "]=" + outputValue(data[i]) );
}

// This function returns a string representation of the element
function outputValue(value){
	// If the value is undefined, then display the string “не определено”
	if( value === undefined ){
		return "не определено";
	}
	// If the value is null, then display the string “не указано”
	else if ( value === null){
		return "не указано";
	}
	// If the value is a number (or strina with number), then display the number
	else if ( !isNaN(value) ){
		return +data[i];
	}
	// If the value is a string, but not a number, then display the unchanged string
	else{
		return data[i];
	}
}