import './App.css';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import ListBox from './components/ListBox';
import BooksList from './components/BooksList';
import BooksReadSummary from './components/BookReadSummary'
import BooksReadList from './components/BooksReadList';
import NavBar from './components/Navbar'
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Search from './components/Search';
import BookDetails from './components/BookDetails';

import Results from './components/Results';
import { useBooks } from './service/useBooks';
import { useLocalStorage } from './service/useLocalStorage';
import { useKeyDownEvent } from './service/useKeyDownEvent';

const KEY = `AIzaSyDd8zjqw7paHROuV-wUP-ZNvUXmGornx0c`;
function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('');

  const { isLoading, error, booksData } = useBooks(query, handleBack);

  const [booksReadData, setBooksReadData] = useLocalStorage([], 'readList');
  

  useKeyDownEvent("Escape",handleBack)
 

  function handleSelectedId(id) {
    setSelectedId((selectedId) => (id === selectedId ? '' : id));
  }

  function handleBookRead(book) {
    setBooksReadData((b) => [...b, book]);
  }

  function handleBack() {
    setSelectedId('');
  }
  function deleteReadBook(bookId) {
    let booksData = booksReadData.filter((book) => book.id !== bookId);
    setBooksReadData(booksData);
  }


  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <Results books={booksData} />
      </NavBar>
      <Main>
        <ListBox>
          {isLoading && <Loader />}
          {!isLoading && !error && <BooksList booksData={booksData} handleSelectedId={handleSelectedId} />}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox>
          {selectedId ? (
            <BookDetails
              selectedId={selectedId}
              handleBack={handleBack}
              onBookRead={handleBookRead}
              booksReadData={booksReadData}
            />
          ) : (
            <>
              <BooksReadSummary books={booksReadData} />
              <BooksReadList booksRead={booksReadData} onDeleteBook={deleteReadBook} />
            </>
          )}
        </ListBox>
      </Main>
    </>
  );
}

export default App;