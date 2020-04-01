import createKnex from 'knex'

const name = 'worlds'

export default async ({ knex }: { knex: createKnex }) => {
  if(await knex.schema.hasTable(name))
    return

  await knex.schema.createTable(name, table => {
    table.string('world', 25).notNullable().index()
    table.boolean('private').notNullable()
    table.primary(['world', 'private'])
  })

  console.log(`Table ${name} created`)
}