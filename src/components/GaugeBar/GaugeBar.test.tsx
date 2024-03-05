import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import GaugeBar from "./GaugeBar"
import Icon, { icons } from "../Icon/Icon"

const MockedIcon = ({ name }: { name: keyof typeof icons }) => (
  <Icon name={name} />
)
MockedIcon.displayName = "MockedIcon"

describe("GaugeBar", () => {
  beforeEach(() => {
    jest.mock("../Icon/Icon", () => MockedIcon)
  })
  const votes = { positive: 300, negative: 200 }

  it("renders correctly for grid variant", () => {
    render(<GaugeBar votes={votes} variant="grid" />)
    const gaugeBar = screen.getByRole("presentation")
    expect(gaugeBar).toHaveClass("h-[36px]")
    expect(screen.getByText("60%")).toBeInTheDocument()
    expect(screen.getByText("40%")).toBeInTheDocument()
  })

  it("renders correctly for list variant", () => {
    render(<GaugeBar votes={votes} variant="list" />)
    const gaugeBar = screen.getByRole("presentation")
    expect(gaugeBar).toHaveClass("md:h-[36px] lg:h-[54px]")
  })

  it("calculates and displays positive vote percentage correctly", () => {
    render(<GaugeBar votes={votes} variant="grid" />)
    expect(screen.getByText("60%")).toBeInTheDocument()
  })

  it("calculates and displays negative vote percentage correctly", () => {
    render(<GaugeBar votes={votes} variant="grid" />)
    expect(screen.getByText("40%")).toBeInTheDocument()
  })

  it("renders positive and negative sections with correct widths", () => {
    const { container } = render(<GaugeBar votes={votes} variant="grid" />)
    const positiveSection = container.querySelector('div[style="width: 60%;"]')
    const negativeSection = container.querySelector('div[style="width: 40%;"]')
    expect(positiveSection).toBeInTheDocument()
    expect(negativeSection).toBeInTheDocument()
  })

  it("displays the thumbs up icon for positive votes", () => {
    render(<GaugeBar votes={votes} variant="grid" />)
    const thumbsUpIcon = screen.getByTestId("thumbsUp")
    expect(thumbsUpIcon).toBeInTheDocument()
  })

  it("displays the thumbs down icon for negative votes", () => {
    render(<GaugeBar votes={votes} variant="grid" />)
    const thumbsDownIcon = screen.getByTestId("thumbsDown")
    expect(thumbsDownIcon).toBeInTheDocument()
  })
})
