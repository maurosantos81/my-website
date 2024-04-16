export default function useScrollTo() {
  function scrollTo(componentId) {
    document
      ?.getElementById(componentId)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return { scrollTo }
}
