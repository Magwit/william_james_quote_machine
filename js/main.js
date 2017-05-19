$(document).ready(function () {
// 	console.log('Hiya ! jQuery');

	var url = 'js/quotedata.json';

	// ### Variables for dom elements ###

	var $openBtn = $('.open-btn');
	var $modalClose = $('.modal-close');
	var $quoteString = $('.modal-content > h5') 
	var $modalBackground = $('.modal-background');
	var $bottomTweet = $('.bottom-tweet');

	// ### Ajax call to fetch a quote ###

	$.ajax({
		type: "GET",
		url: url,
		success: function (data) {

			console.log(typeof (data));
			console.log(data[0].quotes[8]);
			// specify the array for quotes  
			var quoteArr = data[0].quotes;

			// randomize by shuffling the array an picj index 0 and assign to chosenQuote

			function Shuffle(o) {
				for (
					var j, x, i = o.length; i;
					(j = parseInt(Math.random() * i)), (x = o[--i]), (o[i] = o[j]), (o[
						j
					] = x)
				);
				return o;
			}

			Shuffle(quoteArr);

			// 
			var chosenQuote = quoteArr[0];

			$($quoteString).html(chosenQuote);

		}
	})

	// ### Modal DOM manipulation ###

	$($openBtn).on('click', function () {
		modal.style.visibility = "visible"
		modal.style.opacity = 1
		document.body.style.overflow = "hidden";

	

	})

	$($modalClose, $modalBackground).on('click', function () {
		modal.style.visibility = "hidden"
		modal.style.opacity = 0
		document.body.removeAttribute("style");
	})

	$($bottomTweet).on('click',function() {
		console.log('fågelsång');
		var qText = $quoteString.text();
		qText = 'https://twitter.com/intent/tweet?text=' + qText;;
		window.open(qText);
	})

	// console.log('end of jQuery');

});
// http://bloggerjet.com/create-tweetable-quotes/

// Functions come up as undefined if placed in the document ready function. 
// http://stackoverflow.com/questions/1055767/why-can-i-not-define-functions-in-jquerys-document-ready
// or you can use $('#element').on('click', function() {}) within `$(document).ready().