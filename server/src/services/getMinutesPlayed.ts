import getKnex from '../db/getKnex'

interface GetMinutesPlayedProps {
  month: Date | string, 
  world: string,
  nick: string
}
export default async ({ month, world, nick }: GetMinutesPlayedProps) => {
  const knex = await getKnex()

  const nextMonth = (() => {
    const date = new Date(month)
    date.setMonth(date.getMonth() + 1)
    return date.toISOString()
  })()

  return [...await knex('daily_stats')
    .select('day', 'minutes')
    .where({ world, nick })
    .where('day', '>=', month)
    .andWhere('day', '<', nextMonth)]
}