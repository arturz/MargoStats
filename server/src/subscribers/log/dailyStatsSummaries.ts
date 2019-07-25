import { EventEmitter2 } from 'eventemitter2'
import log from '../../services/log'

export default ({ emitter }: { emitter: EventEmitter2 }) => {
  emitter.on('dailyStatsSummaries', value => {
    log({ type: 'dailyStatsSummaries', payload: value })
  })

  return emitter
}