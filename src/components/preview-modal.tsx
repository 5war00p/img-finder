import { Image } from "@/utils/getImages";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import NextImage from "next/image";
import { downloadImage } from "@/utils/downloadImage";

export default function ImagePreviewModal({
  isOpen,
  image,
  onClose,
}: {
  isOpen: boolean;
  image?: Image;
  onClose: () => void;
}) {
  const [selectedSizeUrl, setSelectedSizeUrl] = useState(
    image?.previewURL ?? ""
  );

  if (!image?.largeImageURL) return null;

  const sizes = [
    {
      name: "Preview",
      size: `${image.previewWidth}x${image.previewHeight}`,
      imageSrc: image.previewURL,
    },
    {
      name: "WebFormat",
      size: `${image.webformatWidth}x${image.webformatHeight}`,
      imageSrc: image.webformatURL,
    },
    {
      name: "Large",
      size: "1920x1280",
      imageSrc: image.largeImageURL,
    },
    {
      name: "Original",
      size: `${image.imageWidth}x${image.imageHeight}`,
    },
  ];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden rounded-lg bg-[#F5F5F5] p-0 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex p-6 pb-4 justify-between text-xl font-medium leading-6 text-[#3B4043]"
                >
                  Preview ID: {image.id}
                  <button onClick={onClose} className="focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <path
                        d="M11.8451 20.3409L20.2303 11.9557M20.2303 20.3409L11.8451 11.9557M11.5933 30.9631H20.4822C27.8896 30.9631 30.8525 28.0002 30.8525 20.5928V11.7039C30.8525 4.29646 27.8896 1.3335 20.4822 1.3335H11.5933C4.18586 1.3335 1.2229 4.29646 1.2229 11.7039V20.5928C1.2229 28.0002 4.18586 30.9631 11.5933 30.9631Z"
                        stroke="#3B4043"
                        strokeWidth="2.22138"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Dialog.Title>
                <div className="bg-white p-6">
                  <div className="grid grid-cols-4 space-x-10">
                    <div className="col-span-3">
                      <NextImage
                        width={image.imageWidth}
                        height={image.imageHeight}
                        src={image.largeImageURL}
                        alt="image"
                        className="w-full h-[550px] rounded-lg object-cover pointer-events-none group-hover:opacity-75"
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium text-xl">Download</h4>
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-300">
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {sizes.map((size, sizeIdx) => (
                                <tr
                                  key={sizeIdx}
                                  className={`relative flex items-start p-4 hover:bg-[#f4fff4] ${
                                    sizeIdx === sizes.length - 1
                                      ? "bg-slate-100 cursor-not-allowed"
                                      : ""
                                  }`}
                                >
                                  <td className="min-w-0 flex-1 text-sm leading-6">
                                    <label
                                      htmlFor={`side-${sizeIdx}`}
                                      className="select-none font-medium text-gray-900"
                                    >
                                      {size.name}
                                    </label>
                                  </td>
                                  <td className="min-w-0 flex-1 text-sm leading-6">
                                    <label
                                      htmlFor={`side-${sizeIdx}`}
                                      className="select-none font-bold text-gray-900"
                                    >
                                      {size.size}
                                    </label>
                                  </td>
                                  <td className="ml-3 flex h-6 items-center">
                                    <input
                                      id={`side-${sizeIdx}`}
                                      name="plan"
                                      type="radio"
                                      disabled={sizeIdx === sizes.length - 1}
                                      defaultChecked={sizeIdx === 0}
                                      className="h-4 w-4 border-gray-300 text-[#4BC34B] focus:ring-0"
                                      onChange={(e) => {
                                        if (e.target.checked && size.imageSrc)
                                          setSelectedSizeUrl(size.imageSrc);
                                      }}
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <button
                          className="w-full py-2 text-xs bg-[#4BC34B] rounded-[4px] text-white"
                          onClick={async () =>
                            await downloadImage(selectedSizeUrl)
                          }
                        >
                          Download for free!
                        </button>
                      </div>
                      <div>
                        <h4 className="font-medium text-xl">Information</h4>
                        <div className="grid grid-cols-2 my-4 gap-4 lg:grid-cols-3">
                          <div className="flex flex-col">
                            <span className="text-[#717579] text-xs font-semibold">
                              User
                            </span>
                            <span className="truncate text-[#3B4043] capitalize font-semibold">
                              {image.user}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[#717579] text-xs font-semibold">
                              UserID
                            </span>
                            <span className="text-[#3B4043] capitalize font-semibold">
                              {image.user_id}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[#717579] text-xs font-semibold">
                              Type
                            </span>
                            <span className="text-[#3B4043] capitalize font-semibold">
                              Photo
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[#717579] text-xs font-semibold">
                              Views
                            </span>
                            <span className="text-[#3B4043] capitalize font-semibold">
                              {image.views}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[#717579] text-xs font-semibold">
                              Downloads
                            </span>
                            <span className="text-[#3B4043] capitalize font-semibold">
                              {image.downloads}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[#717579] text-xs font-semibold">
                              Likes
                            </span>
                            <span className="text-[#3B4043] capitalize font-semibold">
                              {image.likes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <b className="text-sm">Tags:</b>
                    <div className="flex my-3 gap-2">
                      {image.tags.split(", ").map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs capitalize rounded-[1.776px] p-2 bg-[#F5F5F5] text-[#767676]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
