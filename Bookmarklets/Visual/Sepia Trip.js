/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-sepia');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-sepia';s.textContent='html{filter:sepia(1)!important}';document.head.appendChild(s)})()
