export default function Example() {
  return (
    <div
      className="m-4 sm:mx-6 lg:mx-8 px-2 sm:px-6 lg:px-8 rounded-lg bg-[rgba(217, 217, 217, 0.12)] backdrop-blur-[25.034873962402344px]"
      style={{
        boxShadow:
          "-3.943px 3.943px 3.943px 0px rgba(255, 255, 255, 0.43) inset, 3.943px -3.943px 3.943px 0px rgba(182, 182, 182, 0.43) inset",
      }}
    >
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex sm:items-stretch sm:justify-start">
          <a
            href="/"
            className={
              "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            }
          >
            Homepage
          </a>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="flex space-x-4">
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Login
            </button>
            <button className="border-2 rounded-lg text-white px-3 py-2 text-sm font-medium">
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
