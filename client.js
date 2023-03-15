// recieve information from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('from background script: ' + message )
  sendResponse('message recieved')
});

(async () => {
  // let background script know recieving end is loaded
  await chrome.runtime.sendMessage(true);
})();