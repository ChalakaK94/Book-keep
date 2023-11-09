import ListBox from "./ListBox";
import StudiedList from "./StudiedList";

export default function Main({booksData,booksRead}){
    console.log(booksData);
    return(
        <div className='main d-flex'>
            <ListBox booksData={booksData}/>
            <StudiedList booksRead={booksRead}/>
      </div>
    )
}