(function () {

	'use strict';

	require.config({
		baseUrl: 'http://interactive.guim.co.uk/2013/mar/budget/v/22/js',
		paths: {
			$: 'lib/jquery.amd'
		}
	});

	require([ 'app', 'Modernizr' ]);

}());