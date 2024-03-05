import { postVote } from "@/server/actions/vote"
import Button from "../Button/Button"

const ConfirmVotingButton = (props: any) => {
  const { voteIntention, id, isVoted, handleIsVoted } = props

  if (isVoted) {
    return (
      <Button
        label="Vote Again"
        className="h-full min-w-[107px] text-xl sm:text-base lg:text-xs"
        onClick={handleIsVoted}
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
    />
  )
}

export default ConfirmVotingButton
