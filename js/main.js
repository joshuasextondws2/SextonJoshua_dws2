var element = document.querySelector('#results ul');
element.querySelectorAll('h3')[0].innerHTML = "";
element.querySelectorAll('h3')[1].innerHTML = "";
element.querySelectorAll('h3')[2].innerHTML = "";
element.querySelectorAll('h3')[3].innerHTML = "";
element.querySelectorAll('h3')[4].innerHTML = "";
element.querySelectorAll('h3')[5].innerHTML = "";
element.querySelectorAll('h3')[6].innerHTML = "";
element.querySelectorAll('h3')[7].innerHTML = "";
element.querySelectorAll('h3')[8].innerHTML = "";
element.querySelectorAll('p')[0].innerHTML = "";
element.querySelectorAll('p')[1].innerHTML = "";
element.querySelectorAll('p')[2].innerHTML = "";
element.querySelectorAll('p')[3].innerHTML = "";
element.querySelectorAll('p')[4].innerHTML = "";
element.querySelectorAll('p')[5].innerHTML = "";
element.querySelectorAll('p')[6].innerHTML = "";
element.querySelectorAll('p')[7].innerHTML = "";
element.querySelectorAll('p')[8].innerHTML = "";
//cache the required nodes
const searchField = document.querySelector('#searchField');
document.querySelector('#submitSearch').addEventListener('click', function(e){

	//prevent the default submit action of our form from firing
	e.preventDefault();
	//capture value from the input field
	const query = searchField.value;
    var element = document.querySelector('#results h3');
    element.innerHTML= "Results for "+query;
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
		
		var element = document.querySelector('#results ul');

		    element.querySelectorAll('h3')[0].innerHTML= data.topalbums.album[0].name;
			element.querySelectorAll('p')[0].innerHTML= data.topalbums.album[0].artist.name;
			element.querySelectorAll('h3')[1].innerHTML= data.topalbums.album[1].name;
			element.querySelectorAll('p')[1].innerHTML= data.topalbums.album[1].artist.name;
	        element.querySelectorAll('h3')[2].innerHTML= data.topalbums.album[2].name;
			element.querySelectorAll('p')[2].innerHTML= data.topalbums.album[2].artist.name;
			element.querySelectorAll('h3')[3].innerHTML= data.topalbums.album[3].name;
			element.querySelectorAll('p')[3].innerHTML= data.topalbums.album[3].artist.name;
			element.querySelectorAll('h3')[4].innerHTML= data.topalbums.album[4].name;
			element.querySelectorAll('p')[4].innerHTML= data.topalbums.album[4].artist.name;
			element.querySelectorAll('h3')[5].innerHTML= data.topalbums.album[5].name;
			element.querySelectorAll('p')[5].innerHTML= data.topalbums.album[5].artist.name;
	        element.querySelectorAll('h3')[6].innerHTML= data.topalbums.album[6].name;
			element.querySelectorAll('p')[6].innerHTML= data.topalbums.album[6].artist.name;
			element.querySelectorAll('h3')[7].innerHTML= data.topalbums.album[7].name;
			element.querySelectorAll('p')[7].innerHTML= data.topalbums.album[7].artist.name;
			element.querySelectorAll('h3')[8].innerHTML= data.topalbums.album[8].name;
			element.querySelectorAll('p')[8].innerHTML= data.topalbums.album[8].artist.name;
			element.querySelectorAll('h3')[9].innerHTML= data.topalbums.album[9].name;
			element.querySelectorAll('p')[9].innerHTML= data.topalbums.album[9].artist.name;
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
