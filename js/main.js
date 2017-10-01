//function loadData(){
	if(localStorage.getItem('userData')){
		var data = JSON.parse(localStorage.getItem('userData'));
        //populate the h2
        var element= document.querySelector('#search h2');
        element.innerHTML = "Search for your favorite artist";
        //populate the h3
		var element = document.querySelector('#results h3');
        element.innerHTML= "Results for  "+data.topalbums.album[0].artist.name;
        
        //creating list elements for results
        var i;
        for (i = 0; i < 9; i++) {
        var newLi = document.createElement('Li');
        var newImage = document.createElement('img');
        var newH3 = document.createElement('h3');
        var newP = document.createElement('p');
        var resultsList = document.getElementById('resultsList');
        resultsList.appendChild(newLi);
        newLi.appendChild(newImage);
        newLi.appendChild(newH3);
        newLi.appendChild(newP);
        }
        
		var element = document.querySelectorAll('#results li');
		 //loop over the results
       	var i;
        	for (i=0; i < element.length; i++){
		   	 	element[i].querySelectorAll('h3')[0].innerHTML= data.topalbums.album[i].name;
				element[i].querySelectorAll('p')[0].innerHTML= data.topalbums.album[i].artist.name;
           }
		
	}else{
	
		var element= document.querySelector('#search h2');
        element.innerHTML = "Search for your favorite artist";
        //populate the h3
		var element = document.querySelector('#results h3');
        element.innerHTML= "Results for";
        }
//}


//window.addEventListener('load', loadData, false);






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
		
		//save the data
		const stringData = JSON.stringify(data)
		localStorage.setItem('userData', stringData)
		var dataSize = data.length;
		
		 //creating list elements for results
        var i;
        for (i = 0; i < dataSize; i++) {
        var newLi = document.createElement('Li');
        var newImage = document.createElement('img');
        var newH3 = document.createElement('h3');
        var newP = document.createElement('p');
        var resultsList = document.getElementById('resultsList');
        resultsList.appendChild(newLi);
        newLi.appendChild(newImage);
        newLi.appendChild(newH3);
        newLi.appendChild(newP);
        }
		//do something with the data
		var element = document.querySelectorAll('#results li');
		
		
        //loop over the results
        if(element){
        	var i;
        	for (i=0; i < 9; i++){
        		element[i].querySelectorAll('img')[0].src = data.topalbums.album[i].image[2]['#text'];
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

