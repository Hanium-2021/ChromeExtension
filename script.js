var highlight = document.getElementById('highlight');
var dict = document.getElementById('dict');
var dict_box = document.getElementById('dict_box');
highlight.addEventListener('click', function(event) {  
    chrome.tabs.executeScript({file: "highlight.js"});
});
dict.addEventListener('click', function(event) {
    if(dict_box.style.display === "none") {
        dict_box.style.display = "block";
    } else {
        dict_box.style.display = "none"; 
    }
});