export default function FormatBookResponse(bookData){
    let books = [];

    for( let item of bookData.items){
        if(item.volumeInfo.industryIdentifiers){
            let book = prepareBookObject(item)
    
        books.push(book)
        }
    }
    return books
}

export function prepareBookObject(item){

    let book = {
        id:item.id,
        title: item.volumeInfo.title,
        subTitle:item.volumeInfo.subtitle,
        isbn : item.volumeInfo.industryIdentifiers[0].identifier,
        image: item.volumeInfo.imageLinks?.thumbnail,
        publisher: item.volumeInfo.publisher,
        rating: 4.5,
        year: item.volumeInfo.publishedDate
    }
    return book
}

export function avarage(arr){
    return arr.reduce((acc,curr)=> acc+ curr,0)/arr.length;
}