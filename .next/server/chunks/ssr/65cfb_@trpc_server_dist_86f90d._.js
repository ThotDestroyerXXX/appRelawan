module.exports = {

"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/createProxy.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createFlatProxy": (()=>createFlatProxy),
    "createRecursiveProxy": (()=>createRecursiveProxy)
});
const noop = ()=>{
// noop
};
const freezeIfAvailable = (obj)=>{
    if (Object.freeze) {
        Object.freeze(obj);
    }
};
function createInnerProxy(callback, path, memo) {
    var _memo, _cacheKey;
    const cacheKey = path.join('.');
    (_memo = memo)[_cacheKey = cacheKey] ?? (_memo[_cacheKey] = new Proxy(noop, {
        get (_obj, key) {
            if (typeof key !== 'string' || key === 'then') {
                // special case for if the proxy is accidentally treated
                // like a PromiseLike (like in `Promise.resolve(proxy)`)
                return undefined;
            }
            return createInnerProxy(callback, [
                ...path,
                key
            ], memo);
        },
        apply (_1, _2, args) {
            const lastOfPath = path[path.length - 1];
            let opts = {
                args,
                path
            };
            // special handling for e.g. `trpc.hello.call(this, 'there')` and `trpc.hello.apply(this, ['there'])
            if (lastOfPath === 'call') {
                opts = {
                    args: args.length >= 2 ? [
                        args[1]
                    ] : [],
                    path: path.slice(0, -1)
                };
            } else if (lastOfPath === 'apply') {
                opts = {
                    args: args.length >= 2 ? args[1] : [],
                    path: path.slice(0, -1)
                };
            }
            freezeIfAvailable(opts.args);
            freezeIfAvailable(opts.path);
            return callback(opts);
        }
    }));
    return memo[cacheKey];
}
/**
 * Creates a proxy that calls the callback with the path and arguments
 *
 * @internal
 */ const createRecursiveProxy = (callback)=>createInnerProxy(callback, [], Object.create(null));
/**
 * Used in place of `new Proxy` where each handler will map 1 level deep to another value.
 *
 * @internal
 */ const createFlatProxy = (callback)=>{
    return new Proxy(noop, {
        get (_obj, name) {
            if (typeof name !== 'string' || name === 'then') {
                // special case for if the proxy is accidentally treated
                // like a PromiseLike (like in `Promise.resolve(proxy)`)
                return undefined;
            }
            return callback(name);
        }
    });
};
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/formatter.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultFormatter": (()=>defaultFormatter)
});
const defaultFormatter = ({ shape })=>{
    return shape;
};
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/codes.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// reference: https://www.jsonrpc.org/specification
/**
 * JSON-RPC 2.0 Error codes
 *
 * `-32000` to `-32099` are reserved for implementation-defined server-errors.
 * For tRPC we're copying the last digits of HTTP 4XX errors.
 */ __turbopack_esm__({
    "TRPC_ERROR_CODES_BY_KEY": (()=>TRPC_ERROR_CODES_BY_KEY),
    "TRPC_ERROR_CODES_BY_NUMBER": (()=>TRPC_ERROR_CODES_BY_NUMBER)
});
const TRPC_ERROR_CODES_BY_KEY = {
    /**
   * Invalid JSON was received by the server.
   * An error occurred on the server while parsing the JSON text.
   */ PARSE_ERROR: -32700,
    /**
   * The JSON sent is not a valid Request object.
   */ BAD_REQUEST: -32600,
    // Internal JSON-RPC error
    INTERNAL_SERVER_ERROR: -32603,
    NOT_IMPLEMENTED: -32603,
    BAD_GATEWAY: -32603,
    SERVICE_UNAVAILABLE: -32603,
    GATEWAY_TIMEOUT: -32603,
    // Implementation specific errors
    UNAUTHORIZED: -32001,
    FORBIDDEN: -32003,
    NOT_FOUND: -32004,
    METHOD_NOT_SUPPORTED: -32005,
    TIMEOUT: -32008,
    CONFLICT: -32009,
    PRECONDITION_FAILED: -32012,
    PAYLOAD_TOO_LARGE: -32013,
    UNSUPPORTED_MEDIA_TYPE: -32015,
    UNPROCESSABLE_CONTENT: -32022,
    TOO_MANY_REQUESTS: -32029,
    CLIENT_CLOSED_REQUEST: -32099
};
// pure
const TRPC_ERROR_CODES_BY_NUMBER = {
    [-32700]: 'PARSE_ERROR',
    [-32600]: 'BAD_REQUEST',
    [-32603]: 'INTERNAL_SERVER_ERROR',
    [-32001]: 'UNAUTHORIZED',
    [-32003]: 'FORBIDDEN',
    [-32004]: 'NOT_FOUND',
    [-32005]: 'METHOD_NOT_SUPPORTED',
    [-32008]: 'TIMEOUT',
    [-32009]: 'CONFLICT',
    [-32012]: 'PRECONDITION_FAILED',
    [-32013]: 'PAYLOAD_TOO_LARGE',
    [-32015]: 'UNSUPPORTED_MEDIA_TYPE',
    [-32022]: 'UNPROCESSABLE_CONTENT',
    [-32029]: 'TOO_MANY_REQUESTS',
    [-32099]: 'CLIENT_CLOSED_REQUEST'
};
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** @internal */ __turbopack_esm__({
    "abortSignalsAnyPonyfill": (()=>abortSignalsAnyPonyfill),
    "assert": (()=>assert),
    "identity": (()=>identity),
    "isAsyncIterable": (()=>isAsyncIterable),
    "isFunction": (()=>isFunction),
    "isObject": (()=>isObject),
    "mergeWithoutOverrides": (()=>mergeWithoutOverrides),
    "noop": (()=>noop),
    "omitPrototype": (()=>omitPrototype),
    "run": (()=>run),
    "sleep": (()=>sleep),
    "unsetMarker": (()=>unsetMarker)
});
const unsetMarker = Symbol();
/**
 * Ensures there are no duplicate keys when building a procedure.
 * @internal
 */ function mergeWithoutOverrides(obj1, ...objs) {
    const newObj = Object.assign(Object.create(null), obj1);
    for (const overrides of objs){
        for(const key in overrides){
            if (key in newObj && newObj[key] !== overrides[key]) {
                throw new Error(`Duplicate key ${key}`);
            }
            newObj[key] = overrides[key];
        }
    }
    return newObj;
}
/**
 * Check that value is object
 * @internal
 */ function isObject(value) {
    return !!value && !Array.isArray(value) && typeof value === 'object';
}
function isFunction(fn) {
    return typeof fn === 'function';
}
/**
 * Create an object without inheriting anything from `Object.prototype`
 * @internal
 */ function omitPrototype(obj) {
    return Object.assign(Object.create(null), obj);
}
const asyncIteratorsSupported = typeof Symbol === 'function' && !!Symbol.asyncIterator;
function isAsyncIterable(value) {
    return asyncIteratorsSupported && isObject(value) && Symbol.asyncIterator in value;
}
/**
 * Run an IIFE
 */ const run = (fn)=>fn();
// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}
function identity(it) {
    return it;
}
/**
 * Generic runtime assertion function. Throws, if the condition is not `true`.
 *
 * Can be used as a slightly less dangerous variant of type assertions. Code
 * mistakes would be revealed at runtime then (hopefully during testing).
 */ function assert(condition, msg = 'no additional info') {
    if (!condition) {
        throw new Error(`AssertionError: ${msg}`);
    }
}
function sleep(ms = 0) {
    return new Promise((res)=>setTimeout(res, ms));
}
/**
 * Ponyfill for
 * [`AbortSignal.any`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static).
 */ function abortSignalsAnyPonyfill(signals) {
    if (typeof AbortSignal.any === 'function') {
        return AbortSignal.any(signals);
    }
    const ac = new AbortController();
    for (const signal of signals){
        if (signal.aborted) {
            trigger();
            break;
        }
        signal.addEventListener('abort', trigger, {
            once: true
        });
    }
    return ac.signal;
    "TURBOPACK unreachable";
    function trigger() {
        ac.abort();
        for (const signal of signals){
            signal.removeEventListener('abort', trigger);
        }
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/getHTTPStatusCode.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HTTP_CODE_TO_JSONRPC2": (()=>HTTP_CODE_TO_JSONRPC2),
    "JSONRPC2_TO_HTTP_CODE": (()=>JSONRPC2_TO_HTTP_CODE),
    "getHTTPStatusCode": (()=>getHTTPStatusCode),
    "getHTTPStatusCodeFromError": (()=>getHTTPStatusCodeFromError),
    "getStatusCodeFromKey": (()=>getStatusCodeFromKey),
    "getStatusKeyFromCode": (()=>getStatusKeyFromCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/codes.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
;
;
const JSONRPC2_TO_HTTP_CODE = {
    PARSE_ERROR: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_SUPPORTED: 405,
    TIMEOUT: 408,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    UNSUPPORTED_MEDIA_TYPE: 415,
    UNPROCESSABLE_CONTENT: 422,
    TOO_MANY_REQUESTS: 429,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
};
const HTTP_CODE_TO_JSONRPC2 = {
    400: 'BAD_REQUEST',
    401: 'UNAUTHORIZED',
    403: 'FORBIDDEN',
    404: 'NOT_FOUND',
    405: 'METHOD_NOT_SUPPORTED',
    408: 'TIMEOUT',
    409: 'CONFLICT',
    412: 'PRECONDITION_FAILED',
    413: 'PAYLOAD_TOO_LARGE',
    415: 'UNSUPPORTED_MEDIA_TYPE',
    422: 'UNPROCESSABLE_CONTENT',
    429: 'TOO_MANY_REQUESTS',
    499: 'CLIENT_CLOSED_REQUEST',
    500: 'INTERNAL_SERVER_ERROR',
    501: 'NOT_IMPLEMENTED',
    502: 'BAD_GATEWAY',
    503: 'SERVICE_UNAVAILABLE',
    504: 'GATEWAY_TIMEOUT'
};
function getStatusCodeFromKey(code) {
    return JSONRPC2_TO_HTTP_CODE[code] ?? 500;
}
function getStatusKeyFromCode(code) {
    return HTTP_CODE_TO_JSONRPC2[code] ?? 'INTERNAL_SERVER_ERROR';
}
function getHTTPStatusCode(json) {
    const arr = Array.isArray(json) ? json : [
        json
    ];
    const httpStatuses = new Set(arr.map((res)=>{
        if ('error' in res && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(res.error.data)) {
            if (typeof res.error.data?.['httpStatus'] === 'number') {
                return res.error.data['httpStatus'];
            }
            const code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPC_ERROR_CODES_BY_NUMBER"][res.error.code];
            return getStatusCodeFromKey(code);
        }
        return 200;
    }));
    if (httpStatuses.size !== 1) {
        return 207;
    }
    const httpStatus = httpStatuses.values().next().value;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return httpStatus;
}
function getHTTPStatusCodeFromError(error) {
    return getStatusCodeFromKey(error.code);
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/getErrorShape.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getErrorShape": (()=>getErrorShape)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$getHTTPStatusCode$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/getHTTPStatusCode.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/codes.mjs [app-rsc] (ecmascript)");
;
;
/**
 * @internal
 */ function getErrorShape(opts) {
    const { path, error, config } = opts;
    const { code } = opts.error;
    const shape = {
        message: error.message,
        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPC_ERROR_CODES_BY_KEY"][code],
        data: {
            code,
            httpStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$getHTTPStatusCode$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHTTPStatusCodeFromError"])(error)
        }
    };
    if (config.isDev && typeof opts.error.stack === 'string') {
        shape.data.stack = opts.error.stack;
    }
    if (typeof path === 'string') {
        shape.data.path = path;
    }
    return config.errorFormatter({
        ...opts,
        shape
    });
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TRPCError": (()=>TRPCError),
    "getCauseFromUnknown": (()=>getCauseFromUnknown),
    "getTRPCErrorFromUnknown": (()=>getTRPCErrorFromUnknown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
;
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class UnknownCauseError extends Error {
}
function getCauseFromUnknown(cause) {
    if (cause instanceof Error) {
        return cause;
    }
    const type = typeof cause;
    if (type === 'undefined' || type === 'function' || cause === null) {
        return undefined;
    }
    // Primitive types just get wrapped in an error
    if (type !== 'object') {
        return new Error(String(cause));
    }
    // If it's an object, we'll create a synthetic error
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(cause)) {
        const err = new UnknownCauseError();
        for(const key in cause){
            err[key] = cause[key];
        }
        return err;
    }
    return undefined;
}
function getTRPCErrorFromUnknown(cause) {
    if (cause instanceof TRPCError) {
        return cause;
    }
    if (cause instanceof Error && cause.name === 'TRPCError') {
        // https://github.com/trpc/trpc/pull/4848
        return cause;
    }
    const trpcError = new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause
    });
    // Inherit stack from error
    if (cause instanceof Error && cause.stack) {
        trpcError.stack = cause.stack;
    }
    return trpcError;
}
class TRPCError extends Error {
    constructor(opts){
        const cause = getCauseFromUnknown(opts.cause);
        const message = opts.message ?? cause?.message ?? opts.code;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore https://github.com/tc39/proposal-error-cause
        super(message, {
            cause
        }), // @ts-ignore override doesn't work in all environments due to "This member cannot have an 'override' modifier because it is not declared in the base class 'Error'"
        _define_property(this, "cause", void 0), _define_property(this, "code", void 0);
        this.code = opts.code;
        this.name = 'TRPCError';
        if (!this.cause) {
            // < ES2022 / < Node 16.9.0 compatability
            this.cause = cause;
        }
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultTransformer": (()=>defaultTransformer),
    "getDataTransformer": (()=>getDataTransformer),
    "transformResult": (()=>transformResult),
    "transformTRPCResponse": (()=>transformTRPCResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
;
/**
 * @internal
 */ function getDataTransformer(transformer) {
    if ('input' in transformer) {
        return transformer;
    }
    return {
        input: transformer,
        output: transformer
    };
}
/**
 * @internal
 */ const defaultTransformer = {
    input: {
        serialize: (obj)=>obj,
        deserialize: (obj)=>obj
    },
    output: {
        serialize: (obj)=>obj,
        deserialize: (obj)=>obj
    }
};
function transformTRPCResponseItem(config, item) {
    if ('error' in item) {
        return {
            ...item,
            error: config.transformer.output.serialize(item.error)
        };
    }
    if ('data' in item.result) {
        return {
            ...item,
            result: {
                ...item.result,
                data: config.transformer.output.serialize(item.result.data)
            }
        };
    }
    return item;
}
/**
 * Takes a unserialized `TRPCResponse` and serializes it with the router's transformers
 **/ function transformTRPCResponse(config, itemOrItems) {
    return Array.isArray(itemOrItems) ? itemOrItems.map((item)=>transformTRPCResponseItem(config, item)) : transformTRPCResponseItem(config, itemOrItems);
}
// FIXME:
// - the generics here are probably unnecessary
// - the RPC-spec could probably be simplified to combine HTTP + WS
/** @internal */ function transformResultInner(response, transformer) {
    if ('error' in response) {
        const error = transformer.deserialize(response.error);
        return {
            ok: false,
            error: {
                ...response,
                error
            }
        };
    }
    const result = {
        ...response.result,
        ...(!response.result.type || response.result.type === 'data') && {
            type: 'data',
            data: transformer.deserialize(response.result.data)
        }
    };
    return {
        ok: true,
        result
    };
}
class TransformResultError extends Error {
    constructor(){
        super('Unable to transform response from server');
    }
}
/**
 * Transforms and validates that the result is a valid TRPCResponse
 * @internal
 */ function transformResult(response, transformer) {
    let result;
    try {
        // Use the data transformers on the JSON-response
        result = transformResultInner(response, transformer);
    } catch  {
        throw new TransformResultError();
    }
    // check that output of the transformers is a valid TRPCResponse
    if (!result.ok && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(result.error.error) || typeof result.error.error['code'] !== 'number')) {
        throw new TransformResultError();
    }
    if (result.ok && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(result.result)) {
        throw new TransformResultError();
    }
    return result;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/router.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "callProcedure": (()=>callProcedure),
    "createCallerFactory": (()=>createCallerFactory),
    "createRouterFactory": (()=>createRouterFactory),
    "getProcedureAtPath": (()=>getProcedureAtPath),
    "lazy": (()=>lazy),
    "mergeRouters": (()=>mergeRouters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$createProxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/createProxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$formatter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/formatter.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
const lazySymbol = Symbol('lazy');
function once(fn) {
    const uncalled = Symbol();
    let result = uncalled;
    return ()=>{
        if (result === uncalled) {
            result = fn();
        }
        return result;
    };
}
/**
 * Lazy load a router
 * @see https://trpc.io/docs/server/merging-routers#lazy-load
 */ function lazy(importRouter) {
    async function resolve() {
        const mod = await importRouter();
        // if the module is a router, return it
        if (isRouter(mod)) {
            return mod;
        }
        const routers = Object.values(mod);
        if (routers.length !== 1 || !isRouter(routers[0])) {
            throw new Error("Invalid router module - either define exactly 1 export or return the router directly.\nExample: `experimental_lazy(() => import('./slow.js').then((m) => m.slowRouter))`");
        }
        return routers[0];
    }
    resolve[lazySymbol] = true;
    return resolve;
}
function isLazy(input) {
    return typeof input === 'function' && lazySymbol in input;
}
function isRouter(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(value['_def']) && 'router' in value['_def'];
}
const emptyRouter = {
    _ctx: null,
    _errorShape: null,
    _meta: null,
    queries: {},
    mutations: {},
    subscriptions: {},
    errorFormatter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$formatter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultFormatter"],
    transformer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultTransformer"]
};
/**
 * Reserved words that can't be used as router or procedure names
 */ const reservedWords = [
    /**
   * Then is a reserved word because otherwise we can't return a promise that returns a Proxy
   * since JS will think that `.then` is something that exists
   */ 'then',
    /**
   * `fn.call()` and `fn.apply()` are reserved words because otherwise we can't call a function using `.call` or `.apply`
   */ 'call',
    'apply'
];
/**
 * @internal
 */ function createRouterFactory(config) {
    function createRouterInner(input) {
        const reservedWordsUsed = new Set(Object.keys(input).filter((v)=>reservedWords.includes(v)));
        if (reservedWordsUsed.size > 0) {
            throw new Error('Reserved words used in `router({})` call: ' + Array.from(reservedWordsUsed).join(', '));
        }
        const procedures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["omitPrototype"])({});
        const lazy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["omitPrototype"])({});
        function createLazyLoader(opts) {
            return {
                ref: opts.ref,
                load: once(async ()=>{
                    const router = await opts.ref();
                    const lazyPath = [
                        ...opts.path,
                        opts.key
                    ];
                    const lazyKey = lazyPath.join('.');
                    opts.aggregate[opts.key] = step(router._def.record, lazyPath);
                    delete lazy[lazyKey];
                    // add lazy loaders for nested routers
                    for (const [nestedKey, nestedItem] of Object.entries(router._def.lazy)){
                        const nestedRouterKey = [
                            ...lazyPath,
                            nestedKey
                        ].join('.');
                        // console.log('adding lazy', nestedRouterKey);
                        lazy[nestedRouterKey] = createLazyLoader({
                            ref: nestedItem.ref,
                            path: lazyPath,
                            key: nestedKey,
                            aggregate: opts.aggregate[opts.key]
                        });
                    }
                })
            };
        }
        function step(from, path = []) {
            const aggregate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["omitPrototype"])({});
            for (const [key, item] of Object.entries(from ?? {})){
                if (isLazy(item)) {
                    lazy[[
                        ...path,
                        key
                    ].join('.')] = createLazyLoader({
                        path,
                        ref: item,
                        key,
                        aggregate
                    });
                    continue;
                }
                if (isRouter(item)) {
                    aggregate[key] = step(item._def.record, [
                        ...path,
                        key
                    ]);
                    continue;
                }
                if (!isProcedure(item)) {
                    // RouterRecord
                    aggregate[key] = step(item, [
                        ...path,
                        key
                    ]);
                    continue;
                }
                const newPath = [
                    ...path,
                    key
                ].join('.');
                if (procedures[newPath]) {
                    throw new Error(`Duplicate key: ${newPath}`);
                }
                procedures[newPath] = item;
                aggregate[key] = item;
            }
            return aggregate;
        }
        const record = step(input);
        const _def = {
            _config: config,
            router: true,
            procedures,
            lazy,
            ...emptyRouter,
            record
        };
        const router = {
            ...record,
            _def,
            createCaller: createCallerFactory()({
                _def
            })
        };
        return router;
    }
    return createRouterInner;
}
function isProcedure(procedureOrRouter) {
    return typeof procedureOrRouter === 'function';
}
/**
 * @internal
 */ async function getProcedureAtPath(router, path) {
    const { _def } = router;
    let procedure = _def.procedures[path];
    while(!procedure){
        const key = Object.keys(_def.lazy).find((key)=>path.startsWith(key));
        // console.log(`found lazy: ${key ?? 'NOPE'} (fullPath: ${fullPath})`);
        if (!key) {
            return null;
        }
        // console.log('loading', key, '.......');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const lazyRouter = _def.lazy[key];
        await lazyRouter.load();
        procedure = _def.procedures[path];
    }
    return procedure;
}
/**
 * @internal
 */ async function callProcedure(opts) {
    const { type, path } = opts;
    const proc = await getProcedureAtPath(opts.router, path);
    if (!proc || !isProcedure(proc) || proc._def.type !== type && !opts.allowMethodOverride) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: 'NOT_FOUND',
            message: `No "${type}"-procedure on path "${path}"`
        });
    }
    /* istanbul ignore if -- @preserve */ if (proc._def.type !== type && opts.allowMethodOverride && proc._def.type === 'subscription') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: 'METHOD_NOT_SUPPORTED',
            message: `Method override is not supported for subscriptions`
        });
    }
    return proc(opts);
}
function createCallerFactory() {
    return function createCallerInner(router) {
        const { _def } = router;
        return function createCaller(ctxOrCallback, opts) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$createProxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRecursiveProxy"])(async ({ path, args })=>{
                const fullPath = path.join('.');
                if (path.length === 1 && path[0] === '_def') {
                    return _def;
                }
                const procedure = await getProcedureAtPath(router, fullPath);
                let ctx = undefined;
                try {
                    if (!procedure) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                            code: 'NOT_FOUND',
                            message: `No procedure found on path "${path}"`
                        });
                    }
                    ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFunction"])(ctxOrCallback) ? await Promise.resolve(ctxOrCallback()) : ctxOrCallback;
                    return await procedure({
                        path: fullPath,
                        getRawInput: async ()=>args[0],
                        ctx,
                        type: procedure._def.type,
                        signal: opts?.signal
                    });
                } catch (cause) {
                    opts?.onError?.({
                        ctx,
                        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause),
                        input: args[0],
                        path: fullPath,
                        type: procedure?._def.type ?? 'unknown'
                    });
                    throw cause;
                }
            });
        };
    };
}
function mergeRouters(...routerList) {
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeWithoutOverrides"])({}, ...routerList.map((r)=>r._def.record));
    const errorFormatter = routerList.reduce((currentErrorFormatter, nextRouter)=>{
        if (nextRouter._def._config.errorFormatter && nextRouter._def._config.errorFormatter !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$formatter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultFormatter"]) {
            if (currentErrorFormatter !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$formatter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultFormatter"] && currentErrorFormatter !== nextRouter._def._config.errorFormatter) {
                throw new Error('You seem to have several error formatters');
            }
            return nextRouter._def._config.errorFormatter;
        }
        return currentErrorFormatter;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$formatter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultFormatter"]);
    const transformer = routerList.reduce((prev, current)=>{
        if (current._def._config.transformer && current._def._config.transformer !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultTransformer"]) {
            if (prev !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultTransformer"] && prev !== current._def._config.transformer) {
                throw new Error('You seem to have several transformers');
            }
            return current._def._config.transformer;
        }
        return prev;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultTransformer"]);
    const router = createRouterFactory({
        errorFormatter,
        transformer,
        isDev: routerList.every((r)=>r._def._config.isDev),
        allowOutsideOfServer: routerList.every((r)=>r._def._config.allowOutsideOfServer),
        isServer: routerList.every((r)=>r._def._config.isServer),
        $types: routerList[0]?._def._config.$types
    })(record);
    return router;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/parseConnectionParams.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parseConnectionParamsFromString": (()=>parseConnectionParamsFromString),
    "parseConnectionParamsFromUnknown": (()=>parseConnectionParamsFromUnknown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
;
;
function parseConnectionParamsFromUnknown(parsed) {
    try {
        if (parsed === null) {
            return null;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(parsed)) {
            throw new Error('Expected object');
        }
        const nonStringValues = Object.entries(parsed).filter(([_key, value])=>typeof value !== 'string');
        if (nonStringValues.length > 0) {
            throw new Error(`Expected connectionParams to be string values. Got ${nonStringValues.map(([key, value])=>`${key}: ${typeof value}`).join(', ')}`);
        }
        return parsed;
    } catch (cause) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: 'PARSE_ERROR',
            message: 'Invalid connection params shape',
            cause
        });
    }
}
function parseConnectionParamsFromString(str) {
    let parsed;
    try {
        parsed = JSON.parse(str);
    } catch (cause) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: 'PARSE_ERROR',
            message: 'Not JSON-parsable query params',
            cause
        });
    }
    return parseConnectionParamsFromUnknown(parsed);
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/contentType.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getRequestInfo": (()=>getRequestInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$router$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/router.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$parseConnectionParams$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/parseConnectionParams.mjs [app-rsc] (ecmascript)");
;
;
;
;
/**
 * Memoize a function that takes no arguments
 * @internal
 */ function memo(fn) {
    let promise = null;
    let value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsetMarker"];
    return {
        /**
     * Lazily read the value
     */ read: async ()=>{
            if (value !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsetMarker"]) {
                return value;
            }
            if (promise === null) {
                // dedupes promises and catches errors
                promise = fn().catch((cause)=>{
                    if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]) {
                        throw cause;
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                        code: 'BAD_REQUEST',
                        message: cause instanceof Error ? cause.message : 'Invalid input',
                        cause
                    });
                });
            }
            value = await promise;
            promise = null;
            return value;
        },
        /**
     * Get an already stored result
     */ result: ()=>{
            return value !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsetMarker"] ? value : undefined;
        }
    };
}
const jsonContentTypeHandler = {
    isMatch (req) {
        return !!req.headers.get('content-type')?.startsWith('application/json');
    },
    async parse (opts) {
        const { req } = opts;
        const isBatchCall = opts.searchParams.get('batch') === '1';
        const paths = isBatchCall ? opts.path.split(',') : [
            opts.path
        ];
        const getInputs = memo(async ()=>{
            let inputs = undefined;
            if (req.method === 'GET') {
                const queryInput = opts.searchParams.get('input');
                if (queryInput) {
                    inputs = JSON.parse(queryInput);
                }
            } else {
                inputs = await req.json();
            }
            if (inputs === undefined) {
                return {};
            }
            if (!isBatchCall) {
                return {
                    0: opts.router._def._config.transformer.input.deserialize(inputs)
                };
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(inputs)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                    code: 'BAD_REQUEST',
                    message: '"input" needs to be an object when doing a batch call'
                });
            }
            const acc = {};
            for (const index of paths.keys()){
                const input = inputs[index];
                if (input !== undefined) {
                    acc[index] = opts.router._def._config.transformer.input.deserialize(input);
                }
            }
            return acc;
        });
        const calls = await Promise.all(paths.map(async (path, index)=>{
            const procedure = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$router$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProcedureAtPath"])(opts.router, path);
            return {
                path,
                procedure,
                getRawInput: async ()=>{
                    const inputs = await getInputs.read();
                    let input = inputs[index];
                    if (procedure?._def.type === 'subscription') {
                        const lastEventId = opts.headers.get('last-event-id') ?? opts.searchParams.get('lastEventId') ?? opts.searchParams.get('Last-Event-Id');
                        if (lastEventId) {
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(input)) {
                                input = {
                                    ...input,
                                    lastEventId: lastEventId
                                };
                            } else {
                                input ?? (input = {
                                    lastEventId: lastEventId
                                });
                            }
                        }
                    }
                    return input;
                },
                result: ()=>{
                    return getInputs.result()?.[index];
                }
            };
        }));
        const types = new Set(calls.map((call)=>call.procedure?._def.type).filter(Boolean));
        /* istanbul ignore if -- @preserve */ if (types.size > 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'BAD_REQUEST',
                message: `Cannot mix procedure types in call: ${Array.from(types).join(', ')}`
            });
        }
        const type = types.values().next().value ?? 'unknown';
        const connectionParamsStr = opts.searchParams.get('connectionParams');
        const info = {
            isBatchCall,
            accept: req.headers.get('trpc-accept'),
            calls,
            type,
            connectionParams: connectionParamsStr === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$parseConnectionParams$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseConnectionParamsFromString"])(connectionParamsStr),
            signal: req.signal,
            url: opts.url
        };
        return info;
    }
};
const formDataContentTypeHandler = {
    isMatch (req) {
        return !!req.headers.get('content-type')?.startsWith('multipart/form-data');
    },
    async parse (opts) {
        const { req } = opts;
        if (req.method !== 'POST') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'METHOD_NOT_SUPPORTED',
                message: 'Only POST requests are supported for multipart/form-data requests'
            });
        }
        const getInputs = memo(async ()=>{
            const fd = await req.formData();
            return fd;
        });
        const procedure = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$router$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProcedureAtPath"])(opts.router, opts.path);
        return {
            accept: null,
            calls: [
                {
                    path: opts.path,
                    getRawInput: getInputs.read,
                    result: getInputs.result,
                    procedure
                }
            ],
            isBatchCall: false,
            type: 'mutation',
            connectionParams: null,
            signal: req.signal,
            url: opts.url
        };
    }
};
const octetStreamContentTypeHandler = {
    isMatch (req) {
        return !!req.headers.get('content-type')?.startsWith('application/octet-stream');
    },
    async parse (opts) {
        const { req } = opts;
        if (req.method !== 'POST') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'METHOD_NOT_SUPPORTED',
                message: 'Only POST requests are supported for application/octet-stream requests'
            });
        }
        const getInputs = memo(async ()=>{
            return req.body;
        });
        return {
            calls: [
                {
                    path: opts.path,
                    getRawInput: getInputs.read,
                    result: getInputs.result,
                    procedure: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$router$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProcedureAtPath"])(opts.router, opts.path)
                }
            ],
            isBatchCall: false,
            accept: null,
            type: 'mutation',
            connectionParams: null,
            signal: req.signal,
            url: opts.url
        };
    }
};
const handlers = [
    jsonContentTypeHandler,
    formDataContentTypeHandler,
    octetStreamContentTypeHandler
];
function getContentTypeHandler(req) {
    const handler = handlers.find((handler)=>handler.isMatch(req));
    if (handler) {
        return handler;
    }
    if (!handler && req.method === 'GET') {
        // fallback to JSON for get requests so GET-requests can be opened in browser easily
        return jsonContentTypeHandler;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
        code: 'UNSUPPORTED_MEDIA_TYPE',
        message: req.headers.has('content-type') ? `Unsupported content-type "${req.headers.get('content-type')}` : 'Missing content-type header'
    });
}
async function getRequestInfo(opts) {
    const handler = getContentTypeHandler(opts.req);
    return await handler.parse(opts);
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/contentTypeParsers.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "octetInputParser": (()=>octetInputParser)
});
const octetInputParser = {
    _input: null,
    _output: null,
    parse (input) {
        if (input instanceof ReadableStream) {
            return input;
        }
        throw new Error(`Parsed input was expected to be a ReadableStream but was: ${typeof input}`);
    }
};
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/formDataToObject.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-non-null-assertion */ __turbopack_esm__({
    "formDataToObject": (()=>formDataToObject)
});
const isNumberString = (str)=>/^\d+$/.test(str);
function set(obj, path, value) {
    if (path.length > 1) {
        const newPath = [
            ...path
        ];
        const key = newPath.shift();
        const nextKey = newPath[0];
        if (!obj[key]) {
            obj[key] = isNumberString(nextKey) ? [] : {};
        } else if (Array.isArray(obj[key]) && !isNumberString(nextKey)) {
            obj[key] = Object.fromEntries(Object.entries(obj[key]));
        }
        set(obj[key], newPath, value);
        return;
    }
    const p = path[0];
    if (obj[p] === undefined) {
        obj[p] = value;
    } else if (Array.isArray(obj[p])) {
        obj[p].push(value);
    } else {
        obj[p] = [
            obj[p],
            value
        ];
    }
}
function formDataToObject(formData) {
    const obj = {};
    for (const [key, value] of formData.entries()){
        const parts = key.split(/[\.\[\]]/).filter(Boolean);
        set(obj, parts, value);
    }
    return obj;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/abortError.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isAbortError": (()=>isAbortError),
    "throwAbortError": (()=>throwAbortError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
;
function isAbortError(error) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(error) && error['name'] === 'AbortError';
}
function throwAbortError(message = 'AbortError') {
    throw new DOMException(message, 'AbortError');
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/observable.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** @public */ __turbopack_esm__({
    "isObservable": (()=>isObservable),
    "observable": (()=>observable),
    "observableToAsyncIterable": (()=>observableToAsyncIterable),
    "observableToPromise": (()=>observableToPromise)
});
function isObservable(x) {
    return typeof x === 'object' && x !== null && 'subscribe' in x;
}
/** @public */ function observable(subscribe) {
    const self = {
        subscribe (observer) {
            let teardownRef = null;
            let isDone = false;
            let unsubscribed = false;
            let teardownImmediately = false;
            function unsubscribe() {
                if (teardownRef === null) {
                    teardownImmediately = true;
                    return;
                }
                if (unsubscribed) {
                    return;
                }
                unsubscribed = true;
                if (typeof teardownRef === 'function') {
                    teardownRef();
                } else if (teardownRef) {
                    teardownRef.unsubscribe();
                }
            }
            teardownRef = subscribe({
                next (value) {
                    if (isDone) {
                        return;
                    }
                    observer.next?.(value);
                },
                error (err) {
                    if (isDone) {
                        return;
                    }
                    isDone = true;
                    observer.error?.(err);
                    unsubscribe();
                },
                complete () {
                    if (isDone) {
                        return;
                    }
                    isDone = true;
                    observer.complete?.();
                    unsubscribe();
                }
            });
            if (teardownImmediately) {
                unsubscribe();
            }
            return {
                unsubscribe
            };
        },
        pipe (...operations) {
            return operations.reduce(pipeReducer, self);
        }
    };
    return self;
}
function pipeReducer(prev, fn) {
    return fn(prev);
}
/** @internal */ function observableToPromise(observable) {
    const ac = new AbortController();
    const promise = new Promise((resolve, reject)=>{
        let isDone = false;
        function onDone() {
            if (isDone) {
                return;
            }
            isDone = true;
            obs$.unsubscribe();
        }
        ac.signal.addEventListener('abort', ()=>{
            reject(ac.signal.reason);
        });
        const obs$ = observable.subscribe({
            next (data) {
                isDone = true;
                resolve(data);
                onDone();
            },
            error (data) {
                reject(data);
            },
            complete () {
                ac.abort();
                onDone();
            }
        });
    });
    return promise;
}
/**
 * @internal
 */ function observableToReadableStream(observable, signal) {
    let unsub = null;
    const onAbort = ()=>{
        unsub?.unsubscribe();
        unsub = null;
        signal.removeEventListener('abort', onAbort);
    };
    return new ReadableStream({
        start (controller) {
            unsub = observable.subscribe({
                next (data) {
                    controller.enqueue({
                        ok: true,
                        value: data
                    });
                },
                error (error) {
                    controller.enqueue({
                        ok: false,
                        error
                    });
                    controller.close();
                },
                complete () {
                    controller.close();
                }
            });
            if (signal.aborted) {
                onAbort();
            } else {
                signal.addEventListener('abort', onAbort, {
                    once: true
                });
            }
        },
        cancel () {
            onAbort();
        }
    });
}
/** @internal */ function observableToAsyncIterable(observable, signal) {
    const stream = observableToReadableStream(observable, signal);
    const reader = stream.getReader();
    const iterator = {
        async next () {
            const value = await reader.read();
            if (value.done) {
                return {
                    value: undefined,
                    done: true
                };
            }
            const { value: result } = value;
            if (!result.ok) {
                throw result.error;
            }
            return {
                value: result.value,
                done: false
            };
        },
        async return () {
            await reader.cancel();
            return {
                value: undefined,
                done: true
            };
        }
    };
    return {
        [Symbol.asyncIterator] () {
            return iterator;
        }
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/unbound-method */ __turbopack_esm__({
    "Unpromise": (()=>Unpromise),
    "resolveSelfTuple": (()=>resolveSelfTuple)
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var _computedKey;
/** Memory safe (weakmapped) cache of the ProxyPromise for each Promise,
 * which is retained for the lifetime of the original Promise.
 */ const subscribableCache = new WeakMap();
/** A NOOP function allowing a consistent interface for settled
 * SubscribedPromises (settled promises are not subscribed - they resolve
 * immediately). */ const NOOP = ()=>{
// noop
};
_computedKey = Symbol.toStringTag;
let _computedKey1 = _computedKey;
/**
 * Every `Promise<T>` can be shadowed by a single `ProxyPromise<T>`. It is
 * created once, cached and reused throughout the lifetime of the Promise. Get a
 * Promise's ProxyPromise using `Unpromise.proxy(promise)`.
 *
 * The `ProxyPromise<T>` attaches handlers to the original `Promise<T>`
 * `.then()` and `.catch()` just once. Promises derived from it use a
 * subscription- (and unsubscription-) based mechanism that monitors these
 * handlers.
 *
 * Every time you call `.subscribe()`, `.then()` `.catch()` or `.finally()` on a
 * `ProxyPromise<T>` it returns a `SubscribedPromise<T>` having an additional
 * `unsubscribe()` method. Calling `unsubscribe()` detaches reference chains
 * from the original, potentially long-lived Promise, eliminating memory leaks.
 *
 * This approach can eliminate the memory leaks that otherwise come about from
 * repeated `race()` or `any()` calls invoking `.then()` and `.catch()` multiple
 * times on the same long-lived native Promise (subscriptions which can never be
 * cleaned up).
 *
 * `Unpromise.race(promises)` is a reference implementation of `Promise.race`
 * avoiding memory leaks when using long-lived unsettled Promises.
 *
 * `Unpromise.any(promises)` is a reference implementation of `Promise.any`
 * avoiding memory leaks when using long-lived unsettled Promises.
 *
 * `Unpromise.resolve(promise)` returns an ephemeral `SubscribedPromise<T>` for
 * any given `Promise<T>` facilitating arbitrary async/await patterns. Behind
 * the scenes, `resolve` is implemented simply as
 * `Unpromise.proxy(promise).subscribe()`. Don't forget to call `.unsubscribe()`
 * to tidy up!
 *
 */ class Unpromise {
    /** Create a promise that mitigates uncontrolled subscription to a long-lived
   * Promise via .then() and .catch() - otherwise a source of memory leaks.
   *
   * The returned promise has an `unsubscribe()` method which can be called when
   * the Promise is no longer being tracked by application logic, and which
   * ensures that there is no reference chain from the original promise to the
   * new one, and therefore no memory leak.
   *
   * If original promise has not yet settled, this adds a new unique promise
   * that listens to then/catch events, along with an `unsubscribe()` method to
   * detach it.
   *
   * If original promise has settled, then creates a new Promise.resolve() or
   * Promise.reject() and provided unsubscribe is a noop.
   *
   * If you call `unsubscribe()` before the returned Promise has settled, it
   * will never settle.
   */ subscribe() {
        // in all cases we will combine some promise with its unsubscribe function
        let promise;
        let unsubscribe;
        const { settlement } = this;
        if (settlement === null) {
            // not yet settled - subscribe new promise. Expect eventual settlement
            if (this.subscribers === null) {
                // invariant - it is not settled, so it must have subscribers
                throw new Error("Unpromise settled but still has subscribers");
            }
            const subscriber = withResolvers();
            this.subscribers = listWithMember(this.subscribers, subscriber);
            promise = subscriber.promise;
            unsubscribe = ()=>{
                if (this.subscribers !== null) {
                    this.subscribers = listWithoutMember(this.subscribers, subscriber);
                }
            };
        } else {
            // settled - don't create subscribed promise. Just resolve or reject
            const { status } = settlement;
            if (status === "fulfilled") {
                promise = Promise.resolve(settlement.value);
            } else {
                promise = Promise.reject(settlement.reason);
            }
            unsubscribe = NOOP;
        }
        // extend promise signature with the extra method
        return Object.assign(promise, {
            unsubscribe
        });
    }
    /** STANDARD PROMISE METHODS (but returning a SubscribedPromise) */ then(onfulfilled, onrejected) {
        const subscribed = this.subscribe();
        const { unsubscribe } = subscribed;
        return Object.assign(subscribed.then(onfulfilled, onrejected), {
            unsubscribe
        });
    }
    catch(onrejected) {
        const subscribed = this.subscribe();
        const { unsubscribe } = subscribed;
        return Object.assign(subscribed.catch(onrejected), {
            unsubscribe
        });
    }
    finally(onfinally) {
        const subscribed = this.subscribe();
        const { unsubscribe } = subscribed;
        return Object.assign(subscribed.finally(onfinally), {
            unsubscribe
        });
    }
    /** Unpromise STATIC METHODS */ /** Create or Retrieve the proxy Unpromise (a re-used Unpromise for the VM lifetime
   * of the provided Promise reference) */ static proxy(promise) {
        const cached = Unpromise.getSubscribablePromise(promise);
        return typeof cached !== "undefined" ? cached : Unpromise.createSubscribablePromise(promise);
    }
    /** Create and store an Unpromise keyed by an original Promise. */ static createSubscribablePromise(promise) {
        const created = new Unpromise(promise);
        subscribableCache.set(promise, created); // resolve promise to unpromise
        subscribableCache.set(created, created); // resolve the unpromise to itself
        return created;
    }
    /** Retrieve a previously-created Unpromise keyed by an original Promise. */ static getSubscribablePromise(promise) {
        return subscribableCache.get(promise);
    }
    /** Promise STATIC METHODS */ /** Lookup the Unpromise for this promise, and derive a SubscribedPromise from
   * it (that can be later unsubscribed to eliminate Memory leaks) */ static resolve(value) {
        const promise = typeof value === "object" && value !== null && "then" in value && typeof value.then === "function" ? value : Promise.resolve(value);
        return Unpromise.proxy(promise).subscribe();
    }
    static async any(values) {
        const valuesArray = Array.isArray(values) ? values : [
            ...values
        ];
        const subscribedPromises = valuesArray.map(Unpromise.resolve);
        try {
            return await Promise.any(subscribedPromises);
        } finally{
            subscribedPromises.forEach(({ unsubscribe })=>{
                unsubscribe();
            });
        }
    }
    static async race(values) {
        const valuesArray = Array.isArray(values) ? values : [
            ...values
        ];
        const subscribedPromises = valuesArray.map(Unpromise.resolve);
        try {
            return await Promise.race(subscribedPromises);
        } finally{
            subscribedPromises.forEach(({ unsubscribe })=>{
                unsubscribe();
            });
        }
    }
    /** Create a race of SubscribedPromises that will fulfil to a single winning
   * Promise (in a 1-Tuple). Eliminates memory leaks from long-lived promises
   * accumulating .then() and .catch() subscribers. Allows simple logic to
   * consume the result, like...
   * ```ts
   * const [ winner ] = await Unpromise.race([ promiseA, promiseB ]);
   * if(winner === promiseB){
   *   const result = await promiseB;
   *   // do the thing
   * }
   * ```
   * */ static async raceReferences(promises) {
        // map each promise to an eventual 1-tuple containing itself
        const selfPromises = promises.map(resolveSelfTuple);
        // now race them. They will fulfil to a readonly [P] or reject.
        try {
            return await Promise.race(selfPromises);
        } finally{
            for (const promise of selfPromises){
                // unsubscribe proxy promises when the race is over to mitigate memory leaks
                promise.unsubscribe();
            }
        }
    }
    constructor(arg){
        /** INSTANCE IMPLEMENTATION */ /** The promise shadowed by this Unpromise<T>  */ _define_property(this, "promise", void 0);
        /** Promises expecting eventual settlement (unless unsubscribed first). This list is deleted
   * after the original promise settles - no further notifications will be issued. */ _define_property(this, "subscribers", []);
        /** The Promise's settlement (recorded when it fulfils or rejects). This is consulted when
   * calling .subscribe() .then() .catch() .finally() to see if an immediately-resolving Promise
   * can be returned, and therefore subscription can be bypassed. */ _define_property(this, "settlement", null);
        /** TOSTRING SUPPORT */ _define_property(this, _computedKey1, "Unpromise");
        // handle either a Promise or a Promise executor function
        if (typeof arg === "function") {
            this.promise = new Promise(arg);
        } else {
            this.promise = arg;
        }
        // subscribe for eventual fulfilment and rejection
        // handle PromiseLike objects (that at least have .then)
        const thenReturn = this.promise.then((value)=>{
            // atomically record fulfilment and detach subscriber list
            const { subscribers } = this;
            this.subscribers = null;
            this.settlement = {
                status: "fulfilled",
                value
            };
            // notify fulfilment to subscriber list
            subscribers?.forEach(({ resolve })=>{
                resolve(value);
            });
        });
        // handle Promise (that also have a .catch behaviour)
        if ("catch" in thenReturn) {
            thenReturn.catch((reason)=>{
                // atomically record rejection and detach subscriber list
                const { subscribers } = this;
                this.subscribers = null;
                this.settlement = {
                    status: "rejected",
                    reason
                };
                // notify rejection to subscriber list
                subscribers?.forEach(({ reject })=>{
                    reject(reason);
                });
            });
        }
    }
}
/** Promises a 1-tuple containing the original promise when it resolves. Allows
 * awaiting the eventual Promise ***reference*** (easy to destructure and
 * exactly compare with ===). Avoids resolving to the Promise ***value*** (which
 * may be ambiguous and therefore hard to identify as the winner of a race).
 * You can call unsubscribe on the Promise to mitigate memory leaks.
 * */ function resolveSelfTuple(promise) {
    return Unpromise.proxy(promise).then(()=>[
            promise
        ]);
}
/** VENDORED (Future) PROMISE UTILITIES */ /** Reference implementation of https://github.com/tc39/proposal-promise-with-resolvers */ function withResolvers() {
    let resolve;
    let reject;
    const promise = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    return {
        promise,
        resolve,
        reject
    };
}
/** IMMUTABLE LIST OPERATIONS */ function listWithMember(arr, member) {
    return [
        ...arr,
        member
    ];
}
function listWithoutIndex(arr, index) {
    return [
        ...arr.slice(0, index),
        ...arr.slice(index + 1)
    ];
}
function listWithoutMember(arr, member) {
    const index = arr.indexOf(member);
    if (index !== -1) {
        return listWithoutIndex(arr, index);
    }
    return arr;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// @ts-expect-error - polyfilling symbol
// eslint-disable-next-line no-restricted-syntax
__turbopack_esm__({
    "makeAsyncResource": (()=>makeAsyncResource),
    "makeResource": (()=>makeResource)
});
var _Symbol, // eslint-disable-next-line no-restricted-syntax
_Symbol1;
(_Symbol = Symbol).dispose ?? (_Symbol.dispose = Symbol());
(_Symbol1 = Symbol).asyncDispose ?? (_Symbol1.asyncDispose = Symbol());
/**
 * Takes a value and a dispose function and returns a new object that implements the Disposable interface.
 * The returned object is the original value augmented with a Symbol.dispose method.
 * @param thing The value to make disposable
 * @param dispose Function to call when disposing the resource
 * @returns The original value with Symbol.dispose method added
 */ function makeResource(thing, dispose) {
    const it = thing;
    // eslint-disable-next-line no-restricted-syntax
    if (it[Symbol.dispose]) {
        throw new Error('Symbol.dispose already exists');
    }
    // eslint-disable-next-line no-restricted-syntax
    it[Symbol.dispose] = dispose;
    return it;
}
/**
 * Takes a value and an async dispose function and returns a new object that implements the AsyncDisposable interface.
 * The returned object is the original value augmented with a Symbol.asyncDispose method.
 * @param thing The value to make async disposable
 * @param dispose Async function to call when disposing the resource
 * @returns The original value with Symbol.asyncDispose method added
 */ function makeAsyncResource(thing, dispose) {
    const it = thing;
    // eslint-disable-next-line no-restricted-syntax
    if (it[Symbol.asyncDispose]) {
        throw new Error('Symbol.asyncDispose already exists');
    }
    // eslint-disable-next-line no-restricted-syntax
    it[Symbol.asyncDispose] = dispose;
    return it;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/timerResource.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "disposablePromiseTimerResult": (()=>disposablePromiseTimerResult),
    "timerResource": (()=>timerResource)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-rsc] (ecmascript)");
;
const disposablePromiseTimerResult = Symbol();
function timerResource(ms) {
    let timer = null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeResource"])({
        start () {
            if (timer) {
                throw new Error('Timer already started');
            }
            const promise = new Promise((resolve)=>{
                timer = setTimeout(()=>resolve(disposablePromiseTimerResult), ms);
            });
            return promise;
        }
    }, ()=>{
        if (timer) {
            clearTimeout(timer);
        }
    });
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/asyncIterable.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "iteratorResource": (()=>iteratorResource),
    "takeWithGrace": (()=>takeWithGrace),
    "withMaxDuration": (()=>withMaxDuration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$abortError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/abortError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/timerResource.mjs [app-rsc] (ecmascript)");
;
;
;
;
function _ts_add_disposable_resource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
function _ts_dispose_resources(env) {
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    return (_ts_dispose_resources = function _ts_dispose_resources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                            fail(e);
                            return next();
                        });
                    } else s |= 1;
                } catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    })(env);
}
function iteratorResource(iterable) {
    const iterator = iterable[Symbol.asyncIterator]();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeAsyncResource"])(iterator, async ()=>{
        await iterator.return?.();
    });
}
/**
 * Derives a new {@link AsyncGenerator} based on {@link iterable}, that automatically aborts after the specified duration.
 */ async function* withMaxDuration(iterable, opts) {
    const env = {
        stack: [],
        error: void 0,
        hasError: false
    };
    try {
        const iterator = _ts_add_disposable_resource(env, iteratorResource(iterable), true);
        ;
        const timer = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timerResource"])(opts.maxDurationMs), false);
        ;
        const timerPromise = timer.start();
        // declaration outside the loop for garbage collection reasons
        let result;
        while(true){
            result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Unpromise"].race([
                iterator.next(),
                timerPromise
            ]);
            if (result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disposablePromiseTimerResult"]) {
                // cancelled due to timeout
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$abortError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwAbortError"])();
            }
            if (result.done) {
                return result;
            }
            yield result.value;
            // free up reference for garbage collection
            result = null;
        }
    } catch (e) {
        env.error = e;
        env.hasError = true;
    } finally{
        const result = _ts_dispose_resources(env);
        if (result) await result;
    }
}
/**
 * Derives a new {@link AsyncGenerator} based of {@link iterable}, that yields its first
 * {@link count} values. Then, a grace period of {@link gracePeriodMs} is started in which further
 * values may still come through. After this period, the generator aborts.
 */ async function* takeWithGrace(iterable, opts) {
    const env = {
        stack: [],
        error: void 0,
        hasError: false
    };
    try {
        const iterator = _ts_add_disposable_resource(env, iteratorResource(iterable), true);
        ;
        // declaration outside the loop for garbage collection reasons
        let result;
        const timer = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timerResource"])(opts.gracePeriodMs), false);
        ;
        let count = opts.count;
        let timerPromise = new Promise(()=>{
        // never resolves
        });
        while(true){
            result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Unpromise"].race([
                iterator.next(),
                timerPromise
            ]);
            if (result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disposablePromiseTimerResult"]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$abortError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwAbortError"])();
            }
            if (result.done) {
                return result.value;
            }
            yield result.value;
            if (--count === 0) {
                timerPromise = timer.start();
            }
            // free up reference for garbage collection
            result = null;
        }
    } catch (e) {
        env.error = e;
        env.hasError = true;
    } finally{
        const result = _ts_dispose_resources(env);
        if (result) await result;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/createDeferred.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-non-null-assertion */ __turbopack_esm__({
    "createDeferred": (()=>createDeferred)
});
function createDeferred() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        promise,
        resolve: resolve,
        reject: reject
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/mergeAsyncIterables.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mergeAsyncIterables": (()=>mergeAsyncIterables)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$createDeferred$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/createDeferred.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-rsc] (ecmascript)");
;
;
function _ts_add_disposable_resource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else {
        env.stack.push({
            async: true
        });
    }
    return value;
}
function _ts_dispose_resources(env) {
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    return (_ts_dispose_resources = function _ts_dispose_resources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                            fail(e);
                            return next();
                        });
                    } else s |= 1;
                } catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    })(env);
}
function createManagedIterator(iterable, onResult) {
    const iterator = iterable[Symbol.asyncIterator]();
    let state = 'idle';
    function cleanup() {
        state = 'done';
        onResult = ()=>{
        // noop
        };
    }
    function pull() {
        if (state !== 'idle') {
            return;
        }
        state = 'pending';
        const next = iterator.next();
        next.then((result)=>{
            if (result.done) {
                state = 'done';
                onResult({
                    status: 'return',
                    value: result.value
                });
                cleanup();
                return;
            }
            state = 'idle';
            onResult({
                status: 'yield',
                value: result.value
            });
        }).catch((cause)=>{
            onResult({
                status: 'error',
                error: cause
            });
            cleanup();
        });
    }
    return {
        pull,
        destroy: async ()=>{
            cleanup();
            await iterator.return?.();
        }
    };
}
/**
 * Creates a new async iterable that merges multiple async iterables into a single stream.
 * Values from the input iterables are yielded in the order they resolve, similar to Promise.race().
 *
 * New iterables can be added dynamically using the returned {@link MergedAsyncIterables.add} method, even after iteration has started.
 *
 * If any of the input iterables throws an error, that error will be propagated through the merged stream.
 * Other iterables will not continue to be processed.
 *
 * @template TYield The type of values yielded by the input iterables
 */ function mergeAsyncIterables() {
    let state = 'idle';
    let flushSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$createDeferred$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDeferred"])();
    /**
   * used while {@link state} is `idle`
   */ const iterables = [];
    /**
   * used while {@link state} is `pending`
   */ const iterators = new Set();
    const buffer = [];
    function initIterable(iterable) {
        if (state !== 'pending') {
            // shouldn't happen
            return;
        }
        const iterator = createManagedIterator(iterable, (result)=>{
            if (state !== 'pending') {
                // shouldn't happen
                return;
            }
            switch(result.status){
                case 'yield':
                    buffer.push([
                        iterator,
                        result
                    ]);
                    break;
                case 'return':
                    iterators.delete(iterator);
                    break;
                case 'error':
                    buffer.push([
                        iterator,
                        result
                    ]);
                    iterators.delete(iterator);
                    break;
            }
            flushSignal.resolve();
        });
        iterators.add(iterator);
        iterator.pull();
    }
    return {
        add (iterable) {
            switch(state){
                case 'idle':
                    iterables.push(iterable);
                    break;
                case 'pending':
                    initIterable(iterable);
                    break;
            }
        },
        async *[Symbol.asyncIterator] () {
            const env = {
                stack: [],
                error: void 0,
                hasError: false
            };
            try {
                if (state !== 'idle') {
                    throw new Error('Cannot iterate twice');
                }
                state = 'pending';
                const _finally = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeAsyncResource"])({}, async ()=>{
                    state = 'done';
                    const errors = [];
                    await Promise.all(Array.from(iterators.values()).map(async (it)=>{
                        try {
                            await it.destroy();
                        } catch (cause) {
                            errors.push(cause);
                        }
                    }));
                    buffer.length = 0;
                    iterators.clear();
                    flushSignal.resolve();
                    if (errors.length > 0) {
                        throw new AggregateError(errors);
                    }
                }), true);
                ;
                while(iterables.length > 0){
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    initIterable(iterables.shift());
                }
                while(iterators.size > 0){
                    await flushSignal.promise;
                    while(buffer.length > 0){
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        const [iterator, result] = buffer.shift();
                        switch(result.status){
                            case 'yield':
                                yield result.value;
                                iterator.pull();
                                break;
                            case 'error':
                                throw result.error;
                        }
                    }
                    flushSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$createDeferred$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDeferred"])();
                }
            } catch (e) {
                env.error = e;
                env.hasError = true;
            } finally{
                const result = _ts_dispose_resources(env);
                if (result) await result;
            }
        }
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/readableStreamFrom.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Creates a ReadableStream from an AsyncIterable.
 *
 * @param iterable - The source AsyncIterable to stream from
 * @returns A ReadableStream that yields values from the AsyncIterable
 */ __turbopack_esm__({
    "readableStreamFrom": (()=>readableStreamFrom)
});
function readableStreamFrom(iterable) {
    const iterator = iterable[Symbol.asyncIterator]();
    return new ReadableStream({
        async cancel () {
            await iterator.return?.();
        },
        async pull (controller) {
            const result = await iterator.next();
            if (result.done) {
                controller.close();
                return;
            }
            controller.enqueue(result.value);
        }
    });
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/withPing.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PING_SYM": (()=>PING_SYM),
    "withPing": (()=>withPing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/asyncIterable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/timerResource.mjs [app-rsc] (ecmascript)");
;
;
;
function _ts_add_disposable_resource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
function _ts_dispose_resources(env) {
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    return (_ts_dispose_resources = function _ts_dispose_resources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                            fail(e);
                            return next();
                        });
                    } else s |= 1;
                } catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    })(env);
}
const PING_SYM = Symbol('ping');
/**
 * Derives a new {@link AsyncGenerator} based of {@link iterable}, that yields {@link PING_SYM}
 * whenever no value has been yielded for {@link pingIntervalMs}.
 */ async function* withPing(iterable, pingIntervalMs) {
    const env = {
        stack: [],
        error: void 0,
        hasError: false
    };
    try {
        const iterator = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iteratorResource"])(iterable), true);
        ;
        // declaration outside the loop for garbage collection reasons
        let result;
        let nextPromise = iterator.next();
        while(true){
            const env = {
                stack: [],
                error: void 0,
                hasError: false
            };
            try {
                const pingPromise = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timerResource"])(pingIntervalMs), false);
                ;
                result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Unpromise"].race([
                    nextPromise,
                    pingPromise.start()
                ]);
                if (result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disposablePromiseTimerResult"]) {
                    // cancelled
                    yield PING_SYM;
                    continue;
                }
                if (result.done) {
                    return result.value;
                }
                nextPromise = iterator.next();
                yield result.value;
                // free up reference for garbage collection
                result = null;
            } catch (e) {
                env.error = e;
                env.hasError = true;
            } finally{
                _ts_dispose_resources(env);
            }
        }
    } catch (e) {
        env.error = e;
        env.hasError = true;
    } finally{
        const result = _ts_dispose_resources(env);
        if (result) await result;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/jsonl.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isPromise": (()=>isPromise),
    "jsonlStreamConsumer": (()=>jsonlStreamConsumer),
    "jsonlStreamProducer": (()=>jsonlStreamProducer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/asyncIterable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$createDeferred$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/createDeferred.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$mergeAsyncIterables$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/mergeAsyncIterables.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$readableStreamFrom$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/readableStreamFrom.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/withPing.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _ts_add_disposable_resource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
function _ts_dispose_resources(env) {
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    return (_ts_dispose_resources = function _ts_dispose_resources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                            fail(e);
                            return next();
                        });
                    } else s |= 1;
                } catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    })(env);
}
function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
// ---------- types
const CHUNK_VALUE_TYPE_PROMISE = 0;
const CHUNK_VALUE_TYPE_ASYNC_ITERABLE = 1;
const PROMISE_STATUS_FULFILLED = 0;
const PROMISE_STATUS_REJECTED = 1;
const ASYNC_ITERABLE_STATUS_RETURN = 0;
const ASYNC_ITERABLE_STATUS_YIELD = 1;
const ASYNC_ITERABLE_STATUS_ERROR = 2;
function isPromise(value) {
    return ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFunction"])(value)) && typeof value?.['then'] === 'function' && typeof value?.['catch'] === 'function';
}
class MaxDepthError extends Error {
    constructor(path){
        super('Max depth reached at path: ' + path.join('.')), _define_property(this, "path", void 0), this.path = path;
    }
}
async function* createBatchStreamProducer(opts) {
    const { data } = opts;
    let counter = 0;
    const placeholder = 0;
    const mergedIterables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$mergeAsyncIterables$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeAsyncIterables"])();
    function registerAsync(callback) {
        const idx = counter++;
        const iterable = callback(idx);
        mergedIterables.add(iterable);
        return idx;
    }
    function encodePromise(promise, path) {
        return registerAsync(async function*(idx) {
            const error = checkMaxDepth(path);
            if (error) {
                // Catch any errors from the original promise to ensure they're reported
                promise.catch((cause)=>{
                    opts.onError?.({
                        error: cause,
                        path
                    });
                });
                // Replace the promise with a rejected one containing the max depth error
                promise = Promise.reject(error);
            }
            try {
                const next = await promise;
                yield [
                    idx,
                    PROMISE_STATUS_FULFILLED,
                    encode(next, path)
                ];
            } catch (cause) {
                opts.onError?.({
                    error: cause,
                    path
                });
                yield [
                    idx,
                    PROMISE_STATUS_REJECTED,
                    opts.formatError?.({
                        error: cause,
                        path
                    })
                ];
            }
        });
    }
    function encodeAsyncIterable(iterable, path) {
        return registerAsync(async function*(idx) {
            const env = {
                stack: [],
                error: void 0,
                hasError: false
            };
            try {
                const error = checkMaxDepth(path);
                if (error) {
                    throw error;
                }
                const iterator = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iteratorResource"])(iterable), true);
                ;
                try {
                    while(true){
                        const next = await iterator.next();
                        if (next.done) {
                            yield [
                                idx,
                                ASYNC_ITERABLE_STATUS_RETURN,
                                encode(next.value, path)
                            ];
                            break;
                        }
                        yield [
                            idx,
                            ASYNC_ITERABLE_STATUS_YIELD,
                            encode(next.value, path)
                        ];
                    }
                } catch (cause) {
                    opts.onError?.({
                        error: cause,
                        path
                    });
                    yield [
                        idx,
                        ASYNC_ITERABLE_STATUS_ERROR,
                        opts.formatError?.({
                            error: cause,
                            path
                        })
                    ];
                }
            } catch (e) {
                env.error = e;
                env.hasError = true;
            } finally{
                const result = _ts_dispose_resources(env);
                if (result) await result;
            }
        });
    }
    function checkMaxDepth(path) {
        if (opts.maxDepth && path.length > opts.maxDepth) {
            return new MaxDepthError(path);
        }
        return null;
    }
    function encodeAsync(value, path) {
        if (isPromise(value)) {
            return [
                CHUNK_VALUE_TYPE_PROMISE,
                encodePromise(value, path)
            ];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsyncIterable"])(value)) {
            if (opts.maxDepth && path.length >= opts.maxDepth) {
                throw new Error('Max depth reached');
            }
            return [
                CHUNK_VALUE_TYPE_ASYNC_ITERABLE,
                encodeAsyncIterable(value, path)
            ];
        }
        return null;
    }
    function encode(value, path) {
        if (value === undefined) {
            return [
                []
            ];
        }
        const reg = encodeAsync(value, path);
        if (reg) {
            return [
                [
                    placeholder
                ],
                [
                    null,
                    ...reg
                ]
            ];
        }
        if (!isPlainObject(value)) {
            return [
                [
                    value
                ]
            ];
        }
        const newObj = {};
        const asyncValues = [];
        for (const [key, item] of Object.entries(value)){
            const transformed = encodeAsync(item, [
                ...path,
                key
            ]);
            if (!transformed) {
                newObj[key] = item;
                continue;
            }
            newObj[key] = placeholder;
            asyncValues.push([
                key,
                ...transformed
            ]);
        }
        return [
            [
                newObj
            ],
            ...asyncValues
        ];
    }
    const newHead = {};
    for (const [key, item] of Object.entries(data)){
        newHead[key] = encode(item, [
            key
        ]);
    }
    yield newHead;
    let iterable = mergedIterables;
    if (opts.pingMs) {
        iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withPing"])(mergedIterables, opts.pingMs);
    }
    for await (const value of iterable){
        yield value;
    }
}
/**
 * JSON Lines stream producer
 * @see https://jsonlines.org/
 */ function jsonlStreamProducer(opts) {
    let stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$readableStreamFrom$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readableStreamFrom"])(createBatchStreamProducer(opts));
    const { serialize } = opts;
    if (serialize) {
        stream = stream.pipeThrough(new TransformStream({
            transform (chunk, controller) {
                if (chunk === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PING_SYM"]) {
                    controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PING_SYM"]);
                } else {
                    controller.enqueue(serialize(chunk));
                }
            }
        }));
    }
    return stream.pipeThrough(new TransformStream({
        transform (chunk, controller) {
            if (chunk === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PING_SYM"]) {
                controller.enqueue(' ');
            } else {
                controller.enqueue(JSON.stringify(chunk) + '\n');
            }
        }
    })).pipeThrough(new TextEncoderStream());
}
class AsyncError extends Error {
    constructor(data){
        super('Received error from server'), _define_property(this, "data", void 0), this.data = data;
    }
}
const nodeJsStreamToReaderEsque = (source)=>{
    return {
        getReader () {
            const stream = new ReadableStream({
                start (controller) {
                    source.on('data', (chunk)=>{
                        controller.enqueue(chunk);
                    });
                    source.on('end', ()=>{
                        controller.close();
                    });
                    source.on('error', (error)=>{
                        controller.error(error);
                    });
                }
            });
            return stream.getReader();
        }
    };
};
function createLineAccumulator(from) {
    const reader = 'getReader' in from ? from.getReader() : nodeJsStreamToReaderEsque(from).getReader();
    let lineAggregate = '';
    return new ReadableStream({
        async pull (controller) {
            const { done, value } = await reader.read();
            if (done) {
                controller.close();
            } else {
                controller.enqueue(value);
            }
        },
        cancel () {
            return reader.cancel();
        }
    }).pipeThrough(new TextDecoderStream()).pipeThrough(new TransformStream({
        transform (chunk, controller) {
            lineAggregate += chunk;
            const parts = lineAggregate.split('\n');
            lineAggregate = parts.pop() ?? '';
            for (const part of parts){
                controller.enqueue(part);
            }
        }
    }));
}
function createConsumerStream(from) {
    const stream = createLineAccumulator(from);
    let sentHead = false;
    return stream.pipeThrough(new TransformStream({
        transform (line, controller) {
            if (!sentHead) {
                const head = JSON.parse(line);
                controller.enqueue(head);
                sentHead = true;
            } else {
                const chunk = JSON.parse(line);
                controller.enqueue(chunk);
            }
        }
    }));
}
/**
 * Creates a handler for managing stream controllers and their lifecycle
 */ function createStreamsManager(abortController) {
    const controllerMap = new Map();
    /**
   * Checks if there are no pending controllers or deferred promises
   */ function isEmpty() {
        return Array.from(controllerMap.values()).every((c)=>c.closed);
    }
    /**
   * Creates a stream controller
   */ function createStreamController() {
        let originalController;
        const stream = new ReadableStream({
            start (controller) {
                originalController = controller;
            }
        });
        const streamController = {
            enqueue: (v)=>originalController.enqueue(v),
            close: ()=>{
                originalController.close();
                clear();
                if (isEmpty()) {
                    abortController.abort();
                }
            },
            closed: false,
            getReaderResource: ()=>{
                const reader = stream.getReader();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeResource"])(reader, ()=>{
                    reader.releaseLock();
                    streamController.close();
                });
            },
            error: (reason)=>{
                originalController.error(reason);
                clear();
            }
        };
        function clear() {
            Object.assign(streamController, {
                closed: true,
                close: ()=>{
                // noop
                },
                enqueue: ()=>{
                // noop
                },
                getReaderResource: null,
                error: ()=>{
                // noop
                }
            });
        }
        return streamController;
    }
    /**
   * Gets or creates a stream controller
   */ function getOrCreate(chunkId) {
        let c = controllerMap.get(chunkId);
        if (!c) {
            c = createStreamController();
            controllerMap.set(chunkId, c);
        }
        return c;
    }
    /**
   * Cancels all pending controllers and rejects deferred promises
   */ function cancelAll(reason) {
        for (const controller of controllerMap.values()){
            controller.error(reason);
        }
    }
    return {
        getOrCreate,
        isEmpty,
        cancelAll
    };
}
/**
 * JSON Lines stream consumer
 * @see https://jsonlines.org/
 */ async function jsonlStreamConsumer(opts) {
    const { deserialize = (v)=>v } = opts;
    let source = createConsumerStream(opts.from);
    if (deserialize) {
        source = source.pipeThrough(new TransformStream({
            transform (chunk, controller) {
                controller.enqueue(deserialize(chunk));
            }
        }));
    }
    let headDeferred = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$createDeferred$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDeferred"])();
    const streamManager = createStreamsManager(opts.abortController);
    function decodeChunkDefinition(value) {
        const [_path, type, chunkId] = value;
        const controller = streamManager.getOrCreate(chunkId);
        switch(type){
            case CHUNK_VALUE_TYPE_PROMISE:
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["run"])(async ()=>{
                        const env = {
                            stack: [],
                            error: void 0,
                            hasError: false
                        };
                        try {
                            const reader = _ts_add_disposable_resource(env, controller.getReaderResource(), false);
                            ;
                            const { value } = await reader.read();
                            const [_chunkId, status, data] = value;
                            switch(status){
                                case PROMISE_STATUS_FULFILLED:
                                    return decode(data);
                                case PROMISE_STATUS_REJECTED:
                                    throw opts.formatError?.({
                                        error: data
                                    }) ?? new AsyncError(data);
                            }
                        } catch (e) {
                            env.error = e;
                            env.hasError = true;
                        } finally{
                            _ts_dispose_resources(env);
                        }
                    });
                }
            case CHUNK_VALUE_TYPE_ASYNC_ITERABLE:
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["run"])(async function*() {
                        const env = {
                            stack: [],
                            error: void 0,
                            hasError: false
                        };
                        try {
                            const reader = _ts_add_disposable_resource(env, controller.getReaderResource(), false);
                            ;
                            while(true){
                                const { value } = await reader.read();
                                const [_chunkId, status, data] = value;
                                switch(status){
                                    case ASYNC_ITERABLE_STATUS_YIELD:
                                        yield decode(data);
                                        break;
                                    case ASYNC_ITERABLE_STATUS_RETURN:
                                        return decode(data);
                                    case ASYNC_ITERABLE_STATUS_ERROR:
                                        throw opts.formatError?.({
                                            error: data
                                        }) ?? new AsyncError(data);
                                }
                            }
                        } catch (e) {
                            env.error = e;
                            env.hasError = true;
                        } finally{
                            _ts_dispose_resources(env);
                        }
                    });
                }
        }
    }
    function decode(value) {
        const [[data], ...asyncProps] = value;
        for (const value of asyncProps){
            const [key] = value;
            const decoded = decodeChunkDefinition(value);
            if (key === null) {
                return decoded;
            }
            data[key] = decoded;
        }
        return data;
    }
    const closeOrAbort = (reason)=>{
        headDeferred?.reject(reason);
        streamManager.cancelAll(reason);
    };
    source.pipeTo(new WritableStream({
        write (chunkOrHead) {
            if (headDeferred) {
                const head = chunkOrHead;
                for (const [key, value] of Object.entries(chunkOrHead)){
                    const parsed = decode(value);
                    head[key] = parsed;
                }
                headDeferred.resolve(head);
                headDeferred = null;
                return;
            }
            const chunk = chunkOrHead;
            const [idx] = chunk;
            const controller = streamManager.getOrCreate(idx);
            controller.enqueue(chunk);
        },
        close: ()=>closeOrAbort(new Error('Stream closed')),
        abort: closeOrAbort
    }), {
        signal: opts.abortController.signal
    }).catch((error)=>{
        opts.onError?.({
            error
        });
        closeOrAbort(error);
    });
    return [
        await headDeferred.promise,
        streamManager
    ];
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/tracked.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isTrackedEnvelope": (()=>isTrackedEnvelope),
    "sse": (()=>sse),
    "tracked": (()=>tracked)
});
const trackedSymbol = Symbol();
/**
 * Produce a typed server-sent event message
 * @deprecated use `tracked(id, data)` instead
 */ function sse(event) {
    return tracked(event.id, event.data);
}
function isTrackedEnvelope(value) {
    return Array.isArray(value) && value[2] === trackedSymbol;
}
/**
 * Automatically track an event so that it can be resumed from a given id if the connection is lost
 */ function tracked(id, data) {
    if (id === '') {
        // This limitation could be removed by using different SSE event names / channels for tracked event and non-tracked event
        throw new Error('`id` must not be an empty string as empty string is the same as not setting the id at all');
    }
    return [
        id,
        data,
        trackedSymbol
    ];
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/sse.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sseHeaders": (()=>sseHeaders),
    "sseStreamConsumer": (()=>sseStreamConsumer),
    "sseStreamProducer": (()=>sseStreamProducer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$abortError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/abortError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$tracked$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/tracked.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/asyncIterable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$readableStreamFrom$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/readableStreamFrom.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/timerResource.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/withPing.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function _ts_add_disposable_resource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
function _ts_dispose_resources(env) {
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    return (_ts_dispose_resources = function _ts_dispose_resources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                            fail(e);
                            return next();
                        });
                    } else s |= 1;
                } catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    })(env);
}
const PING_EVENT = 'ping';
const SERIALIZED_ERROR_EVENT = 'serialized-error';
const CONNECTED_EVENT = 'connected';
const RETURN_EVENT = 'return';
/**
 *
 * @see https://html.spec.whatwg.org/multipage/server-sent-events.html
 */ function sseStreamProducer(opts) {
    const { serialize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["identity"] } = opts;
    const ping = {
        enabled: opts.ping?.enabled ?? false,
        intervalMs: opts.ping?.intervalMs ?? 1000
    };
    const client = opts.client ?? {};
    if (ping.enabled && client.reconnectAfterInactivityMs && ping.intervalMs > client.reconnectAfterInactivityMs) {
        throw new Error(`Ping interval must be less than client reconnect interval to prevent unnecessary reconnection - ping.intervalMs: ${ping.intervalMs} client.reconnectAfterInactivityMs: ${client.reconnectAfterInactivityMs}`);
    }
    async function* generator() {
        yield {
            event: CONNECTED_EVENT,
            data: JSON.stringify(client)
        };
        let iterable = opts.data;
        if (opts.emitAndEndImmediately) {
            iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["takeWithGrace"])(iterable, {
                count: 1,
                gracePeriodMs: 1
            });
        }
        if (opts.maxDurationMs && opts.maxDurationMs > 0 && opts.maxDurationMs !== Infinity) {
            iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withMaxDuration"])(iterable, {
                maxDurationMs: opts.maxDurationMs
            });
        }
        if (ping.enabled && ping.intervalMs !== Infinity && ping.intervalMs > 0) {
            iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withPing"])(iterable, ping.intervalMs);
        }
        // We need those declarations outside the loop for garbage collection reasons. If they were
        // declared inside, they would not be freed until the next value is present.
        let value;
        let chunk;
        for await (value of iterable){
            if (value === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PING_SYM"]) {
                yield {
                    event: PING_EVENT,
                    data: ''
                };
                continue;
            }
            chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$tracked$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTrackedEnvelope"])(value) ? {
                id: value[0],
                data: value[1]
            } : {
                data: value
            };
            chunk.data = JSON.stringify(serialize(chunk.data));
            yield chunk;
            // free up references for garbage collection
            value = null;
            chunk = null;
        }
    }
    async function* generatorWithErrorHandling() {
        try {
            yield* generator();
            yield {
                event: RETURN_EVENT,
                data: ''
            };
        } catch (cause) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$abortError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(cause)) {
                // ignore abort errors, send any other errors
                return;
            }
            // `err` must be caused by `opts.data`, `JSON.stringify` or `serialize`.
            // So, a user error in any case.
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause);
            const data = opts.formatError?.({
                error
            }) ?? null;
            yield {
                event: SERIALIZED_ERROR_EVENT,
                data: JSON.stringify(serialize(data))
            };
        }
    }
    const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$readableStreamFrom$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readableStreamFrom"])(generatorWithErrorHandling());
    return stream.pipeThrough(new TransformStream({
        transform (chunk, controller) {
            if ('event' in chunk) {
                controller.enqueue(`event: ${chunk.event}\n`);
            }
            if ('data' in chunk) {
                controller.enqueue(`data: ${chunk.data}\n`);
            }
            if ('id' in chunk) {
                controller.enqueue(`id: ${chunk.id}\n`);
            }
            if ('comment' in chunk) {
                controller.enqueue(`: ${chunk.comment}\n`);
            }
            controller.enqueue('\n\n');
        }
    })).pipeThrough(new TextEncoderStream());
}
async function withTimeout(opts) {
    const env = {
        stack: [],
        error: void 0,
        hasError: false
    };
    try {
        const timeoutPromise = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timerResource"])(opts.timeoutMs), false);
        ;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Unpromise"].race([
            opts.promise,
            timeoutPromise.start()
        ]);
        if (res === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disposablePromiseTimerResult"]) {
            return await opts.onTimeout();
        }
        return res;
    } catch (e) {
        env.error = e;
        env.hasError = true;
    } finally{
        _ts_dispose_resources(env);
    }
}
/**
 * @see https://html.spec.whatwg.org/multipage/server-sent-events.html
 */ function sseStreamConsumer(opts) {
    const { deserialize = (v)=>v } = opts;
    let clientOptions = {};
    const signal = opts.signal;
    let _es = null;
    const createStream = ()=>new ReadableStream({
            async start (controller) {
                const [url, init] = await Promise.all([
                    opts.url(),
                    opts.init()
                ]);
                const eventSource = _es = new opts.EventSource(url, init);
                controller.enqueue({
                    type: 'connecting',
                    eventSource: _es,
                    event: null
                });
                eventSource.addEventListener(CONNECTED_EVENT, (_msg)=>{
                    const msg = _msg;
                    const options = JSON.parse(msg.data);
                    clientOptions = options;
                    controller.enqueue({
                        type: 'connected',
                        options,
                        eventSource
                    });
                });
                eventSource.addEventListener(SERIALIZED_ERROR_EVENT, (_msg)=>{
                    const msg = _msg;
                    controller.enqueue({
                        type: 'serialized-error',
                        error: deserialize(JSON.parse(msg.data)),
                        eventSource
                    });
                });
                eventSource.addEventListener(PING_EVENT, ()=>{
                    controller.enqueue({
                        type: 'ping',
                        eventSource
                    });
                });
                eventSource.addEventListener(RETURN_EVENT, ()=>{
                    eventSource.close();
                    controller.close();
                    _es = null;
                });
                eventSource.addEventListener('error', (event)=>{
                    if (eventSource.readyState === EventSource.CLOSED) {
                        controller.error(event);
                    } else {
                        controller.enqueue({
                            type: 'connecting',
                            eventSource,
                            event
                        });
                    }
                });
                eventSource.addEventListener('message', (_msg)=>{
                    const msg = _msg;
                    const chunk = deserialize(JSON.parse(msg.data));
                    const def = {
                        data: chunk
                    };
                    if (msg.lastEventId) {
                        def.id = msg.lastEventId;
                    }
                    controller.enqueue({
                        type: 'data',
                        data: def,
                        eventSource
                    });
                });
                const onAbort = ()=>{
                    try {
                        eventSource.close();
                        controller.close();
                    } catch  {
                    // ignore errors in case the controller is already closed
                    }
                };
                if (signal.aborted) {
                    onAbort();
                } else {
                    signal.addEventListener('abort', onAbort);
                }
            },
            cancel () {
                _es?.close();
            }
        });
    const getStreamResource = ()=>{
        let stream = createStream();
        let reader = stream.getReader();
        async function dispose() {
            await reader.cancel();
            _es = null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeAsyncResource"])({
            read () {
                return reader.read();
            },
            async recreate () {
                await dispose();
                stream = createStream();
                reader = stream.getReader();
            }
        }, dispose);
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["run"])(async function*() {
        const env = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const stream = _ts_add_disposable_resource(env, getStreamResource(), true);
            ;
            while(true){
                let promise = stream.read();
                const timeoutMs = clientOptions.reconnectAfterInactivityMs;
                if (timeoutMs) {
                    promise = withTimeout({
                        promise,
                        timeoutMs,
                        onTimeout: async ()=>{
                            const res = {
                                value: {
                                    type: 'timeout',
                                    ms: timeoutMs,
                                    eventSource: _es
                                },
                                done: false
                            };
                            // Close and release old reader
                            await stream.recreate();
                            return res;
                        }
                    });
                }
                const result = await promise;
                if (result.done) {
                    return result.value;
                }
                yield result.value;
            }
        } catch (e) {
            env.error = e;
            env.hasError = true;
        } finally{
            const result = _ts_dispose_resources(env);
            if (result) await result;
        }
    });
}
const sseHeaders = {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    'X-Accel-Buffering': 'no',
    Connection: 'keep-alive'
};
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/resolveResponse.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveResponse": (()=>resolveResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/observable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/getErrorShape.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$jsonl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/jsonl.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$sse$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/sse.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$contentType$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/contentType.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$getHTTPStatusCode$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/getHTTPStatusCode.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function errorToAsyncIterable(err) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["run"])(async function*() {
        throw err;
    });
}
const TYPE_ACCEPTED_METHOD_MAP = {
    mutation: [
        'POST'
    ],
    query: [
        'GET'
    ],
    subscription: [
        'GET'
    ]
};
const TYPE_ACCEPTED_METHOD_MAP_WITH_METHOD_OVERRIDE = {
    // never allow GET to do a mutation
    mutation: [
        'POST'
    ],
    query: [
        'GET',
        'POST'
    ],
    subscription: [
        'GET',
        'POST'
    ]
};
function initResponse(initOpts) {
    const { ctx, info, responseMeta, untransformedJSON, errors = [], headers } = initOpts;
    let status = untransformedJSON ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$getHTTPStatusCode$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHTTPStatusCode"])(untransformedJSON) : 200;
    const eagerGeneration = !untransformedJSON;
    const data = eagerGeneration ? [] : Array.isArray(untransformedJSON) ? untransformedJSON : [
        untransformedJSON
    ];
    const meta = responseMeta?.({
        ctx,
        info,
        paths: info?.calls.map((call)=>call.path),
        data,
        errors,
        eagerGeneration,
        type: info?.calls.find((call)=>call.procedure?._def.type)?.procedure?._def.type ?? 'unknown'
    }) ?? {};
    if (meta.headers) {
        if (meta.headers instanceof Headers) {
            for (const [key, value] of meta.headers.entries()){
                headers.append(key, value);
            }
        } else {
            /**
       * @deprecated, delete in v12
       */ for (const [key, value] of Object.entries(meta.headers)){
                if (Array.isArray(value)) {
                    for (const v of value){
                        headers.append(key, v);
                    }
                } else if (typeof value === 'string') {
                    headers.set(key, value);
                }
            }
        }
    }
    if (meta.status) {
        status = meta.status;
    }
    return {
        status
    };
}
function caughtErrorToData(cause, errorOpts) {
    const { router, req, onError } = errorOpts.opts;
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause);
    onError?.({
        error,
        path: errorOpts.path,
        input: errorOpts.input,
        ctx: errorOpts.ctx,
        type: errorOpts.type,
        req
    });
    const untransformedJSON = {
        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorShape"])({
            config: router._def._config,
            error,
            type: errorOpts.type,
            path: errorOpts.path,
            input: errorOpts.input,
            ctx: errorOpts.ctx
        })
    };
    const transformedJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformTRPCResponse"])(router._def._config, untransformedJSON);
    const body = JSON.stringify(transformedJSON);
    return {
        error,
        untransformedJSON,
        body
    };
}
/**
 * Check if a value is a stream-like object
 * - if it's an async iterable
 * - if it's an object with async iterables or promises
 */ function isDataStream(v) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(v)) {
        return false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsyncIterable"])(v)) {
        return true;
    }
    return Object.values(v).some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$jsonl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPromise"]) || Object.values(v).some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsyncIterable"]);
}
async function resolveResponse(opts) {
    const { router, req } = opts;
    const headers = new Headers([
        [
            'vary',
            'trpc-accept'
        ]
    ]);
    const config = router._def._config;
    const url = new URL(req.url);
    if (req.method === 'HEAD') {
        // can be used for lambda warmup
        return new Response(null, {
            status: 204
        });
    }
    const allowBatching = opts.allowBatching ?? opts.batching?.enabled ?? true;
    const allowMethodOverride = (opts.allowMethodOverride ?? false) && req.method === 'POST';
    const infoTuple = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["run"])(async ()=>{
        try {
            return [
                undefined,
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$contentType$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestInfo"])({
                    req,
                    path: decodeURIComponent(opts.path),
                    router,
                    searchParams: url.searchParams,
                    headers: opts.req.headers,
                    url
                })
            ];
        } catch (cause) {
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause),
                undefined
            ];
        }
    });
    const ctxManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["run"])(()=>{
        let result = undefined;
        return {
            valueOrUndefined: ()=>{
                if (!result) {
                    return undefined;
                }
                return result[1];
            },
            value: ()=>{
                const [err, ctx] = result;
                if (err) {
                    throw err;
                }
                return ctx;
            },
            create: async (info)=>{
                if (result) {
                    throw new Error('This should only be called once - report a bug in tRPC');
                }
                try {
                    const ctx = await opts.createContext({
                        info
                    });
                    result = [
                        undefined,
                        ctx
                    ];
                } catch (cause) {
                    result = [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause),
                        undefined
                    ];
                }
            }
        };
    });
    const methodMapper = allowMethodOverride ? TYPE_ACCEPTED_METHOD_MAP_WITH_METHOD_OVERRIDE : TYPE_ACCEPTED_METHOD_MAP;
    /**
   * @deprecated
   */ const isStreamCall = req.headers.get('trpc-accept') === 'application/jsonl';
    const experimentalSSE = config.sse?.enabled ?? true;
    try {
        const [infoError, info] = infoTuple;
        if (infoError) {
            throw infoError;
        }
        if (info.isBatchCall && !allowBatching) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'BAD_REQUEST',
                message: `Batching is not enabled on the server`
            });
        }
        /* istanbul ignore if -- @preserve */ if (isStreamCall && !info.isBatchCall) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                message: `Streaming requests must be batched (you can do a batch of 1)`,
                code: 'BAD_REQUEST'
            });
        }
        await ctxManager.create(info);
        const rpcCalls = info.calls.map(async (call)=>{
            const proc = call.procedure;
            try {
                if (opts.error) {
                    throw opts.error;
                }
                if (!proc) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                        code: 'NOT_FOUND',
                        message: `No procedure found on path "${call.path}"`
                    });
                }
                if (!methodMapper[proc._def.type].includes(req.method)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                        code: 'METHOD_NOT_SUPPORTED',
                        message: `Unsupported ${req.method}-request to ${proc._def.type} procedure at path "${call.path}"`
                    });
                }
                if (proc._def.type === 'subscription') {
                    /* istanbul ignore if -- @preserve */ if (info.isBatchCall) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                            code: 'BAD_REQUEST',
                            message: `Cannot batch subscription calls`
                        });
                    }
                }
                const data = await proc({
                    path: call.path,
                    getRawInput: call.getRawInput,
                    ctx: ctxManager.value(),
                    type: proc._def.type,
                    signal: opts.req.signal
                });
                return [
                    undefined,
                    {
                        data
                    }
                ];
            } catch (cause) {
                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause);
                const input = call.result();
                opts.onError?.({
                    error,
                    path: call.path,
                    input,
                    ctx: ctxManager.valueOrUndefined(),
                    type: call.procedure?._def.type ?? 'unknown',
                    req: opts.req
                });
                return [
                    error,
                    undefined
                ];
            }
        });
        // ----------- response handlers -----------
        if (!info.isBatchCall) {
            const [call] = info.calls;
            const [error, result] = await rpcCalls[0];
            switch(info.type){
                case 'unknown':
                case 'mutation':
                case 'query':
                    {
                        // httpLink
                        headers.set('content-type', 'application/json');
                        if (isDataStream(result?.data)) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                                code: 'UNSUPPORTED_MEDIA_TYPE',
                                message: 'Cannot use stream-like response in non-streaming request - use httpBatchStreamLink'
                            });
                        }
                        const res = error ? {
                            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorShape"])({
                                config,
                                ctx: ctxManager.valueOrUndefined(),
                                error,
                                input: call.result(),
                                path: call.path,
                                type: info.type
                            })
                        } : {
                            result: {
                                data: result.data
                            }
                        };
                        const headResponse = initResponse({
                            ctx: ctxManager.valueOrUndefined(),
                            info,
                            responseMeta: opts.responseMeta,
                            errors: error ? [
                                error
                            ] : [],
                            headers,
                            untransformedJSON: [
                                res
                            ]
                        });
                        return new Response(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformTRPCResponse"])(config, res)), {
                            status: headResponse.status,
                            headers
                        });
                    }
                case 'subscription':
                    {
                        // httpSubscriptionLink
                        const iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["run"])(()=>{
                            if (error) {
                                return errorToAsyncIterable(error);
                            }
                            if (!experimentalSSE) {
                                return errorToAsyncIterable(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                                    code: 'METHOD_NOT_SUPPORTED',
                                    message: 'Missing experimental flag "sseSubscriptions"'
                                }));
                            }
                            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObservable"])(result.data) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsyncIterable"])(result.data)) {
                                return errorToAsyncIterable(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                                    message: `Subscription ${call.path} did not return an observable or a AsyncGenerator`,
                                    code: 'INTERNAL_SERVER_ERROR'
                                }));
                            }
                            const dataAsIterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObservable"])(result.data) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["observableToAsyncIterable"])(result.data, opts.req.signal) : result.data;
                            return dataAsIterable;
                        });
                        const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$sse$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sseStreamProducer"])({
                            ...config.sse,
                            data: iterable,
                            serialize: (v)=>config.transformer.output.serialize(v),
                            formatError (errorOpts) {
                                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(errorOpts.error);
                                const input = call?.result();
                                const path = call?.path;
                                const type = call?.procedure?._def.type ?? 'unknown';
                                opts.onError?.({
                                    error,
                                    path,
                                    input,
                                    ctx: ctxManager.valueOrUndefined(),
                                    req: opts.req,
                                    type
                                });
                                const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorShape"])({
                                    config,
                                    ctx: ctxManager.valueOrUndefined(),
                                    error,
                                    input,
                                    path,
                                    type
                                });
                                return shape;
                            }
                        });
                        for (const [key, value] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$sse$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sseHeaders"])){
                            headers.set(key, value);
                        }
                        const headResponse = initResponse({
                            ctx: ctxManager.valueOrUndefined(),
                            info,
                            responseMeta: opts.responseMeta,
                            errors: [],
                            headers,
                            untransformedJSON: null
                        });
                        return new Response(stream, {
                            headers,
                            status: headResponse.status
                        });
                    }
            }
        }
        // batch response handlers
        if (info.accept === 'application/jsonl') {
            // httpBatchStreamLink
            headers.set('content-type', 'application/json');
            headers.set('transfer-encoding', 'chunked');
            const headResponse = initResponse({
                ctx: ctxManager.valueOrUndefined(),
                info,
                responseMeta: opts.responseMeta,
                errors: [],
                headers,
                untransformedJSON: null
            });
            const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$jsonl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonlStreamProducer"])({
                ...config.jsonl,
                /**
         * Example structure for `maxDepth: 4`:
         * {
         *   // 1
         *   0: {
         *     // 2
         *     result: {
         *       // 3
         *       data: // 4
         *     }
         *   }
         * }
         */ maxDepth: Infinity,
                data: rpcCalls.map(async (res)=>{
                    const [error, result] = await res;
                    const call = info.calls[0];
                    if (error) {
                        return {
                            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorShape"])({
                                config,
                                ctx: ctxManager.valueOrUndefined(),
                                error,
                                input: call.result(),
                                path: call.path,
                                type: call.procedure?._def.type ?? 'unknown'
                            })
                        };
                    }
                    /**
           * Not very pretty, but we need to wrap nested data in promises
           * Our stream producer will only resolve top-level async values or async values that are directly nested in another async value
           */ const iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObservable"])(result.data) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["observableToAsyncIterable"])(result.data, opts.req.signal) : Promise.resolve(result.data);
                    return {
                        result: Promise.resolve({
                            data: iterable
                        })
                    };
                }),
                serialize: config.transformer.output.serialize,
                onError: (cause)=>{
                    opts.onError?.({
                        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause),
                        path: undefined,
                        input: undefined,
                        ctx: ctxManager.valueOrUndefined(),
                        req: opts.req,
                        type: info?.type ?? 'unknown'
                    });
                },
                formatError (errorOpts) {
                    const call = info?.calls[errorOpts.path[0]];
                    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(errorOpts.error);
                    const input = call?.result();
                    const path = call?.path;
                    const type = call?.procedure?._def.type ?? 'unknown';
                    // no need to call `onError` here as it will be propagated through the stream itself
                    const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorShape"])({
                        config,
                        ctx: ctxManager.valueOrUndefined(),
                        error,
                        input,
                        path,
                        type
                    });
                    return shape;
                }
            });
            return new Response(stream, {
                headers,
                status: headResponse.status
            });
        }
        // httpBatchLink
        /**
     * Non-streaming response:
     * - await all responses in parallel, blocking on the slowest one
     * - create headers with known response body
     * - return a complete HTTPResponse
     */ headers.set('content-type', 'application/json');
        const results = (await Promise.all(rpcCalls)).map((res)=>{
            const [error, result] = res;
            if (error) {
                return res;
            }
            if (isDataStream(result.data)) {
                return [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                        code: 'UNSUPPORTED_MEDIA_TYPE',
                        message: 'Cannot use stream-like response in non-streaming request - use httpBatchStreamLink'
                    }),
                    undefined
                ];
            }
            return res;
        });
        const resultAsRPCResponse = results.map(([error, result], index)=>{
            const call = info.calls[index];
            if (error) {
                return {
                    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorShape"])({
                        config,
                        ctx: ctxManager.valueOrUndefined(),
                        error,
                        input: call.result(),
                        path: call.path,
                        type: call.procedure?._def.type ?? 'unknown'
                    })
                };
            }
            return {
                result: {
                    data: result.data
                }
            };
        });
        const errors = results.map(([error])=>error).filter(Boolean);
        const headResponse = initResponse({
            ctx: ctxManager.valueOrUndefined(),
            info,
            responseMeta: opts.responseMeta,
            untransformedJSON: resultAsRPCResponse,
            errors,
            headers
        });
        return new Response(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformTRPCResponse"])(config, resultAsRPCResponse)), {
            status: headResponse.status,
            headers
        });
    } catch (cause) {
        const [_infoError, info] = infoTuple;
        const ctx = ctxManager.valueOrUndefined();
        // we get here if
        // - batching is called when it's not enabled
        // - `createContext()` throws
        // - `router._def._config.transformer.output.serialize()` throws
        // - post body is too large
        // - input deserialization fails
        // - `errorFormatter` return value is malformed
        const { error, untransformedJSON, body } = caughtErrorToData(cause, {
            opts,
            ctx: ctxManager.valueOrUndefined(),
            type: info?.type ?? 'unknown'
        });
        const headResponse = initResponse({
            ctx,
            info,
            responseMeta: opts.responseMeta,
            untransformedJSON,
            errors: [
                error
            ],
            headers
        });
        return new Response(body, {
            status: headResponse.status,
            headers
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/middleware.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createInputMiddleware": (()=>createInputMiddleware),
    "createMiddlewareFactory": (()=>createMiddlewareFactory),
    "createOutputMiddleware": (()=>createOutputMiddleware),
    "experimental_standaloneMiddleware": (()=>experimental_standaloneMiddleware),
    "middlewareMarker": (()=>middlewareMarker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
;
;
/** @internal */ const middlewareMarker = 'middlewareMarker';
/**
 * @internal
 */ function createMiddlewareFactory() {
    function createMiddlewareInner(middlewares) {
        return {
            _middlewares: middlewares,
            unstable_pipe (middlewareBuilderOrFn) {
                const pipedMiddleware = '_middlewares' in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [
                    middlewareBuilderOrFn
                ];
                return createMiddlewareInner([
                    ...middlewares,
                    ...pipedMiddleware
                ]);
            }
        };
    }
    function createMiddleware(fn) {
        return createMiddlewareInner([
            fn
        ]);
    }
    return createMiddleware;
}
/**
 * Create a standalone middleware
 * @see https://trpc.io/docs/v11/server/middlewares#experimental-standalone-middlewares
 * @deprecated use `.unstable_concat()` instead
 */ const experimental_standaloneMiddleware = ()=>({
        create: createMiddlewareFactory()
    });
/**
 * @internal
 * Please note, `trpc-openapi` uses this function.
 */ function createInputMiddleware(parse) {
    const inputMiddleware = async function inputValidatorMiddleware(opts) {
        let parsedInput;
        const rawInput = await opts.getRawInput();
        try {
            parsedInput = await parse(rawInput);
        } catch (cause) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'BAD_REQUEST',
                cause
            });
        }
        // Multiple input parsers
        const combinedInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(opts.input) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(parsedInput) ? {
            ...opts.input,
            ...parsedInput
        } : parsedInput;
        return opts.next({
            input: combinedInput
        });
    };
    inputMiddleware._type = 'input';
    return inputMiddleware;
}
/**
 * @internal
 */ function createOutputMiddleware(parse) {
    const outputMiddleware = async function outputValidatorMiddleware({ next }) {
        const result = await next();
        if (!result.ok) {
            // pass through failures without validating
            return result;
        }
        try {
            const data = await parse(result.data);
            return {
                ...result,
                data
            };
        } catch (cause) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                message: 'Output validation failed',
                code: 'INTERNAL_SERVER_ERROR',
                cause
            });
        }
    };
    outputMiddleware._type = 'output';
    return outputMiddleware;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/standard-schema-v1/error.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StandardSchemaV1Error": (()=>StandardSchemaV1Error)
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
/** A schema error with useful information. */ class StandardSchemaV1Error extends Error {
    /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */ constructor(issues){
        super(issues[0]?.message), /** The schema issues. */ _define_property(this, "issues", void 0);
        this.name = 'SchemaError';
        this.issues = issues;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/parser.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getParseFn": (()=>getParseFn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$standard$2d$schema$2d$v1$2f$error$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/standard-schema-v1/error.mjs [app-rsc] (ecmascript)");
;
function getParseFn(procedureParser) {
    const parser = procedureParser;
    if (typeof parser === 'function' && typeof parser.assert === 'function') {
        // ParserArkTypeEsque - arktype schemas shouldn't be called as a function because they return a union type instead of throwing
        return parser.assert.bind(parser);
    }
    if (typeof parser === 'function') {
        // ParserValibotEsque (>= v0.31.0)
        // ParserCustomValidatorEsque
        return parser;
    }
    if (typeof parser.parseAsync === 'function') {
        // ParserZodEsque
        return parser.parseAsync.bind(parser);
    }
    if (typeof parser.parse === 'function') {
        // ParserZodEsque
        // ParserValibotEsque (< v0.13.0)
        return parser.parse.bind(parser);
    }
    if (typeof parser.validateSync === 'function') {
        // ParserYupEsque
        return parser.validateSync.bind(parser);
    }
    if (typeof parser.create === 'function') {
        // ParserSuperstructEsque
        return parser.create.bind(parser);
    }
    if (typeof parser.assert === 'function') {
        // ParserScaleEsque
        return (value)=>{
            parser.assert(value);
            return value;
        };
    }
    if ('~standard' in parser) {
        // StandardSchemaEsque
        return async (value)=>{
            const result = await parser['~standard'].validate(value);
            if (result.issues) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$standard$2d$schema$2d$v1$2f$error$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StandardSchemaV1Error"](result.issues);
            }
            return result.value;
        };
    }
    throw new Error('Could not find a validator fn');
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/procedureBuilder.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createBuilder": (()=>createBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/middleware.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/parser.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
;
;
;
;
function createNewBuilder(def1, def2) {
    const { middlewares = [], inputs, meta, ...rest } = def2;
    // TODO: maybe have a fn here to warn about calls
    return createBuilder({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeWithoutOverrides"])(def1, rest),
        inputs: [
            ...def1.inputs,
            ...inputs ?? []
        ],
        middlewares: [
            ...def1.middlewares,
            ...middlewares
        ],
        meta: def1.meta && meta ? {
            ...def1.meta,
            ...meta
        } : meta ?? def1.meta
    });
}
function createBuilder(initDef = {}) {
    const _def = {
        procedure: true,
        inputs: [],
        middlewares: [],
        ...initDef
    };
    const builder = {
        _def,
        input (input) {
            const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParseFn"])(input);
            return createNewBuilder(_def, {
                inputs: [
                    input
                ],
                middlewares: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInputMiddleware"])(parser)
                ]
            });
        },
        output (output) {
            const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParseFn"])(output);
            return createNewBuilder(_def, {
                output,
                middlewares: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOutputMiddleware"])(parser)
                ]
            });
        },
        meta (meta) {
            return createNewBuilder(_def, {
                meta
            });
        },
        use (middlewareBuilderOrFn) {
            // Distinguish between a middleware builder and a middleware function
            const middlewares = '_middlewares' in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [
                middlewareBuilderOrFn
            ];
            return createNewBuilder(_def, {
                middlewares: middlewares
            });
        },
        unstable_concat (builder) {
            return createNewBuilder(_def, builder._def);
        },
        query (resolver) {
            return createResolver({
                ..._def,
                type: 'query'
            }, resolver);
        },
        mutation (resolver) {
            return createResolver({
                ..._def,
                type: 'mutation'
            }, resolver);
        },
        subscription (resolver) {
            return createResolver({
                ..._def,
                type: 'subscription'
            }, resolver);
        },
        experimental_caller (caller) {
            return createNewBuilder(_def, {
                caller
            });
        }
    };
    return builder;
}
function createResolver(_defIn, resolver) {
    const finalBuilder = createNewBuilder(_defIn, {
        resolver,
        middlewares: [
            async function resolveMiddleware(opts) {
                const data = await resolver(opts);
                return {
                    marker: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["middlewareMarker"],
                    ok: true,
                    data,
                    ctx: opts.ctx
                };
            }
        ]
    });
    const _def = {
        ...finalBuilder._def,
        type: _defIn.type,
        experimental_caller: Boolean(finalBuilder._def.caller),
        meta: finalBuilder._def.meta,
        $types: null
    };
    const invoke = createProcedureCaller(finalBuilder._def);
    const callerOverride = finalBuilder._def.caller;
    if (!callerOverride) {
        return invoke;
    }
    const callerWrapper = async (...args)=>{
        return await callerOverride({
            args,
            invoke,
            _def: _def
        });
    };
    callerWrapper._def = _def;
    return callerWrapper;
}
const codeblock = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
// run the middlewares recursively with the resolver as the last one
async function callRecursive(index, _def, opts) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const middleware = _def.middlewares[index];
        const result = await middleware({
            ...opts,
            meta: _def.meta,
            input: opts.input,
            next (_nextOpts) {
                const nextOpts = _nextOpts;
                return callRecursive(index + 1, _def, {
                    ...opts,
                    ctx: nextOpts?.ctx ? {
                        ...opts.ctx,
                        ...nextOpts.ctx
                    } : opts.ctx,
                    input: nextOpts && 'input' in nextOpts ? nextOpts.input : opts.input,
                    getRawInput: nextOpts?.getRawInput ?? opts.getRawInput
                });
            }
        });
        return result;
    } catch (cause) {
        return {
            ok: false,
            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause),
            marker: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["middlewareMarker"]
        };
    }
}
function createProcedureCaller(_def) {
    async function procedure(opts) {
        // is direct server-side call
        if (!opts || !('getRawInput' in opts)) {
            throw new Error(codeblock);
        }
        // there's always at least one "next" since we wrap this.resolver in a middleware
        const result = await callRecursive(0, _def, opts);
        if (!result) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'No result from middlewares - did you forget to `return next()`?'
            });
        }
        if (!result.ok) {
            // re-throw original error
            throw result.error;
        }
        return result.data;
    }
    procedure._def = _def;
    procedure.procedure = true;
    // FIXME typecast shouldn't be needed - fixittt
    return procedure;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rootConfig.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * The default check to see if we're in a server
 */ __turbopack_esm__({
    "isServerDefault": (()=>isServerDefault)
});
const isServerDefault = "undefined" === 'undefined' || 'Deno' in window || // eslint-disable-next-line @typescript-eslint/dot-notation
globalThis.process?.env?.['NODE_ENV'] === 'test' || !!globalThis.process?.env?.['JEST_WORKER_ID'] || !!globalThis.process?.env?.['VITEST_WORKER_ID'];
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/initTRPC.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "initTRPC": (()=>initTRPC)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$formatter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/formatter.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/middleware.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$procedureBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/procedureBuilder.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rootConfig$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rootConfig.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$router$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/router.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
class TRPCBuilder {
    /**
   * Add a context shape as a generic to the root object
   * @see https://trpc.io/docs/v11/server/context
   */ context() {
        return new TRPCBuilder();
    }
    /**
   * Add a meta shape as a generic to the root object
   * @see https://trpc.io/docs/v11/quickstart
   */ meta() {
        return new TRPCBuilder();
    }
    /**
   * Create the root object
   * @see https://trpc.io/docs/v11/server/routers#initialize-trpc
   */ create(opts) {
        const config = {
            ...opts,
            transformer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataTransformer"])(opts?.transformer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultTransformer"]),
            isDev: opts?.isDev ?? // eslint-disable-next-line @typescript-eslint/dot-notation
            globalThis.process?.env['NODE_ENV'] !== 'production',
            allowOutsideOfServer: opts?.allowOutsideOfServer ?? false,
            errorFormatter: opts?.errorFormatter ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$formatter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultFormatter"],
            isServer: opts?.isServer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rootConfig$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServerDefault"],
            /**
       * These are just types, they can't be used at runtime
       * @internal
       */ $types: null
        };
        {
            // Server check
            const isServer = opts?.isServer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rootConfig$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServerDefault"];
            if (!isServer && opts?.allowOutsideOfServer !== true) {
                throw new Error(`You're trying to use @trpc/server in a non-server environment. This is not supported by default.`);
            }
        }
        return {
            /**
       * Your router config
       * @internal
       */ _config: config,
            /**
       * Builder object for creating procedures
       * @see https://trpc.io/docs/v11/server/procedures
       */ procedure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$procedureBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBuilder"])({
                meta: opts?.defaultMeta
            }),
            /**
       * Create reusable middlewares
       * @see https://trpc.io/docs/v11/server/middlewares
       */ middleware: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMiddlewareFactory"])(),
            /**
       * Create a router
       * @see https://trpc.io/docs/v11/server/routers
       */ router: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$router$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRouterFactory"])(config),
            /**
       * Merge Routers
       * @see https://trpc.io/docs/v11/server/merging-routers
       */ mergeRouters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$router$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRouters"],
            /**
       * Create a server-side caller for a router
       * @see https://trpc.io/docs/v11/server/server-side-calls
       */ createCallerFactory: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$router$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCallerFactory"])()
        };
    }
}
/**
 * Builder to initialize the tRPC root object - use this exactly once per backend
 * @see https://trpc.io/docs/v11/quickstart
 */ const initTRPC = new TRPCBuilder();
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/procedure.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "procedureTypes": (()=>procedureTypes)
});
const procedureTypes = [
    'query',
    'mutation',
    'subscription'
];
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/parseTRPCMessage.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parseTRPCMessage": (()=>parseTRPCMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$procedure$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/procedure.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
;
;
/* istanbul ignore next -- @preserve */ function assertIsObject(obj) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(obj)) {
        throw new Error('Not an object');
    }
}
/* istanbul ignore next -- @preserve */ function assertIsProcedureType(obj) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$procedure$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["procedureTypes"].includes(obj)) {
        throw new Error('Invalid procedure type');
    }
}
/* istanbul ignore next -- @preserve */ function assertIsRequestId(obj) {
    if (obj !== null && typeof obj === 'number' && isNaN(obj) && typeof obj !== 'string') {
        throw new Error('Invalid request id');
    }
}
/* istanbul ignore next -- @preserve */ function assertIsString(obj) {
    if (typeof obj !== 'string') {
        throw new Error('Invalid string');
    }
}
/* istanbul ignore next -- @preserve */ function assertIsJSONRPC2OrUndefined(obj) {
    if (typeof obj !== 'undefined' && obj !== '2.0') {
        throw new Error('Must be JSONRPC 2.0');
    }
}
/** @public */ function parseTRPCMessage(obj, transformer) {
    assertIsObject(obj);
    const { id, jsonrpc, method, params } = obj;
    assertIsRequestId(id);
    assertIsJSONRPC2OrUndefined(jsonrpc);
    if (method === 'subscription.stop') {
        return {
            id,
            jsonrpc,
            method
        };
    }
    assertIsProcedureType(method);
    assertIsObject(params);
    const { input: rawInput, path, lastEventId } = params;
    assertIsString(path);
    if (lastEventId !== undefined) {
        assertIsString(lastEventId);
    }
    const input = transformer.input.deserialize(rawInput);
    return {
        id,
        jsonrpc,
        method,
        params: {
            input,
            path,
            lastEventId
        }
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$createProxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/createProxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$formatter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/formatter.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/getErrorShape.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$contentType$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/contentType.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$contentTypeParsers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/contentTypeParsers.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$formDataToObject$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/formDataToObject.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$getHTTPStatusCode$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/getHTTPStatusCode.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$abortError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/abortError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$parseConnectionParams$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/parseConnectionParams.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$resolveResponse$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/resolveResponse.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$initTRPC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/initTRPC.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/middleware.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/parser.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$procedure$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/procedure.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$procedureBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/procedureBuilder.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rootConfig$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rootConfig.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$router$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/router.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/codes.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$parseTRPCMessage$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/parseTRPCMessage.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$jsonl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/jsonl.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$sse$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/sse.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$tracked$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/tracked.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$createDeferred$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/createDeferred.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/asyncIterable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$standard$2d$schema$2d$v1$2f$error$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/standard-schema-v1/error.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/index.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$createProxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/createProxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/getErrorShape.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$router$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/router.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$tracked$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/tracked.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$initTRPC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/initTRPC.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/middleware.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$standard$2d$schema$2d$v1$2f$error$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/standard-schema-v1/error.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rootConfig$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rootConfig.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/index.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/operators.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "distinctUntilChanged": (()=>distinctUntilChanged),
    "distinctUntilDeepChanged": (()=>distinctUntilDeepChanged),
    "map": (()=>map),
    "share": (()=>share),
    "tap": (()=>tap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/observable.mjs [app-rsc] (ecmascript)");
;
function map(project) {
    return (source)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["observable"])((destination)=>{
            let index = 0;
            const subscription = source.subscribe({
                next (value) {
                    destination.next(project(value, index++));
                },
                error (error) {
                    destination.error(error);
                },
                complete () {
                    destination.complete();
                }
            });
            return subscription;
        });
    };
}
function share(_opts) {
    return (source)=>{
        let refCount = 0;
        let subscription = null;
        const observers = [];
        function startIfNeeded() {
            if (subscription) {
                return;
            }
            subscription = source.subscribe({
                next (value) {
                    for (const observer of observers){
                        observer.next?.(value);
                    }
                },
                error (error) {
                    for (const observer of observers){
                        observer.error?.(error);
                    }
                },
                complete () {
                    for (const observer of observers){
                        observer.complete?.();
                    }
                }
            });
        }
        function resetIfNeeded() {
            // "resetOnRefCountZero"
            if (refCount === 0 && subscription) {
                const _sub = subscription;
                subscription = null;
                _sub.unsubscribe();
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["observable"])((subscriber)=>{
            refCount++;
            observers.push(subscriber);
            startIfNeeded();
            return {
                unsubscribe () {
                    refCount--;
                    resetIfNeeded();
                    const index = observers.findIndex((v)=>v === subscriber);
                    if (index > -1) {
                        observers.splice(index, 1);
                    }
                }
            };
        });
    };
}
function tap(observer) {
    return (source)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["observable"])((destination)=>{
            return source.subscribe({
                next (value) {
                    observer.next?.(value);
                    destination.next(value);
                },
                error (error) {
                    observer.error?.(error);
                    destination.error(error);
                },
                complete () {
                    observer.complete?.();
                    destination.complete();
                }
            });
        });
    };
}
const distinctUnsetMarker = Symbol();
function distinctUntilChanged(compare = (a, b)=>a === b) {
    return (source)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["observable"])((destination)=>{
            let lastValue = distinctUnsetMarker;
            return source.subscribe({
                next (value) {
                    if (lastValue !== distinctUnsetMarker && compare(lastValue, value)) {
                        return;
                    }
                    lastValue = value;
                    destination.next(value);
                },
                error (error) {
                    destination.error(error);
                },
                complete () {
                    destination.complete();
                }
            });
        });
    };
}
const isDeepEqual = (a, b)=>{
    if (a === b) {
        return true;
    }
    const bothAreObjects = a && b && typeof a === 'object' && typeof b === 'object';
    return !!bothAreObjects && Object.keys(a).length === Object.keys(b).length && Object.entries(a).every(([k, v])=>isDeepEqual(v, b[k]));
};
function distinctUntilDeepChanged() {
    return distinctUntilChanged(isDeepEqual);
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/behaviorSubject.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "behaviorSubject": (()=>behaviorSubject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/observable.mjs [app-rsc] (ecmascript)");
;
/**
 * @internal
 * An observable that maintains and provides a "current value" to subscribers
 * @see https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
 */ function behaviorSubject(initialValue) {
    let value = initialValue;
    const observerList = [];
    const addObserver = (observer)=>{
        if (value !== undefined) {
            observer.next(value);
        }
        observerList.push(observer);
    };
    const removeObserver = (observer)=>{
        observerList.splice(observerList.indexOf(observer), 1);
    };
    const obs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["observable"])((observer)=>{
        addObserver(observer);
        return ()=>{
            removeObserver(observer);
        };
    });
    obs.next = (nextValue)=>{
        if (value === nextValue) {
            return;
        }
        value = nextValue;
        for (const observer of observerList){
            observer.next(nextValue);
        }
    };
    obs.get = ()=>value;
    return obs;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/index.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/index.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/observable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$operators$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/operators.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$behaviorSubject$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/behaviorSubject.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/observable/index.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/rpc.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/rpc.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/codes.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$parseTRPCMessage$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/parseTRPCMessage.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rootConfig$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/unstable-core-do-not-import/rootConfig.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$755_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$rpc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.755_typescript@5.7.3/node_modules/@trpc/server/dist/rpc.mjs [app-rsc] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=65cfb_%40trpc_server_dist_86f90d._.js.map