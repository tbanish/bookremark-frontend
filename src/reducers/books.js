export const books = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
      return action.payload
    case 'ADD_BOOK':
      return state.concat(action.payload)
    case 'UPDATE_BOOK':
      return state.map(book => {
        return book.id === action.payload.id ? action.payload : book
      })
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload)
    default:
      return state
  }
}
