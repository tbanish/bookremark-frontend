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
    default:
      return state
  }
}
