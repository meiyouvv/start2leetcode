/* 
api专家解法：
先把数字转成字符串再转成数组，使用数组的reverse方法，再转回成数字
*/
var isPalindrome = function(x) {
    if(x<0 || x > 2**31 - 1)return false
    return x == ~~(x.toString().split("").reverse().join(""))
};