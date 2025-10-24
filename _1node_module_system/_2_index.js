const myModul=require('./_1firstModule_commonjs')
console.log(myModul.add(6,5))
try {

    console.log("Dividing by 0");
    let result=myModul.div(34,0);
    console.log(result)
    
} catch (error) {
    console.log("Caught error",error.message)
    
}

/* nodejs wrapped every code of every file in wrapped function before execution

(function(exports,require,module,__filename,__dirname){
     ur code goes here
}) */