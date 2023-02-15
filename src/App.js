
import { useState } from "react";
import "./App.css";
import  axios  from "axios";
import RecipeCard from "./RecipeCard";
export default App;


function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("");

  const YOUR_APP_ID = `ca8a7842`;
  const YOUR_APP_KEY = "8467fdd6590ea00b728798aacaf54866";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    var result = await axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };
  //                  **********************    'search' removed from btwn + +
  // async () => {
  //   var result = await Axios.get();
  //   setrecipes(result.data.hits);
  //   console.log(result.data);
  // }
//  ******changing getRecipes to search was an idea...nothing happened
  const onSubmit = (e) => {
    e.preventDefault();
    setrecipes();
  }
  return (
    <div className ="app">
      <h1 > Ambar's Recipe Search 🍽️ </h1>
     
      <form className ="search_Bar" onSubmit={onSubmit}>
        <input
          type="text"
          className="search_Input"
          placeholder="Type ingredients here"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input onClick={getRecipeInfo} className="search_Submit" type="submit" value="Search" />

        <select className="app_healthlabels">
          <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabel("vegetarian")}>Vegetarian</option>
          <option onClick={() => sethealthLabel("pescetarian")}>pescetarian</option>
          <option onClick={() => sethealthLabel("high-protein")}>High Protein</option>
          <option onClick={() => sethealthLabel("low-sodium")}>low sodium</option>
        </select>
      </form>
      <div className="app_recipes">
        {recipes ? recipes.map((recipe, i) => {
          return <RecipeCard key={i} recipe={recipe} />;
        }) : "no recipes"}
      </div>
    
    </div>
  
);
      }