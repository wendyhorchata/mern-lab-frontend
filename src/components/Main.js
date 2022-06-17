import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"


function Main(props) {

  const [food, setFood] = useState([])
  const URL = process.env.API_URL || 'https://wo-mern-lab-backend.herokuapp.com/food'

  const getFood = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setFood(data);
    console.log(data)
  }

  const createFood = async (food) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(food),
    })
    getFood()
  }


  const updateFood = async (food, id) => {
    await fetch(URL +  "/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/json',

      },
      body: JSON.stringify(food)
    })
    getFood();
  }


  const deleteFood = async (id) => {
    await fetch(URL +  "/" + id, {
      method: "DELETE",
    })
    getFood()
  }

  useEffect(() => {
    getFood();
  }, []);



  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index foods={food} createFoods={createFood} />}
        />
        <Route path="/foods/:id" element={
          <Show
            foods={food}
            deleteFood={deleteFood}
            updateFood={updateFood} />
        } />
      </Routes>
    </main>
  )
}
export default Main;