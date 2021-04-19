export const notes = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_NOTES':
      const notes = []
      for (const book of action.payload) {
        for (const note of book.attributes.notes) {
          let newNote = {
            id: note.id,
            title: note.title,
            content: note.content,
            readingSessionId: note.reading_session_id,
            bookId: book.id
          }
          notes.push(newNote)
        }
      }
      return notes
    case 'ADD_NOTE':
      return [...state, action.payload]
    case 'UPDATE_NOTE':
      return state.map(note => {
        return note.id === action.payload.id ? action.payload : note
      })
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.payload)
    default:
      return state
  }
}
