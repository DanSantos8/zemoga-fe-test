"use client"
import PeopleCard from "../PeopleCard/PeopleCard"
import PeopleCardList from "../PeopleCardList/PeopleCardList"
import { cn } from "@/lib/utils"
import ToggleView from "../ToggleView/ToggleView"
import useLocalStorage from "@/hooks/useLocalStorage"
import { PeopleModelRequest } from "@/models/people.models"

const PeopleList = ({ data }: { data: PeopleModelRequest }) => {
  const [value, setValue] = useLocalStorage("listViewType", "grid")
  const isList = value === "list"

  const PeopleCardComponent = isList ? PeopleCardList : PeopleCard

  const setViewType = (view: string) => {
    setValue(view)
  }

  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-5xl font-light">Previous Rulings</h1>
        <ToggleView setViewType={setViewType} value={value} />
      </div>
      <div className="hidden md:block">
        <div
          className={cn("", {
            "grid grid-cols-2 gap-7 lg:grid-cols-3": !isList,
            "flex flex-col gap-4": isList,
          })}
        >
          {data.map((person, key) => {
            return <PeopleCardComponent key={key} {...person} />
          })}
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex w-full min-w-full flex-nowrap gap-3 overflow-x-auto">
          {data.map((person, key) => {
            return <PeopleCard key={key} {...person} />
          })}
        </div>
      </div>
    </>
  )
}

export default PeopleList
