import MainArticle from '../MainArticle/MainArticle';
import NewArticles from '../NewArticles/NewArticles';
import TopThreeArticles from '../TopThreeArticles/TopThreeArticles';

import styles from './Content.module.css';

const Content = () => {
    return <div className={styles.container}>
        <MainArticle />
        <NewArticles />
        <TopThreeArticles />
    </div>
}

export default Content;