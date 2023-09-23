import { useState, useEffect } from 'react'

// checking responsiveness
export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = Boolean(userAgent.match(/Mobi|Android|BlackBerry|iPhone/i))
    setMobile(mobile)
  }, [])

  return { isMobile }
}

// updates local data
function useLocalStorage<T>(key: string): [T, React.Dispatch<React.SetStateAction<T>>] {

  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState<T>(storedValue ? JSON.parse(storedValue) : "");

  useEffect(() => {
    console.log(value, '099')
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export { useLocalStorage };