$(document).ready( function (){
     $('#tz').click(function(){
            $('#tz').css("background-color","blue");
            $('#hd').css("background-color","white");
            $('#sq').css("background-color","white");
            $('#en_con2').css("display","block");
            $('#en_con5').css("display","none");
            $('#en_con4').css("display","none");
            $('#tz_p').css("color","white");
            $('#hd_p').css("color","blue");
            $('#sq_p').css("color","blue");
     });

     $('#hd').click(function(){
            $('#tz').css("background-color","white");
            $('#hd').css("background-color","blue");
            $('#sq').css("background-color","white");
            $('#en_con2').css("display","none");
            $('#en_con5').css("display","block");
            $('#en_con4').css("display","none");
            $('#tz_p').css("color","blue");
            $('#hd_p').css("color","white");
            $('#sq_p').css("color","blue");
     });

     $('#sq').click(function(){
            $('#tz').css("background-color","white");
            $('#hd').css("background-color","white");
            $('#sq').css("background-color","blue");
            $('#en_con2').css("display","none");
            $('#en_con5').css("display","none");
            $('#en_con4').css("display","block");
            $('#tz_p').css("color","blue");
            $('#hd_p').css("color","blue");
            $('#sq_p').css("color","white");
     });

    $('#fa_left').click(function(){
            history.back();
    });


});