import { useState, useEffect } from "react"

function debounce(
  fn: (...args: any[]) => void,
  ms: number
): (...args: any[]) => void {
  let timer: ReturnType<typeof setTimeout> | null = null
  return (...args: any[]) => {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, ms)
  }
}

export default function useWindowSizeWithDebounce(debounceTime = 500) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, debounceTime)

    window.addEventListener("resize", debouncedHandleResize)
    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [debounceTime])

  return dimensions
}
