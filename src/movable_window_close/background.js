browser.runtime.onInstalled.addListener(()=>{
  browser.storage.local.set({iconstyle:"auto"})
});

browser.browserAction.onClicked.addListener( (tab) => browser.windows.remove(tab.windowId) )