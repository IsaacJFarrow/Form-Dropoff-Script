import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const events = sqliteTable('events', {
  id:        integer('id').primaryKey({ autoIncrement: true }),
  timestamp: text('timestamp').notNull(),
  sessionId: text('session_id'),
  eventType: text('event_type'),
  step:      text('step'),
});
