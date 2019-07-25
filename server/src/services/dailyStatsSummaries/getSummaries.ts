import getKnex from '../../db/getKnex'
import getTimeConstraints from './getTimeConstraints'
import { getWorlds } from '../worlds'
import { Summaries } from '../../../../types/Summary'

const SUMMARY_LIMIT = 200

export default async () => {
  const knex = await getKnex()
  const worlds = await getWorlds()
  const { since, before } = getTimeConstraints()

  const summaries: Summaries = []
  for(const { world, private: isPrivate } of worlds)
    (await knex('daily_stats')
      .select('nick')
      .sum('minutes as minutes')
      .where({ world, private: isPrivate })
      .where('day', '>=', since)
      .andWhere('day', '<', before)
      .groupBy('world')
      .groupBy('private')
      .groupBy('nick')
      .orderBy('minutes', 'desc')
      .limit(SUMMARY_LIMIT) || []
    ).forEach(({ nick, minutes }, index) =>
      summaries.push({
        month: since,
        world,
        private: isPrivate,
        index,
        nick,
        minutes
      })
    )

  return summaries
}