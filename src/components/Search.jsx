import { useEffect, useRef } from "react"
import { useKeyDownEvent } from "../service/useKeyDownEvent";

export default function Search({query, setQuery}){
    const inputRef = useRef(null);

    useKeyDownEvent('enter', function (){
        const activeElement = document.activeElement
                inputRef.current.focus();
                if(activeElement !== inputRef.current){
                setQuery('')

                }
    })

    return (
        <input type='text' 
            placeholder="Search Books..." 
            value={query} 
            ref={inputRef}
            onChange={e=> setQuery(e.target.value)}/>
    )
}