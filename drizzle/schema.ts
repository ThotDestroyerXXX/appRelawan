import { pgTable, index, integer, varchar, timestamp } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const appRelawanPost = pgTable("app_relawan_post", {
	id: integer("id").primaryKey().generatedByDefaultAsIdentity({ name: "app_relawan_post_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: varchar("name", { length: 256 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
},
(table) => {
	return {
		nameIdx: index("name_idx").using("btree", table.name.asc().nullsLast()),
	}
});