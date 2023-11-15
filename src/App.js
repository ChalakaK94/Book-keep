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
import BookDetails from './components/BookDetails';



const KEY ='AIzaSyDd8zjqw7paHROuV-wUP-ZNvUXmGornx0c';



function App() {
  const [booksData,setBooksData] = useState([])
  const [booksReadData,setBooksReadData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')
  const [query, setQuery] = useState('ferrari')
  const [selectedId, setSelectedId] = useState('')


  function handleSelectedId(id){
    setSelectedId((selectedId) => id === selectedId ? '' : id)
  }

  function handleBooksRead(book){
    setBooksReadData(b=> [...b, book])
  }


  function handleBack(){
    setSelectedId('')
  }
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
        {!isLoading && !error &&  <BooksList booksData={booksData} handleSelectedId={handleSelectedId} />  }
        {error && <ErrorMessage message={error}/> }
      </ListBox>
      <ListBox>
        {selectedId ? <BookDetails selectedId= {selectedId} handleBack={handleBack} onBookRead={handleBooksRead}/> : <>
        <BookReadSummary  books={booksReadData}/>
            <BooksReadList booksRead={booksReadData} />
            </>}
            
      </ListBox>
    </Main>
    </>
  );
}

export default App;
