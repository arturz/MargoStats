import createKnex from 'knex'
import initLogs from './initLogs'
import initWorlds from './initWorlds'
import initDailyStats from './initDailyStats'
import initDailyStatsSummaries from './initDailyStatsSummaries'
import initDailyStatsTopSummaries from './initDailyStatsTopSummaries'
import initUsers from './initUsers'
import { mysqlHost, mysqlUser, mysqlPassword, mysqlDatabase }  from '../../config'

const options = {
  client: 'mysql2',
  connection: {
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDatabase,
    //don't convert MySQL date to Date object (MySQL doesn't save timezones)
    dateStrings: ['DATE', 'DATETIME']
  },
  pool: {
    afterCreate(connection: any, callback: any){
      connection.query(`SET time_zone='+00:00';`, (err: any) => {
        callback(err, connection)
      })
    }
  }
}

const initTables = async ({ knex } : { knex: createKnex }) => {
  console.log(`Initializing tables...`)

  try {
    await initLogs({ knex })
    await initWorlds({ knex })
    await initDailyStats({ knex })
    await initDailyStatsSummaries({ knex })
    await initDailyStatsTopSummaries({ knex })
    await initUsers({ knex })
  } catch(error) {
    console.error(error)
    process.exit(1)
  }

  console.log(`Tables initialized`)
}

const getKnex = (() => {
  const knex = createKnex(options)

  const initializing = (async () => {
    await initTables({ knex })
  })()

  return async () => {
    await initializing
    return knex
  }
})()

export default getKnex