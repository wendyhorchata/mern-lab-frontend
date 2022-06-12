import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function Show(props) {
  const { id } = useParams();
  const foods = props.foods;
  const food = foods.find((p) => p._id === id);
  let navigate = useNavigate();

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
    props.updateFoods(editForm, id);
    navigate('/');
  };

  const removeFoods = () => {
    props.deleteFoods(id);
    navigate('/');
  };

  return (
    <div className="food-edit">
      <h1>{food.name}</h1>
      <h2>{food.Ingredients}</h2>
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
          value={editForm.Ingredients}
          name="Ingredients"
          placeholder="Ingredients"
          onChange={handleChange}
        />
        <input type="submit" value="Update Recipe" />
      </form>
    </div>
  );
}

export default Show;
