/*
以数组第一个为最长子串，递归找到最长前缀
*/
var longestCommonPrefix = function(strs) {
    if(strs.length == 0 || strs.includes(""))return ""
    let str = strs[0]
    while(str != ""){ //直到str为空 说明没有找到
        for(let i = 0;i <strs.length;i++){
            if(!strs[i].includes(str)){
                str = str.substring(0,str.length-1)
                break
            }
        }
    }
    return str
};