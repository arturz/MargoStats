import padZero from '../../../lib/padZero'

export default ({ month }: { month: string }) => {
  const date = new Date(month)

  return (
    <h3>
      Top 1000
      { ' - ' }
      { date.getFullYear() }
      . 
      { padZero(date.getMonth() + 1) }
    </h3>
  )
}