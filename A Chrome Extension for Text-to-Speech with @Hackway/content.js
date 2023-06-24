chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "readSelectedText") {
    var selectedText = window.getSelection().toString();
    if (selectedText !== "") {
      var utterance = new SpeechSynthesisUtterance(selectedText);
      speechSynthesis.speak(utterance);
    }
  }
});
