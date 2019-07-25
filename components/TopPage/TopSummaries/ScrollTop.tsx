const scrollTop = () =>
  window.scrollTo({ top: 0, behavior: 'auto' })

export default () =>
  <input
    type="button"
    className="btn btn-outline-success float-right"
    value="Na górę"
    onClick={scrollTop}
  />