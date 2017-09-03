//cache the required nodes

const searchField = document.querySelector('#searchField');
document.querySelector('#submitSearch').addEventListener('click', function(e){

	//prevent the default submit action of our form from firing
	e.preventDefault();
	//capture value from the input field
	const query = searchField.value;

	//instantiate new object
	var request = new XMLHttpRequest();

//build a query string with a template literal
	var api =
'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='+query+'&api_key=70858262ab8dd5ec29868a03c78bc3cf&format=json';

//open the request passing in a type
request.open('GET', api, true);

//listen to the onload event.
request.onload = function(){
	//check for success of status codes
	if(request.status >= 200 && request.status <400){
		//parse our data from json
		var data = JSON.parse(request.responseText);
		//do something with the data
		console.log(data)
		} else {
		// code for Response Errors
			console.log('response error', request)
		  }
}

//listen for connection errors
request.onerror = function(){
	//code for connection errors
	console.log('connection error')
}

//fire off the request
request.send();

})
