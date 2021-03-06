export const updateNote = (note, bookId) => {
  return dispatch => {
    fetch(`https://bookremark.herokuapp.com/books/${bookId}/notes/${note.id}`, {
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

export const deleteNote = (id, bookId) => {
  return dispatch => {
    fetch(`https://bookremark.herokuapp.com/books/${bookId}/notes/${id}`,{
      method: 'DELETE'
    })
      .then(resp => dispatch({type: 'DELETE_NOTE', payload: id}))
  }
}

export const deleteNotes = (id) => {
  return dispatch => {
    dispatch({type: 'DELETE_NOTES', payload: id})
  }
}
