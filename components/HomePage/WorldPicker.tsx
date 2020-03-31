import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Worlds from './WorldPicker/Worlds'

const GET_WORLDS = gql`
  {
    worlds {
      world 
      private
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(GET_WORLDS)

  if(loading)
    return <span>Ładowanie światów...</span>

  if(error)
    return <span>Nie można pobrać światów :(</span>

  const [publics, privates] = data.worlds.reduce(([ publics, privates ], world) => {
    if(world.private){
      privates.push(world)
      return [ publics, privates ]
    }

    publics.push(world)
    return [ publics, privates ]
  }, [[], []])

  return <Worlds publics={publics} privates={privates} />
}