import styles from './NewArticle.module.css';

const NewArticle = ({ article }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.description}>{article.description}</p>
    </div>
  );
};

export default NewArticle;
