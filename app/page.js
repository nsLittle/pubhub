'use client';
import { Welcome } from "./components/Welcome";
import { BreweryList } from "./components/BreweryList";
import { BreweryMap } from "./components/BreweryMap";
import { BreweryCard } from "./components/BreweryCard";
import { useSelector } from 'react-redux';

export default function PubHub() {
  


  return (
    <>
      <Welcome/>
      <BreweryCard />
    </>
  )
};