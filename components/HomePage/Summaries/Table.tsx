import Row from './Row'
import ResponsiveScrollTop from '../../Layout/ResponsiveScrollTop'
import { Summaries } from '../../../types/Summary'

export default ({ summaries, world, private: isPrivate }: { summaries: Summaries, world: string, private: boolean }) =>
  <>
    <table className="table table-sm">
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
    <ResponsiveScrollTop />
  </>