import Row from './Row'
import ScrollTop from './ScrollTop'
import { Summaries } from '../../../types/Summary'

export default ({ summaries }: { summaries: Summaries }) =>
  <>
    <table className="table table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nazwa postaci</th>
          <th>Świat</th>
          <th>Spędził(a) w grze</th>
        </tr>
      </thead>
      <tbody>
      {
        summaries.map(({ nick, world, private: isPrivate, minutes }, index) => 
          <Row
            index={index}
            nick={nick}
            world={world}
            private={isPrivate}
            minutes={minutes}
            key={index}
          />
        )
      }
      </tbody>
    </table>
    <ScrollTop />
  </>