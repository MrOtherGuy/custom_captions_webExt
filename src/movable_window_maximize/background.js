browser.runtime.onInstalled.addListener(()=>{
  browser.storage.local.set({iconstyle:"auto"})
});

browser.browserAction.onClicked.addListener(
  async (tab) => {
    let win = await browser.windows.getCurrent();
    if( win.state === "maximized" ){
      browser.windows.update(tab.windowId,{state:"normal"})
    }else{
      browser.windows.update(tab.windowId,{state:"maximized"})
    }
  }
)

browser.storage.local.get(["iconstyle"])
.then(res => {
  if(!(res.iconstyle && res.iconstyle != "auto")){
    return
  }
  browser.browserAction.setIcon({path:"../icons/button-"+res.iconstyle+".svg"})
})