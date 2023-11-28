import React from "react";
import { recipes } from "../Data";

const Recipe = () => {
  return (
    <div className="section" id="recipe">
      <div className="flex flex-col items-center">
        <div className="text-3xl text-center font-bold mb-16">
          Hot selling Tickets
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {recipes.map((recipe) => {
            return (
              <div
                className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"
                key={recipe.id}
              >
                <img src={recipe.image} alt="" className="rounded-lg mb-4" />
                <div className="flex justify-between mb-4">
                  <div className="md:text-xl text-[1rem] font-semibold">
                    {recipe.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <button>-</button>
                    <span className="text-[0.85rem]">2</span>
                    <button>+</button>
                  </div>
                </div>
                <p className="text-[0.85rem] opacity-70 mb-4">
                  
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold">{recipe.price}</span>
                  <span className="cursor-pointer p-3 btn">Add to Cart</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn cursor-pointer">View All Tickets</div>
      </div>
    </div>
  );
};

export default Recipe;
