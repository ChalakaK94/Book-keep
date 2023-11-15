import { useEffect, useState } from "react"
import { prepareBookObject } from "../service/FormatBookResponse";
import Loader from "./Loader";
import StarRating from "./starRating/StarRating";

export default function BookDetails({selectedId, handleBack}){

    const [book, setBook] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [rating, setRating]= useState(0);

    async function getBookDetails(){
        setIsLoading(true)
        const  response = await fetch(`https://www.googleapis.com/books/v1/volumes/${selectedId}`);
        const bookDetails = await response.json();
       setBook(prepareBookObject(bookDetails));

       setIsLoading(false);
    }

    useEffect(()=>{
        getBookDetails();

    },[selectedId])


    return (
       <div>
        <div>
            <button onClick={handleBack}>Back</button>
        </div>

        {isLoading ? <Loader/> : <div className="book-details">
        <div className="d-flex" style={{gap: '10px'}}>
        <div>
            <img src={book.image} alt={book.name} />
        </div>

        <div>
            <h2>{book.title}</h2>
            <h3>{book.subTitle}</h3>

            <ul>
                <li> Year :{book.year}</li>
                <li> Publisher :{book.publisher}</li>
                <li> ISBN :{book.isbn}</li>
            </ul>
        </div>
      </div>
       <div>
        <div>Rate Book: </div>
            <StarRating onSetRating={()=>console.log('rating')}/> 
            <StarRating maxRating={10} color="#fc4199" defaultRating={5} onSetRating={setRating}/>      
        <div>The Book has {rating} Star Rating</div>
         </div>
       </div>
      }
          
       </div> 
    )
}

