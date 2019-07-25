import { useState } from 'react'
import { useRouter } from 'next/router'
import World from './World'

enum WorldType {
  Public,
  Private
}

export default ({ publics, privates }) => {
  const [worldsType, setWorldsType] = useState(WorldType.Public)
  
  //on server-side may be null
  const router = useRouter() || { query: {} }

  return (
    <>
      <ul className="nav nav-tabs mb-2">
        <li className="nav-item" onClick={() => setWorldsType(WorldType.Public)}>
          <a className={`nav-link ${worldsType === WorldType.Public ? 'active' : ''}`}>
            Publiki
          </a>
        </li>
        <li className="nav-item" onClick={() => setWorldsType(WorldType.Private)}>
          <a className={`nav-link ${worldsType === WorldType.Private ? 'active' : ''}`}>
            Privy
          </a>
        </li>
        <style jsx>{`
          li {
            cursor: pointer;
          }
        `}</style>
      </ul>
      {
        (worldsType === WorldType.Public
          ? publics
          : privates)
        .map(({ world, private: isPrivate }) =>
          <World
            world={world}
            private={isPrivate}
            router={router}
            key={world}
          />
        )
      }
    </>
  )
}