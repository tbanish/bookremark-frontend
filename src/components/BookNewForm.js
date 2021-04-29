import React from 'react'
import '../css/BookNewForm.css'

class BookNewForm extends React.Component {
  state = {
    title: '',
    author: '',
    description: '',
    pageCount: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    if (this.state.title === '' || this.state.author === '') {
      alert("Make sure your book has a title and author.")
    } else {
      event.preventDefault()
      this.props.addBook(this.state)
      this.props.history.push('/books/reading-list')
    }
  }

  renderOptions = () => {
    let options = []
    for (let i = 0; i <= 5000; i++) {
      options.push(<option key={i} value={i}>{i}</option>)
    }
    return options
  }

  renderQuote = () => {
    return (
      <p className="quote" id="newBookQuote">“My alma mater was books, a good library…. I could spend the rest of my life reading, just satisfying my curiosity.” – Malcolm X</p>
    )
  }

  render() {
    return(
      <div className="BookNewForm">

        <div className="bookNewFormBanner">
          <div id="bookNewBannercol1">
            <h2>expand your</h2>
            <h1>LIBRARY</h1>
          </div>
          <div id="bookNewBannercol2">
            {this.renderQuote()}
          </div>
        </div>

        <div className="bookFormBodyContainer">
          <div id="newBookFormMessage">
              <p>It's time to grow your library.</p>
              <p>Fill out the form to start adding books to your reading list.  Every book you add must have a title and an author.  Optionally, you can add a book description and page count.</p>
              <p>If you don't want to add a description and page count now, not to worry.  You can always update and edit your book details later.</p>
          </div>
          <form className="bookForm" onSubmit={this.handleSubmit}>
            <span className="requiredField">*</span><input onChange={this.handleChange}type="text" name="title" value={this.state.title} placeholder="title"/>
            <span className="requiredField">*</span><input onChange={this.handleChange}type="text" name="author" value={this.state.author} placeholder="author"/>
            <label>Page Count: </label>
            <select value={this.state.pageCount} name="pageCount" onChange={this.handleChange}>
              {this.renderOptions()}
            </select><br/><br/>
          <textarea onChange={this.handleChange} type="text" name="description" rows={15} cols={75}value={this.state.description} placeholder="add a book description (optional)"/><br/>
            <input id="newBookFormbtn" type="submit" value="add book" />
          </form>
        </div>
      </div>
    )
  }
}

export default BookNewForm
