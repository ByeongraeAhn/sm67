window.onload = getSwagVo;

function getSwagVo() {
		$.ajax('http://localhost:9999/sm67/page/getSwagVo.do', {
			method: 'POST',
			dataType: 'json',
			data: {
			},
			success: function(result) {
				console.log("ajax성공");
				console.log(result);
				console.log(result.data.username);
			},
			error: function(xhr, textStatus, errorThrown) {
				alert('작업을 완료할 수 없습니다.\n' + 
					  '잠시 후 다시 시도하세요.\n' +
					  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
			}
		});
	}
