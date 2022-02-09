import { Dispatch, SetStateAction, useEffect } from 'react'

import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

type Theme = 'light' | 'dark'

type Props = {
    theme: Theme
    setTheme: Dispatch<SetStateAction<Theme>>
}

export function BottomMenu({ theme, setTheme }: Props) {
    useEffect(() => {
        const maxScrollY = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const menu = document.querySelector('.bottom-menu') as any

        function a(e: any) {
            const scrollY = window.scrollY

            if (scrollY > 10 && scrollY < maxScrollY - 10) {
                menu.style.top = 'calc(100% - 7vh)'
            } else {
                menu.style.top = '100%'
            }
        }

        document.addEventListener('scroll', a)
        return () => {
            document.removeEventListener('scroll', a)
        }
    }, [])

    return (
        <div className='bottom-menu fixed w-screen h-[7vh] bg-[#e6e9ed] dark:bg-_dark-200 top-full z-50 rounded-t-lg lg:hidden transition-[top_0.2s]'>
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
