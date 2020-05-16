var showUrl = 'https://example.com';
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	$.each(request, function(index, el) {
		$('#url').append("<tr><td>"+ el +"</tr></td>");
	});
});

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {todo: "findLink"});
});

$(function () {
	$('#getlinks').click(function() {
		chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {todo: "findLink"});
		});
	});
});

