import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Label from './Summaries/Label'
import Table from './Summaries/Table'
import WorldPrivateMonth from '../../types/WorldPrivateMonth'

const GET_SUMMARIES = gql`
  query DailyStatsSummaries($world: String!, $private: Boolean!, $month: String!){
    dailyStatsSummaries(world: $world, private: $private, month: $month){
      nick
      minutes
    }
  }
`

export default ({ world, private: isPrivate, month }: WorldPrivateMonth) =>
  <Query query={GET_SUMMARIES} variables={{ world, private: isPrivate, month }}>
  { ({ loading, error, data }: any) => {
    if(loading)
      return <h3>Ładowanie...</h3>

    if(error)
      return <h3>Błąd</h3>

    const { dailyStatsSummaries } = data
    if(!dailyStatsSummaries.length){
      if(!world)
        return <h3>Nie wybrałeś(-aś) świata</h3>

      return <h3>Brak danych</h3>
    }

    return (
      <>
        <Label 
          world={world}
          private={isPrivate}
          month={month}
        />
        <Table
          summaries={dailyStatsSummaries}
          world={world}
          private={isPrivate}
        />
      </>
    )
  }}
  </Query>