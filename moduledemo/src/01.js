function sum(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

//设置那些方法可以被其他js文件调用
module.exports = {
    sum,
    sub
}