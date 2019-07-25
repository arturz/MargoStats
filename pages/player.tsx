import PlayerPage from '../components/PlayerPage'
import withApollo from '../lib/withApollo'
import atob from '../lib/atob'
import getCurrentMonth from '../lib/getCurrentMonth'
import Profile from '../types/Profile'
 
const Page = ({ month, profile }: { month: string, profile: Profile }) =>
  <PlayerPage
    profile={profile ? +profile : null}
    month={month ? atob(month) : getCurrentMonth().toISOString()}
  />

Page.getInitialProps = ({ query }) => {
  const profile = query.profile || ''
  const month = query.month || ''

  return { profile, month }
}

export default withApollo(Page)