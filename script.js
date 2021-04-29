chrome.tabs.executeScript({
    code: 'document.querySelector("h3#articleTitle").innerText'  
}, function(result){
    document.querySelector('#content').innerText = result;
});