import Row from './Row'
import ScrollTop from '../../Layout/ScrollTop'
import { Summaries } from '../../../types/Summary'

export default ({ summaries, world, private: isPrivate }: { summaries: Summaries, world: string, private: boolean }) =>
  <>
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nazwa postaci</th>
          <th>Spędził(a) w grze</th>
        </tr>
      </thead>
      <tbody>
      {
        summaries.map(({ nick, minutes }, index) => 
          <Row
            nick={nick}
            minutes={minutes}
            index={index}
            key={`${world}${isPrivate}${index}`}
          />
        )
      }
      </tbody>
    </table>
    <ScrollTop />
  </>