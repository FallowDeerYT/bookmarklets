/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{document.onclick=e=>{for(let i=0;i<8;i++){let d=document.createElement('div');d.textContent='🎉';d.style.cssText='position:fixed;left:'+e.clientX+'px;top:'+e.clientY+'px;pointer-events:none;z-index:2147483647;transition:all .8s ease-out;font-size:20px';document.body.appendChild(d);requestAnimationFrame(()=>{d.style.transform='translate('+(Math.random()*120-60)+'px,'+(Math.random()*-120)+'px) rotate('+(Math.random()*360)+'deg)';d.style.opacity='0'});setTimeout(()=>d.remove(),850)}}})()
