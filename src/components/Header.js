import Link from "next/link";
import { siteMetaData } from "../utils/config";

function Header() {
  // включаем
  return (
    <header className="mb-10 flex items-center justify-between">
      <Link href="/">
        <h1 className="py-0 font-montserrat text-3xl font-black text-title sm:text-4xl">
          {siteMetaData.siteName}
        </h1>
      </Link>
      <div className="">
				{/* доделать потом */}
        {/* <a
          className="cursor-pointer px-4 text-secondary underline underline-offset-4"
          href={`${siteMetaData.siteUrl}/about`}
        >
          About
        </a>
        <a
          className="cursor-pointer text-secondary underline underline-offset-4"
          href={`https://`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a> */}
      </div>
    </header>
  );
}

export default Header;
