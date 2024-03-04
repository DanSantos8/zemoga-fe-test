export type Vote = {
  positive: number
  negative: number
}

export type Category = "entertainment" | "business" | "politics" | "environment"

export type Person = {
  name: string
  description: string
  category: Category
  picture: string
  lastUpdated: string
  votes: Vote
}

export type PeopleModelRequest = Person[]
