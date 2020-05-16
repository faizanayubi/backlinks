var firstHref = $("a[href^='http']").eq(0).attr("href");
var links = [];
var allURLS = $('a:not([href^="#"])').each(function (argument) {
	links.push(this.href);
});

var obj = Object.assign({}, links.filter(function(value, index, self) {
	return self.indexOf(value) === index;
}));
console.log(obj);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == "findLink") {
		chrome.runtime.sendMessage(obj);
	}
});