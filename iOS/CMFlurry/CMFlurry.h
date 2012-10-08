/**
 *  This plugin is a bridge between Phonegap 2.1 (Cordova) and Flurry for iOS
 * 
 *  @name       CMFlurry
 *  @author     John Beitler <john@coffeemedia.nl>
 *  @copyright  Coffee Media, October 2012
 */
#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface CMFlurry:CDVPlugin
{
}

- (void) logEvent:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end