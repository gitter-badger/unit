(function(factory){
	if(typeof define != "undefined"){ // AMD
		define([], factory);
	}else if(typeof module != "undefined"){ // node.js
		module.exports = factory();
	}else{
		loggerTransportsConsole = factory();
	}
})(function(){
	"use strict";

	return function consoleTransport(logger, meta, text, condition, custom){
		console.log(meta.name + ": " + meta.level + " on " +
			meta.time.toUTCString() + " in " + meta.filename +
			(meta.filename !== meta.id ? " as " + meta.id : ""));
		if(text){
			console.log(meta.name + ": text - " + text);
		}
		if(condition){
			console.log(meta.name + ": cond - " + condition);
		}
		if(meta.stack){
			console.log(meta.name + ": stack");
			console.log(meta.stack);
			console.log(meta.name + ": end of stack");
		}
		if(custom){
			console.log(meta.name + ": custom - ", custom);
		}
	};
});
