import { Application } from '@nativescript/core';
import { Raygun } from 'nativescript-raygun';


if (global.isIOS) {
    @NativeClass()
    class CustomAppDelegate
        extends UIResponder
        implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        public applicationDidEnterBackground(application: UIApplication) {
            console.log("applicationDidEnterBackground"); 
        }

        public applicationDidFinishLaunchingWithOptions(
            application: UIApplication,
            launchOptions: any
        ): boolean {
            console.log("applicationDidFinishLaunchingWithOptions");
 
            new Raygun("BPxqh1c5LU6tYP4n6xZAg", false);
            Raygun.enableCrashReporting();
            Raygun.enableRealUserMonitoring(true);
 
            Raygun.setUser("7ae0cda7-e6ce-4b9e-ab3f-4b0e9645d702", "steve@sitefinitysteve.com", "Steve McNiven-Scott", "Steve");


            return true;
        }
    }

    Application.ios.delegate = CustomAppDelegate;
} else {
    Application.on(Application.launchEvent, (args) => {
        new Raygun("DH5vEdkOhwB1kCylFiYMg", false);
        Raygun.enableCrashReporting();
        Raygun.enableRealUserMonitoring(true);

        //Raygun.setUser("7ae0cda7-e6ce-4b9e-ab3f-4b0e9645d702", "steve@sitefinitysteve.com", "Steve McNiven-Scott", "Steve");
    });


}


Application.run({ moduleName: 'app-root' });
