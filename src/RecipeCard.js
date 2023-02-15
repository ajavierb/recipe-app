import React from 'react';
import "./RecipeCard.css";

export default function RecipeCard({recipe}) {
  return (
    // .match(etc) search for these types of imgs if not then rtrn null
    recipe["recipe"]["image"].match(/|.(jpeg|jpg|gif|png)$/)
    != null && (
     <div className='recipeCard' onClick={() =>
     window.open(recipe["recipe"]["url"]) }>
    <img className='recipeCard_img' src={recipe["recipe"]["image"]} />
        <p className='recipeCard_name'>{recipe["recipe"]["label"]}</p>
    </div>
    )
  );
}
