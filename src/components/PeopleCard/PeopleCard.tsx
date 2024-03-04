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
      className="relative flex h-[300px] w-full min-w-[300px] flex-col justify-end gap-3 bg-black bg-cover bg-center md:h-[348px] md:max-w-full"
      style={{ backgroundImage: `url(/assets/img/${picture})` }}
    >
      <div className="flex w-full flex-col gap-3 px-9">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

        <div className="z-10 flex flex-col gap-2">
          <p className="line-clamp-2 max-h-[74px] overflow-ellipsis text-3xl font-normal text-white md:text-4xl">
            {name}
          </p>
          <p className="line-clamp-2 max-h-12 overflow-ellipsis text-base/[18px] text-white">
            {description}
          </p>
        </div>
        <Voting variant="grid" category={category} lastUpdated={lastUpdated} />
      </div>
      <GaugeBar variant="grid" votes={votes} />
    </div>
  )
}

export default PeopleCard
