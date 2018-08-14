var uiPanel = require("uiPanel");
cc.Class({
    extends: uiPanel,
    properties: {},

    onLoad() {
        this._super();
        this.nodeDict["start"].on("click", this.startGame, this);
        this.nodeDict["close"].on("click", this.onCloseUI, this);
    },

    startGame() {
        console.log('start game ')
    },

    onCloseUI: function () {
        window.UIMgr.closeUI("uiTest");
        this.node.destroy();
    },
});
