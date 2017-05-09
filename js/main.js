$(document).ready(function () {
	console.log('Hiya ! jQuery');

	// ### Variables for dom elements ###

	//  var $quotezone = $('.quote-zone');
	var $openBtn = $('.open-btn');
	var $modalClose = $('.modal-close');

	// ### Modal DOM manipulation ###

	$($openBtn).on('click', function () {
		modal.style.visibility = "visible"
		modal.style.opacity = 1
		document.body.style.overflow = "hidden";
	})

	$($modalClose).on('click', function () {
		modal.style.visibility = "hidden"
		modal.style.opacity = 0
		document.body.removeAttribute("style");
	})


	console.log('end of jQuery');

});

// Ugly hack below since there is a scope problem if
// Functions come up as undefined if placed in the document ready function. 
// http://stackoverflow.com/questions/1055767/why-can-i-not-define-functions-in-jquerys-document-ready
// or you can use $('#element').on('click', function() {}) within `$(document).ready().

/*
	function openModal(){
		var modal = document.getElementById("modal");
		modal.style.visibility = "visible"
		modal.style.opacity = 1
		document.body.style.overflow = "hidden";
	}
*/
/*
function closeModal() {
	var modal = document.getElementById("modal");
	modal.style.visibility = "hidden"
	modal.style.opacity = 0
	document.body.removeAttribute("style");
}
*/