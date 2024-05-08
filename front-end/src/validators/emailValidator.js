export default function validateEmail(email) {
  // Regular expression to match a standard email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (email && !emailRegex.test(email)) {
    return 'invalid-email'
  }

  return true
}
