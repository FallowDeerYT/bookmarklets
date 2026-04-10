/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-spoiler');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-spoiler';s.textContent='p,li,span{filter:blur(6px)!important} p:hover,li:hover,span:hover{filter:none!important}';document.head.appendChild(s)})()
