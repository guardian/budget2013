/*global define, document */

/* HERE BE JQUERY DRAGONS! INSTEAD OF FIRE, THEY BREATHE TECHNICAL DEBT. */

define( [ '$', 'utils/render', 'text!templates/block.html', 'analytics' ], function ( $, render, block, analytics ) {
	
	'use strict';

	var AnnotationView = function ( item, i ) {

		var el, $el, $button, $close, $anchor, $source, html, clicked, sourceText, annotationText, toggle;

		this.item = item;

		sourceText = $( item.sourceEl ).text();
		annotationText = $( item.annotationEl ).text();

		html = render( block, {
			id: i,
			source: sourceText,
			annotation: annotationText,
			heading: item.annotationEl.getAttribute( 'data-heading' )
		});

		$el = $( html );
		$button = $el.find( '.GuiBudgetBlock_Button' );
		$close  = $el.find( '.GuiBudgetBlock_Annotation_Close' );
		$anchor = $el.find( '.GuiBudgetBlock_Anchor' );
		$source = $el.find( '.GuiBudgetBlock_Source' );

		toggle = function () {
			$el.toggleClass( 'active' );

			if ( !clicked ) {
				var snippet = ( sourceText.length > 80 ? sourceText.substr( 0, 80 ) + '...' : sourceText );

				analytics.event( 'click', 'open_panel', snippet, i );
				clicked = true;
			}
		};

		$button.on( 'click', toggle );
		$source.on( 'click', toggle );

		$close.on( 'click', function () {
			$el.removeClass( 'active' );
		});
		
		$el.insertBefore( item.sourceEl );


		$( 'body' ).on( 'click', function ( event ) {
			var $target = $( event.target );

			if ( !( $.contains( $el[0], event.target ) ) ) {
				$el.removeClass( 'active' );
			}
		});



		// clean up
		item.sourceEl.parentNode.removeChild( item.sourceEl );
		item.annotationEl.parentNode.removeChild( item.annotationEl );
	};

	return AnnotationView;

});