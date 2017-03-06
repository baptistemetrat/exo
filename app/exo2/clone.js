(function() {
	'use strict';
	
	function clone(obj) {
		var result = {};
		
		for (var p in obj) {
			if (typeof obj === "object" && obj !== null){
				result[p] = clone(obj[p]);
			}
			else{
				result[p] = obj[p];
			}
		}
		return result;
	}
	
	var a = {x: 5};
	console.log('a', a);
	
	var b = clone(a);
	console.log('b', b);
	
	b.x = 6;
	console.log('a', a);
	console.log('b', b);

	
})();
