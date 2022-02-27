import { LogoSvg } from '..'

export function Footer() {
    return (
        <footer className='container mx-auto text-_gray-light'>
            <div className='flex flex-col lg:flex-row gap-y-6 items-center md:justify-between px-24 py-10'>
                <span>@ 2022 - Iuri Silva</span>

                <div className='flex gap-x-2 items-center whitespace-nowrap'>
                    Powered by
                    <LogoSvg className='fill-[#fc7a00] dark:fill-_primary drop-shadow-[0_0_2px_#F17602] dark:drop-shadow-none w-6 h-6' />
                </div>
            </div>
        </footer>
    )
}
