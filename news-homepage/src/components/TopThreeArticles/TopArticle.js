import styles from './TopArticle.module.scss';

const TopArticle = ({ article }) => {
    return <div className={styles.container}>
        <div className={styles.imageContainer}>
            <img src={article.img} alt={article.title} className={styles.image}/>
        </div>
        <div className={styles.information}>
            <div className={styles.number}>{article.id}</div>
            <h3 className={styles.title}>{article.title}</h3>
            <p className={styles.description}>{article.description}</p>
        </div>
    </div>
}

export default TopArticle;