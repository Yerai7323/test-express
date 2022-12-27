import { NewEntry, Visibility, Weather } from './types'

const toNewDiaryEntry = (object: any): NewEntry => {
  // To check if is a string
  const isString = (string: string): boolean => {
    return typeof string === 'string'
  }
  // To check if is a date
  const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
  }

  // To check if is a Weather
  const isWeather = (string: any): boolean => {
    return Object.values(Weather).includes(string)
  }

  // To check if is a Visibility
  const isVisibility = (string: any): boolean => {
    return Object.values(Visibility).includes(string)
  }

  // Comment must be a string
  const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
      throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
  }

  // Date must be a valid date
  const parseDate = (dateFromRequest: any): string => {
    if (!isDate(dateFromRequest)) {
      throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
  }

  // Weather must be a valid weather
  const parseWeather = (weatherFromRequest: any): Weather => {
    if (!isWeather(weatherFromRequest)) {
      throw new Error('Incorrect or missing weather')
    }
    return weatherFromRequest
  }

  // Visibility must be a valid visibility
  const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isVisibility(visibilityFromRequest)) {
      throw new Error('Incorrect or missing weather')
    }
    return visibilityFromRequest
  }

  const newEntry: NewEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment)
  }

  return newEntry
}

export default toNewDiaryEntry
