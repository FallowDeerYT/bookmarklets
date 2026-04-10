/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-zoomhover');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-zoomhover';s.textContent='*:hover{transform:scale(1.08)!important;transition:transform .12s!important}';document.head.appendChild(s)})()
