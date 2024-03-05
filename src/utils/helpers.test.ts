import { formatDate } from "./helpers"

describe("formatDate", () => {
  beforeAll(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date("2023-01-15"))
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it("returns the correct difference in days for dates within a month", () => {
    const date = new Date("2023-01-05").toISOString()
    expect(formatDate(date)).toBe("10 days")

    const yesterday = new Date("2023-01-14").toISOString()
    expect(formatDate(yesterday)).toBe("1 day")
  })

  it("returns the correct difference in months for dates more than a month", () => {
    const twoMonthsAgo = new Date("2022-11-15").toISOString()
    expect(formatDate(twoMonthsAgo)).toBe("2 months")

    const oneMonthAgo = new Date("2022-12-15").toISOString()
    expect(formatDate(oneMonthAgo)).toBe("1 month")
  })
})
