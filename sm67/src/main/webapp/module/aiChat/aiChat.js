


function swagChat(){
	check($("#inputString").val());
	$("#textField").append('사용자 : '+$('#inputString').val() + '\n');
	$("#inputString").val('');
	$("#inputString").focus();
	
}


function check(msg) {
	$.ajax('../../page/chatCheck.do', {
		method: 'POST',
		dataType: 'json',
		data: {
			inputString: msg,
		},
		success: function(result) {
			
			//DB에 응답할 output이 없다면
			if(result.check == false){
				getOutput(msg);
			} else {
			//응답 output이 있다면
				$("#textField").append('SWAG : '+ result.data.outputString + '\n');
				speechText(result.data.outputString);
			} 
		},
		error: function(xhr, textStatus, errorThrown) {
			alert('작업을 완료할 수 없습니다.\n' + 
				  '잠시 후 다시 시도하세요.\n' +
				  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
		}
	});
}

function insertString (inputString, outputString) {
	
	$.ajax('../../page/insertString.do', {
		method: 'POST',
		dataType: 'json',
		data: {
			inputString: inputString,
			outputString: outputString
		},
		success: function(result) {
				$("#textField").append("SWAG : 알려 주셔서 감사합니다.");
				speechText("알려 주셔서 감사합니다.");
				
		},
		error: function(xhr, textStatus, errorThrown) {
			alert('작업을 완료할 수 없습니다.\n' + 
				  '잠시 후 다시 시도하세요.\n' +
				  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
		}
	});

	}



function speechText(msg){
	responsiveVoice.speak(msg,"Korean Female");
	
	$("#inputString").focus();
}



function getOutput(msg){
	speechText("제가 모르는 말이에요. 가르쳐 주시겠어요?");
	swal({
		title : "An input!",
		text : "제가 모르는 말이에요. 가르쳐 주시겠어요?",
		type : "input",
		showCancelButton : true,
		closeOnConfirm : false,
		animation : "slide-from-top",
		inputPlaceholder : "Write something"
	}, function(inputValue) {
		if (inputValue === false)
			return false;
		if (inputValue === "") {
			swal.showInputError("You need to write something!");
			return false
		}
		swal("Nice!", "You wrote: " + inputValue, "success");
		
		var inputString = msg;
		var outputString = inputValue;
		//DB에 insert하는 함수
		insertString(inputString, outputString);
	});
}