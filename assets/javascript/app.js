// CORS test

var map;

var spots = [];
var locations = [];



		var origins = "30.2600,-97.7400"
		var destinations = "30.5555,-97.8888|30.5624,-97.8664"
		var queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="+origins+"&destinations="+destinations+"&key=AIzaSyDHLAzU1_hkV_IcuSPAhH61fqAi96I0V4c"; 

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
	return text.match('<title>(.*);</title>/')[1];
};

var xhr = createCORSRequest('GET', queryURL);
if (!xhr) {
  console.log('CORS not supported');
}

function makeCorsRequest(){
	var xhr = createCORSRequest('GET', queryURL);
	if (!xhr) {
		console.log('CORS not supported');
		return;
	}
	xhr.onload = function(){
		var text = xhr.responseText;
		var title = getTitle(text);
		console.log('Response from CORS request ' + title);
	};

	xhr.onerror = function(){
		console.log("Error");
	};
	console.log ("you are here");
	xhr.setRequestHeader("Access-Contol-Allow-Origin","*");

	xhr.send();
	};

makeCorsRequest();




// var xhr = new XMLHttpRequest();
// console.log (xhr);
// xhr.open('GET', queryURL);
// console.log (xhr);
// //xhr.setRequestHeader(Origin,"");
// xhr.send();
// //xhr.send();

// xhr.onloadstart = function(){
// 	console.log("request started");
// };


// xhr.onload = function(){
// 	console.log("you are here");
// 	var responseText = xhr.responseText;
// 	console.log(responseText);
// };

// xhr.onerror = function() {
// 	console.log("there was an error");
// }

// xhr.onabort = function() {
// 	console.log("aborted");
// };

		$.ajax({url: queryURL, 
				datatype: 'json',
//				cache: false,
				method: 'GET'})
		.done(function(response, status){
			console.log(response);
		});

//

//}); // end of document.ready
