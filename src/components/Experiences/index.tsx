import { Dayjs } from 'dayjs'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/ThemeSwitcher'
import { Neumorph } from '../Neumorph'

type Experience = {
    where: string
    how: string
    between: {
        start: Dayjs
        end: Dayjs | null
    }
    content: string
}

type Props = {
    experiences: Experience[]
}

type UlProps = {
    experiences: Experience[]
    experienceIndex: number
}

type NavProps = {
    experiences: Experience[]
    experienceIndex: number
    setExperienceIndex: (index: number) => void
}

const Ul = styled.ul<UlProps>`
    position: relative;
    overflow-x: auto;

    &::after {
        content: '';
        position: absolute;
        transition: 0.2s ease-in-out;
    }

    @media (min-width: 1024px) {
        &::after {
            width: 4px;
            height: ${props => `calc(100% / ${props.experiences.length})`};
            left: 0;
            top: ${props => `calc(100% / ${props.experiences.length} * ${props.experienceIndex})`};
        }
    }
`

function Nav({ experiences, experienceIndex, setExperienceIndex }: NavProps) {
    return (
        <nav className='w-full lg:w-auto'>
            <Ul
                experiences={experiences}
                experienceIndex={experienceIndex}
                className='dark:border-r-[1px] dark:border-b-[1px] dark:border-[rgba(255,255,255,0.05)] flex lg:flex-col after:bg-[#f17602] dark:after:bg-_primary'
            >
                {experiences.map(({ where }, index) => (
                    <li
                        key={index}
                        className={`dark:bg-_dark-200 px-9 py-4 select-none cursor-pointer whitespace-nowrap transition-all ${
                            experienceIndex === index
                                ? 'text-[#f17602] dark:text-_light drop-shadow-[0_0_1px_#f19c4c] dark:drop-shadow-none'
                                : 'text-[#8C8C8C]'
                        }`}
                        onClick={() => setExperienceIndex(index)}
                    >
                        {where}
                    </li>
                ))}
            </Ul>
        </nav>
    )
}

export function ExperiencesList({ experiences }: Props) {
    const [experienceIndex, setExperienceIndex] = useState(0)
    const actualExperience = experiences[experienceIndex]

    const { theme } = useContext(ThemeContext)

    return (
        <div className='flex flex-col lg:flex-row gap-y-12'>
            {theme === 'light' ? (
                <Neumorph disableClickEffect disablePressEffect>
                    <Nav
                        experiences={experiences}
                        experienceIndex={experienceIndex}
                        setExperienceIndex={setExperienceIndex}
                    />
                </Neumorph>
            ) : (
                <Nav
                    experiences={experiences}
                    experienceIndex={experienceIndex}
                    setExperienceIndex={setExperienceIndex}
                />
            )}

            <div className='px-4 md:px-20 max-w-[1000px]'>
                <div className='mb-7 flex flex-col xl:flex-row gap-y-2 justify-between'>
                    <span className='font-medium text-2xl'>{actualExperience.how}</span>
                    <span className='font-medium text-[#878995] dark:text-_light'>{`${actualExperience.between.start.format(
                        'MMM YYYY'
                    )} - ${
                        actualExperience.between.end
                            ? actualExperience.between.end.format('MMM YYYY')
                            : 'Atual'
                    }`}</span>
                </div>
                <div className='flex flex-col gap-y-6'>
                    <span className='text-[#f17602] dark:text-_primary'>{actualExperience.how}</span>
                    <p className='font-light text-[#a7aab7]'>{actualExperience.content}</p>
                </div>
            </div>
        </div>
    )
}
