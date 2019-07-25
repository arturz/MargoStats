import getKnex from '../db/getKnex'

export default async ({ month }: { month: Date | string }) => {
  const knex = await getKnex()

  return await knex('daily_stats_top_summaries')
    .select('*')
    .where({ month })
    .orderBy('minutes', 'desc')
}