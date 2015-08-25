(function() {
    // global 
    window.Native = window.Native || {};
    (function(Native) {

        Native.getAuth = function(prefix) {
            _nativeProxy('getAuth', [prefix]);
            return _getAuth(prefix);
        }

        Native.run = function(funcName, paramArr) {
            _nativeProxy(funcName, paramArr);
        }

        function _nativeProxy(func, params) {
            var platform = _getPlatform();
            switch (platform) {
                case 'ios':
                    console.log('ios://' + func + '/' + params.join('/'))
                    window.location.href = 'ios://' + func + '/' + params.join('/');
                    break;
                case 'android':
                    Device[func].apply(this, params);
                    break;
                default:
                    console.log('now is webview.');
                    break;
            }
        }

        function _getPlatform() {
            window.NativePlatform = window.NativePlatform || ionic ? ionic.Platform.platform() : 'webview'
            return window.NativePlatform;
        }

        function _getAuth(prefix) {
            var userInfo = {};
            switch (prefix) {
                case 'patient':
                    userInfo.auth = localStorage.getItem(prefix + '.auth')
                    userInfo.patientId = localStorage.getItem(prefix + '.patientId')
                    userInfo.patientName = localStorage.getItem(prefix + '.patientName')
                    userInfo.patientNickName = localStorage.getItem(prefix + '.patientNickName')
                    userInfo.patientRealName = localStorage.getItem(prefix + '.patientRealName')
                    userInfo.doctorId = localStorage.getItem(prefix + '.doctorId')
                    userInfo.doctorName = localStorage.getItem(prefix + '.doctorName')
                    userInfo.doctorNickName = localStorage.getItem(prefix + '.doctorNickName')
                    userInfo.assistantId = localStorage.getItem(prefix + '.assistantId')
                    userInfo.assistantName = localStorage.getItem(prefix + '.assistantName')
                    userInfo.assistantNickName = localStorage.getItem(prefix + '.assistantNickName')
                    break;
                case 'docotr':
                    userInfo.auth = localStorage.getItem(prefix + '.auth')
                    userInfo.doctorId = localStorage.getItem(prefix + '.doctorId')
                    userInfo.doctorName = localStorage.getItem(prefix + '.doctorName')
                    userInfo.doctorNickName = localStorage.getItem(prefix + '.doctorNickName')
                    userInfo.assistantId = localStorage.getItem(prefix + '.doctorId')
                    break;
                case 'assistant':
                    userInfo.auth = localStorage.getItem(prefix + '.auth')
                    userInfo.assistantId = localStorage.getItem(prefix + '.assistantId')
                    userInfo.assistantName = localStorage.getItem(prefix + '.assistantName')
                    userInfo.assistantNickName = localStorage.getItem(prefix + '.assistantNickName')
                    break;
            }
            return userInfo;
        }
    })(Native)
})();

(function() {
    Date.prototype.format = function(format) {
        var o = {
            "M+": this.getMonth() + 1, //month 
            "d+": this.getDate(), //day 
            "h+": this.getHours(), //hour 
            "m+": this.getMinutes(), //minute 
            "s+": this.getSeconds(), //second 
            "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
            "S": this.getMilliseconds() //millisecond 
        }

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    }
})()
