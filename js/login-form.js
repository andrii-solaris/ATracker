$(document).ready(function(){
    $(".btn").click(function(){
        $(".alert").css("color","#a94442");
    });

    $("input[type=email]").keyup(function(){
    	var email = $("input[type=email]").val();
    	if (email.indexOf('@') > -1) {
    		$("div.e-mail").addClass("has-success has-feedback");
    		$(".e-glyph").show();
    	}

    	else {
    		$("div.e-mail").removeClass("has-success has-feedback");
    		$(".e-glyph").hide();
    	}
	});

	$("input[type=password]").keyup(function(){
    	var pass = $("input[type=password]").val();
    	if (pass.length > 5) {
    		$("div.pass").addClass("has-success has-feedback");
    		$(".p-glyph").show();
    	}

    	else {
    		$("div.pass").removeClass("has-success has-feedback");
    		$(".p-glyph").hide();
    	}
	});
});