//Initialize and add the map

function initMap() {
	//Your Location
	const loc = { lat: 45.748871, lng: 21.208679 };
	//Centered map on location
	const map = new google.maps.Map(document.querySelector(".map"), {
		zoom: 12,
		center: loc
	});
	//The marker, positioned at location
	const marker = new google.maps.Marker({ position: loc, map: map });
}

//Sticky menu background
window.addEventListener("scroll", function() {
	if (window.scrollY > 150) {
		document.querySelector("#navbar").style.opacity = 0.9;
	} else {
		document.querySelector("#navbar").style.opacity = 1;
	}
});

// Smooth Scroll

$("#navbar a, .btn").on("click", function(event) {
	if (this.hash !== "") {
		// event.preventDefault();
		// event.stopPropagation();

		const hash = this.hash;
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top - 100
			},
			800
		);
		return false;
	}
});

$(".port-item").click(function () {
    $('.collapse').collapse('hide');
})

$(document).on("click", "[data-toggle='lightbox']", function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
})

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());
