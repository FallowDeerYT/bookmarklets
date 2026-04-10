/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-mono');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-mono';s.textContent='*{font-family:monospace!important}';document.head.appendChild(s)})()
