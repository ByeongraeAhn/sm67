window.onload = getBirth;
var birth;

function getBirth() {
	$.ajax('../page/getBirth.do', {
		method: 'POST',
		dataType: 'json',
		data: {
		},
		success: function(result) {
			birthday = result.birthday;
			//생일이 없으면 생일을 받는다.
			if (birthday==null) {
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
						swal.showInputError("You need to write something!");
						return false;
					}
					birth = inputValue;
					swal("Nice!", 'You wrote: ' + inputValue, "success");
					console.log(birth);
				});
			}
		},
		error: function(xhr, textStatus, errorThrown) {
			alert('작업을 완료할 수 없습니다.\n' + 
				  '잠시 후 다시 시도하세요.\n' +
				  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
		}
	});
}

