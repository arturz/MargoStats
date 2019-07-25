import { EventEmitter2 } from 'eventemitter2'

const emitter: EventEmitter2 = new EventEmitter2({
  wildcard: true
})

export default emitter