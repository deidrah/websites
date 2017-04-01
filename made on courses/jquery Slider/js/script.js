$(document).ready(function() {

	var speed = 500; 
	var autoswitch = false; 
	var change = 1000; 

	$(".slide").first().addClass("active");
	$(".slide").hide();
	$(".active").show();


	$("#next").click(nextSlide);
	$("#prev").click(prevSlide);

	if (autoswitch == true) {
		setInterval(nextSlide, change);
	}

	function nextSlide() {
		$(".active").removeClass("active").addClass("old");
			if($(".old").is(":last-child")) {
				$(".slide").first().addClass("active");
			} else {
				$(".old").next().addClass("active");
			}
			$(".old").removeClass("old");
			$(".slide").fadeOut(speed);
			$(".active").fadeIn(speed);
	}

	function prevSlide() {
		$(".active").removeClass("active").addClass("old");
		if($(".old").is(":first-child")) {
			$(".slide").last().addClass("active");
		} else {
			$(".old").prev().addClass("active");
		}
		$(".old").removeClass("old");
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	}
});