(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/0e401_@mapbox_node-pre-gyp_c6f5d9._.js", {

"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/package.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"name\":\"@mapbox/node-pre-gyp\",\"description\":\"Node.js native addon binary install tool\",\"version\":\"1.0.11\",\"keywords\":[\"native\",\"addon\",\"module\",\"c\",\"c++\",\"bindings\",\"binary\"],\"license\":\"BSD-3-Clause\",\"author\":\"Dane Springmeyer <dane@mapbox.com>\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/mapbox/node-pre-gyp.git\"},\"bin\":\"./bin/node-pre-gyp\",\"main\":\"./lib/node-pre-gyp.js\",\"dependencies\":{\"detect-libc\":\"^2.0.0\",\"https-proxy-agent\":\"^5.0.0\",\"make-dir\":\"^3.1.0\",\"node-fetch\":\"^2.6.7\",\"nopt\":\"^5.0.0\",\"npmlog\":\"^5.0.1\",\"rimraf\":\"^3.0.2\",\"semver\":\"^7.3.5\",\"tar\":\"^6.1.11\"},\"devDependencies\":{\"@mapbox/cloudfriend\":\"^5.1.0\",\"@mapbox/eslint-config-mapbox\":\"^3.0.0\",\"aws-sdk\":\"^2.1087.0\",\"codecov\":\"^3.8.3\",\"eslint\":\"^7.32.0\",\"eslint-plugin-node\":\"^11.1.0\",\"mock-aws-s3\":\"^4.0.2\",\"nock\":\"^12.0.3\",\"node-addon-api\":\"^4.3.0\",\"nyc\":\"^15.1.0\",\"tape\":\"^5.5.2\",\"tar-fs\":\"^2.1.1\"},\"nyc\":{\"all\":true,\"skip-full\":false,\"exclude\":[\"test/**\"]},\"scripts\":{\"coverage\":\"nyc --all --include index.js --include lib/ npm test\",\"upload-coverage\":\"nyc report --reporter json && codecov --clear --flags=unit --file=./coverage/coverage-final.json\",\"lint\":\"eslint bin/node-pre-gyp lib/*js lib/util/*js test/*js scripts/*js\",\"fix\":\"npm run lint -- --fix\",\"update-crosswalk\":\"node scripts/abi_crosswalk.js\",\"test\":\"tape test/*test.js\"}}"));}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
module.exports = exports;
const versionArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version.substr(1).replace(/-.*$/, '').split('.').map((item)=>{
    return +item;
});
const napi_multiple_commands = [
    'build',
    'clean',
    'configure',
    'package',
    'publish',
    'reveal',
    'testbinary',
    'testpackage',
    'unpublish'
];
const napi_build_version_tag = 'napi_build_version=';
module.exports.get_napi_version = function() {
    // returns the non-zero numeric napi version or undefined if napi is not supported.
    // correctly supporting target requires an updated cross-walk
    let version = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.napi; // can be undefined
    if (!version) {
        if (versionArray[0] === 9 && versionArray[1] >= 3) version = 2; // 9.3.0+
        else if (versionArray[0] === 8) version = 1; // 8.0.0+
    }
    return version;
};
module.exports.get_napi_version_as_string = function(target) {
    // returns the napi version as a string or an empty string if napi is not supported.
    const version = module.exports.get_napi_version(target);
    return version ? '' + version : '';
};
module.exports.validate_package_json = function(package_json, opts) {
    const binary = package_json.binary;
    const module_path_ok = pathOK(binary.module_path);
    const remote_path_ok = pathOK(binary.remote_path);
    const package_name_ok = pathOK(binary.package_name);
    const napi_build_versions = module.exports.get_napi_build_versions(package_json, opts, true);
    const napi_build_versions_raw = module.exports.get_napi_build_versions_raw(package_json);
    if (napi_build_versions) {
        napi_build_versions.forEach((napi_build_version)=>{
            if (!(parseInt(napi_build_version, 10) === napi_build_version && napi_build_version > 0)) {
                throw new Error('All values specified in napi_versions must be positive integers.');
            }
        });
    }
    if (napi_build_versions && (!module_path_ok || !remote_path_ok && !package_name_ok)) {
        throw new Error('When napi_versions is specified; module_path and either remote_path or ' + "package_name must contain the substitution string '{napi_build_version}`.");
    }
    if ((module_path_ok || remote_path_ok || package_name_ok) && !napi_build_versions_raw) {
        throw new Error("When the substitution string '{napi_build_version}` is specified in " + 'module_path, remote_path, or package_name; napi_versions must also be specified.');
    }
    if (napi_build_versions && !module.exports.get_best_napi_build_version(package_json, opts) && module.exports.build_napi_only(package_json)) {
        throw new Error('The Node-API version of this Node instance is ' + module.exports.get_napi_version(opts ? opts.target : undefined) + '. ' + 'This module supports Node-API version(s) ' + module.exports.get_napi_build_versions_raw(package_json) + '. ' + 'This Node instance cannot run this module.');
    }
    if (napi_build_versions_raw && !napi_build_versions && module.exports.build_napi_only(package_json)) {
        throw new Error('The Node-API version of this Node instance is ' + module.exports.get_napi_version(opts ? opts.target : undefined) + '. ' + 'This module supports Node-API version(s) ' + module.exports.get_napi_build_versions_raw(package_json) + '. ' + 'This Node instance cannot run this module.');
    }
};
function pathOK(path) {
    return path && (path.indexOf('{napi_build_version}') !== -1 || path.indexOf('{node_napi_label}') !== -1);
}
module.exports.expand_commands = function(package_json, opts, commands) {
    const expanded_commands = [];
    const napi_build_versions = module.exports.get_napi_build_versions(package_json, opts);
    commands.forEach((command)=>{
        if (napi_build_versions && command.name === 'install') {
            const napi_build_version = module.exports.get_best_napi_build_version(package_json, opts);
            const args = napi_build_version ? [
                napi_build_version_tag + napi_build_version
            ] : [];
            expanded_commands.push({
                name: command.name,
                args: args
            });
        } else if (napi_build_versions && napi_multiple_commands.indexOf(command.name) !== -1) {
            napi_build_versions.forEach((napi_build_version)=>{
                const args = command.args.slice();
                args.push(napi_build_version_tag + napi_build_version);
                expanded_commands.push({
                    name: command.name,
                    args: args
                });
            });
        } else {
            expanded_commands.push(command);
        }
    });
    return expanded_commands;
};
module.exports.get_napi_build_versions = function(package_json, opts, warnings) {
    const log = __turbopack_require__("[project]/node_modules/.pnpm/npmlog@5.0.1/node_modules/npmlog/log.js [app-client] (ecmascript)");
    let napi_build_versions = [];
    const supported_napi_version = module.exports.get_napi_version(opts ? opts.target : undefined);
    // remove duplicates, verify each napi version can actaully be built
    if (package_json.binary && package_json.binary.napi_versions) {
        package_json.binary.napi_versions.forEach((napi_version)=>{
            const duplicated = napi_build_versions.indexOf(napi_version) !== -1;
            if (!duplicated && supported_napi_version && napi_version <= supported_napi_version) {
                napi_build_versions.push(napi_version);
            } else if (warnings && !duplicated && supported_napi_version) {
                log.info('This Node instance does not support builds for Node-API version', napi_version);
            }
        });
    }
    if (opts && opts['build-latest-napi-version-only']) {
        let latest_version = 0;
        napi_build_versions.forEach((napi_version)=>{
            if (napi_version > latest_version) latest_version = napi_version;
        });
        napi_build_versions = latest_version ? [
            latest_version
        ] : [];
    }
    return napi_build_versions.length ? napi_build_versions : undefined;
};
module.exports.get_napi_build_versions_raw = function(package_json) {
    const napi_build_versions = [];
    // remove duplicates
    if (package_json.binary && package_json.binary.napi_versions) {
        package_json.binary.napi_versions.forEach((napi_version)=>{
            if (napi_build_versions.indexOf(napi_version) === -1) {
                napi_build_versions.push(napi_version);
            }
        });
    }
    return napi_build_versions.length ? napi_build_versions : undefined;
};
module.exports.get_command_arg = function(napi_build_version) {
    return napi_build_version_tag + napi_build_version;
};
module.exports.get_napi_build_version_from_command_args = function(command_args) {
    for(let i = 0; i < command_args.length; i++){
        const arg = command_args[i];
        if (arg.indexOf(napi_build_version_tag) === 0) {
            return parseInt(arg.substr(napi_build_version_tag.length), 10);
        }
    }
    return undefined;
};
module.exports.swap_build_dir_out = function(napi_build_version) {
    if (napi_build_version) {
        const rm = __turbopack_require__("[project]/node_modules/.pnpm/rimraf@3.0.2/node_modules/rimraf/rimraf.js [app-client] (ecmascript)");
        rm.sync(module.exports.get_build_dir(napi_build_version));
        fs.renameSync('build', module.exports.get_build_dir(napi_build_version));
    }
};
module.exports.swap_build_dir_in = function(napi_build_version) {
    if (napi_build_version) {
        const rm = __turbopack_require__("[project]/node_modules/.pnpm/rimraf@3.0.2/node_modules/rimraf/rimraf.js [app-client] (ecmascript)");
        rm.sync('build');
        fs.renameSync(module.exports.get_build_dir(napi_build_version), 'build');
    }
};
module.exports.get_build_dir = function(napi_build_version) {
    return 'build-tmp-napi-v' + napi_build_version;
};
module.exports.get_best_napi_build_version = function(package_json, opts) {
    let best_napi_build_version = 0;
    const napi_build_versions = module.exports.get_napi_build_versions(package_json, opts);
    if (napi_build_versions) {
        const our_napi_version = module.exports.get_napi_version(opts ? opts.target : undefined);
        napi_build_versions.forEach((napi_build_version)=>{
            if (napi_build_version > best_napi_build_version && napi_build_version <= our_napi_version) {
                best_napi_build_version = napi_build_version;
            }
        });
    }
    return best_napi_build_version === 0 ? undefined : best_napi_build_version;
};
module.exports.build_napi_only = function(package_json) {
    return package_json.binary && package_json.binary.package_name && package_json.binary.package_name.indexOf('{node_napi_label}') === -1;
};
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"0.1.14\":{\"node_abi\":null,\"v8\":\"1.3\"},\"0.1.15\":{\"node_abi\":null,\"v8\":\"1.3\"},\"0.1.16\":{\"node_abi\":null,\"v8\":\"1.3\"},\"0.1.17\":{\"node_abi\":null,\"v8\":\"1.3\"},\"0.1.18\":{\"node_abi\":null,\"v8\":\"1.3\"},\"0.1.19\":{\"node_abi\":null,\"v8\":\"2.0\"},\"0.1.20\":{\"node_abi\":null,\"v8\":\"2.0\"},\"0.1.21\":{\"node_abi\":null,\"v8\":\"2.0\"},\"0.1.22\":{\"node_abi\":null,\"v8\":\"2.0\"},\"0.1.23\":{\"node_abi\":null,\"v8\":\"2.0\"},\"0.1.24\":{\"node_abi\":null,\"v8\":\"2.0\"},\"0.1.25\":{\"node_abi\":null,\"v8\":\"2.0\"},\"0.1.26\":{\"node_abi\":null,\"v8\":\"2.0\"},\"0.1.27\":{\"node_abi\":null,\"v8\":\"2.1\"},\"0.1.28\":{\"node_abi\":null,\"v8\":\"2.1\"},\"0.1.29\":{\"node_abi\":null,\"v8\":\"2.1\"},\"0.1.30\":{\"node_abi\":null,\"v8\":\"2.1\"},\"0.1.31\":{\"node_abi\":null,\"v8\":\"2.1\"},\"0.1.32\":{\"node_abi\":null,\"v8\":\"2.1\"},\"0.1.33\":{\"node_abi\":null,\"v8\":\"2.1\"},\"0.1.90\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.91\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.92\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.93\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.94\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.95\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.96\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.97\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.98\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.99\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.100\":{\"node_abi\":null,\"v8\":\"2.2\"},\"0.1.101\":{\"node_abi\":null,\"v8\":\"2.3\"},\"0.1.102\":{\"node_abi\":null,\"v8\":\"2.3\"},\"0.1.103\":{\"node_abi\":null,\"v8\":\"2.3\"},\"0.1.104\":{\"node_abi\":null,\"v8\":\"2.3\"},\"0.2.0\":{\"node_abi\":1,\"v8\":\"2.3\"},\"0.2.1\":{\"node_abi\":1,\"v8\":\"2.3\"},\"0.2.2\":{\"node_abi\":1,\"v8\":\"2.3\"},\"0.2.3\":{\"node_abi\":1,\"v8\":\"2.3\"},\"0.2.4\":{\"node_abi\":1,\"v8\":\"2.3\"},\"0.2.5\":{\"node_abi\":1,\"v8\":\"2.3\"},\"0.2.6\":{\"node_abi\":1,\"v8\":\"2.3\"},\"0.3.0\":{\"node_abi\":1,\"v8\":\"2.5\"},\"0.3.1\":{\"node_abi\":1,\"v8\":\"2.5\"},\"0.3.2\":{\"node_abi\":1,\"v8\":\"3.0\"},\"0.3.3\":{\"node_abi\":1,\"v8\":\"3.0\"},\"0.3.4\":{\"node_abi\":1,\"v8\":\"3.0\"},\"0.3.5\":{\"node_abi\":1,\"v8\":\"3.0\"},\"0.3.6\":{\"node_abi\":1,\"v8\":\"3.0\"},\"0.3.7\":{\"node_abi\":1,\"v8\":\"3.0\"},\"0.3.8\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.0\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.1\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.2\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.3\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.4\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.5\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.6\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.7\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.8\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.9\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.10\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.11\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.4.12\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.5.0\":{\"node_abi\":1,\"v8\":\"3.1\"},\"0.5.1\":{\"node_abi\":1,\"v8\":\"3.4\"},\"0.5.2\":{\"node_abi\":1,\"v8\":\"3.4\"},\"0.5.3\":{\"node_abi\":1,\"v8\":\"3.4\"},\"0.5.4\":{\"node_abi\":1,\"v8\":\"3.5\"},\"0.5.5\":{\"node_abi\":1,\"v8\":\"3.5\"},\"0.5.6\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.5.7\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.5.8\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.5.9\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.5.10\":{\"node_abi\":1,\"v8\":\"3.7\"},\"0.6.0\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.1\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.2\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.3\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.4\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.5\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.6\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.7\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.8\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.9\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.10\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.11\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.12\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.13\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.14\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.15\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.16\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.17\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.18\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.19\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.20\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.6.21\":{\"node_abi\":1,\"v8\":\"3.6\"},\"0.7.0\":{\"node_abi\":1,\"v8\":\"3.8\"},\"0.7.1\":{\"node_abi\":1,\"v8\":\"3.8\"},\"0.7.2\":{\"node_abi\":1,\"v8\":\"3.8\"},\"0.7.3\":{\"node_abi\":1,\"v8\":\"3.9\"},\"0.7.4\":{\"node_abi\":1,\"v8\":\"3.9\"},\"0.7.5\":{\"node_abi\":1,\"v8\":\"3.9\"},\"0.7.6\":{\"node_abi\":1,\"v8\":\"3.9\"},\"0.7.7\":{\"node_abi\":1,\"v8\":\"3.9\"},\"0.7.8\":{\"node_abi\":1,\"v8\":\"3.9\"},\"0.7.9\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.7.10\":{\"node_abi\":1,\"v8\":\"3.9\"},\"0.7.11\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.7.12\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.0\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.1\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.2\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.3\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.4\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.5\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.6\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.7\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.8\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.9\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.10\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.11\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.12\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.13\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.14\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.15\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.16\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.17\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.18\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.19\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.20\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.21\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.22\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.23\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.24\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.25\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.26\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.27\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.8.28\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.9.0\":{\"node_abi\":1,\"v8\":\"3.11\"},\"0.9.1\":{\"node_abi\":10,\"v8\":\"3.11\"},\"0.9.2\":{\"node_abi\":10,\"v8\":\"3.11\"},\"0.9.3\":{\"node_abi\":10,\"v8\":\"3.13\"},\"0.9.4\":{\"node_abi\":10,\"v8\":\"3.13\"},\"0.9.5\":{\"node_abi\":10,\"v8\":\"3.13\"},\"0.9.6\":{\"node_abi\":10,\"v8\":\"3.15\"},\"0.9.7\":{\"node_abi\":10,\"v8\":\"3.15\"},\"0.9.8\":{\"node_abi\":10,\"v8\":\"3.15\"},\"0.9.9\":{\"node_abi\":11,\"v8\":\"3.15\"},\"0.9.10\":{\"node_abi\":11,\"v8\":\"3.15\"},\"0.9.11\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.9.12\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.0\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.1\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.2\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.3\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.4\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.5\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.6\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.7\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.8\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.9\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.10\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.11\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.12\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.13\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.14\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.15\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.16\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.17\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.18\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.19\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.20\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.21\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.22\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.23\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.24\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.25\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.26\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.27\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.28\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.29\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.30\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.31\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.32\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.33\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.34\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.35\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.36\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.37\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.38\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.39\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.40\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.41\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.42\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.43\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.44\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.45\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.46\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.47\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.10.48\":{\"node_abi\":11,\"v8\":\"3.14\"},\"0.11.0\":{\"node_abi\":12,\"v8\":\"3.17\"},\"0.11.1\":{\"node_abi\":12,\"v8\":\"3.18\"},\"0.11.2\":{\"node_abi\":12,\"v8\":\"3.19\"},\"0.11.3\":{\"node_abi\":12,\"v8\":\"3.19\"},\"0.11.4\":{\"node_abi\":12,\"v8\":\"3.20\"},\"0.11.5\":{\"node_abi\":12,\"v8\":\"3.20\"},\"0.11.6\":{\"node_abi\":12,\"v8\":\"3.20\"},\"0.11.7\":{\"node_abi\":12,\"v8\":\"3.20\"},\"0.11.8\":{\"node_abi\":13,\"v8\":\"3.21\"},\"0.11.9\":{\"node_abi\":13,\"v8\":\"3.22\"},\"0.11.10\":{\"node_abi\":13,\"v8\":\"3.22\"},\"0.11.11\":{\"node_abi\":14,\"v8\":\"3.22\"},\"0.11.12\":{\"node_abi\":14,\"v8\":\"3.22\"},\"0.11.13\":{\"node_abi\":14,\"v8\":\"3.25\"},\"0.11.14\":{\"node_abi\":14,\"v8\":\"3.26\"},\"0.11.15\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.11.16\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.0\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.1\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.2\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.3\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.4\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.5\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.6\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.7\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.8\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.9\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.10\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.11\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.12\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.13\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.14\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.15\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.16\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.17\":{\"node_abi\":14,\"v8\":\"3.28\"},\"0.12.18\":{\"node_abi\":14,\"v8\":\"3.28\"},\"1.0.0\":{\"node_abi\":42,\"v8\":\"3.31\"},\"1.0.1\":{\"node_abi\":42,\"v8\":\"3.31\"},\"1.0.2\":{\"node_abi\":42,\"v8\":\"3.31\"},\"1.0.3\":{\"node_abi\":42,\"v8\":\"4.1\"},\"1.0.4\":{\"node_abi\":42,\"v8\":\"4.1\"},\"1.1.0\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.2.0\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.3.0\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.4.1\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.4.2\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.4.3\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.5.0\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.5.1\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.6.0\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.6.1\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.6.2\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.6.3\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.6.4\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.7.1\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.8.1\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.8.2\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.8.3\":{\"node_abi\":43,\"v8\":\"4.1\"},\"1.8.4\":{\"node_abi\":43,\"v8\":\"4.1\"},\"2.0.0\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.0.1\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.0.2\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.1.0\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.2.0\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.2.1\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.3.0\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.3.1\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.3.2\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.3.3\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.3.4\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.4.0\":{\"node_abi\":44,\"v8\":\"4.2\"},\"2.5.0\":{\"node_abi\":44,\"v8\":\"4.2\"},\"3.0.0\":{\"node_abi\":45,\"v8\":\"4.4\"},\"3.1.0\":{\"node_abi\":45,\"v8\":\"4.4\"},\"3.2.0\":{\"node_abi\":45,\"v8\":\"4.4\"},\"3.3.0\":{\"node_abi\":45,\"v8\":\"4.4\"},\"3.3.1\":{\"node_abi\":45,\"v8\":\"4.4\"},\"4.0.0\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.1.0\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.1.1\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.1.2\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.2.0\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.2.1\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.2.2\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.2.3\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.2.4\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.2.5\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.2.6\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.3.0\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.3.1\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.3.2\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.4.0\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.4.1\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.4.2\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.4.3\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.4.4\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.4.5\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.4.6\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.4.7\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.5.0\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.6.0\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.6.1\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.6.2\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.7.0\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.7.1\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.7.2\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.7.3\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.8.0\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.8.1\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.8.2\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.8.3\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.8.4\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.8.5\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.8.6\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.8.7\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.9.0\":{\"node_abi\":46,\"v8\":\"4.5\"},\"4.9.1\":{\"node_abi\":46,\"v8\":\"4.5\"},\"5.0.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.1.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.1.1\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.2.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.3.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.4.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.4.1\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.5.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.6.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.7.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.7.1\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.8.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.9.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.9.1\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.10.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.10.1\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.11.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.11.1\":{\"node_abi\":47,\"v8\":\"4.6\"},\"5.12.0\":{\"node_abi\":47,\"v8\":\"4.6\"},\"6.0.0\":{\"node_abi\":48,\"v8\":\"5.0\"},\"6.1.0\":{\"node_abi\":48,\"v8\":\"5.0\"},\"6.2.0\":{\"node_abi\":48,\"v8\":\"5.0\"},\"6.2.1\":{\"node_abi\":48,\"v8\":\"5.0\"},\"6.2.2\":{\"node_abi\":48,\"v8\":\"5.0\"},\"6.3.0\":{\"node_abi\":48,\"v8\":\"5.0\"},\"6.3.1\":{\"node_abi\":48,\"v8\":\"5.0\"},\"6.4.0\":{\"node_abi\":48,\"v8\":\"5.0\"},\"6.5.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.6.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.7.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.8.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.8.1\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.9.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.9.1\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.9.2\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.9.3\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.9.4\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.9.5\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.10.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.10.1\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.10.2\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.10.3\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.11.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.11.1\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.11.2\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.11.3\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.11.4\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.11.5\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.12.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.12.1\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.12.2\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.12.3\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.13.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.13.1\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.14.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.14.1\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.14.2\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.14.3\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.14.4\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.15.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.15.1\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.16.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.17.0\":{\"node_abi\":48,\"v8\":\"5.1\"},\"6.17.1\":{\"node_abi\":48,\"v8\":\"5.1\"},\"7.0.0\":{\"node_abi\":51,\"v8\":\"5.4\"},\"7.1.0\":{\"node_abi\":51,\"v8\":\"5.4\"},\"7.2.0\":{\"node_abi\":51,\"v8\":\"5.4\"},\"7.2.1\":{\"node_abi\":51,\"v8\":\"5.4\"},\"7.3.0\":{\"node_abi\":51,\"v8\":\"5.4\"},\"7.4.0\":{\"node_abi\":51,\"v8\":\"5.4\"},\"7.5.0\":{\"node_abi\":51,\"v8\":\"5.4\"},\"7.6.0\":{\"node_abi\":51,\"v8\":\"5.5\"},\"7.7.0\":{\"node_abi\":51,\"v8\":\"5.5\"},\"7.7.1\":{\"node_abi\":51,\"v8\":\"5.5\"},\"7.7.2\":{\"node_abi\":51,\"v8\":\"5.5\"},\"7.7.3\":{\"node_abi\":51,\"v8\":\"5.5\"},\"7.7.4\":{\"node_abi\":51,\"v8\":\"5.5\"},\"7.8.0\":{\"node_abi\":51,\"v8\":\"5.5\"},\"7.9.0\":{\"node_abi\":51,\"v8\":\"5.5\"},\"7.10.0\":{\"node_abi\":51,\"v8\":\"5.5\"},\"7.10.1\":{\"node_abi\":51,\"v8\":\"5.5\"},\"8.0.0\":{\"node_abi\":57,\"v8\":\"5.8\"},\"8.1.0\":{\"node_abi\":57,\"v8\":\"5.8\"},\"8.1.1\":{\"node_abi\":57,\"v8\":\"5.8\"},\"8.1.2\":{\"node_abi\":57,\"v8\":\"5.8\"},\"8.1.3\":{\"node_abi\":57,\"v8\":\"5.8\"},\"8.1.4\":{\"node_abi\":57,\"v8\":\"5.8\"},\"8.2.0\":{\"node_abi\":57,\"v8\":\"5.8\"},\"8.2.1\":{\"node_abi\":57,\"v8\":\"5.8\"},\"8.3.0\":{\"node_abi\":57,\"v8\":\"6.0\"},\"8.4.0\":{\"node_abi\":57,\"v8\":\"6.0\"},\"8.5.0\":{\"node_abi\":57,\"v8\":\"6.0\"},\"8.6.0\":{\"node_abi\":57,\"v8\":\"6.0\"},\"8.7.0\":{\"node_abi\":57,\"v8\":\"6.1\"},\"8.8.0\":{\"node_abi\":57,\"v8\":\"6.1\"},\"8.8.1\":{\"node_abi\":57,\"v8\":\"6.1\"},\"8.9.0\":{\"node_abi\":57,\"v8\":\"6.1\"},\"8.9.1\":{\"node_abi\":57,\"v8\":\"6.1\"},\"8.9.2\":{\"node_abi\":57,\"v8\":\"6.1\"},\"8.9.3\":{\"node_abi\":57,\"v8\":\"6.1\"},\"8.9.4\":{\"node_abi\":57,\"v8\":\"6.1\"},\"8.10.0\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.11.0\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.11.1\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.11.2\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.11.3\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.11.4\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.12.0\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.13.0\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.14.0\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.14.1\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.15.0\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.15.1\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.16.0\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.16.1\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.16.2\":{\"node_abi\":57,\"v8\":\"6.2\"},\"8.17.0\":{\"node_abi\":57,\"v8\":\"6.2\"},\"9.0.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.1.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.2.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.2.1\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.3.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.4.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.5.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.6.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.6.1\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.7.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.7.1\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.8.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.9.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.10.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.10.1\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.11.0\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.11.1\":{\"node_abi\":59,\"v8\":\"6.2\"},\"9.11.2\":{\"node_abi\":59,\"v8\":\"6.2\"},\"10.0.0\":{\"node_abi\":64,\"v8\":\"6.6\"},\"10.1.0\":{\"node_abi\":64,\"v8\":\"6.6\"},\"10.2.0\":{\"node_abi\":64,\"v8\":\"6.6\"},\"10.2.1\":{\"node_abi\":64,\"v8\":\"6.6\"},\"10.3.0\":{\"node_abi\":64,\"v8\":\"6.6\"},\"10.4.0\":{\"node_abi\":64,\"v8\":\"6.7\"},\"10.4.1\":{\"node_abi\":64,\"v8\":\"6.7\"},\"10.5.0\":{\"node_abi\":64,\"v8\":\"6.7\"},\"10.6.0\":{\"node_abi\":64,\"v8\":\"6.7\"},\"10.7.0\":{\"node_abi\":64,\"v8\":\"6.7\"},\"10.8.0\":{\"node_abi\":64,\"v8\":\"6.7\"},\"10.9.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.10.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.11.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.12.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.13.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.14.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.14.1\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.14.2\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.15.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.15.1\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.15.2\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.15.3\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.16.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.16.1\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.16.2\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.16.3\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.17.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.18.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.18.1\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.19.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.20.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.20.1\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.21.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.22.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.22.1\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.23.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.23.1\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.23.2\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.23.3\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.24.0\":{\"node_abi\":64,\"v8\":\"6.8\"},\"10.24.1\":{\"node_abi\":64,\"v8\":\"6.8\"},\"11.0.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.1.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.2.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.3.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.4.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.5.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.6.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.7.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.8.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.9.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.10.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.10.1\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.11.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.12.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.13.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.14.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"11.15.0\":{\"node_abi\":67,\"v8\":\"7.0\"},\"12.0.0\":{\"node_abi\":72,\"v8\":\"7.4\"},\"12.1.0\":{\"node_abi\":72,\"v8\":\"7.4\"},\"12.2.0\":{\"node_abi\":72,\"v8\":\"7.4\"},\"12.3.0\":{\"node_abi\":72,\"v8\":\"7.4\"},\"12.3.1\":{\"node_abi\":72,\"v8\":\"7.4\"},\"12.4.0\":{\"node_abi\":72,\"v8\":\"7.4\"},\"12.5.0\":{\"node_abi\":72,\"v8\":\"7.5\"},\"12.6.0\":{\"node_abi\":72,\"v8\":\"7.5\"},\"12.7.0\":{\"node_abi\":72,\"v8\":\"7.5\"},\"12.8.0\":{\"node_abi\":72,\"v8\":\"7.5\"},\"12.8.1\":{\"node_abi\":72,\"v8\":\"7.5\"},\"12.9.0\":{\"node_abi\":72,\"v8\":\"7.6\"},\"12.9.1\":{\"node_abi\":72,\"v8\":\"7.6\"},\"12.10.0\":{\"node_abi\":72,\"v8\":\"7.6\"},\"12.11.0\":{\"node_abi\":72,\"v8\":\"7.7\"},\"12.11.1\":{\"node_abi\":72,\"v8\":\"7.7\"},\"12.12.0\":{\"node_abi\":72,\"v8\":\"7.7\"},\"12.13.0\":{\"node_abi\":72,\"v8\":\"7.7\"},\"12.13.1\":{\"node_abi\":72,\"v8\":\"7.7\"},\"12.14.0\":{\"node_abi\":72,\"v8\":\"7.7\"},\"12.14.1\":{\"node_abi\":72,\"v8\":\"7.7\"},\"12.15.0\":{\"node_abi\":72,\"v8\":\"7.7\"},\"12.16.0\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.16.1\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.16.2\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.16.3\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.17.0\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.18.0\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.18.1\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.18.2\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.18.3\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.18.4\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.19.0\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.19.1\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.20.0\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.20.1\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.20.2\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.21.0\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.22.0\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.22.1\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.22.2\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.22.3\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.22.4\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.22.5\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.22.6\":{\"node_abi\":72,\"v8\":\"7.8\"},\"12.22.7\":{\"node_abi\":72,\"v8\":\"7.8\"},\"13.0.0\":{\"node_abi\":79,\"v8\":\"7.8\"},\"13.0.1\":{\"node_abi\":79,\"v8\":\"7.8\"},\"13.1.0\":{\"node_abi\":79,\"v8\":\"7.8\"},\"13.2.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.3.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.4.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.5.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.6.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.7.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.8.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.9.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.10.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.10.1\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.11.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.12.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.13.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"13.14.0\":{\"node_abi\":79,\"v8\":\"7.9\"},\"14.0.0\":{\"node_abi\":83,\"v8\":\"8.1\"},\"14.1.0\":{\"node_abi\":83,\"v8\":\"8.1\"},\"14.2.0\":{\"node_abi\":83,\"v8\":\"8.1\"},\"14.3.0\":{\"node_abi\":83,\"v8\":\"8.1\"},\"14.4.0\":{\"node_abi\":83,\"v8\":\"8.1\"},\"14.5.0\":{\"node_abi\":83,\"v8\":\"8.3\"},\"14.6.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.7.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.8.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.9.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.10.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.10.1\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.11.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.12.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.13.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.13.1\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.14.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.15.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.15.1\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.15.2\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.15.3\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.15.4\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.15.5\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.16.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.16.1\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.17.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.17.1\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.17.2\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.17.3\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.17.4\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.17.5\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.17.6\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.18.0\":{\"node_abi\":83,\"v8\":\"8.4\"},\"14.18.1\":{\"node_abi\":83,\"v8\":\"8.4\"},\"15.0.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.0.1\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.1.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.2.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.2.1\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.3.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.4.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.5.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.5.1\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.6.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.7.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.8.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.9.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.10.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.11.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.12.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.13.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"15.14.0\":{\"node_abi\":88,\"v8\":\"8.6\"},\"16.0.0\":{\"node_abi\":93,\"v8\":\"9.0\"},\"16.1.0\":{\"node_abi\":93,\"v8\":\"9.0\"},\"16.2.0\":{\"node_abi\":93,\"v8\":\"9.0\"},\"16.3.0\":{\"node_abi\":93,\"v8\":\"9.0\"},\"16.4.0\":{\"node_abi\":93,\"v8\":\"9.1\"},\"16.4.1\":{\"node_abi\":93,\"v8\":\"9.1\"},\"16.4.2\":{\"node_abi\":93,\"v8\":\"9.1\"},\"16.5.0\":{\"node_abi\":93,\"v8\":\"9.1\"},\"16.6.0\":{\"node_abi\":93,\"v8\":\"9.2\"},\"16.6.1\":{\"node_abi\":93,\"v8\":\"9.2\"},\"16.6.2\":{\"node_abi\":93,\"v8\":\"9.2\"},\"16.7.0\":{\"node_abi\":93,\"v8\":\"9.2\"},\"16.8.0\":{\"node_abi\":93,\"v8\":\"9.2\"},\"16.9.0\":{\"node_abi\":93,\"v8\":\"9.3\"},\"16.9.1\":{\"node_abi\":93,\"v8\":\"9.3\"},\"16.10.0\":{\"node_abi\":93,\"v8\":\"9.3\"},\"16.11.0\":{\"node_abi\":93,\"v8\":\"9.4\"},\"16.11.1\":{\"node_abi\":93,\"v8\":\"9.4\"},\"16.12.0\":{\"node_abi\":93,\"v8\":\"9.4\"},\"16.13.0\":{\"node_abi\":93,\"v8\":\"9.4\"},\"17.0.0\":{\"node_abi\":102,\"v8\":\"9.5\"},\"17.0.1\":{\"node_abi\":102,\"v8\":\"9.5\"},\"17.1.0\":{\"node_abi\":102,\"v8\":\"9.5\"}}"));}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
module.exports = exports;
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const semver = __turbopack_require__("[project]/node_modules/.pnpm/semver@7.7.1/node_modules/semver/index.js [app-client] (ecmascript)");
const url = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)");
const detect_libc = __turbopack_require__("[project]/node_modules/.pnpm/detect-libc@2.0.3/node_modules/detect-libc/lib/detect-libc.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
let abi_crosswalk;
// This is used for unit testing to provide a fake
// ABI crosswalk that emulates one that is not updated
// for the current version
if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_PRE_GYP_ABI_CROSSWALK) {
    abi_crosswalk = (()=>{
        const e = new Error("Cannot find module 'unknown'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
} else {
    abi_crosswalk = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json (json)");
}
const major_versions = {};
Object.keys(abi_crosswalk).forEach((v)=>{
    const major = v.split('.')[0];
    if (!major_versions[major]) {
        major_versions[major] = v;
    }
});
function get_electron_abi(runtime, target_version) {
    if (!runtime) {
        throw new Error('get_electron_abi requires valid runtime arg');
    }
    if (typeof target_version === 'undefined') {
        // erroneous CLI call
        throw new Error('Empty target version is not supported if electron is the target.');
    }
    // Electron guarantees that patch version update won't break native modules.
    const sem_ver = semver.parse(target_version);
    return runtime + '-v' + sem_ver.major + '.' + sem_ver.minor;
}
module.exports.get_electron_abi = get_electron_abi;
function get_node_webkit_abi(runtime, target_version) {
    if (!runtime) {
        throw new Error('get_node_webkit_abi requires valid runtime arg');
    }
    if (typeof target_version === 'undefined') {
        // erroneous CLI call
        throw new Error('Empty target version is not supported if node-webkit is the target.');
    }
    return runtime + '-v' + target_version;
}
module.exports.get_node_webkit_abi = get_node_webkit_abi;
function get_node_abi(runtime, versions) {
    if (!runtime) {
        throw new Error('get_node_abi requires valid runtime arg');
    }
    if (!versions) {
        throw new Error('get_node_abi requires valid process.versions object');
    }
    const sem_ver = semver.parse(versions.node);
    if (sem_ver.major === 0 && sem_ver.minor % 2) {
        // https://github.com/mapbox/node-pre-gyp/issues/124
        return runtime + '-v' + versions.node;
    } else {
        // process.versions.modules added in >= v0.10.4 and v0.11.7
        // https://github.com/joyent/node/commit/ccabd4a6fa8a6eb79d29bc3bbe9fe2b6531c2d8e
        return versions.modules ? runtime + '-v' + +versions.modules : 'v8-' + versions.v8.split('.').slice(0, 2).join('.');
    }
}
module.exports.get_node_abi = get_node_abi;
function get_runtime_abi(runtime, target_version) {
    if (!runtime) {
        throw new Error('get_runtime_abi requires valid runtime arg');
    }
    if (runtime === 'node-webkit') {
        return get_node_webkit_abi(runtime, target_version || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions['node-webkit']);
    } else if (runtime === 'electron') {
        return get_electron_abi(runtime, target_version || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.electron);
    } else {
        if (runtime !== 'node') {
            throw new Error("Unknown Runtime: '" + runtime + "'");
        }
        if (!target_version) {
            return get_node_abi(runtime, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions);
        } else {
            let cross_obj;
            // abi_crosswalk generated with ./scripts/abi_crosswalk.js
            if (abi_crosswalk[target_version]) {
                cross_obj = abi_crosswalk[target_version];
            } else {
                const target_parts = target_version.split('.').map((i)=>{
                    return +i;
                });
                if (target_parts.length !== 3) {
                    throw new Error('Unknown target version: ' + target_version);
                }
                /*
                    The below code tries to infer the last known ABI compatible version
                    that we have recorded in the abi_crosswalk.json when an exact match
                    is not possible. The reasons for this to exist are complicated:

                       - We support passing --target to be able to allow developers to package binaries for versions of node
                         that are not the same one as they are running. This might also be used in combination with the
                         --target_arch or --target_platform flags to also package binaries for alternative platforms
                       - When --target is passed we can't therefore determine the ABI (process.versions.modules) from the node
                         version that is running in memory
                       - So, therefore node-pre-gyp keeps an "ABI crosswalk" (lib/util/abi_crosswalk.json) to be able to look
                         this info up for all versions
                       - But we cannot easily predict what the future ABI will be for released versions
                       - And node-pre-gyp needs to be a `bundledDependency` in apps that depend on it in order to work correctly
                         by being fully available at install time.
                       - So, the speed of node releases and the bundled nature of node-pre-gyp mean that a new node-pre-gyp release
                         need to happen for every node.js/io.js/node-webkit/nw.js/atom-shell/etc release that might come online if
                         you want the `--target` flag to keep working for the latest version
                       - Which is impractical ^^
                       - Hence the below code guesses about future ABI to make the need to update node-pre-gyp less demanding.

                    In practice then you can have a dependency of your app like `node-sqlite3` that bundles a `node-pre-gyp` that
                    only knows about node v0.10.33 in the `abi_crosswalk.json` but target node v0.10.34 (which is assumed to be
                    ABI compatible with v0.10.33).

                    TODO: use semver module instead of custom version parsing
                */ const major = target_parts[0];
                let minor = target_parts[1];
                let patch = target_parts[2];
                // io.js: yeah if node.js ever releases 1.x this will break
                // but that is unlikely to happen: https://github.com/iojs/io.js/pull/253#issuecomment-69432616
                if (major === 1) {
                    // look for last release that is the same major version
                    // e.g. we assume io.js 1.x is ABI compatible with >= 1.0.0
                    while(true){
                        if (minor > 0) --minor;
                        if (patch > 0) --patch;
                        const new_iojs_target = '' + major + '.' + minor + '.' + patch;
                        if (abi_crosswalk[new_iojs_target]) {
                            cross_obj = abi_crosswalk[new_iojs_target];
                            console.log('Warning: node-pre-gyp could not find exact match for ' + target_version);
                            console.log('Warning: but node-pre-gyp successfully choose ' + new_iojs_target + ' as ABI compatible target');
                            break;
                        }
                        if (minor === 0 && patch === 0) {
                            break;
                        }
                    }
                } else if (major >= 2) {
                    // look for last release that is the same major version
                    if (major_versions[major]) {
                        cross_obj = abi_crosswalk[major_versions[major]];
                        console.log('Warning: node-pre-gyp could not find exact match for ' + target_version);
                        console.log('Warning: but node-pre-gyp successfully choose ' + major_versions[major] + ' as ABI compatible target');
                    }
                } else if (major === 0) {
                    if (target_parts[1] % 2 === 0) {
                        // look for the last release that is the same minor release
                        // e.g. we assume node 0.10.x is ABI compatible with >= 0.10.0
                        while(--patch > 0){
                            const new_node_target = '' + major + '.' + minor + '.' + patch;
                            if (abi_crosswalk[new_node_target]) {
                                cross_obj = abi_crosswalk[new_node_target];
                                console.log('Warning: node-pre-gyp could not find exact match for ' + target_version);
                                console.log('Warning: but node-pre-gyp successfully choose ' + new_node_target + ' as ABI compatible target');
                                break;
                            }
                        }
                    }
                }
            }
            if (!cross_obj) {
                throw new Error('Unsupported target version: ' + target_version);
            }
            // emulate process.versions
            const versions_obj = {
                node: target_version,
                v8: cross_obj.v8 + '.0',
                // abi_crosswalk uses 1 for node versions lacking process.versions.modules
                // process.versions.modules added in >= v0.10.4 and v0.11.7
                modules: cross_obj.node_abi > 1 ? cross_obj.node_abi : undefined
            };
            return get_node_abi(runtime, versions_obj);
        }
    }
}
module.exports.get_runtime_abi = get_runtime_abi;
const required_parameters = [
    'module_name',
    'module_path',
    'host'
];
function validate_config(package_json, opts) {
    const msg = package_json.name + ' package.json is not node-pre-gyp ready:\n';
    const missing = [];
    if (!package_json.main) {
        missing.push('main');
    }
    if (!package_json.version) {
        missing.push('version');
    }
    if (!package_json.name) {
        missing.push('name');
    }
    if (!package_json.binary) {
        missing.push('binary');
    }
    const o = package_json.binary;
    if (o) {
        required_parameters.forEach((p)=>{
            if (!o[p] || typeof o[p] !== 'string') {
                missing.push('binary.' + p);
            }
        });
    }
    if (missing.length >= 1) {
        throw new Error(msg + 'package.json must declare these properties: \n' + missing.join('\n'));
    }
    if (o) {
        // enforce https over http
        const protocol = url.parse(o.host).protocol;
        if (protocol === 'http:') {
            throw new Error("'host' protocol (" + protocol + ") is invalid - only 'https:' is accepted");
        }
    }
    napi.validate_package_json(package_json, opts);
}
module.exports.validate_config = validate_config;
function eval_template(template, opts) {
    Object.keys(opts).forEach((key)=>{
        const pattern = '{' + key + '}';
        while(template.indexOf(pattern) > -1){
            template = template.replace(pattern, opts[key]);
        }
    });
    return template;
}
// url.resolve needs single trailing slash
// to behave correctly, otherwise a double slash
// may end up in the url which breaks requests
// and a lacking slash may not lead to proper joining
function fix_slashes(pathname) {
    if (pathname.slice(-1) !== '/') {
        return pathname + '/';
    }
    return pathname;
}
// remove double slashes
// note: path.normalize will not work because
// it will convert forward to back slashes
function drop_double_slashes(pathname) {
    return pathname.replace(/\/\//g, '/');
}
function get_process_runtime(versions) {
    let runtime = 'node';
    if (versions['node-webkit']) {
        runtime = 'node-webkit';
    } else if (versions.electron) {
        runtime = 'electron';
    }
    return runtime;
}
module.exports.get_process_runtime = get_process_runtime;
const default_package_name = '{module_name}-v{version}-{node_abi}-{platform}-{arch}.tar.gz';
const default_remote_path = '';
module.exports.evaluate = function(package_json, options, napi_build_version) {
    options = options || {};
    validate_config(package_json, options); // options is a suitable substitute for opts in this case
    const v = package_json.version;
    const module_version = semver.parse(v);
    const runtime = options.runtime || get_process_runtime(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions);
    const opts = {
        name: package_json.name,
        configuration: options.debug ? 'Debug' : 'Release',
        debug: options.debug,
        module_name: package_json.binary.module_name,
        version: module_version.version,
        prerelease: module_version.prerelease.length ? module_version.prerelease.join('.') : '',
        build: module_version.build.length ? module_version.build.join('.') : '',
        major: module_version.major,
        minor: module_version.minor,
        patch: module_version.patch,
        runtime: runtime,
        node_abi: get_runtime_abi(runtime, options.target),
        node_abi_napi: napi.get_napi_version(options.target) ? 'napi' : get_runtime_abi(runtime, options.target),
        napi_version: napi.get_napi_version(options.target),
        napi_build_version: napi_build_version || '',
        node_napi_label: napi_build_version ? 'napi-v' + napi_build_version : get_runtime_abi(runtime, options.target),
        target: options.target || '',
        platform: options.target_platform || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform,
        target_platform: options.target_platform || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform,
        arch: options.target_arch || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arch,
        target_arch: options.target_arch || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arch,
        libc: options.target_libc || detect_libc.familySync() || 'unknown',
        module_main: package_json.main,
        toolset: options.toolset || '',
        bucket: package_json.binary.bucket,
        region: package_json.binary.region,
        s3ForcePathStyle: package_json.binary.s3ForcePathStyle || false
    };
    // support host mirror with npm config `--{module_name}_binary_host_mirror`
    // e.g.: https://github.com/node-inspector/v8-profiler/blob/master/package.json#L25
    // > npm install v8-profiler --profiler_binary_host_mirror=https://npm.taobao.org/mirrors/node-inspector/
    const validModuleName = opts.module_name.replace('-', '_');
    const host = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['npm_config_' + validModuleName + '_binary_host_mirror'] || package_json.binary.host;
    opts.host = fix_slashes(eval_template(host, opts));
    opts.module_path = eval_template(package_json.binary.module_path, opts);
    // now we resolve the module_path to ensure it is absolute so that binding.gyp variables work predictably
    if (options.module_root) {
        // resolve relative to known module root: works for pre-binding require
        opts.module_path = path.join(options.module_root, opts.module_path);
    } else {
        // resolve relative to current working directory: works for node-pre-gyp commands
        opts.module_path = path.resolve(opts.module_path);
    }
    opts.module = path.join(opts.module_path, opts.module_name + '.node');
    opts.remote_path = package_json.binary.remote_path ? drop_double_slashes(fix_slashes(eval_template(package_json.binary.remote_path, opts))) : default_remote_path;
    const package_name = package_json.binary.package_name ? package_json.binary.package_name : default_package_name;
    opts.package_name = eval_template(package_name, opts);
    opts.staged_tarball = path.join('build/stage', opts.remote_path, opts.package_name);
    opts.hosted_path = url.resolve(opts.host, opts.remote_path);
    opts.hosted_tarball = url.resolve(opts.hosted_path, opts.package_name);
    return opts;
};
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/clean.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
module.exports = exports = clean;
exports.usage = 'Removes the entire folder containing the compiled .node module';
const rm = __turbopack_require__("[project]/node_modules/.pnpm/rimraf@3.0.2/node_modules/rimraf/rimraf.js [app-client] (ecmascript)");
const exists = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})().exists || __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)").exists;
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
function clean(gyp, argv, callback) {
    const package_json = gyp.package_json;
    const napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    const opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    const to_delete = opts.module_path;
    if (!to_delete) {
        return callback(new Error('module_path is empty, refusing to delete'));
    } else if (path.normalize(to_delete) === path.normalize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd())) {
        return callback(new Error('module_path is not set, refusing to delete'));
    } else {
        exists(to_delete, (found)=>{
            if (found) {
                if (!gyp.opts.silent_clean) console.log('[' + package_json.name + '] Removing "%s"', to_delete);
                return rm(to_delete, callback);
            }
            return callback();
        });
    }
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/install.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
module.exports = exports = install;
exports.usage = 'Attempts to install pre-built binary for module';
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const log = __turbopack_require__("[project]/node_modules/.pnpm/npmlog@5.0.1/node_modules/npmlog/log.js [app-client] (ecmascript)");
const existsAsync = fs.exists || path.exists;
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
const makeDir = __turbopack_require__("[project]/node_modules/.pnpm/make-dir@3.1.0/node_modules/make-dir/index.js [app-client] (ecmascript)");
// for fetching binaries
const fetch = __turbopack_require__("[project]/node_modules/.pnpm/node-fetch@2.7.0/node_modules/node-fetch/browser.js [app-client] (ecmascript)");
const tar = __turbopack_require__("[project]/node_modules/.pnpm/tar@6.2.1/node_modules/tar/index.js [app-client] (ecmascript)");
let npgVersion = 'unknown';
try {
    // Read own package.json to get the current node-pre-pyp version.
    const ownPackageJSON = fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8');
    npgVersion = JSON.parse(ownPackageJSON).version;
} catch (e) {
// do nothing
}
function place_binary(uri, targetDir, opts, callback) {
    log.http('GET', uri);
    // Try getting version info from the currently running npm.
    const envVersionInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.npm_config_user_agent || 'node ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version;
    const sanitized = uri.replace('+', '%2B');
    const requestOpts = {
        uri: sanitized,
        headers: {
            'User-Agent': 'node-pre-gyp (v' + npgVersion + ', ' + envVersionInfo + ')'
        },
        follow_max: 10
    };
    if (opts.cafile) {
        try {
            requestOpts.ca = fs.readFileSync(opts.cafile);
        } catch (e) {
            return callback(e);
        }
    } else if (opts.ca) {
        requestOpts.ca = opts.ca;
    }
    const proxyUrl = opts.proxy || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.http_proxy || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HTTP_PROXY || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.npm_config_proxy;
    let agent;
    if (proxyUrl) {
        const ProxyAgent = __turbopack_require__("[project]/node_modules/.pnpm/https-proxy-agent@5.0.1/node_modules/https-proxy-agent/dist/index.js [app-client] (ecmascript)");
        agent = new ProxyAgent(proxyUrl);
        log.http('download', 'proxy agent configured using: "%s"', proxyUrl);
    }
    fetch(sanitized, {
        agent
    }).then((res)=>{
        if (!res.ok) {
            throw new Error(`response status ${res.status} ${res.statusText} on ${sanitized}`);
        }
        const dataStream = res.body;
        return new Promise((resolve, reject)=>{
            let extractions = 0;
            const countExtractions = (entry)=>{
                extractions += 1;
                log.info('install', 'unpacking %s', entry.path);
            };
            dataStream.pipe(extract(targetDir, countExtractions)).on('error', (e)=>{
                reject(e);
            });
            dataStream.on('end', ()=>{
                resolve(`extracted file count: ${extractions}`);
            });
            dataStream.on('error', (e)=>{
                reject(e);
            });
        });
    }).then((text)=>{
        log.info(text);
        callback();
    }).catch((e)=>{
        log.error(`install ${e.message}`);
        callback(e);
    });
}
function extract(to, onentry) {
    return tar.extract({
        cwd: to,
        strip: 1,
        onentry
    });
}
function extract_from_local(from, targetDir, callback) {
    if (!fs.existsSync(from)) {
        return callback(new Error('Cannot find file ' + from));
    }
    log.info('Found local file to extract from ' + from);
    // extract helpers
    let extractCount = 0;
    function countExtractions(entry) {
        extractCount += 1;
        log.info('install', 'unpacking ' + entry.path);
    }
    function afterExtract(err) {
        if (err) return callback(err);
        if (extractCount === 0) {
            return callback(new Error('There was a fatal problem while extracting the tarball'));
        }
        log.info('tarball', 'done parsing tarball');
        callback();
    }
    fs.createReadStream(from).pipe(extract(targetDir, countExtractions)).on('close', afterExtract).on('error', afterExtract);
}
function do_build(gyp, argv, callback) {
    const args = [
        'rebuild'
    ].concat(argv);
    gyp.todo.push({
        name: 'build',
        args: args
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(callback);
}
function print_fallback_error(err, opts, package_json) {
    const fallback_message = ' (falling back to source compile with node-gyp)';
    let full_message = '';
    if (err.statusCode !== undefined) {
        // If we got a network response it but failed to download
        // it means remote binaries are not available, so let's try to help
        // the user/developer with the info to debug why
        full_message = 'Pre-built binaries not found for ' + package_json.name + '@' + package_json.version;
        full_message += ' and ' + opts.runtime + '@' + (opts.target || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node) + ' (' + opts.node_abi + ' ABI, ' + opts.libc + ')';
        full_message += fallback_message;
        log.warn('Tried to download(' + err.statusCode + '): ' + opts.hosted_tarball);
        log.warn(full_message);
        log.http(err.message);
    } else {
        // If we do not have a statusCode that means an unexpected error
        // happened and prevented an http response, so we output the exact error
        full_message = 'Pre-built binaries not installable for ' + package_json.name + '@' + package_json.version;
        full_message += ' and ' + opts.runtime + '@' + (opts.target || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node) + ' (' + opts.node_abi + ' ABI, ' + opts.libc + ')';
        full_message += fallback_message;
        log.warn(full_message);
        log.warn('Hit error ' + err.message);
    }
}
//
// install
//
function install(gyp, argv, callback) {
    const package_json = gyp.package_json;
    const napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    const source_build = gyp.opts['build-from-source'] || gyp.opts.build_from_source;
    const update_binary = gyp.opts['update-binary'] || gyp.opts.update_binary;
    const should_do_source_build = source_build === package_json.name || source_build === true || source_build === 'true';
    if (should_do_source_build) {
        log.info('build', 'requesting source compile');
        return do_build(gyp, argv, callback);
    } else {
        const fallback_to_build = gyp.opts['fallback-to-build'] || gyp.opts.fallback_to_build;
        let should_do_fallback_build = fallback_to_build === package_json.name || fallback_to_build === true || fallback_to_build === 'true';
        // but allow override from npm
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.npm_config_argv) {
            const cooked = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.npm_config_argv).cooked;
            const match = cooked.indexOf('--fallback-to-build');
            if (match > -1 && cooked.length > match && cooked[match + 1] === 'false') {
                should_do_fallback_build = false;
                log.info('install', 'Build fallback disabled via npm flag: --fallback-to-build=false');
            }
        }
        let opts;
        try {
            opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
        } catch (err) {
            return callback(err);
        }
        opts.ca = gyp.opts.ca;
        opts.cafile = gyp.opts.cafile;
        const from = opts.hosted_tarball;
        const to = opts.module_path;
        const binary_module = path.join(to, opts.module_name + '.node');
        existsAsync(binary_module, (found)=>{
            if (!update_binary) {
                if (found) {
                    console.log('[' + package_json.name + '] Success: "' + binary_module + '" already installed');
                    console.log('Pass --update-binary to reinstall or --build-from-source to recompile');
                    return callback();
                }
                log.info('check', 'checked for "' + binary_module + '" (not found)');
            }
            makeDir(to).then(()=>{
                const fileName = from.startsWith('file://') && from.slice('file://'.length);
                if (fileName) {
                    extract_from_local(fileName, to, after_place);
                } else {
                    place_binary(from, to, opts, after_place);
                }
            }).catch((err)=>{
                after_place(err);
            });
            function after_place(err) {
                if (err && should_do_fallback_build) {
                    print_fallback_error(err, opts, package_json);
                    return do_build(gyp, argv, callback);
                } else if (err) {
                    return callback(err);
                } else {
                    console.log('[' + package_json.name + '] Success: "' + binary_module + '" is installed via remote');
                    return callback();
                }
            }
        });
    }
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reinstall.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
module.exports = exports = rebuild;
exports.usage = 'Runs "clean" and "install" at once';
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
function rebuild(gyp, argv, callback) {
    const package_json = gyp.package_json;
    let installArgs = [];
    const napi_build_version = napi.get_best_napi_build_version(package_json, gyp.opts);
    if (napi_build_version != null) installArgs = [
        napi.get_command_arg(napi_build_version)
    ];
    gyp.todo.unshift({
        name: 'clean',
        args: []
    }, {
        name: 'install',
        args: installArgs
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(callback);
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
module.exports = exports;
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const win = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === 'win32';
const existsSync = fs.existsSync || path.existsSync;
const cp = (()=>{
    const e = new Error("Cannot find module 'child_process'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// try to build up the complete path to node-gyp
/* priority:
  - node-gyp on ENV:npm_config_node_gyp (https://github.com/npm/npm/pull/4887)
  - node-gyp on NODE_PATH
  - node-gyp inside npm on NODE_PATH (ignore on iojs)
  - node-gyp inside npm beside node exe
*/ function which_node_gyp() {
    let node_gyp_bin;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.npm_config_node_gyp) {
        try {
            node_gyp_bin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.npm_config_node_gyp;
            if (existsSync(node_gyp_bin)) {
                return node_gyp_bin;
            }
        } catch (err) {
        // do nothing
        }
    }
    try {
        const node_gyp_main = (()=>{
            const e = new Error("Cannot find module 'node-gyp'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })(); // eslint-disable-line node/no-missing-require
        node_gyp_bin = path.join(path.dirname(path.dirname(node_gyp_main)), 'bin/node-gyp.js');
        if (existsSync(node_gyp_bin)) {
            return node_gyp_bin;
        }
    } catch (err) {
    // do nothing
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].execPath.indexOf('iojs') === -1) {
        try {
            const npm_main = (()=>{
                const e = new Error("Cannot find module 'npm'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })(); // eslint-disable-line node/no-missing-require
            node_gyp_bin = path.join(path.dirname(path.dirname(npm_main)), 'node_modules/node-gyp/bin/node-gyp.js');
            if (existsSync(node_gyp_bin)) {
                return node_gyp_bin;
            }
        } catch (err) {
        // do nothing
        }
    }
    const npm_base = path.join(path.dirname(path.dirname(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].execPath)), 'lib/node_modules/npm/');
    node_gyp_bin = path.join(npm_base, 'node_modules/node-gyp/bin/node-gyp.js');
    if (existsSync(node_gyp_bin)) {
        return node_gyp_bin;
    }
}
module.exports.run_gyp = function(args, opts, callback) {
    let shell_cmd = '';
    const cmd_args = [];
    if (opts.runtime && opts.runtime === 'node-webkit') {
        shell_cmd = 'nw-gyp';
        if (win) shell_cmd += '.cmd';
    } else {
        const node_gyp_path = which_node_gyp();
        if (node_gyp_path) {
            shell_cmd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].execPath;
            cmd_args.push(node_gyp_path);
        } else {
            shell_cmd = 'node-gyp';
            if (win) shell_cmd += '.cmd';
        }
    }
    const final_args = cmd_args.concat(args);
    const cmd = cp.spawn(shell_cmd, final_args, {
        cwd: undefined,
        env: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env,
        stdio: [
            0,
            1,
            2
        ]
    });
    cmd.on('error', (err)=>{
        if (err) {
            return callback(new Error("Failed to execute '" + shell_cmd + ' ' + final_args.join(' ') + "' (" + err + ')'));
        }
        callback(null, opts);
    });
    cmd.on('close', (code)=>{
        if (code && code !== 0) {
            return callback(new Error("Failed to execute '" + shell_cmd + ' ' + final_args.join(' ') + "' (" + code + ')'));
        }
        callback(null, opts);
    });
};
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = exports = handle_gyp_opts;
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
/*

Here we gather node-pre-gyp generated options (from versioning) and pass them along to node-gyp.

We massage the args and options slightly to account for differences in what commands mean between
node-pre-gyp and node-gyp (e.g. see the difference between "build" and "rebuild" below)

Keep in mind: the values inside `argv` and `gyp.opts` below are different depending on whether
node-pre-gyp is called directory, or if it is called in a `run-script` phase of npm.

We also try to preserve any command line options that might have been passed to npm or node-pre-gyp.
But this is fairly difficult without passing way to much through. For example `gyp.opts` contains all
the process.env and npm pushes a lot of variables into process.env which node-pre-gyp inherits. So we have
to be very selective about what we pass through.

For example:

`npm install --build-from-source` will give:

argv == [ 'rebuild' ]
gyp.opts.argv == { remain: [ 'install' ],
  cooked: [ 'install', '--fallback-to-build' ],
  original: [ 'install', '--fallback-to-build' ] }

`./bin/node-pre-gyp build` will give:

argv == []
gyp.opts.argv == { remain: [ 'build' ],
  cooked: [ 'build' ],
  original: [ '-C', 'test/app1', 'build' ] }

*/ // select set of node-pre-gyp versioning info
// to share with node-gyp
const share_with_node_gyp = [
    'module',
    'module_name',
    'module_path',
    'napi_version',
    'node_abi_napi',
    'napi_build_version',
    'node_napi_label'
];
function handle_gyp_opts(gyp, argv, callback) {
    // Collect node-pre-gyp specific variables to pass to node-gyp
    const node_pre_gyp_options = [];
    // generate custom node-pre-gyp versioning info
    const napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    const opts = versioning.evaluate(gyp.package_json, gyp.opts, napi_build_version);
    share_with_node_gyp.forEach((key)=>{
        const val = opts[key];
        if (val) {
            node_pre_gyp_options.push('--' + key + '=' + val);
        } else if (key === 'napi_build_version') {
            node_pre_gyp_options.push('--' + key + '=0');
        } else {
            if (key !== 'napi_version' && key !== 'node_abi_napi') return callback(new Error('Option ' + key + ' required but not found by node-pre-gyp'));
        }
    });
    // Collect options that follow the special -- which disables nopt parsing
    const unparsed_options = [];
    let double_hyphen_found = false;
    gyp.opts.argv.original.forEach((opt)=>{
        if (double_hyphen_found) {
            unparsed_options.push(opt);
        }
        if (opt === '--') {
            double_hyphen_found = true;
        }
    });
    // We try respect and pass through remaining command
    // line options (like --foo=bar) to node-gyp
    const cooked = gyp.opts.argv.cooked;
    const node_gyp_options = [];
    cooked.forEach((value)=>{
        if (value.length > 2 && value.slice(0, 2) === '--') {
            const key = value.slice(2);
            const val = cooked[cooked.indexOf(value) + 1];
            if (val && val.indexOf('--') === -1) {
                node_gyp_options.push('--' + key + '=' + val);
            } else {
                node_gyp_options.push(value);
            }
        }
    });
    const result = {
        'opts': opts,
        'gyp': node_gyp_options,
        'pre': node_pre_gyp_options,
        'unparsed': unparsed_options
    };
    return callback(null, result);
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/configure.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = exports = configure;
exports.usage = 'Attempts to configure node-gyp or nw-gyp build';
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
const compile = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)");
const handle_gyp_opts = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)");
function configure(gyp, argv, callback) {
    handle_gyp_opts(gyp, argv, (err, result)=>{
        let final_args = result.gyp.concat(result.pre);
        // pull select node-gyp configure options out of the npm environ
        const known_gyp_args = [
            'dist-url',
            'python',
            'nodedir',
            'msvs_version'
        ];
        known_gyp_args.forEach((key)=>{
            const val = gyp.opts[key] || gyp.opts[key.replace('-', '_')];
            if (val) {
                final_args.push('--' + key + '=' + val);
            }
        });
        // --ensure=false tell node-gyp to re-install node development headers
        // but it is only respected by node-gyp install, so we have to call install
        // as a separate step if the user passes it
        if (gyp.opts.ensure === false) {
            const install_args = final_args.concat([
                'install',
                '--ensure=false'
            ]);
            compile.run_gyp(install_args, result.opts, (err2)=>{
                if (err2) return callback(err2);
                if (result.unparsed.length > 0) {
                    final_args = final_args.concat([
                        '--'
                    ]).concat(result.unparsed);
                }
                compile.run_gyp([
                    'configure'
                ].concat(final_args), result.opts, (err3)=>{
                    return callback(err3);
                });
            });
        } else {
            if (result.unparsed.length > 0) {
                final_args = final_args.concat([
                    '--'
                ]).concat(result.unparsed);
            }
            compile.run_gyp([
                'configure'
            ].concat(final_args), result.opts, (err4)=>{
                if (!err4 && result.opts.napi_build_version) {
                    napi.swap_build_dir_out(result.opts.napi_build_version);
                }
                return callback(err4);
            });
        }
    });
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/build.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = exports = build;
exports.usage = 'Attempts to compile the module by dispatching to node-gyp or nw-gyp';
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
const compile = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)");
const handle_gyp_opts = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)");
const configure = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/configure.js [app-client] (ecmascript)");
function do_build(gyp, argv, callback) {
    handle_gyp_opts(gyp, argv, (err, result)=>{
        let final_args = [
            'build'
        ].concat(result.gyp).concat(result.pre);
        if (result.unparsed.length > 0) {
            final_args = final_args.concat([
                '--'
            ]).concat(result.unparsed);
        }
        if (!err && result.opts.napi_build_version) {
            napi.swap_build_dir_in(result.opts.napi_build_version);
        }
        compile.run_gyp(final_args, result.opts, (err2)=>{
            if (result.opts.napi_build_version) {
                napi.swap_build_dir_out(result.opts.napi_build_version);
            }
            return callback(err2);
        });
    });
}
function build(gyp, argv, callback) {
    // Form up commands to pass to node-gyp:
    // We map `node-pre-gyp build` to `node-gyp configure build` so that we do not
    // trigger a clean and therefore do not pay the penalty of a full recompile
    if (argv.length && argv.indexOf('rebuild') > -1) {
        argv.shift(); // remove `rebuild`
        // here we map `node-pre-gyp rebuild` to `node-gyp rebuild` which internally means
        // "clean + configure + build" and triggers a full recompile
        compile.run_gyp([
            'clean'
        ], {}, (err3)=>{
            if (err3) return callback(err3);
            configure(gyp, argv, (err4)=>{
                if (err4) return callback(err4);
                return do_build(gyp, argv, callback);
            });
        });
    } else {
        return do_build(gyp, argv, callback);
    }
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/rebuild.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
module.exports = exports = rebuild;
exports.usage = 'Runs "clean" and "build" at once';
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
function rebuild(gyp, argv, callback) {
    const package_json = gyp.package_json;
    let commands = [
        {
            name: 'clean',
            args: []
        },
        {
            name: 'build',
            args: [
                'rebuild'
            ]
        }
    ];
    commands = napi.expand_commands(package_json, gyp.opts, commands);
    for(let i = commands.length; i !== 0; i--){
        gyp.todo.unshift(commands[i - 1]);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(callback);
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/package.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = exports = _package;
exports.usage = 'Packs binary (and enclosing directory) into locally staged tarball';
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const log = __turbopack_require__("[project]/node_modules/.pnpm/npmlog@5.0.1/node_modules/npmlog/log.js [app-client] (ecmascript)");
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
const existsAsync = fs.exists || path.exists;
const makeDir = __turbopack_require__("[project]/node_modules/.pnpm/make-dir@3.1.0/node_modules/make-dir/index.js [app-client] (ecmascript)");
const tar = __turbopack_require__("[project]/node_modules/.pnpm/tar@6.2.1/node_modules/tar/index.js [app-client] (ecmascript)");
function readdirSync(dir) {
    let list = [];
    const files = fs.readdirSync(dir);
    files.forEach((file)=>{
        const stats = fs.lstatSync(path.join(dir, file));
        if (stats.isDirectory()) {
            list = list.concat(readdirSync(path.join(dir, file)));
        } else {
            list.push(path.join(dir, file));
        }
    });
    return list;
}
function _package(gyp, argv, callback) {
    const package_json = gyp.package_json;
    const napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    const opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    const from = opts.module_path;
    const binary_module = path.join(from, opts.module_name + '.node');
    existsAsync(binary_module, (found)=>{
        if (!found) {
            return callback(new Error('Cannot package because ' + binary_module + ' missing: run `node-pre-gyp rebuild` first'));
        }
        const tarball = opts.staged_tarball;
        const filter_func = function(entry) {
            const basename = path.basename(entry);
            if (basename.length && basename[0] !== '.') {
                console.log('packing ' + entry);
                return true;
            } else {
                console.log('skipping ' + entry);
            }
            return false;
        };
        makeDir(path.dirname(tarball)).then(()=>{
            let files = readdirSync(from);
            const base = path.basename(from);
            files = files.map((file)=>{
                return path.join(base, path.relative(from, file));
            });
            tar.create({
                portable: false,
                gzip: true,
                filter: filter_func,
                file: tarball,
                cwd: path.dirname(from)
            }, files, (err2)=>{
                if (err2) console.error('[' + package_json.name + '] ' + err2.message);
                else log.info('package', 'Binary staged at "' + tarball + '"');
                return callback(err2);
            });
        }).catch((err)=>{
            return callback(err);
        });
    });
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testbinary.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
module.exports = exports = testbinary;
exports.usage = 'Tests that the binary.node can be required';
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const log = __turbopack_require__("[project]/node_modules/.pnpm/npmlog@5.0.1/node_modules/npmlog/log.js [app-client] (ecmascript)");
const cp = (()=>{
    const e = new Error("Cannot find module 'child_process'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
function testbinary(gyp, argv, callback) {
    const args = [];
    const options = {};
    let shell_cmd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].execPath;
    const package_json = gyp.package_json;
    const napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    const opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    // skip validation for runtimes we don't explicitly support (like electron)
    if (opts.runtime && opts.runtime !== 'node-webkit' && opts.runtime !== 'node') {
        return callback();
    }
    const nw = opts.runtime && opts.runtime === 'node-webkit';
    // ensure on windows that / are used for require path
    const binary_module = opts.module.replace(/\\/g, '/');
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arch !== opts.target_arch || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform !== opts.target_platform) {
        let msg = 'skipping validation since host platform/arch (';
        msg += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform + '/' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arch + ')';
        msg += ' does not match target (';
        msg += opts.target_platform + '/' + opts.target_arch + ')';
        log.info('validate', msg);
        return callback();
    }
    if (nw) {
        options.timeout = 5000;
        if ("TURBOPACK compile-time falsy", 0) {
            shell_cmd = 'node-webkit';
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === 'win32') {
            shell_cmd = 'nw.exe';
        } else {
            shell_cmd = 'nw';
        }
        const modulePath = path.resolve(binary_module);
        const appDir = path.join(__dirname, 'util', 'nw-pre-gyp');
        args.push(appDir);
        args.push(modulePath);
        log.info('validate', "Running test command: '" + shell_cmd + ' ' + args.join(' ') + "'");
        cp.execFile(shell_cmd, args, options, (err, stdout, stderr)=>{
            // check for normal timeout for node-webkit
            if (err) {
                if (err.killed === true && err.signal && err.signal.indexOf('SIG') > -1) {
                    return callback();
                }
                const stderrLog = stderr.toString();
                log.info('stderr', stderrLog);
                if (/^\s*Xlib:\s*extension\s*"RANDR"\s*missing\s*on\s*display\s*":\d+\.\d+"\.\s*$/.test(stderrLog)) {
                    log.info('RANDR', 'stderr contains only RANDR error, ignored');
                    return callback();
                }
                return callback(err);
            }
            return callback();
        });
        return;
    }
    args.push('--eval');
    args.push("require('" + binary_module.replace(/'/g, '\'') + "')");
    log.info('validate', "Running test command: '" + shell_cmd + ' ' + args.join(' ') + "'");
    cp.execFile(shell_cmd, args, options, (err, stdout, stderr)=>{
        if (err) {
            return callback(err, {
                stdout: stdout,
                stderr: stderr
            });
        }
        return callback();
    });
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testpackage.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = exports = testpackage;
exports.usage = 'Tests that the staged package is valid';
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const log = __turbopack_require__("[project]/node_modules/.pnpm/npmlog@5.0.1/node_modules/npmlog/log.js [app-client] (ecmascript)");
const existsAsync = fs.exists || path.exists;
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
const testbinary = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testbinary.js [app-client] (ecmascript)");
const tar = __turbopack_require__("[project]/node_modules/.pnpm/tar@6.2.1/node_modules/tar/index.js [app-client] (ecmascript)");
const makeDir = __turbopack_require__("[project]/node_modules/.pnpm/make-dir@3.1.0/node_modules/make-dir/index.js [app-client] (ecmascript)");
function testpackage(gyp, argv, callback) {
    const package_json = gyp.package_json;
    const napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    const opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    const tarball = opts.staged_tarball;
    existsAsync(tarball, (found)=>{
        if (!found) {
            return callback(new Error('Cannot test package because ' + tarball + ' missing: run `node-pre-gyp package` first'));
        }
        const to = opts.module_path;
        function filter_func(entry) {
            log.info('install', 'unpacking [' + entry.path + ']');
        }
        makeDir(to).then(()=>{
            tar.extract({
                file: tarball,
                cwd: to,
                strip: 1,
                onentry: filter_func
            }).then(after_extract, callback);
        }).catch((err)=>{
            return callback(err);
        });
        function after_extract() {
            testbinary(gyp, argv, (err)=>{
                if (err) {
                    return callback(err);
                } else {
                    console.log('[' + package_json.name + '] Package appears valid');
                    return callback();
                }
            });
        }
    });
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
module.exports = exports;
const url = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)");
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
module.exports.detect = function(opts, config) {
    const to = opts.hosted_path;
    const uri = url.parse(to);
    config.prefix = !uri.pathname || uri.pathname === '/' ? '' : uri.pathname.replace('/', '');
    if (opts.bucket && opts.region) {
        config.bucket = opts.bucket;
        config.region = opts.region;
        config.endpoint = opts.host;
        config.s3ForcePathStyle = opts.s3ForcePathStyle;
    } else {
        const parts = uri.hostname.split('.s3');
        const bucket = parts[0];
        if (!bucket) {
            return;
        }
        if (!config.bucket) {
            config.bucket = bucket;
        }
        if (!config.region) {
            const region = parts[1].slice(1).split('.')[0];
            if (region === 'amazonaws') {
                config.region = 'us-east-1';
            } else {
                config.region = region;
            }
        }
    }
};
module.exports.get_s3 = function(config) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.node_pre_gyp_mock_s3) {
        // here we're mocking. node_pre_gyp_mock_s3 is the scratch directory
        // for the mock code.
        const AWSMock = (()=>{
            const e = new Error("Cannot find module 'mock-aws-s3'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        const os = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)");
        AWSMock.config.basePath = `${os.tmpdir()}/mock`;
        const s3 = AWSMock.S3();
        // wrapped callback maker. fs calls return code of ENOENT but AWS.S3 returns
        // NotFound.
        const wcb = (fn)=>(err, ...args)=>{
                if (err && err.code === 'ENOENT') {
                    err.code = 'NotFound';
                }
                return fn(err, ...args);
            };
        return {
            listObjects (params, callback) {
                return s3.listObjects(params, wcb(callback));
            },
            headObject (params, callback) {
                return s3.headObject(params, wcb(callback));
            },
            deleteObject (params, callback) {
                return s3.deleteObject(params, wcb(callback));
            },
            putObject (params, callback) {
                return s3.putObject(params, wcb(callback));
            }
        };
    }
    // if not mocking then setup real s3.
    const AWS = (()=>{
        const e = new Error("Cannot find module 'aws-sdk'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
    AWS.config.update(config);
    const s3 = new AWS.S3();
    // need to change if additional options need to be specified.
    return {
        listObjects (params, callback) {
            return s3.listObjects(params, callback);
        },
        headObject (params, callback) {
            return s3.headObject(params, callback);
        },
        deleteObject (params, callback) {
            return s3.deleteObject(params, callback);
        },
        putObject (params, callback) {
            return s3.putObject(params, callback);
        }
    };
};
//
// function to get the mocking control function. if not mocking it returns a no-op.
//
// if mocking it sets up the mock http interceptors that use the mocked s3 file system
// to fulfill reponses.
module.exports.get_mockS3Http = function() {
    let mock_s3 = false;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.node_pre_gyp_mock_s3) {
        return ()=>mock_s3;
    }
    const nock = (()=>{
        const e = new Error("Cannot find module 'nock'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
    // the bucket used for testing, as addressed by https.
    const host = 'https://mapbox-node-pre-gyp-public-testing-bucket.s3.us-east-1.amazonaws.com';
    const mockDir = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.node_pre_gyp_mock_s3 + '/mapbox-node-pre-gyp-public-testing-bucket';
    // function to setup interceptors. they are "turned off" by setting mock_s3 to false.
    const mock_http = ()=>{
        // eslint-disable-next-line no-unused-vars
        function get(uri, requestBody) {
            const filepath = path.join(mockDir, uri.replace('%2B', '+'));
            try {
                fs.accessSync(filepath, fs.constants.R_OK);
            } catch (e) {
                return [
                    404,
                    'not found\n'
                ];
            }
            // the mock s3 functions just write to disk, so just read from it.
            return [
                200,
                fs.createReadStream(filepath)
            ];
        }
        // eslint-disable-next-line no-unused-vars
        return nock(host).persist().get(()=>mock_s3) // mock any uri for s3 when true
        .reply(get);
    };
    // setup interceptors. they check the mock_s3 flag to determine whether to intercept.
    mock_http(nock, host, mockDir);
    // function to turn matching all requests to s3 on/off.
    const mockS3Http = (action)=>{
        const previous = mock_s3;
        if (action === 'off') {
            mock_s3 = false;
        } else if (action === 'on') {
            mock_s3 = true;
        } else if (action !== 'get') {
            throw new Error(`illegal action for setMockHttp ${action}`);
        }
        return previous;
    };
    // call mockS3Http with the argument
    // - 'on' - turn it on
    // - 'off' - turn it off (used by fetch.test.js so it doesn't interfere with redirects)
    // - 'get' - return true or false for 'on' or 'off'
    return mockS3Http;
};
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/publish.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = exports = publish;
exports.usage = 'Publishes pre-built binary (requires aws-sdk)';
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const log = __turbopack_require__("[project]/node_modules/.pnpm/npmlog@5.0.1/node_modules/npmlog/log.js [app-client] (ecmascript)");
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
const s3_setup = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)");
const existsAsync = fs.exists || path.exists;
const url = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)");
function publish(gyp, argv, callback) {
    const package_json = gyp.package_json;
    const napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    const opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    const tarball = opts.staged_tarball;
    existsAsync(tarball, (found)=>{
        if (!found) {
            return callback(new Error('Cannot publish because ' + tarball + ' missing: run `node-pre-gyp package` first'));
        }
        log.info('publish', 'Detecting s3 credentials');
        const config = {};
        s3_setup.detect(opts, config);
        const s3 = s3_setup.get_s3(config);
        const key_name = url.resolve(config.prefix, opts.package_name);
        const s3_opts = {
            Bucket: config.bucket,
            Key: key_name
        };
        log.info('publish', 'Authenticating with s3');
        log.info('publish', config);
        log.info('publish', 'Checking for existing binary at ' + opts.hosted_path);
        s3.headObject(s3_opts, (err, meta)=>{
            if (meta) log.info('publish', JSON.stringify(meta));
            if (err && err.code === 'NotFound') {
                // we are safe to publish because
                // the object does not already exist
                log.info('publish', 'Preparing to put object');
                const s3_put_opts = {
                    ACL: 'public-read',
                    Body: fs.createReadStream(tarball),
                    Key: key_name,
                    Bucket: config.bucket
                };
                log.info('publish', 'Putting object', s3_put_opts.ACL, s3_put_opts.Bucket, s3_put_opts.Key);
                try {
                    s3.putObject(s3_put_opts, (err2, resp)=>{
                        log.info('publish', 'returned from putting object');
                        if (err2) {
                            log.info('publish', 's3 putObject error: "' + err2 + '"');
                            return callback(err2);
                        }
                        if (resp) log.info('publish', 's3 putObject response: "' + JSON.stringify(resp) + '"');
                        log.info('publish', 'successfully put object');
                        console.log('[' + package_json.name + '] published to ' + opts.hosted_path);
                        return callback();
                    });
                } catch (err3) {
                    log.info('publish', 's3 putObject error: "' + err3 + '"');
                    return callback(err3);
                }
            } else if (err) {
                log.info('publish', 's3 headObject error: "' + err + '"');
                return callback(err);
            } else {
                log.error('publish', 'Cannot publish over existing version');
                log.error('publish', "Update the 'version' field in package.json and try again");
                log.error('publish', 'If the previous version was published in error see:');
                log.error('publish', '\t node-pre-gyp unpublish');
                return callback(new Error('Failed publishing to ' + opts.hosted_path));
            }
        });
    });
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/unpublish.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = exports = unpublish;
exports.usage = 'Unpublishes pre-built binary (requires aws-sdk)';
const log = __turbopack_require__("[project]/node_modules/.pnpm/npmlog@5.0.1/node_modules/npmlog/log.js [app-client] (ecmascript)");
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
const s3_setup = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)");
const url = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)");
function unpublish(gyp, argv, callback) {
    const package_json = gyp.package_json;
    const napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    const opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    const config = {};
    s3_setup.detect(opts, config);
    const s3 = s3_setup.get_s3(config);
    const key_name = url.resolve(config.prefix, opts.package_name);
    const s3_opts = {
        Bucket: config.bucket,
        Key: key_name
    };
    s3.headObject(s3_opts, (err, meta)=>{
        if (err && err.code === 'NotFound') {
            console.log('[' + package_json.name + '] Not found: https://' + s3_opts.Bucket + '.s3.amazonaws.com/' + s3_opts.Key);
            return callback();
        } else if (err) {
            return callback(err);
        } else {
            log.info('unpublish', JSON.stringify(meta));
            s3.deleteObject(s3_opts, (err2, resp)=>{
                if (err2) return callback(err2);
                log.info(JSON.stringify(resp));
                console.log('[' + package_json.name + '] Success: removed https://' + s3_opts.Bucket + '.s3.amazonaws.com/' + s3_opts.Key);
                return callback();
            });
        }
    });
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/info.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = exports = info;
exports.usage = 'Lists all published binaries (requires aws-sdk)';
const log = __turbopack_require__("[project]/node_modules/.pnpm/npmlog@5.0.1/node_modules/npmlog/log.js [app-client] (ecmascript)");
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const s3_setup = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)");
function info(gyp, argv, callback) {
    const package_json = gyp.package_json;
    const opts = versioning.evaluate(package_json, gyp.opts);
    const config = {};
    s3_setup.detect(opts, config);
    const s3 = s3_setup.get_s3(config);
    const s3_opts = {
        Bucket: config.bucket,
        Prefix: config.prefix
    };
    s3.listObjects(s3_opts, (err, meta)=>{
        if (err && err.code === 'NotFound') {
            return callback(new Error('[' + package_json.name + '] Not found: https://' + s3_opts.Bucket + '.s3.amazonaws.com/' + config.prefix));
        } else if (err) {
            return callback(err);
        } else {
            log.verbose(JSON.stringify(meta, null, 1));
            if (meta && meta.Contents) {
                meta.Contents.forEach((obj)=>{
                    console.log(obj.Key);
                });
            } else {
                console.error('[' + package_json.name + '] No objects found at https://' + s3_opts.Bucket + '.s3.amazonaws.com/' + config.prefix);
            }
            return callback();
        }
    });
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reveal.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = exports = reveal;
exports.usage = 'Reveals data on the versioned binary';
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
function unix_paths(key, val) {
    return val && val.replace ? val.replace(/\\/g, '/') : val;
}
function reveal(gyp, argv, callback) {
    const package_json = gyp.package_json;
    const napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    const opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    let hit = false;
    // if a second arg is passed look to see
    // if it is a known option
    // console.log(JSON.stringify(gyp.opts,null,1))
    const remain = gyp.opts.argv.remain[gyp.opts.argv.remain.length - 1];
    if (remain && Object.hasOwnProperty.call(opts, remain)) {
        console.log(opts[remain].replace(/\\/g, '/'));
        hit = true;
    }
    // otherwise return all options as json
    if (!hit) {
        console.log(JSON.stringify(opts, unix_paths, 2));
    }
    return callback();
}
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/main.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Set the title.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].title = 'node-pre-gyp';
const node_pre_gyp = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)");
const log = __turbopack_require__("[project]/node_modules/.pnpm/npmlog@5.0.1/node_modules/npmlog/log.js [app-client] (ecmascript)");
/**
 * Process and execute the selected commands.
 */ const prog = new node_pre_gyp.Run({
    argv: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].argv
});
let completed = false;
if (prog.todo.length === 0) {
    if (~__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].argv.indexOf('-v') || ~__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].argv.indexOf('--version')) {
        console.log('v%s', prog.version);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(0);
    } else if (~__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].argv.indexOf('-h') || ~__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].argv.indexOf('--help')) {
        console.log('%s', prog.usage());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(0);
    }
    console.log('%s', prog.usage());
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(1);
}
// if --no-color is passed
if (prog.opts && Object.hasOwnProperty.call(prog, 'color') && !prog.opts.color) {
    log.disableColor();
}
log.info('it worked if it ends with', 'ok');
log.verbose('cli', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].argv);
log.info('using', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].title + '@%s', prog.version);
log.info('using', 'node@%s | %s | %s', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arch);
/**
 * Change dir if -C/--directory was passed.
 */ const dir = prog.opts.directory;
if (dir) {
    const fs = (()=>{
        const e = new Error("Cannot find module 'fs'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
    try {
        const stat = fs.statSync(dir);
        if (stat.isDirectory()) {
            log.info('chdir', dir);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].chdir(dir);
        } else {
            log.warn('chdir', dir + ' is not a directory');
        }
    } catch (e) {
        if (e.code === 'ENOENT') {
            log.warn('chdir', dir + ' is not a directory');
        } else {
            log.warn('chdir', 'error during chdir() "%s"', e.message);
        }
    }
}
function run() {
    const command = prog.todo.shift();
    if (!command) {
        // done!
        completed = true;
        log.info('ok');
        return;
    }
    // set binary.host when appropriate. host determines the s3 target bucket.
    const target = prog.setBinaryHostProperty(command.name);
    if (target && [
        'install',
        'publish',
        'unpublish',
        'info'
    ].indexOf(command.name) >= 0) {
        log.info('using binary.host: ' + prog.package_json.binary.host);
    }
    prog.commands[command.name](command.args, function(err) {
        if (err) {
            log.error(command.name + ' error');
            log.error('stack', err.stack);
            errorMessage();
            log.error('not ok');
            console.log(err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(1);
        }
        const args_array = [].slice.call(arguments, 1);
        if (args_array.length) {
            console.log.apply(console, args_array);
        }
        // now run the next command in the queue
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(run);
    });
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on('exit', (code)=>{
    if (!completed && !code) {
        log.error('Completion callback never invoked!');
        errorMessage();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(6);
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on('uncaughtException', (err)=>{
    log.error('UNCAUGHT EXCEPTION');
    log.error('stack', err.stack);
    errorMessage();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(7);
});
function errorMessage() {
    // copied from npm's lib/util/error-handler.js
    const os = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)");
    log.error('System', os.type() + ' ' + os.release());
    log.error('command', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].argv.map(JSON.stringify).join(' '));
    log.error('cwd', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd());
    log.error('node -v', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version);
    log.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].title + ' -v', 'v' + prog.package.version);
}
// start running the given commands!
run();
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const npg = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)");
const versioning = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)");
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
const existsSync = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})().existsSync || __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)").existsSync;
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
module.exports = exports;
exports.usage = 'Finds the require path for the node-pre-gyp installed module';
exports.validate = function(package_json, opts) {
    versioning.validate_config(package_json, opts);
};
exports.find = function(package_json_path, opts) {
    if (!existsSync(package_json_path)) {
        throw new Error(package_json_path + 'does not exist');
    }
    const prog = new npg.Run({
        package_json_path,
        argv: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].argv
    });
    prog.setBinaryHostProperty();
    const package_json = prog.package_json;
    versioning.validate_config(package_json, opts);
    let napi_build_version;
    if (napi.get_napi_build_versions(package_json, opts)) {
        napi_build_version = napi.get_best_napi_build_version(package_json, opts);
    }
    opts = opts || {};
    if (!opts.module_root) opts.module_root = path.dirname(package_json_path);
    const meta = versioning.evaluate(package_json, opts, napi_build_version);
    return meta.module;
};
}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"main\":\"index.html\",\"name\":\"nw-pre-gyp-module-test\",\"description\":\"Node-webkit-based module test.\",\"version\":\"0.0.1\",\"window\":{\"show\":false}}"));}}),
"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
/**
 * Module exports.
 */ module.exports = exports;
/**
 * Module dependencies.
 */ // load mocking control function for accessing s3 via https. the function is a noop always returning
// false if not mocking.
exports.mockS3Http = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)").get_mockS3Http();
exports.mockS3Http('on');
const mocking = exports.mockS3Http('get');
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const path = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const nopt = __turbopack_require__("[project]/node_modules/.pnpm/nopt@5.0.0/node_modules/nopt/lib/nopt.js [app-client] (ecmascript)");
const log = __turbopack_require__("[project]/node_modules/.pnpm/npmlog@5.0.1/node_modules/npmlog/log.js [app-client] (ecmascript)");
log.disableProgress();
const napi = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)");
const EE = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)").EventEmitter;
const inherits = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)").inherits;
const cli_commands = [
    'clean',
    'install',
    'reinstall',
    'build',
    'rebuild',
    'package',
    'testpackage',
    'publish',
    'unpublish',
    'info',
    'testbinary',
    'reveal',
    'configure'
];
const aliases = {};
// differentiate node-pre-gyp's logs from npm's
log.heading = 'node-pre-gyp';
if (mocking) {
    log.warn(`mocking s3 to ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.node_pre_gyp_mock_s3}`);
}
// this is a getter to avoid circular reference warnings with node v14.
Object.defineProperty(exports, 'find', {
    get: function() {
        return __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js [app-client] (ecmascript)").find;
    },
    enumerable: true
});
// in the following, "my_module" is using node-pre-gyp to
// prebuild and install pre-built binaries. "main_module"
// is using "my_module".
//
// "bin/node-pre-gyp" invokes Run() without a path. the
// expectation is that the working directory is the package
// root "my_module". this is true because in all cases npm is
// executing a script in the context of "my_module".
//
// "pre-binding.find()" is executed by "my_module" but in the
// context of "main_module". this is because "main_module" is
// executing and requires "my_module" which is then executing
// "pre-binding.find()" via "node-pre-gyp.find()", so the working
// directory is that of "main_module".
//
// that's why "find()" must pass the path to package.json.
//
function Run({ package_json_path = './package.json', argv }) {
    this.package_json_path = package_json_path;
    this.commands = {};
    const self = this;
    cli_commands.forEach((command)=>{
        self.commands[command] = function(argvx, callback) {
            log.verbose('command', command, argvx);
            return __turbopack_module_context__({
                "./clean": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/clean.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/clean.js [app-client] (ecmascript)")
                },
                "./install": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/install.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/install.js [app-client] (ecmascript)")
                },
                "./reinstall": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reinstall.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reinstall.js [app-client] (ecmascript)")
                },
                "./build": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/build.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/build.js [app-client] (ecmascript)")
                },
                "./rebuild": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/rebuild.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/rebuild.js [app-client] (ecmascript)")
                },
                "./package": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/package.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/package.js [app-client] (ecmascript)")
                },
                "./testpackage": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testpackage.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testpackage.js [app-client] (ecmascript)")
                },
                "./publish": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/publish.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/publish.js [app-client] (ecmascript)")
                },
                "./unpublish": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/unpublish.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/unpublish.js [app-client] (ecmascript)")
                },
                "./info": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/info.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/info.js [app-client] (ecmascript)")
                },
                "./testbinary": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testbinary.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testbinary.js [app-client] (ecmascript)")
                },
                "./reveal": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reveal.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reveal.js [app-client] (ecmascript)")
                },
                "./configure": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/configure.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/configure.js [app-client] (ecmascript)")
                },
                "./build.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/build.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/build.js [app-client] (ecmascript)")
                },
                "./clean.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/clean.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/clean.js [app-client] (ecmascript)")
                },
                "./configure.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/configure.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/configure.js [app-client] (ecmascript)")
                },
                "./info.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/info.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/info.js [app-client] (ecmascript)")
                },
                "./install.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/install.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/install.js [app-client] (ecmascript)")
                },
                "./main": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/main.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/main.js [app-client] (ecmascript)")
                },
                "./main.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/main.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/main.js [app-client] (ecmascript)")
                },
                "./node-pre-gyp": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)")
                },
                "./node-pre-gyp.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)")
                },
                "./package.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/package.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/package.js [app-client] (ecmascript)")
                },
                "./pre-binding": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js [app-client] (ecmascript)")
                },
                "./pre-binding.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js [app-client] (ecmascript)")
                },
                "./publish.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/publish.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/publish.js [app-client] (ecmascript)")
                },
                "./rebuild.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/rebuild.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/rebuild.js [app-client] (ecmascript)")
                },
                "./reinstall.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reinstall.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reinstall.js [app-client] (ecmascript)")
                },
                "./reveal.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reveal.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reveal.js [app-client] (ecmascript)")
                },
                "./testbinary.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testbinary.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testbinary.js [app-client] (ecmascript)")
                },
                "./testpackage.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testpackage.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testpackage.js [app-client] (ecmascript)")
                },
                "./unpublish.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/unpublish.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/unpublish.js [app-client] (ecmascript)")
                },
                "./util/abi_crosswalk": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json (json)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json (json)")
                },
                "./util/abi_crosswalk.json": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json (json)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json (json)")
                },
                "./util/compile": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)")
                },
                "./util/compile.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)")
                },
                "./util/handle_gyp_opts": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)")
                },
                "./util/handle_gyp_opts.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)")
                },
                "./util/napi": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)")
                },
                "./util/napi.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)")
                },
                "./util/nw-pre-gyp/index.html": {
                    id: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })(),
                    module: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })()
                },
                "./util/nw-pre-gyp/package": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json (json)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json (json)")
                },
                "./util/nw-pre-gyp/package.json": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json (json)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json (json)")
                },
                "./util/s3_setup": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)")
                },
                "./util/s3_setup.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)")
                },
                "./util/versioning": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)")
                },
                "./util/versioning.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)")
                },
                "./util/nw-pre-gyp": {
                    id: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })(),
                    module: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })()
                },
                "./util/nw-pre-gyp/": {
                    id: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })(),
                    module: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })()
                }
            })('./' + command)(self, argvx, callback);
        };
    });
    this.parseArgv(argv);
    // this is set to true after the binary.host property was set to
    // either staging_host or production_host.
    this.binaryHostSet = false;
}
inherits(Run, EE);
exports.Run = Run;
const proto = Run.prototype;
/**
 * Export the contents of the package.json.
 */ proto.package = __turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/package.json (json)");
/**
 * nopt configuration definitions
 */ proto.configDefs = {
    help: Boolean,
    arch: String,
    debug: Boolean,
    directory: String,
    proxy: String,
    loglevel: String // everywhere
};
/**
 * nopt shorthands
 */ proto.shorthands = {
    release: '--no-debug',
    C: '--directory',
    debug: '--debug',
    j: '--jobs',
    silent: '--loglevel=silent',
    silly: '--loglevel=silly',
    verbose: '--loglevel=verbose'
};
/**
 * expose the command aliases for the bin file to use.
 */ proto.aliases = aliases;
/**
 * Parses the given argv array and sets the 'opts', 'argv',
 * 'command', and 'package_json' properties.
 */ proto.parseArgv = function parseOpts(argv) {
    this.opts = nopt(this.configDefs, this.shorthands, argv);
    this.argv = this.opts.argv.remain.slice();
    const commands = this.todo = [];
    // create a copy of the argv array with aliases mapped
    argv = this.argv.map((arg)=>{
        // is this an alias?
        if (arg in this.aliases) {
            arg = this.aliases[arg];
        }
        return arg;
    });
    // process the mapped args into "command" objects ("name" and "args" props)
    argv.slice().forEach((arg)=>{
        if (arg in this.commands) {
            const args = argv.splice(0, argv.indexOf(arg));
            argv.shift();
            if (commands.length > 0) {
                commands[commands.length - 1].args = args;
            }
            commands.push({
                name: arg,
                args: []
            });
        }
    });
    if (commands.length > 0) {
        commands[commands.length - 1].args = argv.splice(0);
    }
    // if a directory was specified package.json is assumed to be relative
    // to it.
    let package_json_path = this.package_json_path;
    if (this.opts.directory) {
        package_json_path = path.join(this.opts.directory, package_json_path);
    }
    this.package_json = JSON.parse(fs.readFileSync(package_json_path));
    // expand commands entries for multiple napi builds
    this.todo = napi.expand_commands(this.package_json, this.opts, commands);
    // support for inheriting config env variables from npm
    const npm_config_prefix = 'npm_config_';
    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env).forEach((name)=>{
        if (name.indexOf(npm_config_prefix) !== 0) return;
        const val = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[name];
        if (name === npm_config_prefix + 'loglevel') {
            log.level = val;
        } else {
            // add the user-defined options to the config
            name = name.substring(npm_config_prefix.length);
            // avoid npm argv clobber already present args
            // which avoids problem of 'npm test' calling
            // script that runs unique npm install commands
            if (name === 'argv') {
                if (this.opts.argv && this.opts.argv.remain && this.opts.argv.remain.length) {
                // do nothing
                } else {
                    this.opts[name] = val;
                }
            } else {
                this.opts[name] = val;
            }
        }
    });
    if (this.opts.loglevel) {
        log.level = this.opts.loglevel;
    }
    log.resume();
};
/**
 * allow the binary.host property to be set at execution time.
 *
 * for this to take effect requires all the following to be true.
 * - binary is a property in package.json
 * - binary.host is falsey
 * - binary.staging_host is not empty
 * - binary.production_host is not empty
 *
 * if any of the previous checks fail then the function returns an empty string
 * and makes no changes to package.json's binary property.
 *
 *
 * if command is "publish" then the default is set to "binary.staging_host"
 * if command is not "publish" the the default is set to "binary.production_host"
 *
 * if the command-line option '--s3_host' is set to "staging" or "production" then
 * "binary.host" is set to the specified "staging_host" or "production_host". if
 * '--s3_host' is any other value an exception is thrown.
 *
 * if '--s3_host' is not present then "binary.host" is set to the default as above.
 *
 * this strategy was chosen so that any command other than "publish" or "unpublish" uses "production"
 * as the default without requiring any command-line options but that "publish" and "unpublish" require
 * '--s3_host production_host' to be specified in order to *really* publish (or unpublish). publishing
 * to staging can be done freely without worrying about disturbing any production releases.
 */ proto.setBinaryHostProperty = function(command) {
    if (this.binaryHostSet) {
        return this.package_json.binary.host;
    }
    const p = this.package_json;
    // don't set anything if host is present. it must be left blank to trigger this.
    if (!p || !p.binary || p.binary.host) {
        return '';
    }
    // and both staging and production must be present. errors will be reported later.
    if (!p.binary.staging_host || !p.binary.production_host) {
        return '';
    }
    let target = 'production_host';
    if (command === 'publish' || command === 'unpublish') {
        target = 'staging_host';
    }
    // the environment variable has priority over the default or the command line. if
    // either the env var or the command line option are invalid throw an error.
    const npg_s3_host = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.node_pre_gyp_s3_host;
    if (npg_s3_host === 'staging' || npg_s3_host === 'production') {
        target = `${npg_s3_host}_host`;
    } else if (this.opts['s3_host'] === 'staging' || this.opts['s3_host'] === 'production') {
        target = `${this.opts['s3_host']}_host`;
    } else if (this.opts['s3_host'] || npg_s3_host) {
        throw new Error(`invalid s3_host ${this.opts['s3_host'] || npg_s3_host}`);
    }
    p.binary.host = p.binary[target];
    this.binaryHostSet = true;
    return p.binary.host;
};
/**
 * Returns the usage instructions for node-pre-gyp.
 */ proto.usage = function usage() {
    const str = [
        '',
        '  Usage: node-pre-gyp <command> [options]',
        '',
        '  where <command> is one of:',
        cli_commands.map((c)=>{
            return '    - ' + c + ' - ' + __turbopack_module_context__({
                "./clean": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/clean.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/clean.js [app-client] (ecmascript)")
                },
                "./install": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/install.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/install.js [app-client] (ecmascript)")
                },
                "./reinstall": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reinstall.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reinstall.js [app-client] (ecmascript)")
                },
                "./build": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/build.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/build.js [app-client] (ecmascript)")
                },
                "./rebuild": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/rebuild.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/rebuild.js [app-client] (ecmascript)")
                },
                "./package": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/package.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/package.js [app-client] (ecmascript)")
                },
                "./testpackage": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testpackage.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testpackage.js [app-client] (ecmascript)")
                },
                "./publish": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/publish.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/publish.js [app-client] (ecmascript)")
                },
                "./unpublish": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/unpublish.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/unpublish.js [app-client] (ecmascript)")
                },
                "./info": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/info.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/info.js [app-client] (ecmascript)")
                },
                "./testbinary": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testbinary.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testbinary.js [app-client] (ecmascript)")
                },
                "./reveal": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reveal.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reveal.js [app-client] (ecmascript)")
                },
                "./configure": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/configure.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/configure.js [app-client] (ecmascript)")
                },
                "./build.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/build.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/build.js [app-client] (ecmascript)")
                },
                "./clean.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/clean.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/clean.js [app-client] (ecmascript)")
                },
                "./configure.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/configure.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/configure.js [app-client] (ecmascript)")
                },
                "./info.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/info.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/info.js [app-client] (ecmascript)")
                },
                "./install.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/install.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/install.js [app-client] (ecmascript)")
                },
                "./main": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/main.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/main.js [app-client] (ecmascript)")
                },
                "./main.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/main.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/main.js [app-client] (ecmascript)")
                },
                "./node-pre-gyp": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)")
                },
                "./node-pre-gyp.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js [app-client] (ecmascript)")
                },
                "./package.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/package.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/package.js [app-client] (ecmascript)")
                },
                "./pre-binding": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js [app-client] (ecmascript)")
                },
                "./pre-binding.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js [app-client] (ecmascript)")
                },
                "./publish.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/publish.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/publish.js [app-client] (ecmascript)")
                },
                "./rebuild.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/rebuild.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/rebuild.js [app-client] (ecmascript)")
                },
                "./reinstall.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reinstall.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reinstall.js [app-client] (ecmascript)")
                },
                "./reveal.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reveal.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/reveal.js [app-client] (ecmascript)")
                },
                "./testbinary.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testbinary.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testbinary.js [app-client] (ecmascript)")
                },
                "./testpackage.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testpackage.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/testpackage.js [app-client] (ecmascript)")
                },
                "./unpublish.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/unpublish.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/unpublish.js [app-client] (ecmascript)")
                },
                "./util/abi_crosswalk": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json (json)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json (json)")
                },
                "./util/abi_crosswalk.json": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json (json)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json (json)")
                },
                "./util/compile": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)")
                },
                "./util/compile.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js [app-client] (ecmascript)")
                },
                "./util/handle_gyp_opts": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)")
                },
                "./util/handle_gyp_opts.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js [app-client] (ecmascript)")
                },
                "./util/napi": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)")
                },
                "./util/napi.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/napi.js [app-client] (ecmascript)")
                },
                "./util/nw-pre-gyp/index.html": {
                    id: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })(),
                    module: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })()
                },
                "./util/nw-pre-gyp/package": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json (json)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json (json)")
                },
                "./util/nw-pre-gyp/package.json": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json (json)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json (json)")
                },
                "./util/s3_setup": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)")
                },
                "./util/s3_setup.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js [app-client] (ecmascript)")
                },
                "./util/versioning": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)")
                },
                "./util/versioning.js": {
                    id: ()=>"[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)",
                    module: ()=>__turbopack_require__("[project]/node_modules/.pnpm/@mapbox+node-pre-gyp@1.0.11/node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js [app-client] (ecmascript)")
                },
                "./util/nw-pre-gyp": {
                    id: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })(),
                    module: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })()
                },
                "./util/nw-pre-gyp/": {
                    id: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })(),
                    module: ()=>(()=>{
                            const e = new Error("Cannot find module 'unknown module type'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })()
                }
            })('./' + c).usage;
        }).join('\n'),
        '',
        'node-pre-gyp@' + this.version + '  ' + path.resolve(__dirname, '..'),
        'node@' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node
    ].join('\n');
    return str;
};
/**
 * Version number getter.
 */ Object.defineProperty(proto, 'version', {
    get: function() {
        return this.package.version;
    },
    enumerable: true
});
}}),
}]);

//# sourceMappingURL=0e401_%40mapbox_node-pre-gyp_c6f5d9._.js.map