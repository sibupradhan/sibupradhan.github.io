if ($('#back-to-top').length) {
    var scrollTrigger = 400, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$(document).ready(function(){
		$('.responsive-menu-button').click(function() {
       $(".responsive-mob-menu").toggle(300);
		});

});

$(document).ready(function(){
		$('.responsive-mobmain-menu').click(function() {
       $(".mob-menus").toggle(300);
		});
	
	$('.mob-menus > ul > li > a').click(function(){
	$(this).parent().children('.mob-sub-menu').toggle(100);
		
});

});



$(document).ready(function() {
           
	
            $(this).scroll(function() {
                if ($(window).scrollTop() > 600) {
                    $('body').addClass('fix-header');
					$('.mob-main-page').css("padding-top", "240px");
					$('.menus-nav').css("top", "200px");
                } else {
                    $('body').removeClass('fix-header');
					$('.main-page-content').css("padding-top", "240px");
					$('.menus-nav').css("top", "300px");
                }
            });
	 $(this).scroll(function() {
                if ($(window).scrollTop() > 900) {
                   $('.side-bar-link1').addClass("side-bar-link-dis");
				   $('.side-bar-link2').addClass("side-bar-link-dis");
					$('.side-bar-link1').addClass('side-bar-link1-hover');
					$('.side-bar-link-content1').addClass('side-bar-link-content-hover');
				
                } else {
                 $('.side-bar-link1').removeClass("side-bar-link-dis");
				$('.side-bar-link2').removeClass("side-bar-link-dis");
					$('.side-bar-link1').removeClass('side-bar-link1-hover');
					$('.side-bar-link-content1').removeClass('side-bar-link-content-hover');
					
                }
            });
	
	 $(this).scroll(function() {
                if ($(window).scrollTop() > 1500) {
                 $('.side-bar-link1').removeClass('side-bar-link1-hover');
					$('.side-bar-link2').addClass('side-bar-link1-hover');
					$('.side-bar-link-content1').removeClass('side-bar-link-content-hover');
					$('.side-bar-link-content2').addClass('side-bar-link-content-hover');
                } else {
                    $('.side-bar-link-content2').removeClass('side-bar-link-content-hover');
					$('.side-bar-link2').removeClass('side-bar-link1-hover');
                }
            });
	
	
	 $(this).scroll(function() {
                if ($(window).scrollTop() > 2000) {
                   $('.side-bar-link-content2').removeClass('side-bar-link-content-hover');
                 $('.side-bar-link1').removeClass("side-bar-link-dis");
				$('.side-bar-link2').removeClass("side-bar-link-dis");
				$('.side-bar-link-content1').removeClass('side-bar-link-dis');
					$('.side-bar-link2').removeClass('side-bar-link1-hover');	
                }
            });
	
	 $(this).scroll(function() {
                if ($(window).scrollTop() > 0) {
                    $('body').addClass('fix-header2');

                } else {
                    $('body').removeClass('fix-header2');

                }
            });
	
	  $(this).scroll(function() {
                if ($(window).scrollTop() > 600) {
                    $('.page-icons').css("color", "#6c6c6c");
					
                } else {
                  $('.page-icons').css("color", "white");
                }
            });
	

            $('.clients').slick({
            
  infinite: true,
slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
           });
	
	
$('.service').slick({
  slidesToShow:3,
  slidesToScroll: 2,

	prevArrow: '<i class="icon-arrow-thin-left left-arrow"></i>',
    nextArrow: '<i class="icon-arrow-thin-right right-arrow"></i>',
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots:false,
		  
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]      
	
});
	

		
$('.market-serve').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
prevArrow: '<i class="icon-circle-left left-arrow3"></i>',
  nextArrow: '<i class="icon-circle-right right-arrow3"></i>',
	autoplay: true,
  autoplaySpeed: 4000,
 
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
		  
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]      
	
});
$('.smart-service').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: '<i class="icon-circle-left left-arrow3"></i>',
  nextArrow: '<i class="icon-circle-right right-arrow3"></i>',	
	 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
		  
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});	
	
$('.teams').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 5,
  prevArrow:false,
  nextArrow: false,	

});
	
	
$('.history-slider').slick({
  centerMode: true,

  slidesToShow: 3,
	prevArrow: '<i class="icon-circle-left left-arrow2"></i>',
    nextArrow: '<i class="icon-circle-right right-arrow2"></i>',
	
 
});
$('#myForm').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();
});
        });


$('.open-bio').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');

    if ($(id).is(":visible")) {
        $(this).text("Read More");
    } else {
        $(this).text("Read Less");
    }

    $(id).slideToggle(250);
});

$('.indistry-slide').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow:false,
  nextArrow: false,	
	
});
document.querySelector('#slick-slide-control00').innerHTML='Industry 4.0';
document.querySelector('#slick-slide-control01').innerHTML='IoT';
document.querySelector('#slick-slide-control02').innerHTML='Industrial IoT';
document.querySelector('#slick-slide-control03').innerHTML='IoT enhancing';





