function volume_sphere(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the radius from input
    let radius = document.getElementById("radius").value;

    // Calculate volume
    let volume = (4/3 * Math.PI * Math.pow(radius, 3)).toFixed(4);
	if (radius<0) {
		volume = NaN;
	}
    // Display result
//let output = document.createElement('div');
  //  document.body.appendChild(output);
    //output.innerText = `Volume of the sphere: ${volume}`;

	 let output = document.getElementById("result");
    output.innerText = volume;
	return volume;
}

// Attach function to form submit
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};