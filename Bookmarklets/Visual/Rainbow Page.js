/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-rainbow');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-rainbow';s.textContent='html{animation:bmRainbow 2s linear infinite!important;}@keyframes bmRainbow{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}';document.head.appendChild(s)})()
