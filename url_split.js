const exp = /@-?[0-9]{1,2}(.[0-9]+)?,-?[0-9]{1,2}(.[0-9]+)?,[0-9]a,[0-9]{1,2}(.[0-9]+)?y,[0-9]{1,3}(.[0-9]+)?h,[0-9]{1,2}(.[0-9]+)?t/

function url_test(url){

	console.log(url.match(exp));
	return url.match(exp)
}

function url_split(url){
	
	let data = url.match(exp)[0];
	data = data.split(",");
	
	let lat = data[0].slice(1);
	let lon = data[1];
	let head = data[4].slice(0, -1);
	let pitch = data[5].slice(0, -1);

	return [lat, lon, head, pitch];
	
}

function data_extract(e){
	
	// Check valid url
	// IF invalid:
		// Error
	//ELSE:
		// Split and display

	let url = String(e.target.value);

	if (url_test(url) == null) {
		output.style.display = "none"
		error.style.display = "inline";
		
		return;
		
	}
	
	let data = url_split(url);
	
	lat_span.value = data[0];
	long_span.value = data[1];
	head_span.value =  data[2];
	pitch_span.value = data[3]

	output.style.display = "inline";
	error.style.display = "none";
	
	
}
