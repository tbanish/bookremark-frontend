import { updateGoal } from './goals.js'

const booksEndpoint = 'https://bookremark.herokuapp.com/books'

export const loadBooks = () => {
  return dispatch => {
    fetch(booksEndpoint)
      .then(resp => resp.json())
      .then(books => {
        dispatch({type: 'LOAD_BOOKS', payload: books.data})
        dispatch({type: 'LOAD_READING_SESSIONS', payload: books.data})
        dispatch({type: 'LOAD_NOTES', payload: books.data})
      })
  }
}

export const addBook = (book) => {
  const body = {
    title: book.title,
    author: book.author,
    description: book.description,
    page_count: book.pageCount
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
    author: book.author,
    description: book.description,
    page_count: book.pageCount
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

export const deleteBook = (bookId, goal, goalId) => {
  return (dispatch) => {
    fetch(`https://bookremark.herokuapp.com/books/${bookId}`, {
      method: 'DELETE'
    })
      .then(resp => {
        dispatch({type: 'DELETE_BOOK', payload: bookId})

        if (goal) {
          dispatch(updateGoal(goal, goalId))
        }

      })
  }
}

export const finishBook = (bookId, goal, goalId) => {
    const body = {
      finished: true
    }
  return dispatch => {
    fetch(booksEndpoint+`/${bookId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(finishedBook => {
        dispatch({type: 'FINISH_BOOK', payload: finishedBook.data})
        if (goal) {
          dispatch(updateGoal(goal, goalId))
        }
      })
  }
}
