exports.definition = {
	config: {
		columns: {
		    "text": "text",
		    "event_type": "integer",
		    "date": "datetime",
		    "trues": "integer",
		    "falses": "integer",
		    "user_id": "integer",
		    "city_id": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "Post"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};