import Layout from './Layout'
import PlayerLeftPanel from './PlayerPage/PlayerLeftPanel'
import RightPanel from './Layout/RightPanel'
import ChartContainer from './PlayerPage/ChartContainer'
import Hello from './PlayerPage/Info/Hello'
import PremiumInfo from './PlayerPage/Info/PremiumInfo'
import Profile from '../types/Profile'

export default ({ month, profile }: { month: string, profile: Profile }) =>
  <Layout>
    <div className="row">
      <PlayerLeftPanel 
        month={month} 
        profile={profile} 
      />
      <RightPanel>
      {
        profile
          ? (
            <>
              <ChartContainer 
                month={month}
                profile={profile}
              />
              { /* <br />
              <PremiumInfo /> */ }
            </>
          )
          : <Hello />
      }
      </RightPanel>
    </div>
  </Layout>
