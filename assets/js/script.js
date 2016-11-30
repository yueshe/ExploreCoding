$(document).ready(function() {
	$(".introduction").fadeIn(2000);
	$(".overall").delay(1000).fadeIn(1000);
	$("#mobile").click(function() {
		$(".overall").hide();
		$(".mobile").fadeIn(1000);
	})
	$("#web").click(function() {
		$(".overall").hide();
		$(".mobile").fadeIn(1000);
	})
	$("#script").click(function() {
		$(".overall").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".script").delay(1500).fadeIn(1000);
		$(".button").show();
	})
	$("#low-level").click(function() {
		$(".overall").hide();
		$(".low-level").fadeIn(1000);
	})
	$("#analysis").click(function() {
		$(".overall").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".analysis").delay(1500).fadeIn(1000);
		$(".button").show();
	})
	$("#database").click(function() {
		$(".overall").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".database").delay(1500).fadeIn(1000);
		$(".button").show();
	})
	$("#android").click(function() {
		$(".mobile").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".android").delay(1500).fadeIn(1000);
		$(".button").show();
	})
	$("#ios").click(function() {
		$(".mobile").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".ios").delay(1500).fadeIn(1000);
		$(".button").show();
	})
	$("#front-end").click(function() {
		$(".web").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".front-end").delay(1500).fadeIn(1000);
		$(".button").show();
	})
	$("#back-end").click(function() {
		$(".web").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".back-end").delay(1500).fadeIn(1000);
		$(".button").show();
	})
	$("#computer").click(function() {
		$(".low-level").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".computer").delay(1500).fadeIn(1000);
		$(".button").show();
	})
	$("#robot").click(function() {
		$(".low-level").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".robot").delay(1500).fadeIn(1000);
		$(".button").show();
	})
	$("button").click(function() {
		$(".button").hide();
		$(".final_introduction").hide();
		$(".script").css({"display": "none"});
		$(".analysis").css({"display": "none"});
		$(".database").css({"display": "none"});
		$(".android").css({"display": "none"});
		$(".ios").css({"display": "none"});
		$(".front-end").css({"display": "none"});
		$(".back-end").css({"display": "none"});
		$(".computer").css({"display": "none"});
		$(".robot").css({"display": "none"});
		$(".introduction").fadeIn(2000);
		$(".overall").delay(1000).fadeIn(1000);
	})

})

