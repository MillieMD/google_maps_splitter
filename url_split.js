<html>

<head>

<link rel = "stylesheet" href = "gmaps-style.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

<title> Google Maps Tools </title>

</head>

<body>

	<main>

		<h1> Google Maps String Splitter </h1>

		<form>

			<label for = "url-input"> Paste FULL GMaps URL </label> <br>
			<input autofocus type = "text" name = "url-input" id = "urlinput">

		</form>

		<div id = "output"> 

			<div id = "lat-container" class = "output-line"> Latitude: <input type = "text" id = "lat"> </p> <button class = "invis-button" id = "copy-lat"> <i class="fa-solid fa-copy"></i> </button> </div>
			<div id = "long-container" class = "output-line"> Longitude: <input type = "text" id = "long">  </p>  <button class = "invis-button" id = "copy-long">  <i class="fa-solid fa-copy"></i> </button> </div>
			<div id = "heading-container" class = "output-line">  Heading <input type = "text" id = "head"> </p>  <button class = "invis-button" id = "copy-head"> <i class="fa-solid fa-copy"></i> </button> </div>
			<div id = "pitch-container" class = "output-line"> Pitch: <input type = "text" id = "pitch">  </p>  <button class = "invis-button" id = "copy-pitch"> <i class="fa-solid fa-copy"></i> </button> </div>

			<button class = "invis-button" id = "copy-excel"> <i class="fas fa-file-excel"></i> Copy for Excel </button>

		</div>

		<span class = "error-message" id = "error"> Invalid URL </span>

	</main>

</body>

<script src = "url_split.js"> </script>

<script>

	const output = document.getElementById("output");
	const error = document.getElementById("error");
	
	const lat_span = document.getElementById("lat");
	const long_span = document.getElementById("long");
	const head_span = document.getElementById("head");
	const pitch_span = document.getElementById("pitch");

	document.getElementById("urlinput").addEventListener("change", data_extract);
	
	document.getElementById("copy-lat").addEventListener("click", (event) => {
	
		lat_span.select()
		navigator.clipboard.writeText(lat_span.value);  
		
	});
	
	document.getElementById("copy-long").addEventListener("click", (event) => {
	
		long_span.select()
		navigator.clipboard.writeText(long_span.value);  
		
	});
	
	document.getElementById("copy-head").addEventListener("click", (event) => {
	
		head_span.select()
		navigator.clipboard.writeText(head_span.value);  
		
	});
	
	document.getElementById("copy-pitch").addEventListener("click", (event) => {
	
		pitch_span.select() 
		navigator.clipboard.writeText(pitch_span.value);  
		
	});

	document.getElementById("copy-excel").addEventListener("click", (event) => {
	
		pitch_span.select() 
		navigator.clipboard.writeText(lat_span.value + "\t" + long_span.value + "\t" + head_span.value + "\t" + pitch_span.value);  
		
	});


</script>

<script src="https://kit.fontawesome.com/d90c26d2f3.js" crossorigin="anonymous"></script>

</html>
