export function getCurrentTime() {
  const d = new Date()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()
  const day = d.getDate()
  const month = d.getMonth() + 1
  const year = d.getFullYear()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  console.log('DEBUG: Clock script loaded')
  console.log('Current time:', `${hours}:${minutes}:${seconds} ${ampm}`)
  console.log('Current date:', `${day}/${month}/${year}`)
}
