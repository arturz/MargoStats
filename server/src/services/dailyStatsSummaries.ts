import getKnex from '../db/getKnex'
import getSummaries from './dailyStatsSummaries/getSummaries'
import getTopSummaries from './dailyStatsSummaries/getTopSummaries'
import isFirstDayOfMonth from './dailyStatsSummaries/isFirstDayOfMonth'
import getCurrentMonth from '../../lib/getCurrentMonth'
import getPreviousMonth from '../../lib/getPreviousMonth'
import emitter from '../emitter'
import createTimer from '../../lib/timer'
import World from '../../../types/World'

export default async () => {
  const knex = await getKnex()

  //first day calculates summaries for previous month
  const month = isFirstDayOfMonth()
    ? getPreviousMonth()
    : getCurrentMonth()

  const getSummariesTimer = createTimer()
  const summaries = await getSummaries()
  const getSummariesElapsedTime = getSummariesTimer()

  const insertSummariesTimer = createTimer()
  await insertSummaries({ knex, summaries, month })
  const insertSummariesElapsedTime = insertSummariesTimer()

  const getTopSummariesTimer = createTimer()
  const topSummaries = await getTopSummaries()
  const getTopSummariesElapsedTime = getTopSummariesTimer()
  
  const insertTopSummariesTimer = createTimer()
  await insertTopSummaries({ knex, topSummaries, month })
  const insertTopSummariesElapsedTime = insertTopSummariesTimer()

  const elapsedTime = {
    getSummaries: getSummariesElapsedTime,
    insertSummaries: insertSummariesElapsedTime,
    getTopSummaries: getTopSummariesElapsedTime,
    insertTopSummaries: insertTopSummariesElapsedTime
  }

  emitter.emit('dailyStatsSummaries', { elapsedTime })

  return { elapsedTime }
}

const insertSummaries = async ({ knex, summaries, month } : any) => {
  let previousWorld: World | null = null
  let index = 0
  for(let i = 0; i < summaries.length; i++){
    const { world, private: isPrivate, nick, minutes } = summaries[i]
    if(previousWorld === null || world !== previousWorld.world || isPrivate !== previousWorld.private){
      index = 0
      previousWorld = { world, private: isPrivate }
    }

    await knex.raw('REPLACE INTO daily_stats_summaries (month, world, private, `index`, nick, minutes) VALUES (?, ?, ?, ?, ?, ?);', [month, world, isPrivate, index, nick, minutes])
    index++
  }
}

const insertTopSummaries = async ({ knex, topSummaries, month } : any) => {
  let index = 0
  for(const { world, private: isPrivate, nick, minutes } of topSummaries){
    await knex.raw('REPLACE INTO daily_stats_top_summaries (month, `index`, world, private, nick, minutes) VALUES (?, ?, ?, ?, ?, ?);', [month, index, world, isPrivate, nick, minutes])

    index++
  }
}