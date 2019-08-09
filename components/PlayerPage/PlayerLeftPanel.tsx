import LeftPanel from '../Layout/LeftPanel'
import ProfileInput from './PlayerLeftPanel/ProfileInput'
import Profile from '../../types/Profile'

export default ({ month, profile }: { month: string, profile: Profile }) =>
  <LeftPanel month={month}>
    <ProfileInput
      profile={profile}
    />
  </LeftPanel>