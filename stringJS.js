/* Below is a collection of extension methods I commonly use with the string method */

/* fast strim - http://blog.stevenlevithan.com/archives/faster-trim-javascript */
String.prototype.trim = String.prototype.trim || function(){
	var	str = str.replace(/^\s\s*/, ''),
		ws = /\s/,
		i = str.length;
		
	while (ws.test(str.charAt(--i)));
	
	return str.slice(0, i + 1);
};


String.prototype.format = String.prototype.format || function() {
	var args = arguments;
	
	return this.replace(/{(\d+)}/g, function(match, number) { 
	  return typeof args[number] != 'undefined' ? args[number] : match;
	});
};

String.prototype.toInt = String.prototype.toInt || function(def) {
	var num = parseInt(this.toString(), 10);
	
	return !isNaN(num) ? num : (def || 0);
};