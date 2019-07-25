import getKnex from '../db/getKnex'

export default async ({ type, payload }: { type: string, payload: string }) => {
  const createdAt = new Date 
  const knex = await getKnex()

  await knex('logs')
    .insert({
      created_at: createdAt,
      type,
      payload: payload == null 
        ? null
        : JSON.stringify(payload)
    })
}