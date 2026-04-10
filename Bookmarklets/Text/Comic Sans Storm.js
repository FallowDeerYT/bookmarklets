/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-comic');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-comic';s.textContent='*{font-family:"Comic Sans MS","Chalkboard SE",cursive!important}';document.head.appendChild(s)})()
