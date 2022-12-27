import express from 'express'
import * as diaryService from '../services/diaryService'
import { NewEntry } from '../types'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithOutComment())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.getOne(+req.params.id)
  return diary !== undefined ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry: NewEntry = diaryService.addEntry(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
