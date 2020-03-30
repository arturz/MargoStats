import Card from './Card'
import MonthPicker from './LeftPanel/MonthPicker'
//import Donate from './LeftPanel/Donate'
import { ReactChild } from 'react'

export default ({ month, children }: { month: string, children?: ReactChild }) =>
  <div className="col-lg-4">
    <div className="sticky-top mb-3">
      <style jsx>{`
        div {
          top: 86px;
        }
      `}</style>
      <Card>
        <MonthPicker 
          month={month}
        />
        {
          children
        }
      </Card>
      { /* 
      <Card flat={true}>
        <Donate />
      </Card>
      */}
    </div>
  </div>