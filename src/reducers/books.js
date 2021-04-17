export const books = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
      return action.payload
    case 'ADD_BOOK':
      return state.concat(action.payload)
    default:
      return state
  }
}
