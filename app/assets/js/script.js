/*================== Read More Text ==================*/
function ReadMore(textsClass, charCount, buttonClass) {
	// Readmore Text for ABOUT US Section
	$(".btn-read-more").html("Read More");
	var showChar = charCount;
	$("." + textsClass).each(function() {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html =
				c +
				'<span class="moreellipses">' +
				"..." +
				'&nbsp;</span><span class="morecontent d-none"><span>' +
				h +
				"</span>&nbsp;&nbsp;</span>";
			$(this).html(html);
		}
	});
	$("." + buttonClass).click(function() {
		$(this)
			.prev(".menu-desc")
			.find("p span.moreellipses")
			.toggleClass("d-none");
		$(this)
			.prev(".menu-desc")
			.find("p span.morecontent")
			.toggleClass("d-none");
		if ($(this).hasClass("toggled")) {
			$(this).removeClass("toggled");
			$(this).html("Read More");
		} else {
			$(this).addClass("toggled");
			$(this).html("Read Less");
		}
	});
}
ReadMore("menu-desc", 135, "btn-read-more");

function cardMore(textsClass1, charCount1, buttonClass1) {
	// Readmore Text for ABOUT US Section
	$(".btn-more").html("Read More");
	var showChar = charCount1;
	$("." + textsClass1).each(function() {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html =
				c +
				'<span class="moreellipses">' +
				"..." +
				'&nbsp;</span><span class="morecontent d-none"><span>' +
				h +
				"</span>&nbsp;&nbsp;</span>";
			$(this).html(html);
		}
	});
	$("." + buttonClass1).click(function() {
		$(this)
			.prev(".blog-desc")
			.find("p span.moreellipses")
			.toggleClass("d-none");
		$(this)
			.prev(".blog-desc")
			.find("p span.morecontent")
			.toggleClass("d-none");
		if ($(this).hasClass("toggled")) {
			$(this).removeClass("toggled");
			$(this).html("Read More");
		} else {
			$(this).addClass("toggled");
			$(this).html("Read Less");
		}
	});
}
cardMore("blog-desc", 630, "btn-more");

function blogMore(textsClass2, charCount2, buttonClass2) {
	// Readmore Text for ABOUT US Section
	$(".read-text").html("Read More +");
	var showChar = charCount2;
	$("." + textsClass2).each(function() {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html =
				c +
				'<span class="moreellipses">' +
				"..." +
				'&nbsp;</span><span class="morecontent d-none"><span>' +
				h +
				"</span>&nbsp;&nbsp;</span>";
			$(this).html(html);
		}
	});
	$("." + buttonClass2).click(function() {
		$(this)
			.prev(".blog-desc")
			.find("p span.moreellipses")
			.toggleClass("d-none");
		$(this)
			.prev(".blog-desc")
			.find("p span.morecontent")
			.toggleClass("d-none");
		if ($(this).hasClass("toggled")) {
			$(this).removeClass("toggled");
			$(this).html("Read More +");
		} else {
			$(this).addClass("toggled");
			$(this).html("Read Less -");
		}
	});
}
blogMore("blog-desc", 500, "read-text");

/*===================== Smooth Scrolling ======================*/
$(function() {
	$("a").smoothScroll();
});
/*======================= Nav Active Class =======================*/
$(function() {
	$(".nav-item").on("click", function() {
		$(".nav-item").removeClass("active");
		$(this).addClass("active");
	});
});
$(function() {
	$("#work .btn-filter").on("click", function() {
		$(".btn-filter").removeClass("active-bg");
		$(this).addClass("active-bg");
	});
});

/*===================== Owl Carousel Slider ======================*/

$(function() {
	var owl = $("#owl-one");
	owl.owlCarousel({
		autoplay: true,
		// center: true,
		loop: true,
		mouseDrag: true,
		margin: 0,
		smartSpeed: 2000,
		dots: false,
		nav: true,
		slideBy: 1,
		items: 1,
		animateIn: "fadeIn",
		animateOut: "fadeOut",
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1,
				autoplay: true
			},

			768: {
				items: 1
			},
			830: {
				items: 1
			},
			1000: {
				item: 1
			},
			1365: {
				item: 1
			}
		}
	});
	// $(".right-arrow").click(function() {
	// 	owl.trigger("next.owl.carousel", [1000]);
	// });

	// $(".left-arrow").click(function() {
	// 	owl.trigger("prev.owl.carousel", [1000]);
	// });
});
$(function() {
	var owls = $(".owl-carousel");
	owls.owlCarousel({
		loop: true,
		autoplay: false,
		margin: 0,
		dots: false,
		nav: true,
		slideBy: 1,
		item: 1,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			600: {
				items: 1
			},
			768: {
				items: 1
			},
			830: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	$("#right-click").click(function() {
		owls.trigger("next.owl.carousel", [1000]);
	});

	$("#left-click").click(function() {
		owls.trigger("prev.owl.carousel", [1000]);
	});
});
/*===================== Another Load More Script ======================*/
$(function() {
	$(".no-display")
		.slice(0, 6)
		.show();
	$("#load-more").on("click", function(e) {
		e.preventDefault();
		$(".no-display:hidden")
			.slice(0, 3)
			.slideDown();
		if ($(".no-display:hidden").length == 0) {
			$("#load-more").html("No More Any Event ");
			$("#load-more").css("width", "230px");
			$("#load-more").css("border", "2px solid $primary-color");
			$("#load-more").css("box-shadow", " 2.5px 4.33px 7px 0px rgba(0, 0, 0, 0.75);");
			// $(".btn-load-border").fadeOut("slow");
		}
		$("html,body").animate(
			{
				scrollTop: $(this).offset().center
			},
			1500
		);
	});
});
$(function() {
	$(".none-display")
		.slice(0, 8)
		.show();
	$("#load-another").on("click", function(e) {
		e.preventDefault();
		$(".none-display:hidden")
			.slice(0, 2)
			.slideDown();
		if ($(".none-display:hidden").length == 0) {
			$("#load-another").html("No More Pics");
			// $(".btn-load-blog").fadeOut("slow");
		}
		$("html,body").animate(
			{
				scrollTop: $(this).offset().center
			},
			1500
		);
	});
});

/*===================== Scroll Top  Script ======================*/
var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
	var stickyHeight = sticky.outerHeight();
	var stickyTop = stickyWrapper.offset().top;

	if (scrollElement.scrollTop() >= stickyTop) {
		stickyWrapper.height(stickyHeight);
		sticky.addClass("is-sticky");
	} else {
		sticky.removeClass("is-sticky");
		stickyWrapper.height("auto");
	}
};

// Find all data-toggle="sticky-onscroll" elements
$('[data-toggle="sticky-onscroll"]').each(function() {
	var sticky = $(this);
	var stickyWrapper = $("<div>").addClass("sticky-wrapper"); // insert hidden element to maintain actual top offset on page
	sticky.before(stickyWrapper);
	sticky.addClass("sticky");

	// Scroll & resize events
	$(window).on("scroll.sticky-onscroll resize.sticky-onscroll", function() {
		stickyToggle(sticky, stickyWrapper, $(this));
	});

	// On page load
	stickyToggle(sticky, stickyWrapper, $(window));
});
