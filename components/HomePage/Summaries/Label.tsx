import padZero from '../../../lib/padZero'
import WorldPrivateMonth from '../../../types/WorldPrivateMonth'

export default ({ world, private: isPrivate, month }: WorldPrivateMonth) => {
  const date = new Date(month)

  return (
    <h3>
      <span>
        <style jsx>{`
          span {
            text-transform: capitalize;
          }
        `}</style>
        { world }
      </span>
      { isPrivate && ' (prywatny)' }
      { ' - ' }
      { date.getFullYear() }
      . 
      { padZero(date.getMonth() + 1) }
    </h3>
  )
}