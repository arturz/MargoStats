import getCurrentMonth from '../../../lib/getCurrentMonth'
import getPreviousMonth from '../../../lib/getPreviousMonth'
import getCurrentDay from '../../../lib/getCurrentDay'
import isFirstDayOfMonth from './isFirstDayOfMonth'

export default () => {
  //dailyStatsSummaries are calculated at 00:01, so calculate for last time for previous month
  if(isFirstDayOfMonth()){
    const since = getPreviousMonth()
    const before = getCurrentDay()

    return { since, before }
  }

  const since = getCurrentMonth()
  const before = new Date

  return { since, before }
}