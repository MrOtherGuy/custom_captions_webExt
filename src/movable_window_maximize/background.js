browser.runtime.onInstalled.addListener(()=>{
  browser.storage.local.set({iconstyle:"auto"})
});

browser.action.onClicked.addListener(
  async (tab) => {
    let win = await browser.windows.getCurrent();
    if( win.state === "maximized" ){
      browser.windows.update(tab.windowId,{state:"normal"})
    }else{
      browser.windows.update(tab.windowId,{state:"maximized"})
    }
  }
)

browser.runtime.onStartup.addListener(async () => {
  const opt = await browser.storage.local.get(["iconstyle"]);
  if(opt.iconstyle && opt.iconstyle != "auto"){
    browser.action.setIcon({path:"../icons/button-"+opt.iconstyle+".svg"})
  }
});
