import Link from 'next/link'
import { LogoSvg } from '../svg/LogoSvg'

type Props = {
    editMode?: boolean
}

export function Logo({ editMode }: Props) {
    return (
        <>
            <Link href='/' passHref>
                <a className='text-[#878995] dark:text-_primary py-11 text-2xl hidden lg:block'>
                    {editMode ? (
                        <div className='flex flex-col'>
                            Portfólio
                            <span className='text-sm relative left-8'>in Edit Mode</span>
                        </div>
                    ) : (
                        <span>Portfólio</span>
                    )}
                </a>
            </Link>

            <LogoSvg className='w-12 h-12 lg:hidden mt-8 fill-[#fc7a00] dark:fill-_primary' />
        </>
    )
}
