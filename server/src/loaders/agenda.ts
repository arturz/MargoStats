import Agenda from 'agenda'
import { mongodbUri, isProduction } from '../../config'
import dailyStats from '../jobs/dailyStats'
import dailyStatsSummaries from '../jobs/summaryDailyStats'

export default async () => {
  const agenda: Agenda = new Agenda({
    db: {
      address: mongodbUri,
      collection: 'margoStatsAgendaJobs',
      options: { useNewUrlParser: true }
    }
  })

  if(isProduction){
    await agenda.start()
    await dailyStats({ agenda })
    await dailyStatsSummaries({ agenda })
  }

  return agenda
}