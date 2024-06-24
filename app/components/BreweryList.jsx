'use client'
import { BreweryCard } from "./BreweryCard";
import { useSelector } from 'react-redux';
import { useState } from "react";

/**
 * A component to display the list of brewery cards
 * @returns Functional React Component
 */
export function BreweryList() {
  // Pulls the array of breweries stored in Redux
  const breweries = useSelector((state) => state.breweries.breweries);
  // Keeps track of if a brewery card has been selected (with nothing being selected initially)
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="col-md-5 p-4">
      <div className="list-group">
        {/* Maps breweries to individual cards on the page */}
        {breweries.map(brewery => (
          <BreweryCard 
            key={brewery.id}
            brewery={brewery}
            isActive={activeCard === brewery.id}
            handleCardClick={() => {
              // Sets an active BreweryCard.
              // Multiple BreweryCards cannot be selected at the same time.
              // If the active BreweryCard is already selected, it deselects the card.
              activeCard === brewery.id ? setActiveCard(0) : setActiveCard(brewery.id)
            }}
          />
        ))}
      </div>
    </div>
  );
}