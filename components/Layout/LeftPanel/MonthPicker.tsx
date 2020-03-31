import React, { useState, useRef } from 'react'
import Router from 'next/router'
import Picker from 'react-month-picker'
import 'react-month-picker/css/month-picker.css'
import padZero from '../../../lib/padZero'

const lang = {
  months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
  from: 'Od',
  to: 'Do'
}

export default ({ month }: { month: string }) => {
  const date = new Date(month)
  const [state, setState] = useState({
    year: date.getFullYear(),
    month: date.getMonth() + 1
  })

  const picker = useRef()

  const handleMonthChange = (year, month) =>{
    setState({ year, month })

    // @ts-ignore
    Router.replace({
      pathname: Router.pathname,
      query: {
        ...Router.query,
        month: btoa(new Date(year, month - 1).toISOString())
      }
    })
  }

  return (
    <fieldset>
      <legend>Wybrany miesiąc</legend>
      <div className="form-group">
        <Picker
          ref={picker}
          years={range(2019, new Date().getFullYear())}
          value={state}
          onChange={handleMonthChange}
          theme="dark"
          lang={lang}
        >
          <input 
            type="button"
            className="btn btn-secondary"
            value={`${state.year}.${padZero(state.month)} (zmień)`}
            onClick={() => Object(picker.current).show && Object(picker.current).show()}
          />
        </Picker>
      </div>
    </fieldset>
  )
}

function range(min, max) {
  var len = max - min + 1;
  var arr = new Array(len);
  for (var i=0; i<len; i++) {
    arr[i] = min + i;
  }
  return arr;
}