import Link from 'next/link'

export default () =>
  <header className="jumbotron jumbotron-fluid text-center text-md-left mb-3">
    <div className="container">
      <Link href="/">
        <a className="text-white text-decoration-none d-inline-block">
          <h1 className="display-2">Margo Stats</h1>
        </a>
      </Link>
    </div>
  </header>