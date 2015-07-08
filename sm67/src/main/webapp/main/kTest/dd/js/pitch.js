/* countdown function */
function Counter(then) 
{
	function countdown() 
	{
		var diff = new Date(then - new Date());  	
		var total_seconds = Math.floor(diff.valueOf() / 1000);

		s = Math.floor(total_seconds / 1) % 60;
		m = Math.floor(total_seconds / 60) % 60;
		h = Math.floor(total_seconds / 3600) % 24;
		d = Math.floor(total_seconds / 86400) % 86400;

		if (total_seconds > 0)
			document.getElementById('countdown').innerHTML = 'In '+ d +' days, '+ h +' hours, '+ m +' minutes and '+ s +' seconds.';
		else
			document.getElementById('countdown').innerHTML = done_message;
				
		countdown.timer = setTimeout(countdown, 1000);
	}
	countdown.timer = setTimeout(countdown, 1000);
}	
		
/* intro animation */
function anim()
{
	$("#hello").animate({
		"top": "140", 
		"opacity": 1
	}, 700, function() {
		$("#countdown").animate({ "opacity": 1 }, 1100);
	});
}