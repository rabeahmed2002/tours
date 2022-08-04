import React from 'react';
import './App.css';
import Tours from "./Tours"
import Loading from "./Loading"
// const url = 'https://jsonplaceholder.typicode.com/todos'
const url = 'https://course-api.com/react-tours-project'

export default function App() {
  const [loading,setLoading]=React.useState(true)

  const [tours,setTours]=React.useState([])

  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id!==id)
    setTours(newTours)
  }

  const fetchTours=async()=>{
    setLoading(true)

    try {
      const response=await fetch(url);
      const tours=await response.json()
      setLoading(false);
      setTours(tours)
    } catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  React.useEffect(()=>{
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if(tours.length===0) {
    return <main>
      <div className='title'>
        <h2>No titles left</h2>
        <button className='btn' onClick={fetchTours} >refresh</button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}