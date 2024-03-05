import React from "react"
import GaugeBar from "../GaugeBar/GaugeBar"
import Voting from "../Voting/Voting"
import { Person } from "@/models/people.models"

const PeopleCardList: React.FC<Person> = ({
  category,
  description,
  lastUpdated,
  name,
  picture,
  votes,
}) => {
  return (
    <div
      className="relative flex min-h-[170px] w-full flex-col justify-between gap-3 bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url(/assets/img/${picture})`,
      }}
    >
      <div className="flex w-full flex-col gap-3 px-3 pt-2">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 6%, rgba(136, 136, 136, 1) 22%, rgba(102, 102, 102, 1) 30%, rgba(51, 51, 51, 0.6) 100%)",
          }}
        />

        <div className="flex w-[80%] justify-between gap-9 self-end">
          <div className="z-10 flex flex-col md:gap-6 lg:gap-2">
            <p className="line-clamp-2 max-h-[74px] overflow-ellipsis text-[2rem] font-normal text-white">
              {name}
            </p>
            <p className="line-clamp-2 max-h-12 overflow-ellipsis text-base text-white">
              {description}
            </p>
          </div>
          <Voting
            variant="list"
            category={category}
            lastUpdated={lastUpdated}
          />
        </div>
      </div>
      <GaugeBar votes={votes} />
    </div>
  )
}

export default PeopleCardList
