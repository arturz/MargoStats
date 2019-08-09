import { FaAngleUp } from 'react-icons/fa'

const scrollTop = () =>
  window.scrollTo({ top: 0, behavior: 'auto' })

export default ({ className = '', ...props }) =>
  <button
    type="button"
    className={`btn btn-outline-success float-right ${className}`}
    onClick={scrollTop}
    {...props}
  >
    <FaAngleUp />
  </button>