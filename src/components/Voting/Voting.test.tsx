import React, { Dispatch, SetStateAction } from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Voting from "./Voting"
import { useVoting } from "@/hooks/useVoting"

interface UseVotingReturn {
  isVoted: boolean
  setIsVoted: Dispatch<SetStateAction<boolean>>
  voteIntention: "positive" | "negative" | null
  setVoteIntention: Dispatch<SetStateAction<"positive" | "negative" | null>>
  handleIsVoted: () => void
  handleVoteIntention: (value: "positive" | "negative" | null) => () => void
}

const MockButton = ({ children, onClick, ...props }: any) => (
  <button onClick={onClick} {...props}>
    {children}
  </button>
)
MockButton.displayName = "MockButton"

const MockIcon = () => <span>Icon</span>
MockIcon.displayName = "MockIcon"

const MockConfirmVotingButton = () => <button>Confirm Vote</button>
MockConfirmVotingButton.displayName = "MockConfirmVotingButton"

jest.mock("../../hooks/useVoting", () => ({
  useVoting: jest.fn<UseVotingReturn, []>(() => ({
    isVoted: false,
    setIsVoted: jest.fn(),
    voteIntention: null,
    setVoteIntention: jest.fn(),
    handleIsVoted: jest.fn(),
    handleVoteIntention: jest
      .fn()
      .mockImplementation((value: "positive" | "negative" | null) => () => {}),
  })),
}))

describe("Voting Component", () => {
  beforeEach(() => {
    jest.mock("../Button/Button", () => MockButton)
    jest.mock("../Icon/Icon", () => MockIcon)
    jest.mock("./ConfirmVotingButton", () => MockConfirmVotingButton)
    ;(useVoting as jest.Mock).mockImplementation(() => ({
      handleIsVoted: jest.fn(),
      isVoted: false,
      handleVoteIntention: jest.fn(),
      voteIntention: null,
    }))
  })

  it("renders with time posted message", () => {
    const lastUpdated = "2023-01-01"
    const category = "politics"
    render(
      <Voting
        id={1}
        variant="grid"
        category={category}
        lastUpdated={lastUpdated}
      />
    )
    expect(screen.getByText(/14 months in/i)).toBeInTheDocument()
  })

  it("renders category message", () => {
    const lastUpdated = "2023-01-01"
    const category = "politics"
    render(
      <Voting
        id={1}
        variant="grid"
        category={category}
        lastUpdated={lastUpdated}
      />
    )
    expect(screen.getByText(/politics/i)).toBeInTheDocument()
  })

  it("thumbsUp vote button is clicked", () => {
    const handleVoteIntentionMock = jest.fn()
    ;(useVoting as jest.Mock).mockImplementation(() => ({
      handleIsVoted: jest.fn(),
      isVoted: false,
      handleVoteIntention: () => handleVoteIntentionMock,
      voteIntention: "positive",
    }))

    render(
      <Voting
        id={1}
        variant="grid"
        category="politics"
        lastUpdated="2023-01-01"
      />
    )
    const voteUpButton = screen.getByTestId("thumbsUp")
    fireEvent.click(voteUpButton)
    expect(handleVoteIntentionMock).toHaveBeenCalled()
  })

  it("thumbsDown vote button is clicked", () => {
    const handleVoteIntentionMock = jest.fn()
    ;(useVoting as jest.Mock).mockImplementation(() => ({
      handleIsVoted: jest.fn(),
      isVoted: false,
      handleVoteIntention: () => handleVoteIntentionMock,
      voteIntention: "positive",
    }))

    render(
      <Voting
        id={1}
        variant="grid"
        category="politics"
        lastUpdated="2023-01-01"
      />
    )
    const voteDownButton = screen.getByTestId("thumbsDown")
    fireEvent.click(voteDownButton)
    expect(handleVoteIntentionMock).toHaveBeenCalled()
  })

  it("displays thank you message after voting", () => {
    ;(useVoting as jest.Mock).mockImplementation(() => ({
      handleIsVoted: jest.fn(),
      isVoted: true,
      handleVoteIntention: jest.fn(),
      voteIntention: "positive",
    }))

    render(
      <Voting
        id={1}
        variant="grid"
        category="politics"
        lastUpdated="2023-01-01"
      />
    )
    expect(screen.getByText(/thank you for your vote!/i)).toBeInTheDocument()
  })
})
