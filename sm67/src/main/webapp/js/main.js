window.onload = getSwagVo;
var userName;

function getSwagVo() {
		$.ajax('../page/getSwagVo.do', {
			method: 'POST',
			dataType: 'json',
			data: {
			},
			success: function(result) {
				userName = result.data.username;
				setWelcome();
			},
			error: function(xhr, textStatus, errorThrown) {
				alert('작업을 완료할 수 없습니다.\n' + 
					  '잠시 후 다시 시도하세요.\n' +
					  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
			}
		});
	}

function setWelcome(){
	$('#welcome').val(' ' +userName + '님 어서오세요.\n'
	+'지금 제가 분석 해본 정보가 여기 있습니다.\n 더 자세한 정보를 원하 신다면 원하시는 정보를 클릭 해 보세요. ');
	
}