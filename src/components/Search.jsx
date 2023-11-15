import { useEffect, useRef } from "react"

export default function Search({query, setQuery}){
    const inputRef = useRef(null);

    useEffect(() => {
        function callBack(e){
            if (e.code === 'Enter') {
                const activeElement = document.activeElement
                inputRef.current.focus();
                if(activeElement !== inputRef.current){
                setQuery('')

                }
            }
        }
        document.addEventListener('keydown', callBack)
       
        inputRef.current.focus();
        return ()=>{
            document.removeEventListener('keydown', callBack)
        }
    }, []);


    return (
        <input type='text' 
            placeholder="Search Books..." 
            value={query} 
            ref={inputRef}
            onChange={e=> setQuery(e.target.value)}/>
    )
}