window.onload = getSwagVo;
var userName;
var birthToken;
var birth_year;/// 바이오 리듬을 알아볼 사람의 생일 중의 "년" <br>
var birth_month;/// 바이오 리듬을 알아볼 사람의 생일 중의 "월" <br>
var birth_day;/// 바이오 리듬을 알아볼 사람의 생일 중의 "일" <br>
var physical;
var emotional;
var mental;
var intuitive;
var msg;
var smsg;
var audio = new Audio();

function getSwagVo() {
		$.ajax('page/getSwagVo.do', {
			method: 'POST',
			dataType: 'json',
			data: {
			},
			success: function(result) {
				userName = result.data.username;
				birthToken = result.data.birthday.split('-');
				birth_year = birthToken[0];/// 바이오 리듬을 알아볼 사람의 생일 중의 "년" <br>
				birth_month = birthToken[1];/// 바이오 리듬을 알아볼 사람의 생일 중의 "월" <br>
				birth_day = birthToken[2];/// 바이오 리듬을 알아볼 사람의 생일 중의 "일" <br>
				settingBio();
				settingMsg();
				gra();
				$('.graph-title').html(userName+' 님의 바이오 리듬')
			},
			error: function(xhr, textStatus, errorThrown) {
				alert('작업을 완료할 수 없습니다.\n' + 
					  '잠시 후 다시 시도하세요.\n' +
					  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:11121313)');
			}
		});
	}



function settingBio(){
	var today = new Date();
	var today_year = today.getFullYear();/// 오늘의 "년" <br>
	var today_month = today.getMonth();/// 오늘의 "월" <br>
	var today_day = today.getDate();/// 오늘의 "일" <br>
	var month_day = new Array();

	month_day[1] = 31;
	month_day[2] = 59;
	month_day[3] = 90;
	month_day[4] = 120;
	month_day[5] = 151;
	month_day[6] = 181;
	month_day[7] = 212;
	month_day[8] = 243;
	month_day[9] = 273;
	month_day[10] = 304;
	month_day[11] = 334;
	month_day[12] = 365;

	year = (today_year - 1) * 365;// 년수 계산 <br>
	check_month = today_month - 1;
	month = month_day[check_month];//월수 개산 <br>

	if (month > 2)
	{ 
	if ((month % 4) == 0 && (month % 100) !=0 || (month % 400) == 0)
	{ 
	month = month +1;
	}
	} 

	total = year + month + today_day;

	my_year = (birth_year - 1) * 365;// 년수 계산 <br>
	my_check_month = birth_month - 1;
	my_month = month_day[my_check_month];//월수 개산 <br>
	my_total = my_year + my_month + birth_day;
	totalday = total - my_total;
	pis = 3.141592654;

	physical = Math.ceil(Math.sin((totalday / 23) * 2 * pis) * 100);
	emotional = Math.ceil(Math.sin((totalday / 28) * 2 * pis) * 100);
	mental = Math.ceil(Math.sin((totalday / 33) * 2 * pis) * 100);
	intuitive = Math.ceil(Math.sin((totalday / 38) * 2 * pis) * 100);

/*	document.querySelector("#physical").innerHTML=physical;
	document.querySelector("#emotional").innerHTML=emotional;
	document.querySelector("#mental").innerHTML=mental;
	document.querySelector("#intuitive").innerHTML=intuitive;*/
	
}

function settingMsg(){
	var arr = new Array();
	var status;
	
	msg = '금일 '+userName+'님의 바이오 리듬 분석입니다.';
	audio.src ='http://translate.google.com/translate_tts?tl=ko&q='+'"'+msg+'"';
	audio.play();
	msg = msg + '<br>'
	var token;

	status = getStatus(physical);
	token = setPmsg(status);

	status = getStatus(emotional);
	token = setEmsg(status);
	
	status = getStatus(mental);
	token = setMmsg(status);
	
	status = getStatus(intuitive);
	token = setImsg(status);
	
	
	
	smsg = msg.replace( /<br>/gi, " ");
	console.log("smsg : " + smsg);
		audio.src ='http://translate.google.com/translate_tts?tl=ko&q='+'"'+smsg+'"';
		audio.play();
	$("#swagMsg").html(msg)
	
	
	
}

function getStatus(num){
	if(num >90){
		status = 'best';
	} else if ( num > 50){
		status = 'good';
	} else if ( num > 0 ){
		status = 'normal';
	}   else if ( num < -90){
		status = 'teriible'
	}else if ( num < -50){
		status = 'bad';
	}else if ( num < 0 ){
		status = 'not bad';
	}
	return status;
}

//신체
function setPmsg(status){
	switch(status){
	case 'best':
		msg = msg + ('신체지수가 매우 좋습니다. 오늘 같은 날은 메시, 호날두와 같이 뛸 수 있을 꺼에요. <br>');
		break;
	case 'good':
		msg = msg + ('신체지수가  좋습니다. 운동하기엔 딱 좋은 상태네요. <br>');
		break;
	case 'normal':
		msg = msg + ('신체지수가 그럭저럭 괜찮습니다. 이럴때는 가벼운 산책 정도가 괜찮죠. <br>');
		break;
	case 'not bad':
		msg = msg + ('신체지수가 나쁘진 않아요. 좋은것도 아니니 무리한 운동은 삼가하세요!. <br>');
		break;
	case 'bad':
		msg = msg + ('신체지수가 나빠요.... 오늘 같은 날은 조심 또 조심 아시죠? <br>');
		break;
	case 'teriible':
		msg = msg + ('신체지수가 매우 나빠요.... 어디 아프신거 아니에요? <br>');
		break;
	}
}

//감성
function setEmsg(status){
	switch(status){
	case 'best':
		msg = msg + ('감성지수가 매우 좋습니다. 기분 좋은 일이 있으실 거에요. 걷다가 5천원 짜리를 주울지도? <br>');
		break;
	case 'good':
		msg = msg + ('감성지수가  좋습니다. 이럴땐 롹앤롤에 빠져보는게 어때요 ?. <br>');
		break;
	case 'normal':
		msg = msg + ('감성지수가 그럭저럭 괜찮습니다. 무난한 일상을 보내시겠네요. <br>');
		break;
	case 'not bad':
		msg = msg + ('감성지수가 나쁘진 않아요. 좋은것도 아닌것 아시죠? <br>');
		break;
	case 'bad':
		msg = msg + ('감성지수가 나빠요.... 누가 귀찮게 해도 참을 인! 아시겠죠 ? <br>');
		break;
	case 'teriible':
		msg = msg + ('감성지수가 매우 나빠요.... 오늘 같은날은 사고치기 딱 좋은 날이니까 되도록 술같은건 드시지 마세요! <br>');
		break;
	}
}
//지각
function setMmsg(status){
	switch(status){
	case 'best':
		msg = msg + ('지각지수가 매우 좋습니다. 오늘의 당신은 아리스토텔레스!. <br>');
		break;
	case 'good':
		msg = msg + ('지각지수가  좋습니다. 일처리가 깔끔하게 잘 되실거 같아요. <br>');
		break;
	case 'normal':
		msg = msg + ('지각지수가 그럭저럭 괜찮습니다. 점심 메뉴와 같은 애매한 결정을 직접 내려보세요!. <br>');
		break;
	case 'not bad':
		msg = msg + ('지각지수가 나쁘진 않아요. 인생은 갈대 아니겠어요 ? 묻어가는 것도 좋을것 같네요. <br>');
		break;
	case 'bad':
		msg = msg + ('지각지수가 나빠요.... 섣부른 판단으로 큰 과오가 생기지 않게 조심하세요. <br>');
		break;
	case 'teriible':
		msg = msg + ('지각지수가 매우 나빠요.... 중요한 결정을 해야 된다면 꼭 현명한 지인에게 상의 하시길 바래요! <br>');
		break;
	}
}
//지성
function setImsg(status){
	switch(status){
	case 'best':
		msg = msg + ('지성지수가 매우 좋습니다. 오늘이 시험 전날이라면 벼락치기 하기에도 딱 좋죠? <br>');
		break;
	case 'good':
		msg = msg + ('지성지수가  좋습니다. 왠지 창의적인 생각이 마구 떠오르실것 같아요! <br>');
		break;
	case 'normal':
		msg = msg + ('지성지수가 그럭저럭 괜찮습니다. 이럴땐 독서가 괜찮은데 칼 세이건의 "코스모스" 같은 도서는 어떨까요 ? <br>');
		break;
	case 'not bad':
		msg = msg + ('지성지수가 나쁘진 않아요. 거 책보기 따악 좋은 수치다! <br>');
		break;
	case 'bad':
		msg = msg + ('지성지수가 나빠요.... 공부하신다면 졸음에 빠지기 십상이니 과도한 카페인 섭취를 추천합니다! <br>');
		break;
	case 'teriible':
		msg = msg + ('지성지수가 매우 나빠요.... 오늘은... 공부 안되요... 그냥 나가 노세요 ... <br>');
		break;
	}
}

function gra(){
	(function basic_radar(container) {

		// Fill series s1 and s2.
		if (physical < 0) {
			physical = 100 + physical;
		} else {
			physical += 100
		}
		if (emotional < 0) {
			emotional = 100 + emotional;
		} else {
			emotional += 100
		}
		if (mental < 0) {
			mental = 100 + mental;
		} else {
			mental += 100
		}
		if (intuitive < 0) {
			intuitive = 100 + intuitive;
		} else {
			intuitive += 100
		}
		var s1 = {
			label : userName,
			data : [ [ 0, physical ], [ 1, emotional ], [ 2, mental ],
					[ 3, intuitive ] ]
		}, graph, ticks;

		// Radar Labels
		ticks = [ [ 0, "신체 지수" ], [ 1, "감성 지수" ], [ 2, "지각 지수" ],
				[ 3, "지성 지수" ], ];

		// Draw the graph.
		graph = Flotr.draw(container, [ s1 ], {
			radar : {
				show : true
			},
			grid : {
				circular : true,
				minorHorizontalLines : true
			},
			yaxis : {
				min : 0,
				max : 200,
				minorTickFreq : 1
			},
			xaxis : {
				ticks : ticks
			}
		});
	})(document.getElementById("graph"));
}