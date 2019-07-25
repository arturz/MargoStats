import createXRay from 'x-ray'
import { flatten } from 'rambda'
import trimAndLower from '../../../lib/trimAndLower'
import { Characters } from '../../../../types/Character'

const xRay = createXRay()

const mergeCharactersWithWorld = ({ characters, world } : { characters: string, world: string }) => {
  const charactersArray = (characters === 'nikt'
    ? []
    : characters.split(', ')
  ).map(trimAndLower)

  const isPrivate = world.includes('(prywatny)')

  //Świat nazwa (prywatny)
  const [ , worldName ] = world.split(' ')

  return charactersArray.map(nick => ({
    nick,
    world: trimAndLower(worldName),
    private: isPrivate
  }))
}

export default async () => {
  const data = await xRay(
    'https://www.margonem.pl/?task=stats', 
    '*[id^="online"]', 
    [{ characters: 'p', world: 'h2' }]
  )

  const characters: Characters = flatten(data.map(mergeCharactersWithWorld))

  return characters
}