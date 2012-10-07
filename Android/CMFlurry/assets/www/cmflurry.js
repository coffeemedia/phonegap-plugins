function CMFlurry()
{
	// Does nothing
};

CMFlurry.prototype.logEvent = function()
{
	var args = arguments,
		len = args.length;
	
	if ( len && typeof Cordova !== "undefined" )
	{
		var event = "",
			separator = " - ",
			i;

		for ( i=0; i<len; i++ )
			event += args[ i ] + separator;

		Cordova.exec( null, null, "CMFlurry", "logEvent", [ event.replace( / - $/, '' ) ] );
	}
};

CMFlurry.install = function()
{
	if ( !window.plugins )
		window.plugins = {};

	window.plugins.CMFlurry = new CMFlurry();

	return window.plugins.CMFlurry;
};