import { useFetch } from "../hook/useFetch";
import type { User } from "../types/user";

interface CardProps {
  error?: string;
  likes?: number;
  author?: string;
  retry: () => void;
  pending?: boolean;
  comments?: number;
  addLike: () => void;
}

export function Card({
  error,
  retry,
  pending,
  addLike,
  likes = 22,
  author = "",
  comments = 0,
}: CardProps) {
  const { data } = useFetch<User>("https://randomuser.me/api");

  if (!data?.results) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="
      mt-8
      container
      bg-white
      rounded-xl
      shadow-lg
      transform
      transition
      duration-500
      max-w-sm
      hover:hover:shadow-2xl
    "
    >
      <div>
        <span
          onClick={() => {
            error && retry();
          }}
          className={`
          mt-4
          ml-4
          px-4
          py-1.5
          font-bold
          rounded-lg
          inline-block
          cursor-pointer
          text-white text-xs
          ${error ? "bg-red-500" : "bg-green-500"}
          `}
        >
          {error && (
            <span className="flex absolute h-3 w-3 top-6 right-6 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          )}
          {!error ? "Sucess" : "Click to Retry"}
        </span>

        <h1
          className="
          text-2xl
          mt-2
          ml-4
          font-bold
          text-gray-800
          cursor-pointer
          hover:text-gray-900
          transition
          duration-100
        "
        >
          {data.results[0]?.name?.last}
        </h1>

        <p className="px-4 py-1.5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          veritatis alias accusamus pariatur nulla dolores culpa eos.
          Consequatur quam repellat, voluptatibus molestiae adipisci natus fugit
          nisi a unde dolorem odit.
        </p>
        <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
          #by {data.results[0]?.name?.first}
        </p>
      </div>
      <img className="w-full cursor-pointer" src="" alt="" />
      <div className="flex p-4 justify-between">
        <div className="flex items-center space-x-2">
          <img
            className="w-10 rounded-full"
            src={data.results[0]?.picture?.large}
            alt="sara"
          />
          <h2 className="text-gray-800 font-bold cursor-pointer">{author}</h2>
        </div>

        <div className="flex space-x-2">
          <div className="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-600 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
            <span>{comments}</span>
          </div>
          <div
            onClick={() => !pending && addLike()}
            className="flex space-x-1 items-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
                h-7
                w-7
                text-red-500
                hover:text-red-400
                transition
                duration-100
                cursor-pointer
              "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
