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
    
        var onNewUser = function (data) {
            console.log(data);
            console.log('onNewUser')
        };
    
        var onMembers = function (data) {
            console.log(data);
            console.log('onMembers')
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
            console.log("initialized");

            pomelo.on("onNewUser", onNewUser);
            pomelo.on("onMembers", onMembers);
            pomelo.request("connector.connector.entry", {name:'zr',uid:1000,headUrl:'baidu',sex:1,fangka:10,ip:'127.0.0.1'}, entry);
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
    },

    onMessage (data) {
        console.log(data)
    },

    join () {
        pomelo.request("lobby.lobby.join", {}, (data)=>{

            console.log('join------')

            if(data.code === 'PIT-000') {
                pomelo.on('onMessage', this.onMessage);
            }
        });
    },

    joinNN () {
        pomelo.request("nngame.nngame.join", {}, (data)=>{

            console.log('join nngame------')

            if(data.code === 'PIT-000') {
                pomelo.on('onMessage', this.onMessage);
            }
        });
    },

    setsessiondata () {
        pomelo.request("connector.setsessiondata", {'data':'aa'}, (data)=>{
            console.log(data)
            console.log('setsessiondata')
        });
    },

    getsessiondata () {
        pomelo.request("connector.getsessiondata", {}, (data)=>{
            console.log(data)
            console.log('getsessiondata')
        });
    },

    getroomsessiondata () {
        pomelo.request("lobby.lobby.getsessiondata", {}, (data)=>{
            console.log(data)
            console.log('getroomsessiondata')
        });
    },

    message () {
        pomelo.notify("lobby.lobby.message", {name: 'this.nickname', content: 'this.inputMessage'});
    }

    

    // update (dt) {},
});
