import { avarage } from "../service/FormatBookResponse"

export default function BookReadSummary({books}){

    const rating = avarage(books.map((book)=> +book.rating));

    const userRating = avarage(books.map((book)=> +book.userRating));
    return(

        <div className="books-summmary">
            <div>Books You Read</div>
            <div className="d-flex justify-content-between">
                <div>
                    <span>_</span>
                    <span>{books.length} Books</span>
                </div>
                <div>
                    <span>⭐</span>
                    <span>{rating || 0}</span>
                </div>
                <div>
                    <span>🎆</span>
                    <span>{userRating || 0}</span>
                </div>
            </div>
        </div>
    )
}