export const readingSessions = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_READING_SESSIONS':
      const readingSessions = []
      for (const element of action.payload) {
        readingSessions.push(element.attributes.reading_sessions)
      }
      return readingSessions.flat()
    default:
      return state
  }
}
