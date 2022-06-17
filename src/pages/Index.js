import { Link } from "react-router-dom"
import { useState } from "react";

export default function Index(props) {

    const [newForm, setNewForm] = useState({
        name: '',
        image: '',
        ingredients: '',
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createFoods(newForm)
        setNewForm({
            name: '',
            image: '',
            ingredients: '',
        })
    }
    console.log(props.foods)
    // loaded function
    const loaded = () => {
        return props.foods.map((food) => (
            <div key={food._id} className="food">
                <Link to={`/foods/${food._id}`}>
                    <h1>{food.name}</h1>
                </Link>
                <img src={food.image} alt={food.name} />
                <h3> {food.ingredients} </h3>
            </div>
        ))
    }


    const loading = () => <h1>Loading...</h1>

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.ingredients}
                    name="ingredients"
                    placeholder="ingredients"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Receipe" />
            </form>
            <div className="food-container">
                {props.foods ? loaded() : loading()}
            </div>
        </section>
    )
}