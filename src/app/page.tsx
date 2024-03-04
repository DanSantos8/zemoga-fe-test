import PeopleList from "@/components/PeopleList/PeopleList"

export default function Home() {
  return (
    <div className="flex flex-col gap-9 py-8 max-w-[1100px] mx-auto">
      <PeopleList />
    </div>
  )
}
