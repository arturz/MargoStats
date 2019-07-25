import createKnex from 'knex'

const name = 'daily_stats_top_summaries'

export default async ({ knex }: { knex: createKnex }) => {
  if(await knex.schema.hasTable(name))
    return

  await knex.schema.createTable(name, table => {
    table.dateTime('month').notNullable().index('month')
    table.integer('index').notNullable()
    table.primary(['month', 'index'])

    table.string('world', 20).notNullable()
    table.boolean('private').notNullable()
    table.string('nick', 20).notNullable()
    table.integer('minutes').notNullable().index('minutes')
  })

  console.log(`Table ${name} created`)
}