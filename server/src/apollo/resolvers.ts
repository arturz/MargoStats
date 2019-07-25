import { AuthenticationError } from 'apollo-server-express'
import { getWorlds } from '../services/worlds'
import getDailyStatsSummaries from '../services/getDailyStatsSummaries'
import getDailyStatsTopSummaries from '../services/getDailyStatsTopSummaries'
import getCharactersWithMinutesPlayed from '../controllers/getCharactersWithMinutesPlayed'

export default {
  Query: {
    async worlds(){
      return await getWorlds()
    },
    async dailyStatsSummaries(_: any, { month, world, private: isPrivate }: { month: Date | string, world: string, private: boolean }){
      return await getDailyStatsSummaries({ month, world, private: isPrivate })
    },
    async dailyStatsTopSummaries(_: any, { month }: { month: Date | string }){
      return await getDailyStatsTopSummaries({ month })
    },
    async charactersWithMinutesPlayed(_: any, { month, profile }: { month: Date | string, profile: number }){
      const charactersWithMinutesPlayed = await getCharactersWithMinutesPlayed({ month, profile })
      if(charactersWithMinutesPlayed === null){
        throw new AuthenticationError('Nie znaleziono linku na profilu')
      }
      return charactersWithMinutesPlayed
    }
  }
}