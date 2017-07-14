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

    $("#1").click(function(){
        var existing = $("input:text").val();
       if (existing.length < 4) {
             $("input:text").val(existing + $("#1").attr("name"));
        }
        if (existing.length == 3) {
            $(".dial-btn").addClass("disabled");
        }
    });
    
    $("#2").click(function(){
        var existing = $("input:text").val();
        if (existing.length < 4) {
             $("input:text").val(existing + $("#2").attr("name"));
        }
        if (existing.length == 3) {
            $(".dial-btn").addClass("disabled");
        }
    });

    $("#3").click(function(){
       var existing = $("input:text").val();
       if (existing.length < 4) {
            $("input:text").val(existing + $("#3").attr("name"));
        }
        if (existing.length == 3) {
            $(".dial-btn").addClass("disabled");
        }
    });
    
    $("#4").click(function(){
        var existing = $("input:text").val();
        if (existing.length < 4) {
             $("input:text").val(existing + $("#4").attr("name"));
        }
        if (existing.length == 3) {
            $(".dial-btn").addClass("disabled");
        }
    });

    $("#5").click(function(){
       var existing = $("input:text").val();
       if (existing.length < 4) {
            $("input:text").val(existing + $("#5").attr("name"));
       }
       if (existing.length == 3) {
            $(".dial-btn").addClass("disabled");
        }
    });
    
    $("#6").click(function(){
        var existing = $("input:text").val();
        if (existing.length < 4) {
            $("input:text").val(existing + $("#6").attr("name"));
        }
        if (existing.length == 3) {
            $(".dial-btn").addClass("disabled");
        }
    });

    $("#7").click(function(){
       var existing = $("input:text").val();
       if (existing.length < 4) {
            $("input:text").val(existing + $("#7").attr("name"));
       }
       if (existing.length == 3) {
            $(".dial-btn").addClass("disabled");
        }
    });
    
    $("#8").click(function(){
        var existing = $("input:text").val();
        if (existing.length < 4) {
            $("input:text").val(existing + $("#8").attr("name"));
        }
        if (existing.length == 3) {
            $(".dial-btn").addClass("disabled");
        }
    });

    $("#9").click(function(){
       var existing = $("input:text").val();
       if (existing.length < 4) {
            $("input:text").val(existing + $("#9").attr("name"));
       }
       if (existing.length == 3) {
            $(".dial-btn").addClass("disabled");
        }
    });
    
    $("#0").click(function(){
        var existing = $("input:text").val();
        if (existing.length < 4) {
            $("input:text").val(existing + $("#0").attr("name"));
        }
        if (existing.length == 3) {
            $(".dial-btn").addClass("disabled");
        }
    });
});