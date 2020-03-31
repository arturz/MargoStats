import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Label from './TopSummaries/Label'
import Table from './TopSummaries/Table'

const GET_TOP_SUMMARIES = gql`
  query DailyStatstTopSummaries($month: String!){
    dailyStatsTopSummaries(month: $month){
      nick
      world
      private
      minutes
    }
  }
`

export default ({ month }: { month: string }) => {
  const { loading, error, data } = useQuery(GET_TOP_SUMMARIES, {
    variables: { month }
  })

  if(loading)
    return <h3>Ładowanie...</h3>

  if(error)
    return <h3>Błąd</h3>

  const { dailyStatsTopSummaries } = data
  if(!dailyStatsTopSummaries.length)
    return <h3>Brak danych</h3>

  return (
    <>
      <Label month={month} />
      <p>
        Kursywa oznacza świat prywatny.
      </p>
      <Table summaries={dailyStatsTopSummaries} />
    </>
  )
}