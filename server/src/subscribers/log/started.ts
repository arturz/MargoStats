import { EventEmitter2 } from 'eventemitter2'
import log from '../../services/log'

export default ({ emitter }: { emitter: EventEmitter2 }) => {
  emitter.on('started', value => {
    log({ type: 'started', payload: value })
  })

  return emitter
}