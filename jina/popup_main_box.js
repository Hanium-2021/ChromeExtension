function popup_main_box(document_body, document) {
  var styles = `
      #main_box {
          right: 10px;
          position: fixed;
          top: 5px;
          left: 5px;
          border: 1px solid black;
          z-index: 9999;
          float: right;
          border-radius: 4px;
          width: 200px;
          height: 150px;
          background-color: burlywood;
      }
  
      #main_box > input:hover {
          background-color: beige;
      }
  
      #main_box > #highlight {
          margin-top: 15px;
          margin-left: 25px;
          height: 30px;
          width: 150px;
          border-radius: 30%;
          font-size: 12px;
      }
  
      #main_box > #dict {
          margin-top: 20px;
          margin-left: 25px;
          height: 30px;
          width: 150px;
          border-radius: 30%;
          font-size: 12px;
      }
  
      #main_box > #dict_box {
          display: none;
          margin: 0px;
          margin-top: 20px;
          margin-lefat: 18px;
      }
  
      .hashtag {
          display: inline-block;
          margin-top: 20px;
          margin-left: 20px;
          margin-bottom: 20px;
      } 
    `;
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  var main_box = document.createElement("div");
  main_box.id = "main_box";
  main_box.innerHTML = `
    <input type="button" id="highlight" value="하이라이팅">    
    <div id="content"></div>
    <input type="button" id="dict" value="사전검색">   
    <input type="search" id="dict_box">
    <div class="hashtag">#해시태그1</div>
    <div class="hashtag">#해시태그2</div>
  `;
  document_body.appendChild(main_box);
  return document_body.innerText;
}

chrome.extension.sendMessage({
  action: "popupMainBox",
  source: popup_main_box(document.body, document),
});
