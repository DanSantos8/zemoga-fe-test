import React, { useCallback } from "react"
import { Category } from "@/models/people.models"
import Button from "../Button/Button"
import Icon from "../Icon/Icon"
import { formatDate } from "@/utils/helpers"
import ConfirmVotingButton from "./ConfirmVotingButton"
import { useVoting } from "@/hooks/useVoting"
import { cn } from "@/lib/utils"

interface VotingProps {
  id: number
  variant: "list" | "grid"
  category: Category
  lastUpdated: string
}

const Voting: React.FC<VotingProps> = ({
  id,
  variant,
  category,
  lastUpdated,
}) => {
  const { handleIsVoted, isVoted, handleVoteIntention, voteIntention } =
    useVoting()

  const renderMessage = useCallback(() => {
    if (isVoted) {
      return <span className="min-w-[150px]">Thank you for your vote!</span>
    }

    return (
      <>
        {formatDate(lastUpdated)} in{" "}
        <span className="capitalize">{category}</span>
      </>
    )
  }, [category, isVoted, lastUpdated])

  return (
    <div className="z-10 flex flex-col items-end gap-4">
      <p className="text-base font-bold text-white lg:text-xs">
        {renderMessage()}
      </p>
      <div className="flex items-center gap-3">
        {!isVoted && (
          <>
            <Button
              variant="vote-up"
              className={cn("w-[30px] h-[30px]", {
                "lg:w-[45px] lg:h-[45px]": variant === "list",
                "border-[1px] border-white": voteIntention === "positive",
              })}
              onClick={handleVoteIntention("positive")}
            >
              <Icon
                name="thumbsUp"
                className={cn("h-[16px] w-[16px]", {
                  "lg:h-[24px] lg:w-[24px]": variant === "list",
                })}
              />
            </Button>
            <Button
              variant="vote-down"
              className={cn("w-[30px] h-[30px]", {
                "lg:w-[45px] lg:h-[45px]": variant === "list",
                "border-[1px] border-white": voteIntention === "negative",
              })}
              onClick={handleVoteIntention("negative")}
            >
              <Icon
                name="thumbsDown"
                className={cn("h-[16px] w-[16px]", {
                  "lg:h-[24px] lg:w-[24px]": variant === "list",
                })}
              />
            </Button>
          </>
        )}
        <ConfirmVotingButton
          id={id}
          voteIntention={voteIntention}
          handleIsVoted={handleIsVoted}
          isVoted={isVoted}
        />
      </div>
    </div>
  )
}

export default Voting
