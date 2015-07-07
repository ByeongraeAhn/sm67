
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();
    } else if (response.status === 'not_authorized') {
    } else {
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '466301503545687',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.3' // use version 2.2
  });
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log(JSON.stringify(response))
/*        console.log('Successful login for: ' + response.name);
        console.log('Successful login for: ' + response.email);*/
      var birthToken = response.birthday.split('/');
      var birthday =(birthToken[2].concat(birthToken[0])).concat(birthToken[1]);
      console.log('birthday : ' + birthday);
    	$.ajax('../page/login.do', {
 			method: 'POST',
 			dataType: 'json',
 			data: {
 				name: response.name,
 				email: response.email,
 				birthday: birthday
 			},
 			success: function(result) {
 				location.replace("../main/swagMain.html");
 			},
 			error: function(xhr, textStatus, errorThrown) {
 				alert('작업을 완료할 수 없습니다.\n' + 
 					  '잠시 후 다시 시도하세요.\n' +
 					  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
 			}
 		});
    });
  }

function littleBoy(){
  FB.login(function(response) {
	  if (response.status === 'connected') {
		  console.log("aaa");
		  testAPI();
	  } else if (response.status === 'not_authorized') {
		  console.log("bbb");
	  } else {
		  console.log("ccc");
	  }
	}, {scope: 'email,user_birthday,user_location'});
}