window.addEventListener('DOMContentLoaded', (event) => {
    getVisitorCount();
});

var apiUrl = "https://8es6v47ek3.execute-api.us-east-1.amazonaws.com/Prod/visitors";


const getVisitorCount = () => {
  let count = 0;
	fetch (apiUrl)
	.then(response => {
		return response.json()
	})
	.then (res => {
    console.log(res);
		//const count = res.count;
    var counter = document.getElementById('count');
    counter.innerHTML = res.count;
    console.log(res.count);

		
	})
	return count;
}