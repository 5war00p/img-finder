"use client";
import dynamic from "next/dynamic";
import { Searchbar } from "./searchbar";
import { useState } from "react";

const ImagePreviewModal = dynamic(() => import("./preview-modal"));

const files = [
  {
    id: 1223,
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    tags: ["Weltraumbilder & Bilder", "Erde Bilder & Bilder", "Naturbilder"],
  },
  {
    id: 1223,
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    tags: ["Weltraumbilder & Bilder", "Erde Bilder & Bilder", "Naturbilder"],
  },
  {
    id: 1223,
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    tags: ["Weltraumbilder & Bilder", "Erde Bilder & Bilder", "Naturbilder"],
  },
  {
    id: 1223,
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    tags: ["Weltraumbilder & Bilder", "Erde Bilder & Bilder", "Naturbilder"],
  },
  {
    id: 1223,
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    tags: ["Weltraumbilder & Bilder", "Erde Bilder & Bilder", "Naturbilder"],
  },
];

const tags = [
  "Digital",
  "Computer",
  "Codierung",
  "Tech",
  "Netz",
  "Code",
  "Finanzeiren",
  "Marketing",
];

export function ResultsView() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="mx-auto my-[72px] w-3/5 text-center space-y-6">
        <Searchbar />
        <h1 className="text-white font-bold text-[42px] leading-[87px]">
          Result: Technology
        </h1>
      </div>
      <div className="w-full">
        <div className="flex bg-[#F5F5F5] items-center gap-[10px] p-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs capitalize border-[1.057px] py-2 px-10 sm:px-4 lg:px-6 border-[##D1D1D1] rounded-[4px] text-[#767676]"
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
            {files.map((file) => (
              <li key={file.source} className="flex flex-col">
                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={file.source}
                    alt="image"
                    className="w-full h-full pointer-events-none object-cover group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">View details for {file.id}</span>
                  </button>
                </div>
                <div className="flex my-3 gap-2">
                  {file.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="truncate text-xs rounded-[1.776px] p-2 bg-[#F5F5F5] text-[#767676]"
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
      <ImagePreviewModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
