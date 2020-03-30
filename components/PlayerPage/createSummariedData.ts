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

  const data = []
  charactersWithMinutesPlayed.forEach(({ nick, world, minutes }) => {
    minutes.forEach(({ day, minutes }) => {
      const index = new Date(`${day}Z`).getDate() - 1
      if(data[index]){
        data[index] += minutes / 60
        return
      }

      data[index] = minutes / 60
    })
  })

  return {
    labels,
    datasets: [{
      label: 'Ilość spędzonych godzin',
      borderColor: '#00bc8c',
      data
    }]
  }
}