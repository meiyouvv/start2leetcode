/*
通过栈的先进后出，后进先出的原理，遇到匹配的括号就出栈，否则就进栈。
*/
var isValid = function(s) {
    const stack = []
    let map = new Map()
    map.set("}","{")
    map.set(")","(")
    map.set("]","[")
    for(let val of s){
        if(map.get(val)){
            if(map.get(val) != stack[stack.length-1])return false
            stack.pop()
        } else{
            stack.push(val)
        }
    }
    return stack.length == 0 //如果栈的长度为0，说明没有不匹配的括号了
};