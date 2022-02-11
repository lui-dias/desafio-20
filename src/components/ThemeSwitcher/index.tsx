import { useContext } from 'react'

import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { ThemeContext } from '../../contexts/ThemeSwitcher'

type Props = {
    className?: string
}

export function ThemeSwitcher({ className }: Props) {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div
            onClick={() => setTheme(theme => (theme === 'light' ? 'dark' : 'light'))}
            className={`${className || ''} cursor-pointer`}
        >
            {theme === 'light' ? (
                <BsFillSunFill className='w-7 h-7 fill-[#fc7a00] drop-shadow-[0_0_2px_#F17602] dark:fill-_primary dark:drop-shadow-none' />
            ) : (
                <BsMoonStarsFill className='w-6 h-6 fill-[#fc7a00] drop-shadow-[0_0_2px_#F17602] dark:fill-_primary dark:drop-shadow-none' />
            )}
        </div>
    )
}
