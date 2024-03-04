export const formatDate = (date: string) => {
  const now = new Date()
  const pastDate = new Date(date)
  const diffTime = Math.abs(now.getTime() - pastDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays > 30) {
    const diffMonths = Math.floor(diffDays / 30)
    return diffMonths + " month" + (diffMonths > 1 ? "s" : "")
  } else {
    return diffDays + " day" + (diffDays > 1 ? "s" : "")
  }
}
