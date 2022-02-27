import { ConfigPage, Logo, ThemeSwitcher } from '..'

const links = [
    { to: '/', text: 'Home' },
    { to: '#about-me', text: 'Sobre' },
    { to: '#experiences', text: 'Experiências' },
    { to: '#projects', text: 'Projetos' },
    { to: '#contact', text: 'Contato' },
]

type Props = {
    editMode?: boolean
}

export function Header({ editMode }: Props) {
    return (
        <header className='container flex justify-center lg:justify-between mx-auto font-medium lg:px-24'>
            <Logo editMode={editMode} />

            <div className='lg:flex items-center hidden'>
                <nav className='lg:flex items-center hidden'>
                    <ul className='flex text-[#878995] dark:text-_gray-light items-center'>
                        {links.map(({ to, text }) => (
                            <li key={text}>
                                <a href={to} className='py-11 px-4 xl:px-8'>
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <span className='w-px h-6 bg-[#c9c4c4]' />

                <ThemeSwitcher className='px-8 py-10' />
                <ConfigPage />
            </div>
        </header>
    )
}
