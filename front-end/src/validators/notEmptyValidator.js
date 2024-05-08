export default function validateNotEmpty(text) {
  if (text.trim().length === 0) {
    return 'empty-error'
  }

  return true
}
