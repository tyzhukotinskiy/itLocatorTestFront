

/* ------------ Auth/Register Form ------------- */

register_button.onclick = function (e) {
	register_form.style.display = 'flex';
	auth_form.style.display = 'none';
}

register_submit.onclick = function (e) {
	$.ajax({
	  url: url+'/api/register',
	  type: 'POST',
	  data: {
			    "name": register_name.value,
	    		"email": register_email.value,
			    "password": register_password.value,
			    "c_password": register_c_password.value
			},
	  dataType: 'json',
	  success: function(data) {
	    console.log(data);
	    setAccessToken(data.data.token);
	    window.location.href = '/admin.html';
	  },
	  error: function(xhr, ajaxOptions, thrownError) {
	    console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
	  }
	});
}


auth_button.onclick = function (e) {
	auth_form.style.display = 'flex';
	register_form.style.display = 'none';
}

auth_submit.onclick = function (e) {
	$.ajax({
	  url: url+'/api/login',
	  type: 'POST',
	  data: {
	    		"email": auth_email.value,
			    "password": auth_password.value,
			},
	  dataType: 'json',
	  success: function(data) {
	    console.log(data);
	    setAccessToken(data.data.token);
	    window.location.href = '/admin.html';
	  },
	  error: function(xhr, ajaxOptions, thrownError) {
	    console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
	  }
	});
}

/* ------------ Auth/Register Form ------------- */