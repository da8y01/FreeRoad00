function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "forgot";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.forgot = Ti.UI.createWindow({
        layout: "vertical",
        id: "forgot"
    });
    $.__views.forgot && $.addTopLevelView($.__views.forgot);
    $.__views.txtEmail = Ti.UI.createTextField({
        id: "txtEmail",
        hintText: "Cual es su email?"
    });
    $.__views.forgot.add($.__views.txtEmail);
    $.__views.btnForgot = Ti.UI.createButton({
        title: "Recordar",
        id: "btnForgot"
    });
    $.__views.forgot.add($.__views.btnForgot);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var fnDoForgot = function() {
        alert("AQUI SE ENVIARIAN LAS CREDENCIALES AL EMAIL.");
    };
    $.btnForgot.addEventListener("click", fnDoForgot);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;