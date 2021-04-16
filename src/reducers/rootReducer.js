import { combineReducers } from 'redux'
import { books } from './books.js'
import { readingSessions } from './readingSessions.js'

export const rootReducer = combineReducers({
  books,
  readingSessions
})
