exports.definition = {
    config: {
        columns: {
            name: "text",
            pass: "text",
            email: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "User"
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

model = Alloy.M("User", exports.definition, []);

collection = Alloy.C("User", exports.definition, model);

exports.Model = model;

exports.Collection = collection;