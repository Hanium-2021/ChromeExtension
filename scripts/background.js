//popup창 띄우기
function onWindowLoad() {
  chrome.tabs.executeScript(null, {
    file: "scripts/create_popup.js",
  });
}
chrome.browserAction.onClicked.addListener(function (tab) {
  onWindowLoad();
});
