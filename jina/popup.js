chrome.extension.onMessage.addListener(function (request, sender) {
  //리스너 등록
  //   if (request.action == "getSource") {
  //     document.body.innerText = request.source;
  //   }
});

//popup창 띄우기
function onWindowLoad() {
  chrome.tabs.executeScript(
    null,
    {
      file: "popup_main_box.js",
    },
    function () {
      if (chrome.extension.lastError) {
        document.body.innerText =
          "There was an error injecting script : \n" +
          chrome.extension.lastError.message;
      }
    }
  );
}
window.onload = onWindowLoad;
