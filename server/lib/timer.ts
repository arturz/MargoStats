const startedTimers = new Map

export default (name?: string) => {
  const symbol = Symbol(name)
  
  startedTimers.set(symbol, +(new Date))

  return () => {
    const elapsedTime = +(new Date) - startedTimers.get(symbol)
    startedTimers.delete(symbol)
    return elapsedTime
  }
}