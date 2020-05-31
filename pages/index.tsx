import WorldPage from '../components/WorldPage'
import withApollo from '../lib/withApollo'
import atob from '../lib/atob'
import getCurrentMonth from '../lib/getCurrentMonth'

interface WorldPrivateMonthFromQuery {
  world: string,
  private: string,
  month: string
}

const Page = ({ world, private: isPrivate, month }: WorldPrivateMonthFromQuery) =>
  <WorldPage
    world={world === null ? 'aldous' : world}
    private={isPrivate === '1' ? true : false}
    month={month ? atob(month) : getCurrentMonth().toISOString()}
  />

Page.getInitialProps = ({ query }) => {
  const world = query.world ? query.world.toString().toLowerCase() : null
  const isPrivate = query.private
  const month = query.month || ''

  return { world, private: isPrivate, month }
}

export default withApollo(Page)