(function(w,d){zaraz.debug=(fg="")=>{document.cookie=`zarazDebug=${fg}; path=/`;location.reload()};window.zaraz._al=function(en,eo,ep){w.zaraz.listeners.push({item:en,type:eo,callback:ep});en.addEventListener(eo,ep)};zaraz.preview=(eq="")=>{document.cookie=`zarazPreview=${eq}; path=/`;location.reload()};zaraz.i=function(eC){const eD=d.createElement("div");eD.innerHTML=unescape(eC);const eE=eD.querySelectorAll("script");for(let eF=0;eF<eE.length;eF++){const eG=d.createElement("script");eE[eF].innerHTML&&(eG.innerHTML=eE[eF].innerHTML);for(const eH of eE[eF].attributes)eG.setAttribute(eH.name,eH.value);d.head.appendChild(eG);eE[eF].remove()}d.body.appendChild(eD)};zaraz.f=async function(fd,fe){const ff={credentials:"include",keepalive:!0,mode:"no-cors"};if(fe){ff.method="POST";ff.body=new URLSearchParams(fe);ff.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(fd,ff)};!function(cF,cG,cH,cI,cJ,cK){function cL(cN,cO){cK?cI(cN,cO||32):cJ.push(cN,cO)}function cM(cP,cQ,cR,cS){return cQ&&cG.getElementById(cQ)||(cS=cG.createElement(cP||"SCRIPT"),cQ&&(cS.id=cQ),cR&&(cS.onload=cR),cG.head.appendChild(cS)),cS||{}}cK=/p/.test(cG.readyState),cF.addEventListener("on"+cH in cF?cH:"load",(function(){for(cK=1;cJ[0];)cL(cJ.shift(),cJ.shift())})),cL._=cM,cF.defer=cL,cF.deferscript=function(cT,cU,cV,cW){cL((function(){cM("",cU,cW).src=cT}),cV)}}(this,d,"pageshow",setTimeout,[]);defer((function(){for(;zaraz.deferred.length;)zaraz.deferred.pop()();Object.defineProperty(zaraz.deferred,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...cX){let cY=Array.prototype.push.apply(this,cX);for(;zaraz.deferred.length;)zaraz.deferred.pop()();return cY}})}),5500);addEventListener("visibilitychange",(function(){for(;zaraz.deferred.length;)zaraz.deferred.pop()()}));window.zaraz._p=async bY=>new Promise((bZ=>{if(bY){bY.e&&bY.e.forEach((b$=>{try{new Function(b$)()}catch(ca){console.error(`Error executing script: ${b$}\n`,ca)}}));Promise.allSettled((bY.f||[]).map((cb=>fetch(cb[0],cb[1]))))}bZ()}));zaraz.pageVariables={};zaraz.__zcl||={};zaraz.track=async function(eI,eJ,eK){return new Promise(((eL,eM)=>{const eN={name:eI,data:{}};for(const eO of[localStorage,sessionStorage])Object.keys(eO||{}).filter((eQ=>eQ.startsWith("_zaraz_"))).forEach((eP=>{try{eN.data[eP.slice(7)]=JSON.parse(eO.getItem(eP))}catch{eN.data[eP.slice(7)]=eO.getItem(eP)}}));Object.keys(zaraz.pageVariables).forEach((eR=>eN.data[eR]=JSON.parse(zaraz.pageVariables[eR])));Object.keys(zaraz.__zcl).forEach((eS=>eN.data[`__zcl_${eS}`]=zaraz.__zcl[eS]));eN.data.__zarazMCListeners=zaraz.__zarazMCListeners;
//
eN.data={...eN.data,...eJ};eN.zarazData=zarazData;fetch("/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(eN)}).catch((()=>{
//
return fetch("/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(eN)})})).then((function(eU){zarazData._let=(new Date).getTime();eU.ok||eM();return 204!==eU.status&&eU.json()})).then((async eT=>{await zaraz._p(eT);"function"==typeof eK&&eK()})).finally((()=>eL()))}))};zaraz.set=function(eV,eW,eX){try{eW=JSON.stringify(eW)}catch(eY){return}prefixedKey="_zaraz_"+eV;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[eV];if(void 0!==eW){eX&&"session"==eX.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,eW):eX&&"page"==eX.scope?zaraz.pageVariables[eV]=eW:localStorage&&localStorage.setItem(prefixedKey,eW);zaraz.__watchVar={key:eV,value:eW}}};for(const{m:eZ,a:e$}of zarazData.q.filter((({m:fa})=>["debug","set"].includes(fa))))zaraz[eZ](...e$);for(const{m:fb,a:fc}of zaraz.q)zaraz[fb](...fc);delete zaraz.q;delete zarazData.q;zaraz.fulfilTrigger=function(fr,fs,ft,fu){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[fr]||(zaraz.__zarazTriggerMap[fr]="");zaraz.__zarazTriggerMap[fr]+="*"+fs+"*";zaraz.track("__zarazEmpty",{...ft,__zarazClientTriggers:zaraz.__zarazTriggerMap[fr]},fu)};window.dataLayer=w.dataLayer||[];zaraz._processDataLayer=ea=>{for(const eb of Object.entries(ea))zaraz.set(eb[0],eb[1],{scope:"page"});if(ea.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(ea.event))return;let ec={};for(let ed of dataLayer.slice(0,dataLayer.indexOf(ea)+1))ec={...ec,...ed};delete ec.event;ea.event.startsWith("gtm.")||zaraz.track(ea.event,ec)}};const d$=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...ee){let ef=d$.apply(this,ee);zaraz._processDataLayer(ee[0]);return ef}});dataLayer.forEach((eg=>zaraz._processDataLayer(eg)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((da=>clearTimeout(da)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((db=>db.item.removeEventListener(db.type,db.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.__zarazMCListeners={};zaraz.track("__zarazSPA")}),100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.track("__zarazSPA")}),100)}};zaraz._c=cC=>{const{event:cD,...cE}=cC;zaraz.track(cD,{...cE,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)"]})})(window,document);