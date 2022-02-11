import { useEffect } from 'react'

export function useOutside(ref: any, callback: (e: any) => void) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(event)
            }
        }

        function handleEscape(event: any) {
            if (event.key === 'Escape') {
                callback(event)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscape)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
        }
    }, [callback, ref])
}
