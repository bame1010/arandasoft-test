import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Recipe from "@models/Recipe";

const Page3 = () => {
  const myRecipes: Recipe[] = useSelector(
    (state: RootState) => state.recipe.recipes
  );
  return (
    <>
      {myRecipes.map((recipe) => (
        <>
          <h1>{recipe.name}</h1>
          <br />
        </>
      ))}
    </>
  );
};

export default Page3;
