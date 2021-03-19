/*
Khan academy cheat v0.0.1

Author: @Astroz
*/

/*Setting latex up*/
var script = document.createElement("script");
script.type = "text/javascript";
script.src = `https://cdn.jsdelivr.net/npm/latex.js/dist/latex.js`;
document.head.appendChild(script);
/*The old function*/
var OldFetch = fetch;
/*Names (randomized for security)*/
let HolderId;
let ButtonContainerId;
let DescriptionDivId;
let SaltAnswer;
/*User interface*/
function Interface() {
  let Holder = document.createElement("div");
  Holder.id = HolderId;
  let ButtonContainer = document.createElement("div");
  ButtonContainer.id = ButtonContainerId;
  var DescriptionDiv = document.createElement("div");
  var BREAK = document.captureEvents("br");
  var BREAK_ = document.captureEvents("br");
  DescriptionDivId.id = DescriptionDivId;
  var Title = document.createElement(
    "aiaDAdnaDIQAWDJidanADXIUDANDdnawdu" + SaltAnswer
  );
  Title.onclick = function (Event) {
    fetch = OldFetch;
    Holder.remove();
  };
  Title.innerText = "CKhan v0.0.1";
  Title.style = "color: #2e2d2d;user-select: none;margin-top: -10px;";
  Holder.style =
    "background-color: #141414;border-radius: 4px;text-align:center;overflow:scroll;z-index:9999;top:0; left:0;position:fixed;height:100%; width:350px;box-shadow: 5px 5px 10px;";
  ButtonContainer.style =
    "position:absolute;top:0;right:0;background: #232323;";
  // Setting the inside of the UI \\
  Holder.innerHTML = `
    <style>
      #${HolderId}::-webkit-scrollbar {
        background: #232323;
        width: 4px;
        height: 4px;
      }
       
      #${HolderId}::-webkit-scrollbar-thumb {
        background: #232323;
        border-radius: 5px;
      }
      
      #${HolderId}::-webkit-scrollbar-track {
        background: #232323;
        border-radius: 5px;
      }
    </style>`;
  document.body.appendChild(Holder);
  Holder.appendChild(DescriptionDiv);
  DescriptionDiv.appendChild(Title);
  Holder.appendChild(BREAK);
  Holder.appendChild(BREAK_);
}

function generateString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function GenerateSecure() {
  HolderId = generateString(20);
  DescriptionDivId = generateString(20);
  ButtonContainerId = generateString(20);
  SaltAnswer = generateString(20);
}

/* Display */
function Display(text) {
  // Finding answer, and formating \\
  var HintsContent = JSON.parse(
    JSON.parse(text).data.assessmentItem.item.itemData
  ).hints;
  let AnswerText = HintsContent[HintsContent.length - 1].content;
  console.log("[ANSWER FOUND]\n" + AnswerText);
  let AnswerCopenent = document.createElement("iframe");
  var generator = new latexjs.HtmlGenerator({ hyphenate: true });
  let FormatedAnswer_ = (function () {
    var FormattedAnswer = AnswerText;
    FormattedAnswer = FormattedAnswer.split("\n").join("<br>");
    FormattedAnswer = FormattedAnswer.replace("\\\\", "");
    if (FormattedAnswer.indexOf("In conclusion,") != -1) {
      FormattedAnswer = FormattedAnswer.split("In conclusion,")[1];
      return FormattedAnswer;
    } else {
      return FormattedAnswer;
    }
  })();
  generator = latexjs.parse(AnswerText, { generator: generator });
  let AnswerCopenentText = document.createElement("AAAAAA");
  let Break = document.createElement("br");
  let Break_ = document.createElement("br");
  Break_.className = "break!!" + SaltAnswer;
  Break.className = "break!!" + SaltAnswer;
  /*Setting an iframe*/
  AnswerCopenent.className = SaltAnswer;
  AnswerCopenent.style =
    "background: #232323;border-radius: 6px;user-select: none;width: 150px;height: 150px;margin-left: 16px;text-align:center;box-shadow: 0 0 10px;";
  /*Inside text of answer component*/
  AnswerCopenentText.style =
    "color:#141414;border-radius: 6px;user-select: none;width: 30px;height: 30px;font-size: 15px;";
  /*Inserting*/
  document.getElementById(HolderId).appendChild(AnswerCopenent);
  let Doc = AnswerCopenent.contentWindow.document;
  Doc.open();
  Doc.write(generator.htmlDocument().documentElement.innerHTML);
  Doc.close();
  function init() {
    for (
      i = 0;
      i <=
      AnswerCopenent.contentWindow.document.body.getElementsByTagName(
        "annotation"
      ).length;
      i++
    ) {
      setTimeout(function () {
        if (i > 0) {
          try {
            AnswerCopenent.contentWindow.document.body
              .getElementsByTagName("annotation")[0]
              .remove();
          } catch (err) {}
        }
      }, 50);
    }
    let STYLE = document.createElement("style");
    STYLE.innerHTML = ` 
    body::-webkit-scrollbar {
      background: #232323;
      width: 4px;
      height: 4px;
    }
     
    body::-webkit-scrollbar-thumb {
      background: #232323;
      border-radius: 5px;
    }
    
    body::-webkit-scrollbar-track {
      background: #232323;
      border-radius: 5px;
    }`;
    AnswerCopenent.contentWindow.document.head.appendChild(STYLE);
  }

  AnswerCopenent.contentWindow.addEventListener("load", init, false);
  //AnswerCopenent

  document.getElementById(HolderId).appendChild(Break);
  document.getElementById(HolderId).appendChild(Break_);
  /*Clear window if closed*/

  if (
    document.querySelector(
      "#__MODAL_PARENT__ > div > div._1bdwasy > div > div._jp1ud6f > div._1fvz8ou > div._tkai5iq > div"
    ) == null
  ) {
    setTimeout(() => {
      for (
        i = 0;
        i <= document.getElementsByClassName(SaltAnswer).length;
        i++
      ) {
        setTimeout(function () {
          if (i > 0) {
            try {
              document.getElementsByClassName(SaltAnswer)[0].remove();
            } catch (err) {
              if (err) throw err;
            }
          }
        }, 50);
      }
      for (
        i = 0;
        i <= document.getElementsByClassName("break!!" + SaltAnswer).length;
        i++
      ) {
        setTimeout(function () {
          if (i > 0) {
            try {
              document
                .getElementsByClassName("break!!" + SaltAnswer)[0]
                .remove();
            } catch (err) {
              if (err) throw err;
            }
          }
        }, 50);
      }
    }, 20 * 1000);
  } else {
    let Old = document.querySelector(
      "#__MODAL_PARENT__ > div > div._1bdwasy > div > div._jp1ud6f > div._1fvz8ou > div._tkai5iq > div"
    ).children[0].onclick;
    document.querySelector(
      "#__MODAL_PARENT__ > div > div._1bdwasy > div > div._jp1ud6f > div._1fvz8ou > div._tkai5iq > div"
    ).children[0].onclick = function () {
      for (
        i = 0;
        i <= document.getElementsByClassName(SaltAnswer).length;
        i++
      ) {
        setTimeout(function () {
          if (i > 0) {
            try {
              document.getElementsByClassName(SaltAnswer)[0].remove();
            } catch (err) {
              if (err) throw err;
            }
          }
        }, 50);
      }
      for (
        i = 0;
        i <= document.getElementsByClassName("break!!" + SaltAnswer).length;
        i++
      ) {
        setTimeout(function () {
          if (i > 0) {
            try {
              document
                .getElementsByClassName("break!!" + SaltAnswer)[0]
                .remove();
            } catch (err) {
              if (err) throw err;
            }
          }
        }, 50);
      }
      document.querySelector(
        "#__MODAL_PARENT__ > div > div._1bdwasy > div > div._jp1ud6f > div._1fvz8ou > div._tkai5iq > div"
      ).children[0].onclick = Old;
      document
        .querySelector(
          "#__MODAL_PARENT__ > div > div._1bdwasy > div > div._jp1ud6f > div._1fvz8ou > div._tkai5iq > div"
        )
        .children[0].click();
    };
  }
}

/*Replacement*/
fetch = (input, init) => {
  return OldFetch(input, init).then((response) => {
    return new Promise((resolve) => {
      response
        .clone()
        .text()
        .then((text) => {
          if (response.url.indexOf("AssessmentItem") != -1) {
            Display(text);
            resolve(response);
          } else {
            resolve(response);
          }
        });
    });
  });
};
GenerateSecure();
Interface();
