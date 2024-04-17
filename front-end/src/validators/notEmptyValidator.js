export default function validateNotEmpty(text) {
  if (text.trim().length === 0) {
    return 'Text must not be empty'
  }

  return true
}
