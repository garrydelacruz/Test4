// JavaScript Document
var Test4 = (function(module) {
	module.DoIt = function (resultObject) {
			resultObject.prepend(Date() + '<br/>');
	};
	
	return module;
} (Test4 || {}));