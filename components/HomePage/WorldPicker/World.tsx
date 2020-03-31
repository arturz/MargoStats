import Link from 'next/link'
import WorldPrivateRouter from './types/WorldPrivateRouter'

export default ({ world, private: isPrivate, router }: WorldPrivateRouter) =>
  <Link 
    href={{
      pathname: router.pathname || '/',
      query: {
        ...router.query,
        world,
        private: isPrivate ? '1' : '0',
      }
    }}
    scroll={false}
    replace={true}
  >
    <a>
      <input 
        type="button"
        className={`btn btn-sm m-1 ${router.query.world === world ? 'btn-success' : 'btn-outline-success'}`}
        value={world}
      />
    </a>
  </Link>