import React from "react"
import { render, screen, within } from "@testing-library/react"
import "@testing-library/jest-dom"
import PersonCard from "./PersonCard"

const MockGaugeBar = (props: any) => (
  <div role="presentation" {...props}>
    GaugeBar Component
  </div>
)
MockGaugeBar.displayName = "MockGaugeBar"

const MockVoting = (props: any) => (
  <div data-testid="voting" {...props}>
    Voting Component
  </div>
)
MockVoting.displayName = "MockVoting"

const MockIcon = ({ name }: any) => (
  <div data-testid={`${name}`}>Icon: {name}</div>
)

MockIcon.displayName = "MockedIcon"

describe("PersonCard", () => {
  beforeEach(() => {
    jest.mock("../Voting/Voting", () => MockVoting)
    jest.mock("../Icon/Icon", () => MockIcon)
    jest.mock("../GaugeBar/GaugeBar", () => MockGaugeBar)
  })

  const mockPerson = {
    id: 1,
    name: "Kanye West",
    description:
      "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    category: "entertainment" as any,
    picture: "kanye.png",
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: {
      positive: 38,
      negative: 37,
    },
  }

  it("renders with basic props", () => {
    render(<PersonCard {...mockPerson} />)
    expect(screen.getByText(mockPerson.name)).toBeInTheDocument()
    expect(screen.getByText(mockPerson.description)).toBeInTheDocument()
    expect(screen.getByRole("presentation")).toBeInTheDocument()
    expect(screen.getByTestId("voting")).toBeInTheDocument()
  })

  it("displays the correct icon based on votes", async () => {
    const { rerender, getByTestId } = render(<PersonCard {...mockPerson} />)

    let PersonCardComponent = getByTestId("PersonCard")
    let thumbsUpIcon =
      within(PersonCardComponent).queryByTestId("icon-thumbsUp")
    expect(thumbsUpIcon).toBeInTheDocument()

    rerender(
      <PersonCard {...mockPerson} votes={{ positive: 40, negative: 60 }} />
    )

    PersonCardComponent = getByTestId("PersonCard")
    let thumbsDownIcon =
      within(PersonCardComponent).queryByTestId("icon-thumbsDown")
    expect(thumbsDownIcon).toBeInTheDocument()

    rerender(
      <PersonCard {...mockPerson} votes={{ positive: 40, negative: 40 }} />
    )
    let icon = within(PersonCardComponent).queryByTestId("icon-thumbsDown")
    expect(icon).not.toBeInTheDocument()
  })

  it("applies the correct background image", () => {
    render(<PersonCard {...mockPerson} />)
    const cardElement = screen.getByTestId("PersonCard")
    expect(cardElement).toHaveStyle(
      `backgroundImage: url(/assets/img/${mockPerson.picture})`
    )
  })
})
