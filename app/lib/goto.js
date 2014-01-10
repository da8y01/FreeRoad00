function goTo(params) {
	var closeWindow = (params.closeAfter===false)?false:true;
	var nextview;
	var transitionOpenType;
	var transitionCloseType;
	
	if(typeof params.viewName === "string")
	{	var controller;
		if(params.arguments)
		{
			controller = Alloy.createController(params.viewName, params.arguments);
		}
		else
		{
			controller = Alloy.createController(params.viewName);
		}
		nextview = controller.getView();
	}
	else if(typeof params.viewName==="object")
	{
		nextview = params.viewName;
	}
	if (params.direction == "prev")
	{
		transitionType = Titanium.UI.iPhone.AnimationStyle.CURL_DOWN;
		
		/*
		nextParams.right = Ti.Platform.displayCaps.platformWidth;
		params.currentPosition.left = 0;
		anim.left = Ti.Platform.displayCaps.platformWidth;
		animation.right = 0;
		*/
	} else {
		
		transitionType = Titanium.UI.iPhone.AnimationStyle.CURL_UP;
		/*
		nextParams.right = Ti.Platform.displayCaps.platformWidth *-1;
		params.currentPosition.right = 0;
		animation.right = 0;
		anim.right = Ti.Platform.displayCaps.platformWidth;
		*/
	}
	if(closeWindow)
	{
		nextview.addEventListener("open", close);
	}
	nextview.open({transition:transitionType});
	

	
	function close()
	{
		nextview.removeEventListener("open", close);
		params.currentPosition.close();
		params.currentPosition = null;

	}
}

if (!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}