/*
Check it out at projects.fallowdeer.eu/bookmarklets
*/

javascript:(()=>{let w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){let t=n.textContent;if(t.trim().length>2){let o='';for(let i=0;i<t.length;i++)o+=i%2?t[i].toLowerCase():t[i].toUpperCase();n.textContent=o;}}})()
