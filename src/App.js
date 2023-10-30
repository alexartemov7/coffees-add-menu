import { useState } from 'react';
import Hero from './components/Hero';
import AddCoffee from './components/AddCoffee';
import './App.css';
import CoffeeList from './components/CoffeeList';


export default function App() {
  const [coffees, setCoffees] = useState()
  return (
    <>
    <Hero />
    <AddCoffee setCoffees={setCoffees} studentName="Fred"/>
    <CoffeeList coffees={coffees} />
    </>
  );
}

