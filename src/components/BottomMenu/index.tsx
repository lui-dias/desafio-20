import { useEffect } from 'react'

import { ThemeSwitcher } from '../ThemeSwitcher'

export function BottomMenu() {
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
        <div className='bottom-menu fixed w-screen h-[7vh] bg-[#f1f1f1] dark:bg-_dark-200 top-full z-50 rounded-t-lg lg:hidden transition-[top_0.2s-easeIn]'>
            <ul className='flex justify-around items-center w-full h-full px-4'>
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </div>
    )
}
