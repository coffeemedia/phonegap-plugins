/**
 *  This plugin is a bridge between Phonegap 2.1 (Cordova) and Flurry(Agent) for Android
 * 
 *  @name       CMFlurry
 *  @package    nl.coffeemedia.phonegap.plugins 
 *  @author     John Beitler <john@coffeemedia.nl>
 *  @copyright  Coffee Media, October 2012
 */
package nl.coffeemedia.phonegap.plugins;


import org.apache.cordova.api.*;

import org.json.JSONArray;
import org.json.JSONException;

import com.flurry.android.*;


public class CMFlurry extends Plugin
{
	@Override
	public PluginResult execute( String action, JSONArray args, String callbackId )
	{
        	PluginResult.Status status = PluginResult.Status.OK;
		
		try
		{
			if ( action.equals( "logEvent" ) )
			{
				this.logEvent( args.getString( 0 ) );
			}
		}
		catch ( JSONException e )
		{
			status = PluginResult.Status.JSON_EXCEPTION;
		}
		
		PluginResult pluginresult = new PluginResult( status );
        	return pluginresult;
	}

	
	public void logEvent( String event )
	{
		FlurryAgent.logEvent( event );
	}
}
