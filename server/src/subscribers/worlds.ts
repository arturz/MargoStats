import { EventEmitter2 } from 'eventemitter2'
import { setWorlds } from '../services/worlds'

export default ({ emitter }: { emitter: EventEmitter2 }) => {
  emitter.on('worlds', worlds => {
    setWorlds(worlds)
  })

  return emitter
}