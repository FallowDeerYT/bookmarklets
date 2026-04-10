/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let s=document.getElementById('bm-inputs');if(s){s.remove();return;}s=document.createElement('style');s.id='bm-inputs';s.textContent='input,textarea,select,button{border:3px solid hotpink!important;box-shadow:0 0 12px cyan!important}';document.head.appendChild(s)})()
