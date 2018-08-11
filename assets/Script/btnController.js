
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
        cc.Atom.eventMgr.listen("_onHW1", (obj, data) => {
            console.log("########### _onHW1 ", this.desc , data);
        }, this);

        cc.Atom.eventMgr.listen("_onHW2", (obj, data) => {
            console.log("########### _onHW2 ", this.desc, data);
        }, this);

        //加载预设资源
        cc.Atom.prefabMgr.loadAllPrefab([{ key: "spNode", path:"common/prefabs/spNode"}], (index)=>{ console.log(index, "loadfinish" ) });
    },


    //按钮监听事件
    onBtnHttpGet:function () {
        cc.Atom.gameNetMgr.httpGet("http://www.baidu.com"   , (_bool, _respone ,_status) => { 
            if(_bool == true){
                cc.Atom.eventMgr.notify("_showMsg", _respone)
            }else{
                cc.Atom.eventMgr.notify("_showMsg", "HTTP FAILED : STATUS ", _respone , _status )
            }
        });
    },
    onBtnHttpPost: function () {
        cc.Atom.gameNetMgr.httpPost("http://www.baidu.com", (_bool, _respone, _status) => {
            if (_bool == true) {
                cc.Atom.eventMgr.notify("_showMsg", _respone)
            } else {
                cc.Atom.eventMgr.notify("_showMsg", "HTTP FAILED : STATUS ", _respone , _status)
            }
        });
    },
    onBtnHttpTimeOut: function () {
        cc.Atom.gameNetMgr.httpGet("http://www.ba222idu.com", (_bool, _respone, _status) => { 
            if (_bool == true) {
                cc.Atom.eventMgr.notify("_showMsg", _respone)
            } else {
                cc.Atom.eventMgr.notify("_showMsg", "HTTP FAILED : STATUS ", _respone , _status)
            }
        });
    },
    onBtnNotify: function () {
        cc.Atom.eventMgr.notify("_showMsg" , this.desc);
    },
    onBtnRemoveObjNotify: function () {
        cc.Atom.eventMgr.unListenByObj(this)
    },
    onBtnRemoveEventNotify: function () {
        cc.Atom.eventMgr.unListenAllByKey("_onHW1")
    },
    onBtnCreateTimerRe: function () {
        cc.Atom.timerMgr.registerTask("task1", cc.Atom.timerMgr.TASK_TYPE_RE, () => { console.log(this.desc, " ---- task1") }, 1)
        cc.Atom.timerMgr.registerTask("task3", cc.Atom.timerMgr.TASK_TYPE_RE, () => { console.log(this.desc, " ---- task3") }, 1)
        cc.Atom.timerMgr.registerTask("task5", cc.Atom.timerMgr.TASK_TYPE_RE, () => { console.log(this.desc, " ---- task5") }, 1)
        cc.Atom.timerMgr.registerTask("task7", cc.Atom.timerMgr.TASK_TYPE_RE, () => { console.log(this.desc, " ---- task7") }, 1) 
    },
    onBtnCreateTimerOne: function () {
        cc.Atom.timerMgr.registerTask("task2", cc.Atom.timerMgr.TASK_TYPE_ONE, () => { console.log(this.desc, " ---- task2") }, 1)
        cc.Atom.timerMgr.registerTask("task4", cc.Atom.timerMgr.TASK_TYPE_ONE, () => { console.log(this.desc, " ---- task4") }, 1)
        cc.Atom.timerMgr.registerTask("task6", cc.Atom.timerMgr.TASK_TYPE_ONE, () => { console.log(this.desc, " ---- task6") }, 1)
    },
    onBtnClearAllTask: function () {
        cc.Atom.timerMgr.cleanAllTask();
    },
    onBtnCreateNode: function () {
        this.nodelist = []
        for (var index = 0; index < 1000; index++) {
            var node = cc.Atom.prefabMgr.getPrefabObj("spNode"); //cc.instantiate(this.spNode); //
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
            cc.Atom.prefabMgr.holdPrefabObj("spNode", element)
        }   
    },
    onBtnShowGameData: function () {
        console.log("gameConfMgr version" , cc.Atom.gameConfMgr.getInfo("version"));
        console.log("gameConfMgr gamemode", cc.Atom.gameConfMgr.getInfo("gamemode"));  

        console.log("gameDataMgr HP_NUM", cc.Atom.gameDataMgr.getData("HP_NUM"));
        console.log("gameDataMgr MP_NUM", cc.Atom.gameDataMgr.getData("MP_NUM"));  
    },
    onBtnOpenGameScene: function () {
        cc.director.loadScene("Scene/gameScene");
    },
});
