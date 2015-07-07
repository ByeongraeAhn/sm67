//위도(Latitude), 경도(Longitude)
var lat;	//위도

var lon;	//경도

$.ajax( { 
    	  url: '//freegeoip.net/json/', 
    	  type: 'POST', 
    	  dataType: 'jsonp',
    	  success: function(location) {
			console.log(location);
			lat = location.latitude;
			lon = location.longitude;
			
			console.log('lat : ' + lat);
			console.log('lon : ' + lon);
			getDust(lat, lon);
    	  }
    	} );
  
  function getDust(lat , lon){
	  var xhr = new XMLHttpRequest();
	  xhr.open("GET", "http://www.codecademy.com/", false);
	  xhr.send();

	  console.log(xhr.status);
	  console.log(xhr.statusText);
	  
	  console.log('getDust() 호출')
	  $.ajax( { 
		  url: 'http://map.naver.com/common2/getRegionByPosition.nhn?xPos='+lon+'&yPos='+lat,
    	  type: 'GET', 
    	  dataType: 'json',
    	  success: function(result) {
    		console.log()
			console.log("result: " + result);
    	  },
    	  error: function(err){
    		  console.log(err);
    	  }
    	 
    	} );
  }