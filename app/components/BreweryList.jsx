'use client'
import { BreweryCard } from "./BreweryCard";
import { useSelector } from 'react-redux';

/**
 * A component to display the list of brewery cards
 * @returns Functional React Component
 */
export function BreweryList() {
  // Pulls the array of breweries stored in Redux
  const breweries = useSelector((state) => state.breweries.breweries);

  return (
    <div className="col-md-4 p-4">
      <div className="list-group">
        {/* Maps breweries to individual cards on the page */}
        {breweries.map(brewery => (<BreweryCard key={brewery.id} brewery={brewery}/>))}
      </div>
    </div>
  );
}