
export const addReadingSession = (readingSession) => {
  return dispatch => {
    const body = {
      reading_session: {
        title: readingSession.title,
        duration: readingSession.duration,
        date: readingSession.date,
        book_id: readingSession.book_id,
        notes_attributes: readingSession.notes
      }
    }

    fetch(`http://localhost:3001/books/${readingSession.book_id}/reading_sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(readingSession => {
        dispatch({type: 'ADD_READING_SESSION', payload: readingSession.data})
      })
  }
}

export const updateReadingSession = (readingSession, id) => {
  return dispatch => {
    fetch(`http://localhost:3001/books/${readingSession.book_id}/reading_sessions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(readingSession)
    })
      .then(resp => resp.json())
      .then(updatedReadingSession => {
        dispatch({type: 'UPDATE_READING_SESSION', payload: updatedReadingSession.data})
      })
  }
}

export const deleteReadingSessions = (id) => {
  return (dispatch) => dispatch({type: 'DELETE_READING_SESSIONS', payload: id})
}

export const deleteReadingSession = (readingSession) => {
  return dispatch => {
    fetch(`http://localhost:3001/books/${readingSession.book_id}/reading_sessions/${readingSession.id}`, {
      method: 'DELETE'
    })
      .then(resp => dispatch({type: 'DELETE_READING_SESSION', payload: readingSession.id}))
  }
}
