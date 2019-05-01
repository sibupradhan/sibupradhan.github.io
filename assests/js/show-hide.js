$(function(){
        $('.showSingle').click(function(){
              $('.targetDiv').hide();
             $('#div'+$(this).attr('target')).show();
        });
});

$(function(){

        $('.fresh-show').click(function(){
              $('.exp-sider').hide(200);
                $('.fresh-sider').show(200);
        });
});

$(function(){
        $('.exp-show').click(function(){
              $('.exp-sider').show(200);
                $('.fresh-sider').hide(200);
        });
});
$(function(){
        $('.showSingle').click(function(){
              $('.targetDiv1').hide();
             $('#tab'+$(this).attr('target')).show();
		
        });
});

 $('.exp-tab li').on('click', function(){
    $('.exp-tab li').removeClass('current');
    $(this).addClass('current');
});



$('#sv1').mouseenter( function(e) {
	 setTimeout(function(){
	$('.hovers-image1').addClass('hover'); 
	$('.hovers-image2').removeClass('hover');
	$('.hovers-image3').removeClass('hover');
	$('.hovers-image4').removeClass('hover'); 
	$('.service-content1').addClass('service-content-hov');
	$('.service-content2').removeClass('service-content-hov');
	$('.service-content3').removeClass('service-content-hov');
	$('.service-content4').removeClass('service-content-hov');
	$('.hov-p4').removeClass('hover');		 
	$('.hov-p3').removeClass('hover');	 
	$('.hov-p2').removeClass('hover');	 
	$('.hov-p1').addClass('hover');		 
	$('.vi1').addClass('hover');	 
	$('.vi2').removeClass('hover');	 
	$('.vi3').removeClass('hover');	 
	$('.vi4').removeClass('hover');
	$('.via1').addClass('vew-arrow-pos');
	$('.via2').removeClass('vew-arrow-pos');
	$('.via3').removeClass('vew-arrow-pos');
	$('.via4').removeClass('vew-arrow-pos');	 
	 },100);
});


$('#sv2').mouseenter( function(e) {
	 setTimeout(function(){
	 
	$('.hovers-image1').removeClass('deaf-img');	 
    $('.hovers-image1').removeClass('hover');
	$('.hovers-image2').addClass('hover');
	$('.hovers-image3').removeClass('hover');
	$('.hovers-image4').removeClass('hover');
	$('.hov-p1').removeClass('hover');
	$('.hov-p2').addClass('hover');	
	$('.hov-p3').removeClass('hover');	 
	$('.service-content1').removeClass('service-content-hov');
	$('.service-content3').removeClass('service-content-hov');	 
	$('.service-content2').addClass('service-content-hov');	
	$('.service-content4').removeClass('service-content-hov');
	$('.hov-p4').removeClass('hover');	
	$('.vi1').removeClass('hover');
	$('.vi3').removeClass('hover');
	$('.vi4').removeClass('hover');		 
	$('.vi2').addClass('hover');
	$('.via1').removeClass('vew-arrow-pos');
	$('.via3').removeClass('vew-arrow-pos');
	$('.via4').removeClass('vew-arrow-pos');	 
	$('.via2').addClass('vew-arrow-pos');	 
		 },100);
});

$('#sv3').mouseenter( function(e) {
	 setTimeout(function(){
	$('.hovers-image1').removeClass('deaf-img');
	$('.hovers-image1').removeClass('hover');
	$('.hovers-image2').removeClass('hover');
	$('.hovers-image3').addClass('hover');
	$('.hovers-image4').removeClass('hover');
	$('.service-content1').removeClass('service-content-hov');	 
	$('.service-content2').removeClass('service-content-hov');
	$('.service-content4').removeClass('service-content-hov');	 
	$('.hov-p1').removeClass('hover');
	$('.hov-p2').removeClass('hover');
	$('.hov-p4').removeClass('hover');		 
	$('.service-content3').addClass('service-content-hov');
	$('.hov-p3').addClass('hover');	 
	$('.vi1').removeClass('hover');
	$('.vi2').removeClass('hover');
	$('.vi4').removeClass('hover');	 
	$('.vi3').addClass('hover');
	$('.via1').removeClass('vew-arrow-pos');
	$('.via2').removeClass('vew-arrow-pos');
	$('.via4').removeClass('vew-arrow-pos');	 
	$('.via3').addClass('vew-arrow-pos');	 
 },100);
});
$('#sv4').mouseenter( function(e) {
	 setTimeout(function(){
	$('.hovers-image1').removeClass('deaf-img');
	$('.hovers-image1').removeClass('hover');
	$('.hovers-image2').removeClass('hover');
	$('.hovers-image3').removeClass('hover');
	$('.hovers-image4').addClass('hover');
	$('.service-content1').removeClass('service-content-hov');
	$('.service-content2').removeClass('service-content-hov');
	$('.service-content3').removeClass('service-content-hov');	 
	$('.hov-p1').removeClass('hover');	 
	$('.hov-p2').removeClass('hover');	 
	$('.hov-p3').removeClass('hover');
	 $('.service-content4').addClass('service-content-hov');	 
	 $('.hov-p4').addClass('hover');
	$('.vi1').removeClass('hover');
	$('.vi2').removeClass('hover');	 
	$('.vi3').removeClass('hover');	
	$('.vi4').addClass('hover');
	$('.via1').removeClass('vew-arrow-pos');
	$('.via2').removeClass('vew-arrow-pos');
	$('.via3').removeClass('vew-arrow-pos');	 
	$('.via4').addClass('vew-arrow-pos');	 
	 },100);

});

$('.side-bar-link1').mouseenter( function() {
	$('.side-bar-link1').addClass('side-bar-link1-hover');
	$('.side-bar-link2').removeClass('side-bar-link1-hover');
$('.side-bar-link-content1').addClass('side-bar-link-content-hover');
$('.side-bar-link-content2').removeClass('side-bar-link-content-hover');	
});

$('.side-bar-link2').mouseenter( function() {
	$('.side-bar-link1').removeClass('side-bar-link1-hover');
	$('.side-bar-link2').addClass('side-bar-link1-hover');
	$('.side-bar-link-content2').addClass('side-bar-link-content-hover');
	$('.side-bar-link-content1').removeClass('side-bar-link-content-hover');
	
});

