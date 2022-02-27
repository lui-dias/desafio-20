import { useEffect, useRef, useState } from 'react'
import { Button } from '..'
import { useOutside } from '../../hooks/useOutside'
import { MdContentCopy } from 'react-icons/md'
import { Tick } from '../svg/Tick'

type Props = {
    children: React.ReactNode
}

export function Dropdown({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const parentRef = useRef<HTMLDivElement>(null)
    const ref = useRef<HTMLDivElement>(null)
    useOutside(ref, () => setIsOpen(false))

    useEffect(() => {
        const { left, top, height } = parentRef.current!.getBoundingClientRect()
        const d = ref.current!

        d.style.left = `${left}px`
        d.style.top = `${top - height + scrollY}px`
    }, [isOpen])

    useEffect(() => {
        if (copied) {
            setTimeout(() => setCopied(false), 1000)
        }
    }, [copied])

    return (
        <>
            <div ref={parentRef} onClick={() => setIsOpen(true)}>
                {children}
            </div>

            <div
                ref={ref}
                className={`${
                    isOpen ? '' : 'opacity-0 pointer-events-none'
                } absolute transition-all duration-200 left-0 top-0 bg-white p-4 rounded-lg flex flex-col gap-y-4 dark:bg-gray-800`}
            >
                <div className='flex items-center gap-x-2 border-2 border-gray-300 dark:border-gray-600 pl-2'>
                    <span>luigidias@protonmail.com</span>
                    <button
                        type='button'
                        onClick={() => {
                            navigator.clipboard.writeText('luigidias@protonmail.com')
                            setCopied(true)
                        }}
                        className='p-2 bg-gray-300 dark:bg-gray-600'
                    >
                        {copied ? <Tick className='w-6 h-6' /> : <MdContentCopy className='w-6 h-6' />}
                    </button>
                </div>
                <Button to='mailto:luigidias@protonmail.com'>Enviar email</Button>
            </div>
        </>
    )
}
