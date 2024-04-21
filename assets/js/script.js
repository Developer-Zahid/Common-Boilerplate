(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader()
		headerHeightFixer()
    })

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow")
	}

	/* scroll top btn */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50)
	})
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop()

		if (scrolling > 200) {
			$(".scroll-top").fadeIn()
		} else {
			$(".scroll-top").fadeOut()
		}
	})

	/* Fix Header Height function */
	$('header').before('<div class="header-height-fix"></div>')
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('header').innerHeight() +'px')
    	$('body').css('--header-size', $('header').innerHeight() +'px')
	}

	/* Dark Mode Toggler Function */
	(function(){
		const $themeToggler = $('[data-toggle="theme"]')
		let darkMode = localStorage.getItem("darkMode")

		// Enable DarkMode Function
		const enableDarkMode = () =>{
			$('html').attr('data-theme', 'dark')
			localStorage.setItem("darkMode", "enabled")
		}
		
		// Disable DarkMode Function
		const disableDarkMode = () =>{
			$('html').removeAttr('data-theme')
			localStorage.setItem("darkMode", null)
		}

		// Check localStorage DarkMode value
		if(darkMode === "enabled"){
			enableDarkMode()
		}

		// Theme Change Event Functions
		$themeToggler.on("click", function(){
			darkMode = localStorage.getItem("darkMode")
			if(darkMode !== "enabled"){
				enableDarkMode()
			} else{
				disableDarkMode()
			}
		})
	})()

})(jQuery)