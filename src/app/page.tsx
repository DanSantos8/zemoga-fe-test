import PeopleList from "@/components/PeopleList/PeopleList"
import { PeopleModelRequest } from "@/models/people.models"
import { getPeople } from "@/server/requests/fetchPeople"

export default async function Home() {
  const people: PeopleModelRequest = await getPeople()

  return (
    <div className="mx-auto flex max-w-[1100px] flex-col gap-9">
      <PeopleList data={people} />
    </div>
  )
}
