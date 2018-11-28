//
//  DAtAnchorBLEManager.h
//  ReactDocViewerExample
//
//  Created by Ram on 11/27/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>
#import "React/RCTBridgeModule.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCT_EXTERN_MODULE(DAtAnchorBLEManager, NSObject <RCTBridgeModule>)
RCT_EXTERN_METHOD(startBLEServer: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(stopBLEServer: (RCTResponseSenderBlock)callback)

@end

NS_ASSUME_NONNULL_END



