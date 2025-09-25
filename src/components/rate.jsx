import { useState } from "react"
import Star from "./star"

const Rate = ({knowRate,index},) => {
    const [rating, setRating] = useState(0)
    const stars = Array.from({length: 5}, (_,i)=>(i+1))

    const warnRate = (value) =>
    {
        setRating(value)
        knowRate(index, value)
    }

    return (
      <>   
        <div>
            <div className="stars">
            {
              stars.map((star,i) => <Star key={i} star={star} rating={rating} warnRate={warnRate}/>)
            }
            </div>       
        </div>
      </>
    )
  }
  
  export default Rate
  