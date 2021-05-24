var url = 'http://localhost:4309';

function getAccessToken () {
	return localStorage.getItem('access_token');
}

function setAccessToken (token) {
	localStorage.setItem('access_token', token);
}	

function getLandingId (){
	return localStorage.getItem('landing_id');	
}


function setLandingId (id) {
	localStorage.setItem('landing_id', id);
}	