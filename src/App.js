import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Results from './components/Results'
import ListBox from './components/ListBox';
import BooksList from './components/BooksList';

import BookReadSummary from "./components/BookReadSummary";
import BooksReadList from "./components/BooksReadList";
import FormatBookResponse from './service/FormatBookResponse';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Search from './components/Search';


const BookRead = [
  {
    isbn: '9788129112859',
    title: 'I BOUGHT THE MONKS FERRARI',
    rating: 4.3,
    year: 2001,
    publisher: 'Rupa Publications India',
    image: 'https://covers.openlibrary.org/b/id/6903838-M.jpg'
  },
  {
    isbn: '9780618263225',
    title: 'The Lord of the Rings',
    rating: 4.3,
    year: 2004,
    publisher: 'HarperCollins Publishers',
    image: 'https://covers.openlibrary.org/b/id/393992-M.jpg'
  },
  {
    isbn: '9780984221233',
    title: 'A Python Book',
    rating: 4.3,
    year: 2006,
    publisher: 'Platypus Global Media"',
    image:
      'http://books.google.com/books/content?id=1FL-ygAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  {
    isbn: '9781521546185',
    title: 'React. Js Book',
    rating: 4.3,
    year: 2008,
    publisher: 'Packt Publishers',
    image:
      'http://books.google.com/books/content?id=e_l9zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  }
];

const KEY ='AIzaSyDSwK1KQRyal2ddUwrnOyYoDJP467Wc48c';



function App() {
  const [booksData,setBooksData] = useState([])
  const [booksReadData,setBooksReadData] = useState(BookRead)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')


  async function fetchPosts(){
    try{
    setIsLoading(true);
    setError('')
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${KEY}`);
    const data = await response.json();
    if(!data.items) throw new Error ('No Books Data Avilable!');
    setBooksData(FormatBookResponse(data))
    setIsLoading(false)
    }
    catch (error){
      setIsLoading(false)
      setError(error.message);
      console.log(error.message);
      
    }
  }

  useEffect(()=>{
    if( query.length < 4){
      return
    }
    fetchPosts() 
  },[query])

 
  return (
    <>
    <Navbar>
      <Search query={query} setQuery={setQuery}/>
      <Results books={booksData}/>
    </Navbar>
    <Main>
      <ListBox >
        {isLoading && <Loader/> }
        {!isLoading && !error &&  <BooksList booksData={booksData}/> }
        {error && <ErrorMessage message={error}/> }
      </ListBox>
      <ListBox>
            <BookReadSummary />
            <BooksReadList booksRead={booksReadData} />
      </ListBox>
    </Main>
    </>
  );
}

export default App;
