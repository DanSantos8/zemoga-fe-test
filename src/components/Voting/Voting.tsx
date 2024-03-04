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
  const iconSize = isGrid ? 16 : 24
  const className = isGrid ? "" : "w-[45px] h-[45px]"
  return (
    <div className="z-10 flex flex-col items-end gap-3">
      <p className="text-xs font-bold text-white">
        {formatDate(lastUpdated)} in{" "}
        <span className="capitalize">{category}</span>
      </p>
      <div className="flex items-center gap-3">
        <Button variant="vote-up" className={className}>
          <Icon name="thumbsUp" size={iconSize} />
        </Button>
        <Button variant="vote-down" className={className}>
          <Icon name="thumbsDown" size={iconSize} />
        </Button>
        <Button
          label="Vote now"
          className={isGrid ? "" : "h-[45px] min-w-[135px]"}
        />
      </div>
    </div>
  )
}

export default Voting
