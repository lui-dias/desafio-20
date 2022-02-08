import Link from 'next/link'
import { useCallback, useContext, useEffect, useState } from 'react'

import Color from 'color'
import dayjs, { Dayjs } from 'dayjs'

import { Looper } from '../components/Looper'
import { GradientButton } from '../components/GradientButton'
import { ExperienciesList } from '../components/Experiencies'
import { CustomImage } from '../components/CustomImage'

import { Twitter } from '../components/svg/Twitter'
import { Codepen } from '../components/svg/Codepen'
import { Facebook } from '../components/svg/Facebook'
import { Figma } from '../components/svg/Figma'
import { Twitch } from '../components/svg/Twitch'
import { Youtube } from '../components/svg/Youtube'
import { LinkedIn } from '../components/svg/LinkedIn'
import { Github } from '../components/svg/Github'
import { DownloadCloud } from '../components/svg/DownloadCloud'
import { Email } from '../components/svg/Email'
import { SvgLink } from '../components/svg/SvgLink'
import { LogoFooter } from '../components/svg/LogoFooter'
import { Neumorph } from '../components/Neumorph'
import { Theme, ThemeContext } from '../contexts/ThemeContext'

const speed = 0.9
const pressedKeys = []

type Experiencie = {
    where: string
    how: string
    between: {
        start: Dayjs
        end: Dayjs | null
    }
    content: string
}

type Project = {
    img: string
    title: string
    description: string
    techs: string[]
    link: string
    github: string
}

const experiencies: Experiencie[] = [
    {
        where: 'Digital House',
        how: 'Professor conteudista em Frontend',
        between: {
            start: dayjs('11-01-2021'),
            end: null,
        },
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.',
    },
    {
        where: 'Código Fonte TV',
        how: 'Professor conteudista em Frontend',
        between: {
            start: dayjs('11-01-2021'),
            end: null,
        },
        content:
            'ing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ip',
    },
    {
        where: 'Zuplae',
        how: 'Professor conteudista em Frontend',
        between: {
            start: dayjs('11-01-2021'),
            end: null,
        },
        content:
            'fessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ips',
    },
    {
        where: 'ContWeb',
        how: 'Professor conteudista em Frontend',
        between: {
            start: dayjs('11-01-2021'),
            end: null,
        },
        content:
            'rue generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always',
    },
    {
        where: 'iuricode',
        how: 'Professor conteudista em Frontend',
        between: {
            start: dayjs('11-01-2021'),
            end: null,
        },
        content:
            '1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
        where: 'Freelancer',
        how: 'Professor conteudista em Frontend',
        between: {
            start: dayjs('11-01-2021'),
            end: null,
        },
        content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys sta',
    },
]

const projects: Project[] = [
    {
        img: 'https://via.placeholder.com/530x200',
        title: 'Project 1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.',
        techs: ['React', 'Typescript', 'Sass'],
        link: 'https://www.google.com',
        github: 'https://www.google.com',
    },
    {
        img: 'https://via.placeholder.com/530x200',
        title: 'Project 2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.',
        techs: ['React', 'Typescript', 'Sass'],
        link: 'https://www.google.com',
        github: 'https://www.google.com',
    },
    {
        img: 'https://via.placeholder.com/530x200',
        title: 'Project 3',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.',
        techs: ['React', 'Typescript', 'Sass'],
        link: 'https://www.google.com',
        github: 'https://www.google.com',
    },
    {
        img: 'https://via.placeholder.com/530x200',
        title: 'Project 4',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.',
        techs: ['React', 'Typescript', 'Sass'],
        link: 'https://www.google.com',
        github: 'https://www.google.com',
    },
]

export default function _() {
    const [primary, setPrimary] = useState(Color('#FF1CF7'))
    const [secondary, setSecondary] = useState(Color('#00F0FF'))

    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        const interval = setInterval(() => {
            setPrimary(primary => primary.rotate(1))
            setSecondary(secondary => secondary.rotate(1))
        }, 100 * speed)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        function a(e: any) {
            if (e.altKey && e.key === 'z') {
                setTheme(theme => (theme === 'light' ? 'dark' : 'light'))
            }
        }

        document.addEventListener('keydown', a)
        return () => {
            document.removeEventListener('keydown', a)
        }
    }, [setTheme])

    useEffect(() => {
        const theme = localStorage.getItem('theme') || ''

        if (theme !== 'light' && theme !== 'dark') {
            setTheme('light')
        } else {
            setTheme(theme)
        }
    }, [setTheme])

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className={theme}>
            <div className='bg-gradient-to-t from-[#f7f8fa] to-[#e6e9ed] dark:from-_dark dark:to-_dark font-inter dark:text-_light flex flex-col min-h-screen overflow-hidden'>
                <header className='container flex justify-center lg:justify-between mx-auto font-medium md:px-24'>
                    <a href='#/' className='text-[#878995] dark:text-_primary py-11 text-2xl hidden lg:block'>
                        Portfólio
                    </a>

                    <LogoFooter className='w-12 h-12 lg:hidden mt-8 fill-[#fc7a00] dark:fill-_primary' />

                    <nav className='lg:flex items-center hidden'>
                        <ul className='flex text-[#878995] dark:text-_gray-light'>
                            <li>
                                <a href='#/' className='py-11 px-8'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='#/' className='py-11 px-8'>
                                    Sobre mim
                                </a>
                            </li>
                            <li>
                                <a href='#/' className='py-11 px-8'>
                                    Experiência
                                </a>
                            </li>
                            <li>
                                <a href='#/' className='py-11 px-8'>
                                    Projetos
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main className='relative mx-auto w-full'>
                    <Looper
                        primary={primary}
                        secondary={secondary}
                        className='absolute w-[1020px] h-[600px] top-[350px] md:top-0 md:left-[clamp(400px,50%,1000px)] '
                    />

                    <section className='font-semibold flex flex-col'>
                        <div className='flex flex-col gap-y-3 container mx-auto md:mt-20 py-24 px-8 md:px-24'>
                            <span className='text-xl uppercase text-center lg:text-left text-[#a7aab7] dark:text-_light'>
                                Olá, eu sou
                            </span>
                            <h1 className='text-[#fc7a00] dark:text-_primary drop-shadow-[0_0_3px_#f17602] dark:drop-shadow-none text-6xl uppercase text-center lg:text-left'>
                                iuri silva
                            </h1>
                            <h2 className='text-xl uppercase text-center lg:text-left text-[#a7aab7] dark:text-_light'>
                                Desenvolvedor Front-end & UI Designer.
                            </h2>
                            <div className='flex flex-col lg:flex-row gap-6 items-center mt-12'>
                                {theme === 'light' ? (
                                    <>
                                        <Neumorph>
                                            <a
                                                href='#/'
                                                className='flex items-center gap-x-4 px-8 py-2 w-full justify-center max-w-[275px] lg:w-auto'
                                            >
                                                <LinkedIn className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                <span>LinkedIn</span>
                                            </a>
                                        </Neumorph>
                                        <Neumorph>
                                            <a
                                                href='#/'
                                                className='flex items-center gap-x-4 px-8 py-2 w-full justify-center max-w-[275px] lg:w-auto'
                                            >
                                                <Github className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                <span>Github</span>
                                            </a>
                                        </Neumorph>
                                    </>
                                ) : (
                                    <>
                                        <GradientButton
                                            href='#/'
                                            className='flex gap-x-4 px-8 py-2 w-full justify-center max-w-[275px] lg:w-auto'
                                            gradient='var(--gradient-purple-from), var(--gradient-purple-to)'
                                        >
                                            <LinkedIn className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                            <span>LinkedIn</span>
                                        </GradientButton>
                                        <GradientButton
                                            href='#/'
                                            className='flex items-center gap-x-4 px-8 py-2 w-full justify-center max-w-[275px] lg:w-auto'
                                            gradient='var(--gradient-purple-from), var(--gradient-purple-to)'
                                            duration={15}
                                            rotateNegative
                                        >
                                            <Github className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                            <span>Github</span>
                                        </GradientButton>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>

                    <section className='dark:bg-_dark-200'>
                        <div className='container mx-auto flex flex-col lg:flex-row justify-between mt-20 md:mt-60 px-8 md:px-24 py-24'>
                            {theme === 'light' ? (
                                <Neumorph className='w-full max-w-[350px] h-[350px] mx-auto lg:mx-0'>
                                    <CustomImage
                                        src='https://via.placeholder.com/350x350'
                                        alt='Me'
                                        className='w-full h-full'
                                    />
                                </Neumorph>
                            ) : (
                                <CustomImage
                                    src='https://via.placeholder.com/350x350'
                                    alt='Me'
                                    className='w-full max-w-[350px] h-[350px] mx-auto lg:mx-0'
                                />
                            )}

                            <div className='flex flex-col lg:w-[40%]'>
                                <h2 className='uppercase mb-10 text-2xl mt-10 mx-auto lg:mx-0 text-[#878995] dark:text-_light'>
                                    sobre mim
                                </h2>

                                <span className='mb-5 font-medium text-xl mx-auto lg:mx-0 text-[#a7aab7] dark:text-_light'>
                                    Guarantã, Brasil
                                </span>

                                <p className='mb-10 font-light dark:text-_gray-light text-[#a7aab7] leading-[2] mx-auto lg:mx-0'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
                                    egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac commodo
                                    dolor, nec bibendum velit.
                                </p>

                                <ul className='grid grid-cols-2 lg:flex gap-y-8 lg:gap-y-0 gap-x-16 lg:gap-x-8 mb-10 mx-auto lg:mx-0'>
                                    <li>
                                        <a href='#/'>
                                            <Twitter className='w-8 h-8 dark:stroke-_primary stroke-[#fc7a00] drop-shadow-[0_0_2px_#F17602] dark:drop-shadow-none' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#/'>
                                            <Twitch className='w-8 h-8 dark:stroke-_primary stroke-[#fc7a00] drop-shadow-[0_0_2px_#F17602] dark:drop-shadow-none' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#/'>
                                            <Youtube className='w-8 h-8 dark:stroke-_primary stroke-[#fc7a00] drop-shadow-[0_0_2px_#F17602] dark:drop-shadow-none' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#/'>
                                            <Figma className='w-8 h-8 dark:stroke-_primary stroke-[#fc7a00] drop-shadow-[0_0_2px_#F17602] dark:drop-shadow-none' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#/'>
                                            <Codepen className='w-8 h-8 dark:stroke-_primary stroke-[#fc7a00] drop-shadow-[0_0_2px_#F17602] dark:drop-shadow-none' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#/'>
                                            <Facebook className='w-8 h-8 dark:stroke-_primary stroke-[#fc7a00] drop-shadow-[0_0_2px_#F17602] dark:drop-shadow-none' />
                                        </a>
                                    </li>
                                </ul>

                                <div className='flex flex-col lg:flex-row gap-x-10 gap-y-6'>
                                    {theme === 'light' ? (
                                        <>
                                            <Neumorph>
                                                <a
                                                    href='#/'
                                                    className='flex items-center gap-x-4 px-8 py-3 max-w-[275px] justify-center w-full mx-auto lg:mx-0 lg:w-auto'
                                                >
                                                    <DownloadCloud className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                    <span>Currículo</span>
                                                </a>
                                            </Neumorph>
                                            <Neumorph>
                                                <a
                                                    href='#/'
                                                    className='flex items-center gap-x-4 px-8 py-3 max-w-[275px] justify-center w-full mx-auto lg:mx-0 lg:w-auto'
                                                >
                                                    <Email className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                    <span>E-mail</span>
                                                </a>
                                            </Neumorph>
                                        </>
                                    ) : (
                                        <>
                                            <GradientButton
                                                href='#/'
                                                className='flex items-center gap-x-4 px-8 py-3 max-w-[275px] justify-center w-full mx-auto lg:mx-0 lg:w-auto'
                                                gradient='var(--gradient-purple-from), var(--gradient-purple-to)'
                                            >
                                                <DownloadCloud className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                <span>Currículo</span>
                                            </GradientButton>
                                            <GradientButton
                                                href='#/'
                                                className='flex items-center gap-x-4 px-8 py-3 max-w-[275px] justify-center w-full mx-auto lg:mx-0 lg:w-auto whitespace-nowrap'
                                                gradient='var(--gradient-purple-from), var(--gradient-purple-to)'
                                                duration={15}
                                                rotateNegative
                                            >
                                                <Email className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                <span>E-mail</span>
                                            </GradientButton>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className='container mx-auto py-24 px-8 md:px-24'>
                            <h2 className='uppercase mb-7 text-[#878995] dark:text-_light'>Experiência</h2>

                            <ExperienciesList experiencies={experiencies} />
                        </div>
                    </section>

                    <section className='dark:bg-_dark-200'>
                        <div className='container mx-auto px-8 py-24 md:px-24'>
                            <h2 className='uppercase mb-8 text-[#878995]'>Projetos</h2>

                            <nav>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-32'>
                                    {projects.map(
                                        ({ img, title, description, link, techs, github }, index) => (
                                            <li key={title}>
                                                {theme === 'light' ? (
                                                    <Neumorph className='max-w-[530px] h-[200px]'>
                                                        <CustomImage
                                                            src={img}
                                                            alt={title}
                                                            className='w-full h-full'
                                                        />
                                                    </Neumorph>
                                                ) : (
                                                    <CustomImage
                                                        src={img}
                                                        alt={title}
                                                        className='w-full max-w-[530px] h-[200px]'
                                                    />
                                                )}

                                                <div className='flex flex-col items-start mt-10 max-w-[75%]'>
                                                    <h3 className='text-2xl font-poppins font-bold mb-8'>
                                                        {title}
                                                    </h3>
                                                    <p className='font-light text-[#a7aab7] mb-7'>
                                                        {description}
                                                    </p>
                                                    <ul className='mb-8 flex gap-x-6'>
                                                        {techs.map(tech => (
                                                            <li
                                                                key={tech}
                                                                className='font-medium text-sm dark:text-_primary text-[#fc7a00] drop-shadow-[0_0_2px_#f1a45b] dark:drop-shadow-none'
                                                            >
                                                                {tech}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    {theme === 'light' ? (
                                                        <Neumorph>
                                                            <Link href='#/' passHref>
                                                                <a className='flex gap-x-4 px-8 py-3'>
                                                                    <SvgLink className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                                    <span>Visualizar</span>
                                                                </a>
                                                            </Link>
                                                        </Neumorph>
                                                    ) : (
                                                        <GradientButton
                                                            href={link}
                                                            gradient='var(--gradient-purple-from),var(--gradient-purple-to)'
                                                            duration={index % 2 === 0 ? 15 : undefined}
                                                            rotateNegative={index % 2 === 0}
                                                        >
                                                            <SvgLink className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                            <span>Visualizar</span>
                                                        </GradientButton>
                                                    )}
                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </section>
                </main>

                <footer className='container mx-auto text-_gray-light'>
                    <div className='flex flex-col lg:flex-row gap-y-6 items-center md:justify-between px-20 py-10'>
                        <span>@ 2022 - Iuri Silva</span>

                        <div className='flex gap-x-2 items-center whitespace-nowrap'>
                            Powered by
                            <LogoFooter className='fill-[#fc7a00] dark:fill-_primary drop-shadow-[0_0_2px_#F17602] dark:drop-shadow-none w-6 h-6' />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
