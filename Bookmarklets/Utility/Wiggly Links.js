/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-wigglelinks');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-wigglelinks';s.textContent='a{display:inline-block!important;animation:bmLinkWiggle .2s linear infinite!important;}@keyframes bmLinkWiggle{0%{transform:rotate(0deg)}25%{transform:rotate(2deg)}50%{transform:rotate(0deg)}75%{transform:rotate(-2deg)}100%{transform:rotate(0deg)}}';document.head.appendChild(s)})()
