import revivingRetroPCs from '../../assets/images/image-retro-pcs.jpg';
import topLaptops from '../../assets/images/image-top-laptops.jpg';
import growthOfGaming from '../../assets/images/image-gaming-growth.jpg';

import styles from './TopThreeArticles.module.css';
import TopArticle from './TopArticle';

const ARTICLES = [
    {
        id: "01",
        title: "Reviving Retro PCs",
        description: "What happens when old PCs are given modern upgrades?",
        img: revivingRetroPCs
    },
    {
        id: "02",
        title: 'Top 10 laptops of 2022',
        description: "Our best picks of various needs and budgets.",
        img: topLaptops
    },
    {
        id: "03",
        title: 'The Growth of Gaming',
        description: "How the pandemic has sparked fresh opportunities.",
        img: growthOfGaming
    }
]

const TopThreeArticles = () => {
    return <div className={styles.container}>
        {ARTICLES.map(article => <TopArticle article={article} />)}
    </div>
}

export default TopThreeArticles;