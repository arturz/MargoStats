
export default ({ index, nick, minutes }: { index: number, nick: string, minutes: number }) =>
  <tr>
    <td>{ index + 1 }</td>
    <td>
      <a
        href={`https://www.google.com/search?q="${nick}" Margonem profil`}
        target="_blank"
        children={nick}
      />
    </td>
    <td>{ `${Math.ceil(minutes / 60)}h` }</td>
  </tr>