export const readingSessions = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_READING_SESSIONS':
      const readingSessions = []
      for (const element of action.payload) {
        readingSessions.push(element.attributes.reading_sessions)
      }
      return readingSessions.flat()
    case 'ADD_READING_SESSION':
      const newReadingSession = {
        id: parseInt(action.payload.id),
        title: action.payload.attributes.title,
        duration: action.payload.attributes.duration,
        date: action.payload.attributes.date,
        book_id: action.payload.attributes.book.id,
      }
      return state.concat(newReadingSession)
    default:
      return state
  }
}
