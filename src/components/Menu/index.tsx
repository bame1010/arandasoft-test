import styles from "./index.module.scss";
import star from "@assets/star.png";
import hearth from "@assets/hearth.png";

interface MenuProps {
  namemenu: string;
  imagemenu: string;
}

const Menu = (props: MenuProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image_container}>
        <img src={props.imagemenu} alt={props.imagemenu} />
      </div>
      <div className={styles.card__subcontainer}>
        <div className={styles.card__name}>
          <span>{props.namemenu}</span>          
        </div>
      </div>    
    </div>
  );
};

export default Menu;
