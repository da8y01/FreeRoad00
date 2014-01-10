function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.txtUser = Ti.UI.createTextField({
        id: "txtUser",
        hintText: "Ingresar usuario"
    });
    $.__views.index.add($.__views.txtUser);
    $.__views.txtPass = Ti.UI.createTextField({
        id: "txtPass",
        hintText: "Ingresar contraseña",
        passwordMask: "true"
    });
    $.__views.index.add($.__views.txtPass);
    $.__views.btnDoLogin = Ti.UI.createButton({
        title: "Entrar",
        id: "btnDoLogin"
    });
    $.__views.index.add($.__views.btnDoLogin);
    $.__views.lblRegister = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Registro",
        id: "lblRegister"
    });
    $.__views.index.add($.__views.lblRegister);
    $.__views.lblForgot = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Olvido de contraseña",
        id: "lblForgot"
    });
    $.__views.index.add($.__views.lblForgot);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.include("/goto.js");
    Alloy.Globals.User = "admin";
    Alloy.Globals.Pass = "admin";
    var fnOpenRegister = function() {
        goTo({
            viewName: "register",
            currentPosition: $.index
        });
    };
    var fnOpenForgot = function() {
        goTo({
            viewName: "forgot",
            currentPosition: $.index
        });
    };
    var fnDoLogin = function() {
        $.txtUser.value === Alloy.Globals.User && $.txtPass.value === Alloy.Globals.Pass ? goTo({
            viewName: "city",
            currentPosition: $.index
        }) : alert("[ERROR] Credenciales invalidas.");
    };
    $.lblRegister.addEventListener("click", fnOpenRegister);
    $.lblForgot.addEventListener("click", fnOpenForgot);
    $.btnDoLogin.addEventListener("click", fnDoLogin);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;