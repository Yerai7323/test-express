import diaryData from '../mock/diaries.json'
import { DiaryEntry, DiaryEntryWithOutComment, NewEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithOutComment = (): DiaryEntryWithOutComment[] => {
  return diaries.map(({ comment, ...restDiary }) => {
    return restDiary
  })
}

export const getOne = (id: number): DiaryEntryWithOutComment | undefined => {
  const entry = diaries.find(entry => entry.id === id)
  if (entry !== undefined) {
    const { comment, ...restDiary } = entry
    return restDiary
  }
  return undefined
}

export const addEntry = (newEntry: NewEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: diaries.length + 1,
    ...newEntry
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
