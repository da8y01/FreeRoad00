exports.definition = {
    config: {
        columns: {
            text: "text",
            event_type: "integer",
            date: "datetime",
            trues: "integer",
            falses: "integer",
            user_id: "integer",
            city_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "Post"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Post", exports.definition, []);

collection = Alloy.C("Post", exports.definition, model);

exports.Model = model;

exports.Collection = collection;