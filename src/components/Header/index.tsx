import styles from "./index.module.scss";
import { ReactComponent as HomeIcon } from "@assets/icons/ic_home.svg";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Recipe</span>
        <span>App</span>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_item} onClick={() => history.push("/")}>
          Home
        </div>
        <div
          className={styles.menu_item}
          onClick={() => history.push("/vegetarianos")}
        >
          Vegetarianos
        </div>
        <div
          className={styles.menu_item}
          onClick={() => history.push("/platosprincipales")}
        >
          Platos Principales
        </div>
        <div className={styles.menu_item}>Tortas</div>
        <div className={styles.menu_item}>Comida Rápida</div>
        <div className={styles.menu_item}>Menú Niños</div>
        <div className={styles.menu_item}>Sopas</div>
      </div>
      <div className={styles.home}>
        <HomeIcon />
      </div>
    </div>
  );
};

export default Header;
