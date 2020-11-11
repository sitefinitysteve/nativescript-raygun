
declare class RaygunBinaryImage extends NSObject {

	static alloc(): RaygunBinaryImage; // inherited from NSObject

	static new(): RaygunBinaryImage; // inherited from NSObject

	cpuSubtype: number;

	cpuType: number;

	imageAddress: number;

	imageSize: number;

	name: string;

	uuid: string;

	constructor(o: { uuId: string; withName: string; withCpuType: number; withCpuSubType: number; withImageAddress: number; withImageSize: number; });

	convertToDictionary(): NSDictionary<any, any>;

	initWithUuIdWithNameWithCpuTypeWithCpuSubTypeWithImageAddressWithImageSize(uuid: string, name: string, cpuType: number, cpuSubType: number, imageAddress: number, imageSize: number): this;
}

declare class RaygunBreadcrumb extends NSObject {

	static alloc(): RaygunBreadcrumb; // inherited from NSObject

	static breadcrumbWithBlock(block: (p1: RaygunBreadcrumb) => void): RaygunBreadcrumb;

	static breadcrumbWithInformation(information: NSDictionary<any, any>): RaygunBreadcrumb;

	static new(): RaygunBreadcrumb; // inherited from NSObject

	static validateWithError(breadcrumb: RaygunBreadcrumb): boolean;

	category: string;

	className: string;

	customData: NSDictionary<any, any>;

	level: RaygunBreadcrumbLevel;

	lineNumber: number;

	message: string;

	methodName: string;

	timestamp: number;

	type: RaygunBreadcrumbType;

	constructor(o: { block: (p1: RaygunBreadcrumb) => void; });

	convertToDictionary(): NSDictionary<any, any>;

	initWithBlock(block: (p1: RaygunBreadcrumb) => void): this;
}

declare const enum RaygunBreadcrumbLevel {

	Debug = 0,

	Info = 1,

	Warning = 2,

	Error = 3
}

declare const enum RaygunBreadcrumbType {

	Manual = 0
}

declare class RaygunClient extends NSObject {

	static alloc(): RaygunClient; // inherited from NSObject

	static new(): RaygunClient; // inherited from NSObject

	static sharedInstance(): RaygunClient;

	static sharedInstanceWithApiKey(apiKey: string): RaygunClient;

	applicationVersion: string;

	beforeSendMessage: (p1: RaygunMessage) => boolean;

	readonly breadcrumbs: NSArray<RaygunBreadcrumb>;

	crashReportingApiEndpoint: string;

	customData: NSDictionary<string, any>;

	maxReportsStoredOnDevice: number;

	realUserMonitoringApiEndpoint: string;

	tags: NSArray<string>;

	userInformation: RaygunUserInformation;

	static readonly apiKey: string;

	static logLevel: RaygunLoggingLevel;

	constructor(o: { apiKey: string; });

	clearBreadcrumbs(): void;

	enableCrashReporting(): void;

	enableNetworkPerformanceMonitoring(): void;

	enableRealUserMonitoring(): void;

	ignoreURLs(urls: NSArray<string> | string[]): void;

	ignoreViews(viewNames: NSArray<string> | string[]): void;

	initWithApiKey(apiKey: string): this;

	recordBreadcrumb(breadcrumb: RaygunBreadcrumb): void;

	recordBreadcrumbWithMessageWithCategoryWithLevelWithCustomData(message: string, category: string, level: RaygunBreadcrumbLevel, customData: NSDictionary<string, any>): void;

	sendErrorWithTagsWithCustomData(error: NSError, tags: NSArray<string> | string[], customData: NSDictionary<string, any>): void;

	sendException(exception: NSException): void;

	sendExceptionWithReasonWithTagsWithCustomData(exceptionName: string, reason: string, tags: NSArray<string> | string[], customData: NSDictionary<string, any>): void;

	sendExceptionWithTags(exception: NSException, tags: NSArray<string> | string[]): void;

	sendExceptionWithTagsWithCustomData(exception: NSException, tags: NSArray<string> | string[], customData: NSDictionary<string, any>): void;

	sendMessage(message: RaygunMessage): void;

	sendTimingEventWithNameWithDuration(type: RaygunEventTimingType, name: string, duration: number): void;
}

declare class RaygunClientMessage extends NSObject {

	static alloc(): RaygunClientMessage; // inherited from NSObject

	static new(): RaygunClientMessage; // inherited from NSObject

	clientUrl: string;

	name: string;

	version: string;

	constructor(o: { name: string; withVersion: string; withUrl: string; });

	convertToDictionary(): NSDictionary<any, any>;

	initWithNameWithVersionWithUrl(name: string, version: string, url: string): this;
}

declare class RaygunCrashReportConverter extends NSObject {

	static alloc(): RaygunCrashReportConverter; // inherited from NSObject

	static new(): RaygunCrashReportConverter; // inherited from NSObject

	convertReportToMessage(report: NSDictionary<any, any>): RaygunMessage;
}

declare class RaygunEnvironmentMessage extends NSObject {

	static alloc(): RaygunEnvironmentMessage; // inherited from NSObject

	static new(): RaygunEnvironmentMessage; // inherited from NSObject

	cpu: string;

	jailBroken: boolean;

	kernelVersion: string;

	locale: string;

	memoryFree: number;

	memorySize: number;

	model: string;

	oSVersion: string;

	processorCount: number;

	resolutionScale: number;

	utcOffset: number;

	windowsBoundHeight: number;

	windowsBoundWidth: number;

	convertToDictionary(): NSDictionary<any, any>;
}

declare class RaygunErrorMessage extends NSObject {

	static alloc(): RaygunErrorMessage; // inherited from NSObject

	static new(): RaygunErrorMessage; // inherited from NSObject

	className: string;

	message: string;

	signalCode: string;

	signalName: string;

	stackTrace: NSArray<any>;

	constructor(o: { withMessage: string; withSignalName: string; withSignalCode: string; withStackTrace: string; });

	convertToDictionary(): NSDictionary<any, any>;

	initWithMessageWithSignalNameWithSignalCodeWithStackTrace(className: string, message: string, signalName: string, signalCode: string, stacktrace: NSArray<any> | any[]): this;
}

declare const enum RaygunEventTimingType {

	ViewLoaded = 0,

	NetworkCall = 1
}

declare const enum RaygunEventType {

	SessionStart = 0,

	SessionEnd = 1,

	Timing = 2
}

declare class RaygunFrame extends NSObject {

	static alloc(): RaygunFrame; // inherited from NSObject

	static new(): RaygunFrame; // inherited from NSObject

	instructionAddress: number;

	symbolAddress: number;

	symbolName: string;

	convertToDictionary(): NSDictionary<any, any>;
}

declare const enum RaygunLoggingLevel {

	None = 0,

	Error = 1,

	Warning = 2,

	Debug = 3,

	Verbose = 4
}

declare class RaygunMessage extends NSObject {

	static alloc(): RaygunMessage; // inherited from NSObject

	static new(): RaygunMessage; // inherited from NSObject

	details: RaygunMessageDetails;

	occurredOn: string;

	constructor(o: { timestamp: string; withDetails: RaygunMessageDetails; });

	convertToJson(): NSData;

	initWithTimestampWithDetails(occurredOn: string, details: RaygunMessageDetails): this;
}

declare class RaygunMessageDetails extends NSObject {

	static alloc(): RaygunMessageDetails; // inherited from NSObject

	static new(): RaygunMessageDetails; // inherited from NSObject

	binaryImages: NSArray<RaygunBinaryImage>;

	breadcrumbs: NSArray<RaygunBreadcrumb>;

	client: RaygunClientMessage;

	customData: NSDictionary<any, any>;

	environment: RaygunEnvironmentMessage;

	error: RaygunErrorMessage;

	groupingKey: string;

	machineName: string;

	tags: NSArray<any>;

	threads: NSArray<RaygunThread>;

	user: RaygunUserInformation;

	version: string;

	convertToDictionary(): NSDictionary<any, any>;
}

declare const enum RaygunResponseStatusCode {

	Accepted = 202,

	BadMessage = 400,

	InvalidApiKey = 403,

	LargePayload = 413,

	RateLimited = 429
}

declare class RaygunThread extends NSObject {

	static alloc(): RaygunThread; // inherited from NSObject

	static new(): RaygunThread; // inherited from NSObject

	crashed: boolean;

	current: boolean;

	frames: NSArray<RaygunFrame>;

	name: string;

	threadIndex: number;

	constructor(o: { index: number; });

	convertToDictionary(): NSDictionary<any, any>;

	initWithIndex(threadIndex: number): this;
}

declare class RaygunUserInformation extends NSObject {

	static alloc(): RaygunUserInformation; // inherited from NSObject

	static new(): RaygunUserInformation; // inherited from NSObject

	static validateWithError(userInformation: RaygunUserInformation): boolean;

	email: string;

	firstName: string;

	fullName: string;

	identifier: string;

	isAnonymous: boolean;

	uuid: string;

	static readonly anonymousUser: RaygunUserInformation;

	constructor(o: { identifier: string; });

	constructor(o: { identifier: string; withEmail: string; withFullName: string; withFirstName: string; });

	constructor(o: { identifier: string; withEmail: string; withFullName: string; withFirstName: string; withIsAnonymous: boolean; });

	constructor(o: { identifier: string; withEmail: string; withFullName: string; withFirstName: string; withIsAnonymous: boolean; withUuid: string; });

	convertToDictionary(): NSDictionary<any, any>;

	initWithIdentifier(identifier: string): this;

	initWithIdentifierWithEmailWithFullNameWithFirstName(identifier: string, email: string, fullName: string, firstName: string): this;

	initWithIdentifierWithEmailWithFullNameWithFirstNameWithIsAnonymous(identifier: string, email: string, fullName: string, firstName: string, isAnonymous: boolean): this;

	initWithIdentifierWithEmailWithFullNameWithFirstNameWithIsAnonymousWithUuid(identifier: string, email: string, fullName: string, firstName: string, isAnonymous: boolean, uuid: string): this;
}

declare var kMaxCrashReportsOnDeviceUpperLimit: number;

declare var kMaxRecordedBreadcrumbs: number;

declare var kSessionExpiryPeriodInSeconds: number;

declare var raygun4appleVersionNumber: number;

declare var raygun4appleVersionString: interop.Reference<number>;

declare var raygun4apple_iOSVersionNumber: number;

declare var raygun4apple_iOSVersionString: interop.Reference<number>;
