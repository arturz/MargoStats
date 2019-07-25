export default interface Summary {
  month: Date | string,
  world: string,
  private: boolean,
  index: number,
  nick: string,
  minutes: number
}

export type Summaries = Summary[] 