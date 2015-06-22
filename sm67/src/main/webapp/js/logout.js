
function logout() {
	$.ajax('../page/loginOut.do', {
		method: 'POST',
		dataType: 'json',
		data: {
		},
		success: function(result) {
			location.replace("../login/login.html");
		},
		error: function(xhr, textStatus, errorThrown) {
			alert('작업을 완료할 수 없습니다.\n' + 
				  '잠시 후 다시 시도하세요.\n' +
				  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
		}
	});
};