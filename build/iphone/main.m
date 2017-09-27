//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"development";
NSString * const TI_APPLICATION_ID = @"io.mobilelearning.test";
NSString * const TI_APPLICATION_PUBLISHER = @"Anthony Chung";
NSString * const TI_APPLICATION_URL = @"";
NSString * const TI_APPLICATION_NAME = @"mL_Jira_Test";
NSString * const TI_APPLICATION_VERSION = @"1.0";
NSString * const TI_APPLICATION_DESCRIPTION = @"Test case for Jira Appcelerator";
NSString * const TI_APPLICATION_COPYRIGHT = @"2017 by Anthony Chung";
NSString * const TI_APPLICATION_GUID = @"a64205ea-c49f-4d85-9bbb-1cbe3c595bbf";
BOOL const TI_APPLICATION_ANALYTICS = false;
BOOL const TI_APPLICATION_SHOW_ERROR_CONTROLLER = true;
NSString * const TI_APPLICATION_BUILD_TYPE = @"";

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
