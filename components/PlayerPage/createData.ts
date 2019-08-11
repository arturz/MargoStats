import randomColor from 'random-color'
import ChartProps from './ChartProps'

export default ({ charactersWithMinutesPlayed, month }: ChartProps) => {
  let daysInMonth = (() =>
    new Date(month.getUTCFullYear(), month.getUTCMonth(), 0).getDate()
  )()

  if(month.getFullYear() === new Date().getFullYear() &&
     month.getMonth() === new Date().getMonth()){
    daysInMonth = new Date().getDate()
  }

  const labels = []
  for(let i = 0; i < daysInMonth; i++){
    const date = new Date(month)
    date.setDate(i + 1)
    labels[i] = date
  }

  const datasets = []
  charactersWithMinutesPlayed.forEach(({ nick, world, minutes }) => {
    const data = []
    minutes.forEach(({ day, minutes }) => {
      data[new Date(`${day}Z`).getDate() - 1] = minutes / 60
    })

    datasets.push({
      label: `${nick} (${world})`,
      borderColor: randomColor().hexString(),
      data
    })
  })

  return {
    labels,
    datasets
  }
}