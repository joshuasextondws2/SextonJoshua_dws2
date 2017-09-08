var element = document.querySelectorAll('#results li');
if (element){
    var i;
    for (i = 0; i < element.length; i++) {
	element[i].querySelectorAll('h3')[0].innerHTML = "";
	element[i].querySelectorAll('p')[0].innerHTML = "";
	
	}
}
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
'https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='+query+'&api_key=70858262ab8dd5ec29868a03c78bc3cf&format=json';

//open the request passing in a type
request.open('GET', api, true);

//listen to the onload event.
request.onload = function(){
	//check for success of status codes
	if(request.status >= 200 && request.status <400){
		//parse our data from json
		var data = JSON.parse(request.responseText);
		//do something with the data
		
		var element = document.querySelectorAll('#results li');
        //loop over the results
        if(element){
        	var i;
        	for (i=0; i < element.length; i++){
		   	 	element[i].querySelectorAll('h3')[0].innerHTML= data.topalbums.album[i].name;
				element[i].querySelectorAll('p')[0].innerHTML= data.topalbums.album[i].artist.name;
           }
        }
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
