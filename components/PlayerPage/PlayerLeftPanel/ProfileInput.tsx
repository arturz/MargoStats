import { useState } from 'react'
import { compose } from 'rambda'
import Router from 'next/router'
import getValue from '../../../lib/getValue'
import getProfile from './getProfile'
import Profile from '../../../types/Profile'

export default ({ profile }: { profile: Profile }) => {
  const [url, setUrl] = useState(
    profile
      ? `https://www.margonem.pl/?task=profile&id=${profile}`
      : ''
  )

  const handleSubmit = event => {
    event.preventDefault()

    const profile = getProfile(url)
    if(!profile)
      return

    // @ts-ignore
    Router.push({
      pathname: Router.pathname,
      query: { ...Router.query, profile }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Link do profilu Margonem</legend>
        <div className="form-group">
          <input 
            className="form-control" 
            type="url"
            value={url}
            onChange={compose(setUrl, getValue)}
          />
        </div>
      </fieldset>
      <input
        type="submit"
        className="btn btn-success"
        value="Sprawdź"
      />
    </form>
  )
}