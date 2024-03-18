
import React from 'react'

const ExploreCard = ({img,content}) => {
  return (
    <div className="explore-card" >
        <img src = {img}/>
        <div>
          <p>{content}</p>
        </div>
    </div>
  )
}

export default ExploreCard