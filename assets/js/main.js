/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');

	// Scrolly.
		$('.scrolly')
			.scrolly({
				offset: 100
			});

	// Polyfill: Object fit.
		if (!browser.canUse('object-fit')) {

			$('.image[data-position]').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', $this.data('position'))
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

			$('.gallery > a').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', 'center')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

		}



		// counter

		let start // set on the first step to the timestamp provided
		const el = document.getElementById('countUp') // get the element
		const final = parseInt(el.textContent, 10) // parse out the final number
		const duration = 3000 // duration in ms
		const step = ts => {
		if (!start) {
			start = ts
		}
		// get the time passed as a fraction of total duration
		let progress = (ts - start) / duration 

		el.textContent = Math.floor(progress * final) // set the text
		if (progress < 1) {
			// if we're not 100% complete, request another animation frame
			requestAnimationFrame(step) 
			}
		}
		// start the animation
		requestAnimationFrame(step)
		//counter end



		//////////////////////////////test
			 
		let start2 // set on the first step to the timestamp provided
		const el2 = document.getElementById('countUp2') // get the element
		const final2 = parseInt(el2.textContent, 10) // parse out the final number
		const duration2 = 3000 // duration in ms
		const step2 = ts2 => {
		if (!start2) {
			start2 = ts2
		}
		// get the time passed as a fraction of total duration
		let progress2 = (ts2 - start2) / duration2 

		el2.textContent = Math.floor(progress2 * final2) // set the text
		if (progress2 < 1) {
			// if we're not 100% complete, request another animation frame
			requestAnimationFrame(step2) 
			}
		}
		// start the animation
		requestAnimationFrame(step2)
		//counter end

		let start3 // set on the first step to the timestamp provided
		const el3 = document.getElementById('countUp3') // get the element
		const final3 = parseInt(el3.textContent, 10) // parse out the final number
		const duration3 = 3000 // duration in ms
		const step3 = ts3 => {
		if (!start3) {
			start3 = ts3
		}
		// get the time passed as a fraction of total duration
		let progress3 = (ts3 - start3) / duration3 

		el3.textContent = Math.floor(progress3 * final3) // set the text
		if (progress3 < 1) {
			// if we're not 100% complete, request another animation frame
			requestAnimationFrame(step3) 
			}
		}
		// start the animation
		requestAnimationFrame(step3)
		//counter end

		let start4 // set on the first step to the timestamp provided
		const el4 = document.getElementById('countUp4') // get the element
		const final4 = parseInt(el4.textContent, 10) // parse out the final number
		const duration4 = 4000 // duration in ms
		const step4 = ts4 => {
		if (!start4) {
			start4 = ts4
		}
		// get the time passed as a fraction of total duration
		let progress4 = (ts4 - start4) / duration4 

		el4.textContent = Math.floor(progress4 * final4) // set the text
		if (progress4 < 1) {
			// if we're not 100% complete, request another animation frame
			requestAnimationFrame(step4) 
			}
		}
		// start the animation
		requestAnimationFrame(step4)
		//counter end


		//////////////////////////////

	// Gallery.
		$('.gallery')
			.on('click', 'a', function(event) {

				var $a = $(this),
					$gallery = $a.parents('.gallery'),
					$modal = $gallery.children('.modal'),
					$modalImg = $modal.find('img'),
					href = $a.attr('href');

				// Not an image? Bail.
					if (!href.match(/\.(jpg|gif|png|mp4)$/))
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Lock.
					$modal[0]._locked = true;

				// Set src.
					$modalImg.attr('src', href);

				// Set visible.
					$modal.addClass('visible');

				// Focus.
					$modal.focus();

				// Delay.
					setTimeout(function() {

						// Unlock.
							$modal[0]._locked = false;

					}, 600);

			})
			.on('click', '.modal', function(event) {

				var $modal = $(this),
					$modalImg = $modal.find('img');

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Already hidden? Bail.
					if (!$modal.hasClass('visible'))
						return;

				// Stop propagation.
					event.stopPropagation();

				// Lock.
					$modal[0]._locked = true;

				// Clear visible, loaded.
					$modal
						.removeClass('loaded')

				// Delay.
					setTimeout(function() {

						$modal
							.removeClass('visible')

						setTimeout(function() {

							// Clear src.
								$modalImg.attr('src', '');

							// Unlock.
								$modal[0]._locked = false;

							// Focus.
								$body.focus();

						}, 475);

					}, 125);

			})
			.on('keypress', '.modal', function(event) {

				var $modal = $(this);

				// Escape? Hide modal.
					if (event.keyCode == 27)
						$modal.trigger('click');

			})
			.on('mouseup mousedown mousemove', '.modal', function(event) {

				// Stop propagation.
					event.stopPropagation();

			})
			.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
				.find('img')
					.on('load', function(event) {

						var $modalImg = $(this),
							$modal = $modalImg.parents('.modal');

						setTimeout(function() {

							// No longer visible? Bail.
								if (!$modal.hasClass('visible'))
									return;

							// Set loaded.
								$modal.addClass('loaded');

						}, 275);

					});

})(jQuery);