import dynamic from "next/dynamic";
import { Searchbar } from "./searchbar";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Image, getImages } from "@/utils/getImages";
import NextImage from "next/image";

const ImagePreviewModal = dynamic(() => import("./preview-modal"));

export function ResultsView() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.trim();

  const [showModal, setShowModal] = useState(false);
  const [imageData, setImageData] = useState<Image[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<Image>();

  useEffect(() => {
    if (q) {
      setIsDataLoading(true);
      getImages(q)
        .then((data) => {
          setImageData(data);
          const tags = data.flatMap((image) => image.tags.split(", "));
          setTags(() => [...Array.from(new Set(tags))]);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setTimeout(() => setIsDataLoading(false), 1500);
        });
    }
  }, [q]);

  return (
    <>
      <div className="mx-auto my-[72px] w-3/5 text-center space-y-6">
        <Searchbar />
        <h1 className="text-white font-bold text-[42px] leading-[87px]">
          Result: {q}
        </h1>
      </div>
      {isDataLoading ? (
        <div className="w-full bg-white">
          <div className="flex bg-[#F5F5F5] items-center gap-[10px] p-6  overflow-x-scroll">
            {Array.from(Array(20)).map((_, index) => (
              <div
                key={index}
                className="animate-pulse min-w-32 bg-gray-200 h-8 rounded-[4px]"
              ></div>
            ))}
          </div>
          <div className="bg-white px-9 py-11">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
            >
              {Array.from(Array(20)).map((_, index) => (
                <li key={index} className="flex flex-col">
                  <div className="animate-pulse w-full h-[260px] bg-gray-200"></div>
                  <div className="w-full h-6 animate-pulse flex my-3 bg-gray-200" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          {imageData ? (
            <div className="w-full bg-white">
              <div className="flex bg-[#F5F5F5] items-center gap-[10px] p-6  overflow-x-scroll">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="min-w-max text-xs capitalize border-[1.057px] py-2 px-10 sm:px-4 lg:px-6 border-[##D1D1D1] rounded-[4px] text-[#767676]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="bg-white px-9 py-11">
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
                >
                  {imageData.map((image) => (
                    <li key={image.id} className="flex flex-col">
                      <div
                        className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                        onClick={() => {
                          setSelectedImage(() => ({ ...image }));
                          setShowModal(true);
                        }}
                      >
                        <NextImage
                          width={image.imageWidth}
                          height={image.imageHeight}
                          src={image.webformatURL}
                          alt="image"
                          className="w-full h-full pointer-events-none object-cover group-hover:opacity-75"
                        />
                        <button
                          type="button"
                          className="absolute inset-0 focus:outline-none"
                        >
                          <span className="sr-only">
                            View details for {image.id}
                          </span>
                        </button>
                      </div>
                      <div className="flex my-3 gap-2">
                        {image.tags
                          .split(", ")
                          .slice(0, 3)
                          .map((tag, index) => (
                            <span
                              key={index}
                              className="truncate capitalize text-xs rounded-[1.776px] p-2 bg-[#F5F5F5] text-[#767676]"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className="text-center text-white">
              Image data not found for query: {q}
            </p>
          )}
        </>
      )}
      <ImagePreviewModal
        isOpen={showModal}
        image={selectedImage}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
