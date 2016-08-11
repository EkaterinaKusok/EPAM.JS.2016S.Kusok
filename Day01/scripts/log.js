/* Function outputs to the console the data[] in the format: "data [{0}] = {1}",
	where {0} - serial number of the element in the array,
	{1} - string representation of the array element */
function log (data) {	
	for ( var i = 0; i < data.length; i++ ) {
		console.log ( "data[" + i + "]=" + outputValue(data[i]) );
	}
}

// This function returns a string representation of the element
function outputValue (value) {
	if( value === undefined ) {
		return "'не определено'";
	}
	else if ( value === null ) {
		return "'не указано'";
	}
	// If the value is a number (or string with number), then display the number
	else if ( !isNaN(value) ) {
		return +value;
	}
	// If the value is a string, but not a number, then display the unchanged string
	else{
		return "'" + value + "'";
	}
}