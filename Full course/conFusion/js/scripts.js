$(document).ready(function(){
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    $("#loginbutton").click(function(){
        $("#loginModal").modal("show");
    });

    $("#Reservebutton").click(function(){
        $("#reserveform").modal("show");
    });
    $("#hideLogin").click(function(){
        $("#loginModal").modal("hide");
    });
    $("#Cancelbutton").click(function(){
        $("#loginModal").modal("hide");
    });
    $("#cancelbutton").click(function(){
        $("#reserveform").modal("hide");
    });
    $("#Close_reserve").click(function(){
        $("#reserveform").modal("hide");
    })
});