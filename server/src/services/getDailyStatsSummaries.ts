import getKnex from '../db/getKnex'

export default async ({ month, world, private: isPrivate }: { month: Date, world: string, private: boolean }) => {
  const knex = await getKnex()

  return await knex('daily_stats_summaries')
    .select('*')
    .where({ 
      month,
      world,
      private: isPrivate
    })
    .orderBy('minutes', 'desc')
}