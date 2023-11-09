import BookReadSummary from "./BookReadSummary";
import BooksRead from "./BooksRead";

export default function StudiedList({booksRead}){
    return (
        <div className="box">
            <BookReadSummary booksRead={booksRead} />
            <BooksRead booksRead={booksRead} />
        </div>
    )
}