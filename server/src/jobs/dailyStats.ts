import Agenda from 'agenda'
import dailyStats from '../services/dailyStats'
import { dailyStatsInterval } from '../../config.js'

export default async ({ agenda }: { agenda: Agenda }) => {
  await agenda.define('dailyStats', (job: any, done: any) => {
    dailyStats({ dailyStatsInterval })
    done()
  })

  await agenda.every(`${dailyStatsInterval} minutes`, 'dailyStats')
}