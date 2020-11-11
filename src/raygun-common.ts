import * as app from '@nativescript/core/application'

export abstract class RaygunCommon {

    constructor(
        protected apiKey: string,
        protected sendInSimulator: boolean) { }
    
    public isEmulator(): boolean {
        if (app.ios) {
            //iOS
            return UIDevice.currentDevice.name.toLowerCase().indexOf("simulator") !== -1;
                
        } else {
            var res = android.os.Build.FINGERPRINT;
            if (res.indexOf("vbox86") >= 0 || res.indexOf("generic") >= 0) { return true; }
            return false;
        }
    }
}
