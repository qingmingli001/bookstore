const Book = ({book, handleDelete}) => {
    return (
        <li className = "book">
            {book.name} - {book.price} - {book.category} - {book.description}
            <button onClick = {handleDelete}>delete</button>
        </li>
    )
}
export default Book