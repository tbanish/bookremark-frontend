export const loadBooks = () => {
  return dispatch => {
    fetch('http://localhost:3001/books')
      .then(resp => resp.json())
      .then(books => {
        dispatch({type: 'LOAD_BOOKS', payload: books.data})
      })
  }
}
