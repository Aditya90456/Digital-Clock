
let hm=document.getElementById("hour")
let mi=document.getElementById("minute")
let sec=document.getElementById("second")

setInterval(() => {
        let ate= new Date();
         
hm.innerHTML=ate.getHours();
    mi.innerHTML=ate.getMinutes();
    sec.innerHTML=ate.getSeconds();
}, 1000);