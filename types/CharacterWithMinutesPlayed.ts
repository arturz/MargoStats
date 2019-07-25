import Character from './Character'
import MinutesPlayed from './MinutesPlayed'

export default interface CharacterWithMinutesPlayed extends Character {
  minutes: MinutesPlayed[]
}

export type CharactersWithMinutesPlayed = CharacterWithMinutesPlayed[]