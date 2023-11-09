export default function BookRead({book}){
    return (
        <li className="d-flex">
            <img src={book.image} alt={book.title}/>
            <div>
                <h3>{book.title}</h3>
                <div className="d-flex" style={{gap:'10px'}}>
                    <div>
                        <span>⭐</span>
                        <span>3.5</span>
                    </div>
                    <div>
                        <span>🎆</span>
                        <span>4.5</span>
                    </div>
                </div>
                
            </div>
        </li>
    )
}