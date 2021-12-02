/*
该题可以使用一个巧妙的方法，默认该罗马数字写法是正确的，
可以不用考虑该特殊的规则，只考虑小的数比大的数靠前的情况即可
*/
var romanToInt = function(s) {
    const map = new Map()
    map.set("I",1)
    map.set("V",5)
    map.set("X",10)
    map.set("L",50)
    map.set("C",100)
    map.set("D",500)
    map.set("M",1000)
    let result = 0
    let a = s.split("")
    for(let i=0;i<a.length;i++){
        let temp = map.get(a[i])
        if(temp<map.get(a[i+1])){
            result -= temp
        }else{
            result += temp
        }
    }
    return result
};