import { cn } from "@/lib/utils"
import Icon from "../Icon/Icon"
import { Vote } from "@/models/people.models"

type GaugeBarProps = {
  votes: Vote
}

const GaugeBar = ({ votes }: GaugeBarProps) => {
  const totalVotes = votes.negative + votes.positive

  const positiveVotes = Math.round((votes.positive / totalVotes) * 100)
  const negativeVotes = Math.round((votes.negative / totalVotes) * 100)

  return (
    <div className={cn("z-20 flex h-[36px] lg:h-12 w-full")}>
      <div
        className={cn("relative flex h-full items-center px-3")}
        style={{ width: `${positiveVotes}%` }}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-green-positive opacity-60" />

        <div className="z-20 flex items-center gap-2">
          <Icon name="thumbsUp" className="h-4 w-4 lg:h-5 lg:w-5" />
          <span className={cn("text-2xl md:text-base text-white")}>
            {positiveVotes}%
          </span>
        </div>
      </div>
      <div
        className="relative flex h-full items-center justify-end px-3"
        style={{ width: `${negativeVotes}%` }}
      >
        <div className="absolute right-0 top-0 h-full w-full bg-yellow-negative opacity-60" />
        <div className="z-20 flex items-center gap-2">
          <span className={cn(" text-2xl md:text-base text-white")}>
            {negativeVotes}%
          </span>
          <Icon name="thumbsDown" className="h-4 w-4 lg:h-5 lg:w-5" />
        </div>
      </div>
    </div>
  )
}

export default GaugeBar
