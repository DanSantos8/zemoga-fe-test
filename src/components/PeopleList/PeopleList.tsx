import PeopleCard from "../PeopleCard/PeopleCard"
import PeopleCardList from "../PeopleCardList/PeopleCardList"
import { cn } from "@/lib/utils"

const PeopleList = () => {
  const isList = true

  const PeopleCardComponent = isList ? PeopleCardList : PeopleCard

  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-5xl font-light">Previous Rulings</h1>
      </div>
      <div className="hidden md:block">
        <div
          className={cn("", {
            "grid grid-cols-2 gap-7 lg:grid-cols-3": !isList,
            "flex flex-col gap-4": isList,
          })}
        >
          {Array(6)
            .fill("")
            .map((_, key) => {
              return <PeopleCardComponent key={key} />
            })}
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex w-full min-w-full flex-nowrap gap-3 overflow-x-auto">
          {Array(6)
            .fill("")
            .map((_, key) => {
              return <PeopleCard key={key} />
            })}
        </div>
      </div>
    </>
  )
}

export default PeopleList
