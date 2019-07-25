import getCharacters from './dailyStats/getCharacters'
import getKnex from '../db/getKnex'
import getCurrentDay from '../../lib/getCurrentDay'
import emitter from '../emitter'
import createTimer from '../../lib/timer'
import { Worlds } from '../../../types/World'

export default async ({ dailyStatsInterval } : { dailyStatsInterval: number }) => {
  const knex = await getKnex()
  const characters = await getCharacters()
  const charactersCount = characters.length

  const day = getCurrentDay()

  const timer = createTimer()

  const worlds: Worlds = []
  for(const { world, private: isPrivate, nick } of characters){
    await knex.raw(`INSERT INTO daily_stats (day, world, private, nick) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE minutes = minutes + ${dailyStatsInterval};`, [day, world, isPrivate, nick])
    worlds.push({
      world,
      private: isPrivate
    })
  }

  const elapsedTime = timer()

  emitter.emit('worlds', { worlds })
  emitter.emit('dailyStats', { elapsedTime, charactersCount })

  return { elapsedTime, charactersCount, worlds }
}