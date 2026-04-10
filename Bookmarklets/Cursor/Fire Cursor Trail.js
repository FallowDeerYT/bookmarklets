/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{document.onmousemove=e=>{let d=document.createElement('div');d.textContent='🔥';d.style.cssText='position:fixed;left:'+e.clientX+'px;top:'+e.clientY+'px;pointer-events:none;font-size:20px;z-index:2147483647;transition:all .7s ease-out';document.body.appendChild(d);requestAnimationFrame(()=>{d.style.transform='translate(-6px,-24px) scale(.4)';d.style.opacity='0'});setTimeout(()=>d.remove(),700)}})()
