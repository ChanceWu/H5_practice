$(document).ready(function() {
	setInterval(function(){
		$("#fire_box").append($("<span class='fire'></span>"));
		var $last_span = $("#fire_box span:last");
		var $top = Math.random()*580 + 20;
		var $left = Math.random()*1000;
		var $speech = Math.random()*5000;
		var $run_top = Math.random()*200 - 100;
		var $run_left = Math.random()*200 - 100;
		$last_span.css({"top":$top,"left":$left});
		$last_span.animate({
			"width":"10px",
			"height":"10px",
			"left":$left-$run_left,
			"top":$top-$run_top,
			"opacity":1
		},4000);
		$last_span.animate({
			"width":"5px",
			"height":"5px",
			"left":$left-$run_left-$run_left,
			"top":$top-$run_top-$run_top,
			"opacity":0
		},4000, function(){
			$(this).remove();
		});
	},100);
})