function CMFlurry()
{
	var stack = Array();
	
	this._addToStack = function( event )
	{
		return stack.push( event );
	};
	
	this._processStack = function()
	{
		var len=stack.length,
			i;
		
		for ( i=0; i<len; i++ )
			return this.logEvent( stack[ i ] );
	};
};

CMFlurry.prototype.logEvent = function()
{
	var args = arguments,
		len = args.length;
	
	if ( len )
	{
		var event = "",
			separator = " - ",
			i;

		for ( i=0; i<len; i++ )
			event += args[ i ] + separator;

		event = event.replace( / - $/, '' );
		
		if ( typeof Cordova !== "undefined" )
			Cordova.exec( null, null, "CMFlurry", "logEvent", [ event.replace( / - $/, '' ) ] );
		else
			this.addToStack( event );
	}
};

CMFlurry.prototype.addToStack = function( event )
{
	return this._addToStack( event );
};

CMFlurry.prototype.processStack = function()
{
	return this._processStack();
};

CMFlurry.install = function()
{
	if ( !window.plugins )
		window.plugins = {};

	window.plugins.CMFlurry = new CMFlurry();

	return window.plugins.CMFlurry;
};