/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-pixelimg');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-pixelimg';s.textContent='img{image-rendering:pixelated!important;image-rendering:crisp-edges!important;filter:contrast(1.3)!important}';document.head.appendChild(s)})()
