/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-hideimg');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-hideimg';s.textContent='img{visibility:hidden!important}';document.head.appendChild(s)})()
