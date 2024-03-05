import { Person } from "@/models/people.models"
import GaugeBar from "../GaugeBar/GaugeBar"
import Voting from "../Voting/Voting"
import Icon, { icons } from "../Icon/Icon"
import { cn } from "@/lib/utils"

const PersonCard: React.FC<Person> = ({
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
          "absolute left-[-35px] top-0 flex h-[30px] w-[30px] items-center justify-center",
          bgColor
        )}
        data-testid={`icon-${iconName}`}
      >
        <Icon name={iconName} className="h-[15px] w-[15px]" />
      </div>
    )
  }

  return (
    <div
      className="relative flex h-[300px] w-full min-w-[300px] flex-col justify-end gap-5 bg-black bg-cover bg-center md:h-[348px] md:max-w-full lg:gap-2"
      style={{ backgroundImage: `url(/assets/img/${picture})` }}
      data-testid="PersonCard"
      aria-label="person-card"
    >
      <div className="flex w-full flex-col gap-4 px-[36px] md:gap-3 lg:gap-1">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

        <div className="relative z-10 flex flex-col gap-2 md:gap-0 lg:gap-2">
          {isPositive && renderIcon("thumbsUp", "bg-green-positive")}
          {!isPositive && renderIcon("thumbsDown", "bg-yellow-negative")}
          <p
            className="line-clamp-2 max-h-[6.5rem] overflow-ellipsis text-4xl font-normal text-white md:max-h-[5rem] md:text-4xl lg:text-3xl"
            aria-label="person name"
          >
            {name}
          </p>
          <p className="line-clamp-2 overflow-ellipsis text-xl text-white md:max-h-14 md:text-lg lg:max-h-12 lg:text-xs">
            {description}
          </p>
        </div>
        <Voting
          variant="grid"
          category={category}
          lastUpdated={lastUpdated}
          id={id}
        />
      </div>
      <GaugeBar votes={votes} variant="grid" />
    </div>
  )
}

export default PersonCard
