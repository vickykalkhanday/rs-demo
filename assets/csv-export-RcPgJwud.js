function u(e){if(e==null)return"";const n=String(e);return/[",\n\r]/.test(n)?`"${n.replace(/"/g,'""')}"`:n}function b(e,n="export.csv",r){if(!e||e.length===0){alert("Nothing to export.");return}const o=r??Object.keys(e[0]),l=o.join(","),s=e.map(d=>o.map(p=>u(d[p])).join(",")).join(`
`),a=`${l}
${s}`,i=new Blob([a],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(i),t=document.createElement("a");t.href=c,t.download=n,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(c)}export{b as e};
