var birth;

function getBirth(obj,cb) {
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
		cb(obj);
	});
}

