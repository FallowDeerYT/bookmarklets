/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-wobble');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-wobble';s.textContent='html{animation:bmWobble .5s ease-in-out infinite!important;}@keyframes bmWobble{0%{transform:rotate(0deg)}25%{transform:rotate(1deg)}50%{transform:rotate(0deg)}75%{transform:rotate(-1deg)}100%{transform:rotate(0deg)}}';document.head.appendChild(s)})()
