import { equals } from 'rambda'
import getKnex from '../db/getKnex'
import { Worlds } from '../../../types/World'

let cachedWorlds: Worlds = []

const castPrivateToBoolean = ({ private: isPrivate, world }: { private: number, world: string }) => ({
  private: Boolean(isPrivate),
  world
})

export const getWorlds = async () => {
  const knex = await getKnex()

  if(cachedWorlds.length === 0){
    cachedWorlds = [...
      await knex('worlds')
        .select('*')
    ].map(castPrivateToBoolean)

    if(cachedWorlds.length !== 0)
      return cachedWorlds

    cachedWorlds = [...
      await knex('daily_stats')
        .distinct('world', 'private')
    ].map(castPrivateToBoolean)

    for(const { world, private: isPrivate } of cachedWorlds)
      await knex('worlds')
        .insert({ 
          world, 
          private: isPrivate 
        }) 
  }

  return cachedWorlds
}

export const setWorlds = async (worlds: any) => {
  if(equals(worlds, cachedWorlds))
    return

  const knex = await getKnex()

  for(const { world, private: isPrivate } of worlds){
    try {
      await knex('worlds')
        .insert({ 
          world, 
          private: isPrivate 
        }) 
    } catch(error) {
      continue
    }
  }

  cachedWorlds = worlds

  return cachedWorlds
}

export const isPrivate = async (name: string) => {
  const worlds = await getWorlds()
  const foundWorld = worlds.find(({ world }) =>
    world === name
  )

  return foundWorld !== undefined
    && foundWorld.private
}