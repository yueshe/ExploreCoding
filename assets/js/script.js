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
	})
	$("#database").click(function() {
		$(".overall").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".database").delay(1500).fadeIn(1000);
	})
	$("#android").click(function() {
		$(".mobile").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".android").delay(1500).fadeIn(1000);
	})
	$("#ios").click(function() {
		$(".mobile").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".ios").delay(1500).fadeIn(1000);
	})
	$("#front-end").click(function() {
		$(".web").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".front-end").delay(1500).fadeIn(1000);
	})
	$("#back-end").click(function() {
		$(".web").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".back-end").delay(1500).fadeIn(1000);
	})
	$("#computer").click(function() {
		$(".low-level").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".computer").delay(1500).fadeIn(1000);
	})
	$("#robot").click(function() {
		$(".low-level").hide();
		//more features
		$(".introduction").hide();
		$("h1").fadeIn(500);
		$("h1").delay(1000).fadeOut(500);
		$(".final_introduction").delay(1500).fadeIn(1000);
		$(".robot").delay(1500).fadeIn(1000);
	})

})

