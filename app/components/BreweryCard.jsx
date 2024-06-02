import { useSelector } from 'react-redux';

/**
 * A component to display an individual brewery
 * @returns Functional React Component
 */
export function BreweryCard() {

  const breweries = useSelector((state) => state.breweries.breweries);
  return (
    <div>
     {breweries[0].name};
    </div>
  );
}