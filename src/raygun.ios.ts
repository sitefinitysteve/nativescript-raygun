import * as appversion from "@nativescript/appversion";
import { RaygunCommon } from './raygun-common';

export class Raygun extends RaygunCommon {
  constructor(apiKey: string, sendInSimulator: boolean) {
    super(apiKey, sendInSimulator);
    var client = RaygunClient.sharedInstanceWithApiKey(apiKey);

    client.applicationVersion = appversion.getVersionNameSync();

    Raygun.getInstance().beforeSendMessage = ((message: RaygunMessage) => {
      var canSend = true;
      debugger;
      if (!sendInSimulator && this.isEmulator()) {
        canSend = false;
        console.log("Not sending raygun error, because we're int he simulator");
      }

      return canSend;
    });
    
  }

  public static getInstance(): RaygunClient {
    return RaygunClient.sharedInstance();
  }

  public static recordBreadcrumb(message: string, category: string, level: RaygunBreadcrumbLevel, customData?: Array<ICustomData>): void {
    let dict: NSDictionary<string, any> = NSDictionary.dictionaryWithDictionary(<any>customData);
    Raygun.getInstance().recordBreadcrumbWithMessageWithCategoryWithLevelWithCustomData(message, category, level, dict);
    
  }

  public static send(message: string): void {
    //TODO
    //Raygun.getInstance().sendExceptionWithTagsWithCustomData(message, [], null);
    console.log("Send not implimented on iOS");
  }

  public static setLogLevel(level: RaygunLoggingLevel): void {
    RaygunClient.logLevel = level;
  }

  public static enableCrashReporting(): void {
    Raygun.getInstance().enableCrashReporting();
    console.log("Raygun: Enabled Crash Reporting");
  }

  public static enableRealUserMonitoring(enableNetworkMonitoring: boolean): void {
    Raygun.getInstance().enableRealUserMonitoring();

    if (enableNetworkMonitoring) {
      Raygun.getInstance().enableNetworkPerformanceMonitoring();
      console.log("Raygun: Enabled Network Performance Monitoring");
    }
    
    console.log("Raygun: Enabled Real User Monitoring");
  }

  //SHARED
  public static setUser(identifier: string, email?: string, fullname?: string, firstName?: string, isAnonymous?: boolean, uuid?: string): void {
    let userInfo: RaygunUserInformation = null;

    if (email && fullname && firstName && uuid) {
      userInfo = RaygunUserInformation.alloc().initWithIdentifierWithEmailWithFullNameWithFirstNameWithIsAnonymousWithUuid(identifier, email, fullname, firstName, isAnonymous, uuid);
    } else if (email && fullname && firstName) {
      userInfo = RaygunUserInformation.alloc().initWithIdentifierWithEmailWithFullNameWithFirstNameWithIsAnonymous(identifier, email, fullname, firstName, isAnonymous);
    } else if (email && fullname && firstName) {
      userInfo = RaygunUserInformation.alloc().initWithIdentifierWithEmailWithFullNameWithFirstName(identifier, email, fullname, firstName);
    } else {
      userInfo = RaygunUserInformation.alloc().initWithIdentifier(identifier);
    }

    Raygun.getInstance().userInformation = userInfo;
  }
  
  // REAL USER MONITORING
  public static ignoreURLs(urls: []): void {
    Raygun.getInstance().ignoreURLs(urls);
  }

  public static sendTimingEvent(type: RaygunEventTimingType, name: string, duration: number): void {
    Raygun.getInstance().sendTimingEventWithNameWithDuration(type, name, duration);
  }
}

