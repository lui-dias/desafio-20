import { NextPageContext } from 'next'
import { useContext, useEffect, useRef } from 'react'

import dayjs, { Dayjs } from 'dayjs'
import nookies from 'nookies'
import { NextSeo } from 'next-seo'

import { Theme, ThemeContext } from '../contexts/ThemeSwitcher'
import { LooperProvider } from '../contexts/Looper'

import {
    BottomMenu,
    Button,
    Codepen,
    CustomImage,
    DownloadCloud,
    Email,
    ExperiencesList,
    Facebook,
    Figma,
    Form,
    Github,
    Header,
    Input,
    LinkedIn,
    Looper,
    SvgLink,
    TextArea,
    Twitch,
    Twitter,
    Youtube,
} from '../components'
import { Footer } from '../components/Footer'
import { Dropdown } from '../components/Dropdown'

type Props = {
    theme: 'light' | 'dark'
    data: {
        primary: string
        secondary: string
        speed: number
        delta: number
        delay: number
        colorSpeed: number
        tick: number
    }
}

type Experience = {
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
}

const experiences: Experience[] = [
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
    },
    {
        img: 'https://via.placeholder.com/530x200',
        title: 'Project 2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.',
        techs: ['React', 'Typescript', 'Sass'],
        link: 'https://www.google.com',
    },
    {
        img: 'https://via.placeholder.com/530x200',
        title: 'Project 3',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.',
        techs: ['React', 'Typescript', 'Sass'],
        link: 'https://www.google.com',
    },
    {
        img: 'https://via.placeholder.com/530x200',
        title: 'Project 4',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.',
        techs: ['React', 'Typescript', 'Sass'],
        link: 'https://www.google.com',
    },
]

// prettier-ignore
export async function getServerSideProps(ctx: NextPageContext) {
    let { theme, speed, delta, delay, colorSpeed, tick, primary, secondary } = nookies.get(ctx)

    return {
        props: {
            data: {
                theme:      theme || 'light',
                speed:      Number(speed || 0.025),
                delta:      Number(delta || 20),
                delay:      Number(delay || 85),
                colorSpeed: Number(colorSpeed || 0.25),
                tick:       Number(tick || 5),
                primary:    primary || '#FF1CF7',
                secondary:  secondary || '#00F0FF',
            },
        },
    }
}

export default function _({ theme: getServerSidePropsTheme, data }: Props) {
    const { theme, setTheme } = useContext(ThemeContext)
    const emailButtonDropdownRef = useRef<HTMLDivElement>(null)

    const nameInputRef = useRef<HTMLInputElement>(null)
    const contentInputRef = useRef<HTMLInputElement>(null)

    function onSubmit(e: any) {
        e.preventDefault()

        const name = nameInputRef.current?.value
        const content = contentInputRef.current?.value

        console.log(name, content)
    }

    /*___________________________________________
    ||
    ||      Altera o tema ao apertar Alt + z
    ||___________________________________________
    */

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

    /*______________________________________________________________
    ||
    ||      Define o tema do site pelo tema definito no cookie
    ||      Se o tema não existir no cookie
    ||          |> Usa o tema recebido do getServerSideProps
    ||______________________________________________________________
    */

    useEffect(() => {
        const theme = (nookies.get(null).theme || 'light') as Theme

        if (!['light', 'dark'].includes(theme)) {
            setTheme(getServerSidePropsTheme)
        } else {
            setTheme(theme)
        }
    }, [getServerSidePropsTheme, setTheme])

    /*_______________________________________________________________
    ||
    ||      Quando o tema é alterado, atualiza o tema no cookie
    ||_______________________________________________________________
    */

    useEffect(() => {
        nookies.set(null, 'theme', theme, {
            maxAge: 31536000,
        })
    }, [theme])

    return (
        <>
            <NextSeo title='Desafio 20' description='Um lindo site feito para o desafio 20 do codelândia' />
            <div className={theme}>
                <BottomMenu />

                <LooperProvider data={data}>
                    <div className='bg-gradient-to-t from-[#fcfcfc] to-[#f3f3f3] dark:from-_dark dark:to-_dark font-inter dark:text-_light flex flex-col min-h-screen overflow-hidden'>
                        {/*
                            ██   ██ ███████  █████  ██████  ███████ ██████
                            ██   ██ ██      ██   ██ ██   ██ ██      ██   ██
                            ███████ █████   ███████ ██   ██ █████   ██████
                            ██   ██ ██      ██   ██ ██   ██ ██      ██   ██
                            ██   ██ ███████ ██   ██ ██████  ███████ ██   ██
                        */}

                        <Header />

                        <main className='relative mx-auto w-full'>
                            <Looper className='absolute w-[1020px] h-[600px] top-[350px] lg:top-0 md:left-[400px] 2xl:left-[clamp(500px,50%,1000px)]' />

                            {/*
                                ██   ██ ███████ ██████   ██████
                                ██   ██ ██      ██   ██ ██    ██
                                ███████ █████   ██████  ██    ██
                                ██   ██ ██      ██   ██ ██    ██
                                ██   ██ ███████ ██   ██  ██████
                            */}

                            <section className='font-semibold flex flex-col'>
                                <div className='flex flex-col gap-y-3 container mx-auto md:mt-20 py-24 px-8 md:px-24'>
                                    <span className='text-xl uppercase text-center lg:text-left text-[#979aa5] dark:text-_light'>
                                        Olá, eu sou
                                    </span>
                                    <h1 className='text-[#fc7a00] dark:text-_primary drop-shadow-[0_0_3px_#f17602] dark:drop-shadow-none text-6xl uppercase text-center lg:text-left'>
                                        Iuri Silva
                                    </h1>
                                    <h2 className='text-xl uppercase text-center lg:text-left text-[#979aa5] dark:text-_light'>
                                        Desenvolvedor Front-end & UI Designer.
                                    </h2>

                                    <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6 mt-12 w-[275px] mx-auto lg:mx-0'>
                                        <Button to='https://www.linkedin.com/in/luigi-dias-20133a225/'>
                                            <LinkedIn className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                            <span>LinkedIn</span>
                                        </Button>
                                        <Button to='https://github.com/lui-dias'>
                                            <Github className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                            <span>Github</span>
                                        </Button>
                                    </div>
                                </div>
                            </section>

                            {/*
                                 █████  ██████   ██████  ██    ██ ████████     ███    ███ ███████
                                ██   ██ ██   ██ ██    ██ ██    ██    ██        ████  ████ ██
                                ███████ ██████  ██    ██ ██    ██    ██        ██ ████ ██ █████
                                ██   ██ ██   ██ ██    ██ ██    ██    ██        ██  ██  ██ ██
                                ██   ██ ██████   ██████   ██████     ██        ██      ██ ███████
                            */}

                            <section id='about-me' className='dark:bg-_dark-200'>
                                <div className='container mx-auto flex flex-col lg:flex-row justify-between mt-20 md:mt-60 px-8 md:px-24 py-24'>
                                    <CustomImage
                                        src='https://via.placeholder.com/350x350'
                                        alt='Me'
                                        className='w-full max-w-[350px] h-[350px] mx-auto lg:mx-0'
                                    />

                                    <div className='flex flex-col lg:w-[40%]'>
                                        <h2 className='uppercase mb-10 text-2xl mt-10 mx-auto lg:mx-0 text-[#878995] dark:text-_light'>
                                            sobre mim
                                        </h2>

                                        <span className='mb-5 font-medium text-xl mx-auto lg:mx-0 text-[#979aa5] dark:text-_light'>
                                            Guarantã, Brasil
                                        </span>

                                        <p className='mb-10 font-light dark:text-_gray-light text-[#979aa5] leading-[2] mx-auto lg:mx-0 text-center lg:text-left'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                            id egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean
                                            ac commodo dolor, nec bibendum velit.
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

                                        <div className='flex flex-col lg:flex-row gap-x-10 gap-y-6 w-[275px] items-center mx-auto lg:mx-0 lg:w-auto'>
                                            <Button to='/Curriculo.pdf' filename='Curriculo__Luigi.pdf'>
                                                <DownloadCloud className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                <span>Currículo</span>
                                            </Button>

                                            <Dropdown>
                                                <Button>
                                                    <Email className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                    <span>E-mail</span>
                                                </Button>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/*
                                ███████ ██   ██ ██████  ███████ ██████  ██ ███████ ███    ██  ██████ ███████
                                ██       ██ ██  ██   ██ ██      ██   ██ ██ ██      ████   ██ ██      ██
                                █████     ███   ██████  █████   ██████  ██ █████   ██ ██  ██ ██      █████
                                ██       ██ ██  ██      ██      ██   ██ ██ ██      ██  ██ ██ ██      ██
                                ███████ ██   ██ ██      ███████ ██   ██ ██ ███████ ██   ████  ██████ ███████
                            */}

                            <section id='experiences'>
                                <div className='container mx-auto py-24 px-8 md:px-24'>
                                    <h2 className='uppercase mb-7 text-[#878995] dark:text-_light'>
                                        Experiência
                                    </h2>

                                    <ExperiencesList experiences={experiences} />
                                </div>
                            </section>

                            {/*
                                ██████  ██████   ██████       ██ ███████  ██████ ████████ ███████
                                ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██
                                ██████  ██████  ██    ██      ██ █████   ██         ██    ███████
                                ██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██
                                ██      ██   ██  ██████   █████  ███████  ██████    ██    ███████
                            */}

                            <section id='projects' className='dark:bg-_dark-200'>
                                <div className='container mx-auto px-8 py-24 md:px-24'>
                                    <h2 className='uppercase mb-8 text-[#878995] dark:text-_light'>
                                        Projetos
                                    </h2>

                                    <nav>
                                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-32'>
                                            {projects.map(({ img, title, description, link, techs }) => (
                                                <li key={title}>
                                                    <CustomImage
                                                        src={img}
                                                        alt={title}
                                                        className='w-full max-w-[530px] h-[200px]'
                                                    />

                                                    <div className='flex flex-col items-center lg:items-start mt-10 mx-auto lg:mx-0'>
                                                        <h3 className='text-2xl font-poppins font-bold mb-8 mx-auto lg:mx-0'>
                                                            {title}
                                                        </h3>
                                                        <p className='font-light text-[#979aa5] mb-7 text-center lg:text-left'>
                                                            {description}
                                                        </p>
                                                        <ul className='mb-8 flex gap-x-6 mx-auto lg:mx-0'>
                                                            {techs.map(tech => (
                                                                <li
                                                                    key={tech}
                                                                    className='font-medium text-sm dark:text-_primary text-[#fc7a00] drop-shadow-[0_0_2px_#f1a45b] dark:drop-shadow-none'
                                                                >
                                                                    {tech}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <Button to={link} className='mx-auto lg:mx-0'>
                                                            <SvgLink className='w-6 h-6 select-none stroke-_dark dark:stroke-_light' />
                                                            <span>Visualizar</span>
                                                        </Button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </section>

                            {/*
                                ██████  ██████  ███    ██ ████████  █████   ██████ ████████
                                ██      ██    ██ ████   ██    ██    ██   ██ ██         ██
                                ██      ██    ██ ██ ██  ██    ██    ███████ ██         ██
                                ██      ██    ██ ██  ██ ██    ██    ██   ██ ██         ██
                                ██████  ██████   ██   ████    ██    ██   ██  ██████    ██
                            */}

                            <section id='contact'>
                                <Form onSubmit={onSubmit}>
                                    <Input placeholder='Nome' ref={nameInputRef} required />

                                    <TextArea placeholder='Digite a mensagem' ref={contentInputRef} />
                                    <Button>Enviar</Button>
                                </Form>
                            </section>
                        </main>

                        <Footer />
                    </div>
                </LooperProvider>
            </div>
        </>
    )
}
