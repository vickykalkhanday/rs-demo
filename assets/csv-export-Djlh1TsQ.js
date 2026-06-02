function u(e){if(e==null)return"";const n=String(e);return/[",\n\r]/.test(n)?`"${n.replace(/"/g,'""')}"`:n}function b(e,n="export.csv",p){if(!e||e.length===0){alert("Nothing to export.");return}const o=Object.keys(e[0]),r=o.join(","),l=e.map(i=>o.map(d=>u(i[d])).join(",")).join(`
`),s=`${r}
${l}`,a=new Blob([s],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(a),t=document.createElement("a");t.href=c,t.download=n,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(c)}export{b as e};
