import styles from "./index.module.scss";
import products from "@assets/products.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__tittle}>
        <span>Con el Patrocinio de</span>
      </div>
      <div className={styles.container__image}>
        <img src={products} alt="products" />
      </div>
    </div>
  );
};

export default Footer;
