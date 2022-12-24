import image from "../../assets/images/image-web-3-desktop.jpg";

import styles from "./MainArticle.module.scss";

const MainArticle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      </div>
      <div className={styles.articleText}>
        <h1 className={styles.title}>The Bright Future of Web 3.0?</h1>
        <div className={styles.rightText}>
          <p className={styles.description}>
            We dive into the next evolution of the web that claims to put the
            power of the platform back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className={styles.btn}>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default MainArticle;
