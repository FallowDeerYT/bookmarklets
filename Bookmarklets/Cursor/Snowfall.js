/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{if(window.__bmSnow){clearInterval(window.__bmSnow);window.__bmSnow=0;return;}window.__bmSnow=setInterval(()=>{let d=document.createElement('div');d.textContent='❄️';d.style.cssText='position:fixed;left:'+(Math.random()*innerWidth)+'px;top:-20px;pointer-events:none;z-index:2147483647;font-size:'+(12+Math.random()*24)+'px;transition:transform 5s linear, top 5s linear, opacity 5s linear';document.body.appendChild(d);requestAnimationFrame(()=>{d.style.top=innerHeight+20+'px';d.style.transform='translateX('+(Math.random()*200-100)+'px)';d.style.opacity='0.8'});setTimeout(()=>d.remove(),5200)},120)})()
