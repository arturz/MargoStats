const getCurrentMonth = () =>
  new Date(
    (new Date).getFullYear(), 
    (new Date).getMonth()
  )

export default getCurrentMonth