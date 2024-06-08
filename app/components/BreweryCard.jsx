'use client'
import { useState } from "react";

/**
 * A component to display an individual brewery
 * @returns Functional React Component
 */
export function BreweryCard({ brewery }) {
  const [cardState, setCardState] = useState('');

  function handleCardClick(){
    if (cardState === 'active') {
      setCardState('');
    } else {
      setCardState('active')
    }
  }
  
  return (
    <div 
      className={`list-group-item list-group-item-action ${cardState} mb-2 rounded-1 breweryCard d-flex`}
      onClick={handleCardClick}
    >
    {/* <div className="list-group-item"> */}
      <h3 className="m-1">{brewery.name}</h3>
      {/* <small>{brewery.website_url}</small> */}
    </div>
  );
}