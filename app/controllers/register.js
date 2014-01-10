Alloy.Collections.user = Alloy.createCollection('User');
var users = Alloy.Collections.user;

var fnDoRegister = function() {
	Ti.API.info('[CUSTOM] register.js fnDoRegister starts.');
	
	// Create a new model for the user collection
    var user = Alloy.createModel('User', {
        name : $.txtUser.value,
        email : $.txtEmail.value,
        pass : $.txtPass.value
    });

    // add new model to the global collection
    users.add(user);

    // save the model to persistent storage
    user.save();

    // reload the users
    users.fetch();
    
    Ti.API.info('[CUSTOM] users.length: '+users.length);
    Ti.API.info('[CUSTOM] register.js fnDoRegister ends.');

    closeWindow();
};

$.btnRegister.addEventListener("click", fnDoRegister);

var args = arguments[0] || {};