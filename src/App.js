import {Fragment, useState, useEffect} from 'react';
import BookForm from './components/BookForm'
import Book from './components/Book'

const App = () => {

  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState({})
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const initBooks = [{
      name : "After the Diagnosis",
      price : 17.5,
      category : "Biography",
      description : "Dr. Julian Seifter understands the difficulty of managing a chronic condition in our health-obsessed, take-life-by-the-horns, live-forever world. When he found out he was suffering from diabetes, he was an ambitious medical resident who thought he could run away from his diagnosis. Good health was part of his self-image, and acknowledging that he needed treatment seemed like a kind of failure."
    },
    {
      name : "Tokyo Ever After",
      price : 18.5,
      category : "Juvenile fiction",
      description : "It isn't easy being Japanese American in a small, mostly white, northern California town, being raised by a single mother. When Izumi Tanaka discovers her father is the Crown Prince of Japan, it means irreverent Izzy is literally a princess."
    }]
    setBooks(initBooks)
  },[])

  const handleNameChange = (event) => {
    setNewBook({...newBook, name : event.target.value})
  }
  const handlePriceChange = event => {
    setNewBook({...newBook, price : event.target.value})
  }
  const handleCategoryChange = event => {
    setNewBook({...newBook, category : event.target.value})
  }
  const handleDescriptionChange = event => {
    setNewBook({...newBook, description : event.target.value})
  }
  const handleSubmit = event => {
    event.preventDefault()
    const bookObject = {
      ...newBook,
    }
    setBooks(books.concat(bookObject))
    setNewBook({})
    setShowForm(false)
  }

  const addBook = showForm ? 
  <BookForm 
  bookName = {newBook.name}
  bookPrice = {newBook.price}
  bookCategory = {newBook.category}
  bookDescription = {newBook.description}
  handleSubmit = {handleSubmit}
  handleNameChange = {handleNameChange}
  handlePriceChange = {handlePriceChange}
  handleCategoryChange = {handleCategoryChange}
  handleDescriptionChange = {handleDescriptionChange}
  />
  :
  <button onClick = {() => setShowForm(true)} >Add new book</button>

  const handleDelete = (event, book) => {
    console.log(event.target)
    console.log(book)

    console.log(books)
    setBooks(books.filter(b => b.name !== book.name))
    console.log(books)
  }
  return (
    <Fragment>
      <div className = "App">
        <header className = "App-header">

        </header>
        <div className = "add-new-book">
          {addBook}
        </div>
        <div className = "bookstore">
          <ul>
            {books.map(b => {
              return (
                <Book book = {b} handleDelete = {(event) => handleDelete(event, b)}/>
              )
            })}
          </ul>


        </div>
      </div>
    </Fragment>

  );
}

export default App;
