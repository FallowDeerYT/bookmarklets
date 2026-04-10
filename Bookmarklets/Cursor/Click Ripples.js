/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{document.onclick=e=>{let d=document.createElement('div');d.style.cssText='position:fixed;left:'+(e.clientX-10)+'px;top:'+(e.clientY-10)+'px;width:20px;height:20px;border:3px solid #09f;border-radius:999px;pointer-events:none;z-index:2147483647;transition:all .6s ease-out';document.body.appendChild(d);requestAnimationFrame(()=>{d.style.transform='scale(12)';d.style.opacity='0'});setTimeout(()=>d.remove(),650)}})()
