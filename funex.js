const sum=function(a,b){
    return a+b;
};
console.log(sum(5,3));
function m(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}
m(greet,100);
m(function(){
    console.log("namaste")
},1000);