import Layout from './Layout'
import LeftPanel from './Layout/LeftPanel'
import RightPanel from './Layout/RightPanel'
import Summaries from './HomePage/Summaries'
import WorldPrivateMonth from '../types/WorldPrivateMonth'

export default ({ world, private: isPrivate, month }: WorldPrivateMonth) =>
  <Layout>
    <div className="row">
      <LeftPanel month={month} world={world} />
      <RightPanel>
        <Summaries
          world={world}
          private={isPrivate}
          month={month}
        />
      </RightPanel>
    </div>
  </Layout>