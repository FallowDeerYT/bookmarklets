/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-invert');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-invert';s.textContent='html{filter:invert(1) hue-rotate(180deg)!important} img,video{filter:invert(1) hue-rotate(180deg)!important}';document.head.appendChild(s)})()
