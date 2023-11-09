import BookReadSummary from "./BookReadSummary";
import BooksReadList from "./BooksReadList";

export default function StudiedList({booksRead}){
    return (
        <div className="box">
            <BookReadSummary booksRead={booksRead} />
            <BooksReadList booksRead={booksRead} />
        </div>
    )
}