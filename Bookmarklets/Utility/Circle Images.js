/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-circleimg');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-circleimg';s.textContent='img{border-radius:999px!important}';document.head.appendChild(s)})()
