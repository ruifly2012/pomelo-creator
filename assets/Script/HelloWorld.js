cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },

        btnLoad: {
            default: null,
            type: cc.Button
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;

        const atom = require("AtomFrame/Atom");
        atom.createAtom();
        clientEvent.init();

        //演示全局数据 gameConfMgr 配置的是游戏基础配置。 要添加存储、修改游戏业务运行是的数据用gameDataMgr
        window.gameConfMgr.TAG = "66666";
        console.log("gameConfMgr version" , window.gameConfMgr.getInfo("version"));
        console.log("gameConfMgr gamemode", window.gameConfMgr.getInfo("gamemode"));
        window.gameConfMgr.setInfo("version" , "1.2.0");
        window.gameConfMgr.setInfo("gamemode", "game");
        console.log("gameConfMgr version", window.gameConfMgr.getInfo("version"));
        console.log("gameConfMgr gamemode", window.gameConfMgr.getInfo("gamemode"));

        // window.memory.showMemoryStatus();
    
        //注册事件显示消息
        window.eventMgr.listen("_showMsg", (obj,data)=>{
            if(typeof(data) == "string"){
                this.label.string = data
            }else{
                console.log("data_ type: ", typeof(data));
            }
        }, this)
    
        //设置游戏运行中的数据
        window.gameDataMgr.setData("HP_NUM" , 1000);
        window.gameDataMgr.setData("MP_NUM" , 2000);

    },

    //HW 1 2 按钮事件
    onHW1: function () {
        window.eventMgr.notify("_onHW1", "来自 hello world 场景的消息1");
    },

    onHW2: function () {
        window.eventMgr.notify("_onHW2", "来自 hello world 场景的消息2");
    },

    onUITest: function () {
        window.UIMgr.openUI("uiTest", function(obj) {
        });
    },

    onLoadCommon: function () {
        window.resMgr.loadResByKey("common" , (index , total , err)=>{
            if(err != null || index == -1){
                console.log("=== 加载资源出现异常： ",err);
                return
            }
            console.log(" 资源加载进度 ： " ,index , total);
            if(index == total){
                var btn = this.btnLoad.getComponent(cc.Button)
                btn.normalSprite = window.spriteMgr.loadSpriteWithUrl("http://pic.qiantucdn.com/58pic/15/47/80/13s58PICQVG_1024.png", (sprite) => { 
                    if(sprite){
                        console.log("修改为网络图片")
                        btn.normalSprite = sprite
                    }
                }) //window.spriteMgr.getSpriteFrame("btn_blue")//window.spriteMgr.getAtlasSpriteFrame("common2","image-common2-youxizhong") //window.spriteMgr.getSpriteFrame("btn_blue")
                btn.pressedSprite = window.spriteMgr.getSpriteFrame("btn_blue")//window.spriteMgr.getAtlasSpriteFrame("common2", "image-common2-youxizhong")//window.spriteMgr.getSpriteFrame("btn_blue")
                btn.hoverSprite = window.spriteMgr.getSpriteFrame("btn_blue")//window.spriteMgr.getAtlasSpriteFrame("common2", "image-common2-youxizhong")// window.spriteMgr.getSpriteFrame("btn_blue")
                btn.disabledSprite = window.spriteMgr.getSpriteFrame("btn_blue")//window.spriteMgr.getAtlasSpriteFrame("common2", "image-common2-youxizhong")//window.spriteMgr.getSpriteFrame("btn_blue")
            }
        })  
    },
});
