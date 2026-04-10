/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-hoverwiggle');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-hoverwiggle';s.textContent='*:hover{animation:bmHoverWiggle .25s linear infinite!important;}@keyframes bmHoverWiggle{0%{transform:translateX(0)}25%{transform:translateX(2px)}50%{transform:translateX(0)}75%{transform:translateX(-2px)}100%{transform:translateX(0)}}';document.head.appendChild(s)})()
