import { Searchbar } from "./searchbar";

export function InitialView() {
  return (
    <div className="flex flex-col m-auto items-center gap-20 my-20">
      <h1 className="text-white font-bold text-5xl sm:text-4xl lg:text-7xl text-center max-w-5xl">
        Discover over 2,000,000 free Stock Images
      </h1>
      <div className="w-3/6 flex flex-col gap-4">
        <Searchbar />
        <div
          className="w-fit py-2 px-6 text-xs m-auto flex-shrink-0 text-white rounded-lg bg-[rgba(217, 217, 217, 0.12)] backdrop-blur-[25.034873962402344px]"
          style={{
            boxShadow:
              "-3.943px 3.943px 3.943px 0px rgba(255, 255, 255, 0.43) inset, 3.943px -3.943px 3.943px 0px rgba(182, 182, 182, 0.43) inset",
          }}
        >
          <b>Trending:</b> flowers, love, forest, river
        </div>
      </div>
    </div>
  );
}
