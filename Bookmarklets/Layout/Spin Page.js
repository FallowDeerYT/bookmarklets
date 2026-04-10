/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-spin');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-spin';s.textContent='html{animation:bmSpin 4s linear infinite!important;}@keyframes bmSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}';document.head.appendChild(s)})()
