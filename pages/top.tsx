import TopPage from '../components/TopPage'
import withApollo from '../lib/withApollo'
import atob from '../lib/atob'
import getCurrentMonth from '../lib/getCurrentMonth'

const Page = ({ month }: { month: string }) =>
  <TopPage
    month={month ? atob(month) : getCurrentMonth().toISOString()}
  />

Page.getInitialProps = ({ query }) => {
  const month = query.month || ''

  return { month }
}

export default withApollo(Page)