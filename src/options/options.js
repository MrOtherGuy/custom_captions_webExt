function restoreOptions() {
  let gettingItem = browser.storage.local.get(["iconstyle"]);
  gettingItem.then((res) => {
    if(res.iconstyle){
      let item = document.getElementById(`${res.iconstyle}-radio`);
      if(item){ item.checked = true };
    }
  });
}
function init(){
  restoreOptions();
  let radios = Array.from(document.querySelectorAll("input"));
  for (let radio of radios){
    radio.addEventListener("change",(ev) => {
      const validValues =["auto","dark","light"];
      if(ev.target.checked && validValues.includes(ev.target.value)){
        browser.storage.local.set({iconstyle:ev.target.value})
        .then(()=>updateButton(ev.target.value))
      }
    });
  }
}

function updateButton(iconType){
  if(iconType === "auto"){
    browser.action.setIcon({path:null})
  }else{
    browser.action.setIcon({path:"../icons/button-"+iconType+".svg"})
  }
}

document.addEventListener('DOMContentLoaded', init);