function goTo(params) {
    function close() {
        nextview.removeEventListener("open", close);
        params.currentPosition.close();
        params.currentPosition = null;
    }
    var closeWindow = false === params.closeAfter ? false : true;
    var nextview;
    if ("string" == typeof params.viewName) {
        var controller;
        controller = params.arguments ? Alloy.createController(params.viewName, params.arguments) : Alloy.createController(params.viewName);
        nextview = controller.getView();
    } else "object" == typeof params.viewName && (nextview = params.viewName);
    transitionType = "prev" == params.direction ? Titanium.UI.iPhone.AnimationStyle.CURL_DOWN : Titanium.UI.iPhone.AnimationStyle.CURL_UP;
    closeWindow && nextview.addEventListener("open", close);
    nextview.open({
        transition: transitionType
    });
}

String.prototype.format || (String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
        return "undefined" != typeof args[number] ? args[number] : match;
    });
});