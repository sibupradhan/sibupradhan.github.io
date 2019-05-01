jQuery(function ($) {

	
    $('.showSingle').click(function () {
        var itemid = '#div' + $(this).attr('target'); //id of the element to show/hide.
   
	
        //Show the element if nothing is shown.
        if ($('.active').length === 0) {
            $(itemid).slideDown();
            $(itemid).addClass('active');
         
            //Hide the element if it is shown.
        } else if (itemid == "#" + $('.active').attr('id')) {
            $('.active').slideUp();
            $(itemid).removeClass('active');
      
            //Otherwise, switch out the current element for the next one sequentially.
        } else {
            $('.active').slideUp(function () {
                $(this).removeClass('active');
				
                if ($(".targetDiv:animated").length === 0) {
                    $(itemid).slideDown();
                    $(itemid).addClass('active');
				
                }
            });
        }
    });

});
 
	$(".chn-btn1").click(function () {
     $('#ico1').toggleClass("service-icon2");
	$("#ico2").removeClass("service-icon2");
	$('#ico3').removeClass("service-icon2");
	$('#ico4').removeClass("service-icon2");	
	});
$(".chn-btn2").click(function () {
	$("#ico2").toggleClass("service-icon2");
     $('#ico1').removeClass("service-icon2");
	$('#ico3').removeClass("service-icon2");
	$('#ico4').removeClass("service-icon2");
	});

$(".chn-btn3").click(function () {
	$("#ico3").toggleClass("service-icon2");
	$("#ico2").removeClass("service-icon2");
     $('#ico1').removeClass("service-icon2");
	$('#ico4').removeClass("service-icon2");
	});

$(".chn-btn4").click(function () {
	$("#ico4").toggleClass("service-icon2");
	$("#ico3").removeClass("service-icon2");
	$("#ico2").removeClass("service-icon2");
     $('#ico1').removeClass("service-icon2");
	});

$(".chn-btn1").click(function (e) {
$(this).toggleClass("fcurrent");
$(".chn-btn2").removeClass("fcurrent");	
$(".chn-btn3").removeClass("fcurrent");
$(".chn-btn4").removeClass("fcurrent");	
});

$(".chn-btn2").click(function (e) {
$(this).toggleClass("fcurrent");
$(".chn-btn1").removeClass("fcurrent");
$(".chn-btn3").removeClass("fcurrent");	
$(".chn-btn4").removeClass("fcurrent");	
});

$(".chn-btn3").click(function (e) {
$(this).toggleClass("fcurrent");
$(".chn-btn1").removeClass("fcurrent");
$(".chn-btn2").removeClass("fcurrent");	
$(".chn-btn4").removeClass("fcurrent");	
});

$(".chn-btn4").click(function (e) {
$(this).toggleClass("fcurrent");
$(".chn-btn1").removeClass("fcurrent");
$(".chn-btn2").removeClass("fcurrent");
$(".chn-btn3").removeClass("fcurrent");	
});



	$(".btn-apply").click(function () {
        $(".btn-apply").not(this).removeClass("selected").addClass('unselected')
        $(this).toggleClass("unselected").toggleClass("selected");
	});
	
	
	document.querySelector('.close1').addEventListener('click', function(){
		 $('#ico1').toggleClass("service-icon2");
		$(".chn-btn1").toggleClass("fcurrent");
		$("#div1").slideUp();
		 $(".product").removeClass("selected");
		
	});
  document.querySelector('.close2').addEventListener('click', function(){
	  $('#ico2').toggleClass("service-icon2");
		$(".chn-btn2").toggleClass("fcurrent");
		$("#div2").slideUp();
	 $(".product").removeClass("selected");
	});
		document.querySelector('.close3').addEventListener('click', function(){
			$('#ico3').toggleClass("service-icon2");
		$(".chn-btn3").toggleClass("fcurrent");
		$("#div3").slideUp();
			$(".product").removeClass("selected");
	});
  document.querySelector('.close4').addEventListener('click', function(){
	  $('#ico4').toggleClass("service-icon2");
		$(".chn-btn4").toggleClass("fcurrent");
		$("#div4").slideUp();
	 $(".product").removeClass("selected");
	});		


