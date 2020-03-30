import getCharacters from '../services/profile/getCharacters'
import hasPromoLink from '../services/profile/hasPromoLink'
import getMinutesPlayed from '../services/getMinutesPlayed'
import { isProduction } from '../../config'
import Profile from '../../../types/Profile'
import { CharactersWithMinutesPlayed } from '../../../types/CharacterWithMinutesPlayed'

interface Props {
  month: string | Date,
  profile: Profile,
  requirePromo?: boolean
}
export default async ({ month, profile, requirePromo = isProduction }: Props) => {
  //user has no promo code
  
  /*if(requirePromo && !(await hasPromoLink(profile)))
    return null
*/

  const characters = await getCharacters(profile)

  const charactersWithMinutesPlayed: CharactersWithMinutesPlayed = []
  for(const { nick, world, private: isPrivate } of characters)
    charactersWithMinutesPlayed.push({
      nick,
      world,
      private: isPrivate,
      minutes: await getMinutesPlayed({ month, world, nick })
    })
  
  //keep only characters that played some time
  return charactersWithMinutesPlayed.filter(({ minutes }) =>
    minutes.length !== 0
  )
}