import { useCallback, useState } from "react"

export const useVoting = () => {
  const [isVoted, setIsVoted] = useState(false)
  const [voteIntention, setVoteIntention] = useState<
    "positive" | "negative" | null
  >(null)

  const handleVoteIntention = useCallback(
    (value: typeof voteIntention) => () => setVoteIntention(value),
    []
  )

  const handleIsVoted = useCallback(() => {
    setIsVoted((prev) => !prev)
    setVoteIntention(null)
  }, [])

  return {
    isVoted,
    setIsVoted,
    voteIntention,
    setVoteIntention,
    handleIsVoted,
    handleVoteIntention,
  }
}
