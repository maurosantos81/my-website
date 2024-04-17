import { useState, useEffect } from 'react'

const useTypewriter = (text, speed = 40) => {
  const [writtenText, setWrittenText] = useState('')

  function type() {
    if (writtenText === text) return

    setWrittenText((current) => text.substring(0, current.length + 1))
  }

  useEffect(() => {
    const timer = setTimeout(type, speed)
    return () => clearTimeout(timer)
  }, [writtenText])

  return writtenText
}

export default useTypewriter
