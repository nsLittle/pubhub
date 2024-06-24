'use client'

/**
 * A component to display an individual brewery
 * @returns Functional React Component
 */
export function BreweryCard({ brewery, isActive, handleCardClick }) {
  const cardClass = isActive
  ? "list-group-item list-group-item-action active m-2 rounded-1 breweryCard d-flex"
  : "list-group-item list-group-item-action m-2 rounded-1 breweryCard d-flex";

  const linkColor = isActive ? 'white' : 'black';

  return (
    <div className={cardClass} onClick={handleCardClick}>
      <h3>{brewery.name}</h3>
      <div>Brewery Type: {brewery.brewery_type}</div>
      <div>
        <a style={{ color: linkColor }} href={brewery.website_url}>{brewery.website_url}</a>
      </div>
    </div>
  );
}