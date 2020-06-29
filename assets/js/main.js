// Call the owl js 
$(document).ready(function(){
	
	// For slider
	$("#slider").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 1000,
		dots: false,
		nav:true
	});
	// For slider
	$("#clint_slider").owlCarousel({
		items: 3,
		autoplay: true,
		autoplayTimeout: 1000,
		dots: false,
	});
	
	
	
	
});



// for the responsive menu
$(function(){
    $('#menu').slicknav();
});


//  for go to top button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
