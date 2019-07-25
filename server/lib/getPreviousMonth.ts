const getPreviousMonth = () =>
  new Date(
    (new Date).getFullYear(), 
    (new Date).getMonth() - 1
  )

export default getPreviousMonth