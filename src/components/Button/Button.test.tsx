import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from "./Button"

describe("Button", () => {
  it("renders with the primary variant by default", () => {
    render(<Button>Primary Button</Button>)
    const button = screen.getByRole("button", { name: /primary button/i })
    expect(button).toHaveClass("border-white border-[1px]")
  })

  it("renders with the vote-up variant", () => {
    render(<Button variant="vote-up">Vote Up</Button>)
    const button = screen.getByRole("button", { name: /vote up/i })
    expect(button).toHaveClass("bg-green-positive")
  })

  it("renders with the vote-down variant", () => {
    render(<Button variant="vote-down">Vote Down</Button>)
    const button = screen.getByRole("button", { name: /vote down/i })
    expect(button).toHaveClass("bg-yellow-negative")
  })

  it("renders disabled overlay when disabled", () => {
    const { container } = render(<Button disabled>Disabled Button</Button>)
    const overlay = container.querySelector('div[aria-disabled="true"]')
    expect(overlay).toBeInTheDocument()
  })

  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    const button = screen.getByRole("button", { name: /clickable/i })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("displays children correctly", () => {
    const buttonText = "Child Button"
    render(<Button>{buttonText}</Button>)
    expect(screen.getByText(buttonText)).toBeInTheDocument()
  })

  it("displays label correctly", () => {
    const buttonLabel = "Label Button"
    render(<Button label={buttonLabel} />)
    expect(screen.getByText(buttonLabel)).toBeInTheDocument()
  })
})
