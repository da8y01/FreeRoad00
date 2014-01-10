var fnOpenPosts = function() {
	Alloy.createController('post').getView().open();
};

$.postTable.addEventListener("click", fnOpenPosts);

var args = arguments[0] || {};