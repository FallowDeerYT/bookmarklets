/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{document.querySelectorAll('p,li,span,h1,h2,h3').forEach(e=>{let t=e.textContent.trim();if(t.length>2)e.textContent=t.split('').reverse().join('')})})()
