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











