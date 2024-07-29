const regex = /https:\/\/www\.google\.co\.uk\/maps\/@?-?[0-9]?[0-9].?[0-9]*,-?[0-9]?[0-9].?[0-9]*,3a,75y,[0-3]?[0-9]?[0-9].?[0-9]*h,[0-3]?[0-9]?[0-9].?[0-9]*t/g

function url_split(url){
	
	let data = url.split("/")[4];
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
	
	if (url.match(regex) === null) {
		output.style.display = "none"
		error.style.display = "inline";
		
		return;
		
	}
	
	let data = url_split(url);
	
	lat_span.textContent = "Latitude: " + data[0];
	long_span.textContent = "Longitude: " + data[1];
	head_span.textContent = "Heading: " + data[2];
	pitch_span.textContent = "Pitch: " + data[3]

	output.style.display = "inline";
	error.style.display = "none";
	
	
}