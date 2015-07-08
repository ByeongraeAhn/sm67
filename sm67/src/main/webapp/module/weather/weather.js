$(function(){

    /* Configuration */
	var clear_sky = '오늘은 날씨가 매우 좋습니다 <br> 야외활동 하기 딱 좋은 날씨네요 <br> 자외선에 주의하세요 ';
	var few_clouds = '오늘은 구름이 살짝 껴서 야외활동 하기 좋은 날씨입니다. <br> 자외선에 주의하세요';
	var scattered_clouds = '오늘은 구름이 살짝 껴서 야외활동 하기 좋은 날씨입니다. <br> 자외선에 주의하세요 ';
	var broken_clouds = '오늘은 구름이 많이 꼈네요. <br> 운전하실 때 주의해서 안전운행 하세요';
	var shower_rain = '오늘은 비가 아주 많이 오고 있습니다. <br> 우산을 꼭 준비해서 나가세요. <br> 운전하실 때 주의해서 안전운행 하세요';
	var rain = '오늘은 비가오고 있습니다 <br> 우산을 꼭 준비해서 나가세요. <br> 운전하실 때 주의해서 안전운행 하세요  ';
	var thunderstorm = '지금은 천둥이 치고 있습니다. <br> 낙뢰에 주의하세요';
	var snow = '오늘은 눈이 오네요 <br> 운전하실 때 주의해서 안전운행 하세요';
	var mist = '오늘은 안개가 짙게 꼈네요 <br> 운전하실 때 주의해서 안전운행 하세요';

    var DEG = 'c';  // c for celsius, f for fahrenheit

    var weatherDiv = $('#weather'),
        scroller = $('#scroller'),
        location = $('p.location');
    	day = $('p.day');
    	wt_exp = $('#wt_exp');

    // Does this browser support geolocation?
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    }
    else{
        showError("Your browser does not support Geolocation!");
    }

    // Get user's location, and use OpenWeatherMap
    // to get the location name and weather forecast

    function locationSuccess(position) {

        try{

            // Retrive the cache
            var cache = localStorage.weatherCache && JSON.parse(localStorage.weatherCache);

            var d = new Date();

            // If the cache is newer than 30 minutes, use the cache
            if(cache && cache.timestamp && cache.timestamp > d.getTime() - 30*60*1000){

                // Get the offset from UTC (turn the offset minutes into ms)
                var offset = d.getTimezoneOffset()*60*1000;
                var city = cache.data.city.name;
                var country = cache.data.city.country;
                var cnt=1;

                $.each(cache.data.list, function(){
                    // "this" holds a forecast object

                    // Get the local time of this forecast (the api returns it in utc)
                    var localTime = new Date(this.dt*1000 - offset);

                    addWeather(
                        this.weather[0].icon,
                        transferDayToKor(moment(localTime).format("dddd")),   // We are using the moment.js library to format the date
                        '<span id="w_con'+cnt+'">'+ this.weather[0].main +'</span>'+ ' <b>' + convertTemperature(this.main.temp_min) + '°' + DEG + '</b>'
                    
                    );
                    cnt++;
                });

                // Add the location to the page
                location.html(city+', <b>'+country+'</b>');
                wt_exp.html(rain);
                weatherDiv.addClass('loaded');


            }

            else{

                // If the cache is old or nonexistent, issue a new AJAX request

                var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+
                                    '&lon='+position.coords.longitude+'&callback=?'

                $.getJSON(weatherAPI, function(response){

                    // Store the cache
                    localStorage.weatherCache = JSON.stringify({
                        timestamp:(new Date()).getTime(),   // getTime() returns milliseconds
                        data: response
                    });

                    // Call the function again
                    locationSuccess(position);
                });
            }

        }
        catch(e){
            showError("We can't find information about your city!");
            window.console && console.error(e);
        }
    }

    function addWeather(icon, day, condition){

        var markup = '<li>'+
            '<img src="/sm67/module/weather/assets/img/icons/'+ icon +'.png"/>'+
            ' <p class="day">'+ day +'</p> <p class="cond">'+ condition +
            '</p></li>';

        scroller.append(markup);
    }

  

    /* Error handling functions */

    function locationError(error){
        switch(error.code) {
            case error.TIMEOUT:
                showError("A timeout occured! Please try again!");
                break;
            case error.POSITION_UNAVAILABLE:
                showError('We can\'t detect your location. Sorry!');
                break;
            case error.PERMISSION_DENIED:
                showError('Please allow geolocation access for this to work.');
                break;
            case error.UNKNOWN_ERROR:
                showError('An unknown error occured!');
                break;
        }

    }

    function convertTemperature(kelvin){
        // Convert the temperature to either Celsius or Fahrenheit:
        return Math.round(DEG == 'c' ? (kelvin - 273.15) : (kelvin*9/5 - 459.67));
    }

    function showError(msg){
        weatherDiv.addClass('error').html(msg);
    }
    
    
    
    function weatherExp(cond) {
    	switch(cond) {
    	case "clear sky" :
    		return clear_sky;
    	case "few clouds" :
    		return few_clouds;
    	case "scattered clouds" :
    		return scattered_clouds;
    	case "broken_clouds" :
    		return broken_clouds;
    	case "shower_rain" :
    		return shower_rain;
    	case "rain" :
    		return rain;
    	case "thunderstorm" :
    		return thunderstorm;
    	case "snow" :
    		return snow;
    	}
    	
    	
    	
    }
    
    function transferDayToKor(day) {
    	console.log(day);
    	switch(day) {
    	case "Monday" :
    		return "월요일";
    	case "Tuesday" :
    		return "화요일";
    	case "Wednesday" :
    		return "수요일";
    	case "Thursday" :
    		return "목요일";
    	case "Friday" :
    		return "금요일";
    	case "Saturday" :
    		return "토요일";
    	case "Sunday" :
    		return "일요일";
    	}
    }

});