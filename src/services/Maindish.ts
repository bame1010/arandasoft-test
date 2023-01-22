import axios from "axios";

export const getDish = (maincourse: string) => {
  const controller = new AbortController();
  return {
    call: axios.get<any>(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${maincourse}`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};