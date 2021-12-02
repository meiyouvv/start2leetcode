/*
注意反转后溢出的问题
 */
var reverse = function(x) {
    let temp = 0
    while( x != 0){
        temp = temp*10 + x%10//每次取到余数后将他放至小位
        if(temp > 2**31 || temp < (-2)**31)return 0 //随时判断temp溢出边界的情况
        x = ~~(x / 10) //向下取整，去掉余数
    }
    return temp
};