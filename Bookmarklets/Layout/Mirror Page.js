/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-mirror');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-mirror';s.textContent='html{transform:scaleX(-1)!important}';document.head.appendChild(s)})()
