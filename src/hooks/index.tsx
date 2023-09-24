"use client"
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

  const isClient = typeof window !== 'undefined';

  const storedValue = isClient ? localStorage.getItem(key): null;
  const [value, setValue] = useState<T>(isClient && storedValue? JSON.parse(storedValue) : "");

  useEffect(() => {
    if(isClient){
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [isClient, key, value]);

  return [value, setValue];
}

export { useLocalStorage };