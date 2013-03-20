/*global define */


define( [], function () {
	
	'use strict';

	var render, pattern;

	pattern = /\{\{\s*([a-zA-Z$_]+)\s*\}\}/g;

	render = function ( template, data ) {
		var key, result;

		result = template.replace( pattern, function ( match, key ) {
			if ( data[ key ] !== undefined ) {
				return data[ key ];
			}

			return match;
		});

		return result;
	};

	return render;

});