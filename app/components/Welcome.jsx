/**
 * A component to greet the user and describe Pubhub
 * @returns Functional React Component
 */
export function Welcome() {
  return (
  <header className="border-bottom p-4 welcome">
    <h1>PubHub</h1>
    <p>Welcome. Use this app to find breweries near you!</p>
    <a href="#" className="btn btn-lg btn-outline-light">Find Pubs</a>
  </header>
);
}