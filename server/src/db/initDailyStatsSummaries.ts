import createKnex from 'knex'

const name = 'daily_stats_summaries'

export default async ({ knex }: { knex: createKnex }) => {
  if(await knex.schema.hasTable(name))
    return

  await knex.schema.createTable(name, table => {
    table.dateTime('month').notNullable().index('month')
    table.string('world', 25).notNullable().index('world')
    table.boolean('private').notNullable()
    table.index(['month', 'world', 'private'], 'month_world_private_index')

    table.integer('index').notNullable()
    table.primary(['month', 'world', 'private', 'index'])

    table.string('nick', 30).notNullable()
    table.integer('minutes').notNullable().index('minutes')
  })

  console.log(`Table ${name} created`)
}