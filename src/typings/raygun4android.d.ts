/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module raygun {
		export module raygun4android {
			export class BuildConfig {
				public static class: java.lang.Class<com.raygun.raygun4android.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export class CrashReporting {
				public static class: java.lang.Class<com.raygun.raygun4android.CrashReporting>;
				public constructor();
			}
			export module CrashReporting {
				export class RaygunUncaughtExceptionHandler {
					public static class: java.lang.Class<com.raygun.raygun4android.CrashReporting.RaygunUncaughtExceptionHandler>;
					public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export class CrashReportingOnBeforeSend {
				public static class: java.lang.Class<com.raygun.raygun4android.CrashReportingOnBeforeSend>;
				/**
				 * Constructs a new instance of the com.raygun.raygun4android.CrashReportingOnBeforeSend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBeforeSend(param0: com.raygun.raygun4android.messages.crashreporting.RaygunMessage): com.raygun.raygun4android.messages.crashreporting.RaygunMessage;
				});
				public constructor();
				public onBeforeSend(param0: com.raygun.raygun4android.messages.crashreporting.RaygunMessage): com.raygun.raygun4android.messages.crashreporting.RaygunMessage;
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export class IRaygunMessageBuilder {
				public static class: java.lang.Class<com.raygun.raygun4android.IRaygunMessageBuilder>;
				/**
				 * Constructs a new instance of the com.raygun.raygun4android.IRaygunMessageBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					build(): com.raygun.raygun4android.messages.crashreporting.RaygunMessage;
					setMachineName(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
					setExceptionDetails(param0: java.lang.Throwable): com.raygun.raygun4android.IRaygunMessageBuilder;
					setClientDetails(): com.raygun.raygun4android.IRaygunMessageBuilder;
					setEnvironmentDetails(param0: globalAndroid.content.Context): com.raygun.raygun4android.IRaygunMessageBuilder;
					setVersion(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
					setTags(param0: java.util.List): com.raygun.raygun4android.IRaygunMessageBuilder;
					setCustomData(param0: java.util.Map): com.raygun.raygun4android.IRaygunMessageBuilder;
					setAppContext(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
					setUserInfo(): com.raygun.raygun4android.IRaygunMessageBuilder;
					setNetworkInfo(param0: globalAndroid.content.Context): com.raygun.raygun4android.IRaygunMessageBuilder;
					setGroupingKey(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
					setBreadcrumbs(param0: java.util.List<com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage>): com.raygun.raygun4android.IRaygunMessageBuilder;
				});
				public constructor();
				public setClientDetails(): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setVersion(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setUserInfo(): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setBreadcrumbs(param0: java.util.List<com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage>): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setEnvironmentDetails(param0: globalAndroid.content.Context): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setNetworkInfo(param0: globalAndroid.content.Context): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setAppContext(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setExceptionDetails(param0: java.lang.Throwable): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setGroupingKey(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
				public build(): com.raygun.raygun4android.messages.crashreporting.RaygunMessage;
				public setMachineName(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setTags(param0: java.util.List): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setCustomData(param0: java.util.Map): com.raygun.raygun4android.IRaygunMessageBuilder;
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export class RUM {
				public static class: java.lang.Class<com.raygun.raygun4android.RUM>;
				public static sendRUMTimingEvent(param0: com.raygun.raygun4android.RaygunRUMEventType, param1: string, param2: number): void;
				public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityResumed(param0: globalAndroid.app.Activity): void;
				public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				public onActivityStarted(param0: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityStopped(param0: globalAndroid.app.Activity): void;
				public static detach(): void;
				public onActivityPaused(param0: globalAndroid.app.Activity): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export class RaygunClient {
				public static class: java.lang.Class<com.raygun.raygun4android.RaygunClient>;
				public static enableCrashReporting(param0: boolean): void;
				public static getApplicationContext(): globalAndroid.content.Context;
				public static clearBreadcrumbs(): void;
				public static shouldProcessBreadcrumbLocation(param0: boolean): void;
				public static enableRUM(param0: globalAndroid.app.Activity, param1: boolean): void;
				public static send(param0: java.lang.Throwable, param1: java.util.List, param2: java.util.Map): void;
				public static setVersion(param0: string): void;
				public constructor();
				public static init(param0: globalAndroid.app.Application, param1: string): void;
				public static enableCrashReporting(): void;
				public static init(param0: globalAndroid.app.Application, param1: string, param2: string): void;
				public static setCustomRUMEndpoint(param0: string): void;
				public static setCustomCrashReportingEndpoint(param0: string): void;
				public static isRUMEnabled(): boolean;
				public static setOnBeforeSend(param0: com.raygun.raygun4android.CrashReportingOnBeforeSend): void;
				public static setCustomData(param0: java.util.Map): void;
				public static recordBreadcrumb(param0: string): void;
				public static setTags(param0: java.util.List): void;
				public static setMaxReportsStoredOnDevice(param0: number): void;
				public static ignoreURLs(param0: native.Array<string>): void;
				public static send(param0: java.lang.Throwable, param1: java.util.List): void;
				public static setUser(param0: string): void;
				public static setUser(param0: com.raygun.raygun4android.messages.shared.RaygunUserInfo): void;
				public static init(param0: globalAndroid.app.Application): void;
				public static isCrashReportingEnabled(): boolean;
				public static recordBreadcrumb(param0: com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage): void;
				public static ignoreViews(param0: native.Array<string>): void;
				public static enableRUM(param0: globalAndroid.app.Activity): void;
				public static send(param0: java.lang.Throwable): void;
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export class RaygunMessageBuilder extends com.raygun.raygun4android.IRaygunMessageBuilder {
				public static class: java.lang.Class<com.raygun.raygun4android.RaygunMessageBuilder>;
				public setClientDetails(): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setVersion(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setUserInfo(): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setBreadcrumbs(param0: java.util.List<com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage>): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setEnvironmentDetails(param0: globalAndroid.content.Context): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setNetworkInfo(param0: globalAndroid.content.Context): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setAppContext(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setExceptionDetails(param0: java.lang.Throwable): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setGroupingKey(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
				public build(): com.raygun.raygun4android.messages.crashreporting.RaygunMessage;
				public setMachineName(param0: string): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setTags(param0: java.util.List): com.raygun.raygun4android.IRaygunMessageBuilder;
				public setCustomData(param0: java.util.Map): com.raygun.raygun4android.IRaygunMessageBuilder;
				public static instance(): com.raygun.raygun4android.RaygunMessageBuilder;
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export class RaygunRUMEventType {
				public static class: java.lang.Class<com.raygun.raygun4android.RaygunRUMEventType>;
				public static ACTIVITY_LOADED: com.raygun.raygun4android.RaygunRUMEventType;
				public static NETWORK_CALL: com.raygun.raygun4android.RaygunRUMEventType;
				public static values(): native.Array<com.raygun.raygun4android.RaygunRUMEventType>;
				public static valueOf(param0: string): com.raygun.raygun4android.RaygunRUMEventType;
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export class RaygunSettings {
				public static class: java.lang.Class<com.raygun.raygun4android.RaygunSettings>;
				public static APIKEY_MANIFEST_FIELD: string;
				public static RAYGUN_CLIENT_VERSION: string;
				public static LOGGING_TAG: string;
				public static RESPONSE_CODE_ACCEPTED: number;
				public static RESPONSE_CODE_BAD_MESSAGE: number;
				public static RESPONSE_CODE_INVALID_API_KEY: number;
				public static RESPONSE_CODE_LARGE_PAYLOAD: number;
				public static RESPONSE_CODE_RATE_LIMITED: number;
				public static DEFAULT_CRASHREPORTING_ENDPOINT: string;
				public static DEFAULT_FILE_EXTENSION: string;
				public static DEFAULT_MAX_REPORTS_STORED_ON_DEVICE: number;
				public static CRASH_REPORTING_UNHANDLED_EXCEPTION_TAG: string;
				public static RUM_EVENT_SESSION_START: string;
				public static RUM_EVENT_SESSION_END: string;
				public static RUM_EVENT_TIMING: string;
				public static DEFAULT_RUM_ENDPOINT: string;
				public static RUM_SESSION_EXPIRY: number;
				public static getRUMEndpoint(): string;
				public static getMaxReportsStoredOnDevice(): number;
				public static getIgnoredURLs(): java.util.HashSet<string>;
				public static getCrashReportingEndpoint(): string;
			}
			export module RaygunSettings {
				export class IgnoredURLs extends java.util.HashSet<string> {
					public static class: java.lang.Class<com.raygun.raygun4android.RaygunSettings.IgnoredURLs>;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export class SerializedMessage {
				public static class: java.lang.Class<com.raygun.raygun4android.SerializedMessage>;
				public message: string;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module logging {
				export class RaygunLogger {
					public static class: java.lang.Class<com.raygun.raygun4android.logging.RaygunLogger>;
					public static d(param0: string): void;
					public static w(param0: string): void;
					public static e(param0: string): void;
					public static i(param0: string): void;
					public constructor();
					public static responseCode(param0: number): void;
					public static v(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module logging {
				export class TimberRaygunLogger {
					public static class: java.lang.Class<com.raygun.raygun4android.logging.TimberRaygunLogger>;
					/**
					 * Constructs a new instance of the com.raygun.raygun4android.logging.TimberRaygunLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						init(): void;
					});
					public constructor();
					public static init(): void;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module logging {
				export class TimberRaygunLoggerImplementation extends com.raygun.raygun4android.logging.TimberRaygunLogger {
					public static class: java.lang.Class<com.raygun.raygun4android.logging.TimberRaygunLoggerImplementation>;
					public constructor();
					public static init(): void;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module logging {
				export class TimberRaygunReleaseTree {
					public static class: java.lang.Class<com.raygun.raygun4android.logging.TimberRaygunReleaseTree>;
					public log(param0: number, param1: string, param2: string, param3: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module crashreporting {
					export class NetworkInfo {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.NetworkInfo>;
						public constructor(param0: globalAndroid.content.Context);
						public getiPAddress(): java.util.List<string>;
						public setiPAddress(param0: java.util.List<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module crashreporting {
					export class RaygunAppContext {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.RaygunAppContext>;
						public setIdentifier(param0: string): void;
						public getIdentifier(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module crashreporting {
					export class RaygunBreadcrumbLevel {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbLevel>;
						public static DEBUG: com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbLevel;
						public static INFO: com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbLevel;
						public static WARNING: com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbLevel;
						public static ERROR: com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbLevel;
						public static values(): native.Array<com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbLevel>;
						public static valueOf(param0: string): com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbLevel;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module crashreporting {
					export class RaygunBreadcrumbMessage {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage>;
						public getMessage(): string;
						public getCategory(): string;
						public getLineNumber(): java.lang.Integer;
						public getCustomData(): java.util.Map<string,any>;
						public getMethodName(): string;
						public getLevel(): com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbLevel;
						public getClassName(): string;
					}
					export module RaygunBreadcrumbMessage {
						export class Builder {
							public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage.Builder>;
							public build(): com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage;
							public level(param0: com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbLevel): com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage.Builder;
							public constructor(param0: string);
							public category(param0: string): com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage.Builder;
							public className(param0: string): com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage.Builder;
							public methodName(param0: string): com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage.Builder;
							public lineNumber(param0: java.lang.Integer): com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage.Builder;
							public customData(param0: java.util.Map<string,any>): com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module crashreporting {
					export class RaygunClientMessage {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.RaygunClientMessage>;
						public setClientUrl(param0: string): void;
						public constructor();
						public getVersion(): string;
						public setName(param0: string): void;
						public setVersion(param0: string): void;
						public getClientUrl(): string;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module crashreporting {
					export class RaygunEnvironmentMessage {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.RaygunEnvironmentMessage>;
						public constructor(param0: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module crashreporting {
					export class RaygunErrorMessage {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.RaygunErrorMessage>;
						public getStackTrace(): native.Array<com.raygun.raygun4android.messages.crashreporting.RaygunErrorStackTraceLineMessage>;
						public getMessage(): string;
						public setMessage(param0: string): void;
						public constructor(param0: java.lang.Throwable);
						public getInnerError(): com.raygun.raygun4android.messages.crashreporting.RaygunErrorMessage;
						public setStackTrace(param0: native.Array<com.raygun.raygun4android.messages.crashreporting.RaygunErrorStackTraceLineMessage>): void;
						public setInnerError(param0: com.raygun.raygun4android.messages.crashreporting.RaygunErrorMessage): void;
						public getClassName(): string;
						public setClassName(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module crashreporting {
					export class RaygunErrorStackTraceLineMessage {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.RaygunErrorStackTraceLineMessage>;
						public constructor(param0: java.lang.StackTraceElement);
						public setMethodName(param0: string): void;
						public getLineNumber(): number;
						public setFileName(param0: string): void;
						public getMethodName(): string;
						public getFileName(): string;
						public setLineNumber(param0: number): void;
						public getClassName(): string;
						public setClassName(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module crashreporting {
					export class RaygunMessage {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.RaygunMessage>;
						public getOccurredOn(): string;
						public constructor();
						public setOccurredOn(param0: string): void;
						public getDetails(): com.raygun.raygun4android.messages.crashreporting.RaygunMessageDetails;
						public setDetails(param0: com.raygun.raygun4android.messages.crashreporting.RaygunMessageDetails): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module crashreporting {
					export class RaygunMessageDetails {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.crashreporting.RaygunMessageDetails>;
						public setNetworkInfo(param0: globalAndroid.content.Context): void;
						public getVersion(): string;
						public getError(): com.raygun.raygun4android.messages.crashreporting.RaygunErrorMessage;
						public setTags(param0: java.util.List): void;
						public getCustomData(): java.util.Map;
						public setUserInfo(param0: com.raygun.raygun4android.messages.shared.RaygunUserInfo): void;
						public getNetworkInfo(): com.raygun.raygun4android.messages.crashreporting.NetworkInfo;
						public getBreadcrumbs(): java.util.List<com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage>;
						public getAppContext(): com.raygun.raygun4android.messages.crashreporting.RaygunAppContext;
						public getUserInfo(): com.raygun.raygun4android.messages.shared.RaygunUserInfo;
						public setError(param0: com.raygun.raygun4android.messages.crashreporting.RaygunErrorMessage): void;
						public getEnvironment(): com.raygun.raygun4android.messages.crashreporting.RaygunEnvironmentMessage;
						public setGroupingKey(param0: string): void;
						public constructor();
						public setAppContext(param0: string): void;
						public setUserInfo(): void;
						public setCustomData(param0: java.util.Map): void;
						public setBreadcrumbs(param0: java.util.List<com.raygun.raygun4android.messages.crashreporting.RaygunBreadcrumbMessage>): void;
						public setClient(param0: com.raygun.raygun4android.messages.crashreporting.RaygunClientMessage): void;
						public getClient(): com.raygun.raygun4android.messages.crashreporting.RaygunClientMessage;
						public setEnvironment(param0: com.raygun.raygun4android.messages.crashreporting.RaygunEnvironmentMessage): void;
						public setVersion(param0: string): void;
						public getMachineName(): string;
						public getGroupingKey(): string;
						public getTags(): java.util.List;
						public setMachineName(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module rum {
					export class RaygunRUMData {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.rum.RaygunRUMData>;
					}
					export module RaygunRUMData {
						export class Builder {
							public static class: java.lang.Class<com.raygun.raygun4android.messages.rum.RaygunRUMData.Builder>;
							public constructor(param0: string);
							public timing(param0: com.raygun.raygun4android.messages.rum.RaygunRUMTimingMessage): com.raygun.raygun4android.messages.rum.RaygunRUMData.Builder;
							public build(): com.raygun.raygun4android.messages.rum.RaygunRUMData;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module rum {
					export class RaygunRUMDataMessage {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage>;
					}
					export module RaygunRUMDataMessage {
						export class Builder {
							public static class: java.lang.Class<com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage.Builder>;
							public sessionId(param0: string): com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage.Builder;
							public timestamp(param0: string): com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage.Builder;
							public constructor(param0: string);
							public version(param0: string): com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage.Builder;
							public osVersion(param0: string): com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage.Builder;
							public data(param0: string): com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage.Builder;
							public build(): com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage;
							public platform(param0: string): com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage.Builder;
							public user(param0: com.raygun.raygun4android.messages.shared.RaygunUserInfo): com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage.Builder;
							public os(param0: string): com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module rum {
					export class RaygunRUMMessage {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.rum.RaygunRUMMessage>;
						public getEventData(): native.Array<com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage>;
						public constructor();
						public setEventData(param0: native.Array<com.raygun.raygun4android.messages.rum.RaygunRUMDataMessage>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module rum {
					export class RaygunRUMTimingMessage {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.rum.RaygunRUMTimingMessage>;
					}
					export module RaygunRUMTimingMessage {
						export class Builder {
							public static class: java.lang.Class<com.raygun.raygun4android.messages.rum.RaygunRUMTimingMessage.Builder>;
							public constructor(param0: string);
							public duration(param0: number): com.raygun.raygun4android.messages.rum.RaygunRUMTimingMessage.Builder;
							public build(): com.raygun.raygun4android.messages.rum.RaygunRUMTimingMessage;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module messages {
				export module shared {
					export class RaygunUserInfo {
						public static class: java.lang.Class<com.raygun.raygun4android.messages.shared.RaygunUserInfo>;
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public constructor();
						public getIsAnonymous(): java.lang.Boolean;
						public setFirstName(param0: string): void;
						public getFullName(): string;
						public setEmail(param0: string): void;
						public getEmail(): string;
						public getFirstName(): string;
						public getIdentifier(): string;
						public constructor(param0: string);
						public setFullName(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module network {
				export class RaygunNetworkLogger {
					public static class: java.lang.Class<com.raygun.raygun4android.network.RaygunNetworkLogger>;
					public static cancelNetworkCall(param0: string, param1: string, param2: number, param3: string): void;
					public constructor();
					public static startNetworkCall(param0: string, param1: number): void;
					public static setEnabled(param0: boolean): void;
					public static init(): void;
					public static endNetworkCall(param0: string, param1: string, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module network {
				export class RaygunNetworkRequestInfo {
					public static class: java.lang.Class<com.raygun.raygun4android.network.RaygunNetworkRequestInfo>;
					public url: string;
					public startTime: java.lang.Long;
					public constructor(param0: string, param1: java.lang.Long);
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module network {
				export class RaygunNetworkUtils {
					public static class: java.lang.Class<com.raygun.raygun4android.network.RaygunNetworkUtils>;
					public constructor();
					public static getStatusCode(param0: java.net.URLConnection): number;
					public static getDeviceUuid(param0: globalAndroid.content.Context): string;
					public static hasInternetConnection(param0: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module network {
				export module http {
					export class RaygunHttpUrlConnection {
						public static class: java.lang.Class<com.raygun.raygun4android.network.http.RaygunHttpUrlConnection>;
						public getContentLength(): number;
						public setRequestMethod(param0: string): void;
						public getContent(): any;
						public getRequestMethod(): string;
						public getContentEncoding(): string;
						public setDefaultUseCaches(param0: boolean): void;
						public usingProxy(): boolean;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldKey(param0: number): string;
						public getHeaderField(param0: number): string;
						public getContent(param0: native.Array<java.lang.Class>): any;
						public setConnectTimeout(param0: number): void;
						public getDate(): number;
						public setInstanceFollowRedirects(param0: boolean): void;
						public setChunkedStreamingMode(param0: number): void;
						public addRequestProperty(param0: string, param1: string): void;
						public getResponseMessage(): string;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getConnectTimeout(): number;
						public getRequestProperty(param0: string): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public setUseCaches(param0: boolean): void;
						public getDefaultUseCaches(): boolean;
						public getDoOutput(): boolean;
						public setAllowUserInteraction(param0: boolean): void;
						public setReadTimeout(param0: number): void;
						public getInstanceFollowRedirects(): boolean;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public getResponseCode(): number;
						public getUseCaches(): boolean;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getLastModified(): number;
						public setFixedLengthStreamingMode(param0: number): void;
						public setDoOutput(param0: boolean): void;
						public getURL(): java.net.URL;
						public getErrorStream(): java.io.InputStream;
						public setDoInput(param0: boolean): void;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getExpiration(): number;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getContentType(): string;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module network {
				export module http {
					export class RaygunHttpUrlStreamHandler {
						public static class: java.lang.Class<com.raygun.raygun4android.network.http.RaygunHttpUrlStreamHandler>;
						public getProtocol(): string;
						public openConnection(param0: java.net.URL): java.net.URLConnection;
						public openConnection(param0: java.net.URL, param1: java.net.Proxy): java.net.URLConnection;
						public getDefaultPort(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module network {
				export module http {
					export class RaygunHttpsUrlConnection {
						public static class: java.lang.Class<com.raygun.raygun4android.network.http.RaygunHttpsUrlConnection>;
						public getContentLength(): number;
						public setRequestMethod(param0: string): void;
						public getContent(): any;
						public getRequestMethod(): string;
						public getContentEncoding(): string;
						public setDefaultUseCaches(param0: boolean): void;
						public usingProxy(): boolean;
						public getLocalCertificates(): native.Array<java.security.cert.Certificate>;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldKey(param0: number): string;
						public getHeaderField(param0: number): string;
						public getServerCertificates(): native.Array<java.security.cert.Certificate>;
						public getContent(param0: native.Array<java.lang.Class>): any;
						public setConnectTimeout(param0: number): void;
						public getDate(): number;
						public setInstanceFollowRedirects(param0: boolean): void;
						public setChunkedStreamingMode(param0: number): void;
						public addRequestProperty(param0: string, param1: string): void;
						public getResponseMessage(): string;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getConnectTimeout(): number;
						public getRequestProperty(param0: string): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public setUseCaches(param0: boolean): void;
						public getDefaultUseCaches(): boolean;
						public getDoOutput(): boolean;
						public constructor(param0: java.net.URLConnection);
						public setAllowUserInteraction(param0: boolean): void;
						public setReadTimeout(param0: number): void;
						public getInstanceFollowRedirects(): boolean;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public getResponseCode(): number;
						public getCipherSuite(): string;
						public getUseCaches(): boolean;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getLastModified(): number;
						public setFixedLengthStreamingMode(param0: number): void;
						public setDoOutput(param0: boolean): void;
						public getURL(): java.net.URL;
						public getErrorStream(): java.io.InputStream;
						public setDoInput(param0: boolean): void;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getExpiration(): number;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getContentType(): string;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module network {
				export module http {
					export class RaygunHttpsUrlStreamHandler {
						public static class: java.lang.Class<com.raygun.raygun4android.network.http.RaygunHttpsUrlStreamHandler>;
						public getProtocol(): string;
						public openConnection(param0: java.net.URL): java.net.URLConnection;
						public openConnection(param0: java.net.URL, param1: java.net.Proxy): java.net.URLConnection;
						public getDefaultPort(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module network {
				export module http {
					export class RaygunUrlStreamHandlerFactory {
						public static class: java.lang.Class<com.raygun.raygun4android.network.http.RaygunUrlStreamHandlerFactory>;
						public constructor();
						public createURLStreamHandler(param0: string): java.net.URLStreamHandler;
					}
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module services {
				export class CrashReportingPostService extends com.raygun.raygun4android.services.RaygunPostService {
					public static class: java.lang.Class<com.raygun.raygun4android.services.CrashReportingPostService>;
					public constructor();
					public onHandleWork(param0: globalAndroid.content.Intent): void;
					public onDestroy(): void;
					public static enqueueWork(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module services {
				export class RUMPostService extends com.raygun.raygun4android.services.RaygunPostService {
					public static class: java.lang.Class<com.raygun.raygun4android.services.RUMPostService>;
					public constructor();
					public onHandleWork(param0: globalAndroid.content.Intent): void;
					public onDestroy(): void;
					public static enqueueWork(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module services {
				export abstract class RaygunPostService {
					public static class: java.lang.Class<com.raygun.raygun4android.services.RaygunPostService>;
					public onCreate(): void;
					public constructor();
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module utils {
				export class RaygunFileFilter {
					public static class: java.lang.Class<com.raygun.raygun4android.utils.RaygunFileFilter>;
					public constructor();
					public accept(param0: java.io.File): boolean;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module utils {
				export class RaygunFileUtils {
					public static class: java.lang.Class<com.raygun.raygun4android.utils.RaygunFileUtils>;
					public constructor();
					public static clearCachedReports(param0: globalAndroid.content.Context): void;
					public static getExtension(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module utils {
				export class RaygunReflectionUtils {
					public static class: java.lang.Class<com.raygun.raygun4android.utils.RaygunReflectionUtils>;
					public constructor();
					public static findMethod(param0: java.lang.Class<any>, param1: string, param2: native.Array<java.lang.Class<any>>): java.lang.reflect.Method;
				}
			}
		}
	}
}

declare module com {
	export module raygun {
		export module raygun4android {
			export module utils {
				export class RaygunUtils {
					public static class: java.lang.Class<com.raygun.raygun4android.utils.RaygunUtils>;
					public static mergeMaps(param0: java.util.Map, param1: java.util.Map): java.util.Map;
					public constructor();
					public static mergeLists(param0: java.util.List, param1: java.util.List): java.util.List;
				}
			}
		}
	}
}

//Generics information:

