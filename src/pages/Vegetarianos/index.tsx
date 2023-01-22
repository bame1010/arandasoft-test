/* eslint-disable react-hooks/exhaustive-deps */
import Card from "@components/Card";
import styles from "./index.module.scss";
import { useEffect } from "react";
import Recipe from "@models/Recipe";
import useFetchAndLoad from "@hooks/useFetchAndLoad";
import { getRecipes } from "@services/Recipes";
import RecipesResponse from "@models/RecipesResponse";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../../redux/reducers/RecipeReducer";
import { RootState } from "../../redux/store";

const Vegetarianos = () => {
  //const [myRecipes, setMyRecipes] = useState<Recipe[]>([]);
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();

  const myRecipes: Recipe[] = useSelector(
    (state: RootState) => state.recipe.recipes
  );

  const fetchRecipes = async () => {
    const resp = await callEndpoint(getRecipes("vegetarian"));

    dispatch(
      setRecipes(
        resp.data.results.map((recipe: RecipesResponse) => {
          return { name: recipe.title, quality: "5.0", image: recipe.image };
        })
      )
    );
    // setMyRecipes(
    //   resp.data.results.map((recipe: RecipesResponse) => {
    //     return { name: recipe.title, quality: "5.0", image: recipe.image };
    //   })
    // );
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__title_container}>
        <span>Vegetarianos</span>
      </div>
      <div className={styles.container__menu_container}>
        {loading ? (
          <>Cargando....</>
        ) : (
          myRecipes.map((recipe, idx) => (
            <Card
              key={`card_${idx}`}
              id={idx.toString()}
              name={recipe.name}
              quality={recipe.quality}
              image={recipe.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Vegetarianos;
