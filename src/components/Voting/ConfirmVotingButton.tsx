import { postVote } from "@/server/actions/vote"
import Button from "../Button/Button"

const ConfirmVotingButton = (props: {
  voteIntention: "positive" | "negative" | null
  id: number
  isVoted: boolean
  handleIsVoted: () => void
}) => {
  const { voteIntention, id, isVoted, handleIsVoted } = props

  if (isVoted) {
    return (
      <Button
        label="Vote Again"
        className="h-full min-w-[107px] text-xl sm:text-base lg:text-xs"
        onClick={handleIsVoted}
        aria-label="vote-again"
      />
    )
  }

  return (
    <Button
      label="Vote Now"
      className="h-full min-w-[107px] text-xl sm:text-base lg:text-xs"
      onClick={() => {
        postVote({ id, vote: voteIntention as string })
        handleIsVoted()
      }}
      disabled={!voteIntention}
      aria-label="vote-now"
    />
  )
}

export default ConfirmVotingButton
