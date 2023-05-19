import Link from "next/link";
import { AiFillAlert } from "react-icons/ai";

function Article(props) {
  return (
    <article className="block" key={props.id}>
      <header className="">
        <h2 className="mb-2 mt-14 font-montserrat text-2xl font-black sm:text-3xl">
          <Link className="text-secondary" href={props.href}>
            {props.title}
          </Link>
        </h2>
        <p className="mb-1 mt-2 font-montserrat text-lg text-text">
          {props.tags}
        </p>
        <p className="mb-1 mt-2 font-montserrat text-lg text-text">
          <small className="text-s mr-4 italic text-cyan-300">
            {props.date}
          </small>{" "}
          <span className="mr-2 inline-block text-yellow-300">
            <AiFillAlert />
          </span>
          <span className="underline">{props.author}</span>
        </p>
      </header>
    </article>
  );
}

export default Article;
