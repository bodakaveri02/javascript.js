/* set intervel method*/ 
console.log("hii there")
let id1=setInterval(()=>{
    console.log("hello");
},4000)
let id2=setInterval(()=>{
console.log("hi");
},4000)
clearInterval(id1);
console.log(id1);
console.log(id2);
/* set tiome out method*/
console.log("start");
setTimeout(()=>{
    console.log("runs in 2sec");
},2000);
console.log("end");