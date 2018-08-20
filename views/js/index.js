$(document).ready(function () {
   /*var socket = new WebSockt('ws://www.baidu.com');//http->ws; https->wss
    socket.send('hello WebSockt');
    socket.onmessage = function(event){
        var data = event.data;
    }
    */
   
    $.ajax({
        type: "POST",
        url:'http://192.168.16.104:3001/s',
        // url:'http://192.168.56.1:3000/b',
        data:{
            userName:"stuart_1",
            password:123456
        },
        // contentType: "application/json;",
        dataType:"json",
        crossDomain: true,
        async: true,
        success:function (res) {
            console.log(res)
            $(".resdata").text(res.userName);
        },
        fail:function (res) {
            console.log(res)
        }
    })
})

function getData(dom) {
    console.log(dom);
}
function sort(arr) {
    this.arr = arr;
}
sort.prototype.insertSort = function (arr) {
    for(var i = 1;i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;
        while (arr[j] > key && j >= 0) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

var str = "我爱北京天安门，天安门上太阳升。";
var re = /北京|天安门/g;  //  找到北京 或者天安门 全局匹配
var result = str.replace(re,function (_str) {
    var rt = '';
    for(var i=0;i < _str.length;i++) {
        rt += "*";
    }
    return rt;
})
console.log(result);

var str1= '2013-6-7';
var re1 = /(\d+)(-)/g;
var index = 0;
var result1 = str1.replace(re1,function ($0, $1, $2) {
    return $1 +index++;
});
console.log(result1);
function getByClass(parent,classname){
    if(!parent.getElementsByClassName){
        return parent.getElementsByClassName(classname);
    }
    else{
        var results = new Array();//用来存储所有取到的class为box的元素
        var elems = parent.getElementsByTagName("*");
        for(var i =0;i<elems.length;i++){
            if(new RegExp('\\b' + classname + '\\b').test(elems[i].className)){
                results.push(elems[i]);
            }
        }
        return results;
    }
}

var str = 'aeesseessjdssskseesalssseeedkjsssdseeseeeeee';

var arr = str.split(''); //把字符串转换为数组
str = arr.sort().join(''); //首先进行排序，这样结果会把相同的字符放在一起，然后再转换为字符串
//alert(str);  // aaddjjkklsssssssssssssssss

var value = '';
var len = 0;
var re = /(\w)\1+/g;  //匹配字符，且重复这个字符，重复次数至少一次。
str.replace(re,function ($0, $1, $2, $3,$4,$5,$6) {
    if(len < $0.length) {
        value = $1;
        len = $0.length;
    } else if(len == $0.length) {
        value += '、' + $1;
    }
});
console.log("字符最多的是:"+value,"重复次数:"+len);