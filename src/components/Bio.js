import { siteMetaData } from "../utils/config";
import Image from "next/image";

function Bio() {
  return (
    <div className="mb-14 flex">
      <Image
        src="/nice-avatar.png"
        className="mr-3 h-14 w-14 rounded-full"
        width={56}
        height={56}
        alt={`${siteMetaData.authorName}`}
      />
      <p className=" max-w-sm p-0.5 text-base text-text sm:p-2">
        Stupid AI-powered Blog by{" "}
        <a
          href={`https://twitter.com/${siteMetaData.twitterUserName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-secondary underline underline-offset-4"
        >
          {`${siteMetaData.authorName}'s`}
        </a>
        . Sharing my thoughts on various strange things
      </p>
    </div>
  );
}

export default Bio;
