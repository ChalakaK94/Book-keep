import BookRead from "./BookRead";

export default function BooksReadList({booksRead}){
    return (
        <ul className="book-read-list">
            {booksRead.map(book=><BookRead book={book} key={book.isbn} /> )}
        </ul>
    )
}