const path=require('path');
console.log(path.dirname(__filename));//give folder name of this
console.log(path.basename(__filename)); //give file name of this
console.log(path.extname(__filename)); //give file extension of this like .js
console.log(path.join("/user","document","nodejs","project")); //join all to make a path;
const resolvePath=path.resolve("/user","document","nodejs","project");//Builds an absolute path (starting from root or current directory) like F:..so F:\user\documents\nodejs\project
console.log(resolvePath);
console.log(path.normalize("/user/.hp/../node/project")); //It cleans up a messy path — removes unnecessary by .. or .
/**.hp → current directory (ignored)

.. → go up one directory → removes .hp */

