import PeopleList from "@/components/PeopleList/PeopleList"
import { PeopleModelRequest } from "@/models/people.models"

export default async function Home() {
  const people: PeopleModelRequest = await (
    await fetch("http://localhost:5000/people")
  ).json()

  return (
    <div className="mx-auto flex max-w-[1100px] flex-col gap-9 py-8">
      <PeopleList data={people} />
    </div>
  )
}
