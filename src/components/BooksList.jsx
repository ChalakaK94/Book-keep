import Book from "./Book";

export default function BooksList({booksData,handleSelectedId}){
    return (
        <ul className="books-list">
                    {booksData.map((book)=>(
                        <Book key={book.isbn} book={book}  handleSelectedId={()=>handleSelectedId(book.id)}  />
                    ))} 
                </ul>
    )
}