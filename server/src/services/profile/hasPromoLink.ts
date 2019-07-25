import fetch from 'node-fetch'
import Profile from '../../../../types/Profile'

const PROMO_LINK = 'https://margostats.pl'

export default async (profile: Profile) => {
  try {
    const page = await (await fetch(`https://www.margonem.pl/?task=profile&id=${profile}`)).text()
    return page.includes(PROMO_LINK)
  } catch(error) {
    return false
  }
}