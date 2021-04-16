export const books = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
      return action.payload
    default:
      return state
  }
}
