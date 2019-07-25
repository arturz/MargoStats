import emitter from '../emitter'
import dailyStats from './log/dailyStats'
import dailyStatsSummaries from './log/dailyStatsSummaries'
import started from './log/started'

export default async () => {
  await dailyStats({ emitter })
  await dailyStatsSummaries({ emitter })
  await started({ emitter })

  return emitter
}