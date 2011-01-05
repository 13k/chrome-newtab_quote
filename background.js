(function()
{
  chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      if (request.type == "getText") {
        var settings = JSON.parse(localStorage["settings"]);
        sendResponse(settings[0].value);
      }
    });
})();
