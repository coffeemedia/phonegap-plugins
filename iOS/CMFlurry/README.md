# CMFlurry plugin for Phonegap 2.1 (Cordova) #
By John Beitler <john@coffeemedia.nl>

## Adding the Plugin to your project ##
1. Please download and install the Flurry SDK from http://www.flurry.com/
2. Move cmflurry.js to your project's www folder and include a reference to it in your html files. 
3. Drop the CMFLurry.h and CMFlurry.m files on the Plugins folder in Xcode
4. Make sure *.flurry.com is listed in ExternalHosts in your Cordova.plist file (see Cordova.plist.png)
5. Reference the plugin in your Cordova.plist file (see Cordova.plist.png)

## Using the plugin ##
The plugin can be installed by calling

	var cmflurry = CMFlurry.install();
 
### logEvent ###
To log an event you just have to call the cmflurry.logEvent method. This function requires at least one (string) argument, but it's possible to build op a string by passing more than one argument.

	cmflurry.logEvent( foo ); // Log event 'foo' in Flurry
	cmflurry.logEvent( foo, bar, baz ); // Log event 'foo - bar - baz' in Flurry

	
## Licence ##

The MIT License

Copyright (C) 2012 by John Beitler <john@coffeemedia.nl>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.