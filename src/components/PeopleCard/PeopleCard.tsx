import { Person } from "@/models/people.models"
import GaugeBar from "../GaugeBar/GaugeBar"
import Voting from "../Voting/Voting"

const PeopleCard: React.FC<Person> = ({
  category,
  description,
  lastUpdated,
  name,
  picture,
  votes,
}) => {
  return (
    <div
      className="relative flex h-[300px] w-full min-w-[300px] flex-col justify-end gap-5 bg-black bg-cover bg-center md:h-[348px] md:max-w-full lg:gap-2"
      style={{ backgroundImage: `url(/assets/img/${picture})` }}
    >
      <div className="flex w-full flex-col gap-4 px-[36px] md:gap-3 lg:gap-1">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

        <div className="z-10 flex flex-col gap-2 md:gap-0 lg:gap-2">
          <p className="line-clamp-2 max-h-[6.5rem] overflow-ellipsis text-4xl font-normal text-white md:max-h-[4.5rem] md:text-4xl lg:text-3xl">
            {name}
          </p>
          <p className="line-clamp-2 overflow-ellipsis text-xl text-white md:max-h-14 md:text-lg lg:max-h-12 lg:text-xs">
            {description}
          </p>
        </div>
        <Voting variant="grid" category={category} lastUpdated={lastUpdated} />
      </div>
      <GaugeBar votes={votes} />
    </div>
  )
}

export default PeopleCard
