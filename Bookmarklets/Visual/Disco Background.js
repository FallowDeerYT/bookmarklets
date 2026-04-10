/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{if(window.__bmDisco){clearInterval(window.__bmDisco);window.__bmDisco=0;return;}window.__bmDisco=setInterval(()=>document.body.style.background='hsl('+Math.floor(Math.random()*360)+',100%,50%)',120)})()
