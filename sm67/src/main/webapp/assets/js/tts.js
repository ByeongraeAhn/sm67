function speechTextKorean(msg, currentSlideNo) {
	if (window.currentSlideNo != currentSlideNo) {
		responsiveVoice.speak(msg, "Korean Female");
	}
}

function speechTextEnglish(msg) {
	responsiveVoice.speak(msg, "UK English Male");

}


