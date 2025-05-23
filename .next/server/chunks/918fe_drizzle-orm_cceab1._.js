module.exports = {

"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "entityKind": (()=>entityKind),
    "hasOwnEntityKind": (()=>hasOwnEntityKind),
    "is": (()=>is)
});
const entityKind = Symbol.for("drizzle:entityKind");
const hasOwnEntityKind = Symbol.for("drizzle:hasOwnEntityKind");
function is(value, type) {
    if (!value || typeof value !== "object") {
        return false;
    }
    if (value instanceof type) {
        return true;
    }
    if (!Object.prototype.hasOwnProperty.call(type, entityKind)) {
        throw new Error(`Class "${type.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
    }
    let cls = value.constructor;
    if (cls) {
        while(cls){
            if (entityKind in cls && cls[entityKind] === type[entityKind]) {
                return true;
            }
            cls = Object.getPrototypeOf(cls);
        }
    }
    return false;
}
;
 //# sourceMappingURL=entity.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseName": (()=>BaseName),
    "Columns": (()=>Columns),
    "ExtraConfigBuilder": (()=>ExtraConfigBuilder),
    "ExtraConfigColumns": (()=>ExtraConfigColumns),
    "IsAlias": (()=>IsAlias),
    "OriginalName": (()=>OriginalName),
    "Schema": (()=>Schema),
    "Table": (()=>Table),
    "TableName": (()=>TableName),
    "getTableName": (()=>getTableName),
    "getTableUniqueName": (()=>getTableUniqueName),
    "isTable": (()=>isTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
;
const TableName = Symbol.for("drizzle:Name");
const Schema = Symbol.for("drizzle:Schema");
const Columns = Symbol.for("drizzle:Columns");
const ExtraConfigColumns = Symbol.for("drizzle:ExtraConfigColumns");
const OriginalName = Symbol.for("drizzle:OriginalName");
const BaseName = Symbol.for("drizzle:BaseName");
const IsAlias = Symbol.for("drizzle:IsAlias");
const ExtraConfigBuilder = Symbol.for("drizzle:ExtraConfigBuilder");
const IsDrizzleTable = Symbol.for("drizzle:IsDrizzleTable");
class Table {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "Table";
    /** @internal */ static Symbol = {
        Name: TableName,
        Schema,
        OriginalName,
        Columns,
        ExtraConfigColumns,
        BaseName,
        IsAlias,
        ExtraConfigBuilder
    };
    /**
   * @internal
   * Can be changed if the table is aliased.
   */ [TableName];
    /**
   * @internal
   * Used to store the original name of the table, before any aliasing.
   */ [OriginalName];
    /** @internal */ [Schema];
    /** @internal */ [Columns];
    /** @internal */ [ExtraConfigColumns];
    /**
   *  @internal
   * Used to store the table name before the transformation via the `tableCreator` functions.
   */ [BaseName];
    /** @internal */ [IsAlias] = false;
    /** @internal */ [IsDrizzleTable] = true;
    /** @internal */ [ExtraConfigBuilder] = void 0;
    constructor(name, schema, baseName){
        this[TableName] = this[OriginalName] = name;
        this[Schema] = schema;
        this[BaseName] = baseName;
    }
}
function isTable(table) {
    return typeof table === "object" && table !== null && IsDrizzleTable in table;
}
function getTableName(table) {
    return table[TableName];
}
function getTableUniqueName(table) {
    return `${table[Schema] ?? "public"}.${table[TableName]}`;
}
;
 //# sourceMappingURL=table.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InlineForeignKeys": (()=>InlineForeignKeys),
    "PgTable": (()=>PgTable),
    "pgTable": (()=>pgTable),
    "pgTableCreator": (()=>pgTableCreator),
    "pgTableWithSchema": (()=>pgTableWithSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
;
;
const InlineForeignKeys = Symbol.for("drizzle:PgInlineForeignKeys");
class PgTable extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgTable";
    /** @internal */ static Symbol = Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol, {
        InlineForeignKeys
    });
    /**@internal */ [InlineForeignKeys] = [];
    /** @internal */ [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.ExtraConfigBuilder] = void 0;
}
function pgTableWithSchema(name, columns, extraConfig, schema, baseName = name) {
    const rawTable = new PgTable(name, schema, baseName);
    const builtColumns = Object.fromEntries(Object.entries(columns).map(([name2, colBuilderBase])=>{
        const colBuilder = colBuilderBase;
        const column = colBuilder.build(rawTable);
        rawTable[InlineForeignKeys].push(...colBuilder.buildForeignKeys(column, rawTable));
        return [
            name2,
            column
        ];
    }));
    const builtColumnsForExtraConfig = Object.fromEntries(Object.entries(columns).map(([name2, colBuilderBase])=>{
        const colBuilder = colBuilderBase;
        const column = colBuilder.buildExtraConfigColumn(rawTable);
        return [
            name2,
            column
        ];
    }));
    const table = Object.assign(rawTable, builtColumns);
    table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns] = builtColumns;
    table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.ExtraConfigColumns] = builtColumnsForExtraConfig;
    if (extraConfig) {
        table[PgTable.Symbol.ExtraConfigBuilder] = extraConfig;
    }
    return table;
}
const pgTable = (name, columns, extraConfig)=>{
    return pgTableWithSchema(name, columns, extraConfig, void 0);
};
function pgTableCreator(customizeTableName) {
    return (name, columns, extraConfig)=>{
        return pgTableWithSchema(customizeTableName(name), columns, extraConfig, void 0, name);
    };
}
;
 //# sourceMappingURL=table.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing-utils.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "iife": (()=>iife)
});
function iife(fn, ...args) {
    return fn(...args);
}
;
 //# sourceMappingURL=tracing-utils.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/foreign-keys.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ForeignKey": (()=>ForeignKey),
    "ForeignKeyBuilder": (()=>ForeignKeyBuilder),
    "foreignKey": (()=>foreignKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
;
;
class ForeignKeyBuilder {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgForeignKeyBuilder";
    /** @internal */ reference;
    /** @internal */ _onUpdate = "no action";
    /** @internal */ _onDelete = "no action";
    constructor(config, actions){
        this.reference = ()=>{
            const { name, columns, foreignColumns } = config();
            return {
                name,
                columns,
                foreignTable: foreignColumns[0].table,
                foreignColumns
            };
        };
        if (actions) {
            this._onUpdate = actions.onUpdate;
            this._onDelete = actions.onDelete;
        }
    }
    onUpdate(action) {
        this._onUpdate = action === void 0 ? "no action" : action;
        return this;
    }
    onDelete(action) {
        this._onDelete = action === void 0 ? "no action" : action;
        return this;
    }
    /** @internal */ build(table) {
        return new ForeignKey(table, this);
    }
}
class ForeignKey {
    constructor(table, builder){
        this.table = table;
        this.reference = builder.reference;
        this.onUpdate = builder._onUpdate;
        this.onDelete = builder._onDelete;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgForeignKey";
    reference;
    onUpdate;
    onDelete;
    getName() {
        const { name, columns, foreignColumns } = this.reference();
        const columnNames = columns.map((column)=>column.name);
        const foreignColumnNames = foreignColumns.map((column)=>column.name);
        const chunks = [
            this.table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTable"].Symbol.Name],
            ...columnNames,
            foreignColumns[0].table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTable"].Symbol.Name],
            ...foreignColumnNames
        ];
        return name ?? `${chunks.join("_")}_fk`;
    }
}
function foreignKey(config) {
    function mappedConfig() {
        const { name, columns, foreignColumns } = config;
        return {
            name,
            columns,
            foreignColumns
        };
    }
    return new ForeignKeyBuilder(mappedConfig);
}
;
 //# sourceMappingURL=foreign-keys.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column-builder.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ColumnBuilder": (()=>ColumnBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
;
class ColumnBuilder {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "ColumnBuilder";
    config;
    constructor(name, dataType, columnType){
        this.config = {
            name,
            notNull: false,
            default: void 0,
            hasDefault: false,
            primaryKey: false,
            isUnique: false,
            uniqueName: void 0,
            uniqueType: void 0,
            dataType,
            columnType,
            generated: void 0
        };
    }
    /**
   * Changes the data type of the column. Commonly used with `json` columns. Also, useful for branded types.
   *
   * @example
   * ```ts
   * const users = pgTable('users', {
   * 	id: integer('id').$type<UserId>().primaryKey(),
   * 	details: json('details').$type<UserDetails>().notNull(),
   * });
   * ```
   */ $type() {
        return this;
    }
    /**
   * Adds a `not null` clause to the column definition.
   *
   * Affects the `select` model of the table - columns *without* `not null` will be nullable on select.
   */ notNull() {
        this.config.notNull = true;
        return this;
    }
    /**
   * Adds a `default <value>` clause to the column definition.
   *
   * Affects the `insert` model of the table - columns *with* `default` are optional on insert.
   *
   * If you need to set a dynamic default value, use {@link $defaultFn} instead.
   */ default(value) {
        this.config.default = value;
        this.config.hasDefault = true;
        return this;
    }
    /**
   * Adds a dynamic default value to the column.
   * The function will be called when the row is inserted, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */ $defaultFn(fn) {
        this.config.defaultFn = fn;
        this.config.hasDefault = true;
        return this;
    }
    /**
   * Alias for {@link $defaultFn}.
   */ $default = this.$defaultFn;
    /**
   * Adds a dynamic update value to the column.
   * The function will be called when the row is updated, and the returned value will be used as the column value if none is provided.
   * If no `default` (or `$defaultFn`) value is provided, the function will be called when the row is inserted as well, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */ $onUpdateFn(fn) {
        this.config.onUpdateFn = fn;
        this.config.hasDefault = true;
        return this;
    }
    /**
   * Alias for {@link $onUpdateFn}.
   */ $onUpdate = this.$onUpdateFn;
    /**
   * Adds a `primary key` clause to the column definition. This implicitly makes the column `not null`.
   *
   * In SQLite, `integer primary key` implicitly makes the column auto-incrementing.
   */ primaryKey() {
        this.config.primaryKey = true;
        this.config.notNull = true;
        return this;
    }
}
;
 //# sourceMappingURL=column-builder.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/unique-constraint.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UniqueConstraint": (()=>UniqueConstraint),
    "UniqueConstraintBuilder": (()=>UniqueConstraintBuilder),
    "UniqueOnConstraintBuilder": (()=>UniqueOnConstraintBuilder),
    "unique": (()=>unique),
    "uniqueKeyName": (()=>uniqueKeyName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
;
;
function unique(name) {
    return new UniqueOnConstraintBuilder(name);
}
function uniqueKeyName(table, columns) {
    return `${table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTable"].Symbol.Name]}_${columns.join("_")}_unique`;
}
class UniqueConstraintBuilder {
    constructor(columns, name){
        this.name = name;
        this.columns = columns;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgUniqueConstraintBuilder";
    /** @internal */ columns;
    /** @internal */ nullsNotDistinctConfig = false;
    nullsNotDistinct() {
        this.nullsNotDistinctConfig = true;
        return this;
    }
    /** @internal */ build(table) {
        return new UniqueConstraint(table, this.columns, this.nullsNotDistinctConfig, this.name);
    }
}
class UniqueOnConstraintBuilder {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgUniqueOnConstraintBuilder";
    /** @internal */ name;
    constructor(name){
        this.name = name;
    }
    on(...columns) {
        return new UniqueConstraintBuilder(columns, this.name);
    }
}
class UniqueConstraint {
    constructor(table, columns, nullsNotDistinct, name){
        this.table = table;
        this.columns = columns;
        this.name = name ?? uniqueKeyName(this.table, this.columns.map((column)=>column.name));
        this.nullsNotDistinct = nullsNotDistinct;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgUniqueConstraint";
    columns;
    name;
    nullsNotDistinct = false;
    getName() {
        return this.name;
    }
}
;
 //# sourceMappingURL=unique-constraint.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Column": (()=>Column)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
;
class Column {
    constructor(table, config){
        this.table = table;
        this.config = config;
        this.name = config.name;
        this.notNull = config.notNull;
        this.default = config.default;
        this.defaultFn = config.defaultFn;
        this.onUpdateFn = config.onUpdateFn;
        this.hasDefault = config.hasDefault;
        this.primary = config.primaryKey;
        this.isUnique = config.isUnique;
        this.uniqueName = config.uniqueName;
        this.uniqueType = config.uniqueType;
        this.dataType = config.dataType;
        this.columnType = config.columnType;
        this.generated = config.generated;
        this.generatedIdentity = config.generatedIdentity;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "Column";
    name;
    primary;
    notNull;
    default;
    defaultFn;
    onUpdateFn;
    hasDefault;
    isUnique;
    uniqueName;
    uniqueType;
    dataType;
    columnType;
    enumValues = void 0;
    generated = void 0;
    generatedIdentity = void 0;
    config;
    mapFromDriverValue(value) {
        return value;
    }
    mapToDriverValue(value) {
        return value;
    }
    // ** @internal */
    shouldDisableInsert() {
        return this.config.generated !== void 0 && this.config.generated.type !== "byDefault";
    }
}
;
 //# sourceMappingURL=column.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/utils/array.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "makePgArray": (()=>makePgArray),
    "parsePgArray": (()=>parsePgArray),
    "parsePgNestedArray": (()=>parsePgNestedArray)
});
function parsePgArrayValue(arrayString, startFrom, inQuotes) {
    for(let i = startFrom; i < arrayString.length; i++){
        const char = arrayString[i];
        if (char === "\\") {
            i++;
            continue;
        }
        if (char === '"') {
            return [
                arrayString.slice(startFrom, i).replace(/\\/g, ""),
                i + 1
            ];
        }
        if (inQuotes) {
            continue;
        }
        if (char === "," || char === "}") {
            return [
                arrayString.slice(startFrom, i).replace(/\\/g, ""),
                i
            ];
        }
    }
    return [
        arrayString.slice(startFrom).replace(/\\/g, ""),
        arrayString.length
    ];
}
function parsePgNestedArray(arrayString, startFrom = 0) {
    const result = [];
    let i = startFrom;
    let lastCharIsComma = false;
    while(i < arrayString.length){
        const char = arrayString[i];
        if (char === ",") {
            if (lastCharIsComma || i === startFrom) {
                result.push("");
            }
            lastCharIsComma = true;
            i++;
            continue;
        }
        lastCharIsComma = false;
        if (char === "\\") {
            i += 2;
            continue;
        }
        if (char === '"') {
            const [value2, startFrom2] = parsePgArrayValue(arrayString, i + 1, true);
            result.push(value2);
            i = startFrom2;
            continue;
        }
        if (char === "}") {
            return [
                result,
                i + 1
            ];
        }
        if (char === "{") {
            const [value2, startFrom2] = parsePgNestedArray(arrayString, i + 1);
            result.push(value2);
            i = startFrom2;
            continue;
        }
        const [value, newStartFrom] = parsePgArrayValue(arrayString, i, false);
        result.push(value);
        i = newStartFrom;
    }
    return [
        result,
        i
    ];
}
function parsePgArray(arrayString) {
    const [result] = parsePgNestedArray(arrayString, 1);
    return result;
}
function makePgArray(array) {
    return `{${array.map((item)=>{
        if (Array.isArray(item)) {
            return makePgArray(item);
        }
        if (typeof item === "string") {
            return `"${item.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
        }
        return `${item}`;
    }).join(",")}}`;
}
;
 //# sourceMappingURL=array.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ExtraConfigColumn": (()=>ExtraConfigColumn),
    "IndexedColumn": (()=>IndexedColumn),
    "PgArray": (()=>PgArray),
    "PgArrayBuilder": (()=>PgArrayBuilder),
    "PgColumn": (()=>PgColumn),
    "PgColumnBuilder": (()=>PgColumnBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing-utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/foreign-keys.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2d$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column-builder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$unique$2d$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/unique-constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$utils$2f$array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/utils/array.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
class PgColumnBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2d$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColumnBuilder"] {
    foreignKeyConfigs = [];
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgColumnBuilder";
    array(size) {
        return new PgArrayBuilder(this.config.name, this, size);
    }
    references(ref, actions = {}) {
        this.foreignKeyConfigs.push({
            ref,
            actions
        });
        return this;
    }
    unique(name, config) {
        this.config.isUnique = true;
        this.config.uniqueName = name;
        this.config.uniqueType = config?.nulls;
        return this;
    }
    generatedAlwaysAs(as) {
        this.config.generated = {
            as,
            type: "always",
            mode: "stored"
        };
        return this;
    }
    /** @internal */ buildForeignKeys(column, table) {
        return this.foreignKeyConfigs.map(({ ref, actions })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iife"])((ref2, actions2)=>{
                const builder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ForeignKeyBuilder"](()=>{
                    const foreignColumn = ref2();
                    return {
                        columns: [
                            column
                        ],
                        foreignColumns: [
                            foreignColumn
                        ]
                    };
                });
                if (actions2.onUpdate) {
                    builder.onUpdate(actions2.onUpdate);
                }
                if (actions2.onDelete) {
                    builder.onDelete(actions2.onDelete);
                }
                return builder.build(table);
            }, ref, actions);
        });
    }
    /** @internal */ buildExtraConfigColumn(table) {
        return new ExtraConfigColumn(table, this.config);
    }
}
class PgColumn extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"] {
    constructor(table, config){
        if (!config.uniqueName) {
            config.uniqueName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$unique$2d$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniqueKeyName"])(table, [
                config.name
            ]);
        }
        super(table, config);
        this.table = table;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgColumn";
}
class ExtraConfigColumn extends PgColumn {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "ExtraConfigColumn";
    getSQLType() {
        return this.getSQLType();
    }
    indexConfig = {
        order: this.config.order ?? "asc",
        nulls: this.config.nulls ?? "last",
        opClass: this.config.opClass
    };
    defaultConfig = {
        order: "asc",
        nulls: "last",
        opClass: void 0
    };
    asc() {
        this.indexConfig.order = "asc";
        return this;
    }
    desc() {
        this.indexConfig.order = "desc";
        return this;
    }
    nullsFirst() {
        this.indexConfig.nulls = "first";
        return this;
    }
    nullsLast() {
        this.indexConfig.nulls = "last";
        return this;
    }
    /**
   * ### PostgreSQL documentation quote
   *
   * > An operator class with optional parameters can be specified for each column of an index.
   * The operator class identifies the operators to be used by the index for that column.
   * For example, a B-tree index on four-byte integers would use the int4_ops class;
   * this operator class includes comparison functions for four-byte integers.
   * In practice the default operator class for the column's data type is usually sufficient.
   * The main point of having operator classes is that for some data types, there could be more than one meaningful ordering.
   * For example, we might want to sort a complex-number data type either by absolute value or by real part.
   * We could do this by defining two operator classes for the data type and then selecting the proper class when creating an index.
   * More information about operator classes check:
   *
   * ### Useful links
   * https://www.postgresql.org/docs/current/sql-createindex.html
   *
   * https://www.postgresql.org/docs/current/indexes-opclass.html
   *
   * https://www.postgresql.org/docs/current/xindex.html
   *
   * ### Additional types
   * If you have the `pg_vector` extension installed in your database, you can use the
   * `vector_l2_ops`, `vector_ip_ops`, `vector_cosine_ops`, `vector_l1_ops`, `bit_hamming_ops`, `bit_jaccard_ops`, `halfvec_l2_ops`, `sparsevec_l2_ops` options, which are predefined types.
   *
   * **You can always specify any string you want in the operator class, in case Drizzle doesn't have it natively in its types**
   *
   * @param opClass
   * @returns
   */ op(opClass) {
        this.indexConfig.opClass = opClass;
        return this;
    }
}
class IndexedColumn {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "IndexedColumn";
    constructor(name, type, indexConfig){
        this.name = name;
        this.type = type;
        this.indexConfig = indexConfig;
    }
    name;
    type;
    indexConfig;
}
class PgArrayBuilder extends PgColumnBuilder {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgArrayBuilder";
    constructor(name, baseBuilder, size){
        super(name, "array", "PgArray");
        this.config.baseBuilder = baseBuilder;
        this.config.size = size;
    }
    /** @internal */ build(table) {
        const baseColumn = this.config.baseBuilder.build(table);
        return new PgArray(table, this.config, baseColumn);
    }
}
class PgArray extends PgColumn {
    constructor(table, config, baseColumn, range){
        super(table, config);
        this.baseColumn = baseColumn;
        this.range = range;
        this.size = config.size;
    }
    size;
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgArray";
    getSQLType() {
        return `${this.baseColumn.getSQLType()}[${typeof this.size === "number" ? this.size : ""}]`;
    }
    mapFromDriverValue(value) {
        if (typeof value === "string") {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$utils$2f$array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePgArray"])(value);
        }
        return value.map((v)=>this.baseColumn.mapFromDriverValue(v));
    }
    mapToDriverValue(value, isNestedArray = false) {
        const a = value.map((v)=>v === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(this.baseColumn, PgArray) ? this.baseColumn.mapToDriverValue(v, true) : this.baseColumn.mapToDriverValue(v));
        if (isNestedArray) return a;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$utils$2f$array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makePgArray"])(a);
    }
}
;
 //# sourceMappingURL=common.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/int.common.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgIntColumnBaseBuilder": (()=>PgIntColumnBaseBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
class PgIntColumnBaseBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumnBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgIntColumnBaseBuilder";
    generatedAlwaysAsIdentity(sequence) {
        if (sequence) {
            const { name, ...options } = sequence;
            this.config.generatedIdentity = {
                type: "always",
                sequenceName: name,
                sequenceOptions: options
            };
        } else {
            this.config.generatedIdentity = {
                type: "always"
            };
        }
        this.config.hasDefault = true;
        this.config.notNull = true;
        return this;
    }
    generatedByDefaultAsIdentity(sequence) {
        if (sequence) {
            const { name, ...options } = sequence;
            this.config.generatedIdentity = {
                type: "byDefault",
                sequenceName: name,
                sequenceOptions: options
            };
        } else {
            this.config.generatedIdentity = {
                type: "byDefault"
            };
        }
        this.config.hasDefault = true;
        this.config.notNull = true;
        return this;
    }
}
;
 //# sourceMappingURL=int.common.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgInteger": (()=>PgInteger),
    "PgIntegerBuilder": (()=>PgIntegerBuilder),
    "integer": (()=>integer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$int$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/int.common.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
;
class PgIntegerBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$int$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgIntColumnBaseBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgIntegerBuilder";
    constructor(name){
        super(name, "number", "PgInteger");
    }
    /** @internal */ build(table) {
        return new PgInteger(table, this.config);
    }
}
class PgInteger extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgInteger";
    getSQLType() {
        return "integer";
    }
    mapFromDriverValue(value) {
        if (typeof value === "string") {
            return Number.parseInt(value);
        }
        return value;
    }
}
function integer(name) {
    return new PgIntegerBuilder(name);
}
;
 //# sourceMappingURL=integer.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgVarchar": (()=>PgVarchar),
    "PgVarcharBuilder": (()=>PgVarcharBuilder),
    "varchar": (()=>varchar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
class PgVarcharBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumnBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgVarcharBuilder";
    constructor(name, config){
        super(name, "string", "PgVarchar");
        this.config.length = config.length;
        this.config.enumValues = config.enum;
    }
    /** @internal */ build(table) {
        return new PgVarchar(table, this.config);
    }
}
class PgVarchar extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgVarchar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
        return this.length === void 0 ? `varchar` : `varchar(${this.length})`;
    }
}
function varchar(name, config = {}) {
    return new PgVarcharBuilder(name, config);
}
;
 //# sourceMappingURL=varchar.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/view-common.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ViewBaseConfig": (()=>ViewBaseConfig)
});
const ViewBaseConfig = Symbol.for("drizzle:ViewBaseConfig");
;
 //# sourceMappingURL=view-common.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/subquery.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Subquery": (()=>Subquery),
    "WithSubquery": (()=>WithSubquery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
;
class Subquery {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "Subquery";
    constructor(sql, selection, alias, isWith = false){
        this._ = {
            brand: "Subquery",
            sql,
            selectedFields: selection,
            alias,
            isWith
        };
    }
}
class WithSubquery extends Subquery {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "WithSubquery";
}
;
 //# sourceMappingURL=subquery.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/version.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// package.json
__turbopack_esm__({
    "compatibilityVersion": (()=>compatibilityVersion),
    "npmVersion": (()=>version)
});
var version = "0.33.0";
// src/version.ts
var compatibilityVersion = 7;
;
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "tracer": (()=>tracer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$version$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/version.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing-utils.js [app-route] (ecmascript)");
;
;
let otel;
let rawTracer;
const tracer = {
    startActiveSpan (name, fn) {
        if (!otel) {
            return fn();
        }
        if (!rawTracer) {
            rawTracer = otel.trace.getTracer("drizzle-orm", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$version$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["npmVersion"]);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iife"])((otel2, rawTracer2)=>rawTracer2.startActiveSpan(name, (span)=>{
                try {
                    return fn(span);
                } catch (e) {
                    span.setStatus({
                        code: otel2.SpanStatusCode.ERROR,
                        message: e instanceof Error ? e.message : "Unknown error"
                    });
                    throw e;
                } finally{
                    span.end();
                }
            }), otel, rawTracer);
    }
};
;
 //# sourceMappingURL=tracing.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/enum.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgEnumColumn": (()=>PgEnumColumn),
    "PgEnumColumnBuilder": (()=>PgEnumColumnBuilder),
    "isPgEnum": (()=>isPgEnum),
    "pgEnum": (()=>pgEnum),
    "pgEnumWithSchema": (()=>pgEnumWithSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
const isPgEnumSym = Symbol.for("drizzle:isPgEnum");
function isPgEnum(obj) {
    return !!obj && typeof obj === "function" && isPgEnumSym in obj && obj[isPgEnumSym] === true;
}
class PgEnumColumnBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumnBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgEnumColumnBuilder";
    constructor(name, enumInstance){
        super(name, "string", "PgEnumColumn");
        this.config.enum = enumInstance;
    }
    /** @internal */ build(table) {
        return new PgEnumColumn(table, this.config);
    }
}
class PgEnumColumn extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgEnumColumn";
    enum = this.config.enum;
    enumValues = this.config.enum.enumValues;
    constructor(table, config){
        super(table, config);
        this.enum = config.enum;
    }
    getSQLType() {
        return this.enum.enumName;
    }
}
function pgEnum(enumName, values) {
    return pgEnumWithSchema(enumName, values, void 0);
}
function pgEnumWithSchema(enumName, values, schema) {
    const enumInstance = Object.assign((name)=>new PgEnumColumnBuilder(name, enumInstance), {
        enumName,
        enumValues: values,
        schema,
        [isPgEnumSym]: true
    });
    return enumInstance;
}
;
 //# sourceMappingURL=enum.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FakePrimitiveParam": (()=>FakePrimitiveParam),
    "Name": (()=>Name),
    "Param": (()=>Param),
    "Placeholder": (()=>Placeholder),
    "SQL": (()=>SQL),
    "StringChunk": (()=>StringChunk),
    "View": (()=>View),
    "fillPlaceholders": (()=>fillPlaceholders),
    "isDriverValueEncoder": (()=>isDriverValueEncoder),
    "isSQLWrapper": (()=>isSQLWrapper),
    "name": (()=>name),
    "noopDecoder": (()=>noopDecoder),
    "noopEncoder": (()=>noopEncoder),
    "noopMapper": (()=>noopMapper),
    "param": (()=>param),
    "placeholder": (()=>placeholder),
    "sql": (()=>sql)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/view-common.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/subquery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/enum.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
class FakePrimitiveParam {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "FakePrimitiveParam";
}
function isSQLWrapper(value) {
    return value !== null && value !== void 0 && typeof value.getSQL === "function";
}
function mergeQueries(queries) {
    const result = {
        sql: "",
        params: []
    };
    for (const query of queries){
        result.sql += query.sql;
        result.params.push(...query.params);
        if (query.typings?.length) {
            if (!result.typings) {
                result.typings = [];
            }
            result.typings.push(...query.typings);
        }
    }
    return result;
}
class StringChunk {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "StringChunk";
    value;
    constructor(value){
        this.value = Array.isArray(value) ? value : [
            value
        ];
    }
    getSQL() {
        return new SQL([
            this
        ]);
    }
}
class SQL {
    constructor(queryChunks){
        this.queryChunks = queryChunks;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "SQL";
    /** @internal */ decoder = noopDecoder;
    shouldInlineParams = false;
    append(query) {
        this.queryChunks.push(...query.queryChunks);
        return this;
    }
    toQuery(config) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.buildSQL", (span)=>{
            const query = this.buildQueryFromSourceParams(this.queryChunks, config);
            span?.setAttributes({
                "drizzle.query.text": query.sql,
                "drizzle.query.params": JSON.stringify(query.params)
            });
            return query;
        });
    }
    buildQueryFromSourceParams(chunks, _config) {
        const config = Object.assign({}, _config, {
            inlineParams: _config.inlineParams || this.shouldInlineParams,
            paramStartIndex: _config.paramStartIndex || {
                value: 0
            }
        });
        const { escapeName, escapeParam, prepareTyping, inlineParams, paramStartIndex } = config;
        return mergeQueries(chunks.map((chunk)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, StringChunk)) {
                return {
                    sql: chunk.value.join(""),
                    params: []
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, Name)) {
                return {
                    sql: escapeName(chunk.value),
                    params: []
                };
            }
            if (chunk === void 0) {
                return {
                    sql: "",
                    params: []
                };
            }
            if (Array.isArray(chunk)) {
                const result = [
                    new StringChunk("(")
                ];
                for (const [i, p] of chunk.entries()){
                    result.push(p);
                    if (i < chunk.length - 1) {
                        result.push(new StringChunk(", "));
                    }
                }
                result.push(new StringChunk(")"));
                return this.buildQueryFromSourceParams(result, config);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, SQL)) {
                return this.buildQueryFromSourceParams(chunk.queryChunks, {
                    ...config,
                    inlineParams: inlineParams || chunk.shouldInlineParams
                });
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"])) {
                const schemaName = chunk[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Schema];
                const tableName = chunk[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name];
                return {
                    sql: schemaName === void 0 ? escapeName(tableName) : escapeName(schemaName) + "." + escapeName(tableName),
                    params: []
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"])) {
                if (_config.invokeSource === "indexes") {
                    return {
                        sql: escapeName(chunk.name),
                        params: []
                    };
                }
                return {
                    sql: escapeName(chunk.table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name]) + "." + escapeName(chunk.name),
                    params: []
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, View)) {
                const schemaName = chunk[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].schema;
                const viewName = chunk[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].name;
                return {
                    sql: schemaName === void 0 ? escapeName(viewName) : escapeName(schemaName) + "." + escapeName(viewName),
                    params: []
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, Param)) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk.value, Placeholder)) {
                    return {
                        sql: escapeParam(paramStartIndex.value++, chunk),
                        params: [
                            chunk
                        ],
                        typings: [
                            "none"
                        ]
                    };
                }
                const mappedValue = chunk.value === null ? null : chunk.encoder.mapToDriverValue(chunk.value);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(mappedValue, SQL)) {
                    return this.buildQueryFromSourceParams([
                        mappedValue
                    ], config);
                }
                if (inlineParams) {
                    return {
                        sql: this.mapInlineParam(mappedValue, config),
                        params: []
                    };
                }
                let typings = [
                    "none"
                ];
                if (prepareTyping) {
                    typings = [
                        prepareTyping(chunk.encoder)
                    ];
                }
                return {
                    sql: escapeParam(paramStartIndex.value++, mappedValue),
                    params: [
                        mappedValue
                    ],
                    typings
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, Placeholder)) {
                return {
                    sql: escapeParam(paramStartIndex.value++, chunk),
                    params: [
                        chunk
                    ],
                    typings: [
                        "none"
                    ]
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, SQL.Aliased) && chunk.fieldAlias !== void 0) {
                return {
                    sql: escapeName(chunk.fieldAlias),
                    params: []
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subquery"])) {
                if (chunk._.isWith) {
                    return {
                        sql: escapeName(chunk._.alias),
                        params: []
                    };
                }
                return this.buildQueryFromSourceParams([
                    new StringChunk("("),
                    chunk._.sql,
                    new StringChunk(") "),
                    new Name(chunk._.alias)
                ], config);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPgEnum"])(chunk)) {
                if (chunk.schema) {
                    return {
                        sql: escapeName(chunk.schema) + "." + escapeName(chunk.enumName),
                        params: []
                    };
                }
                return {
                    sql: escapeName(chunk.enumName),
                    params: []
                };
            }
            if (isSQLWrapper(chunk)) {
                if (chunk.shouldOmitSQLParens?.()) {
                    return this.buildQueryFromSourceParams([
                        chunk.getSQL()
                    ], config);
                }
                return this.buildQueryFromSourceParams([
                    new StringChunk("("),
                    chunk.getSQL(),
                    new StringChunk(")")
                ], config);
            }
            if (inlineParams) {
                return {
                    sql: this.mapInlineParam(chunk, config),
                    params: []
                };
            }
            return {
                sql: escapeParam(paramStartIndex.value++, chunk),
                params: [
                    chunk
                ],
                typings: [
                    "none"
                ]
            };
        }));
    }
    mapInlineParam(chunk, { escapeString }) {
        if (chunk === null) {
            return "null";
        }
        if (typeof chunk === "number" || typeof chunk === "boolean") {
            return chunk.toString();
        }
        if (typeof chunk === "string") {
            return escapeString(chunk);
        }
        if (typeof chunk === "object") {
            const mappedValueAsString = chunk.toString();
            if (mappedValueAsString === "[object Object]") {
                return escapeString(JSON.stringify(chunk));
            }
            return escapeString(mappedValueAsString);
        }
        throw new Error("Unexpected param value: " + chunk);
    }
    getSQL() {
        return this;
    }
    as(alias) {
        if (alias === void 0) {
            return this;
        }
        return new SQL.Aliased(this, alias);
    }
    mapWith(decoder) {
        this.decoder = typeof decoder === "function" ? {
            mapFromDriverValue: decoder
        } : decoder;
        return this;
    }
    inlineParams() {
        this.shouldInlineParams = true;
        return this;
    }
    /**
   * This method is used to conditionally include a part of the query.
   *
   * @param condition - Condition to check
   * @returns itself if the condition is `true`, otherwise `undefined`
   */ if(condition) {
        return condition ? this : void 0;
    }
}
class Name {
    constructor(value){
        this.value = value;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "Name";
    brand;
    getSQL() {
        return new SQL([
            this
        ]);
    }
}
function name(value) {
    return new Name(value);
}
function isDriverValueEncoder(value) {
    return typeof value === "object" && value !== null && "mapToDriverValue" in value && typeof value.mapToDriverValue === "function";
}
const noopDecoder = {
    mapFromDriverValue: (value)=>value
};
const noopEncoder = {
    mapToDriverValue: (value)=>value
};
const noopMapper = {
    ...noopDecoder,
    ...noopEncoder
};
class Param {
    /**
   * @param value - Parameter value
   * @param encoder - Encoder to convert the value to a driver parameter
   */ constructor(value, encoder = noopEncoder){
        this.value = value;
        this.encoder = encoder;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "Param";
    brand;
    getSQL() {
        return new SQL([
            this
        ]);
    }
}
function param(value, encoder) {
    return new Param(value, encoder);
}
function sql(strings, ...params) {
    const queryChunks = [];
    if (params.length > 0 || strings.length > 0 && strings[0] !== "") {
        queryChunks.push(new StringChunk(strings[0]));
    }
    for (const [paramIndex, param2] of params.entries()){
        queryChunks.push(param2, new StringChunk(strings[paramIndex + 1]));
    }
    return new SQL(queryChunks);
}
((sql2)=>{
    function empty() {
        return new SQL([]);
    }
    sql2.empty = empty;
    function fromList(list) {
        return new SQL(list);
    }
    sql2.fromList = fromList;
    function raw(str) {
        return new SQL([
            new StringChunk(str)
        ]);
    }
    sql2.raw = raw;
    function join(chunks, separator) {
        const result = [];
        for (const [i, chunk] of chunks.entries()){
            if (i > 0 && separator !== void 0) {
                result.push(separator);
            }
            result.push(chunk);
        }
        return new SQL(result);
    }
    sql2.join = join;
    function identifier(value) {
        return new Name(value);
    }
    sql2.identifier = identifier;
    function placeholder2(name2) {
        return new Placeholder(name2);
    }
    sql2.placeholder = placeholder2;
    function param2(value, encoder) {
        return new Param(value, encoder);
    }
    sql2.param = param2;
})(sql || (sql = {}));
((SQL2)=>{
    class Aliased {
        constructor(sql2, fieldAlias){
            this.sql = sql2;
            this.fieldAlias = fieldAlias;
        }
        static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "SQL.Aliased";
        /** @internal */ isSelectionField = false;
        getSQL() {
            return this.sql;
        }
        /** @internal */ clone() {
            return new Aliased(this.sql, this.fieldAlias);
        }
    }
    SQL2.Aliased = Aliased;
})(SQL || (SQL = {}));
class Placeholder {
    constructor(name2){
        this.name = name2;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "Placeholder";
    getSQL() {
        return new SQL([
            this
        ]);
    }
}
function placeholder(name2) {
    return new Placeholder(name2);
}
function fillPlaceholders(params, values) {
    return params.map((p)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(p, Placeholder)) {
            if (!(p.name in values)) {
                throw new Error(`No value for placeholder "${p.name}" was provided`);
            }
            return values[p.name];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(p, Param) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(p.value, Placeholder)) {
            if (!(p.value.name in values)) {
                throw new Error(`No value for placeholder "${p.value.name}" was provided`);
            }
            return p.encoder.mapToDriverValue(values[p.value.name]);
        }
        return p;
    });
}
class View {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "View";
    /** @internal */ [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]];
    constructor({ name: name2, schema, selectedFields, query }){
        this[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]] = {
            name: name2,
            originalName: name2,
            schema,
            selectedFields,
            query,
            isExisting: !query,
            isAlias: false
        };
    }
    getSQL() {
        return new SQL([
            this
        ]);
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"].prototype.getSQL = function() {
    return new SQL([
        this
    ]);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].prototype.getSQL = function() {
    return new SQL([
        this
    ]);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subquery"].prototype.getSQL = function() {
    return new SQL([
        this
    ]);
};
;
 //# sourceMappingURL=sql.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/date.common.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgDateColumnBaseBuilder": (()=>PgDateColumnBaseBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
;
class PgDateColumnBaseBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumnBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgDateColumnBaseBuilder";
    defaultNow() {
        return this.default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`now()`);
    }
}
;
 //# sourceMappingURL=date.common.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgTimestamp": (()=>PgTimestamp),
    "PgTimestampBuilder": (()=>PgTimestampBuilder),
    "PgTimestampString": (()=>PgTimestampString),
    "PgTimestampStringBuilder": (()=>PgTimestampStringBuilder),
    "timestamp": (()=>timestamp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/date.common.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
;
class PgTimestampBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDateColumnBaseBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgTimestampBuilder";
    constructor(name, withTimezone, precision){
        super(name, "date", "PgTimestamp");
        this.config.withTimezone = withTimezone;
        this.config.precision = precision;
    }
    /** @internal */ build(table) {
        return new PgTimestamp(table, this.config);
    }
}
class PgTimestamp extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgTimestamp";
    withTimezone;
    precision;
    constructor(table, config){
        super(table, config);
        this.withTimezone = config.withTimezone;
        this.precision = config.precision;
    }
    getSQLType() {
        const precision = this.precision === void 0 ? "" : ` (${this.precision})`;
        return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
    }
    mapFromDriverValue = (value)=>{
        return new Date(this.withTimezone ? value : value + "+0000");
    };
    mapToDriverValue = (value)=>{
        return value.toISOString();
    };
}
class PgTimestampStringBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDateColumnBaseBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgTimestampStringBuilder";
    constructor(name, withTimezone, precision){
        super(name, "string", "PgTimestampString");
        this.config.withTimezone = withTimezone;
        this.config.precision = precision;
    }
    /** @internal */ build(table) {
        return new PgTimestampString(table, this.config);
    }
}
class PgTimestampString extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgTimestampString";
    withTimezone;
    precision;
    constructor(table, config){
        super(table, config);
        this.withTimezone = config.withTimezone;
        this.precision = config.precision;
    }
    getSQLType() {
        const precision = this.precision === void 0 ? "" : `(${this.precision})`;
        return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
    }
}
function timestamp(name, config = {}) {
    if (config.mode === "string") {
        return new PgTimestampStringBuilder(name, config.withTimezone ?? false, config.precision);
    }
    return new PgTimestampBuilder(name, config.withTimezone ?? false, config.precision);
}
;
 //# sourceMappingURL=timestamp.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/indexes.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Index": (()=>Index),
    "IndexBuilder": (()=>IndexBuilder),
    "IndexBuilderOn": (()=>IndexBuilderOn),
    "index": (()=>index),
    "uniqueIndex": (()=>uniqueIndex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
;
class IndexBuilderOn {
    constructor(unique, name){
        this.unique = unique;
        this.name = name;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgIndexBuilderOn";
    on(...columns) {
        return new IndexBuilder(columns.map((it)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(it, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
                return it;
            }
            it = it;
            const clonedIndexedColumn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IndexedColumn"](it.name, it.columnType, it.indexConfig);
            it.indexConfig = JSON.parse(JSON.stringify(it.defaultConfig));
            return clonedIndexedColumn;
        }), this.unique, false, this.name);
    }
    onOnly(...columns) {
        return new IndexBuilder(columns.map((it)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(it, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
                return it;
            }
            it = it;
            const clonedIndexedColumn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IndexedColumn"](it.name, it.columnType, it.indexConfig);
            it.indexConfig = it.defaultConfig;
            return clonedIndexedColumn;
        }), this.unique, true, this.name);
    }
    /**
   * Specify what index method to use. Choices are `btree`, `hash`, `gist`, `spgist`, `gin`, `brin`, or user-installed access methods like `bloom`. The default method is `btree.
   *
   * If you have the `pg_vector` extension installed in your database, you can use the `hnsw` and `ivfflat` options, which are predefined types.
   *
   * **You can always specify any string you want in the method, in case Drizzle doesn't have it natively in its types**
   *
   * @param method The name of the index method to be used
   * @param columns
   * @returns
   */ using(method, ...columns) {
        return new IndexBuilder(columns.map((it)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(it, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
                return it;
            }
            it = it;
            const clonedIndexedColumn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IndexedColumn"](it.name, it.columnType, it.indexConfig);
            it.indexConfig = JSON.parse(JSON.stringify(it.defaultConfig));
            return clonedIndexedColumn;
        }), this.unique, true, this.name, method);
    }
}
class IndexBuilder {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgIndexBuilder";
    /** @internal */ config;
    constructor(columns, unique, only, name, method = "btree"){
        this.config = {
            name,
            columns,
            unique,
            only,
            method
        };
    }
    concurrently() {
        this.config.concurrently = true;
        return this;
    }
    with(obj) {
        this.config.with = obj;
        return this;
    }
    where(condition) {
        this.config.where = condition;
        return this;
    }
    /** @internal */ build(table) {
        return new Index(this.config, table);
    }
}
class Index {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgIndex";
    config;
    constructor(config, table){
        this.config = {
            ...config,
            table
        };
    }
}
function index(name) {
    return new IndexBuilderOn(false, name);
}
function uniqueIndex(name) {
    return new IndexBuilderOn(true, name);
}
;
 //# sourceMappingURL=indexes.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgUUID": (()=>PgUUID),
    "PgUUIDBuilder": (()=>PgUUIDBuilder),
    "uuid": (()=>uuid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
;
class PgUUIDBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumnBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgUUIDBuilder";
    constructor(name){
        super(name, "string", "PgUUID");
    }
    /**
   * Adds `default gen_random_uuid()` to the column definition.
   */ defaultRandom() {
        return this.default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`gen_random_uuid()`);
    }
    /** @internal */ build(table) {
        return new PgUUID(table, this.config);
    }
}
class PgUUID extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgUUID";
    getSQLType() {
        return "uuid";
    }
}
function uuid(name) {
    return new PgUUIDBuilder(name);
}
;
 //# sourceMappingURL=uuid.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/utils.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "applyMixins": (()=>applyMixins),
    "getTableColumns": (()=>getTableColumns),
    "getTableLikeName": (()=>getTableLikeName),
    "haveSameKeys": (()=>haveSameKeys),
    "mapResultRow": (()=>mapResultRow),
    "mapUpdateSet": (()=>mapUpdateSet),
    "orderSelectedFields": (()=>orderSelectedFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/subquery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/view-common.js [app-route] (ecmascript)");
;
;
;
;
;
;
function mapResultRow(columns, row, joinsNotNullableMap) {
    const nullifyMap = {};
    const result = columns.reduce((result2, { path, field }, columnIndex)=>{
        let decoder;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"])) {
            decoder = field;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
            decoder = field.decoder;
        } else {
            decoder = field.sql.decoder;
        }
        let node = result2;
        for (const [pathChunkIndex, pathChunk] of path.entries()){
            if (pathChunkIndex < path.length - 1) {
                if (!(pathChunk in node)) {
                    node[pathChunk] = {};
                }
                node = node[pathChunk];
            } else {
                const rawValue = row[columnIndex];
                const value = node[pathChunk] = rawValue === null ? null : decoder.mapFromDriverValue(rawValue);
                if (joinsNotNullableMap && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"]) && path.length === 2) {
                    const objectName = path[0];
                    if (!(objectName in nullifyMap)) {
                        nullifyMap[objectName] = value === null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableName"])(field.table) : false;
                    } else if (typeof nullifyMap[objectName] === "string" && nullifyMap[objectName] !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableName"])(field.table)) {
                        nullifyMap[objectName] = false;
                    }
                }
            }
        }
        return result2;
    }, {});
    if (joinsNotNullableMap && Object.keys(nullifyMap).length > 0) {
        for (const [objectName, tableName] of Object.entries(nullifyMap)){
            if (typeof tableName === "string" && !joinsNotNullableMap[tableName]) {
                result[objectName] = null;
            }
        }
    }
    return result;
}
function orderSelectedFields(fields, pathPrefix) {
    return Object.entries(fields).reduce((result, [name, field])=>{
        if (typeof name !== "string") {
            return result;
        }
        const newPath = pathPrefix ? [
            ...pathPrefix,
            name
        ] : [
            name
        ];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"].Aliased)) {
            result.push({
                path: newPath,
                field
            });
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"])) {
            result.push(...orderSelectedFields(field[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns], newPath));
        } else {
            result.push(...orderSelectedFields(field, newPath));
        }
        return result;
    }, []);
}
function haveSameKeys(left, right) {
    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);
    if (leftKeys.length !== rightKeys.length) {
        return false;
    }
    for (const [index, key] of leftKeys.entries()){
        if (key !== rightKeys[index]) {
            return false;
        }
    }
    return true;
}
function mapUpdateSet(table, values) {
    const entries = Object.entries(values).filter(([, value])=>value !== void 0).map(([key, value])=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
            return [
                key,
                value
            ];
        } else {
            return [
                key,
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Param"](value, table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns][key])
            ];
        }
    });
    if (entries.length === 0) {
        throw new Error("No values to set");
    }
    return Object.fromEntries(entries);
}
function applyMixins(baseClass, extendedClasses) {
    for (const extendedClass of extendedClasses){
        for (const name of Object.getOwnPropertyNames(extendedClass.prototype)){
            if (name === "constructor") continue;
            Object.defineProperty(baseClass.prototype, name, Object.getOwnPropertyDescriptor(extendedClass.prototype, name) || /* @__PURE__ */ Object.create(null));
        }
    }
}
function getTableColumns(table) {
    return table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns];
}
function getTableLikeName(table) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subquery"]) ? table._.alias : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["View"]) ? table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"]) ? void 0 : table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.IsAlias] ? table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name] : table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.BaseName];
}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/view-base.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgViewBase": (()=>PgViewBase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
;
;
class PgViewBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["View"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgViewBase";
}
;
 //# sourceMappingURL=view-base.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/jsonb.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgJsonb": (()=>PgJsonb),
    "PgJsonbBuilder": (()=>PgJsonbBuilder),
    "jsonb": (()=>jsonb)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
class PgJsonbBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumnBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgJsonbBuilder";
    constructor(name){
        super(name, "json", "PgJsonb");
    }
    /** @internal */ build(table) {
        return new PgJsonb(table, this.config);
    }
}
class PgJsonb extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgJsonb";
    constructor(table, config){
        super(table, config);
    }
    getSQLType() {
        return "jsonb";
    }
    mapToDriverValue(value) {
        return JSON.stringify(value);
    }
    mapFromDriverValue(value) {
        if (typeof value === "string") {
            try {
                return JSON.parse(value);
            } catch  {
                return value;
            }
        }
        return value;
    }
}
function jsonb(name) {
    return new PgJsonbBuilder(name);
}
;
 //# sourceMappingURL=jsonb.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/json.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgJson": (()=>PgJson),
    "PgJsonBuilder": (()=>PgJsonBuilder),
    "json": (()=>json)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
class PgJsonBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumnBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgJsonBuilder";
    constructor(name){
        super(name, "json", "PgJson");
    }
    /** @internal */ build(table) {
        return new PgJson(table, this.config);
    }
}
class PgJson extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgJson";
    constructor(table, config){
        super(table, config);
    }
    getSQLType() {
        return "json";
    }
    mapToDriverValue(value) {
        return JSON.stringify(value);
    }
    mapFromDriverValue(value) {
        if (typeof value === "string") {
            try {
                return JSON.parse(value);
            } catch  {
                return value;
            }
        }
        return value;
    }
}
function json(name) {
    return new PgJsonBuilder(name);
}
;
 //# sourceMappingURL=json.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgNumeric": (()=>PgNumeric),
    "PgNumericBuilder": (()=>PgNumericBuilder),
    "decimal": (()=>decimal),
    "numeric": (()=>numeric)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
class PgNumericBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumnBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgNumericBuilder";
    constructor(name, precision, scale){
        super(name, "string", "PgNumeric");
        this.config.precision = precision;
        this.config.scale = scale;
    }
    /** @internal */ build(table) {
        return new PgNumeric(table, this.config);
    }
}
class PgNumeric extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgNumeric";
    precision;
    scale;
    constructor(table, config){
        super(table, config);
        this.precision = config.precision;
        this.scale = config.scale;
    }
    getSQLType() {
        if (this.precision !== void 0 && this.scale !== void 0) {
            return `numeric(${this.precision}, ${this.scale})`;
        } else if (this.precision === void 0) {
            return "numeric";
        } else {
            return `numeric(${this.precision})`;
        }
    }
}
function numeric(name, config) {
    return new PgNumericBuilder(name, config?.precision, config?.scale);
}
const decimal = numeric;
;
 //# sourceMappingURL=numeric.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/time.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgTime": (()=>PgTime),
    "PgTimeBuilder": (()=>PgTimeBuilder),
    "time": (()=>time)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/date.common.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
;
class PgTimeBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDateColumnBaseBuilder"] {
    constructor(name, withTimezone, precision){
        super(name, "string", "PgTime");
        this.withTimezone = withTimezone;
        this.precision = precision;
        this.config.withTimezone = withTimezone;
        this.config.precision = precision;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgTimeBuilder";
    /** @internal */ build(table) {
        return new PgTime(table, this.config);
    }
}
class PgTime extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgTime";
    withTimezone;
    precision;
    constructor(table, config){
        super(table, config);
        this.withTimezone = config.withTimezone;
        this.precision = config.precision;
    }
    getSQLType() {
        const precision = this.precision === void 0 ? "" : `(${this.precision})`;
        return `time${precision}${this.withTimezone ? " with time zone" : ""}`;
    }
}
function time(name, config = {}) {
    return new PgTimeBuilder(name, config.withTimezone ?? false, config.precision);
}
;
 //# sourceMappingURL=time.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/date.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgDate": (()=>PgDate),
    "PgDateBuilder": (()=>PgDateBuilder),
    "PgDateString": (()=>PgDateString),
    "PgDateStringBuilder": (()=>PgDateStringBuilder),
    "date": (()=>date)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/date.common.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
;
;
;
class PgDateBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDateColumnBaseBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgDateBuilder";
    constructor(name){
        super(name, "date", "PgDate");
    }
    /** @internal */ build(table) {
        return new PgDate(table, this.config);
    }
}
class PgDate extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgDate";
    getSQLType() {
        return "date";
    }
    mapFromDriverValue(value) {
        return new Date(value);
    }
    mapToDriverValue(value) {
        return value.toISOString();
    }
}
class PgDateStringBuilder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDateColumnBaseBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgDateStringBuilder";
    constructor(name){
        super(name, "string", "PgDateString");
    }
    /** @internal */ build(table) {
        return new PgDateString(table, this.config);
    }
}
class PgDateString extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgDateString";
    getSQLType() {
        return "date";
    }
}
function date(name, config) {
    if (config?.mode === "date") {
        return new PgDateBuilder(name);
    }
    return new PgDateStringBuilder(name);
}
;
 //# sourceMappingURL=date.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/alias.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ColumnAliasProxyHandler": (()=>ColumnAliasProxyHandler),
    "RelationTableAliasProxyHandler": (()=>RelationTableAliasProxyHandler),
    "TableAliasProxyHandler": (()=>TableAliasProxyHandler),
    "aliasedRelation": (()=>aliasedRelation),
    "aliasedTable": (()=>aliasedTable),
    "aliasedTableColumn": (()=>aliasedTableColumn),
    "mapColumnsInAliasedSQLToAlias": (()=>mapColumnsInAliasedSQLToAlias),
    "mapColumnsInSQLToAlias": (()=>mapColumnsInSQLToAlias)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/view-common.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
;
;
;
;
;
class ColumnAliasProxyHandler {
    constructor(table){
        this.table = table;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "ColumnAliasProxyHandler";
    get(columnObj, prop) {
        if (prop === "table") {
            return this.table;
        }
        return columnObj[prop];
    }
}
class TableAliasProxyHandler {
    constructor(alias, replaceOriginalName){
        this.alias = alias;
        this.replaceOriginalName = replaceOriginalName;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "TableAliasProxyHandler";
    get(target, prop) {
        if (prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.IsAlias) {
            return true;
        }
        if (prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name) {
            return this.alias;
        }
        if (this.replaceOriginalName && prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.OriginalName) {
            return this.alias;
        }
        if (prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]) {
            return {
                ...target[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]],
                name: this.alias,
                isAlias: true
            };
        }
        if (prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns) {
            const columns = target[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns];
            if (!columns) {
                return columns;
            }
            const proxiedColumns = {};
            Object.keys(columns).map((key)=>{
                proxiedColumns[key] = new Proxy(columns[key], new ColumnAliasProxyHandler(new Proxy(target, this)));
            });
            return proxiedColumns;
        }
        const value = target[prop];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"])) {
            return new Proxy(value, new ColumnAliasProxyHandler(new Proxy(target, this)));
        }
        return value;
    }
}
class RelationTableAliasProxyHandler {
    constructor(alias){
        this.alias = alias;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "RelationTableAliasProxyHandler";
    get(target, prop) {
        if (prop === "sourceTable") {
            return aliasedTable(target.sourceTable, this.alias);
        }
        return target[prop];
    }
}
function aliasedTable(table, tableAlias) {
    return new Proxy(table, new TableAliasProxyHandler(tableAlias, false));
}
function aliasedRelation(relation, tableAlias) {
    return new Proxy(relation, new RelationTableAliasProxyHandler(tableAlias));
}
function aliasedTableColumn(column, tableAlias) {
    return new Proxy(column, new ColumnAliasProxyHandler(new Proxy(column.table, new TableAliasProxyHandler(tableAlias, false))));
}
function mapColumnsInAliasedSQLToAlias(query, alias) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"].Aliased(mapColumnsInSQLToAlias(query.sql, alias), query.fieldAlias);
}
function mapColumnsInSQLToAlias(query, alias) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(query.queryChunks.map((c)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(c, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"])) {
            return aliasedTableColumn(c, alias);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(c, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
            return mapColumnsInSQLToAlias(c, alias);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(c, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"].Aliased)) {
            return mapColumnsInAliasedSQLToAlias(c, alias);
        }
        return c;
    }));
}
;
 //# sourceMappingURL=alias.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "and": (()=>and),
    "arrayContained": (()=>arrayContained),
    "arrayContains": (()=>arrayContains),
    "arrayOverlaps": (()=>arrayOverlaps),
    "between": (()=>between),
    "bindIfParam": (()=>bindIfParam),
    "eq": (()=>eq),
    "exists": (()=>exists),
    "gt": (()=>gt),
    "gte": (()=>gte),
    "ilike": (()=>ilike),
    "inArray": (()=>inArray),
    "isNotNull": (()=>isNotNull),
    "isNull": (()=>isNull),
    "like": (()=>like),
    "lt": (()=>lt),
    "lte": (()=>lte),
    "ne": (()=>ne),
    "not": (()=>not),
    "notBetween": (()=>notBetween),
    "notExists": (()=>notExists),
    "notIlike": (()=>notIlike),
    "notInArray": (()=>notInArray),
    "notLike": (()=>notLike),
    "or": (()=>or)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
;
;
;
;
function bindIfParam(value, column) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDriverValueEncoder"])(column) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSQLWrapper"])(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Param"]) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Placeholder"]) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"]) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"]) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["View"])) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Param"](value, column);
    }
    return value;
}
const eq = (left, right)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${left} = ${bindIfParam(right, left)}`;
};
const ne = (left, right)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${left} <> ${bindIfParam(right, left)}`;
};
function and(...unfilteredConditions) {
    const conditions = unfilteredConditions.filter((c)=>c !== void 0);
    if (conditions.length === 0) {
        return void 0;
    }
    if (conditions.length === 1) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"](conditions);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"]([
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringChunk"]("("),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(conditions, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringChunk"](" and ")),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringChunk"](")")
    ]);
}
function or(...unfilteredConditions) {
    const conditions = unfilteredConditions.filter((c)=>c !== void 0);
    if (conditions.length === 0) {
        return void 0;
    }
    if (conditions.length === 1) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"](conditions);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"]([
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringChunk"]("("),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(conditions, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringChunk"](" or ")),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringChunk"](")")
    ]);
}
function not(condition) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`not ${condition}`;
}
const gt = (left, right)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${left} > ${bindIfParam(right, left)}`;
};
const gte = (left, right)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${left} >= ${bindIfParam(right, left)}`;
};
const lt = (left, right)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${left} < ${bindIfParam(right, left)}`;
};
const lte = (left, right)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${left} <= ${bindIfParam(right, left)}`;
};
function inArray(column, values) {
    if (Array.isArray(values)) {
        if (values.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`false`;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} in ${values.map((v)=>bindIfParam(v, column))}`;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} in ${bindIfParam(values, column)}`;
}
function notInArray(column, values) {
    if (Array.isArray(values)) {
        if (values.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`true`;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} not in ${values.map((v)=>bindIfParam(v, column))}`;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} not in ${bindIfParam(values, column)}`;
}
function isNull(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${value} is null`;
}
function isNotNull(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${value} is not null`;
}
function exists(subquery) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`exists ${subquery}`;
}
function notExists(subquery) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`not exists ${subquery}`;
}
function between(column, min, max) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} between ${bindIfParam(min, column)} and ${bindIfParam(max, column)}`;
}
function notBetween(column, min, max) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} not between ${bindIfParam(min, column)} and ${bindIfParam(max, column)}`;
}
function like(column, value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} like ${value}`;
}
function notLike(column, value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} not like ${value}`;
}
function ilike(column, value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} ilike ${value}`;
}
function notIlike(column, value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} not ilike ${value}`;
}
function arrayContains(column, values) {
    if (Array.isArray(values)) {
        if (values.length === 0) {
            throw new Error("arrayContains requires at least one value");
        }
        const array = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${bindIfParam(values, column)}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} @> ${array}`;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} @> ${bindIfParam(values, column)}`;
}
function arrayContained(column, values) {
    if (Array.isArray(values)) {
        if (values.length === 0) {
            throw new Error("arrayContained requires at least one value");
        }
        const array = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${bindIfParam(values, column)}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} <@ ${array}`;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} <@ ${bindIfParam(values, column)}`;
}
function arrayOverlaps(column, values) {
    if (Array.isArray(values)) {
        if (values.length === 0) {
            throw new Error("arrayOverlaps requires at least one value");
        }
        const array = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${bindIfParam(values, column)}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} && ${array}`;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} && ${bindIfParam(values, column)}`;
}
;
 //# sourceMappingURL=conditions.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/expressions/select.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "asc": (()=>asc),
    "desc": (()=>desc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
;
function asc(column) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} asc`;
}
function desc(column) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${column} desc`;
}
;
 //# sourceMappingURL=select.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/primary-keys.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PrimaryKey": (()=>PrimaryKey),
    "PrimaryKeyBuilder": (()=>PrimaryKeyBuilder),
    "primaryKey": (()=>primaryKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
;
;
function primaryKey(...config) {
    if (config[0].columns) {
        return new PrimaryKeyBuilder(config[0].columns, config[0].name);
    }
    return new PrimaryKeyBuilder(config);
}
class PrimaryKeyBuilder {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgPrimaryKeyBuilder";
    /** @internal */ columns;
    /** @internal */ name;
    constructor(columns, name){
        this.columns = columns;
        this.name = name;
    }
    /** @internal */ build(table) {
        return new PrimaryKey(table, this.columns, this.name);
    }
}
class PrimaryKey {
    constructor(table, columns, name){
        this.table = table;
        this.columns = columns;
        this.name = name;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgPrimaryKey";
    columns;
    name;
    getName() {
        return this.name ?? `${this.table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTable"].Symbol.Name]}_${this.columns.map((column)=>column.name).join("_")}_pk`;
    }
}
;
 //# sourceMappingURL=primary-keys.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/relations.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Many": (()=>Many),
    "One": (()=>One),
    "Relation": (()=>Relation),
    "Relations": (()=>Relations),
    "createMany": (()=>createMany),
    "createOne": (()=>createOne),
    "createTableRelationsHelpers": (()=>createTableRelationsHelpers),
    "extractTablesRelationalConfig": (()=>extractTablesRelationalConfig),
    "getOperators": (()=>getOperators),
    "getOrderByOperators": (()=>getOrderByOperators),
    "mapRelationalRow": (()=>mapRelationalRow),
    "normalizeRelation": (()=>normalizeRelation),
    "relations": (()=>relations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/expressions/select.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/primary-keys.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column.js [app-route] (ecmascript)");
;
;
;
;
;
;
class Relation {
    constructor(sourceTable, referencedTable, relationName){
        this.sourceTable = sourceTable;
        this.referencedTable = referencedTable;
        this.relationName = relationName;
        this.referencedTableName = referencedTable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name];
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "Relation";
    referencedTableName;
    fieldName;
}
class Relations {
    constructor(table, config){
        this.table = table;
        this.config = config;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "Relations";
}
class One extends Relation {
    constructor(sourceTable, referencedTable, config, isNullable){
        super(sourceTable, referencedTable, config?.relationName);
        this.config = config;
        this.isNullable = isNullable;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "One";
    withFieldName(fieldName) {
        const relation = new One(this.sourceTable, this.referencedTable, this.config, this.isNullable);
        relation.fieldName = fieldName;
        return relation;
    }
}
class Many extends Relation {
    constructor(sourceTable, referencedTable, config){
        super(sourceTable, referencedTable, config?.relationName);
        this.config = config;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "Many";
    withFieldName(fieldName) {
        const relation = new Many(this.sourceTable, this.referencedTable, this.config);
        relation.fieldName = fieldName;
        return relation;
    }
}
function getOperators() {
    return {
        and: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"],
        between: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["between"],
        eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"],
        exists: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exists"],
        gt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gt"],
        gte: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gte"],
        ilike: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ilike"],
        inArray: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"],
        isNull: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNull"],
        isNotNull: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNotNull"],
        like: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["like"],
        lt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lt"],
        lte: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lte"],
        ne: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ne"],
        not: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["not"],
        notBetween: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notBetween"],
        notExists: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notExists"],
        notLike: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notLike"],
        notIlike: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notIlike"],
        notInArray: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notInArray"],
        or: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["or"],
        sql: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]
    };
}
function getOrderByOperators() {
    return {
        sql: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"],
        asc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["asc"],
        desc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"]
    };
}
function extractTablesRelationalConfig(schema, configHelpers) {
    if (Object.keys(schema).length === 1 && "default" in schema && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(schema["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"])) {
        schema = schema["default"];
    }
    const tableNamesMap = {};
    const relationsBuffer = {};
    const tablesConfig = {};
    for (const [key, value] of Object.entries(schema)){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"])) {
            const dbName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableUniqueName"])(value);
            const bufferedRelations = relationsBuffer[dbName];
            tableNamesMap[dbName] = key;
            tablesConfig[key] = {
                tsName: key,
                dbName: value[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name],
                schema: value[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Schema],
                columns: value[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns],
                relations: bufferedRelations?.relations ?? {},
                primaryKey: bufferedRelations?.primaryKey ?? []
            };
            for (const column of Object.values(value[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns])){
                if (column.primary) {
                    tablesConfig[key].primaryKey.push(column);
                }
            }
            const extraConfig = value[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.ExtraConfigBuilder]?.(value[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.ExtraConfigColumns]);
            if (extraConfig) {
                for (const configEntry of Object.values(extraConfig)){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(configEntry, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrimaryKeyBuilder"])) {
                        tablesConfig[key].primaryKey.push(...configEntry.columns);
                    }
                }
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, Relations)) {
            const dbName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableUniqueName"])(value.table);
            const tableName = tableNamesMap[dbName];
            const relations2 = value.config(configHelpers(value.table));
            let primaryKey;
            for (const [relationName, relation] of Object.entries(relations2)){
                if (tableName) {
                    const tableConfig = tablesConfig[tableName];
                    tableConfig.relations[relationName] = relation;
                    if (primaryKey) {
                        tableConfig.primaryKey.push(...primaryKey);
                    }
                } else {
                    if (!(dbName in relationsBuffer)) {
                        relationsBuffer[dbName] = {
                            relations: {},
                            primaryKey
                        };
                    }
                    relationsBuffer[dbName].relations[relationName] = relation;
                }
            }
        }
    }
    return {
        tables: tablesConfig,
        tableNamesMap
    };
}
function relations(table, relations2) {
    return new Relations(table, (helpers)=>Object.fromEntries(Object.entries(relations2(helpers)).map(([key, value])=>[
                key,
                value.withFieldName(key)
            ])));
}
function createOne(sourceTable) {
    return function one(table, config) {
        return new One(sourceTable, table, config, config?.fields.reduce((res, f)=>res && f.notNull, true) ?? false);
    };
}
function createMany(sourceTable) {
    return function many(referencedTable, config) {
        return new Many(sourceTable, referencedTable, config);
    };
}
function normalizeRelation(schema, tableNamesMap, relation) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(relation, One) && relation.config) {
        return {
            fields: relation.config.fields,
            references: relation.config.references
        };
    }
    const referencedTableTsName = tableNamesMap[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableUniqueName"])(relation.referencedTable)];
    if (!referencedTableTsName) {
        throw new Error(`Table "${relation.referencedTable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name]}" not found in schema`);
    }
    const referencedTableConfig = schema[referencedTableTsName];
    if (!referencedTableConfig) {
        throw new Error(`Table "${referencedTableTsName}" not found in schema`);
    }
    const sourceTable = relation.sourceTable;
    const sourceTableTsName = tableNamesMap[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableUniqueName"])(sourceTable)];
    if (!sourceTableTsName) {
        throw new Error(`Table "${sourceTable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name]}" not found in schema`);
    }
    const reverseRelations = [];
    for (const referencedTableRelation of Object.values(referencedTableConfig.relations)){
        if (relation.relationName && relation !== referencedTableRelation && referencedTableRelation.relationName === relation.relationName || !relation.relationName && referencedTableRelation.referencedTable === relation.sourceTable) {
            reverseRelations.push(referencedTableRelation);
        }
    }
    if (reverseRelations.length > 1) {
        throw relation.relationName ? new Error(`There are multiple relations with name "${relation.relationName}" in table "${referencedTableTsName}"`) : new Error(`There are multiple relations between "${referencedTableTsName}" and "${relation.sourceTable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name]}". Please specify relation name`);
    }
    if (reverseRelations[0] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(reverseRelations[0], One) && reverseRelations[0].config) {
        return {
            fields: reverseRelations[0].config.references,
            references: reverseRelations[0].config.fields
        };
    }
    throw new Error(`There is not enough information to infer relation "${sourceTableTsName}.${relation.fieldName}"`);
}
function createTableRelationsHelpers(sourceTable) {
    return {
        one: createOne(sourceTable),
        many: createMany(sourceTable)
    };
}
function mapRelationalRow(tablesConfig, tableConfig, row, buildQueryResultSelection, mapColumnValue = (value)=>value) {
    const result = {};
    for (const [selectionItemIndex, selectionItem] of buildQueryResultSelection.entries()){
        if (selectionItem.isJson) {
            const relation = tableConfig.relations[selectionItem.tsKey];
            const rawSubRows = row[selectionItemIndex];
            const subRows = typeof rawSubRows === "string" ? JSON.parse(rawSubRows) : rawSubRows;
            result[selectionItem.tsKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(relation, One) ? subRows && mapRelationalRow(tablesConfig, tablesConfig[selectionItem.relationTableTsKey], subRows, selectionItem.selection, mapColumnValue) : subRows.map((subRow)=>mapRelationalRow(tablesConfig, tablesConfig[selectionItem.relationTableTsKey], subRow, selectionItem.selection, mapColumnValue));
        } else {
            const value = mapColumnValue(row[selectionItemIndex]);
            const field = selectionItem.field;
            let decoder;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"])) {
                decoder = field;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
                decoder = field.decoder;
            } else {
                decoder = field.sql.decoder;
            }
            result[selectionItem.tsKey] = value === null ? null : decoder.mapFromDriverValue(value);
        }
    }
    return result;
}
;
 //# sourceMappingURL=relations.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/errors.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DrizzleError": (()=>DrizzleError),
    "TransactionRollbackError": (()=>TransactionRollbackError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
;
class DrizzleError extends Error {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "DrizzleError";
    constructor({ message, cause }){
        super(message);
        this.name = "DrizzleError";
        this.cause = cause;
    }
}
class TransactionRollbackError extends DrizzleError {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "TransactionRollbackError";
    constructor(){
        super({
            message: "Rollback"
        });
    }
}
;
 //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/dialect.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgDialect": (()=>PgDialect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/common.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/subquery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$view$2d$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/view-base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/view-common.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/jsonb.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/json.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$time$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/time.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/date.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/alias.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/relations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/errors.js [app-route] (ecmascript)");
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
class PgDialect {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgDialect";
    async migrate(migrations, session, config) {
        const migrationsTable = typeof config === "string" ? "__drizzle_migrations" : config.migrationsTable ?? "__drizzle_migrations";
        const migrationsSchema = typeof config === "string" ? "drizzle" : config.migrationsSchema ?? "drizzle";
        const migrationTableCreate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
			CREATE TABLE IF NOT EXISTS ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(migrationsSchema)}.${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(migrationsTable)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
        await session.execute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`CREATE SCHEMA IF NOT EXISTS ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(migrationsSchema)}`);
        await session.execute(migrationTableCreate);
        const dbMigrations = await session.all(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`select id, hash, created_at from ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(migrationsSchema)}.${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(migrationsTable)} order by created_at desc limit 1`);
        const lastDbMigration = dbMigrations[0];
        await session.transaction(async (tx)=>{
            for await (const migration of migrations){
                if (!lastDbMigration || Number(lastDbMigration.created_at) < migration.folderMillis) {
                    for (const stmt of migration.sql){
                        await tx.execute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(stmt));
                    }
                    await tx.execute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`insert into ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(migrationsSchema)}.${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(migrationsTable)} ("hash", "created_at") values(${migration.hash}, ${migration.folderMillis})`);
                }
            }
        });
    }
    escapeName(name) {
        return `"${name}"`;
    }
    escapeParam(num) {
        return `$${num + 1}`;
    }
    escapeString(str) {
        return `'${str.replace(/'/g, "''")}'`;
    }
    buildWithCTE(queries) {
        if (!queries?.length) return void 0;
        const withSqlChunks = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`with `
        ];
        for (const [i, w] of queries.entries()){
            withSqlChunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(w._.alias)} as (${w._.sql})`);
            if (i < queries.length - 1) {
                withSqlChunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`, `);
            }
        }
        withSqlChunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` `);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(withSqlChunks);
    }
    buildDeleteQuery({ table, where, returning, withList }) {
        const withSql = this.buildWithCTE(withList);
        const returningSql = returning ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` returning ${this.buildSelection(returning, {
            isSingleTable: true
        })}` : void 0;
        const whereSql = where ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` where ${where}` : void 0;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${withSql}delete from ${table}${whereSql}${returningSql}`;
    }
    buildUpdateSet(table, set) {
        const tableColumns = table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns];
        const columnNames = Object.keys(tableColumns).filter((colName)=>set[colName] !== void 0 || tableColumns[colName]?.onUpdateFn !== void 0);
        const setSize = columnNames.length;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(columnNames.flatMap((colName, i)=>{
            const col = tableColumns[colName];
            const value = set[colName] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].param(col.onUpdateFn(), col);
            const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(col.name)} = ${value}`;
            if (i < setSize - 1) {
                return [
                    res,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(", ")
                ];
            }
            return [
                res
            ];
        }));
    }
    buildUpdateQuery({ table, set, where, returning, withList }) {
        const withSql = this.buildWithCTE(withList);
        const setSql = this.buildUpdateSet(table, set);
        const returningSql = returning ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` returning ${this.buildSelection(returning, {
            isSingleTable: true
        })}` : void 0;
        const whereSql = where ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` where ${where}` : void 0;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${withSql}update ${table} set ${setSql}${whereSql}${returningSql}`;
    }
    /**
   * Builds selection SQL with provided fields/expressions
   *
   * Examples:
   *
   * `select <selection> from`
   *
   * `insert ... returning <selection>`
   *
   * If `isSingleTable` is true, then columns won't be prefixed with table name
   */ buildSelection(fields, { isSingleTable = false } = {}) {
        const columnsLen = fields.length;
        const chunks = fields.flatMap(({ field }, i)=>{
            const chunk = [];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"].Aliased) && field.isSelectionField) {
                chunk.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(field.fieldAlias));
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"].Aliased) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
                const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"].Aliased) ? field.sql : field;
                if (isSingleTable) {
                    chunk.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"](query.queryChunks.map((c)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(c, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"])) {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(c.name);
                        }
                        return c;
                    })));
                } else {
                    chunk.push(query);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"].Aliased)) {
                    chunk.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` as ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(field.fieldAlias)}`);
                }
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"])) {
                if (isSingleTable) {
                    chunk.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(field.name));
                } else {
                    chunk.push(field);
                }
            }
            if (i < columnsLen - 1) {
                chunk.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`, `);
            }
            return chunk;
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(chunks);
    }
    buildSelectQuery({ withList, fields, fieldsFlat, where, having, table, joins, orderBy, groupBy, limit, offset, lockingClause, distinct, setOperators }) {
        const fieldsList = fieldsFlat ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["orderSelectedFields"])(fields);
        for (const f of fieldsList){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(f.field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableName"])(f.field.table) !== ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subquery"]) ? table._.alias : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$view$2d$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgViewBase"]) ? table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"]) ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableName"])(table)) && !((table2)=>joins?.some(({ alias })=>alias === (table2[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.IsAlias] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableName"])(table2) : table2[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.BaseName])))(f.field.table)) {
                const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableName"])(f.field.table);
                throw new Error(`Your "${f.path.join("->")}" field references a column "${tableName}"."${f.field.name}", but the table "${tableName}" is not part of the query! Did you forget to join it?`);
            }
        }
        const isSingleTable = !joins || joins.length === 0;
        const withSql = this.buildWithCTE(withList);
        let distinctSql;
        if (distinct) {
            distinctSql = distinct === true ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` distinct` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` distinct on (${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(distinct.on, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`, `)})`;
        }
        const selection = this.buildSelection(fieldsList, {
            isSingleTable
        });
        const tableSql = (()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"]) && table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.OriginalName] !== table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name]) {
                let fullName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.OriginalName])}`;
                if (table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Schema]) {
                    fullName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Schema])}.${fullName}`;
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${fullName} ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Name])}`;
            }
            return table;
        })();
        const joinsArray = [];
        if (joins) {
            for (const [index, joinMeta] of joins.entries()){
                if (index === 0) {
                    joinsArray.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` `);
                }
                const table2 = joinMeta.table;
                const lateralSql = joinMeta.lateral ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` lateral` : void 0;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTable"])) {
                    const tableName = table2[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTable"].Symbol.Name];
                    const tableSchema = table2[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTable"].Symbol.Schema];
                    const origTableName = table2[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTable"].Symbol.OriginalName];
                    const alias = tableName === origTableName ? void 0 : joinMeta.alias;
                    joinsArray.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(joinMeta.joinType)} join${lateralSql} ${tableSchema ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(tableSchema)}.` : void 0}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(origTableName)}${alias && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(alias)}`} on ${joinMeta.on}`);
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["View"])) {
                    const viewName = table2[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].name;
                    const viewSchema = table2[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].schema;
                    const origViewName = table2[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].originalName;
                    const alias = viewName === origViewName ? void 0 : joinMeta.alias;
                    joinsArray.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(joinMeta.joinType)} join${lateralSql} ${viewSchema ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(viewSchema)}.` : void 0}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(origViewName)}${alias && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(alias)}`} on ${joinMeta.on}`);
                } else {
                    joinsArray.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(joinMeta.joinType)} join${lateralSql} ${table2} on ${joinMeta.on}`);
                }
                if (index < joins.length - 1) {
                    joinsArray.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` `);
                }
            }
        }
        const joinsSql = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(joinsArray);
        const whereSql = where ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` where ${where}` : void 0;
        const havingSql = having ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` having ${having}` : void 0;
        let orderBySql;
        if (orderBy && orderBy.length > 0) {
            orderBySql = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` order by ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(orderBy, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`, `)}`;
        }
        let groupBySql;
        if (groupBy && groupBy.length > 0) {
            groupBySql = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` group by ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(groupBy, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`, `)}`;
        }
        const limitSql = typeof limit === "object" || typeof limit === "number" && limit >= 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` limit ${limit}` : void 0;
        const offsetSql = offset ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` offset ${offset}` : void 0;
        const lockingClauseSql = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].empty();
        if (lockingClause) {
            const clauseSql = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` for ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(lockingClause.strength)}`;
            if (lockingClause.config.of) {
                clauseSql.append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` of ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(Array.isArray(lockingClause.config.of) ? lockingClause.config.of : [
                    lockingClause.config.of
                ], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`, `)}`);
            }
            if (lockingClause.config.noWait) {
                clauseSql.append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` no wait`);
            } else if (lockingClause.config.skipLocked) {
                clauseSql.append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` skip locked`);
            }
            lockingClauseSql.append(clauseSql);
        }
        const finalQuery = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${withSql}select${distinctSql} ${selection} from ${tableSql}${joinsSql}${whereSql}${groupBySql}${havingSql}${orderBySql}${limitSql}${offsetSql}${lockingClauseSql}`;
        if (setOperators.length > 0) {
            return this.buildSetOperations(finalQuery, setOperators);
        }
        return finalQuery;
    }
    buildSetOperations(leftSelect, setOperators) {
        const [setOperator, ...rest] = setOperators;
        if (!setOperator) {
            throw new Error("Cannot pass undefined values to any set operator");
        }
        if (rest.length === 0) {
            return this.buildSetOperationQuery({
                leftSelect,
                setOperator
            });
        }
        return this.buildSetOperations(this.buildSetOperationQuery({
            leftSelect,
            setOperator
        }), rest);
    }
    buildSetOperationQuery({ leftSelect, setOperator: { type, isAll, rightSelect, limit, orderBy, offset } }) {
        const leftChunk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`(${leftSelect.getSQL()}) `;
        const rightChunk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`(${rightSelect.getSQL()})`;
        let orderBySql;
        if (orderBy && orderBy.length > 0) {
            const orderByValues = [];
            for (const singleOrderBy of orderBy){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(singleOrderBy, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"])) {
                    orderByValues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(singleOrderBy.name));
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(singleOrderBy, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
                    for(let i = 0; i < singleOrderBy.queryChunks.length; i++){
                        const chunk = singleOrderBy.queryChunks[i];
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgColumn"])) {
                            singleOrderBy.queryChunks[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(chunk.name);
                        }
                    }
                    orderByValues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${singleOrderBy}`);
                } else {
                    orderByValues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${singleOrderBy}`);
                }
            }
            orderBySql = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` order by ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(orderByValues, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`, `)} `;
        }
        const limitSql = typeof limit === "object" || typeof limit === "number" && limit >= 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` limit ${limit}` : void 0;
        const operatorChunk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(`${type} ${isAll ? "all " : ""}`);
        const offsetSql = offset ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` offset ${offset}` : void 0;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${leftChunk}${operatorChunk}${rightChunk}${orderBySql}${limitSql}${offsetSql}`;
    }
    buildInsertQuery({ table, values, onConflict, returning, withList }) {
        const valuesSqlList = [];
        const columns = table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns];
        const colEntries = Object.entries(columns).filter(([_, col])=>!col.shouldDisableInsert());
        const insertOrder = colEntries.map(([, column])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(column.name));
        for (const [valueIndex, value] of values.entries()){
            const valueList = [];
            for (const [fieldName, col] of colEntries){
                const colValue = value[fieldName];
                if (colValue === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(colValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Param"]) && colValue.value === void 0) {
                    if (col.defaultFn !== void 0) {
                        const defaultFnResult = col.defaultFn();
                        const defaultValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(defaultFnResult, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"]) ? defaultFnResult : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].param(defaultFnResult, col);
                        valueList.push(defaultValue);
                    } else if (!col.default && col.onUpdateFn !== void 0) {
                        const onUpdateFnResult = col.onUpdateFn();
                        const newValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(onUpdateFnResult, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"]) ? onUpdateFnResult : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].param(onUpdateFnResult, col);
                        valueList.push(newValue);
                    } else {
                        valueList.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`default`);
                    }
                } else {
                    valueList.push(colValue);
                }
            }
            valuesSqlList.push(valueList);
            if (valueIndex < values.length - 1) {
                valuesSqlList.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`, `);
            }
        }
        const withSql = this.buildWithCTE(withList);
        const valuesSql = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(valuesSqlList);
        const returningSql = returning ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` returning ${this.buildSelection(returning, {
            isSingleTable: true
        })}` : void 0;
        const onConflictSql = onConflict ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` on conflict ${onConflict}` : void 0;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${withSql}insert into ${table} ${insertOrder} values ${valuesSql}${onConflictSql}${returningSql}`;
    }
    buildRefreshMaterializedViewQuery({ view, concurrently, withNoData }) {
        const concurrentlySql = concurrently ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` concurrently` : void 0;
        const withNoDataSql = withNoData ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` with no data` : void 0;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`refresh materialized view${concurrentlySql} ${view}${withNoDataSql}`;
    }
    prepareTyping(encoder) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgJsonb"]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgJson"])) {
            return "json";
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgNumeric"])) {
            return "decimal";
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$time$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTime"])) {
            return "time";
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTimestamp"]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTimestampString"])) {
            return "timestamp";
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDate"]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDateString"])) {
            return "date";
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgUUID"])) {
            return "uuid";
        } else {
            return "none";
        }
    }
    sqlToQuery(sql2, invokeSource) {
        return sql2.toQuery({
            escapeName: this.escapeName,
            escapeParam: this.escapeParam,
            escapeString: this.escapeString,
            prepareTyping: this.prepareTyping,
            invokeSource
        });
    }
    // buildRelationalQueryWithPK({
    // 	fullSchema,
    // 	schema,
    // 	tableNamesMap,
    // 	table,
    // 	tableConfig,
    // 	queryConfig: config,
    // 	tableAlias,
    // 	isRoot = false,
    // 	joinOn,
    // }: {
    // 	fullSchema: Record<string, unknown>;
    // 	schema: TablesRelationalConfig;
    // 	tableNamesMap: Record<string, string>;
    // 	table: PgTable;
    // 	tableConfig: TableRelationalConfig;
    // 	queryConfig: true | DBQueryConfig<'many', true>;
    // 	tableAlias: string;
    // 	isRoot?: boolean;
    // 	joinOn?: SQL;
    // }): BuildRelationalQueryResult<PgTable, PgColumn> {
    // 	// For { "<relation>": true }, return a table with selection of all columns
    // 	if (config === true) {
    // 		const selectionEntries = Object.entries(tableConfig.columns);
    // 		const selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = selectionEntries.map((
    // 			[key, value],
    // 		) => ({
    // 			dbKey: value.name,
    // 			tsKey: key,
    // 			field: value as PgColumn,
    // 			relationTableTsKey: undefined,
    // 			isJson: false,
    // 			selection: [],
    // 		}));
    // 		return {
    // 			tableTsKey: tableConfig.tsName,
    // 			sql: table,
    // 			selection,
    // 		};
    // 	}
    // 	// let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
    // 	// let selectionForBuild = selection;
    // 	const aliasedColumns = Object.fromEntries(
    // 		Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)]),
    // 	);
    // 	const aliasedRelations = Object.fromEntries(
    // 		Object.entries(tableConfig.relations).map(([key, value]) => [key, aliasedRelation(value, tableAlias)]),
    // 	);
    // 	const aliasedFields = Object.assign({}, aliasedColumns, aliasedRelations);
    // 	let where, hasUserDefinedWhere;
    // 	if (config.where) {
    // 		const whereSql = typeof config.where === 'function' ? config.where(aliasedFields, operators) : config.where;
    // 		where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
    // 		hasUserDefinedWhere = !!where;
    // 	}
    // 	where = and(joinOn, where);
    // 	// const fieldsSelection: { tsKey: string; value: PgColumn | SQL.Aliased; isExtra?: boolean }[] = [];
    // 	let joins: Join[] = [];
    // 	let selectedColumns: string[] = [];
    // 	// Figure out which columns to select
    // 	if (config.columns) {
    // 		let isIncludeMode = false;
    // 		for (const [field, value] of Object.entries(config.columns)) {
    // 			if (value === undefined) {
    // 				continue;
    // 			}
    // 			if (field in tableConfig.columns) {
    // 				if (!isIncludeMode && value === true) {
    // 					isIncludeMode = true;
    // 				}
    // 				selectedColumns.push(field);
    // 			}
    // 		}
    // 		if (selectedColumns.length > 0) {
    // 			selectedColumns = isIncludeMode
    // 				? selectedColumns.filter((c) => config.columns?.[c] === true)
    // 				: Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
    // 		}
    // 	} else {
    // 		// Select all columns if selection is not specified
    // 		selectedColumns = Object.keys(tableConfig.columns);
    // 	}
    // 	// for (const field of selectedColumns) {
    // 	// 	const column = tableConfig.columns[field]! as PgColumn;
    // 	// 	fieldsSelection.push({ tsKey: field, value: column });
    // 	// }
    // 	let initiallySelectedRelations: {
    // 		tsKey: string;
    // 		queryConfig: true | DBQueryConfig<'many', false>;
    // 		relation: Relation;
    // 	}[] = [];
    // 	// let selectedRelations: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
    // 	// Figure out which relations to select
    // 	if (config.with) {
    // 		initiallySelectedRelations = Object.entries(config.with)
    // 			.filter((entry): entry is [typeof entry[0], NonNullable<typeof entry[1]>] => !!entry[1])
    // 			.map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey]! }));
    // 	}
    // 	const manyRelations = initiallySelectedRelations.filter((r) =>
    // 		is(r.relation, Many)
    // 		&& (schema[tableNamesMap[r.relation.referencedTable[Table.Symbol.Name]]!]?.primaryKey.length ?? 0) > 0
    // 	);
    // 	// If this is the last Many relation (or there are no Many relations), we are on the innermost subquery level
    // 	const isInnermostQuery = manyRelations.length < 2;
    // 	const selectedExtras: {
    // 		tsKey: string;
    // 		value: SQL.Aliased;
    // 	}[] = [];
    // 	// Figure out which extras to select
    // 	if (isInnermostQuery && config.extras) {
    // 		const extras = typeof config.extras === 'function'
    // 			? config.extras(aliasedFields, { sql })
    // 			: config.extras;
    // 		for (const [tsKey, value] of Object.entries(extras)) {
    // 			selectedExtras.push({
    // 				tsKey,
    // 				value: mapColumnsInAliasedSQLToAlias(value, tableAlias),
    // 			});
    // 		}
    // 	}
    // 	// Transform `fieldsSelection` into `selection`
    // 	// `fieldsSelection` shouldn't be used after this point
    // 	// for (const { tsKey, value, isExtra } of fieldsSelection) {
    // 	// 	selection.push({
    // 	// 		dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey]!.name,
    // 	// 		tsKey,
    // 	// 		field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
    // 	// 		relationTableTsKey: undefined,
    // 	// 		isJson: false,
    // 	// 		isExtra,
    // 	// 		selection: [],
    // 	// 	});
    // 	// }
    // 	let orderByOrig = typeof config.orderBy === 'function'
    // 		? config.orderBy(aliasedFields, orderByOperators)
    // 		: config.orderBy ?? [];
    // 	if (!Array.isArray(orderByOrig)) {
    // 		orderByOrig = [orderByOrig];
    // 	}
    // 	const orderBy = orderByOrig.map((orderByValue) => {
    // 		if (is(orderByValue, Column)) {
    // 			return aliasedTableColumn(orderByValue, tableAlias) as PgColumn;
    // 		}
    // 		return mapColumnsInSQLToAlias(orderByValue, tableAlias);
    // 	});
    // 	const limit = isInnermostQuery ? config.limit : undefined;
    // 	const offset = isInnermostQuery ? config.offset : undefined;
    // 	// For non-root queries without additional config except columns, return a table with selection
    // 	if (
    // 		!isRoot
    // 		&& initiallySelectedRelations.length === 0
    // 		&& selectedExtras.length === 0
    // 		&& !where
    // 		&& orderBy.length === 0
    // 		&& limit === undefined
    // 		&& offset === undefined
    // 	) {
    // 		return {
    // 			tableTsKey: tableConfig.tsName,
    // 			sql: table,
    // 			selection: selectedColumns.map((key) => ({
    // 				dbKey: tableConfig.columns[key]!.name,
    // 				tsKey: key,
    // 				field: tableConfig.columns[key] as PgColumn,
    // 				relationTableTsKey: undefined,
    // 				isJson: false,
    // 				selection: [],
    // 			})),
    // 		};
    // 	}
    // 	const selectedRelationsWithoutPK:
    // 	// Process all relations without primary keys, because they need to be joined differently and will all be on the same query level
    // 	for (
    // 		const {
    // 			tsKey: selectedRelationTsKey,
    // 			queryConfig: selectedRelationConfigValue,
    // 			relation,
    // 		} of initiallySelectedRelations
    // 	) {
    // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
    // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
    // 		const relationTableTsName = tableNamesMap[relationTableName]!;
    // 		const relationTable = schema[relationTableTsName]!;
    // 		if (relationTable.primaryKey.length > 0) {
    // 			continue;
    // 		}
    // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
    // 		const joinOn = and(
    // 			...normalizedRelation.fields.map((field, i) =>
    // 				eq(
    // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
    // 					aliasedTableColumn(field, tableAlias),
    // 				)
    // 			),
    // 		);
    // 		const builtRelation = this.buildRelationalQueryWithoutPK({
    // 			fullSchema,
    // 			schema,
    // 			tableNamesMap,
    // 			table: fullSchema[relationTableTsName] as PgTable,
    // 			tableConfig: schema[relationTableTsName]!,
    // 			queryConfig: selectedRelationConfigValue,
    // 			tableAlias: relationTableAlias,
    // 			joinOn,
    // 			nestedQueryRelation: relation,
    // 		});
    // 		const field = sql`${sql.identifier(relationTableAlias)}.${sql.identifier('data')}`.as(selectedRelationTsKey);
    // 		joins.push({
    // 			on: sql`true`,
    // 			table: new Subquery(builtRelation.sql as SQL, {}, relationTableAlias),
    // 			alias: relationTableAlias,
    // 			joinType: 'left',
    // 			lateral: true,
    // 		});
    // 		selectedRelations.push({
    // 			dbKey: selectedRelationTsKey,
    // 			tsKey: selectedRelationTsKey,
    // 			field,
    // 			relationTableTsKey: relationTableTsName,
    // 			isJson: true,
    // 			selection: builtRelation.selection,
    // 		});
    // 	}
    // 	const oneRelations = initiallySelectedRelations.filter((r): r is typeof r & { relation: One } =>
    // 		is(r.relation, One)
    // 	);
    // 	// Process all One relations with PKs, because they can all be joined on the same level
    // 	for (
    // 		const {
    // 			tsKey: selectedRelationTsKey,
    // 			queryConfig: selectedRelationConfigValue,
    // 			relation,
    // 		} of oneRelations
    // 	) {
    // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
    // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
    // 		const relationTableTsName = tableNamesMap[relationTableName]!;
    // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
    // 		const relationTable = schema[relationTableTsName]!;
    // 		if (relationTable.primaryKey.length === 0) {
    // 			continue;
    // 		}
    // 		const joinOn = and(
    // 			...normalizedRelation.fields.map((field, i) =>
    // 				eq(
    // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
    // 					aliasedTableColumn(field, tableAlias),
    // 				)
    // 			),
    // 		);
    // 		const builtRelation = this.buildRelationalQueryWithPK({
    // 			fullSchema,
    // 			schema,
    // 			tableNamesMap,
    // 			table: fullSchema[relationTableTsName] as PgTable,
    // 			tableConfig: schema[relationTableTsName]!,
    // 			queryConfig: selectedRelationConfigValue,
    // 			tableAlias: relationTableAlias,
    // 			joinOn,
    // 		});
    // 		const field = sql`case when ${sql.identifier(relationTableAlias)} is null then null else json_build_array(${
    // 			sql.join(
    // 				builtRelation.selection.map(({ field }) =>
    // 					is(field, SQL.Aliased)
    // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
    // 						: is(field, Column)
    // 						? aliasedTableColumn(field, relationTableAlias)
    // 						: field
    // 				),
    // 				sql`, `,
    // 			)
    // 		}) end`.as(selectedRelationTsKey);
    // 		const isLateralJoin = is(builtRelation.sql, SQL);
    // 		joins.push({
    // 			on: isLateralJoin ? sql`true` : joinOn,
    // 			table: is(builtRelation.sql, SQL)
    // 				? new Subquery(builtRelation.sql, {}, relationTableAlias)
    // 				: aliasedTable(builtRelation.sql, relationTableAlias),
    // 			alias: relationTableAlias,
    // 			joinType: 'left',
    // 			lateral: is(builtRelation.sql, SQL),
    // 		});
    // 		selectedRelations.push({
    // 			dbKey: selectedRelationTsKey,
    // 			tsKey: selectedRelationTsKey,
    // 			field,
    // 			relationTableTsKey: relationTableTsName,
    // 			isJson: true,
    // 			selection: builtRelation.selection,
    // 		});
    // 	}
    // 	let distinct: PgSelectConfig['distinct'];
    // 	let tableFrom: PgTable | Subquery = table;
    // 	// Process first Many relation - each one requires a nested subquery
    // 	const manyRelation = manyRelations[0];
    // 	if (manyRelation) {
    // 		const {
    // 			tsKey: selectedRelationTsKey,
    // 			queryConfig: selectedRelationQueryConfig,
    // 			relation,
    // 		} = manyRelation;
    // 		distinct = {
    // 			on: tableConfig.primaryKey.map((c) => aliasedTableColumn(c as PgColumn, tableAlias)),
    // 		};
    // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
    // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
    // 		const relationTableTsName = tableNamesMap[relationTableName]!;
    // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
    // 		const joinOn = and(
    // 			...normalizedRelation.fields.map((field, i) =>
    // 				eq(
    // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
    // 					aliasedTableColumn(field, tableAlias),
    // 				)
    // 			),
    // 		);
    // 		const builtRelationJoin = this.buildRelationalQueryWithPK({
    // 			fullSchema,
    // 			schema,
    // 			tableNamesMap,
    // 			table: fullSchema[relationTableTsName] as PgTable,
    // 			tableConfig: schema[relationTableTsName]!,
    // 			queryConfig: selectedRelationQueryConfig,
    // 			tableAlias: relationTableAlias,
    // 			joinOn,
    // 		});
    // 		const builtRelationSelectionField = sql`case when ${
    // 			sql.identifier(relationTableAlias)
    // 		} is null then '[]' else json_agg(json_build_array(${
    // 			sql.join(
    // 				builtRelationJoin.selection.map(({ field }) =>
    // 					is(field, SQL.Aliased)
    // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
    // 						: is(field, Column)
    // 						? aliasedTableColumn(field, relationTableAlias)
    // 						: field
    // 				),
    // 				sql`, `,
    // 			)
    // 		})) over (partition by ${sql.join(distinct.on, sql`, `)}) end`.as(selectedRelationTsKey);
    // 		const isLateralJoin = is(builtRelationJoin.sql, SQL);
    // 		joins.push({
    // 			on: isLateralJoin ? sql`true` : joinOn,
    // 			table: isLateralJoin
    // 				? new Subquery(builtRelationJoin.sql as SQL, {}, relationTableAlias)
    // 				: aliasedTable(builtRelationJoin.sql as PgTable, relationTableAlias),
    // 			alias: relationTableAlias,
    // 			joinType: 'left',
    // 			lateral: isLateralJoin,
    // 		});
    // 		// Build the "from" subquery with the remaining Many relations
    // 		const builtTableFrom = this.buildRelationalQueryWithPK({
    // 			fullSchema,
    // 			schema,
    // 			tableNamesMap,
    // 			table,
    // 			tableConfig,
    // 			queryConfig: {
    // 				...config,
    // 				where: undefined,
    // 				orderBy: undefined,
    // 				limit: undefined,
    // 				offset: undefined,
    // 				with: manyRelations.slice(1).reduce<NonNullable<typeof config['with']>>(
    // 					(result, { tsKey, queryConfig: configValue }) => {
    // 						result[tsKey] = configValue;
    // 						return result;
    // 					},
    // 					{},
    // 				),
    // 			},
    // 			tableAlias,
    // 		});
    // 		selectedRelations.push({
    // 			dbKey: selectedRelationTsKey,
    // 			tsKey: selectedRelationTsKey,
    // 			field: builtRelationSelectionField,
    // 			relationTableTsKey: relationTableTsName,
    // 			isJson: true,
    // 			selection: builtRelationJoin.selection,
    // 		});
    // 		// selection = builtTableFrom.selection.map((item) =>
    // 		// 	is(item.field, SQL.Aliased)
    // 		// 		? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
    // 		// 		: item
    // 		// );
    // 		// selectionForBuild = [{
    // 		// 	dbKey: '*',
    // 		// 	tsKey: '*',
    // 		// 	field: sql`${sql.identifier(tableAlias)}.*`,
    // 		// 	selection: [],
    // 		// 	isJson: false,
    // 		// 	relationTableTsKey: undefined,
    // 		// }];
    // 		// const newSelectionItem: (typeof selection)[number] = {
    // 		// 	dbKey: selectedRelationTsKey,
    // 		// 	tsKey: selectedRelationTsKey,
    // 		// 	field,
    // 		// 	relationTableTsKey: relationTableTsName,
    // 		// 	isJson: true,
    // 		// 	selection: builtRelationJoin.selection,
    // 		// };
    // 		// selection.push(newSelectionItem);
    // 		// selectionForBuild.push(newSelectionItem);
    // 		tableFrom = is(builtTableFrom.sql, PgTable)
    // 			? builtTableFrom.sql
    // 			: new Subquery(builtTableFrom.sql, {}, tableAlias);
    // 	}
    // 	if (selectedColumns.length === 0 && selectedRelations.length === 0 && selectedExtras.length === 0) {
    // 		throw new DrizzleError(`No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")`);
    // 	}
    // 	let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'];
    // 	function prepareSelectedColumns() {
    // 		return selectedColumns.map((key) => ({
    // 			dbKey: tableConfig.columns[key]!.name,
    // 			tsKey: key,
    // 			field: tableConfig.columns[key] as PgColumn,
    // 			relationTableTsKey: undefined,
    // 			isJson: false,
    // 			selection: [],
    // 		}));
    // 	}
    // 	function prepareSelectedExtras() {
    // 		return selectedExtras.map((item) => ({
    // 			dbKey: item.value.fieldAlias,
    // 			tsKey: item.tsKey,
    // 			field: item.value,
    // 			relationTableTsKey: undefined,
    // 			isJson: false,
    // 			selection: [],
    // 		}));
    // 	}
    // 	if (isRoot) {
    // 		selection = [
    // 			...prepareSelectedColumns(),
    // 			...prepareSelectedExtras(),
    // 		];
    // 	}
    // 	if (hasUserDefinedWhere || orderBy.length > 0) {
    // 		tableFrom = new Subquery(
    // 			this.buildSelectQuery({
    // 				table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
    // 				fields: {},
    // 				fieldsFlat: selectionForBuild.map(({ field }) => ({
    // 					path: [],
    // 					field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
    // 				})),
    // 				joins,
    // 				distinct,
    // 			}),
    // 			{},
    // 			tableAlias,
    // 		);
    // 		selectionForBuild = selection.map((item) =>
    // 			is(item.field, SQL.Aliased)
    // 				? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
    // 				: item
    // 		);
    // 		joins = [];
    // 		distinct = undefined;
    // 	}
    // 	const result = this.buildSelectQuery({
    // 		table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
    // 		fields: {},
    // 		fieldsFlat: selectionForBuild.map(({ field }) => ({
    // 			path: [],
    // 			field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
    // 		})),
    // 		where,
    // 		limit,
    // 		offset,
    // 		joins,
    // 		orderBy,
    // 		distinct,
    // 	});
    // 	return {
    // 		tableTsKey: tableConfig.tsName,
    // 		sql: result,
    // 		selection,
    // 	};
    // }
    buildRelationalQueryWithoutPK({ fullSchema, schema, tableNamesMap, table, tableConfig, queryConfig: config, tableAlias, nestedQueryRelation, joinOn }) {
        let selection = [];
        let limit, offset, orderBy = [], where;
        const joins = [];
        if (config === true) {
            const selectionEntries = Object.entries(tableConfig.columns);
            selection = selectionEntries.map(([key, value])=>({
                    dbKey: value.name,
                    tsKey: key,
                    field: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTableColumn"])(value, tableAlias),
                    relationTableTsKey: void 0,
                    isJson: false,
                    selection: []
                }));
        } else {
            const aliasedColumns = Object.fromEntries(Object.entries(tableConfig.columns).map(([key, value])=>[
                    key,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTableColumn"])(value, tableAlias)
                ]));
            if (config.where) {
                const whereSql = typeof config.where === "function" ? config.where(aliasedColumns, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOperators"])()) : config.where;
                where = whereSql && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapColumnsInSQLToAlias"])(whereSql, tableAlias);
            }
            const fieldsSelection = [];
            let selectedColumns = [];
            if (config.columns) {
                let isIncludeMode = false;
                for (const [field, value] of Object.entries(config.columns)){
                    if (value === void 0) {
                        continue;
                    }
                    if (field in tableConfig.columns) {
                        if (!isIncludeMode && value === true) {
                            isIncludeMode = true;
                        }
                        selectedColumns.push(field);
                    }
                }
                if (selectedColumns.length > 0) {
                    selectedColumns = isIncludeMode ? selectedColumns.filter((c)=>config.columns?.[c] === true) : Object.keys(tableConfig.columns).filter((key)=>!selectedColumns.includes(key));
                }
            } else {
                selectedColumns = Object.keys(tableConfig.columns);
            }
            for (const field of selectedColumns){
                const column = tableConfig.columns[field];
                fieldsSelection.push({
                    tsKey: field,
                    value: column
                });
            }
            let selectedRelations = [];
            if (config.with) {
                selectedRelations = Object.entries(config.with).filter((entry)=>!!entry[1]).map(([tsKey, queryConfig])=>({
                        tsKey,
                        queryConfig,
                        relation: tableConfig.relations[tsKey]
                    }));
            }
            let extras;
            if (config.extras) {
                extras = typeof config.extras === "function" ? config.extras(aliasedColumns, {
                    sql: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]
                }) : config.extras;
                for (const [tsKey, value] of Object.entries(extras)){
                    fieldsSelection.push({
                        tsKey,
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapColumnsInAliasedSQLToAlias"])(value, tableAlias)
                    });
                }
            }
            for (const { tsKey, value } of fieldsSelection){
                selection.push({
                    dbKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"].Aliased) ? value.fieldAlias : tableConfig.columns[tsKey].name,
                    tsKey,
                    field: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"]) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTableColumn"])(value, tableAlias) : value,
                    relationTableTsKey: void 0,
                    isJson: false,
                    selection: []
                });
            }
            let orderByOrig = typeof config.orderBy === "function" ? config.orderBy(aliasedColumns, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOrderByOperators"])()) : config.orderBy ?? [];
            if (!Array.isArray(orderByOrig)) {
                orderByOrig = [
                    orderByOrig
                ];
            }
            orderBy = orderByOrig.map((orderByValue)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(orderByValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"])) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTableColumn"])(orderByValue, tableAlias);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapColumnsInSQLToAlias"])(orderByValue, tableAlias);
            });
            limit = config.limit;
            offset = config.offset;
            for (const { tsKey: selectedRelationTsKey, queryConfig: selectedRelationConfigValue, relation } of selectedRelations){
                const normalizedRelation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeRelation"])(schema, tableNamesMap, relation);
                const relationTableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableUniqueName"])(relation.referencedTable);
                const relationTableTsName = tableNamesMap[relationTableName];
                const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
                const joinOn2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])(...normalizedRelation.fields.map((field2, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTableColumn"])(normalizedRelation.references[i], relationTableAlias), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTableColumn"])(field2, tableAlias))));
                const builtRelation = this.buildRelationalQueryWithoutPK({
                    fullSchema,
                    schema,
                    tableNamesMap,
                    table: fullSchema[relationTableTsName],
                    tableConfig: schema[relationTableTsName],
                    queryConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(relation, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["One"]) ? selectedRelationConfigValue === true ? {
                        limit: 1
                    } : {
                        ...selectedRelationConfigValue,
                        limit: 1
                    } : selectedRelationConfigValue,
                    tableAlias: relationTableAlias,
                    joinOn: joinOn2,
                    nestedQueryRelation: relation
                });
                const field = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(relationTableAlias)}.${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier("data")}`.as(selectedRelationTsKey);
                joins.push({
                    on: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`true`,
                    table: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subquery"](builtRelation.sql, {}, relationTableAlias),
                    alias: relationTableAlias,
                    joinType: "left",
                    lateral: true
                });
                selection.push({
                    dbKey: selectedRelationTsKey,
                    tsKey: selectedRelationTsKey,
                    field,
                    relationTableTsKey: relationTableTsName,
                    isJson: true,
                    selection: builtRelation.selection
                });
            }
        }
        if (selection.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DrizzleError"]({
                message: `No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")`
            });
        }
        let result;
        where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])(joinOn, where);
        if (nestedQueryRelation) {
            let field = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`json_build_array(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(selection.map(({ field: field2, tsKey, isJson })=>isJson ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier(`${tableAlias}_${tsKey}`)}.${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].identifier("data")}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"].Aliased) ? field2.sql : field2), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`, `)})`;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(nestedQueryRelation, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Many"])) {
                field = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`coalesce(json_agg(${field}${orderBy.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` order by ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].join(orderBy, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`, `)}` : void 0}), '[]'::json)`;
            }
            const nestedSelection = [
                {
                    dbKey: "data",
                    tsKey: "data",
                    field: field.as("data"),
                    isJson: true,
                    relationTableTsKey: tableConfig.tsName,
                    selection
                }
            ];
            const needsSubquery = limit !== void 0 || offset !== void 0 || orderBy.length > 0;
            if (needsSubquery) {
                result = this.buildSelectQuery({
                    table: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTable"])(table, tableAlias),
                    fields: {},
                    fieldsFlat: [
                        {
                            path: [],
                            field: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw("*")
                        }
                    ],
                    where,
                    limit,
                    offset,
                    orderBy,
                    setOperators: []
                });
                where = void 0;
                limit = void 0;
                offset = void 0;
                orderBy = [];
            } else {
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTable"])(table, tableAlias);
            }
            result = this.buildSelectQuery({
                table: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(result, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTable"]) ? result : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subquery"](result, {}, tableAlias),
                fields: {},
                fieldsFlat: nestedSelection.map(({ field: field2 })=>({
                        path: [],
                        field: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"]) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTableColumn"])(field2, tableAlias) : field2
                    })),
                joins,
                where,
                limit,
                offset,
                orderBy,
                setOperators: []
            });
        } else {
            result = this.buildSelectQuery({
                table: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTable"])(table, tableAlias),
                fields: {},
                fieldsFlat: selection.map(({ field })=>({
                        path: [],
                        field: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"]) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aliasedTableColumn"])(field, tableAlias) : field
                    })),
                joins,
                where,
                limit,
                offset,
                orderBy,
                setOperators: []
            });
        }
        return {
            tableTsKey: tableConfig.tsName,
            sql: result,
            selection
        };
    }
}
;
 //# sourceMappingURL=dialect.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/logger.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConsoleLogWriter": (()=>ConsoleLogWriter),
    "DefaultLogger": (()=>DefaultLogger),
    "NoopLogger": (()=>NoopLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
;
class ConsoleLogWriter {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "ConsoleLogWriter";
    write(message) {
        console.log(message);
    }
}
class DefaultLogger {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "DefaultLogger";
    writer;
    constructor(config){
        this.writer = config?.writer ?? new ConsoleLogWriter();
    }
    logQuery(query, params) {
        const stringifiedParams = params.map((p)=>{
            try {
                return JSON.stringify(p);
            } catch  {
                return String(p);
            }
        });
        const paramsStr = stringifiedParams.length ? ` -- params: [${stringifiedParams.join(", ")}]` : "";
        this.writer.write(`Query: ${query}${paramsStr}`);
    }
}
class NoopLogger {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "NoopLogger";
    logQuery() {}
}
;
 //# sourceMappingURL=logger.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/query-promise.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "QueryPromise": (()=>QueryPromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
;
class QueryPromise {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "QueryPromise";
    [Symbol.toStringTag] = "QueryPromise";
    catch(onRejected) {
        return this.then(void 0, onRejected);
    }
    finally(onFinally) {
        return this.then((value)=>{
            onFinally?.();
            return value;
        }, (reason)=>{
            onFinally?.();
            throw reason;
        });
    }
    then(onFulfilled, onRejected) {
        return this.execute().then(onFulfilled, onRejected);
    }
}
;
 //# sourceMappingURL=query-promise.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/query.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgRelationalQuery": (()=>PgRelationalQuery),
    "RelationalQueryBuilder": (()=>RelationalQueryBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/relations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/query-promise.js [app-route] (ecmascript)");
;
;
;
;
class RelationalQueryBuilder {
    constructor(fullSchema, schema, tableNamesMap, table, tableConfig, dialect, session){
        this.fullSchema = fullSchema;
        this.schema = schema;
        this.tableNamesMap = tableNamesMap;
        this.table = table;
        this.tableConfig = tableConfig;
        this.dialect = dialect;
        this.session = session;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgRelationalQueryBuilder";
    findMany(config) {
        return new PgRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, config ? config : {}, "many");
    }
    findFirst(config) {
        return new PgRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, config ? {
            ...config,
            limit: 1
        } : {
            limit: 1
        }, "first");
    }
}
class PgRelationalQuery extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryPromise"] {
    constructor(fullSchema, schema, tableNamesMap, table, tableConfig, dialect, session, config, mode){
        super();
        this.fullSchema = fullSchema;
        this.schema = schema;
        this.tableNamesMap = tableNamesMap;
        this.table = table;
        this.tableConfig = tableConfig;
        this.dialect = dialect;
        this.session = session;
        this.config = config;
        this.mode = mode;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgRelationalQuery";
    /** @internal */ _prepare(name) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.prepareQuery", ()=>{
            const { query, builtQuery } = this._toSQL();
            return this.session.prepareQuery(builtQuery, void 0, name, true, (rawRows, mapColumnValue)=>{
                const rows = rawRows.map((row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapRelationalRow"])(this.schema, this.tableConfig, row, query.selection, mapColumnValue));
                if (this.mode === "first") {
                    return rows[0];
                }
                return rows;
            });
        });
    }
    prepare(name) {
        return this._prepare(name);
    }
    _getQuery() {
        return this.dialect.buildRelationalQueryWithoutPK({
            fullSchema: this.fullSchema,
            schema: this.schema,
            tableNamesMap: this.tableNamesMap,
            table: this.table,
            tableConfig: this.tableConfig,
            queryConfig: this.config,
            tableAlias: this.tableConfig.tsName
        });
    }
    /** @internal */ getSQL() {
        return this._getQuery().sql;
    }
    _toSQL() {
        const query = this._getQuery();
        const builtQuery = this.dialect.sqlToQuery(query.sql);
        return {
            query,
            builtQuery
        };
    }
    toSQL() {
        return this._toSQL().builtQuery;
    }
    execute() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.operation", ()=>{
            return this._prepare().execute();
        });
    }
}
;
 //# sourceMappingURL=query.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/selection-proxy.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SelectionProxyHandler": (()=>SelectionProxyHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/view-common.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/subquery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/column.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/alias.js [app-route] (ecmascript)");
;
;
;
;
;
;
class SelectionProxyHandler {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "SelectionProxyHandler";
    config;
    constructor(config){
        this.config = {
            ...config
        };
    }
    get(subquery, prop) {
        if (prop === "_") {
            return {
                ...subquery["_"],
                selectedFields: new Proxy(subquery._.selectedFields, this)
            };
        }
        if (prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]) {
            return {
                ...subquery[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]],
                selectedFields: new Proxy(subquery[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].selectedFields, this)
            };
        }
        if (typeof prop === "symbol") {
            return subquery[prop];
        }
        const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(subquery, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subquery"]) ? subquery._.selectedFields : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(subquery, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["View"]) ? subquery[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].selectedFields : subquery;
        const value = columns[prop];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"].Aliased)) {
            if (this.config.sqlAliasedBehavior === "sql" && !value.isSelectionField) {
                return value.sql;
            }
            const newValue = value.clone();
            newValue.isSelectionField = true;
            return newValue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
            if (this.config.sqlBehavior === "sql") {
                return value;
            }
            throw new Error(`You tried to reference "${prop}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Column"])) {
            if (this.config.alias) {
                return new Proxy(value, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColumnAliasProxyHandler"](new Proxy(value.table, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TableAliasProxyHandler"](this.config.alias, this.config.replaceOriginalName ?? false))));
            }
            return value;
        }
        if (typeof value !== "object" || value === null) {
            return value;
        }
        return new Proxy(value, new SelectionProxyHandler(this.config));
    }
}
;
 //# sourceMappingURL=selection-proxy.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/query-builders/query-builder.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TypedQueryBuilder": (()=>TypedQueryBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
;
class TypedQueryBuilder {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "TypedQueryBuilder";
    /** @internal */ getSelectedFields() {
        return this._.selectedFields;
    }
}
;
 //# sourceMappingURL=query-builder.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/select.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgSelectBase": (()=>PgSelectBase),
    "PgSelectBuilder": (()=>PgSelectBuilder),
    "PgSelectQueryBuilderBase": (()=>PgSelectQueryBuilderBase),
    "except": (()=>except),
    "exceptAll": (()=>exceptAll),
    "intersect": (()=>intersect),
    "intersectAll": (()=>intersectAll),
    "union": (()=>union),
    "unionAll": (()=>unionAll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/subquery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$view$2d$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/view-base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/view-common.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/selection-proxy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$builders$2f$query$2d$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/query-builders/query-builder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/query-promise.js [app-route] (ecmascript)");
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
class PgSelectBuilder {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgSelectBuilder";
    fields;
    session;
    dialect;
    withList = [];
    distinct;
    constructor(config){
        this.fields = config.fields;
        this.session = config.session;
        this.dialect = config.dialect;
        if (config.withList) {
            this.withList = config.withList;
        }
        this.distinct = config.distinct;
    }
    /**
   * Specify the table, subquery, or other target that you're
   * building a select query against.
   *
   * {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FROM | Postgres from documentation}
   */ from(source) {
        const isPartialSelect = !!this.fields;
        let fields;
        if (this.fields) {
            fields = this.fields;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(source, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subquery"])) {
            fields = Object.fromEntries(Object.keys(source._.selectedFields).map((key)=>[
                    key,
                    source[key]
                ]));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(source, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$view$2d$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgViewBase"])) {
            fields = source[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].selectedFields;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(source, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
            fields = {};
        } else {
            fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableColumns"])(source);
        }
        return new PgSelectBase({
            table: source,
            fields,
            isPartialSelect,
            session: this.session,
            dialect: this.dialect,
            withList: this.withList,
            distinct: this.distinct
        });
    }
}
class PgSelectQueryBuilderBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$builders$2f$query$2d$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypedQueryBuilder"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgSelectQueryBuilder";
    _;
    config;
    joinsNotNullableMap;
    tableName;
    isPartialSelect;
    session;
    dialect;
    constructor({ table, fields, isPartialSelect, session, dialect, withList, distinct }){
        super();
        this.config = {
            withList,
            table,
            fields: {
                ...fields
            },
            distinct,
            setOperators: []
        };
        this.isPartialSelect = isPartialSelect;
        this.session = session;
        this.dialect = dialect;
        this._ = {
            selectedFields: fields
        };
        this.tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableLikeName"])(table);
        this.joinsNotNullableMap = typeof this.tableName === "string" ? {
            [this.tableName]: true
        } : {};
    }
    createJoin(joinType) {
        return (table, on)=>{
            const baseTableName = this.tableName;
            const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableLikeName"])(table);
            if (typeof tableName === "string" && this.config.joins?.some((join)=>join.alias === tableName)) {
                throw new Error(`Alias "${tableName}" is already used in this query`);
            }
            if (!this.isPartialSelect) {
                if (Object.keys(this.joinsNotNullableMap).length === 1 && typeof baseTableName === "string") {
                    this.config.fields = {
                        [baseTableName]: this.config.fields
                    };
                }
                if (typeof tableName === "string" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"])) {
                    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subquery"]) ? table._.selectedFields : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["View"]) ? table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$view$2d$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ViewBaseConfig"]].selectedFields : table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns];
                    this.config.fields[tableName] = selection;
                }
            }
            if (typeof on === "function") {
                on = on(new Proxy(this.config.fields, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectionProxyHandler"]({
                    sqlAliasedBehavior: "sql",
                    sqlBehavior: "sql"
                })));
            }
            if (!this.config.joins) {
                this.config.joins = [];
            }
            this.config.joins.push({
                on,
                table,
                joinType,
                alias: tableName
            });
            if (typeof tableName === "string") {
                switch(joinType){
                    case "left":
                        {
                            this.joinsNotNullableMap[tableName] = false;
                            break;
                        }
                    case "right":
                        {
                            this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key])=>[
                                    key,
                                    false
                                ]));
                            this.joinsNotNullableMap[tableName] = true;
                            break;
                        }
                    case "inner":
                        {
                            this.joinsNotNullableMap[tableName] = true;
                            break;
                        }
                    case "full":
                        {
                            this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key])=>[
                                    key,
                                    false
                                ]));
                            this.joinsNotNullableMap[tableName] = false;
                            break;
                        }
                }
            }
            return this;
        };
    }
    /**
   * Executes a `left join` operation by adding another table to the current query.
   *
   * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#left-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User; pets: Pet | null }[] = await db.select()
   *   .from(users)
   *   .leftJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number; petId: number | null }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .leftJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */ leftJoin = this.createJoin("left");
    /**
   * Executes a `right join` operation by adding another table to the current query.
   *
   * Calling this method associates each row of the joined table with the corresponding row from the main table, if a match is found. If no matching row exists, it sets all columns of the main table to null.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#right-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User | null; pets: Pet }[] = await db.select()
   *   .from(users)
   *   .rightJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number | null; petId: number }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .rightJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */ rightJoin = this.createJoin("right");
    /**
   * Executes an `inner join` operation, creating a new table by combining rows from two tables that have matching values.
   *
   * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User; pets: Pet }[] = await db.select()
   *   .from(users)
   *   .innerJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number; petId: number }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .innerJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */ innerJoin = this.createJoin("inner");
    /**
   * Executes a `full join` operation by combining rows from two tables into a new table.
   *
   * Calling this method retrieves all rows from both main and joined tables, merging rows with matching values and filling in `null` for non-matching columns.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#full-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User | null; pets: Pet | null }[] = await db.select()
   *   .from(users)
   *   .fullJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number | null; petId: number | null }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .fullJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */ fullJoin = this.createJoin("full");
    createSetOperator(type, isAll) {
        return (rightSelection)=>{
            const rightSelect = typeof rightSelection === "function" ? rightSelection(getPgSetOperators()) : rightSelection;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["haveSameKeys"])(this.getSelectedFields(), rightSelect.getSelectedFields())) {
                throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
            }
            this.config.setOperators.push({
                type,
                isAll,
                rightSelect
            });
            return this;
        };
    }
    /**
   * Adds `union` set operator to the query.
   *
   * Calling this method will combine the result sets of the `select` statements and remove any duplicate rows that appear across them.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#union}
   *
   * @example
   *
   * ```ts
   * // Select all unique names from customers and users tables
   * await db.select({ name: users.name })
   *   .from(users)
   *   .union(
   *     db.select({ name: customers.name }).from(customers)
   *   );
   * // or
   * import { union } from 'drizzle-orm/pg-core'
   *
   * await union(
   *   db.select({ name: users.name }).from(users),
   *   db.select({ name: customers.name }).from(customers)
   * );
   * ```
   */ union = this.createSetOperator("union", false);
    /**
   * Adds `union all` set operator to the query.
   *
   * Calling this method will combine the result-set of the `select` statements and keep all duplicate rows that appear across them.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#union-all}
   *
   * @example
   *
   * ```ts
   * // Select all transaction ids from both online and in-store sales
   * await db.select({ transaction: onlineSales.transactionId })
   *   .from(onlineSales)
   *   .unionAll(
   *     db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
   *   );
   * // or
   * import { unionAll } from 'drizzle-orm/pg-core'
   *
   * await unionAll(
   *   db.select({ transaction: onlineSales.transactionId }).from(onlineSales),
   *   db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
   * );
   * ```
   */ unionAll = this.createSetOperator("union", true);
    /**
   * Adds `intersect` set operator to the query.
   *
   * Calling this method will retain only the rows that are present in both result sets and eliminate duplicates.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect}
   *
   * @example
   *
   * ```ts
   * // Select course names that are offered in both departments A and B
   * await db.select({ courseName: depA.courseName })
   *   .from(depA)
   *   .intersect(
   *     db.select({ courseName: depB.courseName }).from(depB)
   *   );
   * // or
   * import { intersect } from 'drizzle-orm/pg-core'
   *
   * await intersect(
   *   db.select({ courseName: depA.courseName }).from(depA),
   *   db.select({ courseName: depB.courseName }).from(depB)
   * );
   * ```
   */ intersect = this.createSetOperator("intersect", false);
    /**
   * Adds `intersect all` set operator to the query.
   *
   * Calling this method will retain only the rows that are present in both result sets including all duplicates.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect-all}
   *
   * @example
   *
   * ```ts
   * // Select all products and quantities that are ordered by both regular and VIP customers
   * await db.select({
   *   productId: regularCustomerOrders.productId,
   *   quantityOrdered: regularCustomerOrders.quantityOrdered
   * })
   * .from(regularCustomerOrders)
   * .intersectAll(
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * // or
   * import { intersectAll } from 'drizzle-orm/pg-core'
   *
   * await intersectAll(
   *   db.select({
   *     productId: regularCustomerOrders.productId,
   *     quantityOrdered: regularCustomerOrders.quantityOrdered
   *   })
   *   .from(regularCustomerOrders),
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * ```
   */ intersectAll = this.createSetOperator("intersect", true);
    /**
   * Adds `except` set operator to the query.
   *
   * Calling this method will retrieve all unique rows from the left query, except for the rows that are present in the result set of the right query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#except}
   *
   * @example
   *
   * ```ts
   * // Select all courses offered in department A but not in department B
   * await db.select({ courseName: depA.courseName })
   *   .from(depA)
   *   .except(
   *     db.select({ courseName: depB.courseName }).from(depB)
   *   );
   * // or
   * import { except } from 'drizzle-orm/pg-core'
   *
   * await except(
   *   db.select({ courseName: depA.courseName }).from(depA),
   *   db.select({ courseName: depB.courseName }).from(depB)
   * );
   * ```
   */ except = this.createSetOperator("except", false);
    /**
   * Adds `except all` set operator to the query.
   *
   * Calling this method will retrieve all rows from the left query, except for the rows that are present in the result set of the right query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#except-all}
   *
   * @example
   *
   * ```ts
   * // Select all products that are ordered by regular customers but not by VIP customers
   * await db.select({
   *   productId: regularCustomerOrders.productId,
   *   quantityOrdered: regularCustomerOrders.quantityOrdered,
   * })
   * .from(regularCustomerOrders)
   * .exceptAll(
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered,
   *   })
   *   .from(vipCustomerOrders)
   * );
   * // or
   * import { exceptAll } from 'drizzle-orm/pg-core'
   *
   * await exceptAll(
   *   db.select({
   *     productId: regularCustomerOrders.productId,
   *     quantityOrdered: regularCustomerOrders.quantityOrdered
   *   })
   *   .from(regularCustomerOrders),
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * ```
   */ exceptAll = this.createSetOperator("except", true);
    /** @internal */ addSetOperators(setOperators) {
        this.config.setOperators.push(...setOperators);
        return this;
    }
    /**
   * Adds a `where` clause to the query.
   *
   * Calling this method will select only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#filtering}
   *
   * @param where the `where` clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be selected.
   *
   * ```ts
   * // Select all cars with green color
   * await db.select().from(cars).where(eq(cars.color, 'green'));
   * // or
   * await db.select().from(cars).where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Select all BMW cars with a green color
   * await db.select().from(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Select all cars with the green or blue color
   * await db.select().from(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */ where(where) {
        if (typeof where === "function") {
            where = where(new Proxy(this.config.fields, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectionProxyHandler"]({
                sqlAliasedBehavior: "sql",
                sqlBehavior: "sql"
            })));
        }
        this.config.where = where;
        return this;
    }
    /**
   * Adds a `having` clause to the query.
   *
   * Calling this method will select only those rows that fulfill a specified condition. It is typically used with aggregate functions to filter the aggregated data based on a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#aggregations}
   *
   * @param having the `having` clause.
   *
   * @example
   *
   * ```ts
   * // Select all brands with more than one car
   * await db.select({
   * 	brand: cars.brand,
   * 	count: sql<number>`cast(count(${cars.id}) as int)`,
   * })
   *   .from(cars)
   *   .groupBy(cars.brand)
   *   .having(({ count }) => gt(count, 1));
   * ```
   */ having(having) {
        if (typeof having === "function") {
            having = having(new Proxy(this.config.fields, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectionProxyHandler"]({
                sqlAliasedBehavior: "sql",
                sqlBehavior: "sql"
            })));
        }
        this.config.having = having;
        return this;
    }
    groupBy(...columns) {
        if (typeof columns[0] === "function") {
            const groupBy = columns[0](new Proxy(this.config.fields, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectionProxyHandler"]({
                sqlAliasedBehavior: "alias",
                sqlBehavior: "sql"
            })));
            this.config.groupBy = Array.isArray(groupBy) ? groupBy : [
                groupBy
            ];
        } else {
            this.config.groupBy = columns;
        }
        return this;
    }
    orderBy(...columns) {
        if (typeof columns[0] === "function") {
            const orderBy = columns[0](new Proxy(this.config.fields, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectionProxyHandler"]({
                sqlAliasedBehavior: "alias",
                sqlBehavior: "sql"
            })));
            const orderByArray = Array.isArray(orderBy) ? orderBy : [
                orderBy
            ];
            if (this.config.setOperators.length > 0) {
                this.config.setOperators.at(-1).orderBy = orderByArray;
            } else {
                this.config.orderBy = orderByArray;
            }
        } else {
            const orderByArray = columns;
            if (this.config.setOperators.length > 0) {
                this.config.setOperators.at(-1).orderBy = orderByArray;
            } else {
                this.config.orderBy = orderByArray;
            }
        }
        return this;
    }
    /**
   * Adds a `limit` clause to the query.
   *
   * Calling this method will set the maximum number of rows that will be returned by this query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
   *
   * @param limit the `limit` clause.
   *
   * @example
   *
   * ```ts
   * // Get the first 10 people from this query.
   * await db.select().from(people).limit(10);
   * ```
   */ limit(limit) {
        if (this.config.setOperators.length > 0) {
            this.config.setOperators.at(-1).limit = limit;
        } else {
            this.config.limit = limit;
        }
        return this;
    }
    /**
   * Adds an `offset` clause to the query.
   *
   * Calling this method will skip a number of rows when returning results from this query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
   *
   * @param offset the `offset` clause.
   *
   * @example
   *
   * ```ts
   * // Get the 10th-20th people from this query.
   * await db.select().from(people).offset(10).limit(10);
   * ```
   */ offset(offset) {
        if (this.config.setOperators.length > 0) {
            this.config.setOperators.at(-1).offset = offset;
        } else {
            this.config.offset = offset;
        }
        return this;
    }
    /**
   * Adds a `for` clause to the query.
   *
   * Calling this method will specify a lock strength for this query that controls how strictly it acquires exclusive access to the rows being queried.
   *
   * See docs: {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE}
   *
   * @param strength the lock strength.
   * @param config the lock configuration.
   */ for(strength, config = {}) {
        this.config.lockingClause = {
            strength,
            config
        };
        return this;
    }
    /** @internal */ getSQL() {
        return this.dialect.buildSelectQuery(this.config);
    }
    toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
    }
    as(alias) {
        return new Proxy(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subquery"](this.getSQL(), this.config.fields, alias), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectionProxyHandler"]({
            alias,
            sqlAliasedBehavior: "alias",
            sqlBehavior: "error"
        }));
    }
    /** @internal */ getSelectedFields() {
        return new Proxy(this.config.fields, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectionProxyHandler"]({
            alias: this.tableName,
            sqlAliasedBehavior: "alias",
            sqlBehavior: "error"
        }));
    }
    $dynamic() {
        return this;
    }
}
class PgSelectBase extends PgSelectQueryBuilderBase {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgSelect";
    /** @internal */ _prepare(name) {
        const { session, config, dialect, joinsNotNullableMap } = this;
        if (!session) {
            throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.prepareQuery", ()=>{
            const fieldsList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["orderSelectedFields"])(config.fields);
            const query = session.prepareQuery(dialect.sqlToQuery(this.getSQL()), fieldsList, name, true);
            query.joinsNotNullableMap = joinsNotNullableMap;
            return query;
        });
    }
    /**
   * Create a prepared statement for this query. This allows
   * the database to remember this query for the given session
   * and call it by name, rather than specifying the full query.
   *
   * {@link https://www.postgresql.org/docs/current/sql-prepare.html | Postgres prepare documentation}
   */ prepare(name) {
        return this._prepare(name);
    }
    execute = (placeholderValues)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.operation", ()=>{
            return this._prepare().execute(placeholderValues);
        });
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyMixins"])(PgSelectBase, [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryPromise"]
]);
function createSetOperator(type, isAll) {
    return (leftSelect, rightSelect, ...restSelects)=>{
        const setOperators = [
            rightSelect,
            ...restSelects
        ].map((select)=>({
                type,
                isAll,
                rightSelect: select
            }));
        for (const setOperator of setOperators){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["haveSameKeys"])(leftSelect.getSelectedFields(), setOperator.rightSelect.getSelectedFields())) {
                throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
            }
        }
        return leftSelect.addSetOperators(setOperators);
    };
}
const getPgSetOperators = ()=>({
        union,
        unionAll,
        intersect,
        intersectAll,
        except,
        exceptAll
    });
const union = createSetOperator("union", false);
const unionAll = createSetOperator("union", true);
const intersect = createSetOperator("intersect", false);
const intersectAll = createSetOperator("intersect", true);
const except = createSetOperator("except", false);
const exceptAll = createSetOperator("except", true);
;
 //# sourceMappingURL=select.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/query-builder.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "QueryBuilder": (()=>QueryBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/subquery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/selection-proxy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/select.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/dialect.js [app-route] (ecmascript)");
;
;
;
;
;
class QueryBuilder {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgQueryBuilder";
    dialect;
    $with(alias) {
        const queryBuilder = this;
        return {
            as (qb) {
                if (typeof qb === "function") {
                    qb = qb(queryBuilder);
                }
                return new Proxy(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WithSubquery"](qb.getSQL(), qb.getSelectedFields(), alias, true), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectionProxyHandler"]({
                    alias,
                    sqlAliasedBehavior: "alias",
                    sqlBehavior: "error"
                }));
            }
        };
    }
    with(...queries) {
        const self = this;
        function select(fields) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
                fields: fields ?? void 0,
                session: void 0,
                dialect: self.getDialect(),
                withList: queries
            });
        }
        function selectDistinct(fields) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
                fields: fields ?? void 0,
                session: void 0,
                dialect: self.getDialect(),
                distinct: true
            });
        }
        function selectDistinctOn(on, fields) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
                fields: fields ?? void 0,
                session: void 0,
                dialect: self.getDialect(),
                distinct: {
                    on
                }
            });
        }
        return {
            select,
            selectDistinct,
            selectDistinctOn
        };
    }
    select(fields) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
            fields: fields ?? void 0,
            session: void 0,
            dialect: this.getDialect()
        });
    }
    selectDistinct(fields) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
            fields: fields ?? void 0,
            session: void 0,
            dialect: this.getDialect(),
            distinct: true
        });
    }
    selectDistinctOn(on, fields) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
            fields: fields ?? void 0,
            session: void 0,
            dialect: this.getDialect(),
            distinct: {
                on
            }
        });
    }
    // Lazy load dialect to avoid circular dependency
    getDialect() {
        if (!this.dialect) {
            this.dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDialect"]();
        }
        return this.dialect;
    }
}
;
 //# sourceMappingURL=query-builder.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/update.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgUpdateBase": (()=>PgUpdateBase),
    "PgUpdateBuilder": (()=>PgUpdateBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/query-promise.js [app-route] (ecmascript)");
;
;
;
;
class PgUpdateBuilder {
    constructor(table, session, dialect, withList){
        this.table = table;
        this.session = session;
        this.dialect = dialect;
        this.withList = withList;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgUpdateBuilder";
    set(values) {
        return new PgUpdateBase(this.table, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapUpdateSet"])(this.table, values), this.session, this.dialect, this.withList);
    }
}
class PgUpdateBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryPromise"] {
    constructor(table, set, session, dialect, withList){
        super();
        this.session = session;
        this.dialect = dialect;
        this.config = {
            set,
            table,
            withList
        };
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgUpdate";
    config;
    /**
   * Adds a 'where' clause to the query.
   *
   * Calling this method will update only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/update}
   *
   * @param where the 'where' clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be updated.
   *
   * ```ts
   * // Update all cars with green color
   * await db.update(cars).set({ color: 'red' })
   *   .where(eq(cars.color, 'green'));
   * // or
   * await db.update(cars).set({ color: 'red' })
   *   .where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Update all BMW cars with a green color
   * await db.update(cars).set({ color: 'red' })
   *   .where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Update all cars with the green or blue color
   * await db.update(cars).set({ color: 'red' })
   *   .where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */ where(where) {
        this.config.where = where;
        return this;
    }
    returning(fields = this.config.table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns]) {
        this.config.returning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["orderSelectedFields"])(fields);
        return this;
    }
    /** @internal */ getSQL() {
        return this.dialect.buildUpdateQuery(this.config);
    }
    toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
    }
    /** @internal */ _prepare(name) {
        return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name, true);
    }
    prepare(name) {
        return this._prepare(name);
    }
    execute = (placeholderValues)=>{
        return this._prepare().execute(placeholderValues);
    };
    $dynamic() {
        return this;
    }
}
;
 //# sourceMappingURL=update.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/insert.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgInsertBase": (()=>PgInsertBase),
    "PgInsertBuilder": (()=>PgInsertBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/query-promise.js [app-route] (ecmascript)");
;
;
;
;
;
;
class PgInsertBuilder {
    constructor(table, session, dialect, withList){
        this.table = table;
        this.session = session;
        this.dialect = dialect;
        this.withList = withList;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgInsertBuilder";
    values(values) {
        values = Array.isArray(values) ? values : [
            values
        ];
        if (values.length === 0) {
            throw new Error("values() must be called with at least one value");
        }
        const mappedValues = values.map((entry)=>{
            const result = {};
            const cols = this.table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns];
            for (const colKey of Object.keys(entry)){
                const colValue = entry[colKey];
                result[colKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(colValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQL"]) ? colValue : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Param"](colValue, cols[colKey]);
            }
            return result;
        });
        return new PgInsertBase(this.table, mappedValues, this.session, this.dialect, this.withList);
    }
}
class PgInsertBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryPromise"] {
    constructor(table, values, session, dialect, withList){
        super();
        this.session = session;
        this.dialect = dialect;
        this.config = {
            table,
            values,
            withList
        };
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgInsert";
    config;
    returning(fields = this.config.table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns]) {
        this.config.returning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["orderSelectedFields"])(fields);
        return this;
    }
    /**
   * Adds an `on conflict do nothing` clause to the query.
   *
   * Calling this method simply avoids inserting a row as its alternative action.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert#on-conflict-do-nothing}
   *
   * @param config The `target` and `where` clauses.
   *
   * @example
   * ```ts
   * // Insert one row and cancel the insert if there's a conflict
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoNothing();
   *
   * // Explicitly specify conflict target
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoNothing({ target: cars.id });
   * ```
   */ onConflictDoNothing(config = {}) {
        if (config.target === void 0) {
            this.config.onConflict = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`do nothing`;
        } else {
            let targetColumn = "";
            targetColumn = Array.isArray(config.target) ? config.target.map((it)=>this.dialect.escapeName(it.name)).join(",") : this.dialect.escapeName(config.target.name);
            const whereSql = config.where ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` where ${config.where}` : void 0;
            this.config.onConflict = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(targetColumn)})${whereSql} do nothing`;
        }
        return this;
    }
    /**
   * Adds an `on conflict do update` clause to the query.
   *
   * Calling this method will update the existing row that conflicts with the row proposed for insertion as its alternative action.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert#upserts-and-conflicts}
   *
   * @param config The `target`, `set` and `where` clauses.
   *
   * @example
   * ```ts
   * // Update the row if there's a conflict
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoUpdate({
   *     target: cars.id,
   *     set: { brand: 'Porsche' }
   *   });
   *
   * // Upsert with 'where' clause
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoUpdate({
   *     target: cars.id,
   *     set: { brand: 'newBMW' },
   *     targetWhere: sql`${cars.createdAt} > '2023-01-01'::date`,
   *   });
   * ```
   */ onConflictDoUpdate(config) {
        if (config.where && (config.targetWhere || config.setWhere)) {
            throw new Error('You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.');
        }
        const whereSql = config.where ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` where ${config.where}` : void 0;
        const targetWhereSql = config.targetWhere ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` where ${config.targetWhere}` : void 0;
        const setWhereSql = config.setWhere ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]` where ${config.setWhere}` : void 0;
        const setSql = this.dialect.buildUpdateSet(this.config.table, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapUpdateSet"])(this.config.table, config.set));
        let targetColumn = "";
        targetColumn = Array.isArray(config.target) ? config.target.map((it)=>this.dialect.escapeName(it.name)).join(",") : this.dialect.escapeName(config.target.name);
        this.config.onConflict = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(targetColumn)})${targetWhereSql} do update set ${setSql}${whereSql}${setWhereSql}`;
        return this;
    }
    /** @internal */ getSQL() {
        return this.dialect.buildInsertQuery(this.config);
    }
    toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
    }
    /** @internal */ _prepare(name) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.prepareQuery", ()=>{
            return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name, true);
        });
    }
    prepare(name) {
        return this._prepare(name);
    }
    execute = (placeholderValues)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.operation", ()=>{
            return this._prepare().execute(placeholderValues);
        });
    };
    $dynamic() {
        return this;
    }
}
;
 //# sourceMappingURL=insert.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/delete.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgDeleteBase": (()=>PgDeleteBase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/query-promise.js [app-route] (ecmascript)");
;
;
;
;
;
class PgDeleteBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryPromise"] {
    constructor(table, session, dialect, withList){
        super();
        this.session = session;
        this.dialect = dialect;
        this.config = {
            table,
            withList
        };
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgDelete";
    config;
    /**
   * Adds a `where` clause to the query.
   *
   * Calling this method will delete only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/delete}
   *
   * @param where the `where` clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be deleted.
   *
   * ```ts
   * // Delete all cars with green color
   * await db.delete(cars).where(eq(cars.color, 'green'));
   * // or
   * await db.delete(cars).where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Delete all BMW cars with a green color
   * await db.delete(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Delete all cars with the green or blue color
   * await db.delete(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */ where(where) {
        this.config.where = where;
        return this;
    }
    returning(fields = this.config.table[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"].Symbol.Columns]) {
        this.config.returning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["orderSelectedFields"])(fields);
        return this;
    }
    /** @internal */ getSQL() {
        return this.dialect.buildDeleteQuery(this.config);
    }
    toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
    }
    /** @internal */ _prepare(name) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.prepareQuery", ()=>{
            return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name, true);
        });
    }
    prepare(name) {
        return this._prepare(name);
    }
    execute = (placeholderValues)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.operation", ()=>{
            return this._prepare().execute(placeholderValues);
        });
    };
    $dynamic() {
        return this;
    }
}
;
 //# sourceMappingURL=delete.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/refresh-materialized-view.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgRefreshMaterializedView": (()=>PgRefreshMaterializedView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/query-promise.js [app-route] (ecmascript)");
;
;
;
class PgRefreshMaterializedView extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryPromise"] {
    constructor(view, session, dialect){
        super();
        this.session = session;
        this.dialect = dialect;
        this.config = {
            view
        };
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgRefreshMaterializedView";
    config;
    concurrently() {
        if (this.config.withNoData !== void 0) {
            throw new Error("Cannot use concurrently and withNoData together");
        }
        this.config.concurrently = true;
        return this;
    }
    withNoData() {
        if (this.config.concurrently !== void 0) {
            throw new Error("Cannot use concurrently and withNoData together");
        }
        this.config.withNoData = true;
        return this;
    }
    /** @internal */ getSQL() {
        return this.dialect.buildRefreshMaterializedViewQuery(this.config);
    }
    toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
    }
    /** @internal */ _prepare(name) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.prepareQuery", ()=>{
            return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), void 0, name, true);
        });
    }
    prepare(name) {
        return this._prepare(name);
    }
    execute = (placeholderValues)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.operation", ()=>{
            return this._prepare().execute(placeholderValues);
        });
    };
}
;
 //# sourceMappingURL=refresh-materialized-view.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/raw.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgRaw": (()=>PgRaw)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/query-promise.js [app-route] (ecmascript)");
;
;
class PgRaw extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$query$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryPromise"] {
    constructor(execute, sql, query, mapBatchResult){
        super();
        this.execute = execute;
        this.sql = sql;
        this.query = query;
        this.mapBatchResult = mapBatchResult;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgRaw";
    /** @internal */ getSQL() {
        return this.sql;
    }
    getQuery() {
        return this.query;
    }
    mapResult(result, isFromBatch) {
        return isFromBatch ? this.mapBatchResult(result) : result;
    }
    _prepare() {
        return this;
    }
    /** @internal */ isResponseInArrayMode() {
        return false;
    }
}
;
 //# sourceMappingURL=raw.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/db.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgDatabase": (()=>PgDatabase),
    "withReplicas": (()=>withReplicas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$query$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/query.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$query$2d$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/query-builder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/subquery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/selection-proxy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/select.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/update.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$insert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/insert.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/delete.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$refresh$2d$materialized$2d$view$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/refresh-materialized-view.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$raw$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/query-builders/raw.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
class PgDatabase {
    constructor(dialect, session, schema){
        this.dialect = dialect;
        this.session = session;
        this._ = schema ? {
            schema: schema.schema,
            fullSchema: schema.fullSchema,
            tableNamesMap: schema.tableNamesMap,
            session
        } : {
            schema: void 0,
            fullSchema: {},
            tableNamesMap: {},
            session
        };
        this.query = {};
        if (this._.schema) {
            for (const [tableName, columns] of Object.entries(this._.schema)){
                this.query[tableName] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$query$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RelationalQueryBuilder"](schema.fullSchema, this._.schema, this._.tableNamesMap, schema.fullSchema[tableName], columns, dialect, session);
            }
        }
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgDatabase";
    query;
    /**
   * Creates a subquery that defines a temporary named result set as a CTE.
   *
   * It is useful for breaking down complex queries into simpler parts and for reusing the result set in subsequent parts of the query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
   *
   * @param alias The alias for the subquery.
   *
   * Failure to provide an alias will result in a DrizzleTypeError, preventing the subquery from being referenced in other queries.
   *
   * @example
   *
   * ```ts
   * // Create a subquery with alias 'sq' and use it in the select query
   * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
   *
   * const result = await db.with(sq).select().from(sq);
   * ```
   *
   * To select arbitrary SQL values as fields in a CTE and reference them in other CTEs or in the main query, you need to add aliases to them:
   *
   * ```ts
   * // Select an arbitrary SQL value as a field in a CTE and reference it in the main query
   * const sq = db.$with('sq').as(db.select({
   *   name: sql<string>`upper(${users.name})`.as('name'),
   * })
   * .from(users));
   *
   * const result = await db.with(sq).select({ name: sq.name }).from(sq);
   * ```
   */ $with(alias) {
        return {
            as (qb) {
                if (typeof qb === "function") {
                    qb = qb(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$query$2d$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryBuilder"]());
                }
                return new Proxy(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$subquery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WithSubquery"](qb.getSQL(), qb.getSelectedFields(), alias, true), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$selection$2d$proxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectionProxyHandler"]({
                    alias,
                    sqlAliasedBehavior: "alias",
                    sqlBehavior: "error"
                }));
            }
        };
    }
    /**
   * Incorporates a previously defined CTE (using `$with`) into the main query.
   *
   * This method allows the main query to reference a temporary named result set.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
   *
   * @param queries The CTEs to incorporate into the main query.
   *
   * @example
   *
   * ```ts
   * // Define a subquery 'sq' as a CTE using $with
   * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
   *
   * // Incorporate the CTE 'sq' into the main query and select from it
   * const result = await db.with(sq).select().from(sq);
   * ```
   */ with(...queries) {
        const self = this;
        function select(fields) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
                fields: fields ?? void 0,
                session: self.session,
                dialect: self.dialect,
                withList: queries
            });
        }
        function selectDistinct(fields) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
                fields: fields ?? void 0,
                session: self.session,
                dialect: self.dialect,
                withList: queries,
                distinct: true
            });
        }
        function selectDistinctOn(on, fields) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
                fields: fields ?? void 0,
                session: self.session,
                dialect: self.dialect,
                withList: queries,
                distinct: {
                    on
                }
            });
        }
        function update(table) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgUpdateBuilder"](table, self.session, self.dialect, queries);
        }
        function insert(table) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$insert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgInsertBuilder"](table, self.session, self.dialect, queries);
        }
        function delete_(table) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDeleteBase"](table, self.session, self.dialect, queries);
        }
        return {
            select,
            selectDistinct,
            selectDistinctOn,
            update,
            insert,
            delete: delete_
        };
    }
    select(fields) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
            fields: fields ?? void 0,
            session: this.session,
            dialect: this.dialect
        });
    }
    selectDistinct(fields) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
            fields: fields ?? void 0,
            session: this.session,
            dialect: this.dialect,
            distinct: true
        });
    }
    selectDistinctOn(on, fields) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSelectBuilder"]({
            fields: fields ?? void 0,
            session: this.session,
            dialect: this.dialect,
            distinct: {
                on
            }
        });
    }
    /**
   * Creates an update query.
   *
   * Calling this method without `.where()` clause will update all rows in a table. The `.where()` clause specifies which rows should be updated.
   *
   * Use `.set()` method to specify which values to update.
   *
   * See docs: {@link https://orm.drizzle.team/docs/update}
   *
   * @param table The table to update.
   *
   * @example
   *
   * ```ts
   * // Update all rows in the 'cars' table
   * await db.update(cars).set({ color: 'red' });
   *
   * // Update rows with filters and conditions
   * await db.update(cars).set({ color: 'red' }).where(eq(cars.brand, 'BMW'));
   *
   * // Update with returning clause
   * const updatedCar: Car[] = await db.update(cars)
   *   .set({ color: 'red' })
   *   .where(eq(cars.id, 1))
   *   .returning();
   * ```
   */ update(table) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgUpdateBuilder"](table, this.session, this.dialect);
    }
    /**
   * Creates an insert query.
   *
   * Calling this method will create new rows in a table. Use `.values()` method to specify which values to insert.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert}
   *
   * @param table The table to insert into.
   *
   * @example
   *
   * ```ts
   * // Insert one row
   * await db.insert(cars).values({ brand: 'BMW' });
   *
   * // Insert multiple rows
   * await db.insert(cars).values([{ brand: 'BMW' }, { brand: 'Porsche' }]);
   *
   * // Insert with returning clause
   * const insertedCar: Car[] = await db.insert(cars)
   *   .values({ brand: 'BMW' })
   *   .returning();
   * ```
   */ insert(table) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$insert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgInsertBuilder"](table, this.session, this.dialect);
    }
    /**
   * Creates a delete query.
   *
   * Calling this method without `.where()` clause will delete all rows in a table. The `.where()` clause specifies which rows should be deleted.
   *
   * See docs: {@link https://orm.drizzle.team/docs/delete}
   *
   * @param table The table to delete from.
   *
   * @example
   *
   * ```ts
   * // Delete all rows in the 'cars' table
   * await db.delete(cars);
   *
   * // Delete rows with filters and conditions
   * await db.delete(cars).where(eq(cars.color, 'green'));
   *
   * // Delete with returning clause
   * const deletedCar: Car[] = await db.delete(cars)
   *   .where(eq(cars.id, 1))
   *   .returning();
   * ```
   */ delete(table) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDeleteBase"](table, this.session, this.dialect);
    }
    refreshMaterializedView(view) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$refresh$2d$materialized$2d$view$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgRefreshMaterializedView"](view, this.session, this.dialect);
    }
    execute(query) {
        const sql = query.getSQL();
        const builtQuery = this.dialect.sqlToQuery(sql);
        const prepared = this.session.prepareQuery(builtQuery, void 0, void 0, false);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$query$2d$builders$2f$raw$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgRaw"](()=>prepared.execute(), sql, builtQuery, (result)=>prepared.mapResult(result, true));
    }
    transaction(transaction, config) {
        return this.session.transaction(transaction, config);
    }
}
const withReplicas = (primary, replicas, getReplica = ()=>replicas[Math.floor(Math.random() * replicas.length)])=>{
    const select = (...args)=>getReplica(replicas).select(...args);
    const selectDistinct = (...args)=>getReplica(replicas).selectDistinct(...args);
    const selectDistinctOn = (...args)=>getReplica(replicas).selectDistinctOn(...args);
    const $with = (...args)=>getReplica(replicas).with(...args);
    const update = (...args)=>primary.update(...args);
    const insert = (...args)=>primary.insert(...args);
    const $delete = (...args)=>primary.delete(...args);
    const execute = (...args)=>primary.execute(...args);
    const transaction = (...args)=>primary.transaction(...args);
    const refreshMaterializedView = (...args)=>primary.refreshMaterializedView(...args);
    return {
        ...primary,
        update,
        insert,
        delete: $delete,
        execute,
        transaction,
        refreshMaterializedView,
        $primary: primary,
        select,
        selectDistinct,
        selectDistinctOn,
        with: $with,
        get query () {
            return getReplica(replicas).query;
        }
    };
};
;
 //# sourceMappingURL=db.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/session.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PgPreparedQuery": (()=>PgPreparedQuery),
    "PgSession": (()=>PgSession),
    "PgTransaction": (()=>PgTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/db.js [app-route] (ecmascript)");
;
;
;
;
;
class PgPreparedQuery {
    constructor(query){
        this.query = query;
    }
    getQuery() {
        return this.query;
    }
    mapResult(response, _isFromBatch) {
        return response;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgPreparedQuery";
    /** @internal */ joinsNotNullableMap;
}
class PgSession {
    constructor(dialect){
        this.dialect = dialect;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgSession";
    execute(query) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.operation", ()=>{
            const prepared = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.prepareQuery", ()=>{
                return this.prepareQuery(this.dialect.sqlToQuery(query), void 0, void 0, false);
            });
            return prepared.execute();
        });
    }
    all(query) {
        return this.prepareQuery(this.dialect.sqlToQuery(query), void 0, void 0, false).all();
    }
}
class PgTransaction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDatabase"] {
    constructor(dialect, session, schema, nestedIndex = 0){
        super(dialect, session, schema);
        this.schema = schema;
        this.nestedIndex = nestedIndex;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PgTransaction";
    rollback() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionRollbackError"]();
    }
    /** @internal */ getTransactionConfigSQL(config) {
        const chunks = [];
        if (config.isolationLevel) {
            chunks.push(`isolation level ${config.isolationLevel}`);
        }
        if (config.accessMode) {
            chunks.push(config.accessMode);
        }
        if (typeof config.deferrable === "boolean") {
            chunks.push(config.deferrable ? "deferrable" : "not deferrable");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(chunks.join(" "));
    }
    setTransaction(config) {
        return this.session.execute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`set transaction ${this.getTransactionConfigSQL(config)}`);
    }
}
;
 //# sourceMappingURL=session.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/postgres-js/session.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PostgresJsPreparedQuery": (()=>PostgresJsPreparedQuery),
    "PostgresJsSession": (()=>PostgresJsSession),
    "PostgresJsTransaction": (()=>PostgresJsTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/tracing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/session.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/logger.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
class PostgresJsPreparedQuery extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgPreparedQuery"] {
    constructor(client, queryString, params, logger, fields, _isResponseInArrayMode, customResultMapper){
        super({
            sql: queryString,
            params
        });
        this.client = client;
        this.queryString = queryString;
        this.params = params;
        this.logger = logger;
        this.fields = fields;
        this._isResponseInArrayMode = _isResponseInArrayMode;
        this.customResultMapper = customResultMapper;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PostgresJsPreparedQuery";
    async execute(placeholderValues = {}) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.execute", async (span)=>{
            const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fillPlaceholders"])(this.params, placeholderValues);
            span?.setAttributes({
                "drizzle.query.text": this.queryString,
                "drizzle.query.params": JSON.stringify(params)
            });
            this.logger.logQuery(this.queryString, params);
            const { fields, queryString: query, client, joinsNotNullableMap, customResultMapper } = this;
            if (!fields && !customResultMapper) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.driver.execute", ()=>{
                    return client.unsafe(query, params);
                });
            }
            const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.driver.execute", ()=>{
                span?.setAttributes({
                    "drizzle.query.text": query,
                    "drizzle.query.params": JSON.stringify(params)
                });
                return client.unsafe(query, params).values();
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.mapResponse", ()=>{
                return customResultMapper ? customResultMapper(rows) : rows.map((row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapResultRow"])(fields, row, joinsNotNullableMap));
            });
        });
    }
    all(placeholderValues = {}) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.execute", async (span)=>{
            const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fillPlaceholders"])(this.params, placeholderValues);
            span?.setAttributes({
                "drizzle.query.text": this.queryString,
                "drizzle.query.params": JSON.stringify(params)
            });
            this.logger.logQuery(this.queryString, params);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$tracing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracer"].startActiveSpan("drizzle.driver.execute", ()=>{
                span?.setAttributes({
                    "drizzle.query.text": this.queryString,
                    "drizzle.query.params": JSON.stringify(params)
                });
                return this.client.unsafe(this.queryString, params);
            });
        });
    }
    /** @internal */ isResponseInArrayMode() {
        return this._isResponseInArrayMode;
    }
}
class PostgresJsSession extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgSession"] {
    constructor(client, dialect, schema, options = {}){
        super(dialect);
        this.client = client;
        this.schema = schema;
        this.options = options;
        this.logger = options.logger ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoopLogger"]();
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PostgresJsSession";
    logger;
    prepareQuery(query, fields, name, isResponseInArrayMode, customResultMapper) {
        return new PostgresJsPreparedQuery(this.client, query.sql, query.params, this.logger, fields, isResponseInArrayMode, customResultMapper);
    }
    query(query, params) {
        this.logger.logQuery(query, params);
        return this.client.unsafe(query, params).values();
    }
    queryObjects(query, params) {
        return this.client.unsafe(query, params);
    }
    transaction(transaction, config) {
        return this.client.begin(async (client)=>{
            const session = new PostgresJsSession(client, this.dialect, this.schema, this.options);
            const tx = new PostgresJsTransaction(this.dialect, session, this.schema);
            if (config) {
                await tx.setTransaction(config);
            }
            return transaction(tx);
        });
    }
}
class PostgresJsTransaction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgTransaction"] {
    constructor(dialect, session, schema, nestedIndex = 0){
        super(dialect, session, schema, nestedIndex);
        this.session = session;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityKind"]] = "PostgresJsTransaction";
    transaction(transaction) {
        return this.session.client.savepoint((client)=>{
            const session = new PostgresJsSession(client, this.dialect, this.schema, this.session.options);
            const tx = new PostgresJsTransaction(this.dialect, session, this.schema);
            return transaction(tx);
        });
    }
}
;
 //# sourceMappingURL=session.js.map
}}),
"[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/postgres-js/driver.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "drizzle": (()=>drizzle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/dialect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/logger.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/relations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/postgres-js/session.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@types+react@18.3.18_postgres@3.4.5_react@18.3.1/node_modules/drizzle-orm/pg-core/db.js [app-route] (ecmascript)");
;
;
;
;
;
function drizzle(client, config = {}) {
    const transparentParser = (val)=>val;
    for (const type of [
        "1184",
        "1082",
        "1083",
        "1114"
    ]){
        client.options.parsers[type] = transparentParser;
        client.options.serializers[type] = transparentParser;
    }
    client.options.serializers["114"] = transparentParser;
    client.options.serializers["3802"] = transparentParser;
    const dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDialect"]();
    let logger;
    if (config.logger === true) {
        logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DefaultLogger"]();
    } else if (config.logger !== false) {
        logger = config.logger;
    }
    let schema;
    if (config.schema) {
        const tablesConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractTablesRelationalConfig"])(config.schema, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTableRelationsHelpers"]);
        schema = {
            fullSchema: config.schema,
            schema: tablesConfig.tables,
            tableNamesMap: tablesConfig.tableNamesMap
        };
    }
    const session = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostgresJsSession"](client, dialect, schema, {
        logger
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$types$2b$react$40$18$2e$3$2e$18_postgres$40$3$2e$4$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDatabase"](dialect, session, schema);
}
;
 //# sourceMappingURL=driver.js.map
}}),

};

//# sourceMappingURL=918fe_drizzle-orm_cceab1._.js.map