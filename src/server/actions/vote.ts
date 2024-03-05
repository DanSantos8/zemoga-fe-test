"use server"
import { revalidatePath } from "next/cache"

export async function postVote({ id, vote }: { id: number; vote: string }) {
  try {
    const response = await fetch(`http://localhost:5000/people/${id}`)
    const person = await response.json()

    if (vote === "positive") {
      person.votes.positive += 1
    } else if (vote === "negative") {
      person.votes.negative += 1
    } else {
      throw new Error('Invalid vote type. Must be "positive" or "negative".')
    }

    const patchResponse = await fetch(`http://localhost:5000/people/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ votes: person.votes }),
    })

    if (!patchResponse.ok) {
      throw new Error("Failed to update the vote count.")
    }

    revalidatePath("/")
  } catch (error) {
    console.error("Error posting vote:", error)
  }
}
