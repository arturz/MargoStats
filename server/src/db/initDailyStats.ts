import createKnex from 'knex'
import { dailyStatsInterval } from '../../config.js'

const name = 'daily_stats'

export default async ({ knex }: { knex: createKnex }) => {
  if(await knex.schema.hasTable(name))
    return

  await knex.schema.createTable(name, table => {
    table.dateTime('day').notNullable()
    table.string('world', 20).notNullable()
    table.boolean('private').notNullable()
    table.string('nick', 30).notNullable()

    //time spent in game
    table.integer('minutes').defaultTo(dailyStatsInterval)

    table.primary(['day', 'world', 'private', 'nick'])
    table.index(['world', 'nick', 'day'], 'world_nick_day_index')
  })

  console.log(`Table ${name} created`)
}