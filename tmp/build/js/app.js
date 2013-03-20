/*global define, window, document */

define( [ '$', 'views/AnnotationView', 'analytics' ],

function ( $, AnnotationView, analytics ) {

	'use strict';
	
	$( function () {
		
		var sourceElements, annotationElements, annotationEl, sourceEl, items, i, len, views, intros;

		sourceElements = $( '.GuiBudgetSource' );
		annotationElements = $( '.GuiBudgetAnnotation_Content' );

		if ( sourceElements.length !== annotationElements.length ) {
			throw 'There was a problem with the data - mismatched items';
		}

		items = [];
		views = [];

		for ( i=0, len=annotationElements.length; i<len; i+=1 ) {
			sourceEl = sourceElements[i];
			annotationEl = annotationElements[i];

			items[i] = {
				sourceEl: sourceEl,
				annotationEl: annotationEl
			};
		}

		for ( i=0, len=items.length; i<len; i+=1 ) {
			views[i] = new AnnotationView( items[i], i );
		}

		intros = $( '.GuiBudgetAnnotation_Intro' );

		intros.parent( 'p' ).remove();
		intros.remove();


		// load analytics
		analytics.loadGA( 'UA-25353554-13' );

	});

});