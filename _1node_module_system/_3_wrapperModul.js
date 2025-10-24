console.log("Wrapper module file names");
console.log("_dirname",__dirname);
console.log("file name",__filename);

//commonjs
module.exports.Printname=function(name){
    return `I am ${name}`
}