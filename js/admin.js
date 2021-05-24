$.ajax({
  url: url+'/api/details',
  type: 'POST',
  dataType: 'json',
  headers: {
  	"Authorization": "Bearer " + getAccessToken()
  },
  success: function(data) {
  },
  error: function(xhr, ajaxOptions, thrownError) {
    console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
  }
});


$.ajax({
  url: url+'/api/landings/get-domains',
  type: 'POST',
  dataType: 'json',
  headers: {
  	"Authorization": "Bearer " + getAccessToken()
  },
  success: function(data) {
  	let selectBody = '';
   	for(var i in data)
    	selectBody += '<option value="' + data[i] + '">' + data[i] + '</option>';

    domains.innerHTML = selectBody;
  },
  error: function(xhr, ajaxOptions, thrownError) {
    console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
  }
});

$.ajax({
  url: url+'/api/landings/get-templates',
  type: 'POST',
  dataType: 'json',
  headers: {
    "Authorization": "Bearer " + getAccessToken()
  },
  success: function(data) {
    templatesBody = '';
    let count = 0;
    for(var i in data) {
      templatesBody += '<label for="template_'+count+'">\n' +
       ''+data[i]+'\n' +
    '</label>\n' +
    '<input type="radio" name="template" value="'+data[i]+'" id="template_'+count+'">\n' +
    '<br>';
    }
  

    templates.innerHTML = templatesBody;
  },
  error: function(xhr, ajaxOptions, thrownError) {
    console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
  }
});

   $('#upload-image-form').submit(function(e) {
       e.preventDefault();
       let formData = new FormData(this);
       $('#image-input-error').text('');

       $.ajax({
          type:'POST',
          url:url+'/api/landings/add-image',
           data: formData,
           contentType: false,
           processData: false,
            headers: {
              "Authorization": "Bearer " + getAccessToken()
            },
           success: (response) => {
             if (response) {
               this.reset();
               alert('Image has been uploaded successfully');
             }
           },

           error: function(response){
              console.log(response);
                $('#image-input-error').text(response.responseJSON.errors.file);
           }
       });
  });