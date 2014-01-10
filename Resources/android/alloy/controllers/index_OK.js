function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index_OK";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index_OK = Ti.UI.createWindow({
        layout: "vertical",
        id: "index_OK"
    });
    $.__views.index_OK && $.addTopLevelView($.__views.index_OK);
    $.__views.areaPost = Ti.UI.createTextArea({
        id: "areaPost",
        hintText: "Que evento observo?"
    });
    $.__views.index_OK.add($.__views.areaPost);
    $.__views.btnAddPost = Ti.UI.createButton({
        title: "Nuevo",
        id: "btnAddPost"
    });
    $.__views.index_OK.add($.__views.btnAddPost);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.post = Alloy.createCollection("Post");
    var posts = Alloy.Collections.post;
    var addPost = function() {
        alert("[CUSTOM] Enters.");
        var post = Alloy.createModel("Post", {
            text: "texto de prueba 1",
            event_type: 1,
            date: "2014-01-10 11:51:00",
            trues: 1,
            falses: 1,
            user_id: 1,
            city_id: 1
        });
        posts.add(post);
        post.save();
        posts.fetch();
        Ti.API.info("[CUSTOM] posts.length: " + posts.length);
        alert("[CUSTOM] Exits.");
    };
    $.btnAddPost.addEventListener("click", addPost);
    Ti.API.info("[CUSTOM] posts.length: " + posts.length);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;