var app = {

	initialise: function () {
		var audio = new Audio('/sound/audio.wav');
		audio.loop = true;

		$('.slideshow-btn').onclick = function() {
			$('#vanilla-slideshow-container').style.display = "block";
			audio.play();
		};
		$('.sound-off').onclick = function() {
			audio.play();
			this.style.display = "none";
			$('.sound-on').style.display = "block";
		};
		$('.sound-on').onclick = function() {
			audio.pause();
			this.style.display = "none";
			$('.sound-off').style.display = "block";
		};
		$('.close-slideshow').onclick = function() {
			$('#vanilla-slideshow-container').style.display = "none";
			audio.pause();
		}
	}

};

app.initialise();