
const Atom = {
    createAtom(){
        console.log("!---- AtomFrame ----!")

        // //计时器 timer
        var timerMgr = require("AtomFrame/timerMgr");
        window.timerMgr = new timerMgr();

        // md5
        var md5 = require("AtomFrame/md5");
        window.md5 = new md5();

        //状态机 gamestate
        var gameState = require("AtomFrame/gameState");
        window.gameState = new gameState();

        //游戏配置单例
        var gameConfMgr = require("AtomFrame/gameConfMgr");
        window.gameConfMgr = new gameConfMgr();

        //事件管理器 event
        var eventMgr = require("AtomFrame/eventMgr");
        window.eventMgr = new eventMgr();

        //文本信息数据 msgmgr
        var msgMgr = require("AtomFrame/msgMgr");
        window.msgMgr = new msgMgr();

        //文件管理
        // var fileMgr = require("AtomFrame/fileMgr");
        // window.fileMgr = new fileMgr();
        
        //sprite管理 
        var spriteMgr = require("AtomFrame/spriteMgr");
        window.spriteMgr = new spriteMgr();

        //音频管理 audio
        var audioMgr = require("AtomFrame/audioMgr");
        window.audioMgr = new audioMgr();

        //预设管理器 prefab管理器mgr
        var prefabMgr = require("AtomFrame/prefabMgr");
        window.prefabMgr = new prefabMgr();

        //特效 effect 
        var effectMgr = require("AtomFrame/effectMgr");
        window.effectMgr = new effectMgr();

        //动画 ani
        var animateMgr = require("AtomFrame/animateMgr");
        window.animateMgr = new animateMgr();

        //resource 统一管理资源 audioMgr、  prefabMgr 、effectMgr 、animateMgr
        var resMgr = require("AtomFrame/resMgr");
        window.resMgr = new resMgr();

        //UI管理器 uimgr
        var UIMgr = require("AtomFrame/UIMgr");
        window.UIMgr = new UIMgr();

        //公共工具函数 comfun
        var comFunMgr = require("AtomFrame/comFunMgr");
        window.comFunMgr = new comFunMgr();

        //游戏数据 gameData
        var gameDataMgr = require("AtomFrame/gameDataMgr");
        window.gameDataMgr = new gameDataMgr();

        //平台接口管理 platform
        // var platformMgr = require("AtomFrame/platformMgr");
        // window.platformMgr = new platformMgr();

        //网络管理 net
        var gameNetMgr = require("AtomFrame/gameNetMgr");
        window.gameNetMgr = new gameNetMgr();

        //socekt
        var socketMgr = require("AtomFrame/socketMgr");
        window.socketMgr = new socketMgr();

        //热更新 hotupdate
        var hotUpdateMgr = require("AtomFrame/hotUpdateMgr");
        window.hotUpdateMgr = new hotUpdateMgr();

        //内存探测器
        //var memory = require("AtomFrame/memoryDetector");
        //window.memory = new memory();

        ///以下补充游戏内容相关的对象///
    },
};

module.exports = Atom;