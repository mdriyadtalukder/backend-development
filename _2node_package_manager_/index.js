//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

const lodash=require("lodash");

const arr=["riyad","riya","keya"];

const captalize=lodash.map(arr,lodash.capitalize);
console.log(captalize);