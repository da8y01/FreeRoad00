Ti.include('/goto.js');

Alloy.Globals.User = 'admin';
Alloy.Globals.Pass = 'admin';

var fnOpenRegister = function() {
	//Alloy.createController('register').getView().open();
	goTo({viewName:"register", currentPosition:$.index});
};
var fnOpenForgot = function() {
	//Alloy.createController('forgot').getView().open();
	goTo({viewName:"forgot", currentPosition:$.index});
};

var fnDoLogin = function() {
	if ($.txtUser.value===Alloy.Globals.User && $.txtPass.value===Alloy.Globals.Pass) {
		//Alloy.createController('city').getView().open();
		goTo({viewName:"city", currentPosition:$.index});
	}
	else {
		alert('[ERROR] Credenciales invalidas.');
	}
};

/*
function fnOpenRegister() {
	Alloy.createController('register').getView().open();
}
function fnOpenForgot() {
	Alloy.createController('forgot').getView().open();
}

function fnDoLogin() {
	if ($.txtUser.value===Alloy.Globals.User && $.txtPass.value===Alloy.Globals.Pass) {
		Alloy.createController('city').getView().open();
	}
	else {
		alert('[ERROR] Credenciales invalidas.');
	}
}
*/

$.lblRegister.addEventListener("click", fnOpenRegister);
$.lblForgot.addEventListener("click", fnOpenForgot);

$.btnDoLogin.addEventListener("click", fnDoLogin);

$.index.open();
