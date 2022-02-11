import { useRef, MutableRefObject } from 'react'

export function useUpdateOnChange() {
    const senderRef = useRef<HTMLInputElement>(null)
    const receiverRef = useRef<any>(null)

    function onChange(e: any) {
        if (receiverRef.current) {
            receiverRef.current.textContent = e.target.value
        }
    }

    return [receiverRef, { ref: senderRef, onChange: onChange }] as [
        MutableRefObject<any>,
        { ref: MutableRefObject<HTMLInputElement>; onChange: (e: any) => void }
    ]
}
