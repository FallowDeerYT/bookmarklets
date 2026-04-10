/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-upper');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-upper';s.textContent='*{text-transform:uppercase!important}';document.head.appendChild(s)})()
