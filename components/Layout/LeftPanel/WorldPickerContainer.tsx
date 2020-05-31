import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import WorldPicker from './WorldPicker'

const GET_WORLDS = gql`
  {
    worlds {
      world 
      private
    }
  }
`

export default ({ world }: { world: string }) => {
  const { loading, error, data } = useQuery(GET_WORLDS)

  if(loading)
    return <WorldPicker queryWorld={world} state="loading" />

  if(error)
    return <WorldPicker queryWorld={world} state="error" />

  return <WorldPicker queryWorld={world} state="ok" worlds={data.worlds} />
}