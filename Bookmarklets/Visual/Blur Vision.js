/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-blur');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-blur';s.textContent='html{filter:blur(3px)!important}';document.head.appendChild(s)})()
