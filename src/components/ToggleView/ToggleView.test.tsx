import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ToggleView from "./ToggleView"

describe("ToggleView Component", () => {
  const setViewTypeMock = jest.fn()

  beforeEach(() => {
    setViewTypeMock.mockClear()
  })

  it("renders with initial view type and dropdown is not visible", () => {
    render(<ToggleView value="grid" setViewType={setViewTypeMock} />)
    expect(screen.getByText("Grid")).toBeInTheDocument()
    expect(screen.queryByText("List")).not.toBeInTheDocument()
  })

  it("toggles dropdown visibility on button click", () => {
    render(<ToggleView value="grid" setViewType={setViewTypeMock} />)
    fireEvent.click(screen.getByTestId("toggle-button"))
    expect(screen.getByText("List")).toBeInTheDocument()
  })

  it('calls setViewType with "grid" when Grid is clicked', () => {
    render(<ToggleView value="list" setViewType={setViewTypeMock} />)
    fireEvent.click(screen.getByText("List"))
    fireEvent.click(screen.getByText("Grid"))
    expect(setViewTypeMock).toHaveBeenCalledWith("grid")
  })

  it('calls setViewType with "list" when List is clicked and closes the dropdown', () => {
    render(<ToggleView value="grid" setViewType={setViewTypeMock} />)
    fireEvent.click(screen.getByText("Grid"))
    fireEvent.click(screen.getByText("List"))
    expect(setViewTypeMock).toHaveBeenCalledWith("list")
  })
})
