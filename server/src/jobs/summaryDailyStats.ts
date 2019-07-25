import Agenda from 'agenda'
import dailyStatsSummaries from '../services/dailyStatsSummaries'

export default async ({ agenda }: { agenda: Agenda }) => {
  await agenda.define('dailyStatsSummaries', (job: any, done: any) => {
    dailyStatsSummaries()
    done()
  })

  await agenda.every('1 0 * * *', 'dailyStatsSummaries')
}