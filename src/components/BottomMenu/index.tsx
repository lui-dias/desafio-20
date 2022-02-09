import { Dispatch, SetStateAction } from 'react'

import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

type Theme = 'light' | 'dark'

type Props = {
    theme: Theme
    setTheme: Dispatch<SetStateAction<Theme>>
}

export function BottomMenu({ theme, setTheme }: Props) {
    return (
        <div className='menu fixed w-screen h-[5vh] bg-[#e6e9ed] dark:bg-_dark-200 top-[calc(100%-5vh)] z-50 rounded-t-lg'>
            <ul className='flex justify-around items-center w-full h-full px-4'>
                <li onClick={() => setTheme(theme => (theme === 'light' ? 'dark' : 'light'))}>
                    {theme === 'light' ? (
                        <BsFillSunFill className='w-7 h-7 fill-[#fc7a00] drop-shadow-[0_0_2px_#F17602] dark:fill-_primary dark:drop-shadow-none' />
                    ) : (
                        <BsMoonStarsFill className='w-6 h-6 fill-[#fc7a00] drop-shadow-[0_0_2px_#F17602] dark:fill-_primary dark:drop-shadow-none' />
                    )}
                </li>
            </ul>
        </div>
    )
}
