$(document).ready(function() {
	var $send = $("#review #send");
	var $input = $("#review #comment");
	$send.click(function(){
		send();
	});
	$input.bind("keyup",function(event) {
		if(event.keyCode == '13') {
			send();
		}
	})
	
	function send() {
		var $comment = $input.val();
		if ($comment == "") {
			alert("请先输入评论");
			return;
		} else {
			$("#box #barrage").append($("<p class='barrage_p'>"+$comment+"</p>"));
//			alert($comment);
			$input.val("");
			var $last_p = $("#box #barrage p:last");
			
			var $top = Math.random() * ($("#box #barrage").height() - 50);
			var $size = Math.random() * 20 + 20;
			var $color = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
			var $speed = Math.random() * 5000 + 5000;
			$last_p.css({"top":$top,"font-size":$size,"color":$color});
			/*参数：1.样式表 2.时间 3.回调函数：在动画完成之后调用*/
			$last_p.animate({"left":"-50px"}, $speed, function() {
				this.remove();
			})
		}
	}
	
})
