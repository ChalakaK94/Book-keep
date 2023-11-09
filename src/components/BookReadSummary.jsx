export default function BookReadSummary({booksRead}){
    return(

        <div className="books-summmary">
            <div>Books You Read</div>
            <div className="d-flex justify-content-between">
                <div>
                    <span>_</span>
                    <span>2 Books</span>
                </div>
                <div>
                    <span>⭐</span>
                    <span>4.5</span>
                </div>
                <div>
                    <span>🎆</span>
                    <span>5</span>
                </div>
            </div>
        </div>
    )
}