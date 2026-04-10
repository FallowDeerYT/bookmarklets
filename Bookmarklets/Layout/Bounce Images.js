/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-bounceimg');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-bounceimg';s.textContent='img{animation:bmBounce .8s infinite!important;position:relative!important;}@keyframes bmBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}';document.head.appendChild(s)})()
