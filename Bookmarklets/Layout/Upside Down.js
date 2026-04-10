/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-flip');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-flip';s.textContent='html{transform:rotate(180deg)!important}';document.head.appendChild(s)})()
