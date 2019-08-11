import createKnex from 'knex'

const name = 'users'

export default async ({ knex }: { knex: createKnex }) => {
  if(await knex.schema.hasTable(name))
    return

  await knex.schema.createTable(name, table => {
    table.uuid('id').primary()

    table.text('login').notNullable()
    table.text('password').notNullable()
    table.json('roles')
  })

  //automatically generates id before insert
  await knex.raw(`
    CREATE TRIGGER before_insert_${name}
    BEFORE INSERT ON ${name}
    FOR EACH ROW
    SET NEW.id = UUID();
  `)

  console.log(`Table ${name} created`)
}