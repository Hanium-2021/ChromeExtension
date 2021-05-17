//팝업 생성
function cratePopup(document_body, document) {
  if (!isPopupExist()) {
    let timerId = null;

    //popup box style
    let styles = `
  #main_box {
      right: 2%;
      position: fixed;
      top: 5px;
      border: 1px solid black;
      z-index: 9999;
      float: right;
      border-radius: 4px;
      width: 200px;
      height: 150px;
      background-color: white;
      box-shadow: rgb(0,0,0,30%)1px 4px 3px;
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

  #main_box > #close_popup{
    cursor:pointer;
  }
    `;
    let styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    //popup box html
    let main_box = document.createElement("div");
    main_box.id = "main_box";
    main_box.innerHTML = `
    <div id="close_popup">닫기</div>
    <input type="button" id="highlight" value="하이라이팅">    
    <div id="content"></div>
    <input type="button" id="dict" value="사전검색">   
    <input type="search" id="dict_box">
    <div class="hashtag">#해시태그1</div>
    <div class="hashtag">#해시태그2</div>
    `;
    document_body.appendChild(main_box);

    let highlight_btn = document.getElementById("highlight");
    highlight_btn.addEventListener("click", () => {
      makeHighlight();
    });

    let dict_btn = document.getElementById("dict");
    let dict_box = document.getElementById("dict_box");
    let close_popup = document.getElementById("close_popup");

    dict_btn.addEventListener("click", () => {
      executeDictionary();
    });

    close_popup.addEventListener("click", () => {
      disapperPopup();
    });
  }
}

//팝업 유무 확인
function isPopupExist() {
  let popupBox = document.getElementById("main_box");
  if (!popupBox) {
    return false;
  } else {
    return true;
  }
}

//팝업 사라지기
function disapperPopup() {
  let popupBox = document.getElementById("main_box");
  popupBox.remove();
}

//하이라이팅
function makeHighlight() {
  if (
    document.querySelector("h3#articleTitle").style.backgroundColor === "yellow"
  ) {
    document.querySelector("h3#articleTitle").style.backgroundColor = "white";
  } else {
    document.querySelector("h3#articleTitle").style.backgroundColor = "yellow";
  }
}

//사전실행
function executeDictionary() {
  if (dict_box.style.display === "none") {
    dict_box.style.display = "block";
  } else {
    dict_box.style.display = "none";
  }
}

chrome.extension.sendMessage({
  action: "cratePopup",
  source: cratePopup(document.body, document),
});
