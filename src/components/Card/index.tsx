import styles from "./index.module.scss";
import star from "@assets/star.png";
import hearth from "@assets/hearth.png";

interface CardProps {
  id: string;
  name: string;
  quality: string;
  image: string;
}

const Card = (props: CardProps) => {
  return (
    <div data-testid={`card_${props.id}`} className={styles.card}>
      <div className={styles.card__image_container}>
        <img src={props.image} alt="img" />
      </div>
      <div className={styles.card__subcontainer}>
        <div className={styles.card__infocontainer}>
          <div className={styles.card__name}>
            {props.name.split(" ").map((part, idx) => {
              if (idx < 2) return <span key={`name_${idx}`}>{part}</span>;
              else return null;
            })}
          </div>
        </div>

        <div className={styles.card__qualities}>
          <div className={styles.card__qualities_left}>
            <img src={star} alt="star" />
            <span>{props.quality}</span>
          </div>
          <div className={styles.card__qualities_right}>
            <img src={hearth} alt="hearth" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
