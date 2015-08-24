(function() {
    // global 
    window.Device = window.Device || {};

    (function(Device) {
    	function _getPlatform() {
    		return ionic ? ionic.Platform.platform() : 'webview';
    	}
    })(Device)
})()
