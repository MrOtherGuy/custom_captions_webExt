browser.runtime.onInstalled.addListener(()=>{
  browser.storage.local.set({iconstyle:"auto"})
});

browser.browserAction.onClicked.addListener( (tab) => browser.windows.update(tab.windowId,{state:"minimized"}) )

browser.storage.local.get(["iconstyle"])
.then(res => {
  if(!(res.iconstyle && res.iconstyle != "auto")){
    return
  }
  browser.browserAction.setIcon({path:"../icons/button-"+res.iconstyle+".svg"})
})