openInNewTab = (firstTab) => {
  const {id, url} = firstTab;
  chrome.tabs.create({ url }, function(tab){
    return tab
  });
}

chrome.tabs.onCreated.addListener((tab)=> {
  // wait for contenscript to load
  chrome.runtime.onMessage.addListener((isLoaded, sender, sendResponse) => {
    if (isLoaded){
      (async () => {
        const response = await chrome.tabs.sendMessage(tab.id, 'test');
        console.log(response);
      })();
    }
  });
})

chrome.action.onClicked.addListener(tab => { 
  openInNewTab(tab)
});
