import { useState } from "react";
import BookReadSummary from "./BookReadSummary";
import BooksReadList from "./BooksReadList";

export default function StudiedList({booksRead}){
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className="box">
            <div style={{textAlign: 'end', backgroundColor:'#eee'}}>
                <button className="btn-toggle" onClick={()=> setIsOpen((open)=> !open)}>
                    {isOpen ? '-' : '+'}</button>
            </div>
            {isOpen &&  <>
                <BookReadSummary booksRead={booksRead} />
            <BooksReadList booksRead={booksRead} />
            </> }
            
        </div>
    )
}