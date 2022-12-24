import NewArticle from "./NewArticle";
import styles from "./NewArticles.module.scss";

const NEW_ARTICLES = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EV's?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const NewArticles = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>NEW</h2>
      <div className={styles.articles}>
        {NEW_ARTICLES.map((article) => (
          <NewArticle article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewArticles;
