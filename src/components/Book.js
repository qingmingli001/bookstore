const Book = ({book, handleDelete}) => {
    return (
        <li className="book">
            {book.name} - {book.price} - {book.category} - {book.description}
            <button onClick={event => handleDelete(event, book)}>delete</button>
        </li>
    )
}
export default Book