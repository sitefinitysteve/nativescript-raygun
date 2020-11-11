import * as appversion from "@nativescript/appversion";
import { RaygunCommon } from './raygun-common';
import * as utils from '@nativescript/core/utils'
import { android } from '@nativescript/core/application';

export class Raygun extends RaygunCommon {
  constructor(apiKey: string, sendInSimulator: boolean) {
    super(apiKey, sendInSimulator);
    
    var appContext = utils.ad.getApplicationContext();

    com.raygun.raygun4android.RaygunClient.init(appContext, apiKey, appversion.getVersionNameSync());
  }

  public static recordBreadcrumb(message: string, category: string, level: RaygunBreadcrumbLevel, customData?: any): void {
    console.log("Not implimented on Android");
  }

  public static setLogLevel(level: RaygunLoggingLevel): void {
    console.log("Not implimented on Android");
  }

  public static enableCrashReporting(): void {
    com.raygun.raygun4android.RaygunClient.enableCrashReporting();
    console.log("Raygun: Enabled Crash Reporting");
  }

  public static enableRealUserMonitoring(enableNetworkMonitoring: boolean): void {
    var activity = android.startActivity;
    
    com.raygun.raygun4android.RaygunClient.enableRUM(activity, enableNetworkMonitoring);
    console.log("Raygun: Enabled Real User Monitoring");
  }

  public static send(message: string, tags: string[], customData?: Array<ICustomData>): void {
    com.raygun.raygun4android.RaygunClient.send(new java.lang.Throwable(message));
    console.log("Raygun: Sending Custom Message");
  }

  //SHARED
  public static setUser(identifier: string, email?: string, fullname?: string, firstName?: string, isAnonymous?: boolean, uuid?: string): void {
    console.log("Raygun: Set User");

    var user = new com.raygun.raygun4android.messages.shared.RaygunUserInfo(identifier, firstName, fullname, email);
    com.raygun.raygun4android.RaygunClient.setUser(user);
  }

  // REAL USER MONITORING
  public static ignoreURLs(urls: []): void {
    //Raygun.getInstance().ignoreURLs(urls);
  }

  public static sendTimingEvent(type: RaygunEventTimingType, name: string, duration: number): void {
    //Raygun.getInstance().sendTimingEventWithNameWithDuration(type, name, duration);
  }
}

