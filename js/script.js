$(document).ready(function(){
		/////////*bxSlider*//////////////////
		$('.bxslider').bxSlider({
			auto: true,
			pause: 2000,
			speed: 800,
			slideWidth:463,
			minSlides: 2,
			maxSlides: 2,
			slideMargin:30,
			moveSlides:1,
			adaptiveHeight: true
		});
		/////////*validation form*//////////////////
		$("#phone").mask("+38 (099) 999 - 99 - 99");
		///////////*Modal window-start*///////////
		$("#call-back").click(function(){
			$("#modal-window").dialog();
			return false;
		})

		$("#call-back2").click(function(){
			$("#modal-window").dialog();
			return false;
		})
		///////////*Modal window-end*///////////
/////////////*tabs for rooms*///////////////
		$('.rooms-prices a').click(function() {
			$('.description-number-one').hide();
			$('.description-number-two').hide();
			$('.description-number-three').hide();
			$('.description-number-four').hide();
			$('.description-number-five').hide();
			$('.description-number-six').hide();
			$('.rooms-prices a.active').removeClass('active');
			$(this).addClass('active');
			if ($(this).hasClass('item-number-one')) {
				$('.description-number-one').show();
				return false;
			}
			if ($(this).hasClass('item-number-two')) {
				$('.description-number-two').show();
				return false;
			}
			if ($(this).hasClass('item-number-three')) {
				$('.description-number-three').show();
				return false;
			}
			if ($(this).hasClass('item-number-four')) {
				$('.description-number-four').show();
				return false;
			}
			if ($(this).hasClass('item-number-five')) {
				$('.description-number-five').show();
				return false;
			}
			if ($(this).hasClass('item-number-six')) {
				$('.description-number-six').show();
				return false;
			}
		});

	});

