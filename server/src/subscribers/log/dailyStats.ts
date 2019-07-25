import { EventEmitter2 } from 'eventemitter2'
import log from '../../services/log'

export default ({ emitter }: { emitter: EventEmitter2 }) => {
  emitter.on('dailyStats', value => {
    log({ type: 'dailyStats', payload: value })
  })

  return emitter
}