function getQueryParam(name: string, url: string) {
  const q = url.match(new RegExp('[?&]' + name + '=([^&#]*)'))
  if(q)
    return q[1]

  return null
}

export default (url: string) => {
  //https://new.margonem.pl/profile/view,1#char_18,aldous
  const [ , path = '' ] = url.split('profile/view,')
  let id = ''
  for(const char of path){
    if(isNaN(char as any))
      break

    id += char
  }

  if(id.length)
    return parseInt(id)

  //https://www.margonem.pl/?task=profile&id=1
  const idParam = getQueryParam('id', url)
  if(idParam === null)
    return null

  return parseInt(idParam)
}