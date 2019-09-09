import chrono from 'chrono-node'

export const checkTime = input => {
  // Time Reference. Transfor Server time to Taiwan time.
  let date = new Date()
  const utc = date.getTime() + date.getTimezoneOffset() * 60000
  date = new Date(utc + 3600000 * 8)

  // Get the utc time from message refers to Taiwan time
  const timeInfo = chrono.parse(input, date)[0]
  if (timeInfo === undefined) {
    return null
  }
  // new time in Taiwan epoch
  return new Date(timeInfo.start.date().getTime() + 3600000 * 8)
}
