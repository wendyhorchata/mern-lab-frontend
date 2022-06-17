import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function Show(props) {
  const { id } = useParams();
  const foods = props.foods;
  const food = foods.find((p) => p._id === id) || {}
  let navigate = useNavigate();
 console.log(foods)
  const [editForm, setEditForm] = useState(food);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateFood(editForm, id);
    navigate('/');
  };

  const removeFoods = () => {
    props.deleteFood(id);
    navigate('/');
  };

  return (
    <div className="food-edit">
      <h1>{food.name}</h1>
      <h2>{food.ingredients}</h2>
      <img src={food.image} alt={food.name} />

      <br />

      <button id="delete" onClick={removeFoods}>
        DELETE
      </button>

      <br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.ingredients}
          name="ingredients"
          placeholder="ingredients"
          onChange={handleChange}
        />
        <input type="submit" value="Update Recipe" />
      </form>
    </div>
  );
}

export default Show;
