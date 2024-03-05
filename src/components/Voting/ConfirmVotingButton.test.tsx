import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ConfirmVotingButton from "./ConfirmVotingButton"
import { postVote } from "@/server/actions/vote"

jest.mock("../../server/actions/vote", () => ({
  postVote: jest.fn(),
}))

describe("ConfirmVotingButton", () => {
  const props = {
    voteIntention: "positive" as any,
    id: 1,
    isVoted: true,
    handleIsVoted: () => {},
  }

  it('renders "Vote Now" button when not voted', () => {
    render(<ConfirmVotingButton {...props} isVoted={false} />)
    expect(screen.getByText("Vote Now")).toBeInTheDocument()
    expect(screen.getByText("Vote Now")).not.toBeDisabled()
  })

  it('renders "Vote Again" button when voted', () => {
    render(<ConfirmVotingButton {...props} />)
    expect(screen.getByText("Vote Again")).toBeInTheDocument()
  })

  it('disables "Vote Now" button when voteIntention is not set', () => {
    render(
      <ConfirmVotingButton {...props} isVoted={false} voteIntention={null} />
    )
    expect(screen.getByTestId("button-primary")).toBeDisabled()
  })

  it('calls postVote and handleIsVoted on "Vote Now" click', () => {
    const handleIsVotedMock = jest.fn()
    render(
      <ConfirmVotingButton
        isVoted={false}
        voteIntention="positive"
        id={1}
        handleIsVoted={handleIsVotedMock}
      />
    )

    fireEvent.click(screen.getByText("Vote Now"))
    expect(postVote).toHaveBeenCalledWith({ id: 1, vote: "positive" })
    expect(handleIsVotedMock).toHaveBeenCalled()
  })
})
