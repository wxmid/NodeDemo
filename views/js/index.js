$(document).ready(function () {
   /*var socket = new WebSockt('ws://www.baidu.com');//http->ws; https->wss
    socket.send('hello WebSockt');
    socket.onmessage = function(event){
        var data = event.data;
    }
    */
   
    $.ajax({
        type: "POST",
        url:'http://192.168.16.104:3000/s',
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
