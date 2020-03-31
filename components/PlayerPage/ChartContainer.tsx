import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Chart from './Chart'
import PromoInstruction from './Info/PromoInstruction'
import Profile from '../../types/Profile'

const GET_CHARACTERS_WITH_MINUTES_PLAYED = gql`
  query CharactersWithMinutesPlayed($month: String!, $profile: Int!){
    charactersWithMinutesPlayed(month: $month, profile: $profile){
      nick
      world
      minutes {
        day
        minutes
      }
    }
  }
`

export default ({ month, profile }: { month: string, profile: Profile }) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS_WITH_MINUTES_PLAYED, { 
    variables: { month, profile },
    ssr: false
  })

  if(loading)
    return <h3>Ładowanie...</h3>

  if(error){
    //not found promo link on profile
    if(error.graphQLErrors && error.graphQLErrors[0].extensions.code === 'UNAUTHENTICATED'){
      return (
        <>
          <h3>Nie znaleziono linku.</h3>
          <PromoInstruction />
        </>
      )
    }

    if(error.graphQLErrors && error.graphQLErrors[0].message)
      return <h3>{ error.graphQLErrors[0].message }</h3>

    return <h3>Błąd. Odśwież stronę.</h3>
  }

  const { charactersWithMinutesPlayed } = data
  if(!charactersWithMinutesPlayed || !charactersWithMinutesPlayed.length)
    return <h3>Brak danych</h3>

  return <Chart 
    month={new Date(month)}
    charactersWithMinutesPlayed={data.charactersWithMinutesPlayed}
  />
}