/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let o=document.getElementById('bm-spot');if(o){o.remove();document.onmousemove=null;return;}o=document.createElement('div');o.id='bm-spot';o.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:2147483646';document.body.appendChild(o);document.onmousemove=e=>o.style.background='radial-gradient(circle at '+e.clientX+'px '+e.clientY+'px, transparent 80px, rgba(0,0,0,.75) 160px)';})()
