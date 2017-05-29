'use strict';

function save_options(){
  var api_key = document.getElementById('api_key').value;
  if (document.getElementById('r1').checked) {
    var imageType = document.getElementById('r1').value;
  }
  else{
    imageType = document.getElementById('r2').value
  }
  chrome.storage.sync.set({
      'api_key': api_key,
      'imageType' : imageType
    },
    function(){
      alert('API Key and imageType Saved!');
    });
}

function restore_options(){
  
  chrome.storage.sync.get({
      'api_key': '',
      'imageType': ''
    },
    function(items){
      document.getElementById('api_key').value = items.api_key;
      document.getElementById('imageType').value = items.imageType;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
  save_options);
console.log('\'Allo \'Allo! Popup');
