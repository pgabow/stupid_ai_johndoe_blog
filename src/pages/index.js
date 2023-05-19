import { getDatabase } from "./api/notion";
import Article from "../components/Article";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
	// console.log(posts)
  return (
    <>
      {posts.map((post) => {
        const date = new Date(post.properties.date.date.start).toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        );
        return (
          <Article
            key={post.id}
            title={post.properties.title.title[0].plain_text}
            date={date}
            author={post.properties.autor?.select.name}
            tags={post.properties.tags?.multi_select
              .map((item) => "#" + item.name)
              .join(", ")}
            summary={post.properties.summary?.rich_text[0]?.plain_text ?? ""}
            href={`/${post.id}`}
          />
        );
      })}
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
	// console.log(database)
  return {
    props: {
      posts: database,
    },
  };
};
