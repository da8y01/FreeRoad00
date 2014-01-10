exports.definition = {
    config: {
        columns: {
            name: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "City"
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

model = Alloy.M("City", exports.definition, []);

collection = Alloy.C("City", exports.definition, model);

exports.Model = model;

exports.Collection = collection;