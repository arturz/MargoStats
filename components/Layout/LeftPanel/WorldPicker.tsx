import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import Router from 'next/router'
import World from '../../../types/World'

const handleWorldChange = (changes: World[]) => {
  //item was deleted
  if(changes.length === 0)
    return

  const [world] = changes

  Router.replace({
    pathname: Router.pathname,
    query: {
      ...Router.query,
      world: world.world,
      ...world.private && { private: '1' }
    }
  })
}

interface Props {
  queryWorld: string
  worlds?: World[]
  state: 'loading' | 'error' | 'ok'
}

export default ({ queryWorld, state, worlds }: Props) => {
  return (
    <fieldset>
      <legend>Wybrany świat</legend>
      {state === 'loading' && <span>Ładowanie...</span>}
      {state === 'error' && <span>Nie można pobrać śwaitów :(</span>}
      {state === 'ok' && <>
        <div className="form-group">
          <Typeahead 
            id="world-picker"
            defaultInputValue={queryWorld}
            labelKey={option => option.world}
            options={worlds.map(world => ({ world: world.world, private: world.private, id: world.world }))}
            onChange={handleWorldChange}
          />
        </div>
        Ilość dostępnych światów: {worlds.length}
      </>}
    </fieldset>
  )
}