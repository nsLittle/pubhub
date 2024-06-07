'use client'

/**
 * A component to display an individual brewery
 * @returns Functional React Component
 */
export function BreweryCard({ brewery }) {
  return (
    <div className="list-group-item mb-2 bg-warning border rounded-1">
      <h3>{brewery.name}</h3>
      <small>{brewery.website_url}</small>
    </div>
  );
}