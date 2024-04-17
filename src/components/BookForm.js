const BookForm = ({
    bookName, 
    bookPrice, 
    bookCategory, 
    bookDescription, 
    handleSubmit, 
    handleNameChange, 
    handlePriceChange, 
    handleCategoryChange, 
    handleDescriptionChange}) => {
    return (
        <div>
            <h2>Add a new book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    Book Name
                    <input 
                        value={bookName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    Book Price
                    <input
                        value={bookPrice}
                        onChange={handlePriceChange}
                    />
                </div>

                <div>
                    Book Category
                    <input 
                        value={bookCategory}
                        onChange={handleCategoryChange}
                    />

                </div>
                <div>
                    Book Description
                    <input
                        value={bookDescription}
                        onChange={handleDescriptionChange}
                    />
                </div>

                

                <button type="submit">Save</button>

            </form>
        </div>
    )
}
export default BookForm