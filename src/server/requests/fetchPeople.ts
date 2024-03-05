import { Person } from "@/models/people.models"

export const getPeople = async (): Promise<Person[]> => {
  try {
    const response = await fetch("http://localhost:5000/people")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: Person[] = await response.json()
    return data
  } catch (e) {
    console.error("Failed to fetch people:", (e as Error).message)
    return []
  }
}
