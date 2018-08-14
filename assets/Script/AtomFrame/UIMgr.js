
cc.Class({
    extends: cc.Component,

    properties: {
        TAG: "UIMgr",
        uiList: [],
    },

    ctor: function () {
        console.log("-new:" + this.TAG);
    },

    onLoad: function () {
        console.log("-load:" + this.TAG);
    },

    onDestroy: function () {
        console.log("-destory:" + this.TAG);
    },

    openUI: function (uiName, callBack) {
        cc.loader.loadRes('ui/' + uiName, function(err, prefab) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
    
            var temp = cc.instantiate(prefab);
            temp.parent = cc.Canvas.instance.node;
            this.uiList.push(temp);
    
            for (var i = 0; i < this.uiList.length; i++) {
                if (this.uiList[i] && this.uiList[i].name !== "") {
                    var targetUI = this.uiList[i].getComponent("uiPanel");
                    if (targetUI && targetUI.isTop) {
                        targetUI.node.setSiblingIndex(Number.MAX_SAFE_INTEGER);
                    }
                }
            }
            // event--
            if (callBack) {
                callBack(temp);
            }
        });
    },

    closeUI: function (targetUI) {
        for (var i = this.uiList.length - 1; i >= 0; i--) {
            if (this.uiList[i] && targetUI === this.uiList[i]) {
                targetUI.destroy();
                this.uiList.splice(i, 1);
                break;
            }
        }
    },

    findUI: function (uiName) {
        for (var i = this.uiList.length - 1; i >= 0; i--) {
            var temp = this.uiList[i];
            if (temp && temp.name === uiName) {
                return temp;
            }
        }
        return null;
    }

});
