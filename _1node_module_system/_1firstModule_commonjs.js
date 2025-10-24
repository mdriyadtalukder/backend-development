//commonjs
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function div(a,b){

    if(b===0){
         throw new Error("Divide by zore not allowed");
    }
    return a/b;
}
// module.exports=div;
module.exports={
    add,sub,div
}