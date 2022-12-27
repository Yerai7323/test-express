export enum Weather {
  SUNNY = 'sunny',
  CLOUDY = 'cloudy',
  WINDY = 'windy',
  RAINY = 'rainy'
}

export enum Visibility {
  GREAT = 'great',
  GOOD = 'good',
  OK = 'ok',
  POOR = 'poor'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
// export type DiaryEntryWithOutComment = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type DiaryEntryWithOutComment = Omit<DiaryEntry, 'comment'>

export type NewEntry = Omit<DiaryEntry, 'id'>
