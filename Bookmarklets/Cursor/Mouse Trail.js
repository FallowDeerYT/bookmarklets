/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{document.onmousemove=e=>{let d=document.createElement('div');d.textContent='✨';d.style.cssText='position:fixed;left:'+e.clientX+'px;top:'+e.clientY+'px;pointer-events:none;font-size:18px;z-index:2147483647;transition:all .8s ease-out';document.body.appendChild(d);requestAnimationFrame(()=>{d.style.transform='translate(-10px,-20px) scale(.5)';d.style.opacity='0'});setTimeout(()=>d.remove(),800)}})()
