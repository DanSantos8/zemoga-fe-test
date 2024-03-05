import { Category } from "@/models/people.models"
import Button from "../Button/Button"
import Icon from "../Icon/Icon"
import React from "react"
import { formatDate } from "@/utils/helpers"

type VotingProps = {
  variant: "list" | "grid"
  category: Category
  lastUpdated: string
}
const Voting: React.FC<VotingProps> = ({ variant, category, lastUpdated }) => {
  const isGrid = variant === "grid"
  const buttonClassName = isGrid
    ? "w-[30px] h-[30px]"
    : "lg:w-[45px] lg:h-[45px] md:w-[30px] h-[30px]"
  const iconClassName = isGrid
    ? "h-[16px] w-[16px]"
    : "lg:h-[24px] lg:w-[24px] md:h-[16px] w-[16px]"

  return (
    <div className="z-10 flex flex-col items-end gap-2">
      <p className="text-base font-bold text-white lg:text-xs">
        {formatDate(lastUpdated)} in{" "}
        <span className="capitalize">{category}</span>
      </p>
      <div className="flex items-center gap-3">
        <Button variant="vote-up" className={buttonClassName}>
          <Icon name="thumbsUp" className={iconClassName} />
        </Button>
        <Button variant="vote-down" className={buttonClassName}>
          <Icon name="thumbsDown" className={iconClassName} />
        </Button>
        <Button
          label="Vote Now"
          className={`h-full min-w-[107px] text-xl sm:text-base lg:text-base`}
        />
      </div>
    </div>
  )
}

export default Voting
