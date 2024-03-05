"use client"
import PersonCard from "../PersonCard/PersonCard"
import { cn } from "@/lib/utils"
import ToggleView from "../ToggleView/ToggleView"
import useLocalStorage from "@/hooks/useLocalStorage"
import { PeopleModelRequest } from "@/models/people.models"
import useWindowSizeWithDebounce from "@/hooks/useWindowSize"
import PersonCardList from "../PersonCardList/PersonCardList"
import { useMemo } from "react"

const PeopleList = ({ data }: { data: PeopleModelRequest }) => {
  const [value, setValue] = useLocalStorage("listViewType", "grid")
  const { width } = useWindowSizeWithDebounce()

  const isMobile = width < 768
  const isList = value === "list"

  const PersonCardComponent = useMemo(
    () => (isList ? PersonCardList : PersonCard),
    [isList]
  )

  const setViewType = (view: string) => {
    setValue(view)
  }

  const memoizedPeopleList = useMemo(() => {
    const Component = isMobile ? PersonCard : PersonCardComponent
    return data.map((person, key) => {
      return <Component key={key} {...person} />
    })
  }, [isMobile, data, PersonCardComponent])

  return (
    <>
      <div className="flex w-full items-end justify-between">
        <h1 className="text-[2.5rem] font-light" aria-label="Previous Rulings">
          Previous Rulings
        </h1>
        <ToggleView setViewType={setViewType} value={value} />
      </div>
      {!isMobile && (
        <div
          className={cn("", {
            "grid grid-cols-2 gap-7 lg:grid-cols-3": !isList,
            "flex flex-col gap-4": isList,
          })}
          aria-label="peope-list"
        >
          {memoizedPeopleList}
        </div>
      )}

      {isMobile && (
        <div
          className="flex w-full min-w-full flex-nowrap gap-3 overflow-x-auto"
          aria-label="peope-list"
        >
          {memoizedPeopleList}
        </div>
      )}
    </>
  )
}

export default PeopleList
