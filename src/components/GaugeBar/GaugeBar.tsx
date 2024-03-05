import { cn } from "@/lib/utils"
import Icon from "../Icon/Icon"
import { Vote } from "@/models/people.models"

type GaugeBarProps = {
  votes: Vote
  variant: "grid" | "list"
}

const GaugeBar = ({ votes, variant }: GaugeBarProps) => {
  const totalVotes = votes.negative + votes.positive

  const positiveVotes = Math.round((votes.positive / totalVotes) * 100)
  const negativeVotes = Math.round((votes.negative / totalVotes) * 100)

  const classes = {
    grid: "h-[36px]",
    list: "md:h-[36px] lg:h-[54px]",
  }

  return (
    <div className={`z-20 flex w-full ${classes[variant]}`}>
      {!!positiveVotes && (
        <div
          className="relative flex h-full items-center px-3"
          style={{ width: `${positiveVotes}%` }}
        >
          <div className="absolute left-0 top-0 h-full w-full bg-green-positive opacity-60" />

          <div className="z-20 flex items-center gap-2">
            <Icon
              name="thumbsUp"
              className={cn("h-[15px] w-[15px]", {
                "lg:h-5 lg:w-5": variant === "list",
              })}
            />
            <span
              className={cn("text-2xl text-white", {
                "text-[18px]": variant === "grid",
              })}
            >
              {positiveVotes}%
            </span>
          </div>
        </div>
      )}
      {!!negativeVotes && (
        <div
          className="relative flex h-full items-center justify-end px-3"
          style={{ width: `${negativeVotes}%` }}
        >
          <div className="absolute right-0 top-0 h-full w-full bg-yellow-negative opacity-60" />
          <div className="z-20 flex items-center gap-2">
            <span
              className={cn("text-2xl text-white", {
                "text-[18px]": variant === "grid",
              })}
            >
              {negativeVotes}%
            </span>
            <Icon
              name="thumbsDown"
              className={cn("h-[15px] w-[15px]", {
                "lg:h-5 lg:w-5": variant === "list",
              })}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default GaugeBar
