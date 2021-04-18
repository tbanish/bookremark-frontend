const booksEndpoint = 'http://localhost:3001/books'

export const loadBooks = () => {
  return dispatch => {
    fetch(booksEndpoint)
      .then(resp => resp.json())
      .then(books => {
        dispatch({type: 'LOAD_BOOKS', payload: books.data})
        dispatch({type: 'LOAD_READING_SESSIONS', payload: books.data})
      })
  }
}

export const addBook = (book) => {
  const body = {
    title: book.title,
    author: book.author
  }
  return dispatch => {
    fetch(booksEndpoint, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(newBook => {
        dispatch({type: 'ADD_BOOK', payload: newBook.data})
      })
  }
}

export const updateBook = (book, id) => {
  const body = {
    title: book.title,
    author: book.author
  }
  return dispatch => {
    fetch(booksEndpoint+`/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(updatedBook => {
        dispatch({type: 'UPDATE_BOOK', payload: updatedBook.data})
      })
  }
}
