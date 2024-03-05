import { useState } from "react"

type ToggleView = {
  value: string
  setViewType: (value: string) => void
}

const ToggleView = ({ value, setViewType }: ToggleView) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleVisibility = () => setIsOpen((prev) => !prev)

  const views = {
    grid: "Grid",
    list: "List",
  }

  const handleViewType = (view: string) => {
    handleVisibility()
    setViewType(view)
  }

  return (
    <div
      className="relative z-30 hidden w-[9.6rem] flex-col bg-white md:flex"
      aria-expanded={isOpen}
      role="toggle-view"
    >
      <button
        className="flex h-9 items-center justify-center border-2 border-black text-xs"
        onClick={handleVisibility}
        data-testid="toggle-button"
        aria-label="open-list-view"
      >
        <span className="mx-auto w-full">
          {views[value as keyof typeof views]}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="7"
          fill="none"
          viewBox="0 0 11 7"
          className="ml-auto mr-3"
        >
          <path
            fill="#333"
            fillRule="evenodd"
            d="M5.25 7L0 0h10.5L5.25 7z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-9 flex w-full flex-col divide-y-2 divide-black border-2 border-t-0 border-black bg-white">
          <li
            className="flex h-9 items-center justify-center text-xs"
            aria-label="list-view"
          >
            <button onClick={() => handleViewType("list")} className="w-full">
              List
            </button>
          </li>
          <li className="flex h-9 items-center justify-center text-xs">
            <button
              onClick={() => handleViewType("grid")}
              className="w-full"
              aria-label="grid-view"
            >
              Grid
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default ToggleView
