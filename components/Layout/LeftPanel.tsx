import Card from './Card'
import MonthPicker from './LeftPanel/MonthPicker'
import Donate from './LeftPanel/Donate'
import ScrollTop from './ScrollTop'
import { ReactChild } from 'react'

export default ({ month, hideScrollButton = false, children }: { month: string, hideScrollButton?: boolean, children?: ReactChild }) =>
  <div className="col-lg-4">
    <div className="sticky-top">
      <style jsx>{`
        div {
          top: 1rem;
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
      <Card flat={true}>
        <Donate />
      </Card>
      { hideScrollButton || (
        <div className="d-none d-lg-block">
          <ScrollTop />
        </div>
      ) }
    </div>
  </div>