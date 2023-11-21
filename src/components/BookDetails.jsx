import { useEffect, useRef, useState } from "react"
import { prepareBookObject } from "../service/FormatBookResponse";
import Loader from "./Loader";
import StarRating from "./starRating/StarRating";

export default function BookDetails({selectedId, handleBack,onBookRead, booksReadData}){

    const [book, setBook] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current = countRef.current + 1;
  }, [userRating]);

  const isRated = booksReadData.map((book) => book.id).includes(selectedId);
  const ratedBook = booksReadData.find((book) => book.id === selectedId);

  async function getBookDetails() {
    setIsLoading(true);
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${selectedId}`);
    const bookDetails = await response.json();

    setBook(prepareBookObject(bookDetails));
    setIsLoading(false);
  }

  function handleBookRead() {
    onBookRead({ ...book, userRating, ratingCount: countRef.current });
    handleBack();
  }

  //component is mounted && selectedId changes triggred
  useEffect(
    function () {
      getBookDetails();
    },
    [selectedId]
  );

  useEffect(() => {
    if (!book) return;
    document.title = `Book - ${book.title}`;
    return () => {
      console.log(book.title);
      document.title = 'Books DB';
    };
  }, [book]);

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
      
      {isRated ? `Already Rated to This Book  ${ratedBook.userRating} Stars` : <div>
      <div>
        <div>Rate Book: </div> 
            <StarRating maxRating={10} color="#fc4199"  onSetRating={setUserRating}/>      

         </div>

        {userRating > 0 &&  <div>
            <button onClick={handleBookRead} >Add to List</button>
         </div> }
       </div>     
      }
       </div>
      }   
       </div> 
    )
}

