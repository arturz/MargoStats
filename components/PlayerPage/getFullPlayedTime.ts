import { CharactersWithMinutesPlayed } from '../../types/CharacterWithMinutesPlayed'

type Props = {
  charactersWithMinutesPlayed: CharactersWithMinutesPlayed
}

export default ({ charactersWithMinutesPlayed }: Props) =>
  charactersWithMinutesPlayed.reduce((sum, { minutes }) => {
    return sum + minutes.reduce((sum, { minutes }) => sum + minutes, 0)
  }, 0)