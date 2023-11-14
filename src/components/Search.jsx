export default function Search({query, setQuery}){
    return (
        <input type='text' placeholder="Search Books" value={query} onChange={e=> setQuery(e.target.value)}/>
    )
}