import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import Coffee from './Components/Coffee';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <div>
      <Link className='btn' to={"/addCoffee"}>Add Coffee</Link>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>

        {
          coffees.map(coffee => <Coffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}

          ></Coffee>)
        }
      </div>
    </div>
  )
}

export default App
