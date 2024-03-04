import { cn } from "@/lib/utils"
import Icon from "../Icon/Icon"

type GaugeBarProps = {
  variant: "grid" | "list"
}

const GaugeBar = ({ variant }: GaugeBarProps) => {
  const isList = variant === "list"

  const iconSize = isList ? 22.5 : 16
  return (
    <div
      className={cn("z-20 flex h-9 w-full", {
        "lg:h-14": isList,
      })}
    >
      <div className="relative flex h-full w-1/2 items-center px-3">
        <div className="absolute left-0 top-0 h-full w-full bg-green-positive opacity-60" />

        <div className="z-20 flex items-center gap-2">
          <Icon name="thumbsUp" size={iconSize} />
          <span
            className={cn("text-[18px] text-white", {
              "lg:text-[27px]": isList,
            })}
          >
            50%
          </span>
        </div>
      </div>
      <div className="relative flex h-full w-1/2 items-center justify-end px-3">
        <div className="absolute right-0 top-0 h-full w-full bg-yellow-negative opacity-60" />
        <div className="z-20 flex items-center gap-2">
          <span
            className={cn("text-[18px] text-white", {
              "lg:text-[27px]": isList,
            })}
          >
            50%
          </span>
          <Icon name="thumbsDown" size={iconSize} />
        </div>
      </div>
    </div>
  )
}

export default GaugeBar
