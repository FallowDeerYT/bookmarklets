/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-shadowparty');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-shadowparty';s.textContent='*{box-shadow:0 0 0 2px rgba(255,0,255,.25),0 0 16px rgba(0,255,255,.35)!important}';document.head.appendChild(s)})()
