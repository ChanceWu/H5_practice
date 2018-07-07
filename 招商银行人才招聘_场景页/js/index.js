$(document).ready(function() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	$(".content").width(width);
	$(".content").height(height*4);
	$(".page").width(width);
	$(".page").height(height);
	
	nowPage = 0;
	
	/*
	 * 手势监听：当在该元素内敲击屏幕触发swipe函数
	 * 参数：
	 * 	1、浏览器对象
	 * 	2、方向
	 * 	3、滑动距离
	 * 	4、触摸时间
	 * 	5、手指数量
	 */
	$(".content").swipe({
		swipe: function(event,direction,distance,duration,fingerCount) {
			if(direction == "up"){
				nowPage = nowPage > -3 ? nowPage-1 : nowPage;
			}else if(direction == "down") {
				nowPage = nowPage < 0 ? nowPage+1 : nowPage;	
			}
			$(".content").animate({
				"top": nowPage*100+"%"
			}, 1000, function() {
				playAnim();
			})
		}
	});
	
	/* 第一页动画：背景的淡入，人物的显示 */
	$(".page1_building").fadeIn(2000, function() {
		$(".page1_avatar").animate({
			"width": "70%",
			"height": "30%"
		}, 2000);
	});
	
	/* 第二、三、四页动画 ：  */
	function playAnim() {
		if(nowPage == -1) {
			$(".page2_bg").fadeIn(2000, function() {
				$(".page2_farm").fadeIn(1000, function() {
					$(".page2_it").fadeIn(1000);
				});
			});
		}
		if(nowPage == -2) {
			$(".page3_title1").fadeIn(2000);
			$(".page3_title2").fadeIn(2000);
			
			$(".page3_bus").animate({
				"left": "-100%"
			}, 2000);
			$(".page3_avatar").animate({
				"right":"50%"
			}, 3000, function() {
				$(".page3_title1").fadeOut(500);
				$(".page3_title2").fadeOut(500);
				$(".page3_station").fadeOut(500);
				$(".page3_avatar").fadeOut(500, function() {
					/* 场景二 */
					$(".page3_wall").fadeIn(2000);
					$(".page3_cry").fadeIn(2000, function() {
						$(".page3_space").animate({
							"width": "30%"
						}, 1000, function() {
							$(".page3_where").animate({
								"width": "50%"
							}, 1300);
						})
					})
				})
			})
		}
		if(nowPage == -3) {
			$("#page4_lo").click(function() {
				this.src = "img/lightOn.png";
				$(".page4_ct").fadeOut(1000);
				$(".page4_bg").fadeOut(1000);
				$(".page4_click").fadeOut(1000, function() {
					$(".page4_wky").fadeIn(1000, function() {
						$(".page4_bg2").fadeIn(1000);
					})
				});
			})
		}
	}
	
})
