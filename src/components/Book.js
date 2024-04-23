import { Fragment, useEffect, useState } from "react"

const Book = ({book, handleDelete, handleEdition}) => {
    const [isShow, setIsShow] = useState(false)
    const [updatedBook, setUpdatedBook] = useState({})

    useEffect(() => {
        const initialUpdatedBook = {
            id : book.id,
            name : book.name,
            price : book.price,
            category : book.category,
            description : book.description
        }
        setUpdatedBook(initialUpdatedBook)
    }, [])

    const showForm = () => {
        setIsShow(!isShow)
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setUpdatedBook({
            ...updatedBook,
            name: event.target.value,
        })
    }

    const handlePriceChange = (event) => {
        console.log(event.target.value)
        setUpdatedBook({
            ...updatedBook,
            price: event.target.value,
        })
    }

    const handleCategoryChange =(event) => {
        console.log(event.target.value)
        setUpdatedBook({
            ...updatedBook,
            category: event.target.value,
            
        })
    }

    const handleDescriptionChange =(event) => {
        console.log(event.target.value)
        setUpdatedBook({
            ...updatedBook,
            description: event.target.value,
            
        })
    }

    const handleEdit = (event) => {
    //    event.preventDeault()
        console.log(event)
        console.log(updatedBook)
        handleEdition(updatedBook)
        setIsShow(false)

    }

    const popForm = isShow ? 
        (<form onSubmit={handleEdit}>
            <div>
                Book Name
                <input 
                    value = {updatedBook.name}
                    onChange = {handleNameChange}
                />
            </div>
            <div>
                Book Price
                <input
                    value = {updatedBook.price}
                    onChange = {handlePriceChange}
                />
            </div>

            <div>
                Book Category
                <input 
                    value = {updatedBook.category}
                    onChange = {handleCategoryChange}
                />

            </div>
            <div>
                Book Description
                <input
                    value = {updatedBook.description}
                    onChange = {handleDescriptionChange}
                />
            </div>
            <button type = "submit">Save your edition</button>
    </form>) : (<p>...</p>)

    return (
        <Fragment>
            <li key = {book.id} className = "book">
                {book.name} - {book.price} - {book.category}
                <button onClick = {handleDelete}>delete</button>
                <button onClick = {showForm}>Edit</button>

            </li>
            {popForm}
        </Fragment>



    )
}
export default Book