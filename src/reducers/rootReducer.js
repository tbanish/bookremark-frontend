import { combineReducers } from 'redux'
import { books } from './books.js'
import { readingSessions } from './readingSessions.js'
import { notes } from './notes.js'
import { date } from './date.js'
import { goals } from './goals.js'

export const rootReducer = combineReducers({
  books,
  readingSessions,
  notes,
  date,
  goals
})
