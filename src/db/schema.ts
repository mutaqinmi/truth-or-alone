import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const post = pgTable("posts", {
    post_id: varchar("post_id").primaryKey(),
    sender: varchar("sender"),
    receiver: varchar("receiver"),
    content: varchar("content"),
    created_at: timestamp("created_at").defaultNow(),
})