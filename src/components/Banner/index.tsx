import styles from "./index.module.scss";
import banner from "@assets/banner.png";
import VegetarianIcon from "@assets/icons/ic_vegetarian.svg";
import PrincipalIcon from "@assets/icons/ic_main.svg";
import CakeIcon from "@assets/icons/ic_cake.svg";
import KidsIcon from "@assets/icons/ic_kids.svg";
import SoapIcon from "@assets/icons/ic_soup.svg";
import FastIcon from "@assets/icons/ic_fast-food.svg";
import { useHistory } from "react-router-dom";

const Banner = () => {

  const history = useHistory();

  return (
    <>
      <div className={styles.container}>
        <img src={banner} alt="banner" />
        <div className={styles.title}>
          <div className={styles.title_one}>
            <span>Recetas</span>
          </div>
          <div className={styles.title_two}>
            <span>para todos</span>
          </div>
        </div>
      </div>
      <div className={styles.home_two}>
        <div className={styles.home_two__menu}>
          <div className={styles.home_two__menu__card} onClick={() => history.push("/vegetarianos")} >
            <img src={VegetarianIcon} alt={VegetarianIcon} />
            <span>Vegetarianos</span>
          </div>
          <div className={styles.home_two__menu__card} onClick={() => history.push("/platosprincipales")} >
            <img src={PrincipalIcon} alt={PrincipalIcon} />
            <span>Principales</span>
          </div>
          <div className={styles.home_two__menu__card} onClick={() => history.push("/page1")}>
            <img src={CakeIcon} alt={CakeIcon} />
            <span>Tortas</span>
          </div>
          <div className={styles.home_two__menu__card} onClick={() => history.push("/page1")}>
            <img src={FastIcon} alt={FastIcon} />
            <span>Rápida</span>
          </div>
          <div className={styles.home_two__menu__card} onClick={() => history.push("/page1")}>
            <img src={KidsIcon} alt={KidsIcon} />
            <span>Menú Niños</span>
          </div>
          <div className={styles.home_two__menu__card} onClick={() => history.push("/page1")}>
            <img src={SoapIcon} alt={SoapIcon} />
            <span>Sopas</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
