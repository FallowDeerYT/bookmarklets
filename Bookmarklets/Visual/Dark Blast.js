/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-dark');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-dark';s.textContent='html,body,*{background:#111!important;color:#eee!important;border-color:#444!important} a{color:#7db7ff!important}';document.head.appendChild(s)})()
