
var FEED_URL = "";

/**
 * 
 * @returns {undefined}
 * 
 * @see https://api.jquery.com/jQuery.parseXML/
 * @see https://api.jquery.com/jquery.getjson/
 * @see https://api.jquery.com/jquery.get/
 */
function loadFeed() {
    
    $.get(FEED_URL, {})
    .done(function( data ) {
        alert( "Data Loaded: " + data );
    });
}
