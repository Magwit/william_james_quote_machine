$(document).ready(function () {
	// 	console.log('Hiya ! jQuery');

	var url = 'js/quotedata.json';

	// ### Variables for dom elements ###

	var $openBtn = $('.open-btn');
	var $modalClose = $('.modal-close');
	var $quoteString = $('.modal-content > h5')
	var $modalBackground = $('.modal-background');
	var $bottomTweet = $('.bottom-tweet');


	// ### shuffle function to randomize ###

	function Shuffle(o) {
		for (
			var j, x, i = o.length; i;
			(j = parseInt(Math.random() * i)), (x = o[--i]), (o[i] = o[j]), (o[
				j
			] = x)
		);
		return o;
	}

	// ### error handler ###

	function handleError(jqXHR, textStatus, error) {
		console.log(error);
	}

	// ### Ajax call to fetch a quote ###



	// begin qpicker
	function qpicker(data) {
		var quoteArr = data[0].quotes;

		// placoholder for original shuffle function. 

		Shuffle(quoteArr);

		var chosenQuote = quoteArr[0];

		$($quoteString).html(chosenQuote);
	}


	// end qpicker




	// NOTES to self. I want the AJAX call to return a whole array.
	// And then have the shuffe function pick a quote from the array on click
	// 

	// Alt. The first page load is in fact pretty slow.
	// page loads fonts andlibraries. 
	// maybe the app is more effivcient with the ajax call in the 
	// thingy.  This spreads the complexity. 
	// DECISION I will study asynchronous js with netninja and consider the above
	// LESSON since the ajax call i asynchronous that DENINITELY explains why all
	// my console.log attepmth on 64 65 failed. They fired before the ajax was done.
	// is the solution to this... lea


	// placeholder for lower outside shuffle 


	// console.log($quoteString);
	// console.log(quoteArr);


	// ### Modal DOM manipulation ###

	$($openBtn).on('click', function (data) {
		modal.style.visibility = "visible"
		modal.style.opacity = 1
		document.body.style.overflow = "hidden";
			$.ajax({
		type: "GET",
		url: url,
		success: qpicker,
		error: handleError
	}); 
		

	})

	$($modalClose, $modalBackground).on('click', function () {
		modal.style.visibility = "hidden"
		modal.style.opacity = 0
		document.body.removeAttribute("style");
	})

	$($bottomTweet).on('click', function () {
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