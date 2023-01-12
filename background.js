init = (tab) => {
  const {id, url} = tab;
  chrome.scripting.executeScript(
    {
      target: {tabId: id, allFrames: true},
      files: ['clientside.js']
    }
  )
  console.log(`Loading: ${url}`); 
}

chrome.action.onClicked.addListener(tab => { 
  init(tab)
});