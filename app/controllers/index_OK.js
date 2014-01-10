Alloy.Collections.post = Alloy.createCollection('Post');
var posts = Alloy.Collections.post;

var addPost = function () {
	alert('[CUSTOM] Enters.');
	
    //var posts = Alloy.Collections.post;

    // Create a new model for the todo collection
    var post = Alloy.createModel('Post', {
        text : 'texto de prueba 1',
        event_type : 1,
        date : '2014-01-10 11:51:00',
        trues : 1,
        falses : 1,
        user_id : 1,
        city_id : 1
    });

    // add new model to the global collection
    posts.add(post);

    // save the model to persistent storage
    post.save();

    // reload the tasks
    posts.fetch();

    //closeWindow();
    Ti.API.info('[CUSTOM] posts.length: '+posts.length);
    alert('[CUSTOM] Exits.');
};

function doClick(e) {
    alert($.label.text);
}

$.btnAddPost.addEventListener("click", addPost);

//Ti.API.info('[CUSTOM] Texto de post con id 1:'+posts.get(1).text);
Ti.API.info('[CUSTOM] posts.length: '+posts.length);

$.index.open();
