import { useState } from "react";
import Star from "./Star";
import PropType from 'prop-types'

export default function StarRating({maxRating = 5, color='#000', defaultRating=0, onSetRating}){
    const [rating, setRating] = useState(defaultRating);
    const [tempRating, setTempRating] = useState(0);

    StarRating.propType = {
        maxRating: PropType.number,
        color:PropType.string,
        defaultRating: PropType.number,
        onSetRating: PropType.func
    }

    function handleRate(rating){
        setRating(rating)
        onSetRating(rating)
    }
    
    return (
        <div className="d-flex align-item-center">{Array.from({length:maxRating}, (k,i)=>(
            <Star
            key={i}
            color={color}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRate(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
        <div style={{fontSize:'20px', color}}>{tempRating || rating||''}</div>
        </div>
    )
}