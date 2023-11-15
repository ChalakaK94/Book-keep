import BookRead from "./BookRead";

export default function BooksReadList({booksRead,onDeleteBook}){
    return (
        <ul className="book-read-list">
            {booksRead.map(book=><BookRead book={book} key={book.isbn} onDeleteBook={()=> onDeleteBook(book.id)}/> )}
        </ul>
    )
}