"use client"
import useLocalStorage from "@/hooks/useLocalStorage"
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
      className="relative flex w-[9.6rem] flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="flex h-9 items-center justify-center border-2 border-black"
        onClick={handleVisibility}
      >
        {views[value as keyof typeof views]}
      </button>
      {isOpen && (
        <ul className="flex flex-col divide-y-2 divide-black border-2 border-t-0 border-black">
          <li className="flex h-9 items-center justify-center">
            <button onClick={() => handleViewType("list")} className="w-full">
              List
            </button>
          </li>
          <li className="flex h-9 items-center justify-center">
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
