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

    $(".escape-dial-btn").click(function(){
        var existing = $("input:text").val();
        if (existing.length > 0) {
            $("input:text").val(existing.slice(0, -1));
        }
        if ( $(".dial-btn").hasClass("disabled")){
            $(".dial-btn").removeClass("disabled");
        }
    });

    $(".btn-in").click(function(){
          $('#PresenceAlert').modal('show');
      if ($(".check-status").html() == "At School") {
          $(".check-alert-text").html("Error! Your status is already </br> <strong class = \"popup-true\">\"At School\"<strong>");
          $(".modal-body").removeClass("check-greet", "check-bye");
          $(".button-place").html("");
      }
      else {
        $(".check-status").css("background", "#5cb85c").html("At School");
        $(".check-alert-text").html("Welcome! Hope you enjoy the day!").css("color", "#008000");
        $(".modal-body").addClass("check-greet").removeClass("check-bye");
        $(".button-place").html("<hr> <button type=\"button\" class=\"btn btn-primary\">To Group Choice</button>");
      }
    });

    $(".btn-out").click(function(){
          $('#PresenceAlert').modal('show');
      if ($(".check-status").html() == "Out of School") {
          $(".check-alert-text").html("Error! Your status is already </br> <strong class = \"popup-false\">\"Out of School\"<strong>");
          $(".modal-body").removeClass("check-bye", "check-greet");
          $(".button-place").html("");
      }
      else {
         $(".check-status").css("background", "#d9534f").html("Out of School");
         $(".check-alert-text").html("Bye! Thank you for attending our school!").css("color", "#008000");
         $(".modal-body").addClass("check-bye").removeClass("check-greet");
         $(".button-place").html("<hr> <button type=\"button\" class=\"btn btn-primary\">To Group Choice</button>");
      }
    });
});
