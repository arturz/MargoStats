import getCharacters from './src/services/dailyStats/getCharacters'

;(async () => {
  const characters = await getCharacters()
  console.log('swiaty prywatne: ', characters.filter(({ private: isPrivate }) => isPrivate).length)
  console.log('swiaty publiczne: ', characters.filter(({ private: isPrivate }) => !isPrivate).length)
  console.log('nicki dluzsze niz 20 znakow: ', characters.filter(({ nick }) => nick.length > 20))
})()