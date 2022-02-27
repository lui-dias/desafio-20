import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeSwitcher'
import { Neumorph } from '../Neumorph'
import Link from 'next/link'
import { GradientButton } from './GradientButton'

type Props = {
    children: React.ReactNode
    className?: string
    insideClassName?: string
    to?: string
    filename?: string
}

export function Button({ children, to, className, insideClassName, filename }: Props) {
    const { theme } = useContext(ThemeContext)
    insideClassName ||= ''
    className ||= ''

    function LightTheme() {
        if (to && filename) {
            return (
                <Neumorph>
                    <a
                        download={filename}
                        href={to}
                        className={`flex justify-center items-center gap-x-3 font-inter py-3 px-12 rounded ${insideClassName}`}
                    >
                        {children}
                    </a>
                </Neumorph>
            )
        } else if (to) {
            return (
                <Neumorph>
                    <Link href={to} passHref>
                        <a
                            className={`flex justify-center items-center gap-x-3 font-inter py-3 px-12 rounded ${insideClassName}`}
                        >
                            {children}
                        </a>
                    </Link>
                </Neumorph>
            )
        }

        return (
            <Neumorph>
                <button
                    type='submit'
                    className={`flex justify-center items-center gap-x-3 font-inter py-3 px-12 rounded ${insideClassName}`}
                >
                    {children}
                </button>
            </Neumorph>
        )
    }

    function DarkTheme() {
        if (to && filename) {
            return (
                <GradientButton gradient='var(--gradient-purple-from), var(--gradient-purple-to)'>
                    <a
                        download={filename}
                        className={`flex justify-center items-center max-w-[275px] gap-x-4 px-11 py-2 ${insideClassName}`}
                    >
                        {children}
                    </a>
                </GradientButton>
            )
        } else if (to) {
            return (
                <GradientButton gradient='var(--gradient-purple-from), var(--gradient-purple-to)'>
                    <Link href={to} passHref>
                        <a
                            className={`flex justify-center items-center max-w-[275px] gap-x-4 px-11 py-2 ${insideClassName}`}
                        >
                            {children}
                        </a>
                    </Link>
                </GradientButton>
            )
        } else {
            return (
                <GradientButton
                    className={`flex justify-center items-center max-w-[275px] gap-x-4 py-2 px-12 ${insideClassName}`}
                    gradient='var(--gradient-purple-from), var(--gradient-purple-to)'
                >
                    {children}
                </GradientButton>
            )
        }
    }

    return theme === 'light' ? <LightTheme /> : <DarkTheme />
}
