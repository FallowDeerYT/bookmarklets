/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-neon');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-neon';s.textContent='*{text-shadow:0 0 3px #0ff,0 0 8px #f0f!important}';document.head.appendChild(s)})()
