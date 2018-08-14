
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:
    onLoad:function() {
        console.log("gameConfMgr version" , window.gameConfMgr.getInfo("version"));
        console.log("gameConfMgr gamemode", window.gameConfMgr.getInfo("gamemode"));

        var node = window.spriteMgr.createSprite("common2","image-common2-zhunbeizhong");
        node.setPosition(100,100);
        node.parent = this.node; // this.node 可以简写为 this

        window.audioMgr.setSoundSearchDir("common/audio")
    },

    //按钮事件监听
    obBtnOpenHelloWorld:function () {
        cc.director.loadScene("Scene/helloworld");
    },

    //
    onPlayMusic:function () {
        window.audioMgr.playMusic("loginMusic.mp3")
    },
    onPlayEffect: function () {
        window.audioMgr.playEffect("1gang.mp3")
    },
    onStopAll: function () {
        window.audioMgr.stopAll()
    },
    onSetVolumeEffect: function () {
        window.audioMgr.setEffectVolume(1)
    },
    onSetVolumeMusic: function () {
        window.audioMgr.setMusicVolume(1)
    },

    onWriteFile: function () {
        window.fileMgr.write2File("/Users/yajing/Desktop/websocket_node/##########kfile","/Users/yajing/Desktop/websocket_node/kfile.txt")
    },
    onReadFile: function () {
        window.fileMgr.readFile("/Users/yajing/Desktop/websocket_node/kfile.txt", (data)=>{
            console.log(" -- 这是读取出来的文件内容： ", data)
        })

        window.fileMgr.readFile("/Users/yajing/Desktop/websocket_node/world.txt", (data) => {
            console.log(" -- 这是读取出来的文件内容world： ", data)
        })
    },
    onWriteObjFile: function () {
        window.fileMgr.write2File({ "hello": "world" }, "/Users/yajing/Desktop/websocket_node/world.txt")
    },

    onMd5Str: function () {
        console.log(window.md5.md5Str("cocos_creator") ); 
        console.log(window.md5.md5Str("cocos_creator_hello")); 
    },

    onFileMd5: function () {
        console.log(window.md5.md5File("/Users/yajing/Desktop/websocket_node/world.txt") );
    },
});
