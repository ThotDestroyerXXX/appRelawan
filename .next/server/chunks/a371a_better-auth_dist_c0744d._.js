module.exports = {

"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TOKZL3ZI.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkPassword": (()=>checkPassword),
    "validatePassword": (()=>validatePassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-call@0.3.3/node_modules/better-call/dist/index.js [app-route] (ecmascript)");
;
// src/utils/password.ts
async function validatePassword(ctx, data) {
    const accounts = await ctx.context.internalAdapter.findAccounts(data.userId);
    const credentialAccount = accounts?.find((account)=>account.providerId === "credential");
    const currentPassword = credentialAccount?.password;
    if (!credentialAccount || !currentPassword) {
        return false;
    }
    const compare = await ctx.context.password.verify({
        hash: currentPassword,
        password: data.password
    });
    return compare;
}
async function checkPassword(userId, c) {
    const accounts = await c.context.internalAdapter.findAccounts(userId);
    const credentialAccount = accounts?.find((account)=>account.providerId === "credential");
    const currentPassword = credentialAccount?.password;
    if (!credentialAccount || !currentPassword || !c.body.password) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "No password credential found"
        });
    }
    const compare = await c.context.password.verify({
        hash: currentPassword,
        password: c.body.password
    });
    if (!compare) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Invalid password"
        });
    }
    return true;
}
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-FURNA6HY.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/utils/date.ts
__turbopack_esm__({
    "getDate": (()=>getDate)
});
var getDate = (span, unit = "ms")=>{
    return new Date(Date.now() + (unit === "sec" ? span * 1e3 : span));
};
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-GTQM7JU7.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createAuthorizationURL": (()=>createAuthorizationURL),
    "generateCodeChallenge": (()=>generateCodeChallenge),
    "getOAuth2Tokens": (()=>getOAuth2Tokens),
    "validateAuthorizationCode": (()=>validateAuthorizationCode),
    "validateToken": (()=>validateToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-FURNA6HY.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/hash.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-fetch+fetch@1.1.12/node_modules/@better-fetch/fetch/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/jwt/verify.js [app-route] (ecmascript)");
;
;
;
;
;
async function generateCodeChallenge(codeVerifier) {
    const codeChallengeBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(codeVerifier);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["base64Url"].encode(new Uint8Array(codeChallengeBytes), {
        padding: false
    });
}
function getOAuth2Tokens(data) {
    return {
        tokenType: data.token_type,
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        accessTokenExpiresAt: data.expires_in ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDate"])(data.expires_in, "sec") : void 0,
        scopes: data?.scope ? typeof data.scope === "string" ? data.scope.split(" ") : data.scope : [],
        idToken: data.id_token
    };
}
// src/oauth2/create-authorization-url.ts
async function createAuthorizationURL({ id, options, authorizationEndpoint, state, codeVerifier, scopes, claims, redirectURI, duration, prompt }) {
    const url = new URL(authorizationEndpoint);
    url.searchParams.set("response_type", "code");
    url.searchParams.set("client_id", options.clientId);
    url.searchParams.set("state", state);
    url.searchParams.set("scope", scopes.join(" "));
    url.searchParams.set("redirect_uri", options.redirectURI || redirectURI);
    if (codeVerifier) {
        const codeChallenge = await generateCodeChallenge(codeVerifier);
        url.searchParams.set("code_challenge_method", "S256");
        url.searchParams.set("code_challenge", codeChallenge);
    }
    if (claims) {
        const claimsObj = claims.reduce((acc, claim)=>{
            acc[claim] = null;
            return acc;
        }, {});
        url.searchParams.set("claims", JSON.stringify({
            id_token: {
                email: null,
                email_verified: null,
                ...claimsObj
            }
        }));
    }
    if (duration) {
        url.searchParams.set("duration", duration);
    }
    if (prompt) {
        url.searchParams.set("prompt", "select_account");
    }
    return url;
}
async function validateAuthorizationCode({ code, codeVerifier, redirectURI, options, tokenEndpoint, authentication }) {
    const body = new URLSearchParams();
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json",
        "user-agent": "better-auth"
    };
    body.set("grant_type", "authorization_code");
    body.set("code", code);
    codeVerifier && body.set("code_verifier", codeVerifier);
    body.set("redirect_uri", options.redirectURI || redirectURI);
    if (authentication === "basic") {
        const encodedCredentials = btoa(`${options.clientId}:${options.clientSecret}`);
        headers["authorization"] = `Basic ${encodedCredentials}`;
    } else {
        body.set("client_id", options.clientId);
        body.set("client_secret", options.clientSecret);
    }
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])(tokenEndpoint, {
        method: "POST",
        body,
        headers
    });
    if (error) {
        throw error;
    }
    const tokens = getOAuth2Tokens(data);
    return tokens;
}
async function validateToken(token, jwksEndpoint) {
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])(jwksEndpoint, {
        method: "GET",
        headers: {
            accept: "application/json",
            "user-agent": "better-auth"
        }
    });
    if (error) {
        throw error;
    }
    const keys = data["keys"];
    const header = JSON.parse(atob(token.split(".")[0]));
    const key = keys.find((key2)=>key2.kid === header.kid);
    if (!key) {
        throw new Error("Key not found");
    }
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, key);
    return verified;
}
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-KLDFBLYL.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HIDE_METADATA": (()=>HIDE_METADATA),
    "createLogger": (()=>createLogger),
    "generateId": (()=>generateId),
    "levels": (()=>levels),
    "logger": (()=>logger),
    "shouldPublishLog": (()=>shouldPublishLog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/random.mjs [app-route] (ecmascript)");
;
// src/utils/logger.ts
var levels = [
    "info",
    "success",
    "warn",
    "error",
    "debug"
];
function shouldPublishLog(currentLogLevel, logLevel) {
    return levels.indexOf(logLevel) <= levels.indexOf(currentLogLevel);
}
var colors = {
    reset: "\x1B[0m",
    bright: "\x1B[1m",
    dim: "\x1B[2m",
    underscore: "\x1B[4m",
    blink: "\x1B[5m",
    reverse: "\x1B[7m",
    hidden: "\x1B[8m",
    fg: {
        black: "\x1B[30m",
        red: "\x1B[31m",
        green: "\x1B[32m",
        yellow: "\x1B[33m",
        blue: "\x1B[34m",
        magenta: "\x1B[35m",
        cyan: "\x1B[36m",
        white: "\x1B[37m"
    },
    bg: {
        black: "\x1B[40m",
        red: "\x1B[41m",
        green: "\x1B[42m",
        yellow: "\x1B[43m",
        blue: "\x1B[44m",
        magenta: "\x1B[45m",
        cyan: "\x1B[46m",
        white: "\x1B[47m"
    }
};
var levelColors = {
    info: colors.fg.blue,
    success: colors.fg.green,
    warn: colors.fg.yellow,
    error: colors.fg.red,
    debug: colors.fg.magenta
};
var formatMessage = (level, message)=>{
    const timestamp = /* @__PURE__ */ new Date().toISOString();
    return `${colors.dim}${timestamp}${colors.reset} ${levelColors[level]}${level.toUpperCase()}${colors.reset} ${colors.bright}[Better Auth]:${colors.reset} ${message}`;
};
var createLogger = (options)=>{
    const enabled = options?.disabled !== true;
    const logLevel = options?.level ?? "error";
    const LogFunc = (level, message, args = [])=>{
        if (!enabled || !shouldPublishLog(logLevel, level)) {
            return;
        }
        const formattedMessage = formatMessage(level, message);
        if (!options || typeof options.log !== "function") {
            if (level === "error") {
                console.error(formattedMessage, ...args);
            } else if (level === "warn") {
                console.warn(formattedMessage, ...args);
            } else {
                console.log(formattedMessage, ...args);
            }
            return;
        }
        options.log(level === "success" ? "info" : level, message, ...args);
    };
    return Object.fromEntries(levels.map((level)=>[
            level,
            (...[message, ...args])=>LogFunc(level, message, args)
        ]));
};
var logger = createLogger();
// src/utils/hide-metadata.ts
var HIDE_METADATA = {
    isAction: false
};
var generateId = (size)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createRandomStringGenerator"])("a-z", "A-Z", "0-9")(size || 32);
};
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-UNWCXKMP.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/error/index.ts
__turbopack_esm__({
    "BetterAuthError": (()=>BetterAuthError),
    "MissingDependencyError": (()=>MissingDependencyError)
});
var BetterAuthError = class extends Error {
    constructor(message, cause){
        super(message);
        this.name = "BetterAuthError";
        this.message = message;
        this.cause = cause;
        this.stack = "";
    }
};
var MissingDependencyError = class extends BetterAuthError {
    constructor(pkgName){
        super(`The package "${pkgName}" is required. Make sure it is installed.`, pkgName);
    }
};
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-VXDYNCOX.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SocialProviderListEnum": (()=>SocialProviderListEnum),
    "apple": (()=>apple),
    "discord": (()=>discord),
    "dropbox": (()=>dropbox),
    "facebook": (()=>facebook),
    "getApplePublicKey": (()=>getApplePublicKey),
    "github": (()=>github),
    "gitlab": (()=>gitlab),
    "google": (()=>google),
    "linkedin": (()=>linkedin),
    "microsoft": (()=>microsoft),
    "reddit": (()=>reddit),
    "socialProviderList": (()=>socialProviderList),
    "socialProviders": (()=>socialProviders),
    "spotify": (()=>spotify),
    "twitch": (()=>twitch),
    "twitter": (()=>twitter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-GTQM7JU7.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-KLDFBLYL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-UNWCXKMP.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-fetch+fetch@1.1.12/node_modules/@better-fetch/fetch/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-call@0.3.3/node_modules/better-call/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_protected_header$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/util/decode_protected_header.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/util/decode_jwt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$import$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/key/import.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwks$2f$remote$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/jwks/remote.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
var apple = (options)=>{
    const tokenEndpoint = "https://appleid.apple.com/auth/token";
    return {
        id: "apple",
        name: "Apple",
        createAuthorizationURL ({ state, scopes, redirectURI }) {
            const _scope = scopes || [
                "email",
                "name"
            ];
            options.scope && _scope.push(...options.scope);
            return new URL(`https://appleid.apple.com/auth/authorize?client_id=${options.clientId}&response_type=code&redirect_uri=${options.redirectURI || redirectURI}&scope=${_scope.join(" ")}&state=${state}&response_mode=form_post`);
        },
        validateAuthorizationCode: async ({ code, codeVerifier, redirectURI })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                codeVerifier,
                redirectURI,
                options,
                tokenEndpoint
            });
        },
        async verifyIdToken (token, nonce) {
            if (options.disableIdTokenSignIn) {
                return false;
            }
            if (options.verifyIdToken) {
                return options.verifyIdToken(token, nonce);
            }
            const decodedHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_protected_header$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeProtectedHeader"])(token);
            const { kid, alg: jwtAlg } = decodedHeader;
            if (!kid || !jwtAlg) return false;
            const publicKey = await getApplePublicKey(kid);
            const { payload: jwtClaims } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, publicKey, {
                algorithms: [
                    jwtAlg
                ],
                issuer: "https://appleid.apple.com",
                audience: options.appBundleIdentifier || options.clientId,
                maxTokenAge: "1h"
            });
            [
                "email_verified",
                "is_private_email"
            ].forEach((field)=>{
                if (jwtClaims[field] !== void 0) {
                    jwtClaims[field] = Boolean(jwtClaims[field]);
                }
            });
            if (nonce && jwtClaims.nonce !== nonce) {
                return false;
            }
            return !!jwtClaims;
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            if (!token.idToken) {
                return null;
            }
            const profile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeJwt"])(token.idToken);
            if (!profile) {
                return null;
            }
            const name = profile.user ? `${profile.user.name.firstName} ${profile.user.name.lastName}` : profile.email;
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.sub,
                    name,
                    emailVerified: false,
                    email: profile.email,
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var getApplePublicKey = async (kid)=>{
    const APPLE_BASE_URL = "https://appleid.apple.com";
    const JWKS_APPLE_URI = "/auth/keys";
    const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])(`${APPLE_BASE_URL}${JWKS_APPLE_URI}`);
    if (!data?.keys) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Keys not found"
        });
    }
    const jwk = data.keys.find((key)=>key.kid === kid);
    if (!jwk) {
        throw new Error(`JWK with kid ${kid} not found`);
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$import$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["importJWK"])(jwk, jwk.alg);
};
var discord = (options)=>{
    return {
        id: "discord",
        name: "Discord",
        createAuthorizationURL ({ state, scopes, redirectURI }) {
            const _scopes = scopes || [
                "identify",
                "email"
            ];
            options.scope && _scopes.push(...options.scope);
            return new URL(`https://discord.com/api/oauth2/authorize?scope=${_scopes.join("+")}&response_type=code&client_id=${options.clientId}&redirect_uri=${encodeURIComponent(options.redirectURI || redirectURI)}&state=${state}&prompt=${options.prompt || "none"}`);
        },
        validateAuthorizationCode: async ({ code, redirectURI })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                redirectURI,
                options,
                tokenEndpoint: "https://discord.com/api/oauth2/token"
            });
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])("https://discord.com/api/users/@me", {
                headers: {
                    authorization: `Bearer ${token.accessToken}`
                }
            });
            if (error) {
                return null;
            }
            if (profile.avatar === null) {
                const defaultAvatarNumber = profile.discriminator === "0" ? Number(BigInt(profile.id) >> BigInt(22)) % 6 : parseInt(profile.discriminator) % 5;
                profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
            } else {
                const format = profile.avatar.startsWith("a_") ? "gif" : "png";
                profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
            }
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.id,
                    name: profile.display_name || profile.username || "",
                    email: profile.email,
                    emailVerified: profile.verified,
                    image: profile.image_url,
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var facebook = (options)=>{
    return {
        id: "facebook",
        name: "Facebook",
        async createAuthorizationURL ({ state, scopes, redirectURI }) {
            const _scopes = scopes || [
                "email",
                "public_profile"
            ];
            options.scope && _scopes.push(...options.scope);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: "facebook",
                options,
                authorizationEndpoint: "https://www.facebook.com/v21.0/dialog/oauth",
                scopes: _scopes,
                state,
                redirectURI
            });
        },
        validateAuthorizationCode: async ({ code, redirectURI })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                redirectURI,
                options,
                tokenEndpoint: "https://graph.facebook.com/oauth/access_token"
            });
        },
        async verifyIdToken (token, nonce) {
            if (options.disableIdTokenSignIn) {
                return false;
            }
            if (options.verifyIdToken) {
                return options.verifyIdToken(token, nonce);
            }
            if (token.split(".").length) {
                try {
                    const { payload: jwtClaims } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwks$2f$remote$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createRemoteJWKSet"])(new URL("https://www.facebook.com/.well-known/oauth/openid/jwks")), {
                        algorithms: [
                            "RS256"
                        ],
                        audience: options.clientId,
                        issuer: "https://www.facebook.com"
                    });
                    if (nonce && jwtClaims.nonce !== nonce) {
                        return false;
                    }
                    return !!jwtClaims;
                } catch (error) {
                    return false;
                }
            }
            return true;
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            if (token.idToken) {
                const profile2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeJwt"])(token.idToken);
                const user = {
                    id: profile2.sub,
                    name: profile2.name,
                    email: profile2.email,
                    picture: {
                        data: {
                            url: profile2.picture,
                            height: 100,
                            width: 100,
                            is_silhouette: false
                        }
                    }
                };
                const userMap2 = await options.mapProfileToUser?.({
                    ...user,
                    email_verified: true
                });
                return {
                    user: {
                        ...user,
                        emailVerified: true,
                        ...userMap2
                    },
                    data: profile2
                };
            }
            const fields = [
                "id",
                "name",
                "email",
                "picture",
                ...options?.fields || []
            ];
            const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])("https://graph.facebook.com/me?fields=" + fields.join(","), {
                auth: {
                    type: "Bearer",
                    token: token.accessToken
                }
            });
            if (error) {
                return null;
            }
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.id,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture.data.url,
                    emailVerified: profile.email_verified,
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var github = (options)=>{
    const tokenEndpoint = "https://github.com/login/oauth/access_token";
    return {
        id: "github",
        name: "GitHub",
        createAuthorizationURL ({ state, scopes, codeVerifier, redirectURI }) {
            const _scopes = scopes || [
                "read:user",
                "user:email"
            ];
            options.scope && _scopes.push(...options.scope);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: "github",
                options,
                authorizationEndpoint: "https://github.com/login/oauth/authorize",
                scopes: _scopes,
                state,
                redirectURI
            });
        },
        validateAuthorizationCode: async ({ code, redirectURI })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                redirectURI,
                options,
                tokenEndpoint
            });
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])("https://api.github.com/user", {
                headers: {
                    "User-Agent": "better-auth",
                    authorization: `Bearer ${token.accessToken}`
                }
            });
            if (error) {
                return null;
            }
            let emailVerified = false;
            if (!profile.email) {
                const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])("https://api.github.com/user/emails", {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`,
                        "User-Agent": "better-auth"
                    }
                });
                if (data) {
                    profile.email = (data.find((e)=>e.primary) ?? data[0])?.email;
                    emailVerified = data.find((e)=>e.email === profile.email)?.verified ?? false;
                }
            }
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    emailVerified,
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var google = (options)=>{
    return {
        id: "google",
        name: "Google",
        async createAuthorizationURL ({ state, scopes, codeVerifier, redirectURI }) {
            if (!options.clientId || !options.clientSecret) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("Client Id and Client Secret is required for Google. Make sure to provide them in the options.");
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"]("CLIENT_ID_AND_SECRET_REQUIRED");
            }
            if (!codeVerifier) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"]("codeVerifier is required for Google");
            }
            const _scopes = scopes || [
                "email",
                "profile",
                "openid"
            ];
            options.scope && _scopes.push(...options.scope);
            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: "google",
                options,
                authorizationEndpoint: "https://accounts.google.com/o/oauth2/auth",
                scopes: _scopes,
                state,
                codeVerifier,
                redirectURI
            });
            options.accessType && url.searchParams.set("access_type", options.accessType);
            options.prompt && url.searchParams.set("prompt", options.prompt);
            options.display && url.searchParams.set("display", options.display);
            options.hd && url.searchParams.set("hd", options.hd);
            return url;
        },
        validateAuthorizationCode: async ({ code, codeVerifier, redirectURI })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                codeVerifier,
                redirectURI,
                options,
                tokenEndpoint: "https://oauth2.googleapis.com/token"
            });
        },
        async verifyIdToken (token, nonce) {
            if (options.disableIdTokenSignIn) {
                return false;
            }
            if (options.verifyIdToken) {
                return options.verifyIdToken(token, nonce);
            }
            const googlePublicKeyUrl = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`;
            const { data: tokenInfo } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])(googlePublicKeyUrl);
            if (!tokenInfo) {
                return false;
            }
            const isValid = tokenInfo.aud === options.clientId && (tokenInfo.iss === "https://accounts.google.com" || tokenInfo.iss === "accounts.google.com");
            return isValid;
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            if (!token.idToken) {
                return null;
            }
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeJwt"])(token.idToken);
            const userMap = await options.mapProfileToUser?.(user);
            return {
                user: {
                    id: user.sub,
                    name: user.name,
                    email: user.email,
                    image: user.picture,
                    emailVerified: user.email_verified,
                    ...userMap
                },
                data: user
            };
        }
    };
};
var microsoft = (options)=>{
    const tenant = options.tenantId || "common";
    const authorizationEndpoint = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`;
    const tokenEndpoint = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;
    return {
        id: "microsoft",
        name: "Microsoft EntraID",
        createAuthorizationURL (data) {
            const scopes = data.scopes || [
                "openid",
                "profile",
                "email",
                "User.Read"
            ];
            options.scope && scopes.push(...options.scope);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: "microsoft",
                options,
                authorizationEndpoint,
                state: data.state,
                codeVerifier: data.codeVerifier,
                scopes,
                redirectURI: data.redirectURI,
                prompt: options.requireSelectAccount || false
            });
        },
        validateAuthorizationCode ({ code, codeVerifier, redirectURI }) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                codeVerifier,
                redirectURI,
                options,
                tokenEndpoint
            });
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            if (!token.idToken) {
                return null;
            }
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeJwt"])(token.idToken);
            const profilePhotoSize = options.profilePhotoSize || 48;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])(`https://graph.microsoft.com/v1.0/me/photos/${profilePhotoSize}x${profilePhotoSize}/$value`, {
                headers: {
                    Authorization: `Bearer ${token.accessToken}`
                },
                async onResponse (context) {
                    if (options.disableProfilePhoto || !context.response.ok) {
                        return;
                    }
                    try {
                        const response = context.response.clone();
                        const pictureBuffer = await response.arrayBuffer();
                        const pictureBase64 = Buffer.from(pictureBuffer).toString("base64");
                        user.picture = `data:image/jpeg;base64, ${pictureBase64}`;
                    } catch (e) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error(e && typeof e === "object" && "name" in e ? e.name : "", e);
                    }
                }
            });
            const userMap = await options.mapProfileToUser?.(user);
            return {
                user: {
                    id: user.sub,
                    name: user.name,
                    email: user.email,
                    image: user.picture,
                    emailVerified: true,
                    ...userMap
                },
                data: user
            };
        }
    };
};
var spotify = (options)=>{
    return {
        id: "spotify",
        name: "Spotify",
        createAuthorizationURL ({ state, scopes, codeVerifier, redirectURI }) {
            const _scopes = scopes || [
                "user-read-email"
            ];
            options.scope && _scopes.push(...options.scope);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: "spotify",
                options,
                authorizationEndpoint: "https://accounts.spotify.com/authorize",
                scopes: _scopes,
                state,
                codeVerifier,
                redirectURI
            });
        },
        validateAuthorizationCode: async ({ code, codeVerifier, redirectURI })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                codeVerifier,
                redirectURI,
                options,
                tokenEndpoint: "https://accounts.spotify.com/api/token"
            });
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])("https://api.spotify.com/v1/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token.accessToken}`
                }
            });
            if (error) {
                return null;
            }
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.id,
                    name: profile.display_name,
                    email: profile.email,
                    image: profile.images[0]?.url,
                    emailVerified: false,
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var twitch = (options)=>{
    return {
        id: "twitch",
        name: "Twitch",
        createAuthorizationURL ({ state, scopes, redirectURI }) {
            const _scopes = scopes || [
                "user:read:email",
                "openid"
            ];
            options.scope && _scopes.push(...options.scope);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: "twitch",
                redirectURI,
                options,
                authorizationEndpoint: "https://id.twitch.tv/oauth2/authorize",
                scopes: _scopes,
                state,
                claims: options.claims || [
                    "email",
                    "email_verified",
                    "preferred_username",
                    "picture"
                ]
            });
        },
        validateAuthorizationCode: async ({ code, redirectURI })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                redirectURI,
                options,
                tokenEndpoint: "https://id.twitch.tv/oauth2/token"
            });
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            const idToken = token.idToken;
            if (!idToken) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("No idToken found in token");
                return null;
            }
            const profile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeJwt"])(idToken);
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.sub,
                    name: profile.preferred_username,
                    email: profile.email,
                    image: profile.picture,
                    emailVerified: false,
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var twitter = (options)=>{
    return {
        id: "twitter",
        name: "Twitter",
        createAuthorizationURL (data) {
            const _scopes = data.scopes || [
                "users.read",
                "tweet.read",
                "offline.access"
            ];
            options.scope && _scopes.push(...options.scope);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: "twitter",
                options,
                authorizationEndpoint: "https://x.com/i/oauth2/authorize",
                scopes: _scopes,
                state: data.state,
                codeVerifier: data.codeVerifier,
                redirectURI: data.redirectURI
            });
        },
        validateAuthorizationCode: async ({ code, codeVerifier, redirectURI })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                codeVerifier,
                authentication: "basic",
                redirectURI,
                options,
                tokenEndpoint: "https://api.x.com/2/oauth2/token"
            });
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])("https://api.x.com/2/users/me?user.fields=profile_image_url", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token.accessToken}`
                }
            });
            if (error) {
                return null;
            }
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.data.id,
                    name: profile.data.name,
                    email: profile.data.username || null,
                    image: profile.data.profile_image_url,
                    emailVerified: profile.data.verified || false,
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var dropbox = (options)=>{
    const tokenEndpoint = "https://api.dropboxapi.com/oauth2/token";
    return {
        id: "dropbox",
        name: "Dropbox",
        createAuthorizationURL: async ({ state, scopes, codeVerifier, redirectURI })=>{
            const _scopes = scopes || [
                "account_info.read"
            ];
            options.scope && _scopes.push(...options.scope);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: "dropbox",
                options,
                authorizationEndpoint: "https://www.dropbox.com/oauth2/authorize",
                scopes: _scopes,
                state,
                redirectURI,
                codeVerifier
            });
        },
        validateAuthorizationCode: async ({ code, codeVerifier, redirectURI })=>{
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                codeVerifier,
                redirectURI,
                options,
                tokenEndpoint
            });
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])("https://api.dropboxapi.com/2/users/get_current_account", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token.accessToken}`
                }
            });
            if (error) {
                return null;
            }
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.account_id,
                    name: profile.name?.display_name,
                    email: profile.email,
                    emailVerified: profile.email_verified || false,
                    image: profile.profile_photo_url,
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var linkedin = (options)=>{
    const authorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
    const tokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
    return {
        id: "linkedin",
        name: "Linkedin",
        createAuthorizationURL: async ({ state, scopes, redirectURI })=>{
            const _scopes = scopes || [
                "profile",
                "email",
                "openid"
            ];
            options.scope && _scopes.push(...options.scope);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: "linkedin",
                options,
                authorizationEndpoint,
                scopes: _scopes,
                state,
                redirectURI
            });
        },
        validateAuthorizationCode: async ({ code, redirectURI })=>{
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                redirectURI,
                options,
                tokenEndpoint
            });
        },
        async getUserInfo (token) {
            const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])("https://api.linkedin.com/v2/userinfo", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token.accessToken}`
                }
            });
            if (error) {
                return null;
            }
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    emailVerified: profile.email_verified || false,
                    image: profile.picture,
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var cleanDoubleSlashes = (input = "")=>{
    return input.split("://").map((str)=>str.replace(/\/{2,}/g, "/")).join("://");
};
var issuerToEndpoints = (issuer)=>{
    let baseUrl = issuer || "https://gitlab.com";
    return {
        authorizationEndpoint: cleanDoubleSlashes(`${baseUrl}/oauth/authorize`),
        tokenEndpoint: cleanDoubleSlashes(`${baseUrl}/oauth/token`),
        userinfoEndpoint: cleanDoubleSlashes(`${baseUrl}/api/v4/user`)
    };
};
var gitlab = (options)=>{
    const { authorizationEndpoint, tokenEndpoint, userinfoEndpoint } = issuerToEndpoints(options.issuer);
    const issuerId = "gitlab";
    const issuerName = "Gitlab";
    return {
        id: issuerId,
        name: issuerName,
        createAuthorizationURL: async ({ state, scopes, codeVerifier, redirectURI })=>{
            const _scopes = scopes || [
                "read_user"
            ];
            options.scope && _scopes.push(...options.scope);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: issuerId,
                options,
                authorizationEndpoint,
                scopes: _scopes,
                state,
                redirectURI,
                codeVerifier
            });
        },
        validateAuthorizationCode: async ({ code, redirectURI, codeVerifier })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                code,
                redirectURI,
                options,
                codeVerifier,
                tokenEndpoint
            });
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])(userinfoEndpoint, {
                headers: {
                    authorization: `Bearer ${token.accessToken}`
                }
            });
            if (error || profile.state !== "active" || profile.locked) {
                return null;
            }
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.id.toString(),
                    name: profile.name ?? profile.username,
                    email: profile.email,
                    image: profile.avatar_url,
                    emailVerified: true,
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var reddit = (options)=>{
    return {
        id: "reddit",
        name: "Reddit",
        createAuthorizationURL ({ state, scopes, redirectURI }) {
            const _scopes = scopes || [
                "identity"
            ];
            options.scope && _scopes.push(...options.scope);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                id: "reddit",
                options,
                authorizationEndpoint: "https://www.reddit.com/api/v1/authorize",
                scopes: _scopes,
                state,
                redirectURI,
                duration: options.duration
            });
        },
        validateAuthorizationCode: async ({ code, redirectURI })=>{
            const body = new URLSearchParams({
                grant_type: "authorization_code",
                code,
                redirect_uri: options.redirectURI || redirectURI
            });
            const headers = {
                "content-type": "application/x-www-form-urlencoded",
                accept: "text/plain",
                "user-agent": "better-auth",
                Authorization: `Basic ${Buffer.from(`${options.clientId}:${options.clientSecret}`).toString("base64")}`
            };
            const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])("https://www.reddit.com/api/v1/access_token", {
                method: "POST",
                headers,
                body: body.toString()
            });
            if (error) {
                throw error;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOAuth2Tokens"])(data);
        },
        async getUserInfo (token) {
            if (options.getUserInfo) {
                return options.getUserInfo(token);
            }
            const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$12$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterFetch"])("https://oauth.reddit.com/api/v1/me", {
                headers: {
                    Authorization: `Bearer ${token.accessToken}`,
                    "User-Agent": "better-auth"
                }
            });
            if (error) {
                return null;
            }
            const userMap = await options.mapProfileToUser?.(profile);
            return {
                user: {
                    id: profile.id,
                    name: profile.name,
                    email: profile.oauth_client_id,
                    emailVerified: profile.has_verified_email,
                    image: profile.icon_img?.split("?")[0],
                    ...userMap
                },
                data: profile
            };
        }
    };
};
var socialProviders = {
    apple,
    discord,
    facebook,
    github,
    microsoft,
    google,
    spotify,
    twitch,
    twitter,
    dropbox,
    linkedin,
    gitlab,
    reddit
};
var socialProviderList = Object.keys(socialProviders);
var SocialProviderListEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum(socialProviderList, {
    description: "OAuth2 provider to use"
});
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TQQSPPNA.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/utils/env.ts
__turbopack_esm__({
    "env": (()=>env),
    "isDevelopment": (()=>isDevelopment),
    "isProduction": (()=>isProduction),
    "isTest": (()=>isTest)
});
var _envShim = /* @__PURE__ */ Object.create(null);
var _getEnv = (useShim)=>globalThis.process?.env || //@ts-expect-error
    globalThis.Deno?.env.toObject() || //@ts-expect-error
    globalThis.__env__ || (useShim ? _envShim : globalThis);
var env = new Proxy(_envShim, {
    get (_, prop) {
        const env2 = _getEnv();
        return env2[prop] ?? _envShim[prop];
    },
    has (_, prop) {
        const env2 = _getEnv();
        return prop in env2 || prop in _envShim;
    },
    set (_, prop, value) {
        const env2 = _getEnv(true);
        env2[prop] = value;
        return true;
    },
    deleteProperty (_, prop) {
        if (!prop) {
            return false;
        }
        const env2 = _getEnv(true);
        delete env2[prop];
        return true;
    },
    ownKeys () {
        const env2 = _getEnv(true);
        return Object.keys(env2);
    }
});
function toBoolean(val) {
    return val ? val !== "false" : false;
}
var nodeENV = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") || "";
var isProduction = nodeENV === "production";
var isDevelopment = nodeENV === "dev" || nodeENV === "development";
var isTest = nodeENV === "test" || toBoolean(env.TEST);
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-XFCIANZX.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBaseURL": (()=>getBaseURL),
    "getHost": (()=>getHost),
    "getOrigin": (()=>getOrigin),
    "getProtocol": (()=>getProtocol)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TQQSPPNA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-UNWCXKMP.js [app-route] (ecmascript)");
;
;
// src/utils/url.ts
function checkHasPath(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.pathname !== "/";
    } catch (error) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`Invalid base URL: ${url}. Please provide a valid base URL.`);
    }
}
function withPath(url, path = "/api/auth") {
    const hasPath = checkHasPath(url);
    if (hasPath) {
        return url;
    }
    path = path.startsWith("/") ? path : `/${path}`;
    return `${url.replace(/\/+$/, "")}${path}`;
}
function getBaseURL(url, path) {
    if (url) {
        return withPath(url, path);
    }
    const fromEnv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NUXT_PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NUXT_PUBLIC_AUTH_URL || (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].BASE_URL !== "/" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].BASE_URL : void 0);
    if (fromEnv) {
        return withPath(fromEnv, path);
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return void 0;
}
function getOrigin(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.origin;
    } catch (error) {
        return null;
    }
}
function getProtocol(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol;
    } catch (error) {
        return null;
    }
}
function getHost(url) {
    if (url.includes("://")) {
        const parsedUrl = new URL(url);
        return parsedUrl.host;
    }
    return url;
}
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-53IPO2PJ.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/utils/json.ts
__turbopack_esm__({
    "safeJSONParse": (()=>safeJSONParse)
});
function safeJSONParse(data) {
    function reviver(_, value) {
        if (typeof value === "string") {
            const iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/;
            if (iso8601Regex.test(value)) {
                const date = new Date(value);
                if (!isNaN(date.getTime())) {
                    return date;
                }
            }
        }
        return value;
    }
    try {
        return JSON.parse(data, reviver);
    } catch  {
        return null;
    }
}
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-QQGZ3XGI.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createCookieGetter": (()=>createCookieGetter),
    "deleteSessionCookie": (()=>deleteSessionCookie),
    "getCookieCache": (()=>getCookieCache),
    "getCookies": (()=>getCookies),
    "getSessionCookie": (()=>getSessionCookie),
    "parseCookies": (()=>parseCookies),
    "parseSetCookieHeader": (()=>parseSetCookieHeader),
    "setCookieCache": (()=>setCookieCache),
    "setSessionCookie": (()=>setSessionCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-53IPO2PJ.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-FURNA6HY.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TQQSPPNA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-UNWCXKMP.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/hmac.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
// src/utils/time.ts
var createTime = (value, format)=>{
    const toMilliseconds = ()=>{
        switch(format){
            case "ms":
                return value;
            case "s":
                return value * 1e3;
            case "m":
                return value * 1e3 * 60;
            case "h":
                return value * 1e3 * 60 * 60;
            case "d":
                return value * 1e3 * 60 * 60 * 24;
            case "w":
                return value * 1e3 * 60 * 60 * 24 * 7;
            case "y":
                return value * 1e3 * 60 * 60 * 24 * 365;
        }
    };
    const time = {
        t: `${value}${format}`,
        value,
        tFormat: format,
        toMilliseconds,
        toSeconds: ()=>time.toMilliseconds() / 1e3,
        toMinutes: ()=>time.toSeconds() / 60,
        toHours: ()=>time.toMinutes() / 60,
        toDays: ()=>time.toHours() / 24,
        toWeeks: ()=>time.toDays() / 7,
        toYears: ()=>time.toDays() / 365,
        getDate: ()=>new Date(Date.now() + time.toMilliseconds()),
        add: (other)=>{
            const otherMs = typeof other === "string" ? parseTime(other).toMilliseconds() : other.toMilliseconds();
            return createTime(time.toMilliseconds() + otherMs, "ms");
        },
        subtract: (other)=>{
            const otherMs = typeof other === "string" ? parseTime(other).toMilliseconds() : other.toMilliseconds();
            return createTime(time.toMilliseconds() - otherMs, "ms");
        },
        multiply: (factor)=>createTime(time.toMilliseconds() * factor, "ms"),
        divide: (divisor)=>createTime(time.toMilliseconds() / divisor, "ms"),
        equals: (other)=>{
            const otherMs = typeof other === "string" ? parseTime(other).toMilliseconds() : other.toMilliseconds();
            return time.toMilliseconds() === otherMs;
        },
        lessThan: (other)=>{
            const otherMs = typeof other === "string" ? parseTime(other).toMilliseconds() : other.toMilliseconds();
            return time.toMilliseconds() < otherMs;
        },
        greaterThan: (other)=>{
            const otherMs = typeof other === "string" ? parseTime(other).toMilliseconds() : other.toMilliseconds();
            return time.toMilliseconds() > otherMs;
        },
        format: (pattern)=>{
            const date = time.getDate();
            return pattern.replace(/YYYY|MM|DD|HH|mm|ss/g, (match)=>{
                switch(match){
                    case "YYYY":
                        return date.getFullYear().toString();
                    case "MM":
                        return (date.getMonth() + 1).toString().padStart(2, "0");
                    case "DD":
                        return date.getDate().toString().padStart(2, "0");
                    case "HH":
                        return date.getHours().toString().padStart(2, "0");
                    case "mm":
                        return date.getMinutes().toString().padStart(2, "0");
                    case "ss":
                        return date.getSeconds().toString().padStart(2, "0");
                    default:
                        return match;
                }
            });
        },
        fromNow: ()=>{
            const ms = time.toMilliseconds();
            if (ms < 0) return time.ago();
            if (ms < 1e3) return "in a few seconds";
            if (ms < 6e4) return `in ${Math.round(ms / 1e3)} seconds`;
            if (ms < 36e5) return `in ${Math.round(ms / 6e4)} minutes`;
            if (ms < 864e5) return `in ${Math.round(ms / 36e5)} hours`;
            if (ms < 6048e5) return `in ${Math.round(ms / 864e5)} days`;
            if (ms < 26298e5) return `in ${Math.round(ms / 6048e5)} weeks`;
            if (ms < 315576e5) return `in ${Math.round(ms / 26298e5)} months`;
            return `in ${Math.round(ms / 315576e5)} years`;
        },
        ago: ()=>{
            const ms = -time.toMilliseconds();
            if (ms < 0) return time.fromNow();
            if (ms < 1e3) return "a few seconds ago";
            if (ms < 6e4) return `${Math.round(ms / 1e3)} seconds ago`;
            if (ms < 36e5) return `${Math.round(ms / 6e4)} minutes ago`;
            if (ms < 864e5) return `${Math.round(ms / 36e5)} hours ago`;
            if (ms < 6048e5) return `${Math.round(ms / 864e5)} days ago`;
            if (ms < 26298e5) return `${Math.round(ms / 6048e5)} weeks ago`;
            if (ms < 315576e5) return `${Math.round(ms / 26298e5)} months ago`;
            return `${Math.round(ms / 315576e5)} years ago`;
        }
    };
    return time;
};
var parseTime = (time)=>{
    const match = time.match(/^(\d+)(ms|s|m|h|d|w|y)$/);
    if (!match) throw new Error("Invalid time format");
    return createTime(parseInt(match[1]), match[2]);
};
// src/cookies/cookie-utils.ts
function parseSetCookieHeader(setCookie) {
    const cookies = /* @__PURE__ */ new Map();
    const cookieArray = setCookie.split(", ");
    cookieArray.forEach((cookieString)=>{
        const parts = cookieString.split(";").map((part)=>part.trim());
        const [nameValue, ...attributes] = parts;
        const [name, ...valueParts] = nameValue.split("=");
        const value = valueParts.join("=");
        if (!name || value === void 0) {
            return;
        }
        const attrObj = {
            value
        };
        attributes.forEach((attribute)=>{
            const [attrName, ...attrValueParts] = attribute.split("=");
            const attrValue = attrValueParts.join("=");
            const normalizedAttrName = attrName.trim().toLowerCase();
            switch(normalizedAttrName){
                case "max-age":
                    attrObj["max-age"] = attrValue ? parseInt(attrValue.trim(), 10) : void 0;
                    break;
                case "expires":
                    attrObj.expires = attrValue ? new Date(attrValue.trim()) : void 0;
                    break;
                case "domain":
                    attrObj.domain = attrValue ? attrValue.trim() : void 0;
                    break;
                case "path":
                    attrObj.path = attrValue ? attrValue.trim() : void 0;
                    break;
                case "secure":
                    attrObj.secure = true;
                    break;
                case "httponly":
                    attrObj.httponly = true;
                    break;
                case "samesite":
                    attrObj.samesite = attrValue ? attrValue.trim().toLowerCase() : void 0;
                    break;
                default:
                    attrObj[normalizedAttrName] = attrValue ? attrValue.trim() : true;
                    break;
            }
        });
        cookies.set(name, attrObj);
    });
    return cookies;
}
// src/cookies/index.ts
function createCookieGetter(options) {
    const secure = options.advanced?.useSecureCookies !== void 0 ? options.advanced?.useSecureCookies : options.baseURL !== void 0 ? options.baseURL.startsWith("https://") ? true : false : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProduction"];
    const secureCookiePrefix = secure ? "__Secure-" : "";
    const crossSubdomainEnabled = !!options.advanced?.crossSubDomainCookies?.enabled;
    const domain = crossSubdomainEnabled ? options.advanced?.crossSubDomainCookies?.domain || (options.baseURL ? new URL(options.baseURL).hostname : void 0) : void 0;
    if (crossSubdomainEnabled && !domain) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"]("baseURL is required when crossSubdomainCookies are enabled");
    }
    function createCookie(cookieName, overrideAttributes = {}) {
        const prefix = options.advanced?.cookiePrefix || "better-auth";
        const name = options.advanced?.cookies?.[cookieName]?.name || `${prefix}.${cookieName}`;
        const attributes = options.advanced?.cookies?.[cookieName]?.attributes;
        return {
            name: `${secureCookiePrefix}${name}`,
            attributes: {
                secure: !!secureCookiePrefix,
                sameSite: "lax",
                path: "/",
                httpOnly: true,
                ...crossSubdomainEnabled ? {
                    domain
                } : {},
                ...options.advanced?.defaultCookieAttributes,
                ...overrideAttributes,
                ...attributes
            }
        };
    }
    return createCookie;
}
function getCookies(options) {
    const createCookie = createCookieGetter(options);
    const sessionMaxAge = options.session?.expiresIn || createTime(7, "d").toSeconds();
    const sessionToken = createCookie("session_token", {
        maxAge: sessionMaxAge
    });
    const sessionData = createCookie("session_data", {
        maxAge: options.session?.cookieCache?.maxAge || 60 * 5
    });
    const dontRememberToken = createCookie("dont_remember");
    return {
        sessionToken: {
            name: sessionToken.name,
            options: sessionToken.attributes
        },
        /**
     * This cookie is used to store the session data in the cookie
     * This is useful for when you want to cache the session in the cookie
     */ sessionData: {
            name: sessionData.name,
            options: sessionData.attributes
        },
        dontRememberToken: {
            name: dontRememberToken.name,
            options: dontRememberToken.attributes
        }
    };
}
async function setCookieCache(ctx, session) {
    const shouldStoreSessionDataInCookie = ctx.context.options.session?.cookieCache?.enabled;
    if (shouldStoreSessionDataInCookie) {
        const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["base64Url"].encode(JSON.stringify({
            session,
            expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDate"])(ctx.context.authCookies.sessionData.options.maxAge || 60, "sec").getTime(),
            signature: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").sign(ctx.context.secret, JSON.stringify(session))
        }), {
            padding: false
        });
        if (data.length > 4093) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"]("Session data is too large to store in the cookie. Please disable session cookie caching or reduce the size of the session data");
        }
        ctx.setCookie(ctx.context.authCookies.sessionData.name, data, ctx.context.authCookies.sessionData.options);
    }
}
async function setSessionCookie(ctx, session, dontRememberMe, overrides) {
    const options = ctx.context.authCookies.sessionToken.options;
    const maxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
    await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
        ...options,
        maxAge,
        ...overrides
    });
    if (dontRememberMe) {
        await ctx.setSignedCookie(ctx.context.authCookies.dontRememberToken.name, "true", ctx.context.secret, ctx.context.authCookies.dontRememberToken.options);
    }
    await setCookieCache(ctx, session);
    ctx.context.setNewSession(session);
    if (ctx.context.options.secondaryStorage) {
        await ctx.context.secondaryStorage?.set(session.session.token, JSON.stringify({
            user: session.user,
            session: session.session
        }), Math.floor((new Date(session.session.expiresAt).getTime() - Date.now()) / 1e3));
    }
}
function deleteSessionCookie(ctx) {
    ctx.setCookie(ctx.context.authCookies.sessionToken.name, "", {
        ...ctx.context.authCookies.sessionToken.options,
        maxAge: 0
    });
    ctx.setCookie(ctx.context.authCookies.sessionData.name, "", {
        ...ctx.context.authCookies.sessionData.options,
        maxAge: 0
    });
    ctx.setCookie(ctx.context.authCookies.dontRememberToken.name, "", {
        ...ctx.context.authCookies.dontRememberToken.options,
        maxAge: 0
    });
}
function parseCookies(cookieHeader) {
    const cookies = cookieHeader.split("; ");
    const cookieMap = /* @__PURE__ */ new Map();
    cookies.forEach((cookie)=>{
        const [name, value] = cookie.split("=");
        cookieMap.set(name, value);
    });
    return cookieMap;
}
var getSessionCookie = (request, config)=>{
    const headers = request instanceof Headers ? request : request.headers;
    const cookies = headers.get("cookie");
    if (!cookies) {
        return null;
    }
    const { cookieName = "session_token", cookiePrefix = "better-auth" } = config || {};
    const name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProduction"] ? `__Secure-${cookiePrefix}.${cookieName}` : `${cookiePrefix}.${cookieName}`;
    const parsedCookie = parseCookies(cookies);
    const sessionToken = parsedCookie.get(name);
    if (sessionToken) {
        return sessionToken;
    }
    return null;
};
var getCookieCache = (request, config)=>{
    const headers = request instanceof Headers ? request : request.headers;
    const cookies = headers.get("cookie");
    if (!cookies) {
        return null;
    }
    const { cookieName = "session_data", cookiePrefix = "better-auth" } = config || {};
    const name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProduction"] ? `__Secure-${cookiePrefix}.${cookieName}` : `${cookiePrefix}.${cookieName}`;
    const parsedCookie = parseCookies(cookies);
    const sessionData = parsedCookie.get(name);
    if (sessionData) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeJSONParse"])(sessionData);
    }
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-HZBNUY7E.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "accountSchema": (()=>accountSchema),
    "getAllFields": (()=>getAllFields),
    "getIp": (()=>getIp),
    "mergeSchema": (()=>mergeSchema),
    "parseAccountInput": (()=>parseAccountInput),
    "parseAccountOutput": (()=>parseAccountOutput),
    "parseAdditionalUserInput": (()=>parseAdditionalUserInput),
    "parseInputData": (()=>parseInputData),
    "parseOutputData": (()=>parseOutputData),
    "parseSessionInput": (()=>parseSessionInput),
    "parseSessionOutput": (()=>parseSessionOutput),
    "parseUserInput": (()=>parseUserInput),
    "parseUserOutput": (()=>parseUserOutput),
    "sessionSchema": (()=>sessionSchema),
    "userSchema": (()=>userSchema),
    "verificationSchema": (()=>verificationSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TQQSPPNA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-call@0.3.3/node_modules/better-call/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
;
var accountSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    providerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    accountId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    idToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    /**
   * Access token expires at
   */ accessTokenExpiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date().nullish(),
    /**
   * Refresh token expires at
   */ refreshTokenExpiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date().nullish(),
    /**
   * The scopes that the user has authorized
   */ scope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    /**
   * Password is only stored in the credential provider
   */ password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date().default(()=>/* @__PURE__ */ new Date()),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date().default(()=>/* @__PURE__ */ new Date())
});
var userSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().transform((val)=>val.toLowerCase()),
    emailVerified: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean().default(false),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date().default(()=>/* @__PURE__ */ new Date()),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date().default(()=>/* @__PURE__ */ new Date())
});
var sessionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date().default(()=>/* @__PURE__ */ new Date()),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date().default(()=>/* @__PURE__ */ new Date()),
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    ipAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    userAgent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish()
});
var verificationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date().default(()=>/* @__PURE__ */ new Date()),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date().default(()=>/* @__PURE__ */ new Date()),
    expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].date(),
    identifier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
});
function parseOutputData(data, schema) {
    const fields = schema.fields;
    const parsedData = {};
    for(const key in data){
        const field = fields[key];
        if (!field) {
            parsedData[key] = data[key];
            continue;
        }
        if (field.returned === false) {
            continue;
        }
        parsedData[key] = data[key];
    }
    return parsedData;
}
function getAllFields(options, table) {
    let schema = {
        ...table === "user" ? options.user?.additionalFields : {},
        ...table === "session" ? options.session?.additionalFields : {}
    };
    for (const plugin of options.plugins || []){
        if (plugin.schema && plugin.schema[table]) {
            schema = {
                ...schema,
                ...plugin.schema[table].fields
            };
        }
    }
    return schema;
}
function parseUserOutput(options, user) {
    const schema = getAllFields(options, "user");
    return parseOutputData(user, {
        fields: schema
    });
}
function parseAccountOutput(options, account) {
    const schema = getAllFields(options, "account");
    return parseOutputData(account, {
        fields: schema
    });
}
function parseSessionOutput(options, session) {
    const schema = getAllFields(options, "session");
    return parseOutputData(session, {
        fields: schema
    });
}
function parseInputData(data, schema) {
    const action = schema.action || "create";
    const fields = schema.fields;
    const parsedData = {};
    for(const key in fields){
        if (key in data) {
            if (fields[key].input === false) {
                if (fields[key].defaultValue) {
                    parsedData[key] = fields[key].defaultValue;
                    continue;
                }
                continue;
            }
            if (fields[key].validator?.input && data[key] !== void 0) {
                parsedData[key] = fields[key].validator.input.parse(data[key]);
                continue;
            }
            if (fields[key].transform?.input && data[key] !== void 0) {
                parsedData[key] = fields[key].transform?.input(data[key]);
                continue;
            }
            parsedData[key] = data[key];
            continue;
        }
        if (fields[key].defaultValue && action === "create") {
            parsedData[key] = fields[key].defaultValue;
            continue;
        }
        if (fields[key].required && action === "create") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: `${key} is required`
            });
        }
    }
    return parsedData;
}
function parseUserInput(options, user, action) {
    const schema = getAllFields(options, "user");
    return parseInputData(user || {}, {
        fields: schema,
        action
    });
}
function parseAdditionalUserInput(options, user) {
    const schema = getAllFields(options, "user");
    return parseInputData(user || {}, {
        fields: schema
    });
}
function parseAccountInput(options, account) {
    const schema = getAllFields(options, "account");
    return parseInputData(account, {
        fields: schema
    });
}
function parseSessionInput(options, session) {
    const schema = getAllFields(options, "session");
    return parseInputData(session, {
        fields: schema
    });
}
function mergeSchema(schema, newSchema) {
    if (!newSchema) {
        return schema;
    }
    for(const table in newSchema){
        const newModelName = newSchema[table]?.modelName;
        if (newModelName) {
            schema[table].modelName = newModelName;
        }
        for(const field in schema[table].fields){
            const newField = newSchema[table]?.fields?.[field];
            if (!newField) {
                continue;
            }
            schema[table].fields[field].fieldName = newField;
        }
    }
    return schema;
}
// src/utils/get-request-ip.ts
function getIp(req, options) {
    if (options.advanced?.ipAddress?.disableIpTracking) {
        return null;
    }
    const testIP = "127.0.0.1";
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTest"]) {
        return testIP;
    }
    const ipHeaders = options.advanced?.ipAddress?.ipAddressHeaders;
    const keys = ipHeaders || [
        "x-client-ip",
        "x-forwarded-for",
        "cf-connecting-ip",
        "fastly-client-ip",
        "x-real-ip",
        "x-cluster-client-ip",
        "x-forwarded",
        "forwarded-for",
        "forwarded"
    ];
    const headers = req instanceof Request ? req.headers : req;
    for (const key of keys){
        const value = headers.get(key);
        if (typeof value === "string") {
            const ip = value.split(",")[0].trim();
            if (ip) return ip;
        }
    }
    return null;
}
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-DBPOZRMS.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "compareHash": (()=>compareHash),
    "constantTimeEqual": (()=>constantTimeEqual),
    "generateRandomString": (()=>generateRandomString),
    "hashPassword": (()=>hashPassword),
    "hashToBase64": (()=>hashToBase64),
    "signJWT": (()=>signJWT),
    "symmetricDecrypt": (()=>symmetricDecrypt),
    "symmetricEncrypt": (()=>symmetricEncrypt),
    "verifyPassword": (()=>verifyPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/hash.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/hex.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/random.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uncrypto$40$0$2e$1$2e$3$2f$node_modules$2f$uncrypto$2f$dist$2f$crypto$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uncrypto@0.1.3/node_modules/uncrypto/dist/crypto.node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$0$2e$6$2e$0$2f$node_modules$2f40$noble$2f$ciphers$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+ciphers@0.6.0/node_modules/@noble/ciphers/esm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$0$2e$6$2e$0$2f$node_modules$2f40$noble$2f$ciphers$2f$esm$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+ciphers@0.6.0/node_modules/@noble/ciphers/esm/webcrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$0$2e$6$2e$0$2f$node_modules$2f40$noble$2f$ciphers$2f$esm$2f$chacha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+ciphers@0.6.0/node_modules/@noble/ciphers/esm/chacha.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$scrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/scrypt.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
// src/crypto/index.ts
// src/crypto/buffer.ts
function constantTimeEqual(a, b) {
    const aBuffer = new Uint8Array(a);
    const bBuffer = new Uint8Array(b);
    if (aBuffer.length !== bBuffer.length) {
        return false;
    }
    let c = 0;
    for(let i = 0; i < aBuffer.length; i++){
        c |= aBuffer[i] ^ bBuffer[i];
    }
    return c === 0;
}
async function hashToBase64(data) {
    const buffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(data);
    return Buffer.from(buffer).toString("base64");
}
async function compareHash(data, hash) {
    const buffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(typeof data === "string" ? new TextEncoder().encode(data) : data);
    const hashBuffer = Buffer.from(hash, "base64");
    return constantTimeEqual(buffer, hashBuffer);
}
async function signJWT(payload, secret, expiresIn = 3600) {
    const jwt = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1e3) + expiresIn).sign(new TextEncoder().encode(secret));
    return jwt;
}
var config = {
    N: 16384,
    r: 16,
    p: 1,
    dkLen: 64
};
async function generateKey(password, salt) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$scrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scryptAsync"])(password.normalize("NFKC"), salt, {
        N: config.N,
        p: config.p,
        r: config.r,
        dkLen: config.dkLen,
        maxmem: 128 * config.N * config.r * 2
    });
}
var hashPassword = async (password)=>{
    const salt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hex"].encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uncrypto$40$0$2e$1$2e$3$2f$node_modules$2f$uncrypto$2f$dist$2f$crypto$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRandomValues"])(new Uint8Array(16)));
    const key = await generateKey(password, salt);
    return `${salt}:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hex"].encode(key)}`;
};
var verifyPassword = async ({ hash, password })=>{
    const [salt, key] = hash.split(":");
    const targetKey = await generateKey(password, salt);
    return constantTimeEqual(targetKey, new Uint8Array(Buffer.from(key, "hex")));
};
var generateRandomString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createRandomStringGenerator"])("a-z", "0-9", "A-Z", "-_");
// src/crypto/index.ts
var symmetricEncrypt = async ({ key, data })=>{
    const keyAsBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(key);
    const dataAsBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$0$2e$6$2e$0$2f$node_modules$2f40$noble$2f$ciphers$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utf8ToBytes"])(data);
    const chacha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$0$2e$6$2e$0$2f$node_modules$2f40$noble$2f$ciphers$2f$esm$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["managedNonce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$0$2e$6$2e$0$2f$node_modules$2f40$noble$2f$ciphers$2f$esm$2f$chacha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["xchacha20poly1305"])(new Uint8Array(keyAsBytes));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$0$2e$6$2e$0$2f$node_modules$2f40$noble$2f$ciphers$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bytesToHex"])(chacha.encrypt(dataAsBytes));
};
var symmetricDecrypt = async ({ key, data })=>{
    const keyAsBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(key);
    const dataAsBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$0$2e$6$2e$0$2f$node_modules$2f40$noble$2f$ciphers$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hexToBytes"])(data);
    const chacha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$0$2e$6$2e$0$2f$node_modules$2f40$noble$2f$ciphers$2f$esm$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["managedNonce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$0$2e$6$2e$0$2f$node_modules$2f40$noble$2f$ciphers$2f$esm$2f$chacha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["xchacha20poly1305"])(new Uint8Array(keyAsBytes));
    return new TextDecoder().decode(chacha.decrypt(dataAsBytes));
};
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-NPO64SVN.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateState": (()=>generateState),
    "parseState": (()=>parseState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-DBPOZRMS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-call@0.3.3/node_modules/better-call/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
;
async function generateState(c, link) {
    const callbackURL = c.body?.callbackURL || c.context.options.baseURL;
    if (!callbackURL) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "callbackURL is required"
        });
    }
    const codeVerifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRandomString"])(128);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRandomString"])(32);
    const data = JSON.stringify({
        callbackURL,
        codeVerifier,
        errorURL: c.body?.errorCallbackURL,
        newUserURL: c.body?.newUserCallbackURL,
        link,
        /**
     * This is the actual expiry time of the state
     */ expiresAt: Date.now() + 10 * 60 * 1e3
    });
    const expiresAt = /* @__PURE__ */ new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10);
    const verification = await c.context.internalAdapter.createVerificationValue({
        value: data,
        identifier: state,
        expiresAt
    });
    if (!verification) {
        c.context.logger.error("Unable to create verification. Make sure the database adapter is properly working and there is a verification table in the database");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: "Unable to create verification"
        });
    }
    return {
        state: verification.identifier,
        codeVerifier
    };
}
async function parseState(c) {
    const state = c.query.state || c.body.state;
    const data = await c.context.internalAdapter.findVerificationValue(state);
    if (!data) {
        c.context.logger.error("State Mismatch. Verification not found", {
            state
        });
        throw c.redirect(`${c.context.baseURL}/error?error=please_restart_the_process`);
    }
    const parsedData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        codeVerifier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        errorURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
        newUserURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
        expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number(),
        link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
            userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
        }).optional()
    }).parse(JSON.parse(data.value));
    if (!parsedData.errorURL) {
        parsedData.errorURL = `${c.context.baseURL}/error`;
    }
    if (parsedData.expiresAt < Date.now()) {
        await c.context.internalAdapter.deleteVerificationValue(data.id);
        c.context.logger.error("State expired.", {
            state
        });
        throw c.redirect(`${c.context.baseURL}/error?error=please_restart_the_process`);
    }
    await c.context.internalAdapter.deleteVerificationValue(data.id);
    return parsedData;
}
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-Y4MIQB37.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BASE_ERROR_CODES": (()=>BASE_ERROR_CODES),
    "callbackOAuth": (()=>callbackOAuth),
    "changeEmail": (()=>changeEmail),
    "changePassword": (()=>changePassword),
    "createAuthEndpoint": (()=>createAuthEndpoint),
    "createAuthMiddleware": (()=>createAuthMiddleware),
    "createEmailVerificationToken": (()=>createEmailVerificationToken),
    "deleteUser": (()=>deleteUser),
    "deleteUserCallback": (()=>deleteUserCallback),
    "error": (()=>error),
    "forgetPassword": (()=>forgetPassword),
    "forgetPasswordCallback": (()=>forgetPasswordCallback),
    "freshSessionMiddleware": (()=>freshSessionMiddleware),
    "getEndpoints": (()=>getEndpoints),
    "getSession": (()=>getSession),
    "getSessionFromCtx": (()=>getSessionFromCtx),
    "handleOAuthUserInfo": (()=>handleOAuthUserInfo),
    "linkSocialAccount": (()=>linkSocialAccount),
    "listSessions": (()=>listSessions),
    "listUserAccounts": (()=>listUserAccounts),
    "ok": (()=>ok),
    "optionsMiddleware": (()=>optionsMiddleware),
    "originCheck": (()=>originCheck),
    "originCheckMiddleware": (()=>originCheckMiddleware),
    "resetPassword": (()=>resetPassword),
    "revokeOtherSessions": (()=>revokeOtherSessions),
    "revokeSession": (()=>revokeSession),
    "revokeSessions": (()=>revokeSessions),
    "router": (()=>router),
    "sendVerificationEmail": (()=>sendVerificationEmail),
    "sendVerificationEmailFn": (()=>sendVerificationEmailFn),
    "sessionMiddleware": (()=>sessionMiddleware),
    "setPassword": (()=>setPassword),
    "signInEmail": (()=>signInEmail),
    "signInSocial": (()=>signInSocial),
    "signOut": (()=>signOut),
    "signUpEmail": (()=>signUpEmail),
    "unlinkAccount": (()=>unlinkAccount),
    "updateUser": (()=>updateUser),
    "verifyEmail": (()=>verifyEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-call@0.3.3/node_modules/better-call/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-KLDFBLYL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-XFCIANZX.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-53IPO2PJ.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/binary.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/hmac.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-QQGZ3XGI.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-FURNA6HY.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-DBPOZRMS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TQQSPPNA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$VXDYNCOX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-VXDYNCOX.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$NPO64SVN$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-NPO64SVN.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-HZBNUY7E.js [app-route] (ecmascript)");
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
var optionsMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createMiddleware"])(async ()=>{
    return {};
});
var createAuthMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createMiddlewareCreator"])({
    use: [
        optionsMiddleware,
        /**
     * Only use for post hooks
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createMiddleware"])(async ()=>{
            return {};
        })
    ]
});
var createAuthEndpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEndpointCreator"])({
    use: [
        optionsMiddleware
    ]
});
// src/utils/wildcard.ts
function escapeRegExpChar(char) {
    if (char === "-" || char === "^" || char === "$" || char === "+" || char === "." || char === "(" || char === ")" || char === "|" || char === "[" || char === "]" || char === "{" || char === "}" || char === "*" || char === "?" || char === "\\") {
        return `\\${char}`;
    } else {
        return char;
    }
}
function escapeRegExpString(str) {
    let result = "";
    for(let i = 0; i < str.length; i++){
        result += escapeRegExpChar(str[i]);
    }
    return result;
}
function transform(pattern, separator = true) {
    if (Array.isArray(pattern)) {
        let regExpPatterns = pattern.map((p)=>`^${transform(p, separator)}$`);
        return `(?:${regExpPatterns.join("|")})`;
    }
    let separatorSplitter = "";
    let separatorMatcher = "";
    let wildcard = ".";
    if (separator === true) {
        separatorSplitter = "/";
        separatorMatcher = "[/\\\\]";
        wildcard = "[^/\\\\]";
    } else if (separator) {
        separatorSplitter = separator;
        separatorMatcher = escapeRegExpString(separatorSplitter);
        if (separatorMatcher.length > 1) {
            separatorMatcher = `(?:${separatorMatcher})`;
            wildcard = `((?!${separatorMatcher}).)`;
        } else {
            wildcard = `[^${separatorMatcher}]`;
        }
    }
    let requiredSeparator = separator ? `${separatorMatcher}+?` : "";
    let optionalSeparator = separator ? `${separatorMatcher}*?` : "";
    let segments = separator ? pattern.split(separatorSplitter) : [
        pattern
    ];
    let result = "";
    for(let s = 0; s < segments.length; s++){
        let segment = segments[s];
        let nextSegment = segments[s + 1];
        let currentSeparator = "";
        if (!segment && s > 0) {
            continue;
        }
        if (separator) {
            if (s === segments.length - 1) {
                currentSeparator = optionalSeparator;
            } else if (nextSegment !== "**") {
                currentSeparator = requiredSeparator;
            } else {
                currentSeparator = "";
            }
        }
        if (separator && segment === "**") {
            if (currentSeparator) {
                result += s === 0 ? "" : currentSeparator;
                result += `(?:${wildcard}*?${currentSeparator})*?`;
            }
            continue;
        }
        for(let c = 0; c < segment.length; c++){
            let char = segment[c];
            if (char === "\\") {
                if (c < segment.length - 1) {
                    result += escapeRegExpChar(segment[c + 1]);
                    c++;
                }
            } else if (char === "?") {
                result += wildcard;
            } else if (char === "*") {
                result += `${wildcard}*?`;
            } else {
                result += escapeRegExpChar(char);
            }
        }
        result += currentSeparator;
    }
    return result;
}
function isMatch(regexp, sample) {
    if (typeof sample !== "string") {
        throw new TypeError(`Sample must be a string, but ${typeof sample} given`);
    }
    return regexp.test(sample);
}
function wildcardMatch(pattern, options) {
    if (typeof pattern !== "string" && !Array.isArray(pattern)) {
        throw new TypeError(`The first argument must be a single pattern string or an array of patterns, but ${typeof pattern} given`);
    }
    if (typeof options === "string" || typeof options === "boolean") {
        options = {
            separator: options
        };
    }
    if (arguments.length === 2 && !(typeof options === "undefined" || typeof options === "object" && options !== null && !Array.isArray(options))) {
        throw new TypeError(`The second argument must be an options object or a string/boolean separator, but ${typeof options} given`);
    }
    options = options || {};
    if (options.separator === "\\") {
        throw new Error("\\ is not a valid separator because it is used for escaping. Try setting the separator to `true` instead");
    }
    let regexpPattern = transform(pattern, options.separator);
    let regexp = new RegExp(`^${regexpPattern}$`, options.flags);
    let fn = isMatch.bind(null, regexp);
    fn.options = options;
    fn.pattern = pattern;
    fn.regexp = regexp;
    return fn;
}
// src/api/middlewares/origin-check.ts
var originCheckMiddleware = createAuthMiddleware(async (ctx)=>{
    if (ctx.request?.method !== "POST") {
        return;
    }
    const { body, query, context } = ctx;
    const originHeader = ctx.headers?.get("origin") || ctx.headers?.get("referer") || "";
    const callbackURL = body?.callbackURL || query?.callbackURL;
    const redirectURL = body?.redirectTo;
    const errorCallbackURL = body?.errorCallbackURL;
    const newUserCallbackURL = body?.newUserCallbackURL;
    const trustedOrigins = context.trustedOrigins;
    const usesCookies = ctx.headers?.has("cookie");
    const matchesPattern = (url, pattern)=>{
        if (url.startsWith("/")) {
            return false;
        }
        if (pattern.includes("*")) {
            return wildcardMatch(pattern)((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHost"])(url));
        }
        const protocol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProtocol"])(url);
        return protocol === "http:" || protocol === "https:" || !protocol ? pattern === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOrigin"])(url) : url.startsWith(pattern);
    };
    const validateURL = (url, label)=>{
        if (!url) {
            return;
        }
        const isTrustedOrigin = trustedOrigins.some((origin)=>matchesPattern(url, origin) || url?.startsWith("/") && label !== "origin" && !url.includes(":"));
        if (!isTrustedOrigin) {
            ctx.context.logger.error(`Invalid ${label}: ${url}`);
            ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config
`, `Current list of trustedOrigins: ${trustedOrigins}`);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: `Invalid ${label}`
            });
        }
    };
    if (usesCookies && !ctx.context.options.advanced?.disableCSRFCheck) {
        validateURL(originHeader, "origin");
    }
    callbackURL && validateURL(callbackURL, "callbackURL");
    redirectURL && validateURL(redirectURL, "redirectURL");
    errorCallbackURL && validateURL(errorCallbackURL, "errorCallbackURL");
    newUserCallbackURL && validateURL(newUserCallbackURL, "newUserCallbackURL");
});
var originCheck = (getValue)=>createAuthMiddleware(async (ctx)=>{
        const { context } = ctx;
        const callbackURL = getValue(ctx);
        const trustedOrigins = context.trustedOrigins;
        const matchesPattern = (url, pattern)=>{
            if (url.startsWith("/")) {
                return false;
            }
            if (pattern.includes("*")) {
                return wildcardMatch(pattern)((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHost"])(url));
            }
            return url.startsWith(pattern);
        };
        const validateURL = (url, label)=>{
            if (!url) {
                return;
            }
            const isTrustedOrigin = trustedOrigins.some((origin)=>matchesPattern(url, origin) || url?.startsWith("/") && label !== "origin" && !url.includes(":"));
            if (!isTrustedOrigin) {
                ctx.context.logger.error(`Invalid ${label}: ${url}`);
                ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config
`, `Current list of trustedOrigins: ${trustedOrigins}`);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                    message: `Invalid ${label}`
                });
            }
        };
        callbackURL && validateURL(callbackURL, "callbackURL");
    });
// src/error/codes.ts
var BASE_ERROR_CODES = {
    USER_NOT_FOUND: "User not found",
    FAILED_TO_CREATE_USER: "Failed to create user",
    FAILED_TO_CREATE_SESSION: "Failed to create session",
    FAILED_TO_UPDATE_USER: "Failed to update user",
    FAILED_TO_GET_SESSION: "Failed to get session",
    INVALID_PASSWORD: "Invalid password",
    INVALID_EMAIL: "Invalid email",
    INVALID_EMAIL_OR_PASSWORD: "Invalid email or password",
    SOCIAL_ACCOUNT_ALREADY_LINKED: "Social account already linked",
    PROVIDER_NOT_FOUND: "Provider not found",
    INVALID_TOKEN: "invalid token",
    ID_TOKEN_NOT_SUPPORTED: "id_token not supported",
    FAILED_TO_GET_USER_INFO: "Failed to get user info",
    USER_EMAIL_NOT_FOUND: "User email not found",
    EMAIL_NOT_VERIFIED: "Email not verified",
    PASSWORD_TOO_SHORT: "Password too short",
    PASSWORD_TOO_LONG: "Password too long",
    USER_ALREADY_EXISTS: "User already exists",
    EMAIL_CAN_NOT_BE_UPDATED: "Email can not be updated",
    CREDENTIAL_ACCOUNT_NOT_FOUND: "Credential account not found",
    SESSION_EXPIRED: "Session expired. Re-authenticate to perform this action.",
    FAILED_TO_UNLINK_LAST_ACCOUNT: "You can't unlink your last account",
    ACCOUNT_NOT_FOUND: "Account not found"
};
var getSession = ()=>createAuthEndpoint("/get-session", {
        method: "GET",
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            /**
         * If cookie cache is enabled, it will disable the cache
         * and fetch the session from the database
         */ disableCookieCache: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean({
                description: "Disable cookie cache and fetch session from database"
            }).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().transform((v)=>v === "true")).optional(),
            disableRefresh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean({
                description: "Disable session refresh. Useful for checking session status, without updating the session"
            }).optional()
        })),
        requireHeaders: true,
        metadata: {
            openapi: {
                description: "Get the current session",
                responses: {
                    "200": {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        session: {
                                            type: "object",
                                            properties: {
                                                token: {
                                                    type: "string"
                                                },
                                                userId: {
                                                    type: "string"
                                                },
                                                expiresAt: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        user: {
                                            type: "object",
                                            $ref: "#/components/schemas/User"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        try {
            const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
            if (!sessionCookieToken) {
                return ctx.json(null);
            }
            const sessionDataCookie = ctx.getCookie(ctx.context.authCookies.sessionData.name);
            const sessionDataPayload = sessionDataCookie ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeJSONParse"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["binary"].decode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["base64"].decode(sessionDataCookie))) : null;
            if (sessionDataPayload) {
                const isValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").verify(ctx.context.secret, JSON.stringify(sessionDataPayload.session), sessionDataPayload.signature);
                if (!isValid) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteSessionCookie"])(ctx);
                    return ctx.json(null);
                }
            }
            const dontRememberMe = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
            if (sessionDataPayload?.session && ctx.context.options.session?.cookieCache?.enabled && !ctx.query?.disableCookieCache) {
                const session2 = sessionDataPayload.session;
                const hasExpired = sessionDataPayload.expiresAt < Date.now() || session2.session.expiresAt < /* @__PURE__ */ new Date();
                if (!hasExpired) {
                    return ctx.json(session2);
                } else {
                    const dataCookie = ctx.context.authCookies.sessionData.name;
                    ctx.setCookie(dataCookie, "", {
                        maxAge: 0
                    });
                }
            }
            const session = await ctx.context.internalAdapter.findSession(sessionCookieToken);
            ctx.context.session = session;
            if (!session || session.session.expiresAt < /* @__PURE__ */ new Date()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteSessionCookie"])(ctx);
                if (session) {
                    await ctx.context.internalAdapter.deleteSession(session.session.token);
                }
                return ctx.json(null);
            }
            if (dontRememberMe || ctx.query?.disableRefresh) {
                return ctx.json(session);
            }
            const expiresIn = ctx.context.sessionConfig.expiresIn;
            const updateAge = ctx.context.sessionConfig.updateAge;
            const sessionIsDueToBeUpdatedDate = session.session.expiresAt.valueOf() - expiresIn * 1e3 + updateAge * 1e3;
            const shouldBeUpdated = sessionIsDueToBeUpdatedDate <= Date.now();
            if (shouldBeUpdated) {
                const updatedSession = await ctx.context.internalAdapter.updateSession(session.session.token, {
                    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDate"])(ctx.context.sessionConfig.expiresIn, "sec")
                });
                if (!updatedSession) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteSessionCookie"])(ctx);
                    return ctx.json(null, {
                        status: 401
                    });
                }
                const maxAge = (updatedSession.expiresAt.valueOf() - Date.now()) / 1e3;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(ctx, {
                    session: updatedSession,
                    user: session.user
                }, false, {
                    maxAge
                });
                return ctx.json({
                    session: updatedSession,
                    user: session.user
                });
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setCookieCache"])(ctx, session);
            return ctx.json(session);
        } catch (error2) {
            ctx.context.logger.error("INTERNAL_SERVER_ERROR", error2);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                message: BASE_ERROR_CODES.FAILED_TO_GET_SESSION
            });
        }
    });
var getSessionFromCtx = async (ctx, config)=>{
    if (ctx.context.session) {
        return ctx.context.session;
    }
    const session = await getSession()({
        ...ctx,
        _flag: "json",
        headers: ctx.headers,
        query: config
    }).catch((e)=>{
        return null;
    });
    ctx.context.session = session;
    return session;
};
var sessionMiddleware = createAuthMiddleware(async (ctx)=>{
    const session = await getSessionFromCtx(ctx);
    if (!session?.session) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
    }
    return {
        session
    };
});
var freshSessionMiddleware = createAuthMiddleware(async (ctx)=>{
    const session = await getSessionFromCtx(ctx);
    if (!session?.session) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
    }
    if (ctx.context.sessionConfig.freshAge === 0) {
        return {
            session
        };
    }
    const freshAge = ctx.context.sessionConfig.freshAge;
    const lastUpdated = session.session.updatedAt?.valueOf() || session.session.createdAt.valueOf();
    const now = Date.now();
    const isFresh = now - lastUpdated < freshAge * 1e3;
    if (!isFresh) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: "Session is not fresh"
        });
    }
    return {
        session
    };
});
var listSessions = ()=>createAuthEndpoint("/list-sessions", {
        method: "GET",
        use: [
            sessionMiddleware
        ],
        requireHeaders: true,
        metadata: {
            openapi: {
                description: "List all active sessions for the user",
                responses: {
                    "200": {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            token: {
                                                type: "string"
                                            },
                                            userId: {
                                                type: "string"
                                            },
                                            expiresAt: {
                                                type: "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const sessions = await ctx.context.internalAdapter.listSessions(ctx.context.session.user.id);
        const activeSessions = sessions.filter((session)=>{
            return session.expiresAt > /* @__PURE__ */ new Date();
        });
        return ctx.json(activeSessions);
    });
var revokeSession = createAuthEndpoint("/revoke-session", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The token to revoke"
        })
    }),
    use: [
        sessionMiddleware
    ],
    requireHeaders: true,
    metadata: {
        openapi: {
            description: "Revoke a single session",
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                token: {
                                    type: "string"
                                }
                            },
                            required: [
                                "token"
                            ]
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const token = ctx.body.token;
    const findSession = await ctx.context.internalAdapter.findSession(token);
    if (!findSession) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Session not found"
        });
    }
    if (findSession.session.userId !== ctx.context.session.user.id) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
    }
    try {
        await ctx.context.internalAdapter.deleteSession(token);
    } catch (error2) {
        ctx.context.logger.error(error2 && typeof error2 === "object" && "name" in error2 ? error2.name : "", error2);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR");
    }
    return ctx.json({
        status: true
    });
});
var revokeSessions = createAuthEndpoint("/revoke-sessions", {
    method: "POST",
    use: [
        sessionMiddleware
    ],
    requireHeaders: true,
    metadata: {
        openapi: {
            description: "Revoke all sessions for the user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean"
                                    }
                                },
                                required: [
                                    "status"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    try {
        await ctx.context.internalAdapter.deleteSessions(ctx.context.session.user.id);
    } catch (error2) {
        ctx.context.logger.error(error2 && typeof error2 === "object" && "name" in error2 ? error2.name : "", error2);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR");
    }
    return ctx.json({
        status: true
    });
});
var revokeOtherSessions = createAuthEndpoint("/revoke-other-sessions", {
    method: "POST",
    requireHeaders: true,
    use: [
        sessionMiddleware
    ],
    metadata: {
        openapi: {
            description: "Revoke all other sessions for the user except the current one",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const session = ctx.context.session;
    if (!session.user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
    }
    const sessions = await ctx.context.internalAdapter.listSessions(session.user.id);
    const activeSessions = sessions.filter((session2)=>{
        return session2.expiresAt > /* @__PURE__ */ new Date();
    });
    const otherSessions = activeSessions.filter((session2)=>session2.token !== ctx.context.session.session.token);
    await Promise.all(otherSessions.map((session2)=>ctx.context.internalAdapter.deleteSession(session2.token)));
    return ctx.json({
        status: true
    });
});
async function createEmailVerificationToken(secret, email, updateTo, expiresIn = 3600) {
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signJWT"])({
        email: email.toLowerCase(),
        updateTo
    }, secret, expiresIn);
    return token;
}
async function sendVerificationEmailFn(ctx, user) {
    if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
        ctx.context.logger.error("Verification email isn't enabled.");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Verification email isn't enabled"
        });
    }
    const token = await createEmailVerificationToken(ctx.context.secret, user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
    const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
    await ctx.context.options.emailVerification.sendVerificationEmail({
        user,
        url,
        token
    }, ctx.request);
}
var sendVerificationEmail = createAuthEndpoint("/send-verification-email", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The email to send the verification email to"
        }).email(),
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The URL to use for email verification callback"
        }).optional()
    }),
    metadata: {
        openapi: {
            description: "Send a verification email to the user",
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    description: "The email to send the verification email to"
                                },
                                callbackURL: {
                                    type: "string",
                                    description: "The URL to use for email verification callback"
                                }
                            },
                            required: [
                                "email"
                            ]
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
        ctx.context.logger.error("Verification email isn't enabled.");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Verification email isn't enabled"
        });
    }
    const { email } = ctx.body;
    const user = await ctx.context.internalAdapter.findUserByEmail(email);
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.USER_NOT_FOUND
        });
    }
    await sendVerificationEmailFn(ctx, user.user);
    return ctx.json({
        status: true
    });
});
var verifyEmail = createAuthEndpoint("/verify-email", {
    method: "GET",
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The token to verify the email"
        }),
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The URL to redirect to after email verification"
        }).optional()
    }),
    use: [
        originCheck((ctx)=>ctx.query.callbackURL)
    ],
    metadata: {
        openapi: {
            description: "Verify the email of the user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    user: {
                                        type: "object"
                                    },
                                    status: {
                                        type: "boolean"
                                    }
                                },
                                required: [
                                    "user",
                                    "status"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    function redirectOnError(error2) {
        if (ctx.query.callbackURL) {
            if (ctx.query.callbackURL.includes("?")) {
                throw ctx.redirect(`${ctx.query.callbackURL}&error=${error2}`);
            }
            throw ctx.redirect(`${ctx.query.callbackURL}?error=${error2}`);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: error2
        });
    }
    const { token } = ctx.query;
    let jwt;
    try {
        jwt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, new TextEncoder().encode(ctx.context.secret), {
            algorithms: [
                "HS256"
            ]
        });
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTExpired"]) {
            return redirectOnError("token_expired");
        }
        return redirectOnError("invalid_token");
    }
    const schema2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().email(),
        updateTo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional()
    });
    const parsed = schema2.parse(jwt.payload);
    const user = await ctx.context.internalAdapter.findUserByEmail(parsed.email);
    if (!user) {
        return redirectOnError("user_not_found");
    }
    if (parsed.updateTo) {
        const session = await getSessionFromCtx(ctx);
        if (!session) {
            if (ctx.query.callbackURL) {
                throw ctx.redirect(`${ctx.query.callbackURL}?error=unauthorized`);
            }
            return redirectOnError("unauthorized");
        }
        if (session.user.email !== parsed.email) {
            if (ctx.query.callbackURL) {
                throw ctx.redirect(`${ctx.query.callbackURL}?error=unauthorized`);
            }
            return redirectOnError("unauthorized");
        }
        const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
            email: parsed.updateTo,
            emailVerified: false
        });
        const newToken = await createEmailVerificationToken(ctx.context.secret, parsed.updateTo);
        await ctx.context.options.emailVerification?.sendVerificationEmail?.({
            user: updatedUser,
            url: `${ctx.context.baseURL}/verify-email?token=${newToken}`,
            token: newToken
        }, ctx.request);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(ctx, {
            session: session.session,
            user: {
                ...session.user,
                email: parsed.updateTo,
                emailVerified: false
            }
        });
        if (ctx.query.callbackURL) {
            throw ctx.redirect(ctx.query.callbackURL);
        }
        return ctx.json({
            status: true,
            user: {
                id: updatedUser.id,
                email: updatedUser.email,
                name: updatedUser.name,
                image: updatedUser.image,
                emailVerified: updatedUser.emailVerified,
                createdAt: updatedUser.createdAt,
                updatedAt: updatedUser.updatedAt
            }
        });
    }
    await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
        emailVerified: true
    });
    if (ctx.context.options.emailVerification?.autoSignInAfterVerification) {
        const currentSession = await getSessionFromCtx(ctx);
        if (!currentSession || currentSession.user.email !== parsed.email) {
            const session = await ctx.context.internalAdapter.createSession(user.user.id, ctx.request);
            if (!session) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                    message: "Failed to create session"
                });
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(ctx, {
                session,
                user: {
                    ...user.user,
                    emailVerified: true
                }
            });
        } else {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(ctx, {
                session: currentSession.session,
                user: {
                    ...currentSession.user,
                    emailVerified: true
                }
            });
        }
    }
    if (ctx.query.callbackURL) {
        throw ctx.redirect(ctx.query.callbackURL);
    }
    return ctx.json({
        status: true,
        user: null
    });
});
// src/oauth2/link-account.ts
async function handleOAuthUserInfo(c, { userInfo, account, callbackURL }) {
    const dbUser = await c.context.internalAdapter.findOAuthUser(userInfo.email.toLowerCase(), account.accountId, account.providerId).catch((e)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("Better auth was unable to query your database.\nError: ", e);
        throw c.redirect(`${c.context.baseURL}/error?error=internal_server_error`);
    });
    let user = dbUser?.user;
    let isRegister = !user;
    if (dbUser) {
        const hasBeenLinked = dbUser.accounts.find((a)=>a.providerId === account.providerId);
        if (!hasBeenLinked) {
            const trustedProviders = c.context.options.account?.accountLinking?.trustedProviders;
            const isTrustedProvider = trustedProviders?.includes(account.providerId);
            if (!isTrustedProvider && !userInfo.emailVerified || c.context.options.account?.accountLinking?.enabled === false) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDevelopment"]) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warn(`User already exist but account isn't linked to ${account.providerId}. To read more about how account linking works in Better Auth see https://www.better-auth.com/docs/concepts/users-accounts#account-linking.`);
                }
                return {
                    error: "account not linked",
                    data: null
                };
            }
            try {
                await c.context.internalAdapter.linkAccount({
                    providerId: account.providerId,
                    accountId: userInfo.id.toString(),
                    userId: dbUser.user.id,
                    accessToken: account.accessToken,
                    idToken: account.idToken,
                    refreshToken: account.refreshToken,
                    accessTokenExpiresAt: account.accessTokenExpiresAt,
                    refreshTokenExpiresAt: account.refreshTokenExpiresAt,
                    scope: account.scope
                });
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("Unable to link account", e);
                return {
                    error: "unable to link account",
                    data: null
                };
            }
        } else {
            const updateData = Object.fromEntries(Object.entries({
                accessToken: account.accessToken,
                idToken: account.idToken,
                refreshToken: account.refreshToken,
                accessTokenExpiresAt: account.accessTokenExpiresAt,
                refreshTokenExpiresAt: account.refreshTokenExpiresAt,
                scope: account.scope
            }).filter(([_, value])=>value !== void 0));
            if (Object.keys(updateData).length > 0) {
                await c.context.internalAdapter.updateAccount(hasBeenLinked.id, updateData);
            }
        }
    } else {
        try {
            user = await c.context.internalAdapter.createOAuthUser({
                ...userInfo,
                email: userInfo.email.toLowerCase(),
                id: void 0
            }, {
                accessToken: account.accessToken,
                idToken: account.idToken,
                refreshToken: account.refreshToken,
                accessTokenExpiresAt: account.accessTokenExpiresAt,
                refreshTokenExpiresAt: account.refreshTokenExpiresAt,
                scope: account.scope,
                providerId: account.providerId,
                accountId: userInfo.id.toString()
            }).then((res)=>res?.user);
            if (!userInfo.emailVerified && user && c.context.options.emailVerification?.sendOnSignUp) {
                const token = await createEmailVerificationToken(c.context.secret, user.email, void 0, c.context.options.emailVerification?.expiresIn);
                const url = `${c.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
                await c.context.options.emailVerification?.sendVerificationEmail?.({
                    user,
                    url,
                    token
                }, c.request);
            }
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) {
                return {
                    error: e.message,
                    data: null,
                    isRegister: false
                };
            }
            return {
                error: "unable to create user",
                data: null,
                isRegister: false
            };
        }
    }
    if (!user) {
        return {
            error: "unable to create user",
            data: null,
            isRegister: false
        };
    }
    const session = await c.context.internalAdapter.createSession(user.id, c.request);
    if (!session) {
        return {
            error: "unable to create session",
            data: null,
            isRegister: false
        };
    }
    return {
        data: {
            session,
            user
        },
        error: null,
        isRegister
    };
}
// src/api/routes/sign-in.ts
var signInSocial = createAuthEndpoint("/sign-in/social", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        /**
       * Callback URL to redirect to after the user
       * has signed in.
       */ callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "Callback URL to redirect to after the user has signed in"
        }).optional(),
        /**
       * callback url to redirect if the user is newly registered.
       *
       * useful if you have different routes for existing users and new users
       */ newUserCallbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
        /**
       * Callback url to redirect to if an error happens
       *
       * If it's initiated from the client sdk this defaults to
       * the current url.
       */ errorCallbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "Callback URL to redirect to if an error happens"
        }).optional(),
        /**
       * OAuth2 provider to use`
       */ provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$VXDYNCOX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SocialProviderListEnum"],
        /**
       * Disable automatic redirection to the provider
       *
       * This is useful if you want to handle the redirection
       * yourself like in a popup or a different tab.
       */ disableRedirect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean({
            description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself"
        }).optional(),
        /**
       * ID token from the provider
       *
       * This is used to sign in the user
       * if the user is already signed in with the
       * provider in the frontend.
       *
       * Only applicable if the provider supports
       * it. Currently only `apple` and `google` is
       * supported out of the box.
       */ idToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            /**
           * ID token from the provider
           */ token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
                description: "ID token from the provider"
            }),
            /**
           * The nonce used to generate the token
           */ nonce: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
                description: "Nonce used to generate the token"
            }).optional(),
            /**
           * Access token from the provider
           */ accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
                description: "Access token from the provider"
            }).optional(),
            /**
           * Refresh token from the provider
           */ refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
                description: "Refresh token from the provider"
            }).optional(),
            /**
           * Expiry date of the token
           */ expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number({
                description: "Expiry date of the token"
            }).optional()
        }), {
            description: "ID token from the provider to sign in the user with id token"
        })
    }),
    metadata: {
        openapi: {
            description: "Sign in with a social provider",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    session: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "object"
                                    },
                                    url: {
                                        type: "string"
                                    },
                                    redirect: {
                                        type: "boolean"
                                    }
                                },
                                required: [
                                    "session",
                                    "user",
                                    "url",
                                    "redirect"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (c)=>{
    const provider = c.context.socialProviders.find((p)=>p.id === c.body.provider);
    if (!provider) {
        c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", {
            provider: c.body.provider
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: BASE_ERROR_CODES.PROVIDER_NOT_FOUND
        });
    }
    if (c.body.idToken) {
        if (!provider.verifyIdToken) {
            c.context.logger.error("Provider does not support id token verification", {
                provider: c.body.provider
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
                message: BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED
            });
        }
        const { token, nonce } = c.body.idToken;
        const valid = await provider.verifyIdToken(token, nonce);
        if (!valid) {
            c.context.logger.error("Invalid id token", {
                provider: c.body.provider
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: BASE_ERROR_CODES.INVALID_TOKEN
            });
        }
        const userInfo = await provider.getUserInfo({
            idToken: token,
            accessToken: c.body.idToken.accessToken,
            refreshToken: c.body.idToken.refreshToken
        });
        if (!userInfo || !userInfo?.user) {
            c.context.logger.error("Failed to get user info", {
                provider: c.body.provider
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO
            });
        }
        if (!userInfo.user.email) {
            c.context.logger.error("User email not found", {
                provider: c.body.provider
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND
            });
        }
        const data = await handleOAuthUserInfo(c, {
            userInfo: {
                email: userInfo.user.email,
                id: userInfo.user.id,
                name: userInfo.user.name || "",
                image: userInfo.user.image,
                emailVerified: userInfo.user.emailVerified || false
            },
            account: {
                providerId: provider.id,
                accountId: userInfo.user.id,
                accessToken: c.body.idToken.accessToken
            }
        });
        if (data.error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: data.error
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(c, data.data);
        return c.json({
            redirect: false,
            token: data.data.session.token,
            url: void 0,
            user: {
                id: data.data.user.id,
                email: data.data.user.email,
                name: data.data.user.name,
                image: data.data.user.image,
                emailVerified: data.data.user.emailVerified,
                createdAt: data.data.user.createdAt,
                updatedAt: data.data.user.updatedAt
            }
        });
    }
    const { codeVerifier, state } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$NPO64SVN$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateState"])(c);
    const url = await provider.createAuthorizationURL({
        state,
        codeVerifier,
        redirectURI: `${c.context.baseURL}/callback/${provider.id}`
    });
    return c.json({
        url: url.toString(),
        redirect: !c.body.disableRedirect
    });
});
var signInEmail = createAuthEndpoint("/sign-in/email", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        /**
       * Email of the user
       */ email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "Email of the user"
        }),
        /**
       * Password of the user
       */ password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "Password of the user"
        }),
        /**
       * Callback URL to use as a redirect for email
       * verification and for possible redirects
       */ callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "Callback URL to use as a redirect for email verification"
        }).optional(),
        /**
       * If this is false, the session will not be remembered
       * @default true
       */ rememberMe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean({
            description: "If this is false, the session will not be remembered. Default is `true`."
        }).default(true).optional()
    }),
    metadata: {
        openapi: {
            description: "Sign in with email and password",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    user: {
                                        type: "object"
                                    },
                                    url: {
                                        type: "string"
                                    },
                                    redirect: {
                                        type: "boolean"
                                    }
                                },
                                required: [
                                    "session",
                                    "user",
                                    "url",
                                    "redirect"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    if (!ctx.context.options?.emailAndPassword?.enabled) {
        ctx.context.logger.error("Email and password is not enabled. Make sure to enable it in the options on you `auth.ts` file. Check `https://better-auth.com/docs/authentication/email-password` for more!");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Email and password is not enabled"
        });
    }
    const { email, password } = ctx.body;
    const isValidEmail = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().email().safeParse(email);
    if (!isValidEmail.success) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.INVALID_EMAIL
        });
    }
    const user = await ctx.context.internalAdapter.findUserByEmail(email, {
        includeAccounts: true
    });
    if (!user) {
        await ctx.context.password.hash(password);
        ctx.context.logger.error("User not found", {
            email
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD
        });
    }
    const credentialAccount = user.accounts.find((a)=>a.providerId === "credential");
    if (!credentialAccount) {
        ctx.context.logger.error("Credential account not found", {
            email
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD
        });
    }
    const currentPassword = credentialAccount?.password;
    if (!currentPassword) {
        ctx.context.logger.error("Password not found", {
            email
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD
        });
    }
    const validPassword = await ctx.context.password.verify({
        hash: currentPassword,
        password
    });
    if (!validPassword) {
        ctx.context.logger.error("Invalid password");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD
        });
    }
    if (ctx.context.options?.emailAndPassword?.requireEmailVerification && !user.user.emailVerified) {
        if (!ctx.context.options?.emailVerification?.sendVerificationEmail) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: BASE_ERROR_CODES.EMAIL_NOT_VERIFIED
            });
        }
        const token = await createEmailVerificationToken(ctx.context.secret, user.user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
        const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
        await ctx.context.options.emailVerification.sendVerificationEmail({
            user: user.user,
            url,
            token
        }, ctx.request);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: BASE_ERROR_CODES.EMAIL_NOT_VERIFIED
        });
    }
    const session = await ctx.context.internalAdapter.createSession(user.user.id, ctx.headers, ctx.body.rememberMe === false);
    if (!session) {
        ctx.context.logger.error("Failed to create session");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION
        });
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(ctx, {
        session,
        user: user.user
    }, ctx.body.rememberMe === false);
    return ctx.json({
        redirect: !!ctx.body.callbackURL,
        token: session.token,
        url: ctx.body.callbackURL,
        user: {
            id: user.user.id,
            email: user.user.email,
            name: user.user.name,
            image: user.user.image,
            emailVerified: user.user.emailVerified,
            createdAt: user.user.createdAt,
            updatedAt: user.user.updatedAt
        }
    });
});
var schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
    error_description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
    state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional()
});
var callbackOAuth = createAuthEndpoint("/callback/:id", {
    method: [
        "GET",
        "POST"
    ],
    body: schema.optional(),
    query: schema.optional(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HIDE_METADATA"]
}, async (c)=>{
    let queryOrBody;
    try {
        if (c.method === "GET") {
            queryOrBody = schema.parse(c.query);
        } else if (c.method === "POST") {
            queryOrBody = schema.parse(c.body);
        } else {
            throw new Error("Unsupported method");
        }
    } catch (e) {
        c.context.logger.error("INVALID_CALLBACK_REQUEST", e);
        throw c.redirect(`${c.context.baseURL}/error?error=invalid_callback_request`);
    }
    const { code, error: error2, state, error_description } = queryOrBody;
    if (!state) {
        c.context.logger.error("State not found", error2);
        throw c.redirect(`${c.context.baseURL}/error?error=state_not_found`);
    }
    if (!code) {
        c.context.logger.error("Code not found");
        throw c.redirect(`${c.context.baseURL}/error?error=${error2 || "no_code"}&error_description=${error_description}`);
    }
    const provider = c.context.socialProviders.find((p)=>p.id === c.params.id);
    if (!provider) {
        c.context.logger.error("Oauth provider with id", c.params.id, "not found");
        throw c.redirect(`${c.context.baseURL}/error?error=oauth_provider_not_found`);
    }
    const { codeVerifier, callbackURL, link, errorURL, newUserURL } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$NPO64SVN$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseState"])(c);
    let tokens;
    try {
        tokens = await provider.validateAuthorizationCode({
            code,
            codeVerifier,
            redirectURI: `${c.context.baseURL}/callback/${provider.id}`
        });
    } catch (e) {
        c.context.logger.error("", e);
        throw c.redirect(`${c.context.baseURL}/error?error=please_restart_the_process`);
    }
    const userInfo = await provider.getUserInfo(tokens).then((res)=>res?.user);
    function redirectOnError(error3) {
        let url = errorURL || callbackURL || `${c.context.baseURL}/error`;
        if (url.includes("?")) {
            url = `${url}&error=${error3}`;
        } else {
            url = `${url}?error=${error3}`;
        }
        throw c.redirect(url);
    }
    if (!userInfo) {
        c.context.logger.error("Unable to get user info");
        return redirectOnError("unable_to_get_user_info");
    }
    if (!userInfo.email) {
        c.context.logger.error("Provider did not return email. This could be due to misconfiguration in the provider settings.");
        return redirectOnError("email_not_found");
    }
    if (!callbackURL) {
        c.context.logger.error("No callback URL found");
        throw c.redirect(`${c.context.baseURL}/error?error=please_restart_the_process`);
    }
    if (link) {
        if (c.context.options.account?.accountLinking?.allowDifferentEmails !== true && link.email !== userInfo.email.toLowerCase()) {
            return redirectOnError("email_doesn't_match");
        }
        const existingAccount = await c.context.internalAdapter.findAccount(userInfo.id);
        if (existingAccount) {
            if (existingAccount && existingAccount.userId !== link.userId) {
                return redirectOnError("account_already_linked_to_different_user");
            }
            return redirectOnError("account_already_linked");
        }
        const newAccount = await c.context.internalAdapter.createAccount({
            userId: link.userId,
            providerId: provider.id,
            accountId: userInfo.id
        });
        if (!newAccount) {
            return redirectOnError("unable_to_link_account");
        }
        let toRedirectTo2;
        try {
            const url = callbackURL;
            toRedirectTo2 = url.toString();
        } catch  {
            toRedirectTo2 = callbackURL;
        }
        throw c.redirect(toRedirectTo2);
    }
    const result = await handleOAuthUserInfo(c, {
        userInfo: {
            ...userInfo,
            email: userInfo.email,
            name: userInfo.name || userInfo.email
        },
        account: {
            providerId: provider.id,
            accountId: userInfo.id,
            ...tokens,
            scope: tokens.scopes?.join(",")
        },
        callbackURL
    });
    if (result.error) {
        c.context.logger.error(result.error.split(" ").join("_"));
        return redirectOnError(result.error.split(" ").join("_"));
    }
    const { session, user } = result.data;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(c, {
        session,
        user
    });
    let toRedirectTo;
    try {
        const url = result.isRegister ? newUserURL || callbackURL : callbackURL;
        toRedirectTo = url.toString();
    } catch  {
        toRedirectTo = result.isRegister ? newUserURL || callbackURL : callbackURL;
    }
    throw c.redirect(toRedirectTo);
});
var signOut = createAuthEndpoint("/sign-out", {
    method: "POST",
    requireHeaders: true,
    metadata: {
        openapi: {
            description: "Sign out the current user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    success: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
    if (!sessionCookieToken) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteSessionCookie"])(ctx);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.FAILED_TO_GET_SESSION
        });
    }
    await ctx.context.internalAdapter.deleteSession(sessionCookieToken);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteSessionCookie"])(ctx);
    return ctx.json({
        success: true
    });
});
function redirectError(ctx, callbackURL, query) {
    const url = callbackURL ? new URL(callbackURL, ctx.baseURL) : new URL(`${ctx.baseURL}/error`);
    if (query) Object.entries(query).forEach(([k, v])=>url.searchParams.set(k, v));
    return url.href;
}
function redirectCallback(ctx, callbackURL, query) {
    const url = new URL(callbackURL, ctx.baseURL);
    if (query) Object.entries(query).forEach(([k, v])=>url.searchParams.set(k, v));
    return url.href;
}
var forgetPassword = createAuthEndpoint("/forget-password", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        /**
       * The email address of the user to send a password reset email to.
       */ email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The email address of the user to send a password reset email to"
        }).email(),
        /**
       * The URL to redirect the user to reset their password.
       * If the token isn't valid or expired, it'll be redirected with a query parameter `?
       * error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?
       * token=VALID_TOKEN
       */ redirectTo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN"
        }).optional()
    }),
    metadata: {
        openapi: {
            description: "Send a password reset email to the user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    if (!ctx.context.options.emailAndPassword?.sendResetPassword) {
        ctx.context.logger.error("Reset password isn't enabled.Please pass an emailAndPassword.sendResetPasswordToken function in your auth config!");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Reset password isn't enabled"
        });
    }
    const { email, redirectTo } = ctx.body;
    const user = await ctx.context.internalAdapter.findUserByEmail(email, {
        includeAccounts: true
    });
    if (!user) {
        ctx.context.logger.error("Reset Password: User not found", {
            email
        });
        return ctx.json({
            status: false
        }, {
            body: {
                status: true
            }
        });
    }
    const defaultExpiresIn = 60 * 60 * 1;
    const expiresAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDate"])(ctx.context.options.emailAndPassword.resetPasswordTokenExpiresIn || defaultExpiresIn, "sec");
    const verificationToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])(24);
    await ctx.context.internalAdapter.createVerificationValue({
        value: user.user.id.toString(),
        identifier: `reset-password:${verificationToken}`,
        expiresAt
    });
    const url = `${ctx.context.baseURL}/reset-password/${verificationToken}?callbackURL=${redirectTo}`;
    await ctx.context.options.emailAndPassword.sendResetPassword({
        user: user.user,
        url,
        token: verificationToken
    }, ctx.request);
    return ctx.json({
        status: true
    });
});
var forgetPasswordCallback = createAuthEndpoint("/reset-password/:token", {
    method: "GET",
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The URL to redirect the user to reset their password"
        })
    }),
    use: [
        originCheck((ctx)=>ctx.query.callbackURL)
    ],
    metadata: {
        openapi: {
            description: "Redirects the user to the callback URL with the token",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    token: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const { token } = ctx.params;
    const { callbackURL } = ctx.query;
    if (!token || !callbackURL) {
        throw ctx.redirect(redirectError(ctx.context, callbackURL, {
            error: "INVALID_TOKEN"
        }));
    }
    const verification = await ctx.context.internalAdapter.findVerificationValue(`reset-password:${token}`);
    if (!verification || verification.expiresAt < /* @__PURE__ */ new Date()) {
        throw ctx.redirect(redirectError(ctx.context, callbackURL, {
            error: "INVALID_TOKEN"
        }));
    }
    throw ctx.redirect(redirectCallback(ctx.context, callbackURL, {
        token
    }));
});
var resetPassword = createAuthEndpoint("/reset-password", {
    method: "POST",
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional()
    }).optional(),
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The new password to set"
        }),
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The token to reset the password"
        }).optional()
    }),
    metadata: {
        openapi: {
            description: "Reset the password for a user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const token = ctx.body.token || ctx.query?.token;
    if (!token) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.INVALID_TOKEN
        });
    }
    const { newPassword } = ctx.body;
    const minLength = ctx.context.password?.config.minPasswordLength;
    const maxLength = ctx.context.password?.config.maxPasswordLength;
    if (newPassword.length < minLength) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.PASSWORD_TOO_SHORT
        });
    }
    if (newPassword.length > maxLength) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.PASSWORD_TOO_LONG
        });
    }
    const id = `reset-password:${token}`;
    const verification = await ctx.context.internalAdapter.findVerificationValue(id);
    if (!verification || verification.expiresAt < /* @__PURE__ */ new Date()) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.INVALID_TOKEN
        });
    }
    await ctx.context.internalAdapter.deleteVerificationValue(verification.id);
    const userId = verification.value;
    const hashedPassword = await ctx.context.password.hash(newPassword);
    const accounts = await ctx.context.internalAdapter.findAccounts(userId);
    const account = accounts.find((ac)=>ac.providerId === "credential");
    if (!account) {
        await ctx.context.internalAdapter.createAccount({
            userId,
            providerId: "credential",
            password: hashedPassword,
            accountId: userId
        });
        return ctx.json({
            status: true
        });
    }
    await ctx.context.internalAdapter.updatePassword(userId, hashedPassword);
    return ctx.json({
        status: true
    });
});
var updateUser = ()=>createAuthEndpoint("/update-user", {
        method: "POST",
        body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any()),
        use: [
            sessionMiddleware
        ],
        metadata: {
            $Infer: {
                body: {}
            },
            openapi: {
                description: "Update the current user",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name of the user"
                                    },
                                    image: {
                                        type: "string",
                                        description: "The image of the user"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        user: {
                                            type: "object"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const body = ctx.body;
        if (body.email) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: BASE_ERROR_CODES.EMAIL_CAN_NOT_BE_UPDATED
            });
        }
        const { name, image, ...rest } = body;
        const session = ctx.context.session;
        if (image === void 0 && name === void 0 && Object.keys(rest).length === 0) {
            return ctx.json({
                status: true
            });
        }
        const additionalFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUserInput"])(ctx.context.options, rest, "update");
        const user = await ctx.context.internalAdapter.updateUser(session.user.id, {
            name,
            image,
            ...additionalFields
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(ctx, {
            session: session.session,
            user
        });
        return ctx.json({
            status: true
        });
    });
var changePassword = createAuthEndpoint("/change-password", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        /**
       * The new password to set
       */ newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The new password to set"
        }),
        /**
       * The current password of the user
       */ currentPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The current password"
        }),
        /**
       * revoke all sessions that are not the
       * current one logged in by the user
       */ revokeOtherSessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean({
            description: "Revoke all other sessions"
        }).optional()
    }),
    use: [
        sessionMiddleware
    ],
    metadata: {
        openapi: {
            description: "Change the password of the user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    user: {
                                        description: "The user object",
                                        $ref: "#/components/schemas/User"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const { newPassword, currentPassword, revokeOtherSessions: revokeOtherSessions2 } = ctx.body;
    const session = ctx.context.session;
    const minPasswordLength = ctx.context.password.config.minPasswordLength;
    if (newPassword.length < minPasswordLength) {
        ctx.context.logger.error("Password is too short");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.PASSWORD_TOO_SHORT
        });
    }
    const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
    if (newPassword.length > maxPasswordLength) {
        ctx.context.logger.error("Password is too long");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.PASSWORD_TOO_LONG
        });
    }
    const accounts = await ctx.context.internalAdapter.findAccounts(session.user.id);
    const account = accounts.find((account2)=>account2.providerId === "credential" && account2.password);
    if (!account || !account.password) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND
        });
    }
    const passwordHash = await ctx.context.password.hash(newPassword);
    const verify = await ctx.context.password.verify({
        hash: account.password,
        password: currentPassword
    });
    if (!verify) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.INVALID_PASSWORD
        });
    }
    await ctx.context.internalAdapter.updateAccount(account.id, {
        password: passwordHash
    });
    let token = null;
    if (revokeOtherSessions2) {
        await ctx.context.internalAdapter.deleteSessions(session.user.id);
        const newSession = await ctx.context.internalAdapter.createSession(session.user.id, ctx.headers);
        if (!newSession) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                message: BASE_ERROR_CODES.FAILED_TO_GET_SESSION
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(ctx, {
            session: newSession,
            user: session.user
        });
        token = newSession.token;
    }
    return ctx.json({
        token,
        user: {
            id: session.user.id,
            email: session.user.email,
            name: session.user.name,
            image: session.user.image,
            emailVerified: session.user.emailVerified,
            createdAt: session.user.createdAt,
            updatedAt: session.user.updatedAt
        }
    });
});
var setPassword = createAuthEndpoint("/set-password", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        /**
       * The new password to set
       */ newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    }),
    metadata: {
        SERVER_ONLY: true
    },
    use: [
        sessionMiddleware
    ]
}, async (ctx)=>{
    const { newPassword } = ctx.body;
    const session = ctx.context.session;
    const minPasswordLength = ctx.context.password.config.minPasswordLength;
    if (newPassword.length < minPasswordLength) {
        ctx.context.logger.error("Password is too short");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.PASSWORD_TOO_SHORT
        });
    }
    const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
    if (newPassword.length > maxPasswordLength) {
        ctx.context.logger.error("Password is too long");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.PASSWORD_TOO_LONG
        });
    }
    const accounts = await ctx.context.internalAdapter.findAccounts(session.user.id);
    const account = accounts.find((account2)=>account2.providerId === "credential" && account2.password);
    const passwordHash = await ctx.context.password.hash(newPassword);
    if (!account) {
        await ctx.context.internalAdapter.linkAccount({
            userId: session.user.id,
            providerId: "credential",
            accountId: session.user.id,
            password: passwordHash
        });
        return ctx.json({
            status: true
        });
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "user already has a password"
    });
});
var deleteUser = createAuthEndpoint("/delete-user", {
    method: "POST",
    use: [
        sessionMiddleware
    ],
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        /**
       * The callback URL to redirect to after the user is deleted
       * this is only used on delete user callback
       */ callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
        /**
       * The password of the user. If the password isn't provided, session freshness
       * will be checked.
       */ password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
        /**
       * The token to delete the user. If the token is provided, the user will be deleted
       */ token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional()
    }),
    metadata: {
        openapi: {
            description: "Delete the user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object"
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    if (!ctx.context.options.user?.deleteUser?.enabled) {
        ctx.context.logger.error("Delete user is disabled. Enable it in the options", {
            session: ctx.context.session
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND");
    }
    const session = ctx.context.session;
    if (ctx.body.password) {
        const accounts = await ctx.context.internalAdapter.findAccounts(session.user.id);
        const account = accounts.find((account2)=>account2.providerId === "credential" && account2.password);
        if (!account || !account.password) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND
            });
        }
        const verify = await ctx.context.password.verify({
            hash: account.password,
            password: ctx.body.password
        });
        if (!verify) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: BASE_ERROR_CODES.INVALID_PASSWORD
            });
        }
    } else {
        if (ctx.context.options.session?.freshAge) {
            const currentAge = session.session.createdAt.getTime();
            const freshAge = ctx.context.options.session.freshAge;
            const now = Date.now();
            if (now - currentAge > freshAge) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: BASE_ERROR_CODES.SESSION_EXPIRED
                });
            }
        }
    }
    if (ctx.body.token) {
        await deleteUserCallback({
            ...ctx,
            query: {
                token: ctx.body.token
            }
        });
        return ctx.json({
            success: true,
            message: "User deleted"
        });
    }
    if (ctx.context.options.user.deleteUser?.sendDeleteAccountVerification) {
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRandomString"])(32, "0-9", "a-z");
        await ctx.context.internalAdapter.createVerificationValue({
            value: session.user.id,
            identifier: `delete-account-${token}`,
            expiresAt: new Date(Date.now() + 1e3 * 60 * 60 * 24)
        });
        const url = `${ctx.context.baseURL}/delete-user/callback?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
        await ctx.context.options.user.deleteUser.sendDeleteAccountVerification({
            user: session.user,
            url,
            token
        }, ctx.request);
        return ctx.json({
            success: true,
            message: "Verification email sent"
        });
    }
    const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
    if (beforeDelete) {
        await beforeDelete(session.user, ctx.request);
    }
    await ctx.context.internalAdapter.deleteUser(session.user.id);
    await ctx.context.internalAdapter.deleteSessions(session.user.id);
    await ctx.context.internalAdapter.deleteAccounts(session.user.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteSessionCookie"])(ctx);
    const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
    if (afterDelete) {
        await afterDelete(session.user, ctx.request);
    }
    return ctx.json({
        success: true,
        message: "User deleted"
    });
});
var deleteUserCallback = createAuthEndpoint("/delete-user/callback", {
    method: "GET",
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional()
    }),
    use: [
        originCheck((ctx)=>ctx.query.callbackURL)
    ]
}, async (ctx)=>{
    if (!ctx.context.options.user?.deleteUser?.enabled) {
        ctx.context.logger.error("Delete user is disabled. Enable it in the options");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND");
    }
    const session = await getSessionFromCtx(ctx);
    if (!session) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO
        });
    }
    const token = await ctx.context.internalAdapter.findVerificationValue(`delete-account-${ctx.query.token}`);
    if (!token || token.expiresAt < /* @__PURE__ */ new Date()) {
        if (token) {
            await ctx.context.internalAdapter.deleteVerificationValue(token.id);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: BASE_ERROR_CODES.INVALID_TOKEN
        });
    }
    if (token.value !== session.user.id) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: BASE_ERROR_CODES.INVALID_TOKEN
        });
    }
    const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
    if (beforeDelete) {
        await beforeDelete(session.user, ctx.request);
    }
    await ctx.context.internalAdapter.deleteUser(session.user.id);
    await ctx.context.internalAdapter.deleteSessions(session.user.id);
    await ctx.context.internalAdapter.deleteAccounts(session.user.id);
    await ctx.context.internalAdapter.deleteVerificationValue(token.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteSessionCookie"])(ctx);
    const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
    if (afterDelete) {
        await afterDelete(session.user, ctx.request);
    }
    if (ctx.query.callbackURL) {
        throw ctx.redirect(ctx.query.callbackURL || "/");
    }
    return ctx.json({
        success: true,
        message: "User deleted"
    });
});
var changeEmail = createAuthEndpoint("/change-email", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        newEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The new email to set"
        }).email(),
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The URL to redirect to after email verification"
        }).optional()
    }),
    use: [
        sessionMiddleware
    ],
    metadata: {
        openapi: {
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    user: {
                                        type: "object"
                                    },
                                    status: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    if (!ctx.context.options.user?.changeEmail?.enabled) {
        ctx.context.logger.error("Change email is disabled.");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Change email is disabled"
        });
    }
    if (ctx.body.newEmail === ctx.context.session.user.email) {
        ctx.context.logger.error("Email is the same");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Email is the same"
        });
    }
    const existingUser = await ctx.context.internalAdapter.findUserByEmail(ctx.body.newEmail);
    if (existingUser) {
        ctx.context.logger.error("Email already exists");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Couldn't update your email"
        });
    }
    if (ctx.context.session.user.emailVerified !== true) {
        await ctx.context.internalAdapter.updateUserByEmail(ctx.context.session.user.email, {
            email: ctx.body.newEmail
        });
        return ctx.json({
            status: true
        });
    }
    if (!ctx.context.options.user.changeEmail.sendChangeEmailVerification) {
        ctx.context.logger.error("Verification email isn't enabled.");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Verification email isn't enabled"
        });
    }
    const token = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, ctx.body.newEmail, ctx.context.options.emailVerification?.expiresIn);
    const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
    await ctx.context.options.user.changeEmail.sendChangeEmailVerification({
        user: ctx.context.session.user,
        newEmail: ctx.body.newEmail,
        url,
        token
    }, ctx.request);
    return ctx.json({
        status: true
    });
});
// src/api/routes/error.ts
function sanitize(input) {
    return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var html = (errorCode = "Unknown")=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication Error</title>
    <style>
        :root {
            --bg-color: #f8f9fa;
            --text-color: #212529;
            --accent-color: #000000;
            --error-color: #dc3545;
            --border-color: #e9ecef;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            line-height: 1.5;
        }
        .error-container {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 2.5rem;
            text-align: center;
            max-width: 90%;
            width: 400px;
        }
        h1 {
            color: var(--error-color);
            font-size: 1.75rem;
            margin-bottom: 1rem;
            font-weight: 600;
        }
        p {
            margin-bottom: 1.5rem;
            color: #495057;
        }
        .btn {
            background-color: var(--accent-color);
            color: #ffffff;
            text-decoration: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            transition: all 0.3s ease;
            display: inline-block;
            font-weight: 500;
            border: 2px solid var(--accent-color);
        }
        .btn:hover {
            background-color: #131721;
        }
        .error-code {
            font-size: 0.875rem;
            color: #6c757d;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--border-color);
        }
        .icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <div class="error-container">
        <div class="icon">\u26A0\uFE0F</div>
        <h1>Better Auth Error</h1>
        <p>We encountered an issue while processing your request. Please try again or contact the application owner if the problem persists.</p>
        <a href="/" id="returnLink" class="btn">Return to Application</a>
        <div class="error-code">Error Code: <span id="errorCode">${sanitize(errorCode)}</span></div>
    </div>
</body>
</html>`;
var error = createAuthEndpoint("/error", {
    method: "GET",
    metadata: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HIDE_METADATA"],
        openapi: {
            description: "Displays an error page",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "text/html": {
                            schema: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        }
    }
}, async (c)=>{
    const query = new URL(c.request?.url || "").searchParams.get("error") || "Unknown";
    return new Response(html(query), {
        headers: {
            "Content-Type": "text/html"
        }
    });
});
// src/api/routes/ok.ts
var ok = createAuthEndpoint("/ok", {
    method: "GET",
    metadata: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HIDE_METADATA"],
        openapi: {
            description: "Check if the API is working",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    ok: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    return ctx.json({
        ok: true
    });
});
var signUpEmail = ()=>createAuthEndpoint("/sign-up/email", {
        method: "POST",
        body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any()),
        metadata: {
            $Infer: {
                body: {}
            },
            openapi: {
                description: "Sign up a user using email and password",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name of the user"
                                    },
                                    email: {
                                        type: "string",
                                        description: "The email of the user"
                                    },
                                    password: {
                                        type: "string",
                                        description: "The password of the user"
                                    },
                                    callbackURL: {
                                        type: "string",
                                        description: "The URL to use for email verification callback"
                                    }
                                },
                                required: [
                                    "name",
                                    "email",
                                    "password"
                                ]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                            description: "The id of the user"
                                        },
                                        email: {
                                            type: "string",
                                            description: "The email of the user"
                                        },
                                        name: {
                                            type: "string",
                                            description: "The name of the user"
                                        },
                                        image: {
                                            type: "string",
                                            description: "The image of the user"
                                        },
                                        emailVerified: {
                                            type: "boolean",
                                            description: "If the email is verified"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        if (!ctx.context.options.emailAndPassword?.enabled) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: "Email and password sign up is not enabled"
            });
        }
        const body = ctx.body;
        const { name, email, password, image, callbackURL, ...additionalFields } = body;
        const isValidEmail = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().email().safeParse(email);
        if (!isValidEmail.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: BASE_ERROR_CODES.INVALID_EMAIL
            });
        }
        const minPasswordLength = ctx.context.password.config.minPasswordLength;
        if (password.length < minPasswordLength) {
            ctx.context.logger.error("Password is too short");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: BASE_ERROR_CODES.PASSWORD_TOO_SHORT
            });
        }
        const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
        if (password.length > maxPasswordLength) {
            ctx.context.logger.error("Password is too long");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: BASE_ERROR_CODES.PASSWORD_TOO_LONG
            });
        }
        const dbUser = await ctx.context.internalAdapter.findUserByEmail(email);
        if (dbUser?.user) {
            ctx.context.logger.info(`Sign-up attempt for existing email: ${email}`);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                message: BASE_ERROR_CODES.USER_ALREADY_EXISTS
            });
        }
        const additionalData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUserInput"])(ctx.context.options, additionalFields);
        let createdUser;
        try {
            createdUser = await ctx.context.internalAdapter.createUser({
                email: email.toLowerCase(),
                name,
                image,
                ...additionalData,
                emailVerified: false
            });
            if (!createdUser) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: BASE_ERROR_CODES.FAILED_TO_CREATE_USER
                });
            }
        } catch (e) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDevelopment"]) {
                ctx.context.logger.error("Failed to create user", e);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                message: BASE_ERROR_CODES.FAILED_TO_CREATE_USER,
                details: e
            });
        }
        if (!createdUser) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                message: BASE_ERROR_CODES.FAILED_TO_CREATE_USER
            });
        }
        const hash = await ctx.context.password.hash(password);
        await ctx.context.internalAdapter.linkAccount({
            userId: createdUser.id,
            providerId: "credential",
            accountId: createdUser.id,
            password: hash
        });
        if (ctx.context.options.emailVerification?.sendOnSignUp || ctx.context.options.emailAndPassword.requireEmailVerification) {
            const token = await createEmailVerificationToken(ctx.context.secret, createdUser.email, void 0, ctx.context.options.emailVerification?.expiresIn);
            const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${body.callbackURL || "/"}`;
            await ctx.context.options.emailVerification?.sendVerificationEmail?.({
                user: createdUser,
                url,
                token
            }, ctx.request);
        }
        if (ctx.context.options.emailAndPassword.autoSignIn === false || ctx.context.options.emailAndPassword.requireEmailVerification) {
            return ctx.json({
                token: null,
                user: {
                    id: createdUser.id,
                    email: createdUser.email,
                    name: createdUser.name,
                    image: createdUser.image,
                    emailVerified: createdUser.emailVerified,
                    createdAt: createdUser.createdAt,
                    updatedAt: createdUser.updatedAt
                }
            });
        }
        const session = await ctx.context.internalAdapter.createSession(createdUser.id, ctx.request);
        if (!session) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(ctx, {
            session,
            user: createdUser
        });
        return ctx.json({
            token: session.token,
            user: {
                id: createdUser.id,
                email: createdUser.email,
                name: createdUser.name,
                image: createdUser.image,
                emailVerified: createdUser.emailVerified,
                createdAt: createdUser.createdAt,
                updatedAt: createdUser.updatedAt
            }
        });
    });
var listUserAccounts = createAuthEndpoint("/list-accounts", {
    method: "GET",
    use: [
        sessionMiddleware
    ],
    metadata: {
        openapi: {
            description: "List all accounts linked to the user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string"
                                        },
                                        provider: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (c)=>{
    const session = c.context.session;
    const accounts = await c.context.internalAdapter.findAccounts(session.user.id);
    return c.json(accounts.map((a)=>{
        return {
            id: a.id,
            provider: a.providerId,
            createdAt: a.createdAt,
            updatedAt: a.updatedAt,
            accountId: a.accountId,
            scopes: a.scope?.split(",") || []
        };
    }));
});
var linkSocialAccount = createAuthEndpoint("/link-social", {
    method: "POST",
    requireHeaders: true,
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        /**
       * Callback URL to redirect to after the user has signed in.
       */ callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string({
            description: "The URL to redirect to after the user has signed in"
        }).optional(),
        /**
       * OAuth2 provider to use`
       */ provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$VXDYNCOX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["socialProviderList"], {
            description: "The OAuth2 provider to use"
        })
    }),
    use: [
        sessionMiddleware
    ],
    metadata: {
        openapi: {
            description: "Link a social account to the user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    url: {
                                        type: "string"
                                    },
                                    redirect: {
                                        type: "boolean"
                                    }
                                },
                                required: [
                                    "url",
                                    "redirect"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (c)=>{
    const session = c.context.session;
    const account = await c.context.internalAdapter.findAccounts(session.user.id);
    const existingAccount = account.find((a)=>a.providerId === c.body.provider);
    if (existingAccount) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.SOCIAL_ACCOUNT_ALREADY_LINKED
        });
    }
    const provider = c.context.socialProviders.find((p)=>p.id === c.body.provider);
    if (!provider) {
        c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", {
            provider: c.body.provider
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: BASE_ERROR_CODES.PROVIDER_NOT_FOUND
        });
    }
    const state = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$NPO64SVN$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateState"])(c, {
        userId: session.user.id,
        email: session.user.email
    });
    const url = await provider.createAuthorizationURL({
        state: state.state,
        codeVerifier: state.codeVerifier,
        redirectURI: `${c.context.baseURL}/callback/${provider.id}`
    });
    return c.json({
        url: url.toString(),
        redirect: true
    });
});
var unlinkAccount = createAuthEndpoint("/unlink-account", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        providerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    }),
    use: [
        freshSessionMiddleware
    ]
}, async (ctx)=>{
    const accounts = await ctx.context.internalAdapter.findAccounts(ctx.context.session.user.id);
    if (accounts.length === 1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.FAILED_TO_UNLINK_LAST_ACCOUNT
        });
    }
    const accountExist = accounts.find((account)=>account.providerId === ctx.body.providerId);
    if (!accountExist) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: BASE_ERROR_CODES.ACCOUNT_NOT_FOUND
        });
    }
    await ctx.context.internalAdapter.deleteAccount(ctx.body.providerId, ctx.context.session.user.id);
    return ctx.json({
        status: true
    });
});
// src/api/rate-limiter/index.ts
function shouldRateLimit(max, window, rateLimitData) {
    const now = Date.now();
    const windowInMs = window * 1e3;
    const timeSinceLastRequest = now - rateLimitData.lastRequest;
    return timeSinceLastRequest < windowInMs && rateLimitData.count >= max;
}
function rateLimitResponse(retryAfter) {
    return new Response(JSON.stringify({
        message: "Too many requests. Please try again later."
    }), {
        status: 429,
        statusText: "Too Many Requests",
        headers: {
            "X-Retry-After": retryAfter.toString()
        }
    });
}
function getRetryAfter(lastRequest, window) {
    const now = Date.now();
    const windowInMs = window * 1e3;
    return Math.ceil((lastRequest + windowInMs - now) / 1e3);
}
function createDBStorage(ctx, modelName) {
    const model = "rateLimit";
    const db = ctx.adapter;
    return {
        get: async (key)=>{
            const res = await db.findMany({
                model,
                where: [
                    {
                        field: "key",
                        value: key
                    }
                ]
            });
            const data = res[0];
            if (typeof data?.lastRequest === "bigint") {
                data.lastRequest = Number(data.lastRequest);
            }
            return data;
        },
        set: async (key, value, _update)=>{
            try {
                if (_update) {
                    await db.updateMany({
                        model: modelName ?? "rateLimit",
                        where: [
                            {
                                field: "key",
                                value: key
                            }
                        ],
                        update: {
                            count: value.count,
                            lastRequest: value.lastRequest
                        }
                    });
                } else {
                    await db.create({
                        model: modelName ?? "rateLimit",
                        data: {
                            key,
                            count: value.count,
                            lastRequest: value.lastRequest
                        }
                    });
                }
            } catch (e) {
                ctx.logger.error("Error setting rate limit", e);
            }
        }
    };
}
var memory = /* @__PURE__ */ new Map();
function getRateLimitStorage(ctx) {
    if (ctx.options.rateLimit?.customStorage) {
        return ctx.options.rateLimit.customStorage;
    }
    if (ctx.rateLimit.storage === "secondary-storage") {
        return {
            get: async (key)=>{
                const stringified = await ctx.options.secondaryStorage?.get(key);
                return stringified ? JSON.parse(stringified) : void 0;
            },
            set: async (key, value)=>{
                await ctx.options.secondaryStorage?.set?.(key, JSON.stringify(value));
            }
        };
    }
    const storage = ctx.rateLimit.storage;
    if (storage === "memory") {
        return {
            async get (key) {
                return memory.get(key);
            },
            async set (key, value, _update) {
                memory.set(key, value);
            }
        };
    }
    return createDBStorage(ctx, ctx.rateLimit.modelName);
}
async function onRequestRateLimit(req, ctx) {
    if (!ctx.rateLimit.enabled) {
        return;
    }
    const baseURL = ctx.baseURL;
    const path = req.url.replace(baseURL, "").split("?")[0];
    let window = ctx.rateLimit.window;
    let max = ctx.rateLimit.max;
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getIp"])(req, ctx.options) + path;
    const specialRules = getDefaultSpecialRules();
    const specialRule = specialRules.find((rule)=>rule.pathMatcher(path));
    if (specialRule) {
        window = specialRule.window;
        max = specialRule.max;
    }
    for (const plugin of ctx.options.plugins || []){
        if (plugin.rateLimit) {
            const matchedRule = plugin.rateLimit.find((rule)=>rule.pathMatcher(path));
            if (matchedRule) {
                window = matchedRule.window;
                max = matchedRule.max;
                break;
            }
        }
    }
    if (ctx.rateLimit.customRules) {
        const _path = Object.keys(ctx.rateLimit.customRules).find((p)=>{
            if (p.includes("*")) {
                const isMatch2 = wildcardMatch(p)(path);
                return isMatch2;
            }
            return p === path;
        });
        if (_path) {
            const customRule = ctx.rateLimit.customRules[_path];
            const resolved = typeof customRule === "function" ? await customRule(req) : customRule;
            if (resolved) {
                window = resolved.window;
                max = resolved.max;
            }
        }
    }
    const storage = getRateLimitStorage(ctx);
    const data = await storage.get(key);
    const now = Date.now();
    if (!data) {
        await storage.set(key, {
            key,
            count: 1,
            lastRequest: now
        });
    } else {
        const timeSinceLastRequest = now - data.lastRequest;
        if (shouldRateLimit(max, window, data)) {
            const retryAfter = getRetryAfter(data.lastRequest, window);
            return rateLimitResponse(retryAfter);
        } else if (timeSinceLastRequest > window * 1e3) {
            await storage.set(key, {
                ...data,
                count: 1,
                lastRequest: now
            }, true);
        } else {
            await storage.set(key, {
                ...data,
                count: data.count + 1,
                lastRequest: now
            }, true);
        }
    }
}
function getDefaultSpecialRules() {
    const specialRules = [
        {
            pathMatcher (path) {
                return path.startsWith("/sign-in") || path.startsWith("/sign-up") || path.startsWith("/change-password") || path.startsWith("/change-email");
            },
            window: 10,
            max: 3
        }
    ];
    return specialRules;
}
function getEndpoints(ctx, options) {
    const pluginEndpoints = options.plugins?.reduce((acc, plugin)=>{
        return {
            ...acc,
            ...plugin.endpoints
        };
    }, {});
    const middlewares = options.plugins?.map((plugin)=>plugin.middlewares?.map((m)=>{
            const middleware = async (context)=>{
                return m.middleware({
                    ...context,
                    context: {
                        ...ctx,
                        ...context.context
                    }
                });
            };
            middleware.path = m.path;
            middleware.options = m.middleware.options;
            middleware.headers = m.middleware.headers;
            return {
                path: m.path,
                middleware
            };
        })).filter((plugin)=>plugin !== void 0).flat() || [];
    const baseEndpoints = {
        signInSocial,
        callbackOAuth,
        getSession: getSession(),
        signOut,
        signUpEmail: signUpEmail(),
        signInEmail,
        forgetPassword,
        resetPassword,
        verifyEmail,
        sendVerificationEmail,
        changeEmail,
        changePassword,
        setPassword,
        updateUser: updateUser(),
        deleteUser,
        forgetPasswordCallback,
        listSessions: listSessions(),
        revokeSession,
        revokeSessions,
        revokeOtherSessions,
        linkSocialAccount,
        listUserAccounts,
        deleteUserCallback,
        unlinkAccount
    };
    const endpoints = {
        ...baseEndpoints,
        ...pluginEndpoints,
        ok,
        error
    };
    let api = {};
    for (const [key, endpoint] of Object.entries(endpoints)){
        api[key] = async (context = {})=>{
            endpoint.headers = new Headers();
            let internalCtx = {
                setHeader (key2, value) {
                    endpoint.headers.set(key2, value);
                },
                setCookie (key2, value, options2) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setCookie"])(endpoint.headers, key2, value, options2);
                },
                getCookie (key2, prefix) {
                    const header = context.headers;
                    const cookieH = header?.get("cookie");
                    const cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCookie"])(cookieH || "", key2, prefix);
                    return cookie;
                },
                getSignedCookie (key2, secret, prefix) {
                    const header = context.headers;
                    if (!header) {
                        return null;
                    }
                    const cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSignedCookie"])(header, secret, key2, prefix);
                    return cookie;
                },
                async setSignedCookie (key2, value, secret, options2) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSignedCookie"])(endpoint.headers, key2, value, secret, options2);
                },
                redirect (url) {
                    endpoint.headers.set("Location", url);
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("FOUND");
                },
                responseHeader: endpoint.headers
            };
            let authCtx = await ctx;
            let newSession = null;
            let internalContext = {
                ...internalCtx,
                ...context,
                path: endpoint.path,
                context: {
                    ...authCtx,
                    ...context.context,
                    session: null,
                    setNewSession: function(session) {
                        this.newSession = session;
                        newSession = session;
                    },
                    returned: void 0
                },
                responseHeader: new Headers()
            };
            const plugins = options.plugins || [];
            const beforeHooks = plugins.map((plugin)=>{
                if (plugin.hooks?.before) {
                    return plugin.hooks.before;
                }
            }).filter((plugin)=>plugin !== void 0).flat();
            const afterHooks = plugins.map((plugin)=>{
                if (plugin.hooks?.after) {
                    return plugin.hooks.after;
                }
            }).filter((plugin)=>plugin !== void 0).flat();
            if (options.hooks?.before) {
                beforeHooks.push({
                    matcher: ()=>true,
                    handler: options.hooks.before
                });
            }
            if (options.hooks?.after) {
                afterHooks.push({
                    matcher: ()=>true,
                    handler: options.hooks.after
                });
            }
            for (const hook of beforeHooks){
                if (!hook.matcher(internalContext)) continue;
                const hookRes = await hook.handler(internalContext);
                if (hookRes && "context" in hookRes) {
                    internalContext = {
                        ...internalContext,
                        ...hookRes.context
                    };
                    continue;
                }
                if (hookRes) {
                    return hookRes;
                }
            }
            let endpointRes;
            try {
                endpointRes = await endpoint(internalContext);
                if (newSession) {
                    internalContext.context.newSession = newSession;
                }
            } catch (e) {
                if (newSession) {
                    internalContext.context.newSession = newSession;
                }
                if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) {
                    if (!afterHooks?.length) {
                        e.headers = endpoint.headers;
                        throw e;
                    }
                    internalContext.context.returned = e;
                    internalContext.context.returned.headers = endpoint.headers;
                    for (const hook of afterHooks || []){
                        const match = hook.matcher(internalContext);
                        if (match) {
                            try {
                                const hookRes = await hook.handler(internalContext);
                                if (hookRes && "response" in hookRes) {
                                    internalContext.context.returned = hookRes.response;
                                }
                            } catch (e2) {
                                if (e2 instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) {
                                    internalContext.context.returned = e2;
                                    continue;
                                }
                                throw e2;
                            }
                        }
                    }
                    if (internalContext.context.returned instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) {
                        internalContext.context.returned.headers = endpoint.headers;
                        throw internalContext.context.returned;
                    }
                    return internalContext.context.returned;
                }
                throw e;
            }
            internalContext.context.returned = endpointRes;
            internalContext.responseHeader = endpoint.headers;
            for (const hook of afterHooks){
                const match = hook.matcher(internalContext);
                if (match) {
                    try {
                        const hookRes = await hook.handler(internalContext);
                        if (hookRes) {
                            if ("responseHeader" in hookRes) {
                                const headers = hookRes.responseHeader;
                                internalContext.responseHeader = headers;
                            } else {
                                internalContext.context.returned = hookRes;
                            }
                        }
                    } catch (e) {
                        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) {
                            internalContext.context.returned = e;
                            continue;
                        }
                        throw e;
                    }
                }
            }
            const response = internalContext.context.returned;
            if (response instanceof Response) {
                endpoint.headers.forEach((value, key2)=>{
                    if (key2 === "set-cookie") {
                        response.headers.append(key2, value);
                    } else {
                        response.headers.set(key2, value);
                    }
                });
            }
            if (response instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) {
                response.headers = endpoint.headers;
                throw response;
            }
            return response;
        };
        api[key].path = endpoint.path;
        api[key].method = endpoint.method;
        api[key].options = endpoint.options;
        api[key].headers = endpoint.headers;
    }
    return {
        api,
        middlewares
    };
}
var router = (ctx, options)=>{
    const { api, middlewares } = getEndpoints(ctx, options);
    const basePath = new URL(ctx.baseURL).pathname;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createRouter"])(api, {
        extraContext: ctx,
        basePath,
        routerMiddleware: [
            {
                path: "/**",
                middleware: originCheckMiddleware
            },
            ...middlewares
        ],
        async onRequest (req) {
            for (const plugin of ctx.options.plugins || []){
                if (plugin.onRequest) {
                    const response = await plugin.onRequest(req, ctx);
                    if (response && "response" in response) {
                        return response.response;
                    }
                }
            }
            return onRequestRateLimit(req, ctx);
        },
        async onResponse (res) {
            for (const plugin of ctx.options.plugins || []){
                if (plugin.onResponse) {
                    const response = await plugin.onResponse(res, ctx);
                    if (response) {
                        return response.response;
                    }
                }
            }
            return res;
        },
        onError (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] && e.status === "FOUND") {
                return;
            }
            if (options.onAPIError?.throw) {
                throw e;
            }
            if (options.onAPIError?.onError) {
                options.onAPIError.onError(e, ctx);
                return;
            }
            const optLogLevel = options.logger?.level;
            const log = optLogLevel === "error" || optLogLevel === "warn" || optLogLevel === "debug" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"] : void 0;
            if (options.logger?.disabled !== true) {
                if (e && typeof e === "object" && "message" in e && typeof e.message === "string") {
                    if (e.message.includes("no column") || e.message.includes("column") || e.message.includes("relation") || e.message.includes("table") || e.message.includes("does not exist")) {
                        ctx.logger?.error(e.message);
                        return;
                    }
                }
                if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) {
                    if (e.status === "INTERNAL_SERVER_ERROR") {
                        ctx.logger.error(e.status, e);
                    }
                    log?.error(e.message);
                } else {
                    ctx.logger?.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
                }
            }
        }
    });
};
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-Y4MIQB37.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$VXDYNCOX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-VXDYNCOX.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-XFCIANZX.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-QQGZ3XGI.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-HZBNUY7E.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-KLDFBLYL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$NPO64SVN$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-NPO64SVN.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-DBPOZRMS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-53IPO2PJ.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-FURNA6HY.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TQQSPPNA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$0$2e$3$2e$3$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-call@0.3.3/node_modules/better-call/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/hmac.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$2$2e$3$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@better-auth+utils@0.2.3/node_modules/@better-auth/utils/dist/binary.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$Y4MIQB37$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-Y4MIQB37.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-MGJLVQOV.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "convertFromDB": (()=>convertFromDB),
    "convertToDB": (()=>convertToDB),
    "createFieldAttribute": (()=>createFieldAttribute),
    "createInternalAdapter": (()=>createInternalAdapter),
    "createKyselyAdapter": (()=>createKyselyAdapter),
    "getAdapter": (()=>getAdapter),
    "getAuthTables": (()=>getAuthTables),
    "getMigrations": (()=>getMigrations),
    "getSchema": (()=>getSchema),
    "getWithHooks": (()=>getWithHooks),
    "kyselyAdapter": (()=>kyselyAdapter),
    "matchType": (()=>matchType),
    "memoryAdapter": (()=>memoryAdapter),
    "toZodSchema": (()=>toZodSchema),
    "withApplyDefault": (()=>withApplyDefault)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-HZBNUY7E.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-KLDFBLYL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-53IPO2PJ.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-FURNA6HY.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-UNWCXKMP.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$sqlite$2f$sqlite$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/kysely@0.27.5/node_modules/kysely/dist/esm/dialect/sqlite/sqlite-dialect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mysql$2f$mysql$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/kysely@0.27.5/node_modules/kysely/dist/esm/dialect/mysql/mysql-dialect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$postgres$2f$postgres$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/kysely@0.27.5/node_modules/kysely/dist/esm/dialect/postgres/postgres-dialect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mssql$2f$mssql$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/kysely@0.27.5/node_modules/kysely/dist/esm/dialect/mssql/mssql-dialect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$kysely$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/kysely@0.27.5/node_modules/kysely/dist/esm/kysely.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
function getDatabaseType(db) {
    if (!db) {
        return null;
    }
    if ("dialect" in db) {
        return getDatabaseType(db.dialect);
    }
    if ("createDriver" in db) {
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$sqlite$2f$sqlite$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SqliteDialect"]) {
            return "sqlite";
        }
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mysql$2f$mysql$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MysqlDialect"]) {
            return "mysql";
        }
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$postgres$2f$postgres$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostgresDialect"]) {
            return "postgres";
        }
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mssql$2f$mssql$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MssqlDialect"]) {
            return "mssql";
        }
    }
    if ("aggregate" in db) {
        return "sqlite";
    }
    if ("getConnection" in db) {
        return "mysql";
    }
    if ("connect" in db) {
        return "postgres";
    }
    return null;
}
var createKyselyAdapter = async (config)=>{
    const db = config.database;
    if (!db) {
        return {
            kysely: null,
            databaseType: null
        };
    }
    if ("db" in db) {
        return {
            kysely: db.db,
            databaseType: db.type
        };
    }
    if ("dialect" in db) {
        return {
            kysely: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$kysely$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kysely"]({
                dialect: db.dialect
            }),
            databaseType: db.type
        };
    }
    let dialect = void 0;
    const databaseType = getDatabaseType(db);
    if ("createDriver" in db) {
        dialect = db;
    }
    if ("aggregate" in db) {
        dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$sqlite$2f$sqlite$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SqliteDialect"]({
            database: db
        });
    }
    if ("getConnection" in db) {
        dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mysql$2f$mysql$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MysqlDialect"](db);
    }
    if ("connect" in db) {
        dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$postgres$2f$postgres$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostgresDialect"]({
            pool: db
        });
    }
    return {
        kysely: dialect ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$27$2e$5$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$kysely$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kysely"]({
            dialect
        }) : null,
        databaseType
    };
};
// src/db/with-hooks.ts
function getWithHooks(adapter, ctx) {
    const hooks = ctx.hooks;
    async function createWithHooks(data, model, customCreateFn) {
        let actualData = data;
        for (const hook of hooks || []){
            const toRun = hook[model]?.create?.before;
            if (toRun) {
                const result = await toRun(data);
                if (result === false) {
                    return null;
                }
                const isObject = typeof result === "object" && "data" in result;
                if (isObject) {
                    actualData = result.data;
                }
            }
        }
        const customCreated = customCreateFn ? await customCreateFn.fn(actualData) : null;
        const created = !customCreateFn || customCreateFn.executeMainFn ? await adapter.create({
            model,
            data: actualData
        }) : customCreated;
        for (const hook of hooks || []){
            const toRun = hook[model]?.create?.after;
            if (toRun) {
                await toRun(created);
            }
        }
        return created;
    }
    async function updateWithHooks(data, where, model, customUpdateFn) {
        let actualData = data;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.before;
            if (toRun) {
                const result = await toRun(data);
                if (result === false) {
                    return null;
                }
                const isObject = typeof result === "object";
                actualData = isObject ? result.data : result;
            }
        }
        const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
        const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await adapter.update({
            model,
            update: actualData,
            where
        }) : customUpdated;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.after;
            if (toRun) {
                await toRun(updated);
            }
        }
        return updated;
    }
    async function updateManyWithHooks(data, where, model, customUpdateFn) {
        let actualData = data;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.before;
            if (toRun) {
                const result = await toRun(data);
                if (result === false) {
                    return null;
                }
                const isObject = typeof result === "object";
                actualData = isObject ? result.data : result;
            }
        }
        const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
        const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await adapter.updateMany({
            model,
            update: actualData,
            where
        }) : customUpdated;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.after;
            if (toRun) {
                await toRun(updated);
            }
        }
        return updated;
    }
    return {
        createWithHooks,
        updateWithHooks,
        updateManyWithHooks
    };
}
// src/db/internal-adapter.ts
var createInternalAdapter = (adapter, ctx)=>{
    const options = ctx.options;
    const secondaryStorage = options.secondaryStorage;
    const sessionExpiration = options.session?.expiresIn || 60 * 60 * 24 * 7;
    const { createWithHooks, updateWithHooks, updateManyWithHooks } = getWithHooks(adapter, ctx);
    return {
        createOAuthUser: async (user, account)=>{
            const createdUser = await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...user
            }, "user");
            const createdAccount = await createWithHooks({
                ...account,
                userId: createdUser.id || user.id,
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date()
            }, "account");
            return {
                user: createdUser,
                account: createdAccount
            };
        },
        createUser: async (user)=>{
            const createdUser = await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                emailVerified: false,
                ...user,
                email: user.email.toLowerCase()
            }, "user");
            return createdUser;
        },
        createAccount: async (account)=>{
            const createdAccount = await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...account
            }, "account");
            return createdAccount;
        },
        listSessions: async (userId)=>{
            if (secondaryStorage) {
                const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
                if (!currentList) return [];
                const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeJSONParse"])(currentList) || [];
                const now = Date.now();
                const validSessions = list.filter((s)=>s.expiresAt > now);
                const sessions2 = [];
                for (const session of validSessions){
                    const sessionStringified = await secondaryStorage.get(session.token);
                    if (sessionStringified) {
                        const s = JSON.parse(sessionStringified);
                        const parsedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSessionOutput"])(ctx.options, {
                            ...s.session,
                            expiresAt: new Date(s.session.expiresAt)
                        });
                        sessions2.push(parsedSession);
                    }
                }
                return sessions2;
            }
            const sessions = await adapter.findMany({
                model: "session",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
            return sessions;
        },
        listUsers: async (limit, offset, sortBy, where)=>{
            const users = await adapter.findMany({
                model: "user",
                limit,
                offset,
                sortBy,
                where
            });
            return users;
        },
        deleteUser: async (userId)=>{
            if (secondaryStorage) {
                await secondaryStorage.delete(`active-sessions-${userId}`);
            }
            if (!secondaryStorage || options.session?.storeSessionInDatabase) {
                await adapter.deleteMany({
                    model: "session",
                    where: [
                        {
                            field: "userId",
                            value: userId
                        }
                    ]
                });
            }
            await adapter.deleteMany({
                model: "account",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
            await adapter.delete({
                model: "user",
                where: [
                    {
                        field: "id",
                        value: userId
                    }
                ]
            });
        },
        createSession: async (userId, request, dontRememberMe, override)=>{
            const headers = request instanceof Request ? request.headers : request;
            const { id: _, ...rest } = override || {};
            const data = {
                ipAddress: request ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getIp"])(request, ctx.options) || "" : "",
                userAgent: headers?.get("user-agent") || "",
                ...rest,
                /**
         * If the user doesn't want to be remembered
         * set the session to expire in 1 day.
         * The cookie will be set to expire at the end of the session
         */ expiresAt: dontRememberMe ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDate"])(60 * 60 * 24, "sec") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDate"])(sessionExpiration, "sec"),
                userId,
                token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])(32),
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date()
            };
            const res = await createWithHooks(data, "session", secondaryStorage ? {
                fn: async (sessionData)=>{
                    const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
                    let list = [];
                    const now = Date.now();
                    if (currentList) {
                        list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeJSONParse"])(currentList) || [];
                        list = list.filter((session)=>session.expiresAt > now);
                    }
                    list.push({
                        token: data.token,
                        expiresAt: now + sessionExpiration * 1e3
                    });
                    await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(list), sessionExpiration);
                    return sessionData;
                },
                executeMainFn: options.session?.storeSessionInDatabase
            } : void 0);
            return res;
        },
        findSession: async (token)=>{
            if (secondaryStorage) {
                const sessionStringified = await secondaryStorage.get(token);
                if (!sessionStringified) {
                    return null;
                }
                const s = JSON.parse(sessionStringified);
                const parsedSession2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSessionOutput"])(ctx.options, {
                    ...s.session,
                    expiresAt: new Date(s.session.expiresAt),
                    createdAt: new Date(s.session.createdAt),
                    updatedAt: new Date(s.session.updatedAt)
                });
                const parsedUser2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.options, {
                    ...s.user,
                    createdAt: new Date(s.user.createdAt),
                    updatedAt: new Date(s.user.updatedAt)
                });
                return {
                    session: parsedSession2,
                    user: parsedUser2
                };
            }
            const session = await adapter.findOne({
                model: "session",
                where: [
                    {
                        value: token,
                        field: "token"
                    }
                ]
            });
            if (!session) {
                return null;
            }
            const user = await adapter.findOne({
                model: "user",
                where: [
                    {
                        value: session.userId,
                        field: "id"
                    }
                ]
            });
            if (!user) {
                return null;
            }
            const parsedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSessionOutput"])(ctx.options, session);
            const parsedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.options, user);
            return {
                session: parsedSession,
                user: parsedUser
            };
        },
        findSessions: async (sessionTokens)=>{
            if (secondaryStorage) {
                const sessions2 = [];
                for (const sessionToken of sessionTokens){
                    const sessionStringified = await secondaryStorage.get(sessionToken);
                    if (sessionStringified) {
                        const s = JSON.parse(sessionStringified);
                        const session = {
                            session: {
                                ...s.session,
                                expiresAt: new Date(s.session.expiresAt)
                            },
                            user: {
                                ...s.user,
                                createdAt: new Date(s.user.createdAt),
                                updatedAt: new Date(s.user.updatedAt)
                            }
                        };
                        sessions2.push(session);
                    }
                }
                return sessions2;
            }
            const sessions = await adapter.findMany({
                model: "session",
                where: [
                    {
                        field: "token",
                        value: sessionTokens,
                        operator: "in"
                    }
                ]
            });
            const userIds = sessions.map((session)=>{
                return session.userId;
            });
            if (!userIds.length) return [];
            const users = await adapter.findMany({
                model: "user",
                where: [
                    {
                        field: "id",
                        value: userIds,
                        operator: "in"
                    }
                ]
            });
            return sessions.map((session)=>{
                const user = users.find((u)=>u.id === session.userId);
                if (!user) return null;
                return {
                    session,
                    user
                };
            });
        },
        updateSession: async (sessionToken, session)=>{
            const updatedSession = await updateWithHooks(session, [
                {
                    field: "token",
                    value: sessionToken
                }
            ], "session", secondaryStorage ? {
                async fn (data) {
                    const currentSession = await secondaryStorage.get(sessionToken);
                    let updatedSession2 = null;
                    if (currentSession) {
                        const parsedSession = JSON.parse(currentSession);
                        updatedSession2 = {
                            ...parsedSession.session,
                            ...data
                        };
                        return updatedSession2;
                    } else {
                        return null;
                    }
                },
                executeMainFn: options.session?.storeSessionInDatabase
            } : void 0);
            return updatedSession;
        },
        deleteSession: async (token)=>{
            if (secondaryStorage) {
                await secondaryStorage.delete(token);
                if (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase) {
                    return;
                }
            }
            await adapter.delete({
                model: "session",
                where: [
                    {
                        field: "token",
                        value: token
                    }
                ]
            });
        },
        deleteAccounts: async (userId)=>{
            await adapter.deleteMany({
                model: "account",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
        },
        deleteAccount: async (providerId, userId)=>{
            await adapter.delete({
                model: "account",
                where: [
                    {
                        field: "providerId",
                        value: providerId
                    },
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
        },
        deleteSessions: async (userIdOrSessionTokens)=>{
            if (secondaryStorage) {
                if (typeof userIdOrSessionTokens === "string") {
                    const activeSession = await secondaryStorage.get(`active-sessions-${userIdOrSessionTokens}`);
                    const sessions = activeSession ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeJSONParse"])(activeSession) : [];
                    if (!sessions) return;
                    for (const session of sessions){
                        await secondaryStorage.delete(session.token);
                    }
                } else {
                    for (const sessionToken of userIdOrSessionTokens){
                        const session = await secondaryStorage.get(sessionToken);
                        if (session) {
                            await secondaryStorage.delete(sessionToken);
                        }
                    }
                }
                if (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase) {
                    return;
                }
            }
            await adapter.deleteMany({
                model: "session",
                where: [
                    {
                        field: Array.isArray(userIdOrSessionTokens) ? "token" : "userId",
                        value: userIdOrSessionTokens,
                        operator: Array.isArray(userIdOrSessionTokens) ? "in" : void 0
                    }
                ]
            });
        },
        findOAuthUser: async (email, accountId, providerId)=>{
            const account = await adapter.findOne({
                model: "account",
                where: [
                    {
                        value: accountId,
                        field: "accountId"
                    },
                    {
                        value: providerId,
                        field: "providerId"
                    }
                ]
            });
            if (account) {
                const user = await adapter.findOne({
                    model: "user",
                    where: [
                        {
                            value: account.userId,
                            field: "id"
                        }
                    ]
                });
                if (user) {
                    return {
                        user,
                        accounts: [
                            account
                        ]
                    };
                } else {
                    return null;
                }
            } else {
                const user = await adapter.findOne({
                    model: "user",
                    where: [
                        {
                            value: email.toLowerCase(),
                            field: "email"
                        }
                    ]
                });
                if (user) {
                    const accounts = await adapter.findMany({
                        model: "account",
                        where: [
                            {
                                value: user.id,
                                field: "userId"
                            }
                        ]
                    });
                    return {
                        user,
                        accounts: accounts || []
                    };
                } else {
                    return null;
                }
            }
        },
        findUserByEmail: async (email, options2)=>{
            const user = await adapter.findOne({
                model: "user",
                where: [
                    {
                        value: email.toLowerCase(),
                        field: "email"
                    }
                ]
            });
            if (!user) return null;
            if (options2?.includeAccounts) {
                const accounts = await adapter.findMany({
                    model: "account",
                    where: [
                        {
                            value: user.id,
                            field: "userId"
                        }
                    ]
                });
                return {
                    user,
                    accounts
                };
            }
            return {
                user,
                accounts: []
            };
        },
        findUserById: async (userId)=>{
            const user = await adapter.findOne({
                model: "user",
                where: [
                    {
                        field: "id",
                        value: userId
                    }
                ]
            });
            return user;
        },
        linkAccount: async (account)=>{
            const _account = await createWithHooks({
                ...account,
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date()
            }, "account");
            return _account;
        },
        updateUser: async (userId, data)=>{
            const user = await updateWithHooks(data, [
                {
                    field: "id",
                    value: userId
                }
            ], "user");
            return user;
        },
        updateUserByEmail: async (email, data)=>{
            const user = await updateWithHooks(data, [
                {
                    field: "email",
                    value: email
                }
            ], "user");
            return user;
        },
        updatePassword: async (userId, password)=>{
            await updateManyWithHooks({
                password
            }, [
                {
                    field: "userId",
                    value: userId
                },
                {
                    field: "providerId",
                    value: "credential"
                }
            ], "account");
        },
        findAccounts: async (userId)=>{
            const accounts = await adapter.findMany({
                model: "account",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
            return accounts;
        },
        findAccount: async (accountId)=>{
            const account = await adapter.findOne({
                model: "account",
                where: [
                    {
                        field: "accountId",
                        value: accountId
                    }
                ]
            });
            return account;
        },
        findAccountByUserId: async (userId)=>{
            const account = await adapter.findMany({
                model: "account",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
            return account;
        },
        updateAccount: async (accountId, data)=>{
            const account = await updateWithHooks(data, [
                {
                    field: "id",
                    value: accountId
                }
            ], "account");
            return account;
        },
        createVerificationValue: async (data)=>{
            const verification = await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...data
            }, "verification");
            return verification;
        },
        findVerificationValue: async (identifier)=>{
            const verification = await adapter.findMany({
                model: "verification",
                where: [
                    {
                        field: "identifier",
                        value: identifier
                    }
                ],
                sortBy: {
                    field: "createdAt",
                    direction: "desc"
                },
                limit: 1
            });
            const lastVerification = verification[0];
            return lastVerification;
        },
        deleteVerificationValue: async (id)=>{
            await adapter.delete({
                model: "verification",
                where: [
                    {
                        field: "id",
                        value: id
                    }
                ]
            });
        },
        deleteVerificationByIdentifier: async (identifier)=>{
            await adapter.delete({
                model: "verification",
                where: [
                    {
                        field: "identifier",
                        value: identifier
                    }
                ]
            });
        },
        updateVerificationValue: async (id, data)=>{
            const verification = await updateWithHooks(data, [
                {
                    field: "id",
                    value: id
                }
            ], "verification");
            return verification;
        }
    };
};
// src/db/field.ts
var createFieldAttribute = (type, config)=>{
    return {
        type,
        ...config
    };
};
// src/db/get-tables.ts
var getAuthTables = (options)=>{
    const pluginSchema = options.plugins?.reduce((acc, plugin)=>{
        const schema = plugin.schema;
        if (!schema) return acc;
        for (const [key, value] of Object.entries(schema)){
            acc[key] = {
                fields: {
                    ...acc[key]?.fields,
                    ...value.fields
                },
                modelName: value.modelName || key
            };
        }
        return acc;
    }, {});
    const shouldAddRateLimitTable = options.rateLimit?.storage === "database";
    const rateLimitTable = {
        rateLimit: {
            modelName: options.rateLimit?.modelName || "rateLimit",
            fields: {
                key: {
                    type: "string",
                    fieldName: options.rateLimit?.fields?.key || "key"
                },
                count: {
                    type: "number",
                    fieldName: options.rateLimit?.fields?.count || "count"
                },
                lastRequest: {
                    type: "number",
                    bigint: true,
                    fieldName: options.rateLimit?.fields?.lastRequest || "lastRequest"
                }
            }
        }
    };
    const { user, session, account, ...pluginTables } = pluginSchema || {};
    const sessionTable = {
        session: {
            modelName: options.session?.modelName || "session",
            fields: {
                expiresAt: {
                    type: "date",
                    required: true,
                    fieldName: options.session?.fields?.expiresAt || "expiresAt"
                },
                token: {
                    type: "string",
                    required: true,
                    fieldName: options.session?.fields?.token || "token",
                    unique: true
                },
                createdAt: {
                    type: "date",
                    required: true,
                    fieldName: options.session?.fields?.createdAt || "createdAt"
                },
                updatedAt: {
                    type: "date",
                    required: true,
                    fieldName: options.session?.fields?.updatedAt || "updatedAt"
                },
                ipAddress: {
                    type: "string",
                    required: false,
                    fieldName: options.session?.fields?.ipAddress || "ipAddress"
                },
                userAgent: {
                    type: "string",
                    required: false,
                    fieldName: options.session?.fields?.userAgent || "userAgent"
                },
                userId: {
                    type: "string",
                    fieldName: options.session?.fields?.userId || "userId",
                    references: {
                        model: options.user?.modelName || "user",
                        field: "id",
                        onDelete: "cascade"
                    },
                    required: true
                },
                ...session?.fields,
                ...options.session?.additionalFields
            },
            order: 2
        }
    };
    return {
        user: {
            modelName: options.user?.modelName || "user",
            fields: {
                name: {
                    type: "string",
                    required: true,
                    fieldName: options.user?.fields?.name || "name",
                    sortable: true
                },
                email: {
                    type: "string",
                    unique: true,
                    required: true,
                    fieldName: options.user?.fields?.email || "email",
                    sortable: true
                },
                emailVerified: {
                    type: "boolean",
                    defaultValue: ()=>false,
                    required: true,
                    fieldName: options.user?.fields?.emailVerified || "emailVerified"
                },
                image: {
                    type: "string",
                    required: false,
                    fieldName: options.user?.fields?.image || "image"
                },
                createdAt: {
                    type: "date",
                    defaultValue: ()=>/* @__PURE__ */ new Date(),
                    required: true,
                    fieldName: options.user?.fields?.createdAt || "createdAt"
                },
                updatedAt: {
                    type: "date",
                    defaultValue: ()=>/* @__PURE__ */ new Date(),
                    required: true,
                    fieldName: options.user?.fields?.updatedAt || "updatedAt"
                },
                ...user?.fields,
                ...options.user?.additionalFields
            },
            order: 1
        },
        //only add session table if it's not stored in secondary storage
        ...!options.secondaryStorage || options.session?.storeSessionInDatabase ? sessionTable : {},
        account: {
            modelName: options.account?.modelName || "account",
            fields: {
                accountId: {
                    type: "string",
                    required: true,
                    fieldName: options.account?.fields?.accountId || "accountId"
                },
                providerId: {
                    type: "string",
                    required: true,
                    fieldName: options.account?.fields?.providerId || "providerId"
                },
                userId: {
                    type: "string",
                    references: {
                        model: options.user?.modelName || "user",
                        field: "id",
                        onDelete: "cascade"
                    },
                    required: true,
                    fieldName: options.account?.fields?.userId || "userId"
                },
                accessToken: {
                    type: "string",
                    required: false,
                    fieldName: options.account?.fields?.accessToken || "accessToken"
                },
                refreshToken: {
                    type: "string",
                    required: false,
                    fieldName: options.account?.fields?.refreshToken || "refreshToken"
                },
                idToken: {
                    type: "string",
                    required: false,
                    fieldName: options.account?.fields?.idToken || "idToken"
                },
                accessTokenExpiresAt: {
                    type: "date",
                    required: false,
                    fieldName: options.account?.fields?.accessTokenExpiresAt || "accessTokenExpiresAt"
                },
                refreshTokenExpiresAt: {
                    type: "date",
                    required: false,
                    fieldName: options.account?.fields?.accessTokenExpiresAt || "refreshTokenExpiresAt"
                },
                scope: {
                    type: "string",
                    required: false,
                    fieldName: options.account?.fields?.scope || "scope"
                },
                password: {
                    type: "string",
                    required: false,
                    fieldName: options.account?.fields?.password || "password"
                },
                createdAt: {
                    type: "date",
                    required: true,
                    fieldName: options.account?.fields?.createdAt || "createdAt"
                },
                updatedAt: {
                    type: "date",
                    required: true,
                    fieldName: options.account?.fields?.updatedAt || "updatedAt"
                },
                ...account?.fields
            },
            order: 3
        },
        verification: {
            modelName: options.verification?.modelName || "verification",
            fields: {
                identifier: {
                    type: "string",
                    required: true,
                    fieldName: options.verification?.fields?.identifier || "identifier"
                },
                value: {
                    type: "string",
                    required: true,
                    fieldName: options.verification?.fields?.value || "value"
                },
                expiresAt: {
                    type: "date",
                    required: true,
                    fieldName: options.verification?.fields?.expiresAt || "expiresAt"
                },
                createdAt: {
                    type: "date",
                    required: false,
                    defaultValue: ()=>/* @__PURE__ */ new Date(),
                    fieldName: options.verification?.fields?.createdAt || "createdAt"
                },
                updatedAt: {
                    type: "date",
                    required: false,
                    defaultValue: ()=>/* @__PURE__ */ new Date(),
                    fieldName: options.verification?.fields?.updatedAt || "updatedAt"
                }
            },
            order: 4
        },
        ...pluginTables,
        ...shouldAddRateLimitTable ? rateLimitTable : {}
    };
};
function toZodSchema(fields) {
    const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        ...Object.keys(fields).reduce((acc, key)=>{
            const field = fields[key];
            if (!field) {
                return acc;
            }
            if (field.type === "string[]" || field.type === "number[]") {
                return {
                    ...acc,
                    [key]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(field.type === "string[]" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number())
                };
            }
            if (Array.isArray(field.type)) {
                return {
                    ...acc,
                    [key]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any()
                };
            }
            let schema2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"][field.type]();
            if (field?.required === false) {
                schema2 = schema2.optional();
            }
            if (field?.returned === false) {
                return acc;
            }
            return {
                ...acc,
                [key]: schema2
            };
        }, {})
    });
    return schema;
}
// src/adapters/utils.ts
function withApplyDefault(value, field, action) {
    if (action === "update") {
        return value;
    }
    if (value === void 0 || value === null) {
        if (field.defaultValue) {
            if (typeof field.defaultValue === "function") {
                return field.defaultValue();
            }
            return field.defaultValue;
        }
    }
    return value;
}
// src/adapters/memory-adapter/memory-adapter.ts
var createTransform = (options)=>{
    const schema = getAuthTables(options);
    function getField(model, field) {
        if (field === "id") {
            return field;
        }
        const f = schema[model].fields[field];
        return f.fieldName || field;
    }
    return {
        transformInput (data, model, action) {
            const transformedData = action === "update" ? {} : {
                id: options.advanced?.generateId ? options.advanced.generateId({
                    model
                }) : data.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])()
            };
            const fields = schema[model].fields;
            for(const field in fields){
                const value = data[field];
                if (value === void 0 && !fields[field].defaultValue) {
                    continue;
                }
                transformedData[fields[field].fieldName || field] = withApplyDefault(value, fields[field], action);
            }
            return transformedData;
        },
        transformOutput (data, model, select = []) {
            if (!data) return null;
            const transformedData = data.id || data._id ? select.length === 0 || select.includes("id") ? {
                id: data.id
            } : {} : {};
            const tableSchema = schema[model].fields;
            for(const key in tableSchema){
                if (select.length && !select.includes(key)) {
                    continue;
                }
                const field = tableSchema[key];
                if (field) {
                    transformedData[key] = data[field.fieldName || key];
                }
            }
            return transformedData;
        },
        convertWhereClause (where, table, model) {
            return table.filter((record)=>{
                return where.every((clause)=>{
                    const { field: _field, value, operator } = clause;
                    const field = getField(model, _field);
                    if (operator === "in") {
                        if (!Array.isArray(value)) {
                            throw new Error("Value must be an array");
                        }
                        return value.includes(record[field]);
                    } else if (operator === "contains") {
                        return record[field].includes(value);
                    } else if (operator === "starts_with") {
                        return record[field].startsWith(value);
                    } else if (operator === "ends_with") {
                        return record[field].endsWith(value);
                    } else {
                        return record[field] === value;
                    }
                });
            });
        },
        getField
    };
};
var memoryAdapter = (db)=>(options)=>{
        const { transformInput, transformOutput, convertWhereClause, getField } = createTransform(options);
        return {
            id: "memory",
            create: async ({ model, data })=>{
                const transformed = transformInput(data, model, "create");
                db[model].push(transformed);
                return transformOutput(transformed, model);
            },
            findOne: async ({ model, where, select })=>{
                const table = db[model];
                const res = convertWhereClause(where, table, model);
                const record = res[0] || null;
                return transformOutput(record, model, select);
            },
            findMany: async ({ model, where, sortBy, limit, offset })=>{
                let table = db[model];
                if (where) {
                    table = convertWhereClause(where, table, model);
                }
                if (sortBy) {
                    table = table.sort((a, b)=>{
                        const field = getField(model, sortBy.field);
                        if (sortBy.direction === "asc") {
                            return a[field] > b[field] ? 1 : -1;
                        } else {
                            return a[field] < b[field] ? 1 : -1;
                        }
                    });
                }
                if (offset !== void 0) {
                    table = table.slice(offset);
                }
                if (limit !== void 0) {
                    table = table.slice(0, limit);
                }
                return table.map((record)=>transformOutput(record, model));
            },
            update: async ({ model, where, update })=>{
                const table = db[model];
                const res = convertWhereClause(where, table, model);
                res.forEach((record)=>{
                    Object.assign(record, transformInput(update, model, "update"));
                });
                return transformOutput(res[0], model);
            },
            delete: async ({ model, where })=>{
                const table = db[model];
                const res = convertWhereClause(where, table, model);
                db[model] = table.filter((record)=>!res.includes(record));
            },
            deleteMany: async ({ model, where })=>{
                const table = db[model];
                const res = convertWhereClause(where, table, model);
                let count = 0;
                db[model] = table.filter((record)=>{
                    if (res.includes(record)) {
                        count++;
                        return false;
                    }
                    return !res.includes(record);
                });
                return count;
            },
            updateMany (data) {
                const { model, where, update } = data;
                const table = db[model];
                const res = convertWhereClause(where, table, model);
                res.forEach((record)=>{
                    Object.assign(record, update);
                });
                return res[0] || null;
            }
        };
    };
// src/db/utils.ts
async function getAdapter(options) {
    if (!options.database) {
        const tables = getAuthTables(options);
        const memoryDB = Object.keys(tables).reduce((acc, key)=>{
            acc[key] = [];
            return acc;
        }, {});
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warn("No database configuration provided. Using memory adapter in development");
        return memoryAdapter(memoryDB)(options);
    }
    if (typeof options.database === "function") {
        return options.database(options);
    }
    const { kysely, databaseType } = await createKyselyAdapter(options);
    if (!kysely) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"]("Failed to initialize database adapter");
    }
    return kyselyAdapter(kysely, {
        type: databaseType || "sqlite"
    })(options);
}
function convertToDB(fields, values) {
    let result = values.id ? {
        id: values.id
    } : {};
    for(const key in fields){
        const field = fields[key];
        const value = values[key];
        if (value === void 0) {
            continue;
        }
        result[field.fieldName || key] = value;
    }
    return result;
}
function convertFromDB(fields, values) {
    if (!values) {
        return null;
    }
    let result = {
        id: values.id
    };
    for (const [key, value] of Object.entries(fields)){
        result[key] = values[value.fieldName || key];
    }
    return result;
}
// src/db/get-schema.ts
function getSchema(config) {
    const tables = getAuthTables(config);
    let schema = {};
    for(const key in tables){
        const table = tables[key];
        const fields = table.fields;
        let actualFields = {};
        Object.entries(fields).forEach(([key2, field])=>{
            actualFields[field.fieldName || key2] = field;
            if (field.references) {
                const refTable = tables[field.references.model];
                if (refTable) {
                    actualFields[field.fieldName || key2].references = {
                        model: refTable.modelName,
                        field: field.references.field
                    };
                }
            }
        });
        if (schema[table.modelName]) {
            schema[table.modelName].fields = {
                ...schema[table.modelName].fields,
                ...actualFields
            };
            continue;
        }
        schema[table.modelName] = {
            fields: actualFields,
            order: table.order || Infinity
        };
    }
    return schema;
}
// src/db/get-migration.ts
var postgresMap = {
    string: [
        "character varying",
        "text"
    ],
    number: [
        "int4",
        "integer",
        "bigint",
        "smallint",
        "numeric",
        "real",
        "double precision"
    ],
    boolean: [
        "bool",
        "boolean"
    ],
    date: [
        "timestamp",
        "date"
    ]
};
var mysqlMap = {
    string: [
        "varchar",
        "text"
    ],
    number: [
        "integer",
        "int",
        "bigint",
        "smallint",
        "decimal",
        "float",
        "double"
    ],
    boolean: [
        "boolean",
        "tinyint"
    ],
    date: [
        "timestamp",
        "datetime",
        "date"
    ]
};
var sqliteMap = {
    string: [
        "TEXT"
    ],
    number: [
        "INTEGER",
        "REAL"
    ],
    boolean: [
        "INTEGER",
        "BOOLEAN"
    ],
    // 0 or 1
    date: [
        "DATE",
        "INTEGER"
    ]
};
var mssqlMap = {
    string: [
        "text",
        "varchar"
    ],
    number: [
        "int",
        "bigint",
        "smallint",
        "decimal",
        "float",
        "double"
    ],
    boolean: [
        "bit",
        "smallint"
    ],
    date: [
        "datetime",
        "date"
    ]
};
var map = {
    postgres: postgresMap,
    mysql: mysqlMap,
    sqlite: sqliteMap,
    mssql: mssqlMap
};
function matchType(columnDataType, fieldType, dbType) {
    if (fieldType === "string[]" || fieldType === "number[]") {
        return columnDataType.toLowerCase().includes("json");
    }
    const types = map[dbType];
    const type = Array.isArray(fieldType) ? types["string"].map((t)=>t.toLowerCase()) : types[fieldType].map((t)=>t.toLowerCase());
    const matches = type.includes(columnDataType.toLowerCase());
    return matches;
}
async function getMigrations(config) {
    const betterAuthSchema = getSchema(config);
    const logger2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])(config.logger);
    let { kysely: db, databaseType: dbType } = await createKyselyAdapter(config);
    if (!dbType) {
        logger2.warn("Could not determine database type, defaulting to sqlite. Please provide a type in the database options to avoid this.");
        dbType = "sqlite";
    }
    if (!db) {
        logger2.error("Only kysely adapter is supported for migrations. You can use `generate` command to generate the schema, if you're using a different adapter.");
        process.exit(1);
    }
    const tableMetadata = await db.introspection.getTables();
    const toBeCreated = [];
    const toBeAdded = [];
    for (const [key, value] of Object.entries(betterAuthSchema)){
        const table = tableMetadata.find((t)=>t.name === key);
        if (!table) {
            const tIndex = toBeCreated.findIndex((t)=>t.table === key);
            const tableData = {
                table: key,
                fields: value.fields,
                order: value.order || Infinity
            };
            const insertIndex = toBeCreated.findIndex((t)=>(t.order || Infinity) > tableData.order);
            if (insertIndex === -1) {
                if (tIndex === -1) {
                    toBeCreated.push(tableData);
                } else {
                    toBeCreated[tIndex].fields = {
                        ...toBeCreated[tIndex].fields,
                        ...value.fields
                    };
                }
            } else {
                toBeCreated.splice(insertIndex, 0, tableData);
            }
            continue;
        }
        let toBeAddedFields = {};
        for (const [fieldName, field] of Object.entries(value.fields)){
            const column = table.columns.find((c)=>c.name === fieldName);
            if (!column) {
                toBeAddedFields[fieldName] = field;
                continue;
            }
            if (matchType(column.dataType, field.type, dbType)) {
                continue;
            } else {
                logger2.warn(`Field ${fieldName} in table ${key} has a different type in the database. Expected ${field.type} but got ${column.dataType}.`);
            }
        }
        if (Object.keys(toBeAddedFields).length > 0) {
            toBeAdded.push({
                table: key,
                fields: toBeAddedFields,
                order: value.order || Infinity
            });
        }
    }
    const migrations = [];
    function getType(field) {
        const type = field.type;
        const typeMap = {
            string: {
                sqlite: "text",
                postgres: "text",
                mysql: field.unique ? "varchar(255)" : field.references ? "varchar(36)" : "text",
                mssql: field.unique || field.sortable ? "varchar(255)" : field.references ? "varchar(36)" : "text"
            },
            boolean: {
                sqlite: "integer",
                postgres: "boolean",
                mysql: "boolean",
                mssql: "smallint"
            },
            number: {
                sqlite: field.bigint ? "bigint" : "integer",
                postgres: field.bigint ? "bigint" : "integer",
                mysql: field.bigint ? "bigint" : "integer",
                mssql: field.bigint ? "bigint" : "integer"
            },
            date: {
                sqlite: "date",
                postgres: "timestamp",
                mysql: "datetime",
                mssql: "datetime"
            }
        };
        if (dbType === "sqlite" && (type === "string[]" || type === "number[]")) {
            return "text";
        }
        if (type === "string[]" || type === "number[]") {
            return "jsonb";
        }
        if (Array.isArray(type)) {
            return "text";
        }
        return typeMap[type][dbType || "sqlite"];
    }
    if (toBeAdded.length) {
        for (const table of toBeAdded){
            for (const [fieldName, field] of Object.entries(table.fields)){
                const type = getType(field);
                const exec = db.schema.alterTable(table.table).addColumn(fieldName, type, (col)=>{
                    col = field.required !== false ? col.notNull() : col;
                    if (field.references) {
                        col = col.references(`${field.references.model}.${field.references.field}`);
                    }
                    if (field.unique) {
                        col = col.unique();
                    }
                    return col;
                });
                migrations.push(exec);
            }
        }
    }
    if (toBeCreated.length) {
        for (const table of toBeCreated){
            let dbT = db.schema.createTable(table.table).addColumn("id", dbType === "mysql" || dbType === "mssql" ? "varchar(36)" : "text", (col)=>col.primaryKey().notNull());
            for (const [fieldName, field] of Object.entries(table.fields)){
                const type = getType(field);
                dbT = dbT.addColumn(fieldName, type, (col)=>{
                    col = field.required !== false ? col.notNull() : col;
                    if (field.references) {
                        col = col.references(`${field.references.model}.${field.references.field}`);
                    }
                    if (field.unique) {
                        col = col.unique();
                    }
                    return col;
                });
            }
            migrations.push(dbT);
        }
    }
    async function runMigrations() {
        for (const migration of migrations){
            await migration.execute();
        }
    }
    async function compileMigrations() {
        const compiled = migrations.map((m)=>m.compile().sql);
        return compiled.join(";\n\n");
    }
    return {
        toBeCreated,
        toBeAdded,
        runMigrations,
        compileMigrations
    };
}
// src/adapters/kysely-adapter/kysely-adapter.ts
var createTransform2 = (db, options, config)=>{
    const schema = getAuthTables(options);
    function getField(model, field) {
        if (field === "id") {
            return field;
        }
        const f = schema[model].fields[field];
        if (!f) {
            console.log("Field not found", model, field);
        }
        return f.fieldName || field;
    }
    function transformValueToDB(value, model, field) {
        const { type = "sqlite" } = config || {};
        const f = schema[model].fields[field];
        if (f.type === "boolean" && (type === "sqlite" || type === "mssql") && value !== null && value !== void 0) {
            return value ? 1 : 0;
        }
        if (f.type === "date" && value && value instanceof Date) {
            return type === "sqlite" ? value.toISOString() : value;
        }
        return value;
    }
    function transformValueFromDB(value, model, field) {
        const { type = "sqlite" } = config || {};
        const f = schema[model].fields[field];
        if (f.type === "boolean" && (type === "sqlite" || type === "mssql") && value !== null) {
            return value === 1;
        }
        if (f.type === "date" && value) {
            return new Date(value);
        }
        return value;
    }
    function getModelName(model) {
        return schema[model].modelName;
    }
    const useDatabaseGeneratedId = options?.advanced?.generateId === false;
    return {
        transformInput (data, model, action) {
            const transformedData = useDatabaseGeneratedId || action === "update" ? {} : {
                id: options.advanced?.generateId ? options.advanced.generateId({
                    model
                }) : data.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])()
            };
            const fields = schema[model].fields;
            for(const field in fields){
                const value = data[field];
                transformedData[fields[field].fieldName || field] = withApplyDefault(transformValueToDB(value, model, field), fields[field], action);
            }
            return transformedData;
        },
        transformOutput (data, model, select = []) {
            if (!data) return null;
            const transformedData = data.id ? select.length === 0 || select.includes("id") ? {
                id: data.id
            } : {} : {};
            const tableSchema = schema[model].fields;
            for(const key in tableSchema){
                if (select.length && !select.includes(key)) {
                    continue;
                }
                const field = tableSchema[key];
                if (field) {
                    transformedData[key] = transformValueFromDB(data[field.fieldName || key], model, key);
                }
            }
            return transformedData;
        },
        convertWhereClause (model, w) {
            if (!w) return {
                and: null,
                or: null
            };
            const conditions = {
                and: [],
                or: []
            };
            w.forEach((condition)=>{
                const { field: _field, value, operator = "=", connector = "AND" } = condition;
                const field = getField(model, _field);
                const expr = (eb)=>{
                    if (operator.toLowerCase() === "in") {
                        return eb(field, "in", Array.isArray(value) ? value : [
                            value
                        ]);
                    }
                    if (operator === "contains") {
                        return eb(field, "like", `%${value}%`);
                    }
                    if (operator === "starts_with") {
                        return eb(field, "like", `${value}%`);
                    }
                    if (operator === "ends_with") {
                        return eb(field, "like", `%${value}`);
                    }
                    if (operator === "eq") {
                        return eb(field, "=", value);
                    }
                    if (operator === "ne") {
                        return eb(field, "<>", value);
                    }
                    if (operator === "gt") {
                        return eb(field, ">", value);
                    }
                    if (operator === "gte") {
                        return eb(field, ">=", value);
                    }
                    if (operator === "lt") {
                        return eb(field, "<", value);
                    }
                    if (operator === "lte") {
                        return eb(field, "<=", value);
                    }
                    return eb(field, operator, value);
                };
                if (connector === "OR") {
                    conditions.or.push(expr);
                } else {
                    conditions.and.push(expr);
                }
            });
            return {
                and: conditions.and.length ? conditions.and : null,
                or: conditions.or.length ? conditions.or : null
            };
        },
        async withReturning (values, builder, model, where) {
            let res;
            if (config?.type === "mysql") {
                await builder.execute();
                const field = values.id ? "id" : where[0].field ? where[0].field : "id";
                const value = values[field] || where[0].value;
                res = await db.selectFrom(getModelName(model)).selectAll().where(getField(model, field), "=", value).executeTakeFirst();
                return res;
            }
            if (config?.type === "mssql") {
                res = await builder.outputAll("inserted").executeTakeFirst();
                return res;
            }
            res = await builder.returningAll().executeTakeFirst();
            return res;
        },
        getModelName,
        getField
    };
};
var kyselyAdapter = (db, config)=>(opts)=>{
        const { transformInput, withReturning, transformOutput, convertWhereClause, getModelName, getField } = createTransform2(db, opts, config);
        return {
            id: "kysely",
            async create (data) {
                const { model, data: values, select } = data;
                const transformed = transformInput(values, model, "create");
                const builder = db.insertInto(getModelName(model)).values(transformed);
                return transformOutput(await withReturning(transformed, builder, model, []), model, select);
            },
            async findOne (data) {
                const { model, where, select } = data;
                const { and, or } = convertWhereClause(model, where);
                let query = db.selectFrom(getModelName(model)).selectAll();
                if (and) {
                    query = query.where((eb)=>eb.and(and.map((expr)=>expr(eb))));
                }
                if (or) {
                    query = query.where((eb)=>eb.or(or.map((expr)=>expr(eb))));
                }
                const res = await query.executeTakeFirst();
                if (!res) return null;
                return transformOutput(res, model, select);
            },
            async findMany (data) {
                const { model, where, limit, offset, sortBy } = data;
                const { and, or } = convertWhereClause(model, where);
                let query = db.selectFrom(getModelName(model));
                if (and) {
                    query = query.where((eb)=>eb.and(and.map((expr)=>expr(eb))));
                }
                if (or) {
                    query = query.where((eb)=>eb.or(or.map((expr)=>expr(eb))));
                }
                if (config?.type === "mssql") {
                    if (!offset) {
                        query = query.top(limit || 100);
                    }
                } else {
                    query = query.limit(limit || 100);
                }
                if (sortBy) {
                    query = query.orderBy(getField(model, sortBy.field), sortBy.direction);
                }
                if (offset) {
                    if (config?.type === "mssql") {
                        if (!sortBy) {
                            query = query.orderBy(getField(model, "id"));
                        }
                        query = query.offset(offset).fetch(limit || 100);
                    } else {
                        query = query.offset(offset);
                    }
                }
                const res = await query.selectAll().execute();
                if (!res) return [];
                return res.map((r)=>transformOutput(r, model));
            },
            async update (data) {
                const { model, where, update: values } = data;
                const { and, or } = convertWhereClause(model, where);
                const transformedData = transformInput(values, model, "update");
                let query = db.updateTable(getModelName(model)).set(transformedData);
                if (and) {
                    query = query.where((eb)=>eb.and(and.map((expr)=>expr(eb))));
                }
                if (or) {
                    query = query.where((eb)=>eb.or(or.map((expr)=>expr(eb))));
                }
                const res = await transformOutput(await withReturning(transformedData, query, model, where), model);
                return res;
            },
            async updateMany (data) {
                const { model, where, update: values } = data;
                const { and, or } = convertWhereClause(model, where);
                const transformedData = transformInput(values, model, "update");
                let query = db.updateTable(getModelName(model)).set(transformedData);
                if (and) {
                    query = query.where((eb)=>eb.and(and.map((expr)=>expr(eb))));
                }
                if (or) {
                    query = query.where((eb)=>eb.or(or.map((expr)=>expr(eb))));
                }
                const res = await query.execute();
                return res.length;
            },
            async delete (data) {
                const { model, where } = data;
                const { and, or } = convertWhereClause(model, where);
                let query = db.deleteFrom(getModelName(model));
                if (and) {
                    query = query.where((eb)=>eb.and(and.map((expr)=>expr(eb))));
                }
                if (or) {
                    query = query.where((eb)=>eb.or(or.map((expr)=>expr(eb))));
                }
                await query.execute();
            },
            async deleteMany (data) {
                const { model, where } = data;
                const { and, or } = convertWhereClause(model, where);
                let query = db.deleteFrom(getModelName(model));
                if (and) {
                    query = query.where((eb)=>eb.and(and.map((expr)=>expr(eb))));
                }
                if (or) {
                    query = query.where((eb)=>eb.or(or.map((expr)=>expr(eb))));
                }
                return (await query.execute()).length;
            },
            options: config
        };
    };
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-SK6Y2YH6.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-3XTQSPPA.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/utils/misc.ts
__turbopack_esm__({
    "capitalizeFirstLetter": (()=>capitalizeFirstLetter)
});
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "betterAuth": (()=>betterAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$Y4MIQB37$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-Y4MIQB37.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-XFCIANZX.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$MGJLVQOV$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-MGJLVQOV.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-KLDFBLYL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TQQSPPNA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-QQGZ3XGI.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$VXDYNCOX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-VXDYNCOX.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-DBPOZRMS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TOKZL3ZI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TOKZL3ZI.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs [app-route] (ecmascript)");
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
// src/utils/constants.ts
var DEFAULT_SECRET = "better-auth-secret-123456789";
// src/init.ts
var init = async (options)=>{
    const adapter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$MGJLVQOV$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAdapter"])(options);
    const plugins = options.plugins || [];
    const internalPlugins = getInternalPlugins(options);
    const logger2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])(options.logger);
    const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseURL"])(options.baseURL, options.basePath);
    const secret = options.secret || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].BETTER_AUTH_SECRET || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].AUTH_SECRET || DEFAULT_SECRET;
    if (secret === DEFAULT_SECRET) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProduction"]) {
            logger2.error("You are using the default secret. Please set `BETTER_AUTH_SECRET` in your environment variables or pass `secret` in your auth config.");
        }
    }
    options = {
        ...options,
        secret,
        baseURL: baseURL ? new URL(baseURL).origin : "",
        basePath: options.basePath || "/api/auth",
        plugins: plugins.concat(internalPlugins)
    };
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCookies"])(options);
    const tables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$MGJLVQOV$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthTables"])(options);
    const providers = Object.keys(options.socialProviders || {}).map((key)=>{
        const value = options.socialProviders?.[key];
        if (!value || value.enabled === false) {
            return null;
        }
        if (!value.clientId) {
            logger2.warn(`Social provider ${key} is missing clientId or clientSecret`);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$VXDYNCOX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["socialProviders"][key](value);
    }).filter((x)=>x !== null);
    const generateIdFunc = ({ model, size })=>{
        if (typeof options?.advanced?.generateId === "function") {
            return options.advanced.generateId({
                model,
                size
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])(size);
    };
    const ctx = {
        appName: options.appName || "Better Auth",
        socialProviders: providers,
        options,
        tables,
        trustedOrigins: getTrustedOrigins(options),
        baseURL: baseURL || "",
        sessionConfig: {
            updateAge: options.session?.updateAge !== void 0 ? options.session.updateAge : 24 * 60 * 60,
            // 24 hours
            expiresIn: options.session?.expiresIn || 60 * 60 * 24 * 7,
            // 7 days
            freshAge: options.session?.freshAge === void 0 ? 60 * 60 * 24 : options.session.freshAge
        },
        secret,
        rateLimit: {
            ...options.rateLimit,
            enabled: options.rateLimit?.enabled ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProduction"],
            window: options.rateLimit?.window || 10,
            max: options.rateLimit?.max || 100,
            storage: options.rateLimit?.storage || (options.secondaryStorage ? "secondary-storage" : "memory")
        },
        authCookies: cookies,
        logger: logger2,
        generateId: generateIdFunc,
        session: null,
        secondaryStorage: options.secondaryStorage,
        password: {
            hash: options.emailAndPassword?.password?.hash || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"],
            verify: options.emailAndPassword?.password?.verify || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPassword"],
            config: {
                minPasswordLength: options.emailAndPassword?.minPasswordLength || 8,
                maxPasswordLength: options.emailAndPassword?.maxPasswordLength || 128
            },
            checkPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TOKZL3ZI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkPassword"]
        },
        setNewSession (session) {
            this.newSession = session;
        },
        newSession: null,
        adapter,
        internalAdapter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$MGJLVQOV$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInternalAdapter"])(adapter, {
            options,
            hooks: options.databaseHooks ? [
                options.databaseHooks
            ] : [],
            generateId: generateIdFunc
        }),
        createAuthCookie: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCookieGetter"])(options)
    };
    let { context } = runPluginInit(ctx);
    return context;
};
function runPluginInit(ctx) {
    let options = ctx.options;
    const plugins = options.plugins || [];
    let context = ctx;
    const dbHooks = [];
    for (const plugin of plugins){
        if (plugin.init) {
            const result = plugin.init(ctx);
            if (typeof result === "object") {
                if (result.options) {
                    const { databaseHooks, ...restOpts } = result.options;
                    if (databaseHooks) {
                        dbHooks.push(databaseHooks);
                    }
                    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defu"])(options, restOpts);
                }
                if (result.context) {
                    context = {
                        ...context,
                        ...result.context
                    };
                }
            }
        }
    }
    dbHooks.push(options.databaseHooks);
    context.internalAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$MGJLVQOV$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInternalAdapter"])(ctx.adapter, {
        options,
        hooks: dbHooks.filter((u)=>u !== void 0),
        generateId: ctx.generateId
    });
    context.options = options;
    return {
        context
    };
}
function getInternalPlugins(options) {
    const plugins = [];
    if (options.advanced?.crossSubDomainCookies?.enabled) ;
    return plugins;
}
function getTrustedOrigins(options) {
    const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseURL"])(options.baseURL, options.basePath);
    if (!baseURL) {
        return [];
    }
    const trustedOrigins = [
        new URL(baseURL).origin
    ];
    if (options.trustedOrigins) {
        trustedOrigins.push(...options.trustedOrigins);
    }
    const envTrustedOrigins = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].BETTER_AUTH_TRUSTED_ORIGINS;
    if (envTrustedOrigins) {
        trustedOrigins.push(...envTrustedOrigins.split(","));
    }
    return trustedOrigins;
}
// src/auth.ts
var betterAuth = (options)=>{
    const authContext = init(options);
    const { api } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$Y4MIQB37$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEndpoints"])(authContext, options);
    const errorCodes = options.plugins?.reduce((acc, plugin)=>{
        if (plugin.$ERROR_CODES) {
            return {
                ...acc,
                ...plugin.$ERROR_CODES
            };
        }
        return acc;
    }, {});
    return {
        handler: async (request)=>{
            const ctx = await authContext;
            const basePath = ctx.options.basePath || "/api/auth";
            const url = new URL(request.url);
            if (!ctx.options.baseURL) {
                const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseURL"])(void 0, basePath) || `${url.origin}${basePath}`;
                ctx.options.baseURL = baseURL;
                ctx.baseURL = baseURL;
            }
            ctx.trustedOrigins = [
                ...options.trustedOrigins || [],
                ctx.baseURL,
                url.origin
            ];
            const { handler } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$Y4MIQB37$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["router"])(ctx, options);
            return handler(request);
        },
        api,
        options,
        $context: authContext,
        $Infer: {},
        $ERROR_CODES: {
            ...errorCodes,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$Y4MIQB37$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BASE_ERROR_CODES"]
        }
    };
};
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/index.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TOKZL3ZI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TOKZL3ZI.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$Y4MIQB37$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-Y4MIQB37.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$VXDYNCOX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-VXDYNCOX.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$GTQM7JU7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-GTQM7JU7.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$XFCIANZX$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-XFCIANZX.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-QQGZ3XGI.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$MGJLVQOV$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-MGJLVQOV.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-HZBNUY7E.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-KLDFBLYL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$NPO64SVN$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-NPO64SVN.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$SK6Y2YH6$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-SK6Y2YH6.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$3XTQSPPA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-3XTQSPPA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-DBPOZRMS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-53IPO2PJ.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-FURNA6HY.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TQQSPPNA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-UNWCXKMP.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/adapters/drizzle.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "drizzleAdapter": (()=>drizzleAdapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$MGJLVQOV$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-MGJLVQOV.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$HZBNUY7E$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-HZBNUY7E.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-KLDFBLYL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$NPO64SVN$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-NPO64SVN.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$SK6Y2YH6$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-SK6Y2YH6.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$3XTQSPPA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-3XTQSPPA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$DBPOZRMS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-DBPOZRMS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-53IPO2PJ.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-FURNA6HY.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TQQSPPNA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-UNWCXKMP.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+pg@8.11.11_@types+react@18.3.18_pg@8.13.2_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/expressions/select.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+pg@8.11.11_@types+react@18.3.18_pg@8.13.2_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
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
var createTransform = (db, config, options)=>{
    const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$MGJLVQOV$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthTables"])(options);
    function getField(model, field) {
        if (field === "id") {
            return field;
        }
        const f = schema[model].fields[field];
        return f.fieldName || field;
    }
    function getSchema(modelName) {
        const schema2 = config.schema || db._.fullSchema;
        if (!schema2) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"]("Drizzle adapter failed to initialize. Schema not found. Please provide a schema object in the adapter options object.");
        }
        const model = getModelName(modelName);
        const schemaModel = schema2[model];
        if (!schemaModel) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`[# Drizzle Adapter]: The model "${model}" was not found in the schema object. Please pass the schema directly to the adapter options.`);
        }
        return schemaModel;
    }
    const getModelName = (model)=>{
        return schema[model].modelName !== model ? schema[model].modelName : config.usePlural ? `${model}s` : model;
    };
    function convertWhereClause(where, model) {
        const schemaModel = getSchema(model);
        if (!where) return [];
        if (where.length === 1) {
            const w = where[0];
            if (!w) {
                return [];
            }
            const field = getField(model, w.field);
            if (!schemaModel[field]) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`The field "${w.field}" does not exist in the schema for the model "${model}". Please update your schema.`);
            }
            if (w.operator === "in") {
                if (!Array.isArray(w.value)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`The value for the field "${w.field}" must be an array when using the "in" operator.`);
                }
                return [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"])(schemaModel[field], w.value)
                ];
            }
            if (w.operator === "contains") {
                return [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["like"])(schemaModel[field], `%${w.value}%`)
                ];
            }
            if (w.operator === "starts_with") {
                return [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["like"])(schemaModel[field], `${w.value}%`)
                ];
            }
            if (w.operator === "ends_with") {
                return [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["like"])(schemaModel[field], `%${w.value}`)
                ];
            }
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(schemaModel[field], w.value)
            ];
        }
        const andGroup = where.filter((w)=>w.connector === "AND" || !w.connector);
        const orGroup = where.filter((w)=>w.connector === "OR");
        const andClause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])(...andGroup.map((w)=>{
            const field = getField(model, w.field);
            if (w.operator === "in") {
                if (!Array.isArray(w.value)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`The value for the field "${w.field}" must be an array when using the "in" operator.`);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"])(schemaModel[field], w.value);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(schemaModel[field], w.value);
        }));
        const orClause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["or"])(...orGroup.map((w)=>{
            const field = getField(model, w.field);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(schemaModel[field], w.value);
        }));
        const clause = [];
        if (andGroup.length) clause.push(andClause);
        if (orGroup.length) clause.push(orClause);
        return clause;
    }
    const useDatabaseGeneratedId = options?.advanced?.generateId === false;
    return {
        getSchema,
        transformInput (data, model, action) {
            const transformedData = useDatabaseGeneratedId || action === "update" ? {} : {
                id: options.advanced?.generateId ? options.advanced.generateId({
                    model
                }) : data.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$KLDFBLYL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])()
            };
            const fields = schema[model].fields;
            for(const field in fields){
                const value = data[field];
                if (value === void 0 && !fields[field].defaultValue) {
                    continue;
                }
                transformedData[fields[field].fieldName || field] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$MGJLVQOV$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withApplyDefault"])(value, fields[field], action);
            }
            return transformedData;
        },
        transformOutput (data, model, select = []) {
            if (!data) return null;
            const transformedData = data.id || data._id ? select.length === 0 || select.includes("id") ? {
                id: data.id
            } : {} : {};
            const tableSchema = schema[model].fields;
            for(const key in tableSchema){
                if (select.length && !select.includes(key)) {
                    continue;
                }
                const field = tableSchema[key];
                if (field) {
                    transformedData[key] = data[field.fieldName || key];
                }
            }
            return transformedData;
        },
        convertWhereClause,
        withReturning: async (model, builder, data, where)=>{
            if (config.provider !== "mysql") {
                const c = await builder.returning();
                return c[0];
            }
            await builder.execute();
            const schemaModel = getSchema(model);
            const builderVal = builder.config?.values;
            if (where?.length) {
                const clause = convertWhereClause(where, model);
                const res = await db.select().from(schemaModel).where(...clause);
                return res[0];
            } else if (builderVal) {
                const tId = builderVal[0]?.id.value;
                const res = await db.select().from(schemaModel).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(schemaModel.id, tId));
                return res[0];
            } else if (data.id) {
                const res = await db.select().from(schemaModel).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(schemaModel.id, data.id));
                return res[0];
            }
        },
        getField,
        getModelName
    };
};
function checkMissingFields(schema, model, values) {
    if (!schema) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"]("Drizzle adapter failed to initialize. Schema not found. Please provide a schema object in the adapter options object.");
    }
    for(const key in values){
        if (!schema[key]) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`The field "${key}" does not exist in the "${model}" schema. Please update your drizzle schema or re-generate using "npx @better-auth/cli generate".`);
        }
    }
}
var drizzleAdapter = (db, config)=>(options)=>{
        const { transformInput, transformOutput, convertWhereClause, getSchema, withReturning, getField, getModelName } = createTransform(db, config, options);
        return {
            id: "drizzle",
            async create (data) {
                const { model, data: values } = data;
                const transformed = transformInput(values, model, "create");
                const schemaModel = getSchema(model);
                checkMissingFields(schemaModel, getModelName(model), transformed);
                const builder = db.insert(schemaModel).values(transformed);
                const returned = await withReturning(model, builder, transformed);
                return transformOutput(returned, model);
            },
            async findOne (data) {
                const { model, where, select } = data;
                const schemaModel = getSchema(model);
                const clause = convertWhereClause(where, model);
                const res = await db.select().from(schemaModel).where(...clause);
                if (!res.length) return null;
                return transformOutput(res[0], model, select);
            },
            async findMany (data) {
                const { model, where, sortBy, limit, offset } = data;
                const schemaModel = getSchema(model);
                const clause = where ? convertWhereClause(where, model) : [];
                const sortFn = sortBy?.direction === "desc" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$pg$40$8$2e$11$2e$11_$40$types$2b$react$40$18$2e$3$2e$18_pg$40$8$2e$13$2e$2_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["asc"];
                const builder = db.select().from(schemaModel).limit(limit || 100).offset(offset || 0);
                if (sortBy?.field) {
                    builder.orderBy(sortFn(schemaModel[getField(model, sortBy?.field)]));
                }
                const res = await builder.where(...clause);
                return res.map((r)=>transformOutput(r, model));
            },
            async update (data) {
                const { model, where, update: values } = data;
                const schemaModel = getSchema(model);
                const clause = convertWhereClause(where, model);
                const transformed = transformInput(values, model, "update");
                const builder = db.update(schemaModel).set(transformed).where(...clause);
                const returned = await withReturning(model, builder, transformed, where);
                return transformOutput(returned, model);
            },
            async updateMany (data) {
                const { model, where, update: values } = data;
                const schemaModel = getSchema(model);
                const clause = convertWhereClause(where, model);
                const transformed = transformInput(values, model, "update");
                const builder = db.update(schemaModel).set(transformed).where(...clause);
                const res = await builder;
                return res ? res.changes : 0;
            },
            async delete (data) {
                const { model, where } = data;
                const schemaModel = getSchema(model);
                const clause = convertWhereClause(where, model);
                const builder = db.delete(schemaModel).where(...clause);
                await builder;
            },
            async deleteMany (data) {
                const { model, where } = data;
                const schemaModel = getSchema(model);
                const clause = convertWhereClause(where, model);
                const builder = db.delete(schemaModel).where(...clause);
                const res = await builder;
                return res ? res.length : 0;
            },
            options: config
        };
    };
;
}}),
"[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/next-js.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "nextCookies": (()=>nextCookies),
    "toNextJsHandler": (()=>toNextJsHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-QQGZ3XGI.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$53IPO2PJ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-53IPO2PJ.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$FURNA6HY$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-FURNA6HY.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$TQQSPPNA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-TQQSPPNA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$UNWCXKMP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/better-auth@1.1.17/node_modules/better-auth/dist/chunk-UNWCXKMP.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
;
;
;
;
function toNextJsHandler(auth) {
    const handler = async (request)=>{
        return "handler" in auth ? auth.handler(request) : auth(request);
    };
    return {
        GET: handler,
        POST: handler
    };
}
var nextCookies = ()=>{
    return {
        id: "next-cookies",
        hooks: {
            after: [
                {
                    matcher (ctx) {
                        return true;
                    },
                    handler: async (ctx)=>{
                        const returned = ctx.responseHeader;
                        if ("_flag" in ctx && ctx._flag === "router") {
                            return;
                        }
                        if (returned instanceof Headers) {
                            const setCookies = returned?.get("set-cookie");
                            if (!setCookies) return;
                            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$1$2e$17$2f$node_modules$2f$better$2d$auth$2f$dist$2f$chunk$2d$QQGZ3XGI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSetCookieHeader"])(setCookies);
                            const cookieHelper = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
                            parsed.forEach((value, key)=>{
                                if (!key) return;
                                const opts = {
                                    sameSite: value.samesite,
                                    secure: value.secure,
                                    maxAge: value["max-age"],
                                    httpOnly: value.httponly,
                                    domain: value.domain,
                                    path: value.path
                                };
                                try {
                                    cookieHelper.set(key, decodeURIComponent(value.value), opts);
                                } catch (e) {}
                            });
                            return;
                        }
                    }
                }
            ]
        }
    };
};
;
}}),

};

//# sourceMappingURL=a371a_better-auth_dist_c0744d._.js.map