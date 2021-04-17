import { combineReducers } from 'redux'
import { books } from './books.js'
import { readingSessions } from './readingSessions.js'
import { date } from './date.js'

export const rootReducer = combineReducers({
  books,
  readingSessions,
  date
})
