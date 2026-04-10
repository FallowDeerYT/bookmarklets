/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-gray');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-gray';s.textContent='html{filter:grayscale(1)!important}';document.head.appendChild(s)})()
