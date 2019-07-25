import Layout from './Layout'
import LeftPanel from './Layout/LeftPanel'
import RightPanel from './Layout/RightPanel'
import TopSummaries from './TopPage/TopSummaries'

export default ({ month }: { month: string }) =>
  <Layout>
    <div className="row">
      <LeftPanel month={month} />
      <RightPanel>
        <TopSummaries
          month={month}
        />
      </RightPanel>
    </div>
  </Layout>