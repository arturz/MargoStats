import { compose, prop } from 'rambda'

//returns value of input from input event
export default compose(
  prop('value'),
  prop('target')
)