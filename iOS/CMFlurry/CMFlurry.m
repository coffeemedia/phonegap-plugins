/**
 *  This plugin is a bridge between Phonegap 2.1 (Cordova) and Flurry for iOS
 * 
 *  @name       CMFlurry
 *  @author     John Beitler <john@coffeemedia.nl>
 *  @copyright  Coffee Media, October 2012
 */

#import "CMFlurry.h"
#import "Flurry.h"

@implementation CMFlurry

- (void) logEvent:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options  
{
    [Flurry logEvent:[arguments objectAtIndex:1]];
}

@end