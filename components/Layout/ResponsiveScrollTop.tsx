import ScrollTop from './ScrollTop'

export default () =>
  <div className="container fixed-bottom" style={{ pointerEvents: 'none' }}>
    <ScrollTop className="bg-dark mb-3" style={{ pointerEvents: 'auto' }} />
  </div>