import React from "react"
import GaugeBar from "../GaugeBar/GaugeBar"
import Voting from "../Voting/Voting"
import { Person } from "@/models/people.models"
import Icon, { icons } from "../Icon/Icon"
import { cn } from "@/lib/utils"

const PersonCardList: React.FC<Person> = ({
  id,
  category,
  description,
  lastUpdated,
  name,
  picture,
  votes,
}) => {
  const isPositive = votes.positive > votes.negative
  const isEqual = votes.positive === votes.negative

  const renderIcon = (iconName: keyof typeof icons, bgColor: string) => {
    if (isEqual) {
      return null
    }

    return (
      <div
        className={cn(
          "absolute left-0 top-0 flex h-[30px] w-[30px] lg:h-[45px] lg:w-[45px] items-center justify-center",
          bgColor
        )}
      >
        <Icon
          name={iconName}
          className="h-[15px] w-[15px] lg:h-[24px] lg:w-[24px]"
        />
      </div>
    )
  }

  return (
    <div
      className="relative flex min-h-[170px] w-full flex-col justify-between gap-3 bg-no-repeat"
      style={{
        backgroundImage: `url(/assets/img/${picture})`,
        backgroundSize: "19rem auto",
        backgroundPosition: "-6% 40%",
      }}
    >
      {isPositive && renderIcon("thumbsUp", "bg-green-positive")}
      {!isPositive && renderIcon("thumbsDown", "bg-yellow-negative")}
      <div className="flex w-full flex-col gap-3 px-3 pt-2">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 6%, rgba(136, 136, 136, 1) 26%, rgba(102, 102, 102, 1) 40%, rgba(51, 51, 51, 0.6) 100%)",
          }}
        />
        <div className="flex w-[75%] justify-between gap-9 self-end">
          <div className="z-10 flex w-2/3 flex-col md:gap-6 lg:gap-2">
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
            id={id}
          />
        </div>
      </div>
      <GaugeBar votes={votes} variant="list" />
    </div>
  )
}

export default PersonCardList
