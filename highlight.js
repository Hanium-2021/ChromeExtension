(function() {
    if (document.querySelector("h3#articleTitle").style.backgroundColor === "yellow") {
        document.querySelector("h3#articleTitle").style.backgroundColor = "white";
    } else {
        document.querySelector("h3#articleTitle").style.backgroundColor = "yellow";
    }
})();