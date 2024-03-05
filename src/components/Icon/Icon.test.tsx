import React from "react"
import { render, screen } from "@testing-library/react"
import Icon, { icons } from "./Icon"
import { ThumbsDownIcon, ThumbsUpIcon } from "./Icons"

jest.mock("./Icons", () => ({
  ThumbsUpIcon: () => <div>Thumbs Up</div>,
  ThumbsDownIcon: () => <div>Thumbs Down</div>,
}))

describe("Icon Component", () => {
  test("renders ThumbsUpIcon when name is thumbsUp", () => {
    render(<Icon name="thumbsUp" />)
    const icon = screen.getByTestId("thumbsUp")
    expect(icon).toContainHTML("<div>Thumbs Up</div>")
  })

  test("renders ThumbsDownIcon when name is thumbsDown", () => {
    render(<Icon name="thumbsDown" />)
    const icon = screen.getByTestId("thumbsDown")
    expect(icon).toContainHTML("<div>Thumbs Down</div>")
  })

  test("does not render an icon for invalid name", () => {
    const { container } = render(<Icon name={"invalidName" as any} />)
    expect(container).toBeEmptyDOMElement()
  })
})
