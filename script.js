function volume_sphere(event) {
    event.preventDefault(); // Prevent form from reloading the page
	let result = document.getElementById("volume");
    // Get the radius from input
    let radius = document.getElementById("radius").value;

    // Calculate volume
    let Volume = (4/3 * Math.PI * Math.pow(radius, 3)).toFixed(4);
	if (radius<0) {
		Volume = NaN;
	}
    result.value = Volume;
	//return volume;
}

// Attach function to form submit
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};