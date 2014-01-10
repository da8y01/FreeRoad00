function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.register = Ti.UI.createWindow({
        layout: "vertical",
        id: "register"
    });
    $.__views.register && $.addTopLevelView($.__views.register);
    $.__views.txtEmail = Ti.UI.createTextField({
        id: "txtEmail",
        hintText: "Ingresar email"
    });
    $.__views.register.add($.__views.txtEmail);
    $.__views.txtUser = Ti.UI.createTextField({
        id: "txtUser",
        hintText: "Ingresar usuario"
    });
    $.__views.register.add($.__views.txtUser);
    $.__views.txtPass = Ti.UI.createTextField({
        id: "txtPass",
        hintText: "Ingresar contraseña",
        passwordMask: "true"
    });
    $.__views.register.add($.__views.txtPass);
    $.__views.btnRegister = Ti.UI.createButton({
        title: "Registrar",
        id: "btnRegister"
    });
    $.__views.register.add($.__views.btnRegister);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.user = Alloy.createCollection("User");
    var users = Alloy.Collections.user;
    var fnDoRegister = function() {
        Ti.API.info("[CUSTOM] register.js fnDoRegister starts.");
        var user = Alloy.createModel("User", {
            name: $.txtUser.value,
            email: $.txtEmail.value,
            pass: $.txtPass.value
        });
        users.add(user);
        user.save();
        users.fetch();
        Ti.API.info("[CUSTOM] users.length: " + users.length);
        Ti.API.info("[CUSTOM] register.js fnDoRegister ends.");
        closeWindow();
    };
    $.btnRegister.addEventListener("click", fnDoRegister);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;