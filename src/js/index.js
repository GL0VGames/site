$(document).ready(function () {
	
	var animB = "square-move", positionB, timeB, repeatB = "linear infinite";
	var screenW = $(window).width();
	var bars = Math.round(screenW / 120);
	var barVar = 200;
	
	var paintBars = function () {
		for (var n = 0; n < bars; n++) {
			$(".square-container").append(document.createElement("div"));
		}

		$(".square-container div").attr("class", "square");

		for (var i = 0; i + 1 <= $("div.square").length; i++) {
			positionB = i * barVar;
			timeB = (Math.round(Math.random() * 100) / 10 + 3) + "s";

			$(".square:nth-of-type(" + (i + 1) + ")")
				.css({
				"opacity": Math.random,
				"animation": animB + " " + timeB + " " + repeatB,
				"left": positionB
				});
			
			$("square:last-of-type()").remove();
			
		};
	};
	
	paintBars();
	
});