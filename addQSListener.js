chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	document.getElementById("quick-search").value = request.search;
  	document.getElementById("quick-search-submit-btn").click();
  	window.focus();
  });