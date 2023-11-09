import Book from "./Book";

export default function BooksList({booksData}){
    return (
        <ul className="books-list">
                    {booksData.map((book)=>(
                        <Book key={book.isbn} book={book}   />
                    ))} 
                </ul>
    )
}