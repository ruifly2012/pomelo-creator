
cc.Class({
    extends: cc.Component,

    properties: {
        spNode:{
            default:null,
            type:cc.Prefab,
        },
        desc:"this is btnController"
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad:function() {
        console.log("LOAD --- ", this.desc);
        window.eventMgr.listen("_onHW1", (obj, data) => {
            console.log("########### _onHW1 ", this.desc , data);
        }, this);

        window.eventMgr.listen("_onHW2", (obj, data) => {
            console.log("########### _onHW2 ", this.desc, data);
        }, this);



        //加载预设资源
        //window.prefabMgr.loadAllPrefab([{ key: "spNode", path:"prefabs/spNode"}], (index)=>{ console.log(index, "loadfinish" ) });
    },


    //按钮监听事件
    onBtnHttpGet:function () {
        window.gameNetMgr.httpGet("http://www.baidu.com"   , (_bool, _respone ,_status) => { 
            if(_bool == true){
                window.eventMgr.notify("_showMsg", _respone)
            }else{
                window.eventMgr.notify("_showMsg", "HTTP FAILED : STATUS ", _respone , _status )
            }
        });
    },
    onBtnHttpPost: function () {
        window.gameNetMgr.httpPost("http://www.baidu.com", (_bool, _respone, _status) => {
            if (_bool == true) {
                window.eventMgr.notify("_showMsg", _respone)
            } else {
                window.eventMgr.notify("_showMsg", "HTTP FAILED : STATUS ", _respone , _status)
            }
        });
    },
    onBtnHttpTimeOut: function () {
        window.gameNetMgr.httpGet("http://www.ba222idu.com", (_bool, _respone, _status) => { 
            if (_bool == true) {
                window.eventMgr.notify("_showMsg", _respone)
            } else {
                window.eventMgr.notify("_showMsg", "HTTP FAILED : STATUS ", _respone , _status)
            }
        });
    },
    onBtnNotify: function () {
        window.eventMgr.notify("_showMsg" , this.desc);
    },
    onBtnRemoveObjNotify: function () {
        window.eventMgr.unListenByObj(this)
    },
    onBtnRemoveEventNotify: function () {
        window.eventMgr.unListenAllByKey("_onHW1")
    },
    onBtnCreateTimerRe: function () {
        window.timerMgr.registerTask("task1", window.timerMgr.TASK_TYPE_RE, () => { console.log(this.desc, " ---- task1") }, 1)
        window.timerMgr.registerTask("task3", window.timerMgr.TASK_TYPE_RE, () => { console.log(this.desc, " ---- task3") }, 1)
        window.timerMgr.registerTask("task5", window.timerMgr.TASK_TYPE_RE, () => { console.log(this.desc, " ---- task5") }, 1)
        window.timerMgr.registerTask("task7", window.timerMgr.TASK_TYPE_RE, () => { console.log(this.desc, " ---- task7") }, 1) 
    },
    onBtnCreateTimerOne: function () {
        window.timerMgr.registerTask("task2", window.timerMgr.TASK_TYPE_ONE, () => { console.log(this.desc, " ---- task2") }, 1)
        window.timerMgr.registerTask("task4", window.timerMgr.TASK_TYPE_ONE, () => { console.log(this.desc, " ---- task4") }, 1)
        window.timerMgr.registerTask("task6", window.timerMgr.TASK_TYPE_ONE, () => { console.log(this.desc, " ---- task6") }, 1)
    },
    onBtnClearAllTask: function () {
        window.timerMgr.cleanAllTask();
    },
    onBtnCreateNode: function () {
        this.nodelist = []
        for (var index = 0; index < 1000; index++) {
            var node = window.prefabMgr.getPrefabObj("spNode"); //cc.instantiate(this.spNode); //
            node.parent = cc.director.getScene()
            node.setPosition(100, 100)
            var label = node.getChildByName("index_label")
            var text = label.getComponent(cc.Label);
            text.string = index;

            this.nodelist.push(node)
        }
    },
    onBtnRemoveNode: function () {
        for (var index = 0; index < this.nodelist.length; index++) {
            var element = this.nodelist[index];
            // element.removeFromParent()
            window.prefabMgr.holdPrefabObj("spNode", element)
        }   
    },
    onBtnShowGameData: function () {
        console.log("gameConfMgr version" , window.gameConfMgr.getInfo("version"));
        console.log("gameConfMgr gamemode", window.gameConfMgr.getInfo("gamemode"));  

        console.log("gameDataMgr HP_NUM", window.gameDataMgr.getData("HP_NUM"));
        console.log("gameDataMgr MP_NUM", window.gameDataMgr.getData("MP_NUM"));  
    },
    onBtnOpenGameScene: function () {
        cc.director.loadScene("Scene/gameScene");
    },
});
