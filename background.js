console.log('from background.js');
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == "showPageAction") {
		console.log(request.firstHref);
	}
})