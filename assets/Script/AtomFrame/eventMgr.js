
cc.Class({
    extends: cc.Component,

    properties: {
        TAG: "eventMgr",
    },

    ctor: function () {
        console.log("-new:" + this.TAG);
        this.eventBuff = {};
        this.fezzedEventBuff = {};
    },

    onLoad: function () {
        console.log("-load:" + this.TAG);
    },

    onDestroy: function () {
        console.log("-destory:" + this.TAG);
    },

    listen: function (_eventName , _callfunc , _target) {
        if (this.eventBuff[_eventName] == null ){
            this.eventBuff[_eventName] = []
        }

        var item = {}
        item.target = _target;
        item.callfunc = _callfunc;
        this.eventBuff[_eventName].push(item)
    },

    unListenAllByKey: function (_eventName) {
        this.eventBuff[_eventName] = null
    },

    unListenByObj: function (_target) {
        for (var key in this.eventBuff) {
            if (this.eventBuff.hasOwnProperty(key)) {
                var itemlist = this.eventBuff[key];
                //
                if(itemlist != null){
                    for (var index = itemlist.length - 1; index >= 0; index--) {
                        var element = itemlist[index];
                        if (element != null && element.target === _target) {
                            itemlist.splice(index, 1);
                        }
                    }
                }       
            }
        }
    },

    unListen: function (_eventName, _target) {
        var itemlist = this.eventBuff[_eventName];
        if(itemlist != null){
            for (var index = 0; index < itemlist.length; index++) {
                var element = itemlist[index];
                if (element != null && element.target == _target) {
                    itemlist.splice(index, 1);
                    index--;
                }
            }
        }
    },

    notify: function (_eventName , data) {
        var itemlist = this.eventBuff[_eventName];
        if (itemlist != null) {
            for (var index = 0; index < itemlist.length; index++) {
                var element = itemlist[index];
                // console.log(" -- the obj :",element.target);
                element.callfunc(element.target,data);
            }
        }else{
            console.log("_event null : ",_eventName);
        }
    }
 
    // setInfo: function (_key, _value) {
    //     this.infoBuff.forEach(function (element) {
    //         if (element.key == _key) {
    //             element.vaule = _value;
    //             return;
    //         }
    //     }, this);

    //     console.log("add conf : key:" + _key + "  value: " + _value)
    //     var item = { key: _key, value: _value };
    //     this.infoBuff.push(item);
    // },

    // getInfo: function (_key) {
    //     var result = null;
    //     this.infoBuff.forEach(function (element) {
    //         if (element.key == _key) {//element.key.localeCompare(_key) == 0
    //             result = element.value;
    //             return;
    //         }
    //     }, this);
    //     console.log(" element velue  " + result);
    //     return result;
    // },
});
