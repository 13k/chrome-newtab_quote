(function()
{
  chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      if (request.type == "getOptions") {
        var settings = JSON.parse(localStorage["settings"]);
        sendResponse(settings);
      }
    });
})();
