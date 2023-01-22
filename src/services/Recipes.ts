import axios from "axios";

export const getRecipes = (diet: string) => {
  const controller = new AbortController();
  return {
    call: axios.get<any>(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${diet}`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
