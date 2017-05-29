'use strict';

chrome.browserAction.setBadgeText({text: '\'Allo'});

chrome.browserAction.onClicked.addListener(function(tab){
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});
console.log('\'Allo \'Allo! Event Page for Browser Action');
