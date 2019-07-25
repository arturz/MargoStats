import getMinutesPlayed from './src/controllers/getCharactersWithMinutesPlayed'

;(async () => {
  console.log(
    JSON.stringify(
      await getMinutesPlayed({
        month: '2019-06-30T22:00:00.000Z',
        profile: 6547222
      }),
      null,
      ' '
    )
  )
})()