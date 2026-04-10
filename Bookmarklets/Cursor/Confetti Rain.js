/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{if(window.__bmConfetti){clearInterval(window.__bmConfetti);window.__bmConfetti=0;return;}window.__bmConfetti=setInterval(()=>{let d=document.createElement('div');d.textContent='🟦';d.style.cssText='position:fixed;left:'+(Math.random()*innerWidth)+'px;top:-20px;pointer-events:none;z-index:2147483647;font-size:'+(10+Math.random()*20)+'px;transition:transform 4s linear, top 4s linear, opacity 4s linear';document.body.appendChild(d);requestAnimationFrame(()=>{d.style.top=innerHeight+20+'px';d.style.transform='translateX('+(Math.random()*200-100)+'px) rotate('+(Math.random()*720)+'deg)';d.style.opacity='0.9'});setTimeout(()=>d.remove(),4200)},90)})()
