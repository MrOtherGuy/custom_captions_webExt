browser.runtime.onInstalled.addListener(()=>{
  browser.storage.local.set({iconstyle:"auto"})
});

browser.browserAction.onClicked.addListener( (tab) => browser.windows.update(tab.windowId,{state:"minimized"}) )