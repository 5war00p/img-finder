import { useRouter } from "next/navigation";
import { useState } from "react";

export function Searchbar() {
  const { push } = useRouter();
  const [query, setQuery] = useState("");

  return (
    <div
      className="flex py-2 px-4 rounded-[8.6px] bg-[rgba(217, 217, 217, 0.12)] backdrop-blur-[25.034873962402344px]"
      style={{
        boxShadow:
          "-3.943px 3.943px 3.943px 0px rgba(255, 255, 255, 0.43) inset, 3.943px -3.943px 3.943px 0px rgba(182, 182, 182, 0.43) inset",
      }}
    >
      <div className="m-2 w-[21.307px] h-[21.307px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
        >
          <path
            d="M19.9219 20.3906L18.1406 18.6094M10.5703 19.5C11.6814 19.5 12.7816 19.2812 13.8082 18.8559C14.8347 18.4307 15.7674 17.8075 16.5531 17.0218C17.3388 16.2362 17.962 15.3035 18.3872 14.2769C18.8124 13.2504 19.0312 12.1502 19.0312 11.0391C19.0312 9.92796 18.8124 8.82773 18.3872 7.8012C17.962 6.77467 17.3388 5.84195 16.5531 5.05628C15.7674 4.27061 14.8347 3.64738 13.8082 3.22218C12.7816 2.79697 11.6814 2.57812 10.5703 2.57813C8.32633 2.57813 6.17426 3.46954 4.58753 5.05628C3.00079 6.64301 2.10938 8.79508 2.10938 11.0391C2.10937 13.283 3.00079 15.4351 4.58753 17.0218C6.17426 18.6086 8.32633 19.5 10.5703 19.5Z"
            stroke="white"
            strokeWidth="1.33594"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input
        placeholder="Search"
        className="w-full bg-transparent outline-none border-0 placeholder:text-white text-white focus-visible:ring-0 focus-within:ring-0 focus:ring-0"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="w-16 h-7 m-auto border-2 rounded-lg text-white px-3 text-sm font-medium"
        onClick={() => push(`?q=${query}`)}
      >
        GO!
      </button>
    </div>
  );
}
