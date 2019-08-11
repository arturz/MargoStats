import React from 'react'
import { Line } from 'react-chartjs-2'
import getFullPlayedTime from './getFullPlayedTime'
import createData from './createData'
import createSummariedData from './createSummariedData'
import ChartProps from './ChartProps'

export default ({ charactersWithMinutesPlayed, month }: ChartProps) => {
  const options = {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          tooltipFormat: 'll',
          unit: 'day',
          unitStepSize: 1,
        }
      }]
    }
  }

  return (
    <>
      <p>
        W tym miesiącu spędził łącznie
        { ' ' }
        { (getFullPlayedTime({ charactersWithMinutesPlayed }) / 60).toFixed(1) }
        h w grze na wszystkich postaciach
      </p>
      <h3 className="mt-3">Czas na postaciach</h3>
      <Line
        data={createData({ charactersWithMinutesPlayed, month })}
        options= {options}
      />
      <h3>Łączny czas</h3>
      <Line
        data={createSummariedData({ charactersWithMinutesPlayed, month })}
        options= {options}
      />
    </>
  )
}