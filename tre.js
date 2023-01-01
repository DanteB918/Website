
const d = new Date();
const year = document.getElementById('year')
year.innerHTML = d.getFullYear();

var typed = new Typed(".typing", {
		strings: ["Developer"],//, "Software Engineer", "Designer", "Freelancer"],
		typeSpeed: 150,
		backSpeed: 60,
		//loop: true
	});

//Wave Responsiveness, Project Wave
const wave = document.getElementById('BigWave');
if (window.innerWidth < 1300 && window.innerWidth > 800){
	wave.setAttribute("viewBox", "0 0 900 900");
}
else if (window.innerWidth < 800){
	wave.setAttribute("viewBox", "0 0 500 900");
}
//Slick Slider JS
$('.slick-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	autoplaySpeed: 2000,
	speed: 500,
	responsive: [
		{
			breakpoint: 1589,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


//Paroller
const me = $('#Me');
console.log(document.body.scrollHeight);
me.paroller({ factor: 0.1, type: 'foreground', direction: 'vertical',  });


	const socials = $('.socials');
	socials.paroller({ factor: .1, type: 'foreground', direction: 'vertical',  });


	$('.parolle').paroller({ factor: .2, factorXs: .1, type: 'foreground', direction: 'vertical',  });




	//Making Waves adjust to bottom of screen for Iphones.
/*const updateViewportHeight = () => {
	document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
	const BotWaves = $('#theWave');
	BotWaves[0].style.bottom = '0px';
	};
	
	window.addEventListener('resize', updateViewportHeight);
	
	updateViewportHeight();*/







	
