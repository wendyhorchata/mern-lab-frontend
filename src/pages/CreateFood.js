
export default function CreateFood(props) {

//   const createFood = async (food) => {
//     await fetch(URL, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'Application/json',
//       },
//       body: JSON.stringify(food), 
//     })
//   }
const onSubmit = (event) => {

}

return (
    <form method= "POST" action="/food">
     <input name= "name" placeholder="name"></input>
     <input name="image"  placeholder="URL"></input>
     <input name="ingredeints" placeholder="name"></input>

    </form> 

)

}