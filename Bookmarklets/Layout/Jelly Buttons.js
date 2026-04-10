/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-jelly');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-jelly';s.textContent='button,input[type=button],input[type=submit]{animation:bmJelly .6s infinite!important;}@keyframes bmJelly{0%{transform:scale(1)}50%{transform:scale(1.08,.92)}100%{transform:scale(1)}}';document.head.appendChild(s)})()
