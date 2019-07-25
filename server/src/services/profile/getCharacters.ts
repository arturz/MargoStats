import createXRay from 'x-ray'
import { isPrivate } from '../worlds'
import trimAndLower from '../../../lib/trimAndLower'
import Profile from '../../../../types/Profile'
import { Characters } from '../../../../types/Character'

const xRay = createXRay()

const transformDataIntoCharacter = async ({ nick, world }: { nick: string, world: string }) => {
  //it has form "Świat: ..."
  const [ , _world ] = trimAndLower(world).split(' ')

  //nick sometimes has form ... [ADM]
  const [ _nick ] = nick.split('[')

  return {
    nick: trimAndLower(_nick),
    world: _world,
    private: await isPrivate(_world)
  }
}

export default async (profile: Profile) => {
  const data = await xRay(
    `https://new.margonem.pl/profile/view,${profile}`, 
    '.char-description', 
    [{ nick: '.character-name', world: '.world' }]
  )

  const characters: Characters = []
  for(const { nick, world } of data){
    characters.push(
      await transformDataIntoCharacter({ nick, world })
    )
  }

  return characters
}