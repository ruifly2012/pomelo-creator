const pomelo = require('pomelo-weixin-client');

cc.Class({
    extends: cc.Component,

    properties: {
    },

    start () {

        var entry = function (data) {
            console.log(data);
            console.log('entry')
        };

        pomelo.init({host: '172.16.0.142', 
            port: 3250,  
            debugMode: true,
            browserWS: true,
            // 重连相关配置
            reconnect: true,
            reconnectDelay: 3000,
            maxReconnectAttempts: 3
        }, function () {

            var UID = Math.random().toString().slice(-6);

            pomelo.request("connector.connector.entry", {
                name:'zr',
                uid: UID,
                headUrl:'baidu',
                sex:1,
                fangka:10,
                ip:'127.0.0.1'
            }, entry);
        });

        pomelo.on("disconnect", (data)=>{
            console.log("disconnect")
        });

        pomelo.on("close", (data)=>{
            console.log("close")
        });

        pomelo.on("io-error", (data)=>{
            console.log("io-error")
        });

        pomelo.on("onKick", (data)=>{
            console.log("onKick")
        });

        pomelo.on("error", (data)=>{
            console.log("error" + data)
        });

        pomelo.on("actionprompt", (data)=> {
            console.log("actionprompt")
            console.log(data)
        })

        pomelo.on("actionresponse", (data)=> {
            console.log("actionresponse")
            console.log(data)
        })
    },

    createMj () {
        pomelo.request("mjgame.mjgame.createroom", {
            version:"12234",
            clubId:1,
        }, (data)=>{

            console.log('mjgame.mjgame.createroom------')
            console.log(data);
        });
    },

    enterMjRoom () {
        pomelo.request("mjgame.mjgame.enterroom", {
            roomid:111111,
        }, (data)=>{

            console.log('mjgame.mjgame.enterroom------')
            console.log(data);
        });
    },

    ready () {
        pomelo.request("mjgame.mjgame.ready", {
        }, (data)=>{

            console.log('mjgame.mjgame.ready------')
            console.log(data);
        });
    }

    // update (dt) {},
});
