var count = 0;
chrome.browserAction.setBadgeText({'text': ''});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	count = Object.keys(request).length;
	chrome.browserAction.setBadgeText({"text": count.toString()});
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
	chrome.browserAction.setBadgeText({'text': ''});
});