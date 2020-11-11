export class Raygun {
    constructor(apiKey: string, sendInSimulator: boolean);

    public static getInstance(): RaygunClient;
    public static enableCrashReporting(): void;
    public static enableRealUserMonitoring(enableNetworkMonitoring: boolean): void;

    /// SHARED
    public static setUser(identifier: string, email?: string, fullname?: string, firstName?: string, isAnonymous?: boolean, uuid?: string): void;
    public static setLogLevel(level: RaygunLoggingLevel): void;
    public static send(message: string): void;

    //Crash Reporting
    public static recordBreadcrumb(message: string, category: string, level: RaygunBreadcrumbLevel, methodName?: string, customData?: Array<ICustomData>): void;

    /// RUM https://raygun.com/documentation/language-guides/apple/real-user-monitoring/advanced-setup/
    public static ignoreViews(views: []): void;
    public static ignoreURLs(urls: []): void;
    public static sendTimingEvent(type: RaygunEventTimingType, name: string, duration: number): void;
}
