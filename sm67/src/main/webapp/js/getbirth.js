var birth;

function getBirth() {
	swal({
		title: "Welcome!",
		text: 'Please enter your birthday',
		type: 'input',
		showCancelButton: true,
		closeOnConfirm: false,
		animation: "slide-from-top",
		inputPlaceholder: "19881008"
	}, 
	function(inputValue){
		if (inputValue === false) return false;

		if (inputValue === "") {
			swal.showInputError("You need to write birthday!");
			return false;
		}
		birth = inputValue;
		birth = birth.replace(/[^0-9]/g,'');
		if (birth.length != 8) {
			swal.showInputError("Please fill in the form!");
			return false;
		}
		swal("Nice!", 'You wrote: ' + birth, "success");
		updateBirth();
	});
	
}

function updateBirth() {
	$.ajax('../page/updateBirth.do', {
		method: 'POST',
		dataType: 'json',
		data: {
			birthday: birth
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
}

