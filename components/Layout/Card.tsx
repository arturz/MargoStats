export default ({ children, flat = false }) =>
  <div className="card mb-3">
    <div className={`card-body ${flat ? 'p-0' : ''}`}>
    {
      children
    }
    </div>
  </div>