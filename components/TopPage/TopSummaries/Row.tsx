interface RowProps {
  index: number,
  nick: string,
  world: string,
  private: boolean,
  minutes: number
}
export default ({ index, nick, world, private: isPrivate, minutes }: RowProps) =>
<tr>
  <td>{ index + 1 }</td>
  <td>
    <a
      href={`https://www.google.com/search?q="${nick}" Margonem profil`}
      target="_blank"
      children={nick}
    />
  </td>
  <td>
    <style jsx>{`
      td {
        text-transform: capitalize;
      }
    `}</style>
    { world }
    { isPrivate && ' (P)' }
  </td>
  <td>{ `${Math.ceil(minutes / 60)} godzin` }</td>
</tr>