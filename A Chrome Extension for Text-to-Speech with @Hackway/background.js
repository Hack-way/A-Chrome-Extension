
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "readSelectedText",
    title: "Read selected text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "readSelectedText") {
    chrome.tabs.sendMessage(tab.id, { action: "readSelectedText" });
  }
});
