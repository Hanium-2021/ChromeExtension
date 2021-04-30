var highlight = document.getElementById('highlight');
highlight.addEventListener('click', function(event) {  
    chrome.tabs.executeScript({file: "click.js"});
});