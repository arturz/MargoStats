import getKnex from '../../db/getKnex'
import getTimeConstraints from './getTimeConstraints'
import { Summaries } from '../../../../types/Summary'

const TOP_SUMMARY_LIMIT = 1000

export default async (): Promise<Summaries> => {
  const knex = await getKnex()
  const { since, before } = getTimeConstraints()

  const topSummaries: Summaries = []

  ;(await knex('daily_stats')
    .select('world', 'private', 'nick')
    .sum('minutes as minutes')
    .where('day', '>=', since)
    .andWhere('day', '<', before)
    .groupBy('world')
    .groupBy('private')
    .groupBy('nick')
    .orderBy('minutes', 'desc')
    .limit(TOP_SUMMARY_LIMIT)
  ).forEach(({ world, private: isPrivate, nick, minutes }, index) =>
    topSummaries.push({
      month: since,
      world,
      private: isPrivate,
      index,
      nick,
      minutes
    })
  )

  return topSummaries
}