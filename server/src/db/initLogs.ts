import createKnex from 'knex'

const name = 'logs'

export default async ({ knex }: { knex: createKnex }) => {
  if(await knex.schema.hasTable(name))
    return

  await knex.schema.createTable(name, table => {
    table.bigIncrements('log_id').primary()
    table.dateTime('created_at').notNullable().index('created_at')
    table.string('type').notNullable().index('type')
    table.json('payload')
  })

  console.log(`Table ${name} created`)
}