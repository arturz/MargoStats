import React from 'react'
import { Line } from 'react-chartjs-2'
import getFullPlayedTime from './getFullPlayedTime'
import createData from './createData'
import createSummariedData from './createSummariedData'
import ChartProps from './ChartProps'
import Chart from 'chart.js'

Chart.defaults.global.defaultFontColor = '#fff'

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
      <h5>
        W tym miesiącu spędził łącznie
        { ' ' }
        { (getFullPlayedTime({ charactersWithMinutesPlayed }) / 60).toFixed(1) }
        h w grze na wszystkich postaciach
      </h5>
      <hr className="hidden" />
      <h3>Czas na postaciach</h3>
      <Line
        data={createData({ charactersWithMinutesPlayed, month })}
        options= {options}
      />
      <hr className="hidden" />
      <h3>Łączny czas</h3>
      <Line
        data={createSummariedData({ charactersWithMinutesPlayed, month })}
        options= {options}
      />
      <hr className="hidden" />
      <h3>Info</h3>
      <p>
        Wliczony jest czas grania zastępcy na koncie. <br />
        Rzeczywisty łączny czas gry może być mniejszy (sumowany jest czas gry na każdej z postaci), szczególnie jeśli gracz często logował się pomiędzy postaciami.
      </p> 
      <hr className="hidden" />
    </>
  )
}