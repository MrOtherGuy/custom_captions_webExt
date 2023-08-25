browser.runtime.onInstalled.addListener(()=>{
  browser.storage.local.set({iconstyle:"auto"})
});

browser.action.onClicked.addListener( (tab) => browser.windows.remove(tab.windowId) );

browser.runtime.onStartup.addListener(async () => {
  const opt = await browser.storage.local.get(["iconstyle"]);
  if(opt.iconstyle && opt.iconstyle != "auto"){
    browser.action.setIcon({path:"../icons/button-"+opt.iconstyle+".svg"})
  }
});
