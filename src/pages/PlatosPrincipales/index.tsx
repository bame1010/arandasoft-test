/* eslint-disable react-hooks/exhaustive-deps */
import Card from "@components/Card";
import styles from "./index.module.scss";
import { useEffect } from "react";
import useFetchAndLoad from "@hooks/useFetchAndLoad";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MainDish from "@models/MainDish";
import { getDish } from "@services/Maindish";
import { setDish } from "../../redux/reducers/DishReducer";
import MainDishResponse from "@models/MainDishResponse";

const PlatosPrincipales = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();

  const myMainDish: MainDish[] = useSelector(
    (state: RootState) => state.dishes.dish
  );

  const fetchDish = async () => {
    const resp = await callEndpoint(getDish("maincourse"));

    console.log(resp);

    dispatch(
      setDish(
        resp.data.results.map((dish: MainDishResponse) => {
          return { name: dish.title, quality: "5.0", image: dish.image };
        })
      )
    );
  };

  useEffect(() => {
    fetchDish();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__title_container}>
        <span>Platos Principales</span>
      </div>
      <div className={styles.container__menu_container}>
        {loading ? (
          <>Cargando....</>
        ) : (
          myMainDish.map((mdish, idx) => (
            <Card
              id={idx.toString()}
              key={`card_${idx}`}
              name={mdish.name}
              quality={mdish.id}
              image={mdish.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PlatosPrincipales;
