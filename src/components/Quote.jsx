import { useEffect } from "react";
import { useState } from "react";

function Quote() {
  const [quoteText, setQuoteText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [alltags, setAllTags] = useState([]);

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();

      const { content, author, tags } = data;

      setAuthorName(author);
      setQuoteText(content);
      setAllTags(tags);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950">
      <div className="flex flex-col items-center justify-center bg-slate-800 rounded-2xl border-transparent p-10 max-w-2xl">
        <div className="flex flex-col items-center justify-center pb-3">
          <p className="text-slate-100 font-mono text-2xl font-medium pb-3">
            {authorName}
          </p>
          <div className="flex flex-row items-center justify-center border-solid border-2 border-green-600 rounded-3xl p-2 m-3 text-green-600">
            {alltags.map((tag) => {
              return <div>{tag}</div>;
            })}
          </div>
          <p className="text-slate-400 text-xl font-sans">{quoteText}</p>
        </div>
        <div>
          <button onClick={getQuote}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 stroke-slate-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
