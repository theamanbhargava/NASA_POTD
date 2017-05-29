'use strict';
//null returns all keys
chrome.storage.sync.get(null, function (data) {
  var allKeys = Object.keys(data);
  var apiKey =  data.api_key;
  var imageType = data.imageType;
  if(!apiKey){
    apiKey = "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
  }
  var date = new Date(+(new Date()) - Math.floor(Math.random()*500000000000));
  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  date = formatDate(date);
  var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + date;
  $.ajax({
    url: url,
    success: function(result){
      if("copyright" in result) {
        $("#copyright").text("Image Credits: " + result.copyright);
      }
      else {
        $("#copyright").text("Image Credits: " + "Public Domain");
      }
      
      if(result.media_type == "video") {
        $("#apod_img_id").css("display", "none");
        $("#apod_vid_id").attr("src", result.imageType);
      }
      else {
        $("#apod_vid_id").css("display", "none");
        $('body').css('background-image', 'url(' + result.hdurl + ')');
      }
      $("#reqObject").text(url);
      $("#returnObject").text(JSON.stringify(result, null, 4));
      $("#apod_explaination").text(result.explanation);
      $("#apod_title").text(result.title);
    }
  });
});

console.log('Visit me : http://theamanbhargava.github.io Hello from the Option.js file');
