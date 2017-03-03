document.addEventListener('DOMContentLoaded', function() {
  var sText = document.getElementById("searchText");
  sText.addEventListener('change', initQuickSearch);
  sText.focus();
});


function initQuickSearch(){
  chrome.tabs.executeScript({file: 'addQSListener.js'});
  chrome.tabs.query({}, function(tabs){
    for(var i = 0; i < tabs.length; i++){
      if(tabs[i].title == 'iTMS - Load Board'){
        chrome.tabs.sendMessage(tabs[i].id, {search: document.getElementById("searchText").value}, function(resp){ console.log(resp)});
        chrome.tabs.update(tabs[i].id, {selected: true});
        return;
      }
    }

    alert("You must have iTMS open on another tab for quick search!");
  });
}
