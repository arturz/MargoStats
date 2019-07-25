
//we work on local time and then MySQL converts it to UTC 0 with .toISOString()
const getCurrentDay = () =>
  new Date(
    (new Date).getFullYear(), 
    (new Date).getMonth(), 
    (new Date).getDate()
  )

export default getCurrentDay