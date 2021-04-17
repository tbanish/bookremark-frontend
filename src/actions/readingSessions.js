
export const addReadingSession = (readingSession) => {
  return dispatch => {
    const body = readingSession
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
