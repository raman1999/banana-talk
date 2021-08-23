//setup the inputs and outputs
var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#input-box");
var outputDiv = document.querySelector("#output-box");
//server URL to minion API
var serverURL = "https://api.funtranslations.com/translate/minion.json"
//prepare server URL for querying [load]
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}
//error handling
function errorHandler(error){
    console.log("Error occured ",error)
}
//click event
function clickEventHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {outputDiv.innerText=json.contents.translated
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler)