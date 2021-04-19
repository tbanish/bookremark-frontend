export const updateNote = (note, bookId) => {
  return dispatch => {
    fetch(`http://localhost:3001/books/${bookId}/notes/${note.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
      .then(resp => resp.json())
      .then(noteJSON => {
        let updatedNote = {
          id: parseInt(noteJSON.data.id),
          title: noteJSON.data.attributes.title,
          content: noteJSON.data.attributes.content,
          readingSessionId: noteJSON.data.attributes.reading_session_id,
          bookId: bookId
        }
        dispatch({type: 'UPDATE_NOTE', payload: updatedNote})
      })
  }
}
