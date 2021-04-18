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
    case 'UPDATE_READING_SESSION':
      const updatedReadingSession = {
        id: parseInt(action.payload.id),
        title: action.payload.attributes.title,
        duration: action.payload.attributes.duration,
        date: action.payload.attributes.date,
        book_id: action.payload.attributes.book.id
      }
      return state.map(readingSession => {
        return readingSession.id === updatedReadingSession.id ? updatedReadingSession : readingSession
      })
    case 'DELETE_READING_SESSIONS':
      return state.filter(readingSession => readingSession.book_id !== parseInt(action.payload))
    default:
      return state
    case 'DELETE_READING_SESSION':
      return state.filter(readingSession => readingSession.id !== parseInt(action.payload)) 
  }
}
