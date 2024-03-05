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
    <div className="relative z-30 flex w-[9.6rem] flex-col bg-white">
      <button
        className="flex h-9 items-center justify-center border-2 border-black text-xs"
        onClick={handleVisibility}
      >
        {views[value as keyof typeof views]}
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-9 flex w-full flex-col divide-y-2 divide-black border-2 border-t-0 border-black bg-white">
          <li className="flex h-9 items-center justify-center text-xs">
            <button onClick={() => handleViewType("list")} className="w-full">
              List
            </button>
          </li>
          <li className="flex h-9 items-center justify-center text-xs">
            <button onClick={() => handleViewType("grid")} className="w-full">
              Grid
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default ToggleView
